"use client";

import { useState, useEffect } from 'react';

// Banner images and their corresponding content
const banners = [
  {
    image: '/img/slide1.jpg',
    title: 'Welcome to Mark & Check',
    subtitle: 'Your partner in financial excellence and business growth',
    highlight: 'Professional accounting & legal services'
  },
  {
    image: '/img/slide2.jpg',
    title: 'Expert Internal Audit & Compliance',
    subtitle: 'Ensuring regulatory clarity and strategic compliance for your business',
    highlight: 'Trusted by 1000+ clients'
  },
  {
    image: '/img/slide3.jpg',
    title: 'Empowering Your Business Success',
    subtitle: 'Comprehensive solutions tailored to your unique needs',
    highlight: 'Tax, Audit, Corporate Advisory & More'
  }
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
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <img
              src={banner.image}
              alt={`Professional accounting banner ${index + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                console.log(`Failed to load image: ${banner.image}`);
                e.target.style.display = 'none';
              }}
            />
          </div>
        ))}
        {/* Strong white gradient at top for logo visibility */}
        <div className="absolute top-0 left-0 right-0 h-56 bg-gradient-to-b from-white via-white/70 to-transparent"></div>
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
            className="h-12 md:h-16 w-auto"
            style={{ filter: 'drop-shadow(0 0 15px rgba(255,255,255,1)) drop-shadow(0 0 25px rgba(255,255,255,0.5)) drop-shadow(0 0 35px rgba(255,255,255,0.5))' }}
          />
        </a>
      </div>

      {/* Content Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full pt-32">
        <div className="max-w-5xl">
          {/* Text container with fixed height */}
          <div className="min-h-[380px] mb-8">
            <h1 className="font-medium text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight text-white transition-opacity duration-500">
              {banners[currentSlide].title}
            </h1>
            <p className="font-normal text-base md:text-lg mb-8 leading-relaxed text-white transition-opacity duration-500">
              {banners[currentSlide].subtitle}
            </p>
          </div>
          {/* Fixed position buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-start items-stretch sm:items-center">
            <a
              href="#contact"
              className="bg-primary-brown text-white hover:bg-dark-brown px-8 py-4 rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Your Journey
            </a>
            <a
              href="#services"
              className="border-2 border-primary-brown text-white hover:bg-primary-brown px-8 py-4 rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center text-lg"
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