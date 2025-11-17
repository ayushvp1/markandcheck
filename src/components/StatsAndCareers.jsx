"use client";

import { useState, useEffect, useRef } from 'react';

export default function StatsAndCareers() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState([0, 0, 0, 0]);
  const sectionRef = useRef(null);

  const stats = [
    {
      number: 15,
      label: "PROPRIETORSHIP"
    },
    {
      number: 15,
      label: "PARTNERSHIP"
    },
    {
      number: 50,
      label: "CORPORATES"
    },
    {
      number: 15,
      label: "TRUST & NGO"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateNumbers();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateNumbers = () => {
    stats.forEach((stat, index) => {
      let current = 0;
      const increment = stat.number / 100;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.number) {
          current = stat.number;
          clearInterval(timer);
        }
        setAnimatedNumbers(prev => {
          const newNumbers = [...prev];
          newNumbers[index] = Math.floor(current);
          return newNumbers;
        });
      }, 20);
    });
  };

  return (
    <section ref={sectionRef} className="relative py-20 bg-[#F5F1E8] text-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-2 h-2 bg-[#8B7355] rounded-full"></div>
        <div className="absolute top-20 left-32 w-1 h-1 bg-[#8B7355] rounded-full"></div>
        <div className="absolute top-32 left-20 w-1.5 h-1.5 bg-[#8B7355] rounded-full"></div>
        <div className="absolute top-16 right-40 w-1 h-1 bg-[#8B7355] rounded-full"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-[#8B7355] rounded-full"></div>
        <div className="absolute bottom-20 left-40 w-1 h-1 bg-[#8B7355] rounded-full"></div>
        <div className="absolute bottom-32 right-32 w-1.5 h-1.5 bg-[#8B7355] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Careers Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Side - Content */}
          <div className="flex-1 lg:max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Mark & Check <span className="text-[#8B7355]">Careers</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are a value driven organisation aspiring to meet the highest 
              professional, legal and ethical standards.
            </p>
          </div>

          {/* Right Side - CTA Button */}
          <div className="flex-shrink-0">
            <a
              href="/careers"
              className="inline-block px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg bg-[#8B7355] text-white hover:bg-[#5C4A3A] shadow-lg hover:shadow-xl"
            >
              JOIN US
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#E8DCC8]/30 to-transparent"></div>
    </section>
  );
}