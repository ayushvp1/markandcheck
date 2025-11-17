import Link from 'next/link';
import { getServiceById, getAllServices } from '../../../data/services';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((service) => ({
    slug: service.id,
  }));
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getServiceById(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-6xl mx-auto px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[var(--primary-brown)]">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[var(--primary-brown)]">Services</Link>
            <span>/</span>
            <span className="text-gray-900">{service.title}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Title & Intro */}
            <div className="mb-10">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {service.title}
              </h1>
              <p className="text-gray-700 leading-relaxed text-lg">
                {service.fullDescription}
              </p>
            </div>

            {/* Shared big box for features */}
            <div className="mb-12 rounded-2xl bg-[#8B7355] text-white p-6 md:p-8 flex flex-col md:flex-row gap-6">
              {/* Left: image */}
              <div className="md:w-1/2">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Right: bullet list from features */}
              <div className="md:w-1/2 flex flex-col justify-center">
                <ul className="space-y-2 text-xs md:text-sm">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-white flex-shrink-0"></span>
                      <span className="flex-1">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Key Benefits</h2>
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-[var(--cream)] rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-[var(--primary-brown)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Contact Card */}
            <div className="bg-[var(--background-secondary)] rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Get Started?</h3>
              <p className="text-gray-600 mb-6">
                Contact us today to discuss how this service can benefit your business.
              </p>
              <Link 
                href="/contact" 
                className="block w-full bg-[var(--primary-brown)] text-white text-center py-3 rounded-lg font-medium hover:-translate-y-0.5 transform transition-all duration-300 shadow-sm mb-3 hover:bg-[#5C4A3A]"
              >
                Get a Quote
              </Link>
              <Link 
                href="tel:+1234567890" 
                className="block w-full border border-[var(--primary-brown)] text-[var(--primary-brown)] text-center py-3 rounded-lg font-medium hover:bg-[var(--cream)] transition-colors"
              >
                Call Now
              </Link>
            </div>

            {/* Other Services */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Other Services</h3>
              <div className="space-y-3">
                {getAllServices()
                  .filter(s => s.id !== service.id)
                  .slice(0, 4)
                  .map((otherService) => (
                    <Link 
                      key={otherService.id}
                      href={`/services/${otherService.id}`}
                      className="block p-3 bg-white rounded-lg hover:shadow-md transition-shadow"
                    >
                      <h4 className="font-medium text-gray-900 text-sm">{otherService.title}</h4>
                      <p className="text-gray-600 text-xs mt-1 line-clamp-2">
                        {otherService.shortDescription}
                      </p>
                    </Link>
                  ))}
              </div>
              <Link 
                href="/services" 
                className="block text-center text-[var(--primary-brown)] font-medium text-sm mt-4 hover:text-[#5C4A3A]"
              >
                View All Services →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}