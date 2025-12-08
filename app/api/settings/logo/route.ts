import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Logo from "@/models/Logo";
import { uploadToCloudinary } from "@/utils/cloudinary";

export async function GET() {
  await dbConnect();
  const logos = await Logo.find().sort({ createdAt: -1 }); // return array
  return NextResponse.json({ success: true, logos });
}
export async function POST(req: Request) {
  try {
    await dbConnect();

    const formData = await req.formData();
    const file = formData.get("logo") as unknown as File;

    if (!file) {
      return NextResponse.json(
        { success: false, message: "No file uploaded" },
        { status: 400 }
      );
    }

    // Upload to Cloudinary
    const cloudinaryData = await uploadToCloudinary(file);
    // cloudinaryData should be the object returned by Cloudinary
    // Only save the secure_url (string) to logoUrl
    const updatedLogo = await Logo.findOneAndUpdate(
      {},
      { logoUrl: cloudinaryData.secure_url, publicId: cloudinaryData.public_id },
      { new: true, upsert: true }
    );

    return NextResponse.json({
      success: true,
      message: "Logo uploaded",
      logoUrl: updatedLogo.logoUrl,
    });
  } catch (err) {
    console.log("Upload error:", err);
    return NextResponse.json(
      { success: false, message: "Upload failed" },
      { status: 500 }
    );
  }
}


export async function DELETE() {
  await dbConnect();

  await Logo.findOneAndUpdate({}, { logoUrl: null });

  return NextResponse.json({
    success: true,
    message: "Logo removed",
  });
}
