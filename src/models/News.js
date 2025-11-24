import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    shortDescription: { type: String, required: true },
    fullDescription: { type: String },
    image: { type: String, required: true },
    author: { type: String, required: true },
    publishDate: { type: Date, required: true },
    readTime: { type: String },
    category: { type: String },
    tags: [{ type: String }],
    htmlContent: { type: String }, // Rich HTML content from WYSIWYG editor
  },
  { timestamps: true }
);

export default mongoose.models.News || mongoose.model("News", NewsSchema);
