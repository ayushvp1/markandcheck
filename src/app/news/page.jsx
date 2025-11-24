import Link from "next/link";
import { dbConnect } from "@/lib/mongodb";
import News from "@/models/News";

function formatDate(date) {
  const d = new Date(date);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function NewsPage() {
  await dbConnect();
  const items = await News.find().sort({ publishDate: -1, createdAt: -1 }).lean();

  return (
    <div className="min-h-screen bg-white">
      <div className="gradient-green-light text-black py-16">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Updates</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Stay updated with the latest regulatory changes, insights and Mark &amp; Check news.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-16">
        {items.length === 0 ? (
          <p className="text-center text-gray-500 text-sm">No news items published yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item) => {
              const slugOrId = item.slug || item._id.toString();

              return (
                <Link
                  key={item._id.toString()}
                  href={`/news/${slugOrId}`}
                className="bg-white rounded-xl overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl shadow-lg block cursor-pointer border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {item.category && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-medium">
                        {item.category}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div
                    className="flex items-center text-sm mb-3"
                    style={{ color: "var(--light-gray)" }}
                  >
                    {item.publishDate && <span>{formatDate(item.publishDate)}</span>}
                    {item.readTime && (
                      <>
                        <span className="mx-2">•</span>
                        <span>{item.readTime}</span>
                      </>
                    )}
                  </div>

                  <h3
                    className="font-medium text-xl mb-3 line-clamp-2"
                    style={{ color: "var(--black)" }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="text-sm leading-relaxed line-clamp-3 mb-4"
                    style={{ color: "var(--medium-gray)" }}
                  >
                    {item.shortDescription}
                  </p>

                  <div className="flex items-center justify-between">
                    {item.author && (
                      <span
                        className="text-sm font-medium"
                        style={{ color: "var(--medium-gray)" }}
                      >
                        By {item.author}
                      </span>
                    )}
                    <span
                      className="text-sm font-medium group-hover:text-blue-600 transition-colors"
                      style={{ color: "var(--trust-blue)" }}
                    >
                      Read More →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
          </div>
        )}
      </div>
    </div>
  );
}
