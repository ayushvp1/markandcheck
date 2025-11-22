import Link from 'next/link';
import { getBlogById, getAllBlogs } from '../../../data/blogs';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((blog) => ({
    slug: blog.id,
  }));
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const blog = getBlogById(slug);

  if (!blog) {
    notFound();
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative">
        <div className="h-96 overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-8">
            <div className="mb-4">
              <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium">
                {blog.category}
              </span>
            </div>
            <h1 className="font-medium text-4xl md:text-5xl mb-4">
              {blog.title}
            </h1>
            <div className="flex items-center justify-center text-sm space-x-4">
              <span>By {blog.author}</span>
              <span>•</span>
              <span>{formatDate(blog.publishDate)}</span>
              <span>•</span>
              <span>{blog.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-8 py-16">
        {/* Back to Blogs */}
        <div className="mb-8">
          <Link
            href="/blogs"
            className="inline-flex items-center text-sm font-medium hover:text-blue-600 transition-colors"
            style={{ color: 'var(--trust-blue)' }}
          >
            ← Back to All Articles
          </Link>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div className="mb-8">
            <p
              className="text-xl leading-relaxed"
              style={{ color: 'var(--medium-gray)' }}
            >
              {blog.fullDescription}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Content Sections */}
          {blog.content && blog.content.map((section, index) => (
            <div key={index} className="mb-6">
              {section.type === 'paragraph' && (
                <p className="text-lg leading-relaxed mb-4" style={{ color: 'var(--black)' }}>
                  {section.text}
                </p>
              )}
              {section.type === 'heading' && (
                <h2 className="text-2xl font-medium mb-4" style={{ color: 'var(--black)' }}>
                  {section.text}
                </h2>
              )}
              {section.type === 'list' && (
                <ul className="list-disc list-inside space-y-2 mb-4">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-lg" style={{ color: 'var(--black)' }}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </article>

        {/* Call to Action */}
        <div className="mt-16 p-8 bg-gray-50 rounded-xl text-center">
          <h3 className="text-2xl font-medium mb-4" style={{ color: 'var(--black)' }}>
            Need Professional Help?
          </h3>
          <p className="text-lg mb-6" style={{ color: 'var(--medium-gray)' }}>
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