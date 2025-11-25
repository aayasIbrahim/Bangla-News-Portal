import mongoose, { Schema, Document, Model } from "mongoose";
import { INews } from "@/types/news";

interface INewsDocument extends Omit<INews, "_id">, Document {
  _id: mongoose.Types.ObjectId;
}

const NewsSchema: Schema = new Schema({
  title: { type: String, required: true },
  summary: { type: String },
  content: { type: String,required:true },
  category: { type: String, required: true },
  imageSrc: { type: String,required:true },
  author: { type: String, default: "Admin" },
  publishedAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },

  isFeatured: { type: Boolean, default: false },
});

const News: Model<INewsDocument> =
  mongoose.models.News || mongoose.model<INewsDocument>("News", NewsSchema);

export default News;
