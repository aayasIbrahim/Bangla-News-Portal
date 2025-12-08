import mongoose from "mongoose";

const logoSchema = new mongoose.Schema(
  {
    logoUrl: { type: String, default: null },
    publicId: { type: String, default: null },
  },
  { timestamps: true }
);

export default mongoose.models.Logo ||
  mongoose.model("Logo", logoSchema);
