import Link from 'next/link';
import { getContactInfo } from '../../data/contact';
import ContactForm from '../../components/ContactForm';

export default function ContactPage() {
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
            Contact Us
          </h1>
          <p
            className="font-normal text-xl max-w-3xl mx-auto"
            style={{ color: 'var(--medium-gray)' }}
          >
            Ready to take control of your finances? Get in touch with our expert team for personalized accounting solutions
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Contact Information Sidebar */}
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
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

              {/* Quick Actions */}
              <div className="rounded-xl p-6 bg-[#E8DCC8]">
                <h3
                  className="font-medium text-xl mb-4"
                  style={{ color: 'var(--black)' }}
                >
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <a
                    href={`tel:${contact.phone}`}
                    className="block w-full text-white text-center py-3 rounded-lg font-medium transition-colors bg-[#8B7355] hover:bg-[#5C4A3A]"
                  >
                    Call Now
                  </a>
                  <a
                    href={`mailto:${contact.email}`}
                    className="block w-full text-center py-3 rounded-lg font-medium transition-colors border-2 border-[#8B7355] text-[#8B7355] hover:bg-[#8B7355] hover:text-white"
                  >
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}