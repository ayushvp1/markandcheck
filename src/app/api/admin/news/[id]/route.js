import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";
import News from "@/models/News";
import { uploadImage } from "@/lib/cloudinary";

// GET single news item
export async function GET(_request, { params }) {
  try {
    const { id } = await params;
    await dbConnect();
    const item = await News.findById(id);
    if (!item) {
      return NextResponse.json({ message: "Not found" }, { status: 404 });
    }
    return NextResponse.json(item, { status: 200 });
  } catch (error) {
    console.error("Error fetching news item", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}

// PUT update news item (with optional image upload)
export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    await dbConnect();

    const contentType = request.headers.get("content-type");
    let update = {};

    // Check if request contains FormData (with image) or JSON (without image)
    if (contentType?.includes("multipart/form-data")) {
      const formData = await request.formData();
      
      const title = formData.get("title");
      const shortDescription = formData.get("shortDescription");
      const fullDescription = formData.get("fullDescription") || "";
      const category = formData.get("category") || "News";
      const readTime = formData.get("readTime") || "5 min read";
      const tagsRaw = formData.get("tags") || "";
      const htmlContent = formData.get("htmlContent") || "";
      const imageFile = formData.get("image");

      update = {
        title,
        shortDescription,
        fullDescription,
        category,
        readTime,
        tags: tagsRaw.split(",").map((t) => t.trim()).filter(Boolean),
        htmlContent,
      };

      // Upload new image if provided
      if (imageFile) {
        const arrayBuffer = await imageFile.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const uploadResult = await uploadImage(buffer);
        update.image = uploadResult.secure_url;
      }
    } else {
      // JSON request (no image update)
      const body = await request.json();
      update = {
        title: body.title,
        shortDescription: body.shortDescription,
        fullDescription: body.fullDescription,
        category: body.category,
        readTime: body.readTime,
        tags: body.tags?.split(",").map((t) => t.trim()).filter(Boolean) || [],
        htmlContent: body.htmlContent || "",
      };
    }

    const item = await News.findByIdAndUpdate(id, update, {
      new: true,
      runValidators: true,
    });

    if (!item) {
      return NextResponse.json({ message: "Not found" }, { status: 404 });
    }

    return NextResponse.json(item, { status: 200 });
  } catch (error) {
    console.error("Error updating news item", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}

// DELETE news item
export async function DELETE(_request, { params }) {
  try {
    const { id } = await params;
    await dbConnect();
    await News.findByIdAndDelete(id);
    return NextResponse.json({ message: "Deleted" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting news item", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
