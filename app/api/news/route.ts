
import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import News from "@/models/News";
import { INews } from "@/types/news";

// GET all news

// GET all news

export async function GET() {
  await dbConnect();

  try {
    const news = await News.find({}).sort({ createdAt: -1 }); // Latest first
    return NextResponse.json({ success: true, data: news });
  } catch (error) {
    console.log("GET News Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch news" },
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
