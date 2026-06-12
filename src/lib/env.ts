let localDevVarsPromise: Promise<Record<string, string>> | undefined;
let dotenvVarsPromise: Promise<Record<string, string>> | undefined;
let globalEnv: any = null;

export function setGlobalEnv(env: any) {
  globalEnv = env;
}

async function dotenvVars(): Promise<Record<string, string>> {
  if (dotenvVarsPromise) return dotenvVarsPromise;

  dotenvVarsPromise = (async () => {
    try {
      const fs = await import("node:fs/promises");
      const path = await import("node:path");
      const file = await fs.readFile(path.join(process.cwd(), ".env"), "utf-8");
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

  return dotenvVarsPromise;
}

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
  // 1. Try global env object (set during fetch in Cloudflare context)
  if (globalEnv && typeof globalEnv === "object" && key in globalEnv) {
    const val = globalEnv[key];
    if (typeof val === "string" && val.trim()) return val;
  }

  // 2. Try Node process.env (local dev, Cloudflare nodejs_compat, or Hostinger production variables)
  if (typeof process !== "undefined" && process.env) {
    const val = process.env[key];
    if (val?.trim()) return val;
  }

  // 3. Fallback to .env
  const envVars = await dotenvVars();
  if (envVars[key]) return envVars[key];

  // 4. Fallback to .dev.vars
  const devVars = await localDevVars();
  if (devVars[key]) return devVars[key];

  return undefined;
}
