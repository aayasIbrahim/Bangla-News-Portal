import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Video, { IVideo } from "@/models/Video";

// -------------------------
// Type for POST request body
// -------------------------
interface VideoBody {
  title: string;
  youtubeUrl: string;
}

// -------------------------
// POST: Add YouTube Video
// -------------------------
export async function POST(req: NextRequest) {
  try {
    const body: VideoBody = await req.json();
    const { title, youtubeUrl } = body;

    if (!title || !youtubeUrl) {
      return NextResponse.json(
        { error: "Title and YouTube URL required" },
        { status: 400 }
      );
    }

    // Extract YouTube Video ID
    const videoId = extractVideoId(youtubeUrl);

    if (!videoId) {
      return NextResponse.json(
        { error: "Invalid YouTube URL" },
        { status: 400 }
      );
    }

    await connectDB();

    const newVideo: IVideo = await Video.create({
      title,
      youtubeUrl,
      videoId,
    });

    return NextResponse.json(
      { success: true, data: newVideo },
      { status: 201 }
    );
  } catch  {
    console.error("Add Video Error:");
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}

// -------------------------
// GET: Fetch Videos
// -------------------------
export async function GET() {
  try {
    await connectDB();

    const videos: IVideo[] = await Video.find().sort({ createdAt: -1 });

    return NextResponse.json({ success: true, data: videos }, { status: 200 });
  } catch  {
    console.error("Get Videos Error");
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}

// -------------------------
// Helper function: Extract YouTube Video ID
// -------------------------
function extractVideoId(url: string): string | null {
  if (!url) return null;

  const regex = /(?:youtube\.com.*(?:\?|&)v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}


// -------------------------
// DELETE: Delete Video by ID
// -------------------------
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Video ID is required" },
        { status: 400 }
      );
    }

    await connectDB();

    const deletedVideo = await Video.findByIdAndDelete(id);

    if (!deletedVideo) {
      return NextResponse.json(
        { error: "Video not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Video deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Delete Video Error:", error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
