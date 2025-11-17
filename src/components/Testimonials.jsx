export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Tech Startup Inc.",
      text: "Their attention to detail and accuracy has been invaluable to our growing business. Highly recommended!",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Retail Solutions LLC",
      text: "Professional, reliable, and always available when we need them. They've simplified our financial processes.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Creative Agency Co.",
      text: "The team's expertise in tax planning saved us thousands. Their strategic advice is worth its weight in gold.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-16" style={{ backgroundColor: 'var(--off-white)' }}>
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 
            className="font-medium text-3xl mb-4"
            style={{ color: 'var(--black)' }}
          >
            What Our Clients Say
          </h2>
          <p 
            className="font-normal text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--medium-gray)' }}
          >
            Trusted by businesses across various industries
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 bg-white rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-sm">⭐</span>
                ))}
              </div>
              <p 
                className="font-normal italic mb-6 leading-relaxed"
                style={{ color: 'var(--medium-gray)' }}
              >
                "{testimonial.text}"
              </p>
              <div className="border-t border-gray-100 pt-4">
                <h4 
                  className="font-medium mb-1"
                  style={{ color: 'var(--black)' }}
                >
                  {testimonial.name}
                </h4>
                <p 
                  className="font-normal text-sm"
                  style={{ color: 'var(--light-gray)' }}
                >
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}