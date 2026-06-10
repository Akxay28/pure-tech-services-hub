import { SignJWT, jwtVerify } from "jose";
import { getEnvValue } from "./env";

export const ADMIN_SESSION_MAX_AGE_SECONDS = 60 * 60 * 3;

export async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    encoder.encode(password),
    { name: "PBKDF2" },
    false,
    ["deriveBits"],
  );
  const key = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt: salt,
      iterations: 100000,
      hash: "SHA-256",
    },
    keyMaterial,
    256,
  );

  const saltHex = Array.from(salt)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  const keyHex = Array.from(new Uint8Array(key))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return `${saltHex}:${keyHex}`;
}

export async function verifyPassword(password: string, storedHash: string): Promise<boolean> {
  const [saltHex, keyHex] = storedHash.split(":");
  if (!saltHex || !keyHex) return false;

  const encoder = new TextEncoder();
  const salt = new Uint8Array(saltHex.match(/.{1,2}/g)!.map((byte) => parseInt(byte, 16)));

  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    encoder.encode(password),
    { name: "PBKDF2" },
    false,
    ["deriveBits"],
  );

  const key = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt: salt,
      iterations: 100000,
      hash: "SHA-256",
    },
    keyMaterial,
    256,
  );

  const derivedHex = Array.from(new Uint8Array(key))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return derivedHex === keyHex;
}

export async function createSessionToken(username: string): Promise<string> {
  const secretStr =
    (await getEnvValue("ADMIN_JWT_SECRET")) || "default_jwt_secret_for_local_only_123456789";
  const secret = new TextEncoder().encode(secretStr);
  return new SignJWT({ username })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("3h")
    .sign(secret);
}

export async function verifySessionToken(token: string): Promise<{ username: string } | null> {
  if (!token) return null;
  try {
    const secretStr =
      (await getEnvValue("ADMIN_JWT_SECRET")) || "default_jwt_secret_for_local_only_123456789";
    const secret = new TextEncoder().encode(secretStr);
    const { payload } = await jwtVerify(token, secret);
    return { username: payload.username as string };
  } catch {
    return null;
  }
}
