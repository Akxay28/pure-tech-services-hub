let localDevVarsPromise: Promise<Record<string, string>> | undefined;

async function localDevVars(): Promise<Record<string, string>> {
  if (localDevVarsPromise) return localDevVarsPromise;

  localDevVarsPromise = (async () => {
    try {
      const fs = await import("node:fs/promises");
      const path = await import("node:path");
      const file = await fs.readFile(path.join(process.cwd(), ".dev.vars"), "utf-8");
      return Object.fromEntries(
        file
          .split(/\r?\n/)
          .map((line) => line.trim())
          .filter((line) => line && !line.startsWith("#"))
          .map((line) => {
            const [key, ...valueParts] = line.split("=");
            return [key.trim(), valueParts.join("=").trim()];
          }),
      );
    } catch {
      return {};
    }
  })();

  return localDevVarsPromise;
}

export async function getEnvValue(key: string): Promise<string | undefined> {
  // 1. Try Node process.env (local dev or Cloudflare nodejs_compat)
  if (typeof process !== "undefined" && process.env) {
    const val = process.env[key];
    if (val?.trim()) return val;
  }

  // 2. Fallback to .dev.vars
  const devVars = await localDevVars();
  if (devVars[key]) return devVars[key];

  return undefined;
}
