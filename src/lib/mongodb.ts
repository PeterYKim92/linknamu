import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error(".env.local에 MONGODB_URI가 없습니다.");
}

// 개발 모드의 핫 리로드마다 새 연결이 생기지 않도록 전역에 보관한다.
const globalForMongo = globalThis as unknown as { _mongoClientPromise?: Promise<MongoClient> };

const clientPromise = globalForMongo._mongoClientPromise ?? new MongoClient(uri).connect();

if (process.env.NODE_ENV !== "production") {
  globalForMongo._mongoClientPromise = clientPromise;
}

export async function getClicksCollection() {
  const client = await clientPromise;
  // 문서 형태: { _id: 링크 id, count: 클릭 수 }
  return client.db("linknamu").collection<{ _id: string; count: number }>("clicks");
}
