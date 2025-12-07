import { NextResponse } from "next/server";
import Category from "@/models/Category";
import dbConnect from "@/lib/db";

// POST: create new category
export async function POST(req: Request) {
  try {
    await dbConnect();
    const { name } = await req.json();

    // Validation
    if (!name || name.trim() === "") {
      return NextResponse.json(
        { success: false, message: "Category name is required" },
        { status: 400 }
      );
    }

    // Generate slug
    const slug = name.toLowerCase().trim().replace(/\s+/g, "-");

    // Check for duplicates
    const existing = await Category.findOne({ slug });
    if (existing) {
      return NextResponse.json(
        { success: false, message: "Category already exists" },
        { status: 400 }
      );
    }

    // Create new category
    const category = await Category.create({ name, slug });
    return NextResponse.json({ success: true, category }, { status: 201 });
  } catch  {
    console.error("POST /api/category error:");
    return NextResponse.json(
      { success: false, message: "Server error", },
      { status: 500 }
    );
  }
}

// GET: fetch all categories
export async function GET() {
  try {
    await dbConnect();

    // Fetch and sort categories alphabetically
    const categories = await Category.find().sort({ name: 1 });

    return NextResponse.json({ success: true, categories }, { status: 200 });
  } catch  {
    console.error("GET /api/category error:",);
    return NextResponse.json(
      { success: false, message: "Server error",  },
      { status: 500 }
    );
  }
}
