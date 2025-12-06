'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const BrandsShowcase = () => {
  const sectionRef = useRef(null);
  const marqueeRef = useRef(null);

  const brands = [
    { name: 'Siemens', logo: 'https://via.placeholder.com/150x60/4A628A/FFFFFF?text=SIEMENS' },
    { name: 'Polycab', logo: 'https://via.placeholder.com/150x60/7AB2D3/FFFFFF?text=POLYCAB' },
    { name: 'Havells', logo: 'https://via.placeholder.com/150x60/4A628A/FFFFFF?text=HAVELLS' },
    { name: 'L&T', logo: 'https://via.placeholder.com/150x60/7AB2D3/FFFFFF?text=L%26T' },
    { name: 'OSRAM', logo: 'https://via.placeholder.com/150x60/4A628A/FFFFFF?text=OSRAM' },
    { name: 'Philips', logo: 'https://via.placeholder.com/150x60/7AB2D3/FFFFFF?text=PHILIPS' },
    { name: 'TATA', logo: 'https://via.placeholder.com/150x60/4A628A/FFFFFF?text=TATA' },
    { name: 'Usha', logo: 'https://via.placeholder.com/150x60/7AB2D3/FFFFFF?text=USHA' },
    { name: 'Berger', logo: 'https://via.placeholder.com/150x60/4A628A/FFFFFF?text=BERGER' },
    { name: 'Jindal', logo: 'https://via.placeholder.com/150x60/7AB2D3/FFFFFF?text=JINDAL' },
  ];

  // Duplicate brands for seamless loop - add more duplicates for longer scroll
  const duplicatedBrands = [...brands, ...brands, ...brands, ...brands];

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const marqueeContent = marqueeRef.current.querySelector('.marquee-content');
      const marqueeWidth = marqueeContent.offsetWidth / 4; // Divided by 4 since we have 4 duplicates

      // Base continuous marquee animation (always running)
      const baseMarquee = gsap.to(marqueeContent, {
        x: -marqueeWidth,
        duration: 10, // Slow default speed
        ease: 'none',
        repeat: -2,
      });

      // Scroll-lock: Speed up the marquee based on scroll
      ScrollTrigger.create({
        trigger: sectionRef.current,
        pin: true,
        start: 'top top',
        end: '+=500%', // 2x viewport height of scroll
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          // Speed up marquee: from 1x (default) to 10x speed
          const speedMultiplier = 1 + (self.progress * 9); // 1x to 10x
          baseMarquee.timeScale(speedMultiplier);
        },
        onLeave: () => {
          // Reset to normal speed when leaving scroll-lock
          gsap.to(baseMarquee, { timeScale: 1, duration: 1 });
        },
        onEnterBack: () => {
          // Resume speed control when scrolling back
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Responsive handler
  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white min-h-screen flex items-center">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Authorized Partners of <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">Leading Brands</span>
          </h2>
          <p className="text-xl text-gray-600">
            Trusted dealer and stockist relationships with 20+ international brands
          </p>
        </div>

        {/* Marquee */}
        <div ref={marqueeRef} className="overflow-hidden relative">
          <div className="marquee-content flex space-x-12">
            {duplicatedBrands.map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 h-20 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 font-medium">
            + 20 more authorized partnerships
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandsShowcase;
