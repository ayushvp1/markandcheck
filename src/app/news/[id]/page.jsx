import Link from "next/link";
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
  const { id } = await params;

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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative">
        <div className="h-96 overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-8">
            <div className="mb-4">
              <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium">
                {item.category || "News"}
              </span>
            </div>
            <h1 className="font-medium text-4xl md:text-5xl mb-4">
              {item.title}
            </h1>
            <div className="flex items-center justify-center text-sm space-x-4">
              <span>By {item.author}</span>
              <span>•</span>
              <span>{formatDate(item.publishDate)}</span>
              <span>•</span>
              <span>{item.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-8 py-16">
        {/* Back to News */}
        <div className="mb-8">
          <Link
            href="/news"
            className="inline-flex items-center text-sm font-medium hover:text-blue-600 transition-colors"
            style={{ color: "var(--trust-blue)" }}
          >
            ← Back to All News
          </Link>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          {item.shortDescription && (
            <div className="mb-8">
              <p
                className="text-xl leading-relaxed"
                style={{ color: "var(--medium-gray)" }}
              >
                {item.shortDescription}
              </p>
            </div>
          )}

          {/* Tags */}
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {item.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Rich Content from WYSIWYG Editor */}
          {item.htmlContent ? (
            <div
              className="news-content"
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
                    className="text-lg leading-relaxed mb-4"
                    style={{ color: "var(--black)" }}
                  >
                    {block}
                  </p>
                ))}
            </div>
          ) : null}
        </article>

        {/* Call to Action */}
        <div className="mt-16 p-8 bg-gray-50 rounded-xl text-center">
          <h3 className="text-2xl font-medium mb-4" style={{ color: "var(--black)" }}>
            Need Professional Help?
          </h3>
          <p className="text-lg mb-6" style={{ color: "var(--medium-gray)" }}>
            Our team of certified accountants is here to help you with all your financial needs.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg font-medium text-white bg-[#8B7355] hover:bg-[#5C4A3A] shadow-lg hover:shadow-xl transition-colors duration-200"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
