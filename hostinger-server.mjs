/**
 * hostinger-server.mjs
 * ─────────────────────────────────────────────────────────────
 * A standalone Node.js HTTP server that wraps the Cloudflare Workers
 * build output so it runs on Hostinger (or any Node.js host).
 *
 * Why this file exists:
 *  - The app is built with @cloudflare/vite-plugin which outputs a
 *    Cloudflare Worker bundle (fetch-handler style, not http.Server).
 *  - Cloudflare Workers handle CJS/ESM interop internally, so bundled
 *    require() calls are fine there. On plain Node.js they throw
 *    "require is not defined" in ESM mode.
 *  - This file (1) polyfills require(), (2) loads .env, (3) starts a
 *    proper HTTP server that calls the Worker's fetch handler.
 *
 * Hostinger setup:
 *   Start command → node hostinger-server.mjs
 *   Port          → set PORT env var in Hostinger panel (default 3000)
 * ─────────────────────────────────────────────────────────────
 */

import { createRequire } from "node:module";
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { join, extname } from "node:path";
import { fileURLToPath } from "node:url";

// ─── 1. Polyfill require() so CJS modules inside the Worker bundle work ───
if (typeof globalThis.require === "undefined") {
  globalThis.require = createRequire(import.meta.url);
}

const __dirname = fileURLToPath(new URL(".", import.meta.url));

// ─── 2. Load .env file into process.env ───
async function loadEnvFile(filePath) {
  try {
    const content = await readFile(filePath, "utf-8");
    for (const line of content.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eqIdx = trimmed.indexOf("=");
      if (eqIdx === -1) continue;
      const key = trimmed.slice(0, eqIdx).trim();
      let val = trimmed.slice(eqIdx + 1).trim();
      // Strip surrounding quotes (single or double)
      if (
        (val.startsWith("'") && val.endsWith("'")) ||
        (val.startsWith('"') && val.endsWith('"'))
      ) {
        val = val.slice(1, -1);
      }
      // Don't override variables already set by the OS / Hostinger panel
      if (!process.env[key]) {
        process.env[key] = val;
      }
    }
    return true;
  } catch {
    return false;
  }
}

// Try .env in the server's own directory first, then project root
const loaded =
  (await loadEnvFile(join(__dirname, ".env"))) ||
  (await loadEnvFile(join(__dirname, "dist", "server", ".env")));

if (!process.env.MONGODB_URI) {
  console.warn(
    "[server] WARNING: MONGODB_URI is not set. Check your .env file or Hostinger environment variables."
  );
} else {
  console.log("[server] ✓ MONGODB_URI loaded");
}

// ─── 3. Import the Cloudflare Worker bundle ───
const workerMod = await import("./dist/server/index.js");
const worker = workerMod.default;

if (typeof worker?.fetch !== "function") {
  throw new Error(
    "[server] Worker bundle did not export a fetch handler. Re-run `npm run build`."
  );
}

// ─── 4. Static file MIME types ───
const MIME = {
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".webp": "image/webp",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml",
};

const CLIENT_DIR = join(__dirname, "dist", "client");

// ─── 5. Static file handler ───
async function serveStatic(pathname, res) {
  try {
    let filePath = join(CLIENT_DIR, pathname);
    let info = await stat(filePath).catch(() => null);

    if (info?.isDirectory()) {
      filePath = join(filePath, "index.html");
      info = await stat(filePath).catch(() => null);
    }

    if (!info?.isFile()) return false;

    const content = await readFile(filePath);
    const ext = extname(filePath).toLowerCase();

    // Hashed asset filenames get long-term caching
    const isHashed = /[\.\-][a-zA-Z0-9]{8,}\.\w+$/.test(filePath);
    const cacheControl = isHashed
      ? "public, max-age=31536000, immutable"
      : "public, max-age=3600";

    res.writeHead(200, {
      "Content-Type": MIME[ext] || "application/octet-stream",
      "Cache-Control": cacheControl,
      "Content-Length": String(content.length),
    });
    res.end(content);
    return true;
  } catch {
    return false;
  }
}

// ─── 6. Main HTTP server ───
const server = createServer(async (req, res) => {
  try {
    const host = req.headers.host || "localhost";
    const proto = req.headers["x-forwarded-proto"] || "http";
    const url = new URL(req.url || "/", `${proto}://${host}`);

    // Serve static files from dist/client (JS, CSS, images, fonts…)
    if (await serveStatic(url.pathname, res)) return;

    // Buffer request body (needed for POST/PUT/PATCH)
    const bodyChunks = [];
    for await (const chunk of req) bodyChunks.push(chunk);
    const body = bodyChunks.length > 0 ? Buffer.concat(bodyChunks) : undefined;

    // Build a WHATWG-compatible Request object for the Worker
    const fetchHeaders = new Headers();
    for (const [k, v] of Object.entries(req.headers)) {
      if (v) fetchHeaders.set(k, Array.isArray(v) ? v.join(", ") : v);
    }

    const hasBody =
      body?.length &&
      req.method !== "GET" &&
      req.method !== "HEAD";

    const fetchReq = new Request(url.toString(), {
      method: req.method || "GET",
      headers: fetchHeaders,
      ...(hasBody ? { body, duplex: "half" } : {}),
    });

    // Build the CF env bindings object (process.env acts as the bindings)
    const cfEnv = {
      ...process.env,
      // Stub ASSETS binding so TanStack Start doesn't crash when it
      // tries to serve the client bundle through the Worker
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    };

    // Call the Worker's fetch handler
    const fetchRes = await worker.fetch(fetchReq, cfEnv, {
      waitUntil: () => {},
      passThroughOnException: () => {},
    });

    // Forward response headers
    const outHeaders = {};
    fetchRes.headers.forEach((v, k) => {
      outHeaders[k] = v;
    });

    res.writeHead(fetchRes.status, outHeaders);

    // Stream response body
    if (fetchRes.body) {
      const reader = fetchRes.body.getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        res.write(value);
      }
      res.end();
    } else {
      res.end();
    }
  } catch (err) {
    console.error("[server] Request error:", err);
    if (!res.headersSent) {
      res.writeHead(500, { "Content-Type": "text/plain" });
    }
    res.end("Internal Server Error");
  }
});

// ─── 7. Listen ───
const PORT = parseInt(
  process.env.PORT || process.env.APP_PORT || "3000",
  10
);

server.listen(PORT, "0.0.0.0", () => {
  console.log(`\n✓ Pure Technology server is running`);
  console.log(`  http://0.0.0.0:${PORT}\n`);
});

server.on("error", (err) => {
  console.error("[server] Fatal error:", err);
  process.exit(1);
});
