import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";
import News from "@/models/News";
import { uploadImage } from "@/lib/cloudinary";

function slugify(input) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

async function generateUniqueSlug(baseInput) {
  const base = slugify(baseInput) || "news";
  let candidate = base;
  let counter = 1;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const existing = await News.findOne({ slug: candidate });
    if (!existing) return candidate;
    counter += 1;
    candidate = `${base}-${counter}`;
  }
}

// GET /api/admin/news - list all news items (newest first)
export async function GET() {
  try {
    await dbConnect();
    const items = await News.find().sort({ publishDate: -1, createdAt: -1 });
    return NextResponse.json(items, { status: 200 });
  } catch (error) {
    console.error("Error fetching news", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}

// POST /api/admin/news - create news with image upload
export async function POST(request) {
  try {
    const formData = await request.formData();

    const title = formData.get("title");
    const shortDescription = formData.get("shortDescription");
    const fullDescription = formData.get("fullDescription") || "";
    const author = formData.get("author") || "Mark & Check Insights Team";
    const publishDate = formData.get("publishDate") || new Date().toISOString();
    const readTime = formData.get("readTime") || "5 min read";
    const category = formData.get("category") || "News";
    const tagsRaw = formData.get("tags") || "";
    const contentRaw = formData.get("content") || "";
    const slugInput = formData.get("slug") || "";
    const imageFile = formData.get("image");

    if (!title || !shortDescription || !imageFile) {
      return NextResponse.json(
        { message: "Title, shortDescription and image are required" },
        { status: 400 }
      );
    }

    const arrayBuffer = await imageFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const uploadResult = await uploadImage(buffer);

    await dbConnect();

    const baseForSlug = slugInput || title;
    const slug = await generateUniqueSlug(baseForSlug);

    const htmlContent = formData.get("htmlContent") || "";
    
    console.log("Creating news with htmlContent:", {
      hasHtmlContent: !!htmlContent,
      htmlContentLength: htmlContent.length,
      htmlContentPreview: htmlContent.substring(0, 100)
    });

    const news = await News.create({
      slug,
      title,
      shortDescription,
      fullDescription,
      image: uploadResult.secure_url,
      author,
      publishDate,
      readTime,
      category,
      tags: tagsRaw
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      htmlContent,
    });

    return NextResponse.json(news, { status: 201 });
  } catch (error) {
    console.error("Error creating news", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
