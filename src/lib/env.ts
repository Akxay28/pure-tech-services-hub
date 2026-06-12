let localDevVarsPromise: Promise<Record<string, string>> | undefined;
let dotenvVarsPromise: Promise<Record<string, string>> | undefined;
let globalEnv: any = null;

export function setGlobalEnv(env: any) {
  globalEnv = env;
}

function parseEnvContent(content: string): Record<string, string> {
  return Object.fromEntries(
    content
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith("#"))
      .map((line) => {
        const eqIndex = line.indexOf("=");
        if (eqIndex === -1) return null;
        const key = line.slice(0, eqIndex).trim();
        let value = line.slice(eqIndex + 1).trim();
        // Strip surrounding single or double quotes
        if (
          (value.startsWith("'") && value.endsWith("'")) ||
          (value.startsWith('"') && value.endsWith('"'))
        ) {
          value = value.slice(1, -1);
        }
        return [key, value];
      })
      .filter(Boolean) as [string, string][],
  );
}

async function readEnvFile(filePath: string): Promise<Record<string, string>> {
  try {
    const fs = await import("node:fs/promises");
    const content = await fs.readFile(filePath, "utf-8");
    return parseEnvContent(content);
  } catch {
    return {};
  }
}

async function dotenvVars(): Promise<Record<string, string>> {
  if (dotenvVarsPromise) return dotenvVarsPromise;

  dotenvVarsPromise = (async () => {
    const path = await import("node:path");

    // Try multiple locations where .env might exist:
    // 1. Current working directory (project root on Hostinger)
    // 2. One level up from cwd (in case app runs from dist/server)
    // 3. Script directory (__dirname equivalent via import.meta.url)
    const candidates: string[] = [
      path.join(process.cwd(), ".env"),
      path.join(process.cwd(), "..", ".env"),
      path.join(process.cwd(), "..", "..", ".env"),
    ];

    // Also try relative to this module's location if ESM
    try {
      const { fileURLToPath } = await import("node:url");
      const moduleDir = path.dirname(fileURLToPath(import.meta.url));
      candidates.push(path.join(moduleDir, ".env"));
      candidates.push(path.join(moduleDir, "..", ".env"));
      candidates.push(path.join(moduleDir, "..", "..", ".env"));
      candidates.push(path.join(moduleDir, "..", "..", "..", ".env"));
    } catch {
      // Not ESM or import.meta not available
    }

    for (const candidate of candidates) {
      const vars = await readEnvFile(candidate);
      if (vars["MONGODB_URI"]) {
        return vars;
      }
    }

    return {};
  })();

  return dotenvVarsPromise;
}

async function localDevVars(): Promise<Record<string, string>> {
  if (localDevVarsPromise) return localDevVarsPromise;

  localDevVarsPromise = (async () => {
    const path = await import("node:path");

    // Try multiple locations where .dev.vars might exist
    const candidates: string[] = [
      path.join(process.cwd(), ".dev.vars"),
      path.join(process.cwd(), "..", ".dev.vars"),
      path.join(process.cwd(), "..", "..", ".dev.vars"),
    ];

    try {
      const { fileURLToPath } = await import("node:url");
      const moduleDir = path.dirname(fileURLToPath(import.meta.url));
      candidates.push(path.join(moduleDir, ".dev.vars"));
      candidates.push(path.join(moduleDir, "..", ".dev.vars"));
      candidates.push(path.join(moduleDir, "..", "..", ".dev.vars"));
      candidates.push(path.join(moduleDir, "..", "..", "..", ".dev.vars"));
    } catch {
      // Not ESM or import.meta not available
    }

    for (const candidate of candidates) {
      const vars = await readEnvFile(candidate);
      if (Object.keys(vars).length > 0) {
        return vars;
      }
    }

    return {};
  })();

  return localDevVarsPromise;
}

export async function getEnvValue(key: string): Promise<string | undefined> {
  // 1. Try global env object (set during fetch in Cloudflare context)
  if (globalEnv && typeof globalEnv === "object" && key in globalEnv) {
    const val = globalEnv[key];
    if (typeof val === "string" && val.trim()) return val;
  }

  // 2. Try Node process.env (set by Hostinger dashboard, system env, or dotenv packages)
  if (typeof process !== "undefined" && process.env) {
    const val = process.env[key];
    if (val?.trim()) return val;
  }

  // 3. Fallback to .env file (standard Node.js convention)
  const envVars = await dotenvVars();
  if (envVars[key]) return envVars[key];

  // 4. Fallback to .dev.vars (Cloudflare local dev convention)
  const devVars = await localDevVars();
  if (devVars[key]) return devVars[key];

  return undefined;
}

