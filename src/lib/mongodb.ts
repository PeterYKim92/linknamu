import { MongoClient } from "mongodb";

// 개발 모드의 핫 리로드마다 새 연결이 생기지 않도록 전역에 보관한다.
const globalForMongo = globalThis as unknown as { _mongoClientPromise?: Promise<MongoClient> };

// 빌드 시점에는 환경 변수가 없을 수 있으므로 첫 요청 때 연결한다.
function getClientPromise() {
  if (!globalForMongo._mongoClientPromise) {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("MONGODB_URI 환경 변수가 없습니다. 로컬은 .env.local, 배포는 Vercel 환경 변수에 설정하세요.");
    }
    globalForMongo._mongoClientPromise = new MongoClient(uri).connect().catch((error) => {
      // 연결에 실패하면 다음 요청에서 다시 시도한다.
      globalForMongo._mongoClientPromise = undefined;
      throw error;
    });
  }
  return globalForMongo._mongoClientPromise;
}

export async function getClicksCollection() {
  const client = await getClientPromise();
  // 문서 형태: { _id: 링크 id, count: 클릭 수 }
  return client.db("linknamu").collection<{ _id: string; count: number }>("clicks");
}
