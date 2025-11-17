import Link from 'next/link';
import { getContactInfo } from '../data/contact';
import ContactForm from './ContactForm';

export default function Contact() {
  const contact = getContactInfo();

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2
            className="font-bold text-4xl mb-4"
            style={{ color: 'var(--black)' }}
          >
            Get In Touch
          </h2>
          <p
            className="font-normal text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--medium-gray)' }}
          >
            Ready to take control of your finances? Contact us today for a free consultation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3
                className="font-medium text-2xl mb-6"
                style={{ color: 'var(--black)' }}
              >
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-beige rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1" style={{ color: 'var(--black)' }}>
                      Phone
                    </h4>
                    <a 
                      href={`tel:${contact.phone}`}
                      className="text-primary-brown hover:text-dark-brown transition-colors"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-beige rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1" style={{ color: 'var(--black)' }}>
                      Email
                    </h4>
                    <a 
                      href={`mailto:${contact.email}`}
                      className="text-primary-brown hover:text-dark-brown transition-colors"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-beige rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-2" style={{ color: 'var(--black)' }}>
                      Address
                    </h4>
                    <div className="leading-relaxed" style={{ color: 'var(--medium-gray)' }}>
                      <p>{contact.address.street}</p>
                      <p>{contact.address.suite}</p>
                      <p>{contact.address.city}, {contact.address.state} {contact.address.zip}</p>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-beige rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-2" style={{ color: 'var(--black)' }}>
                      Business Hours
                    </h4>
                    <div className="leading-relaxed" style={{ color: 'var(--medium-gray)' }}>
                      <p>{contact.hours.weekdays}</p>
                      <p>{contact.hours.saturday}</p>
                      <p>{contact.hours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}