'use client';

import { Star } from 'lucide-react';
import GlassSurface from '../ui/GlassSurface';

const ClientsShowcase = () => {
  const clients = [
    { name: 'TATA Projects', logo: 'https://via.placeholder.com/200x100/4A628A/FFFFFF?text=TATA' },
    { name: 'Afcons Infrastructure', logo: 'https://via.placeholder.com/200x100/7AB2D3/FFFFFF?text=AFCONS' },
    { name: 'HCC Ltd', logo: 'https://via.placeholder.com/200x100/4A628A/FFFFFF?text=HCC' },
    { name: 'J Kumar Infra', logo: 'https://via.placeholder.com/200x100/7AB2D3/FFFFFF?text=J+KUMAR' },
    { name: 'ITD Cementation', logo: 'https://via.placeholder.com/200x100/4A628A/FFFFFF?text=ITD' },
    { name: 'NCC Ltd', logo: 'https://via.placeholder.com/200x100/7AB2D3/FFFFFF?text=NCC' },
    { name: 'Godrej Properties', logo: 'https://via.placeholder.com/200x100/4A628A/FFFFFF?text=GODREJ' },
    { name: 'Leighton India', logo: 'https://via.placeholder.com/200x100/7AB2D3/FFFFFF?text=LEIGHTON' },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-100 rounded-full px-4 py-2 mb-6">
            <Star className="w-5 h-5 text-primary-700 fill-primary-700" />
            <span className="text-sm font-semibold text-primary-700">Trusted by Industry Leaders</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Serving India's <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">Leading Infrastructure</span> Companies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From government PSUs to private enterprises, we're the trusted material supply partner for major construction and industrial projects across India
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group transform hover:-translate-y-2 transition-all duration-300"
            >
              <GlassSurface
                width="100%"
                height={120}
                borderRadius={16}
                brightness={98}
                opacity={0.4}
                className="cursor-pointer"
              >
                <div className="flex items-center justify-center h-full p-6">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all"
                  />
                </div>
              </GlassSurface>
            </div>
          ))}
        </div>

        {/* View More CTA */}
        <div className="text-center">
          <a
            href="/about"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-lg group"
          >
            <span>View Complete Client Portfolio</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClientsShowcase;
