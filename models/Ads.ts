import mongoose, { Schema, Document, model } from "mongoose";

export interface IAd extends Document {
  title: string;
  image: string;
  link: string;
  position: string;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

const AdsSchema = new Schema<IAd>(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    link: { type: String, required: true },
    position: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
  },
  { timestamps: true } // automatically adds createdAt and updatedAt
);

const Ads = mongoose.models.Ads || model<IAd>("Ads", AdsSchema);

export default Ads;
