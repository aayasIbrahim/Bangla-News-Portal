import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Logo from "@/models/Logo";
import { deleteFromCloudinary } from "@/utils/cloudinary";

// DELETE /api/settings/logo/[id]
export async function DELETE(
  req: Request,
  context: { params: { id: string } }
) {
  const { id } = await context.params; // remove `await`!
  await dbConnect();

  const logo = await Logo.findById(id);
  if (!logo) {
    return NextResponse.json(
      { success: false, message: "Logo not found" },
      { status: 404 }
    );
  }

  // Delete from Cloudinary
  if (logo.publicId) {
    try {
      await deleteFromCloudinary(logo.publicId);
    } catch (err) {
      console.error("Cloudinary delete error:", err);
    }
  }

  // Delete from DB
  await Logo.findByIdAndDelete(id);

  return NextResponse.json({ success: true, message: "Logo deleted" });
}
