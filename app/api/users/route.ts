import { NextResponse } from "next/server";
import User from "@/models/User";
import dbConnect from "@/lib/db";

export async function GET() {
  try {
    await dbConnect();

    const users = await User.find().sort({ createdAt: -1 });
    const totalUserCount = await User.countDocuments({});

    return NextResponse.json({ users, totalUser: totalUserCount });
  } catch {
    return NextResponse.json(
      { message: "Failed to fetch users" },
      { status: 500 }
    );
  }
}
