export const blogsData = [
  {
    id: 'tax-season-preparation-2025',
    title: "Tax Season Preparation: Essential Tips for 2025",
    shortDescription: "Get ready for tax season with our comprehensive guide to organizing documents and maximizing deductions.",
    fullDescription: "Tax season can be overwhelming, but with proper preparation, you can make the process smooth and maximize your returns. This comprehensive guide covers everything you need to know about preparing for the 2025 tax season, from organizing documents to understanding new tax law changes.",
    image: "/img/consulting.jpg",
    author: "Sarah Johnson, CPA",
    publishDate: "2025-01-10",
    readTime: "8 min read",
    category: "Tax Planning",
    tags: ["Tax Preparation", "Deductions", "Tax Season", "2025"],
    content: [
      {
        type: "paragraph",
        text: "As we approach the 2025 tax season, it's crucial to start preparing early to ensure a smooth filing process and maximize your potential refunds or minimize your tax liability."
      },
      {
        type: "heading",
        text: "Key Documents to Gather"
      },
      {
        type: "list",
        items: [
          "W-2 forms from all employers",
          "1099 forms for freelance income",
          "Investment statements and 1099-DIV forms",
          "Receipts for deductible expenses",
          "Previous year's tax return"
        ]
      }
    ]
  },
  {
    id: 'small-business-bookkeeping-best-practices',
    title: "Small Business Bookkeeping: Best Practices for Success",
    shortDescription: "Learn essential bookkeeping practices that will keep your small business organized and financially healthy.",
    fullDescription: "Proper bookkeeping is the foundation of any successful business. This article explores the best practices that small business owners should implement to maintain accurate financial records and make informed business decisions.",
    image: "/img/consulting.jpg",
    author: "Michael Chen, CPA",
    publishDate: "2025-01-08",
    readTime: "6 min read",
    category: "Bookkeeping",
    tags: ["Small Business", "Bookkeeping", "Financial Management", "Best Practices"],
    content: [
      {
        type: "paragraph",
        text: "Effective bookkeeping is more than just recording transactions – it's about creating a system that provides valuable insights into your business performance."
      }
    ]
  },
  {
    id: 'understanding-financial-statements',
    title: "Understanding Financial Statements: A Guide for Business Owners",
    shortDescription: "Decode your financial statements and learn how to use them to make better business decisions.",
    fullDescription: "Financial statements are powerful tools that tell the story of your business's financial health. This guide breaks down the three main financial statements and explains how to interpret the key metrics that matter most to your business success.",
    image: "/img/real estate.jpg",
    author: "Emily Rodriguez, CPA",
    publishDate: "2025-01-05",
    readTime: "10 min read",
    category: "Financial Analysis",
    tags: ["Financial Statements", "Business Analysis", "Cash Flow", "Profit & Loss"],
    content: [
      {
        type: "paragraph",
        text: "Understanding your financial statements is crucial for making informed business decisions and tracking your company's performance over time."
      }
    ]
  },
  {
    id: 'year-end-tax-strategies',
    title: "Year-End Tax Strategies to Minimize Your 2024 Tax Bill",
    shortDescription: "Discover last-minute tax strategies that can help reduce your tax liability before year-end.",
    fullDescription: "As the year comes to a close, there are still opportunities to implement tax strategies that can significantly impact your 2024 tax bill. This article covers actionable strategies for both individuals and businesses.",
    image: "/img/audit cm.jpg",
    author: "David Park, CPA",
    publishDate: "2024-12-28",
    readTime: "7 min read",
    category: "Tax Strategy",
    tags: ["Year-End Planning", "Tax Strategies", "Deductions", "Tax Savings"],
    content: [
      {
        type: "paragraph",
        text: "The end of the year presents unique opportunities to implement tax strategies that can reduce your overall tax burden."
      }
    ]
  },
  {
    id: 'cash-flow-management-tips',
    title: "Cash Flow Management: Keeping Your Business Financially Healthy",
    shortDescription: "Master the art of cash flow management with practical tips and strategies for maintaining positive cash flow.",
    fullDescription: "Cash flow is the lifeblood of any business. Poor cash flow management is one of the leading causes of business failure, even for profitable companies. Learn how to effectively manage your cash flow to ensure business sustainability.",
    image: "/img/comp.jpg",
    author: "Lisa Thompson, CPA",
    publishDate: "2024-12-20",
    readTime: "9 min read",
    category: "Financial Management",
    tags: ["Cash Flow", "Business Finance", "Financial Planning", "Working Capital"],
    content: [
      {
        type: "paragraph",
        text: "Effective cash flow management is essential for business survival and growth, regardless of your company's profitability on paper."
      }
    ]
  },
  {
    id: 'choosing-business-structure',
    title: "Choosing the Right Business Structure: LLC vs Corporation vs Partnership",
    shortDescription: "Compare different business structures and learn which one might be best for your specific situation.",
    fullDescription: "Selecting the right business structure is one of the most important decisions you'll make as an entrepreneur. This comprehensive guide compares the pros and cons of different business entities to help you make an informed choice.",
    image: "/img/real.jpg",
    author: "Robert Kim, CPA",
    publishDate: "2024-12-15",
    readTime: "12 min read",
    category: "Business Planning",
    tags: ["Business Structure", "LLC", "Corporation", "Partnership", "Tax Implications"],
    content: [
      {
        type: "paragraph",
        text: "The business structure you choose will have long-lasting implications for taxes, liability, and operational flexibility."
      }
    ]
  }
];

export function getBlogById(id) {
  return blogsData.find(blog => blog.id === id);
}

export function getAllBlogs() {
  return blogsData;
}

export function getBlogsByCategory(category) {
  return blogsData.filter(blog => blog.category === category);
}

export function getRecentBlogs(limit = 3) {
  return blogsData
    .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
    .slice(0, limit);
}