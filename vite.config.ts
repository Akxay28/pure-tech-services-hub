import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";
import path from "node:path";

const browserAsyncHooksPlugin = {
  name: "browser-async-hooks",
  enforce: "pre" as const,
  resolveId(id: string, _importer: string | undefined, options: { ssr?: boolean }) {
    if ((id === "node:async_hooks" || id === "async_hooks") && !options?.ssr) {
      return path.resolve(process.cwd(), "src/lib/async-hooks-compat.ts");
    }
    return null;
  },
};

const nodeRequireForServerChunksPlugin = {
  name: "node-require-for-server-chunks",
  renderChunk(code: string, _chunk: unknown, outputOptions: { dir?: string }) {
    const outputDir = outputOptions.dir ? path.normalize(outputOptions.dir) : "";
    const serverOutputDirs = [path.normalize("dist/server")];
    const isServerBuild =
      serverOutputDirs.some((serverOutputDir) =>
        outputDir.endsWith(serverOutputDir) ||
        outputDir.includes(`${serverOutputDir}${path.sep}`)
      );

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
  plugins: [
    tanstackStart({
      server: { entry: "server" },
    }),
    viteReact(),
    tailwindcss(),
    tsConfigPaths(),
    browserAsyncHooksPlugin,
    nodeRequireForServerChunksPlugin,
  ],
  optimizeDeps: {
    exclude: ["@tanstack/start-client-core", "@tanstack/react-start"],
  },
});
