import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Registration', href: '/services/registration' },
    { name: 'Corporate Advisory', href: '/services/corporate-advisory' },
    { name: 'Compliance & Regulatory', href: '/services/compliance-regulatory' },
    { name: 'Audit & Assurance', href: '/services/audit-assurance' },
    { name: 'Taxation', href: '/services/taxation' },
    { name: 'Intellectual Property Rights', href: '/services/intellectual-property-rights' },
    { name: 'Drafting & Documentation', href: '/services/drafting-documentation' },
    { name: 'Startup & MSME', href: '/services/startup-msme' }
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blogs' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <footer className="bg-[#F5F1ED] text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info with Logo */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-4 cursor-pointer">
              <img
                src="/img/Mark_N_Check_Logo_Vector.png"
                alt="Mark & Check Logo"
                className="h-20 w-auto"
              />
            </Link>
            <p className="mb-4 text-gray-600">
              Your trusted partner for internal audit, regulatory clarity, and strategic compliance.
              We provide expert legal, tax, and corporate advisory services with precision and care.
            </p>
            <p className="text-sm font-semibold text-gray-700 mb-3">Follow Us On</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1BWr9jdAKG/" target="_blank" rel="noopener noreferrer" className="text-gray-600 transition-colors hover:text-[#8B7355]">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/markncheck/" target="_blank" rel="noopener noreferrer" className="text-gray-600 transition-colors hover:text-[#8B7355]">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/markncheck?igshid=dWo4MWI4dXJmOXBy" target="_blank" rel="noopener noreferrer" className="text-gray-600 transition-colors hover:text-[#8B7355]">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5.5-3a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-600 transition-colors hover:text-[#8B7355]"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 transition-colors hover:text-[#8B7355]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Contact Info</h3>
            <div className="space-y-3">
              {/* Kozhikode Office */}
              <div className="mb-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 mt-1 mr-3 text-[#8B7355]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-gray-700 font-semibold text-sm mb-1">Kozhikode Office</p>
                    <p className="text-gray-600 text-sm">#2221, HiLite Business Park, Phase II</p>
                    <p className="text-gray-600 text-sm">2nd Floor, HiLite City</p>
                    <p className="text-gray-600 text-sm">Kozhikode, Kerala 673014, India</p>
                    <p className="text-gray-600 text-sm mt-1">Phone: +91 9946137111</p>
                  </div>
                </div>
              </div>

              {/* Kochi Office */}
              <div className="mb-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 mt-1 mr-3 text-[#8B7355]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-gray-700 font-semibold text-sm mb-1">Kochi Office</p>
                    <p className="text-gray-600 text-sm">1st Floor, Muhammad Haji Building</p>
                    <p className="text-gray-600 text-sm">Railway Station Road Near Lulu Mall</p>
                    <p className="text-gray-600 text-sm">Edappallly PO, Kochi, Kerala 682024, India</p>
                    <p className="text-gray-600 text-sm mt-1">Phone: +91 9633776546</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <svg className="h-5 w-5 mr-3 text-[#8B7355]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:markncheck@gmail.com" className="text-gray-600 transition-colors hover:text-[#8B7355]">
                  markncheck@gmail.com
                </a>
              </div>

              <div className="flex items-center">
                <svg className="h-5 w-5 mr-3 text-[#8B7355]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-gray-600">
                  <p>Monday – Saturday: 9:30 AM – 6:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              &copy; {currentYear} Mark &amp; Check. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-600 hover:text-[#8B7355] text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-[#8B7355] text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-600 hover:text-[#8B7355] text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
