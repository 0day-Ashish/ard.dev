import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const MONGO_URI = "mongodb://localhost:27017";
const DB_NAME = "portfolio";
const COLLECTION = "reviews";

let cachedClient: MongoClient | null = null;

async function getClient(): Promise<MongoClient> {
  if (cachedClient) return cachedClient;
  const client = new MongoClient(MONGO_URI);
  await client.connect();
  cachedClient = client;
  return client;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message } = body ?? {};

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Missing 'message' in body" }, { status: 400 });
    }

    const client = await getClient();
    const db = client.db(DB_NAME);
    const col = db.collection(COLLECTION);

    const doc = {
      review: message,
      createdAt: new Date(),
    };

    await col.insertOne(doc);

    return NextResponse.json({ ok: true, inserted: true });
  } catch (err) {
    console.error("send-review error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
