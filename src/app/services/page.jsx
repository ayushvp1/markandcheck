'use client';

import Link from 'next/link';
import { getAllServices } from '../../data/services';

export default function ServicesPage() {
    const services = getAllServices();

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="gradient-green-light text-black py-16">
                <div className="max-w-6xl mx-auto px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto">
                        Comprehensive accounting and financial solutions tailored to your business needs
                    </p>
                </div>
            </div>

            {/* Services Grid */}
            <div className="max-w-6xl mx-auto px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => {
                        const getServiceIcon = (id) => {
                            const icons = {
                                'registration': (
                                    <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="12" y="8" width="32" height="44" rx="2" />
                                        <path d="M20 16h16M20 24h16M20 32h10" strokeLinecap="round" />
                                        <path d="M44 40l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                ),
                                'corporate-advisory': (
                                    <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="16" y="32" width="32" height="20" rx="2" />
                                        <path d="M24 32V24a8 8 0 0116 0v8" />
                                        <circle cx="32" cy="42" r="2" fill="currentColor" />
                                        <path d="M32 44v4" strokeLinecap="round" />
                                    </svg>
                                ),
                                'compliance-regulatory': (
                                    <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M32 8l20 8v16c0 12-8 20-20 28-12-8-20-16-20-28V16l20-8z" />
                                        <path d="M24 32l6 6 10-12" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                ),
                                'audit-assurance': (
                                    <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="28" cy="28" r="12" />
                                        <path d="M36 36l12 12" strokeLinecap="round" />
                                        <path d="M24 28h8M28 24v8" strokeLinecap="round" />
                                    </svg>
                                ),
                                'taxation': (
                                    <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="16" y="12" width="32" height="40" rx="2" />
                                        <path d="M24 20h16M24 28h16M24 36h10" strokeLinecap="round" />
                                        <circle cx="44" cy="44" r="8" />
                                        <path d="M41 41l6 6" strokeLinecap="round" />
                                    </svg>
                                ),
                                'intellectual-property-rights': (
                                    <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="32" cy="28" r="16" />
                                        <path d="M28 24h8M32 24v8" strokeLinecap="round" />
                                        <path d="M20 44h24" strokeLinecap="round" />
                                        <path d="M32 40v8" strokeLinecap="round" />
                                    </svg>
                                ),
                                'drafting-documentation': (
                                    <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="16" y="8" width="32" height="48" rx="2" />
                                        <path d="M24 20h16M24 28h16M24 36h12" strokeLinecap="round" />
                                    </svg>
                                ),
                                'startup-msme': (
                                    <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M32 12v8M32 44v8M12 32h8M44 32h8" strokeLinecap="round" />
                                        <circle cx="32" cy="32" r="12" />
                                        <path d="M28 32l3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                ),
                            };
                            return icons[id] || icons['registration'];
                        };

                        return (
                            <Link
                                key={service.id}
                                href={`/services/${service.id}`}
                                className="group bg-[#8B7355] text-white rounded-2xl p-8 min-h-[280px] flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl shadow-lg hover:bg-[#6B5845]"
                            >
                                <div className="mb-6">
                                    {getServiceIcon(service.id)}
                                </div>
                                
                                <div className="flex-1">
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="text-xl font-semibold flex-1">
                                            {service.title}
                                        </h3>
                                        <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
                                            </svg>
                                        </div>
                                    </div>

                                    <p className="text-sm text-white/90 leading-relaxed">
                                        {service.shortDescription}
                                    </p>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <div className="bg-gray-50 rounded-2xl p-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            Need a Custom Solution?
                        </h2>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            We understand that every business is unique. Contact us to discuss how we can tailor our services to meet your specific needs.
                        </p>
                        <Link
                            href="/contact-simple"
                            className="inline-block text-white px-8 py-3 rounded-lg font-medium transition-colors"
                            style={{ backgroundColor: '#8B7355' }}
                            onMouseEnter={(e) => (e.target.style.backgroundColor = '#6B5845')}
                            onMouseLeave={(e) => (e.target.style.backgroundColor = '#8B7355')}
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}