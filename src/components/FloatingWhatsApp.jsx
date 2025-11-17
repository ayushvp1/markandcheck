"use client";

import { useState } from 'react';

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="https://wa.me/919946137111"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Contact us on WhatsApp"
    >
      {/* Tooltip */}
      <div
        className={`absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
        }`}
      >
        Chat with us on WhatsApp
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-gray-900"></div>
      </div>

      {/* WhatsApp Button */}
      <div className="bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-8 h-8 fill-current"
        >
          <path d="M16.01 5C10.49 5 6 9.49 6 15.02c0 1.89.52 3.73 1.51 5.34L6 27l6.8-1.47A9.94 9.94 0 0 0 16.01 25C21.53 25 26 20.51 26 14.98 26 9.46 21.53 5 16.01 5zm5.8 14.26c-.24.68-1.17 1.24-1.92 1.4-.51.11-1.18.19-3.43-.74-2.88-1.19-4.73-4.12-4.87-4.31-.14-.19-1.16-1.54-1.16-2.94 0-1.4.74-2.08 1.01-2.37.27-.29.59-.36.79-.36.2 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.82 2.01.89 2.15.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.17-.3.37-.43.5-.14.14-.29.29-.12.57.17.29.74 1.23 2 1.09.97 2.01 1.28 2.31 1.42.3.14.47.12.64-.07.17-.19.74-.86.94-1.16.2-.29.4-.24.66-.14.27.1 1.71.81 2.01.96.3.15.5.22.57.34.07.12.07.7-.17 1.38z" />
        </svg>
      </div>

      {/* Pulse animation */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>
    </a>
  );
}
