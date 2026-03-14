'use client';

import Link from 'next/link';
import { ChevronRight, Hammer, Wrench } from 'lucide-react';

export default function ProductsPage() {
  const categories = [
    {
      name: 'Electrical',
      subcategories: [
        { name: 'Wires & Cables', href: '/products/electrical/wires-cables', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
        { name: 'Switchgears', href: '/products/electrical/switchgears', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
        { name: 'Lugs & Glands', href: '/products/electrical/lugs-glands', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
        { name: 'Motors & Pumps', href: '/products/electrical/motors', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
        { name: 'Fans', href: '/products/electrical/fans', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
        { name: 'LED', href: '/products/electrical/led', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
        { name: 'Electrical Panels', href: '/products/electrical/electrical-panels', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
        { name: 'Cable Tray (GI/SS/PVC)', href: '/products/electrical/cable-tray', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
      ],
    },
    {
      name: 'Hardware',
      subcategories: [
        { name: 'Power Tools & Hand Tools', href: '/products/hardware/power-hand-tools', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
        { name: 'Tarpaulin (All Types)', href: '/products/hardware/tarpaulin', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
        { name: 'Hessian Cloths', href: '/products/hardware/hessian-cloths', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
        { name: 'Nuts, Bolts & Fasteners (All Types)', href: '/products/hardware/fasteners', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
        { name: 'Lubricants', href: '/products/hardware/lubricants', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
        { name: 'Abrasives', href: '/products/hardware/abrasives', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
        { name: 'Water Tanks', href: '/products/hardware/water-tanks', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
      ],
    },
    {
      name: 'Construction Chemicals & Paints',
      subcategories: [
        { name: 'Waterproofing', href: '/products/construction-chemicals/waterproofing', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
        { name: 'Adhesives & Sealants', href: '/products/construction-chemicals/adhesives-sealants', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
        { name: 'Concrete Admixtures', href: '/products/construction-chemicals/concrete-admixtures', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
        { name: 'Wall Putty & Primers', href: '/products/construction-chemicals/wall-putty-primers', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
        { name: 'Interior Paints', href: '/products/construction-chemicals/interior-paints', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
        { name: 'Exterior Paints', href: '/products/construction-chemicals/exterior-paints', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
        { name: 'Wood Coatings', href: '/products/construction-chemicals/wood-coatings', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
      ],
    },
    {
      name: 'Structural Steel',
      subcategories: [
        { name: 'TMT Bars', href: '/products/structural-steel/tmt-bars', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
        { name: 'MS Angles', href: '/products/structural-steel/ms-angles', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
        { name: 'MS Channels', href: '/products/structural-steel/ms-channels', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
        { name: 'MS Beams', href: '/products/structural-steel/ms-beams', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
        { name: 'MS Plates & Sheets', href: '/products/structural-steel/ms-plates', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
        { name: 'MS Pipes & Tubes', href: '/products/structural-steel/ms-pipes', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
        { name: 'Porta Cabins', href: '/products/structural-steel/porta-cabins', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
      ],
    },
    {
      name: 'Safety',
      subcategories: [
        { name: 'Safety Gloves', href: '/products/safety/safety-gloves', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
        { name: 'Fall Protection', href: '/products/safety/fall-protection', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
        { name: 'Eye Protection', href: '/products/safety/eye-protection', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
        { name: 'Fire Safety', href: '/products/safety/fire-safety', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
        { name: 'Road Safety', href: '/products/safety/road-safety', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
        { name: 'Respiratory Protection', href: '/products/safety/respiratory-protection', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
        { name: 'Rainy Season Items', href: '/products/safety/rainy-season', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
      ],
    },
    {
      name: 'Construction Equipment',
      subcategories: [
        { name: 'Concrete Mixers', href: '/products/construction-equipment/concrete-mixers', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
        { name: 'Scaffolding & Shuttering', href: '/products/construction-equipment/scaffolding', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
        { name: 'Compactors & Rollers', href: '/products/construction-equipment/compactors-rollers', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
        { name: 'Bar Bending & Cutting', href: '/products/construction-equipment/bar-bending-cutting', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
        { name: 'Concrete Vibrators', href: '/products/construction-equipment/concrete-vibrators', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
        { name: 'Welding Machines', href: '/products/construction-equipment/welding-machines', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
        { name: 'Earth Moving Equipment', href: '/products/construction-equipment/earth-moving', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
        { name: 'Tower Cranes & Hoists', href: '/products/construction-equipment/tower-cranes', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
      ],
    },
    {
      name: 'Pipes, Pipe Fittings & Valves',
      subcategories: [
        { name: 'PVC Pipes & Fittings', href: '/products/pipes-fittings/pvc', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
        { name: 'UPVC Pipes & Fittings', href: '/products/pipes-fittings/upvc', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
        { name: 'CPVC Pipes & Fittings', href: '/products/pipes-fittings/cpvc', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
        { name: 'HDPE Pipes & Fittings', href: '/products/pipes-fittings/hdpe', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
        { name: 'MS Pipes & Fittings', href: '/products/pipes-fittings/ms', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
        { name: 'GI Pipes & Fittings', href: '/products/pipes-fittings/gi', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
        { name: 'SS Pipes & Fittings', href: '/products/pipes-fittings/ss', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
        { name: 'Valves (All Types)', href: '/products/pipes-fittings/valves', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
        { name: 'Flanges & Gaskets', href: '/products/pipes-fittings/flanges-gaskets', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop' },
      ],
    },
  ];

  const services = [
    {
      name: 'Fabrication',
      description: 'Custom metal fabrication services tailored to your specific industrial needs. Precision engineering and high-quality materials ensuring durability.',
      icon: <Hammer className="w-10 h-10" />,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop',
      href: '/services/fabrication',
    },
    {
      name: 'Electrical Jobs',
      description: 'Comprehensive electrical installation, maintenance, and repair services. Expert technicians ensuring safety and compliance with standards.',
      icon: <Wrench className="w-10 h-10" />,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop',
      href: '/services/electrical-jobs',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Products <span className="text-primary-600">&</span> Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive industrial solutions including a wide range of products and expert services.
          </p>
        </div>

        <div className="mb-24">
          <div className="flex items-center space-x-4 mb-14">
            <div className="h-px bg-gray-300 flex-1"></div>
            <h2 className="text-3xl font-bold text-gray-800">Product Categories</h2>
            <div className="h-px bg-gray-300 flex-1"></div>
          </div>

          <div className="space-y-16">
            {categories.map((category, catIndex) => (
              <div key={catIndex}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1.5 h-8 bg-primary-600 rounded-full"></div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.name}</h3>
                  <span className="text-sm text-gray-400 font-medium">
                    {category.subcategories.length} {category.subcategories.length === 1 ? 'type' : 'types'}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {category.subcategories.map((sub, subIndex) => (
                    <Link
                      key={subIndex}
                      href={sub.href}
                      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-primary-200 shadow-sm hover:shadow-lg transition-all duration-300"
                    >
                      <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                        <img src={sub.image} alt={sub.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="px-4 py-3 flex items-center justify-between">
                        <h4 className="font-semibold text-gray-900 text-sm group-hover:text-primary-700 transition-colors">{sub.name}</h4>
                        <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-primary-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center space-x-4 mb-12">
            <div className="h-px bg-gray-300 flex-1"></div>
            <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
            <div className="h-px bg-gray-300 flex-1"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <img src={service.image} alt={service.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute bottom-6 left-6 z-20 text-white flex items-center space-x-3">
                    <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl border border-white/30">{service.icon}</div>
                    <h3 className="text-3xl font-bold">{service.name}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  <Link href={service.href} className="block w-full py-4 bg-gray-50 text-gray-900 rounded-xl font-bold hover:bg-primary-600 hover:text-white transition-all duration-300 border border-gray-200 hover:border-transparent text-center">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
