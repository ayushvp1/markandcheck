import { notFound } from "next/navigation";
import { dbConnect } from "@/lib/mongodb";
import News from "@/models/News";
import "../../wysiwyg.css";

function formatDate(date) {
  const d = new Date(date);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function NewsDetailPage({ params }) {
  const { id } = await params; // here `id` actually holds the slug segment

  await dbConnect();

  // First try to find by slug; if not found, fall back to treating it as an ObjectId
  let item = await News.findOne({ slug: id }).lean();

  if (!item) {
    try {
      item = await News.findById(id).lean();
    } catch {
      item = null;
    }
  }

  if (!item) {
    notFound();
  }

  // Debug logging
  console.log("News item data:", {
    title: item.title,
    hasHtmlContent: !!item.htmlContent,
    htmlContentLength: item.htmlContent?.length || 0,
    hasFullDescription: !!item.fullDescription,
    htmlContentPreview: item.htmlContent?.substring(0, 100)
  });

  return (
    <div className="min-h-screen bg-white">
      <div className="gradient-green-light text-black py-16">
        <div className="max-w-4xl mx-auto px-8">
          <p className="text-sm uppercase tracking-wide opacity-80 mb-2">
            {item.category || "News"}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{item.title}</h1>
          <div
            className="flex flex-wrap items-center text-sm gap-2"
            style={{ color: "var(--light-gray)" }}
          >
            {item.publishDate && <span>{formatDate(item.publishDate)}</span>}
            {item.readTime && <span>• {item.readTime}</span>}
            {item.author && <span>• By {item.author}</span>}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-8 py-10 space-y-8">
        {item.image && (
          <div className="w-full rounded-2xl overflow-hidden shadow-lg">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {item.htmlContent ? (
          <div 
            className="prose prose-lg max-w-none news-content"
            style={{
              color: 'var(--medium-gray)',
              lineHeight: '1.75'
            }}
            dangerouslySetInnerHTML={{ __html: item.htmlContent }}
          />
        ) : item.fullDescription ? (
          <div className="space-y-4">
            {item.fullDescription
              .split(/\n{2,}/)
              .map((block) => block.trim())
              .filter(Boolean)
              .map((block, index) => (
                <p
                  key={index}
                  className="text-base leading-relaxed"
                  style={{ color: "var(--medium-gray)" }}
                >
                  {block}
                </p>
              ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
