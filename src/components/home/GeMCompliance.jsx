'use client';

import { CheckCircle2, Shield, Award, FileCheck } from 'lucide-react';
import GlassSurface from '../ui/GlassSurface';

const GeMCompliance = () => {
  const certifications = [
    { icon: CheckCircle2, text: 'GeM Portal Registered Vendor' },
    { icon: Shield, text: 'GST Compliant (27DRGPD9065L1ZA)' },
    { icon: FileCheck, text: 'Third Party Inspection Approved' },
    { icon: Award, text: 'NABL Lab Test Certificates' },
  ];

  const experience = [
    { icon: CheckCircle2, text: '3+ Years Govt Supply Experience' },
    { icon: Shield, text: 'Central/State PSU Approved' },
    { icon: FileCheck, text: 'Ready Stock Available' },
    { icon: Award, text: 'Bureau Veritas Inspection Partner' },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary-50 via-white to-primary-100 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-300 rounded-full filter blur-3xl opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-4 py-2 mb-6">
            <Shield className="w-5 h-5 text-green-700" />
            <span className="text-sm font-semibold text-green-700">Government Approved</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            GeM Portal Approved & <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">Government Compliant</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Certified supplier for government procurement with full compliance and quality assurance
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Certifications */}
          <GlassSurface
            width="100%"
            height="auto"
            borderRadius={24}
            brightness={98}
            opacity={0.5}
            className="transform hover:scale-105 transition-all duration-300"
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="w-7 h-7 text-primary-600 mr-3" />
                Certifications
              </h3>
              <ul className="space-y-4">
                {certifications.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="ml-3 text-gray-700 font-medium">{item.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </GlassSurface>

          {/* Right Column - Experience */}
          <GlassSurface
            width="100%"
            height="auto"
            borderRadius={24}
            brightness={98}
            opacity={0.5}
            className="transform hover:scale-105 transition-all duration-300"
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="w-7 h-7 text-primary-600 mr-3" />
                Government Supply Experience
              </h3>
              <ul className="space-y-4">
                {experience.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="ml-3 text-gray-700 font-medium">{item.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </GlassSurface>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://gem.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <Shield className="w-5 h-5" />
            <span>View GeM Profile</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GeMCompliance;
