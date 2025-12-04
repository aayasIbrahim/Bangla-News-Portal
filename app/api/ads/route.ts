import { NextRequest, NextResponse } from "next/server";
import connectToDB from "@/lib/db";
import Ads from "@/models/Ads";

// GET all ads
export async function GET() {
  try {
    await connectToDB();
    const ads = await Ads.find({}).sort({ createdAt: -1 });
    return NextResponse.json(ads);
  } catch (error) {
    return NextResponse.json({ message: "Failed to fetch ads", error }, { status: 500 });
  }
}

// POST add new ad
export async function POST(req: NextRequest) {
  try {
    await connectToDB();
    const data = await req.json();
    const ad = await Ads.create(data);
    return NextResponse.json({ message: "Ad added successfully!", ad });
  } catch (error) {
    return NextResponse.json({ message: "Failed to add ad", error }, { status: 500 });
  }
}

// PATCH edit ad by ID
export async function PATCH(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) return NextResponse.json({ message: "ID is required" }, { status: 400 });

    await connectToDB();
    const data = await req.json();
    const updatedAd = await Ads.findByIdAndUpdate(id, data, { new: true });

    return NextResponse.json({ message: "Ad updated successfully!", ad: updatedAd });
  } catch (error) {
    return NextResponse.json({ message: "Failed to update ad", error }, { status: 500 });
  }
}

// DELETE ad by ID
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) return NextResponse.json({ message: "ID is required" }, { status: 400 });

    await connectToDB();
    await Ads.findByIdAndDelete(id);

    return NextResponse.json({ message: "Ad deleted successfully!" });
  } catch (error) {
    return NextResponse.json({ message: "Failed to delete ad", error }, { status: 500 });
  }
}
