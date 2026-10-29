import { NextResponse } from "next/server";
import { profile } from "@/data/profile";
import { getClicksCollection } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

const linkIds = new Set(profile.links.map((link) => link.id));

// 모든 링크의 클릭 수를 { [id]: count } 형태로 한 번에 돌려준다.
export async function GET() {
  const clicks = await getClicksCollection();
  const docs = await clicks.find({ _id: { $in: Array.from(linkIds) } }).toArray();
  const counts = Object.fromEntries(docs.map((doc) => [doc._id, doc.count]));
  return NextResponse.json(counts);
}

// 본문 { id }의 클릭 수를 1 올리고 갱신된 값을 돌려준다.
export async function POST(request: Request) {
  const { id } = await request.json().catch(() => ({}));
  if (typeof id !== "string" || !linkIds.has(id)) {
    return NextResponse.json({ error: "알 수 없는 링크입니다." }, { status: 400 });
  }

  const clicks = await getClicksCollection();
  const doc = await clicks.findOneAndUpdate(
    { _id: id },
    { $inc: { count: 1 } },
    { upsert: true, returnDocument: "after" },
  );
  return NextResponse.json({ id, count: doc?.count ?? 1 });
}
