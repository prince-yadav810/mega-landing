'use client';

const BrandsShowcase = () => {
  const animationDuration = 60;

  const brands = [
    { name: 'Siemens', logo: '/images/logos/logo_1.png' },
    { name: 'Polycab', logo: '/images/logos/logo_2.png' },
    { name: 'Havells', logo: '/images/logos/logo_3.png' },
    { name: 'L&T', logo: '/images/logos/logo_4.png' },
    { name: 'OSRAM', logo: '/images/logos/logo_5.png' },
    { name: 'Philips', logo: '/images/logos/logo_1.png' },
    { name: 'TATA', logo: '/images/logos/logo_2.png' },
    { name: 'Usha', logo: '/images/logos/logo_3.png' },
    { name: 'Berger', logo: '/images/logos/logo_4.png' },
    { name: 'Jindal', logo: '/images/logos/logo_5.png' },
  ];

  return (
    <div className="bg-white">
      <style jsx>{`
        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .marquee-track {
          display: flex;
          width: fit-content;
          animation: marquee-scroll ${animationDuration}s linear infinite;
        }
        
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <section className="py-24 flex items-center">
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

          {/* Infinite Marquee */}
          <div className="overflow-hidden relative">
            <div className="marquee-track">
              {/* First set of brands */}
              {brands.map((brand, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-40 h-20 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all mx-6"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {brands.map((brand, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-40 h-20 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all mx-6"
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
    </div>
  );
};

export default BrandsShowcase;
