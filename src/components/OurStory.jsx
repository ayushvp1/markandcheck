"use client";

import { useEffect, useRef, useState } from "react";

export default function OurStory() {
  const [isVisible, setIsVisible] = useState(false);
  const [statsValues, setStatsValues] = useState([0, 0, 0, 0]);
  const sectionRef = useRef(null);

  const targetStats = [2, 2500, 1000, 50];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateStats();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateStats = () => {
    targetStats.forEach((target, index) => {
      let current = 0;
      const increment = target / 80;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }

        setStatsValues(prev => {
          const updated = [...prev];
          updated[index] = Math.floor(current);
          return updated;
        });
      }, 25);
    });
  };

  return (
    <section ref={sectionRef} className="py-16 bg-white" id="our-story">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex flex-col items-center mb-6">
          <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-[#8B7355]"></div>
        </div>

        <div className="max-w-4xl mx-auto text-gray-700 text-base sm:text-lg leading-relaxed space-y-4">
          <p>
            Mark &amp; Check is a Kozhikode-based professional services firm founded in 2013 by Adv. Rafeeque
            Hussain A.K. and CA Ahmmed Razi K.M. With expertise in audit, internal audit, compliance, and
            corporate legal advisory, we deliver accurate, structured, and reliable solutions for businesses
            across industries.
          </p>
          <p>
            Backed by a 50+ member multidisciplinary team, we have completed 2500+ projects and served over
            1000 clients. Our commitment to integrity, transparency, and disciplined execution makes us a trusted
            partner in regulatory and advisory excellence.
          </p>
        </div>

        {/* Stats row below story */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div>
            <p className="text-3xl font-bold text-[#8B7355]">{statsValues[0]}+</p>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 uppercase tracking-wide">Years of Experience</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#8B7355]">{statsValues[1]}+</p>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 uppercase tracking-wide">Completed Projects</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#8B7355]">{statsValues[2]}+</p>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 uppercase tracking-wide">Clients</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#8B7355]">{statsValues[3]}+</p>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 uppercase tracking-wide">Team Members</p>
          </div>
        </div>
      </div>
    </section>
  );
}
