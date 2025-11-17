"use client";

import { useState, useEffect } from 'react';

// Sample banner images — replace with your actual paths
const banners = [
  '/img/tabs/img1.jpg',
  '/img/tabs/img2.jpg',
  '/img/tabs/img3.jpg',
];

export default function Header() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <header id="home" className="min-h-screen flex items-center text-left relative overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        {banners.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <img
              src={src}
              alt={`Professional accounting banner ${index + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                console.log(`Failed to load image: ${src}`);
                e.target.style.display = 'none';
              }}
            />
          </div>
        ))}
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Logo */}
      <div className="absolute top-6 left-8 z-20">
        <a
          href="/"
          className="block"
          aria-label="Mark & Check - Go to Homepage"
        >
          <img
            src="/img/Mark_N_Check_Logo.png"
            alt="Mark & Check Logo"
            className="h-16 md:h-20 w-auto"
          />
        </a>
      </div>

      {/* Content Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <div className="max-w-4xl">
          <h1 className="font-medium text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight text-white">
            Your trusted partner for internal audit, regulatory clarity, and strategic compliance
          </h1>
          <p className="font-normal text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl text-white/90">
            <span className="bg-beige text-black px-0 py-1 rounded-lg">
              Professional accounting services
            </span>
            {'  '}that help your business grow  with confidence and clarity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-start items-start sm:items-center">
            <a
              href="#contact"
              className="bg-primary-brown text-white hover:bg-dark-brown px-8 py-4 rounded-lg font-medium transition-all duration-300 inline-flex items-center text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Your Journey
            </a>
            <a
              href="#services"
              className="border-2 border-primary-brown text-white hover:bg-primary-brown px-8 py-4 rounded-lg font-medium transition-all duration-300 inline-flex items-center text-lg"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                ? 'bg-white shadow-lg scale-110'
                : 'bg-white/50 hover:bg-white/75'
              }`}
          />
        ))}
      </div>
    </header>
  );
}