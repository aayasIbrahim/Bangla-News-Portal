import { NextResponse,NextRequest, } from "next/server";
import dbConnect from "@/lib/db";
import News from "@/models/News";
import { INews } from "@/types/news";


export async function GET(request: NextRequest) {
  await dbConnect(); // DB কানেকশন

  try {
    // Query Parameter থেকে category মান
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get("category") || "all";

    // MongoDB query object
    const query: { category?: string } = {};
    if (category && category !== "all") {
      query.category = decodeURIComponent(category); // ক্যাটেগরি decode
    }

    // News fetch করা, newest first
    const news = await News.find(query).sort({ createdAt: -1 });

    return NextResponse.json({ success: true, data: news });
  } catch (error) {
    console.error("GET News Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch news", error: error instanceof Error ? error.message : null },
      { status: 500 }
    );
  }
}

// POST new news
export async function POST(req: Request) {
  await dbConnect();
  const body: INews = await req.json();
  const news = await News.create(body);
  return NextResponse.json({ success: true, data: news }, { status: 201 });
}
