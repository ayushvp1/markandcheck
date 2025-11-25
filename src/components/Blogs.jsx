import Link from 'next/link';
import { getRecentBlogs } from '../data/blogs';

export default function Blogs() {
  const blogs = getRecentBlogs(3);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <section id="blogs" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2
            className="font-bold text-4xl mb-4"
            style={{ color: 'var(--black)' }}
          >
            Latest Updates
          </h2>
          <p
            className="font-normal text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--medium-gray)' }}
          >
            Stay informed with our latest articles on accounting, tax planning, and business finance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blogs/${blog.id}`}
              className="bg-white rounded-xl overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl shadow-lg block cursor-pointer"
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

        {/* View All Blogs Button */}
        <div className="text-center mt-12">
          <Link
            href="/blogs"
            className="inline-block bg-[#8B7355] text-white px-8 py-3 rounded-lg font-medium hover:bg-dark-brown transition-colors"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}