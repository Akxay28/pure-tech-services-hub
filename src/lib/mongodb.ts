import type { Db, MongoClient } from "mongodb";
import { getEnvValue } from "./env";

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDatabase() {
  const uri = await getEnvValue("MONGODB_URI");
  if (!uri) {
    throw new Error("MONGODB_URI environment variable is not defined.");
  }

  const explicitDbName = await getEnvValue("MONGODB_DB");
  let dbName = explicitDbName || "pure_tech";
  try {
    const parsedUrl = new URL(uri);
    const path = parsedUrl.pathname.substring(1);
    if (!explicitDbName && path) {
      dbName = path.split("?")[0];
    }
  } catch {
    // URL parsing can fail for malformed deployment values; the MongoDB driver
    // will produce the precise connection error below.
  }

  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const { MongoClient } = await import("mongodb");
  const client = new MongoClient(uri, {
    maxPoolSize: 10,
    connectTimeoutMS: 10000,
    serverSelectionTimeoutMS: 10000,
  });

  try {
    await client.connect();
    const db = client.db(dbName);
    await db.command({ ping: 1 });

    cachedClient = client;
    cachedDb = db;

    return { client, db };
  } catch (error) {
    await client.close().catch(() => undefined);
    const reason = error instanceof Error ? error.message : String(error);
    throw new Error(
      [
        "MongoDB connection failed.",
        "Check MONGODB_URI/MONGODB_DB in Hostinger, Atlas network access/IP whitelist, and database user credentials.",
        reason,
      ].join(" "),
    );
  }
}
