'use client';

import { useRef, useEffect, useState } from 'react';

export default function Clients() {
  const clients = [
    { name: "Careland", image: "/img/trusted_companies/Careland.jpg" },
    { name: "Talenmark", image: "/img/trusted_companies/Talenmark.jpg" },
    { name: "Woodlem Park", image: "/img/trusted_companies/Woodlem Park.jpg" },
    { name: "Faceworld Leadership School", image: "/img/trusted_companies/faceworldleadershipschool.jpg" },
    { name: "Hillsinai Finishing School", image: "/img/trusted_companies/hillsinaifinishingschool.jpg" },
    { name: "Life Infusion Pharmaceuticals Pvt. Ltd.", image: "/img/trusted_companies/lifeinfusionpharmaceuticalsprivatelimited.jpg" },
    { name: "Tour De Stories", image: "/img/trusted_companies/tourdestories.jpg" }
  ];

  const scrollRef = useRef(null);
  const mobileScrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [isMobileTouching, setIsMobileTouching] = useState(false);
  const interactionTimeout = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setIsUserInteracting(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);

    // Clear any existing timeout
    if (interactionTimeout.current) {
      clearTimeout(interactionTimeout.current);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);

    // Resume animation after 500ms of no interaction
    interactionTimeout.current = setTimeout(() => {
      setIsUserInteracting(false);
    }, 500);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsHovering(false);

    // Resume animation after 500ms of no interaction
    interactionTimeout.current = setTimeout(() => {
      setIsUserInteracting(false);
    }, 500);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleScroll = () => {
    setIsUserInteracting(true);

    // Clear existing timeout
    if (interactionTimeout.current) {
      clearTimeout(interactionTimeout.current);
    }

    // Resume animation after 500ms of no scrolling
    interactionTimeout.current = setTimeout(() => {
      setIsUserInteracting(false);
    }, 500);
  };

  // Touch event handlers for mobile
  const handleTouchStart = () => {
    setIsMobileTouching(true);
    if (interactionTimeout.current) {
      clearTimeout(interactionTimeout.current);
    }
  };

  const handleTouchEnd = () => {
    interactionTimeout.current = setTimeout(() => {
      setIsMobileTouching(false);
    }, 1000);
  };

  const handleMobileScroll = () => {
    setIsMobileTouching(true);
    if (interactionTimeout.current) {
      clearTimeout(interactionTimeout.current);
    }
    interactionTimeout.current = setTimeout(() => {
      setIsMobileTouching(false);
    }, 500);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (interactionTimeout.current) {
        clearTimeout(interactionTimeout.current);
      }
    };
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <style jsx>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
            .scrollbar-hide-mobile::-webkit-scrollbar {
              display: none;
              width: 0;
              height: 0;
            }
            .scrollbar-hide-mobile {
              -ms-overflow-style: none;
              scrollbar-width: none;
              -webkit-overflow-scrolling: touch;
            }
            .scrollbar-hide-mobile::-webkit-scrollbar-track {
              display: none;
            }
            .scrollbar-hide-mobile::-webkit-scrollbar-thumb {
              display: none;
            }
            @keyframes scroll-desktop {
              0% {
                transform: translateX(0) translateZ(0);
              }
              100% {
                transform: translateX(-230%) translateZ(0);
              }
            }
            @keyframes scroll-mobile {
              0% {
                transform: translateX(0) translateZ(0);
              }
              100% {
                transform: translateX(-50%) translateZ(0);
              }
            }
            .scroll-container-desktop {
              animation: scroll-desktop 14.5s linear infinite;
              will-change: transform;
              -webkit-transform: translateZ(0);
              transform: translateZ(0);
              backface-visibility: hidden;
              -webkit-backface-visibility: hidden;
            }
            .scroll-container-desktop.paused {
              animation-play-state: paused;
            }
            .scroll-container-mobile {
              animation: scroll-mobile 10s linear infinite;
              will-change: transform;
              -webkit-transform: translateZ(0);
              transform: translateZ(0);
              backface-visibility: hidden;
              -webkit-backface-visibility: hidden;
              -webkit-animation: scroll-mobile 10s linear infinite;
              width: max-content;
            }
            .scroll-container-mobile.paused {
              animation-play-state: paused;
              -webkit-animation-play-state: paused;
            }
          `}</style>
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2
            className="font-bold text-4xl mb-4"
            style={{ color: 'var(--black)' }}
          >
            Our Client Network
          </h2>
          <p
            className="font-normal text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--medium-gray)' }}
          >
            We're proud to serve businesses across diverse industries
          </p>
        </div>

        {/* Desktop Scrolling Clients */}
        <div
          ref={scrollRef}
          className="relative overflow-x-auto overflow-y-hidden cursor-grab active:cursor-grabbing scrollbar-hide hidden md:block"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
          onScroll={handleScroll}
        >

          <div className={`flex scroll-container-desktop ${isUserInteracting || isHovering ? 'paused' : ''}`}>
            {/* First set of clients */}
            {clients.map((client, index) => (
              <div
                key={`desktop-first-${index}`}
                className="flex-shrink-0 mx-5 transition-transform duration-300 hover:scale-110"
                style={{ willChange: 'transform' }}
              >
                <img
                  src={client.image}
                  alt={client.name}
                  className="h-60 w-auto object-contain shadow-md pointer-events-none"
                />
              </div>
            ))}
            {/* Second set for seamless loop */}
            {clients.map((client, index) => (
              <div
                key={`desktop-second-${index}`}
                className="flex-shrink-0 mx-5 transition-transform duration-300 hover:scale-110"
                style={{ willChange: 'transform' }}
              >
                <img
                  src={client.image}
                  alt={client.name}
                  className="h-60 w-auto object-contain shadow-md pointer-events-none"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Scrolling Clients */}
        <div
          ref={mobileScrollRef}
          className="relative overflow-x-auto block md:hidden scrollbar-hide-mobile"
          style={{
            WebkitOverflowScrolling: 'touch',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none'
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onScroll={handleMobileScroll}
        >
          <div className={`flex gap-4 px-4 scroll-container-mobile ${isMobileTouching ? 'paused' : ''}`}>
            {/* First set of clients */}
            {clients.map((client, index) => (
              <div
                key={`mobile-first-${index}`}
                className="flex-shrink-0"
                style={{ willChange: 'transform' }}
              >
                <img
                  src={client.image}
                  alt={client.name}
                  className="h-48 w-auto object-contain shadow-md pointer-events-none"
                />
              </div>
            ))}
            {/* Second set for seamless loop */}
            {clients.map((client, index) => (
              <div
                key={`mobile-second-${index}`}
                className="flex-shrink-0"
                style={{ willChange: 'transform' }}
              >
                <img
                  src={client.image}
                  alt={client.name}
                  className="h-48 w-auto object-contain shadow-md pointer-events-none"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
