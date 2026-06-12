/**
 * Plain Node.js server for Hostinger.
 *
 * Build first with:
 *   npm run build
 *
 * Then start with:
 *   npm start
 *
 * Hostinger setup:
 *   Startup file: hostinger-server.mjs
 *   Node version: 20.19+
 */

import { createRequire } from "node:module";
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { join, extname, normalize, sep } from "node:path";
import { fileURLToPath } from "node:url";

if (typeof globalThis.require === "undefined") {
  globalThis.require = createRequire(import.meta.url);
}

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const CLIENT_DIR = join(__dirname, "dist", "client");
const SERVER_ENTRY = "./dist/server/server.js";

function logStartup(message, value = "") {
  console.log(`[startup] ${message}${value ? ` ${value}` : ""}`);
}

async function exists(path) {
  return Boolean(await stat(path).catch(() => null));
}

function nodeVersionIsSupported() {
  const [major, minor] = process.versions.node.split(".").map(Number);
  return major > 20 || (major === 20 && minor >= 19);
}

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
      if (
        (val.startsWith("'") && val.endsWith("'")) ||
        (val.startsWith('"') && val.endsWith('"'))
      ) {
        val = val.slice(1, -1);
      }

      if (!process.env[key]) {
        process.env[key] = val;
      }
    }
    return true;
  } catch {
    return false;
  }
}

logStartup("cwd:", process.cwd());
logStartup("server dir:", __dirname);
logStartup("node:", process.version);
logStartup("port env:", process.env.PORT || process.env.APP_PORT || "not-set");

let startupError = "";

if (!nodeVersionIsSupported()) {
  startupError = `Unsupported Node.js ${process.version}. Hostinger must use Node.js 20.19.0 or higher.`;
  console.error(`[startup] ${startupError}`);
}

const envLoaded = await loadEnvFile(join(__dirname, ".env"));
logStartup(".env loaded:", String(envLoaded));

if (!process.env.MONGODB_URI) {
  console.warn(
    "[server] WARNING: MONGODB_URI is not set. Add it in Hostinger environment variables or .env."
  );
} else {
  console.log("[server] MONGODB_URI loaded");
}

logStartup("dist/client exists:", String(await exists(CLIENT_DIR)));
logStartup("dist/server/server.js exists:", String(await exists(join(__dirname, "dist", "server", "server.js"))));

let app;
if (!startupError) {
  try {
    const serverMod = await import(SERVER_ENTRY);
    app = serverMod.default;
  } catch (error) {
    startupError = `Failed to import ${SERVER_ENTRY}. Make sure npm run build completed and dist/ was uploaded. ${
      error instanceof Error ? error.message : String(error)
    }`;
    console.error(`[startup] ${startupError}`);
    console.error(error);
  }
}

if (!startupError && typeof app?.fetch !== "function") {
  startupError = `${SERVER_ENTRY} did not export a fetch handler. Run npm run build again.`;
  console.error(`[startup] ${startupError}`);
}

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

function isInside(parent, child) {
  const parentPath = normalize(parent);
  const childPath = normalize(child);
  return childPath === parentPath || childPath.startsWith(`${parentPath}${sep}`);
}

async function serveStatic(pathname, res) {
  try {
    const staticPathname = pathname === "/favicon.ico" ? "/favicon.png" : pathname;
    const decodedPathname = decodeURIComponent(staticPathname);
    let filePath = join(CLIENT_DIR, decodedPathname);

    if (!isInside(CLIENT_DIR, filePath)) {
      return false;
    }

    let info = await stat(filePath).catch(() => null);
    if (info?.isDirectory()) {
      filePath = join(filePath, "index.html");
      info = await stat(filePath).catch(() => null);
    }

    if (!info?.isFile()) return false;

    const content = await readFile(filePath);
    const ext = extname(filePath).toLowerCase();
    const isHashed = /[.-][a-zA-Z0-9_-]{8,}\.\w+$/.test(filePath);

    res.writeHead(200, {
      "Content-Type": MIME[ext] || "application/octet-stream",
      "Cache-Control": isHashed
        ? "public, max-age=31536000, immutable"
        : "public, max-age=3600",
      "Content-Length": String(content.length),
    });
    res.end(content);
    return true;
  } catch {
    return false;
  }
}

const server = createServer(async (req, res) => {
  try {
    const host = req.headers.host || "localhost";
    const proto = req.headers["x-forwarded-proto"] || "http";
    const url = new URL(req.url || "/", `${proto}://${host}`);

    if (url.pathname === "/__health") {
      const body = JSON.stringify(
        {
          ok: true,
          server: "hostinger-node",
          node: process.version,
          hasDistClient: Boolean(await stat(CLIENT_DIR).catch(() => null)),
          hasMongoUri: Boolean(process.env.MONGODB_URI),
          hasDebugKey: Boolean(process.env.DEPLOY_DEBUG_KEY),
          startupError,
          time: new Date().toISOString(),
        },
        null,
        2,
      );

      res.writeHead(200, {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "no-store",
        "Content-Length": String(Buffer.byteLength(body)),
      });
      res.end(body);
      return;
    }

    if (await serveStatic(url.pathname, res)) return;

    if (startupError || typeof app?.fetch !== "function") {
      const body = [
        "Application startup failed.",
        "",
        startupError || "The server entry did not load correctly.",
        "",
        "Check Hostinger Node version, startup file, build command, and whether dist/ was uploaded.",
      ].join("\n");

      res.writeHead(500, {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
        "Content-Length": String(Buffer.byteLength(body)),
      });
      res.end(body);
      return;
    }

    const bodyChunks = [];
    for await (const chunk of req) bodyChunks.push(chunk);
    const body = bodyChunks.length > 0 ? Buffer.concat(bodyChunks) : undefined;

    const headers = new Headers();
    for (const [key, value] of Object.entries(req.headers)) {
      if (value) headers.set(key, Array.isArray(value) ? value.join(", ") : value);
    }

    const hasBody =
      body?.length &&
      req.method !== "GET" &&
      req.method !== "HEAD";

    const request = new Request(url.toString(), {
      method: req.method || "GET",
      headers,
      ...(hasBody ? { body, duplex: "half" } : {}),
    });

    const response = await app.fetch(request, process.env, {
      waitUntil: () => {},
      passThroughOnException: () => {},
    });

    const responseHeaders = {};
    response.headers.forEach((value, key) => {
      responseHeaders[key] = value;
    });

    res.writeHead(response.status, responseHeaders);

    if (!response.body) {
      res.end();
      return;
    }

    const reader = response.body.getReader();
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      res.write(value);
    }
    res.end();
  } catch (err) {
    console.error("[server] Request error:", err);
    if (!res.headersSent) {
      res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    }
    res.end("Internal Server Error");
  }
});

const PORT = Number.parseInt(
  process.env.PORT || process.env.APP_PORT || "3000",
  10,
);

server.listen(PORT, "0.0.0.0", () => {
  console.log("");
  console.log("Pure Technology server is running");
  console.log(`http://0.0.0.0:${PORT}`);
  console.log("");
});

server.on("error", (err) => {
  console.error("[server] Fatal error:", err);
  process.exit(1);
});
