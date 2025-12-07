import { NextResponse } from "next/server";
import Category from "@/models/Category";
import dbConnect from "@/lib/db";

// GET category by slug
export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  try {
    await dbConnect();

    // unwrap params
    const { slug } = await params;
    console.log("Slug from params:", slug);

    const category = await Category.findOne({ slug });
    console.log("Category found:", category);

    if (!category) {
      return NextResponse.json(
        { success: false, message: "Category not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, category }, { status: 200 });
  } catch (error: unknown) {
    // Narrow the unknown type to Error
    const err = error instanceof Error ? error : new Error("Unknown error");
    console.error("GET /api/category/[slug] error:", err);
    return NextResponse.json(
      { success: false, message: "Server error", error: err.message },
      { status: 500 }
    );
  }
}
