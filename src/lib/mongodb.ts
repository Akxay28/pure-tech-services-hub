import { MongoClient } from "mongodb";
import { getEnvValue } from "./env";

let cachedClient: MongoClient | null = null;
let cachedDb: any = null;

export async function connectToDatabase() {
  const uri = await getEnvValue("MONGODB_URI");
  if (!uri) {
    throw new Error("MONGODB_URI environment variable is not defined.");
  }

  // Parse dbName from URI (e.g. mongodb+srv://.../dbname?options) or fallback to 'pure_tech'
  let dbName = "pure_tech";
  try {
    const parsedUrl = new URL(uri);
    const path = parsedUrl.pathname.substring(1);
    if (path) {
      dbName = path.split("?")[0];
    }
  } catch (e) {
    // URL parsing might fail on mongodb+srv, standard fallback is fine
  }

  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(uri, {
    connectTimeoutMS: 3000,
    serverSelectionTimeoutMS: 3000,
  });

  await client.connect();
  const db = client.db(dbName);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}
