'use client';

import { Award, Users, Building2, TrendingUp, Shield, CheckCircle } from 'lucide-react';
import GlassSurface from '@/components/ui/GlassSurface';

export default function AboutPage() {
  const milestones = [
    { year: '2003', title: 'Company Founded', description: 'Started our journey in industrial materials supply' },
    { year: '2010', title: 'Pan-India Expansion', description: 'Expanded operations across major Indian cities' },
    { year: '2018', title: 'GeM Certification', description: 'Became GeM approved government supplier' },
    { year: '2025', title: '1000+ Products', description: 'Grew to 1000+ products from 20+ brands' },
  ];

  const values = [
    { icon: Shield, title: 'Quality Assurance', description: 'Only genuine products from authorized brands' },
    { icon: Users, title: 'Customer First', description: '24/7 support and dedicated account managers' },
    { icon: TrendingUp, title: 'Innovation', description: 'Constantly evolving with industry needs' },
    { icon: CheckCircle, title: 'Reliability', description: 'On-time delivery and competitive pricing' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">MEGA Enterprise</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With over 20 years of excellence, we're your trusted partner in industrial and project materials supply, 
            serving government PSUs, infrastructure giants, and private enterprises across India.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { value: '20+', label: 'Years Experience', icon: Award },
            { value: '50+', label: 'Major Clients', icon: Users },
            { value: '1000+', label: 'Products', icon: Building2 },
            { value: '20+', label: 'Brand Partners', icon: TrendingUp },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <GlassSurface
                key={index}
                width="100%"
                height={180}
                borderRadius={24}
                brightness={98}
                opacity={0.5}
                className="transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-center p-6">
                  <Icon className="w-10 h-10 text-primary-600 mx-auto mb-3" />
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              </GlassSurface>
            );
          })}
        </div>

        {/* Our Story */}
        <div className="mb-20">
          <GlassSurface
            width="100%"
            height="auto"
            borderRadius={24}
            brightness={98}
            opacity={0.5}
          >
            <div className="p-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
                <p>
                  Founded in 2003, MEGA Enterprise began with a simple vision: to provide reliable, high-quality 
                  industrial materials to businesses across India. What started as a small operation in Navi Mumbai 
                  has grown into a trusted name in industrial supply, serving some of the country's largest 
                  infrastructure companies.
                </p>
                <p>
                  Today, we're proud to be a GeM-approved supplier, authorized dealer for 20+ leading brands, and 
                  the preferred material partner for government PSUs and private enterprises alike. Our commitment 
                  to quality, reliability, and customer service has earned us partnerships with industry giants like 
                  TATA Projects, Afcons Infrastructure, and L&T.
                </p>
                <p>
                  With a catalog of 1000+ products spanning electrical materials, safety equipment, LED lighting, 
                  pipes, fittings, and more, we're equipped to handle projects of any scale. Our team of experienced 
                  professionals ensures seamless procurement, timely delivery, and comprehensive support throughout 
                  your project lifecycle.
                </p>
              </div>
            </div>
          </GlassSurface>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Journey</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <GlassSurface
                key={index}
                width="100%"
                height={220}
                borderRadius={24}
                brightness={98}
                opacity={0.5}
                className="transform hover:scale-105 transition-all duration-300"
              >
                <div className="p-6 text-center">
                  <div className="text-5xl font-bold bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent mb-4">
                    {milestone.year}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-sm text-gray-600">{milestone.description}</p>
                </div>
              </GlassSurface>
            ))}
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <GlassSurface
                  key={index}
                  width="100%"
                  height="auto"
                  borderRadius={24}
                  brightness={98}
                  opacity={0.5}
                  className="transform hover:scale-105 transition-all duration-300"
                >
                  <div className="p-8 flex items-start space-x-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                </GlassSurface>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <GlassSurface
            width="100%"
            height="auto"
            borderRadius={32}
            brightness={98}
            opacity={0.5}
          >
            <div className="p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Partner With Us?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Join 50+ major companies who trust MEGA Enterprise for their material needs
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                Get Started
              </a>
            </div>
          </GlassSurface>
        </div>
      </div>
    </div>
  );
}
