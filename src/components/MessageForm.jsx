'use client';

import { useState } from 'react';
import { getContactReasons } from '../data/contact';

export default function MessageForm() {
  const reasons = getContactReasons();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        reason: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h3
        className="font-medium text-2xl mb-6"
        style={{ color: 'var(--black)' }}
      >
        Send us a Message
      </h3>

      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-beige border border-light-brown rounded-lg">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-primary-brown mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-dark-brown">Thank you! We'll get back to you within 24 hours.</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: 'var(--black)' }}>
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent transition-colors"
            placeholder="Enter your full name"
          />
        </div>

        {/* Email and Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--black)' }}>
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent transition-colors"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2" style={{ color: 'var(--black)' }}>
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent transition-colors"
              placeholder="(555) 123-4567"
            />
          </div>
        </div>

        {/* Service Interest */}
        <div>
          <label htmlFor="reason" className="block text-sm font-medium mb-2" style={{ color: 'var(--black)' }}>
            How can we help you? *
          </label>
          <select
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent transition-colors"
          >
            <option value="">Select a service</option>
            {reasons.map((reason, index) => (
              <option key={index} value={reason}>
                {reason}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'var(--black)' }}>
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent transition-colors resize-vertical"
            placeholder="Tell us about your needs and how we can help you..."
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full text-white py-4 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ backgroundColor: '#8B7355' }}
            onMouseEnter={(e) => !isSubmitting && (e.target.style.backgroundColor = '#5C4A3A')}
            onMouseLeave={(e) => !isSubmitting && (e.target.style.backgroundColor = '#8B7355')}
          >
            {isSubmitting ? 'Sending Message...' : 'Send Message'}
          </button>
        </div>
      </form>
    </div>
  );
}
