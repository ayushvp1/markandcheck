import Link from 'next/link';
import { getAllBlogs } from '../../data/blogs';

export default function BlogsPage() {
  const blogs = getAllBlogs().sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="gradient-green-light text-black py-16">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Latest Updates</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Comprehensive accounting and financial solutions tailored to your business needs
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blogs/${blog.id}`}
              className="bg-white rounded-xl overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl shadow-lg block cursor-pointer border border-gray-100"
            >
              {/* Blog image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-medium">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Blog content */}
              <div className="p-6">
                <div className="flex items-center text-sm mb-3" style={{ color: 'var(--light-gray)' }}>
                  <span>{formatDate(blog.publishDate)}</span>
                  <span className="mx-2">•</span>
                  <span>{blog.readTime}</span>
                </div>

                <h3
                  className="font-medium text-xl mb-3 line-clamp-2"
                  style={{ color: 'var(--black)' }}
                >
                  {blog.title}
                </h3>

                <p
                  className="text-sm leading-relaxed line-clamp-3 mb-4"
                  style={{ color: 'var(--medium-gray)' }}
                >
                  {blog.shortDescription}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium" style={{ color: 'var(--medium-gray)' }}>
                    By {blog.author}
                  </span>
                  <span
                    className="text-sm font-medium group-hover:text-blue-600 transition-colors"
                    style={{ color: 'var(--trust-blue)' }}
                  >
                    Read More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}