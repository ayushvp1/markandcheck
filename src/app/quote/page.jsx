'use client';

import { getContactInfo } from '../../data/contact';
import ContactForm from '../../components/ContactForm';

function QuoteForm() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h3
        className="font-medium text-2xl mb-6"
        style={{ color: 'var(--black)' }}
      >
        Request a Service Quote
      </h3>

      <form className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: 'var(--black)' }}>
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent transition-colors"
            placeholder="Enter your full name"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2" style={{ color: 'var(--black)' }}>
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent transition-colors"
            placeholder="(555) 123-4567"
          />
        </div>

        {/* Address */}
        <div>
          <label htmlFor="address" className="block text-sm font-medium mb-2" style={{ color: 'var(--black)' }}>
            Address *
          </label>
          <textarea
            id="address"
            name="address"
            required
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent transition-colors resize-vertical"
            placeholder="Enter your full address"
          />
        </div>

        {/* Email Address */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--black)' }}>
            Email ID *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent transition-colors"
            placeholder="your@email.com"
          />
        </div>

        {/* Message / Requirements */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'var(--black)' }}>
            Service Requirements *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent transition-colors resize-vertical"
            placeholder="Briefly describe the services you need and your business details"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full text-white py-4 rounded-lg font-medium transition-colors"
            style={{ backgroundColor: '#8B7355' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#6B5845')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#8B7355')}
          >
            Get Quote
          </button>
        </div>
      </form>
    </div>
  );
}

export default function QuotePage() {
  const contact = getContactInfo();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="py-16 bg-[#F5F1E8]">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h1
            className="font-medium text-5xl mb-4"
            style={{ color: 'var(--black)' }}
          >
            Get a Quote
          </h1>
          <p
            className="font-normal text-xl max-w-3xl mx-auto"
            style={{ color: 'var(--medium-gray)' }}
          >
            Tell us about your business and the services you need, and well get back to you with a tailored proposal.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Quote Form */}
          <div className="lg:col-span-2">
            <QuoteForm />
          </div>

          {/* Contact Information Sidebar (reused from contact page) */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Contact Info Card */}
              <div className="bg-[#F5F1E8] rounded-xl p-6">
                <h3
                  className="font-medium text-xl mb-6"
                  style={{ color: 'var(--black)' }}
                >
                  Get in Touch
                </h3>

                <div className="space-y-4">
                  {/* Phone */}
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-[#E8DCC8] rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#8B7355]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium" style={{ color: 'var(--black)' }}>Phone</p>
                      <a
                        href={`tel:${contact.phone}`}
                        className="transition-colors text-sm text-[#8B7355] hover:text-[#5C4A3A]"
                      >
                        {contact.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-[#E8DCC8] rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#8B7355]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium" style={{ color: 'var(--black)' }}>Email</p>
                      <a
                        href={`mailto:${contact.email}`}
                        className="transition-colors text-sm text-[#8B7355] hover:text-[#5C4A3A]"
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-[#E8DCC8] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#8B7355]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-2" style={{ color: 'var(--black)' }}>Address</p>
                      <div className="text-sm leading-relaxed" style={{ color: 'var(--medium-gray)' }}>
                        <p>{contact.offices[0].street}</p>
                        <p>{contact.offices[0].suite}</p>
                        <p>{contact.offices[0].city}, {contact.offices[0].state} {contact.offices[0].zip}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="rounded-xl p-6 bg-[#E8DCC8]">
                <h3
                  className="font-medium text-xl mb-4"
                  style={{ color: 'var(--black)' }}
                >
                  Business Hours
                </h3>
                <div className="space-y-2 text-sm" style={{ color: 'var(--medium-gray)' }}>
                  <p>{contact.hours.weekdays}</p>
                  <p>{contact.hours.saturday}</p>
                  <p>{contact.hours.sunday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
