// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import path from "node:path";
// Vite plugin to stub node:async_hooks / async_hooks in the browser client bundle
// to prevent "AsyncLocalStorage is not a constructor" crashes, while preserving
// native server behavior.
const browserAsyncHooksPlugin = {
  name: "browser-async-hooks",
  enforce: "pre" as const,
  resolveId(id: string, importer: string | undefined, options: { ssr?: boolean }) {
    if ((id === "node:async_hooks" || id === "async_hooks") && !options?.ssr) {
      return path.resolve(process.cwd(), "src/lib/async-hooks-compat.ts");
    }
    return null;
  },
};

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
const nodeRequireForServerChunksPlugin = {
  name: "node-require-for-server-chunks",
  renderChunk(code: string, _chunk: unknown, outputOptions: { dir?: string }) {
    const outputDir = outputOptions.dir ? path.normalize(outputOptions.dir) : "";
    const isServerBuild = outputDir.endsWith(path.normalize("dist/server"));
    if (!isServerBuild || !code.includes("require(")) return null;

    return {
      code: [
        'import { createRequire as __createRequire } from "node:module";',
        "const require = globalThis.require || __createRequire(import.meta.url);",
        code,
      ].join("\n"),
      map: null,
    };
  },
};

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    plugins: [browserAsyncHooksPlugin, nodeRequireForServerChunksPlugin],
    optimizeDeps: {
      exclude: ["@tanstack/start-client-core", "@tanstack/react-start"],
    },
  },
});
