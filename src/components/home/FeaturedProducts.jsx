'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Sparkles } from 'lucide-react';
import GlassSurface from '../ui/GlassSurface';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const FeaturedProducts = () => {
  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const cardsRef = useRef([]);
  const headerRef = useRef(null);

  const products = [
    {
      title: 'Cables & Wires',
      description: 'Premium quality cables and wiring solutions from authorized dealers',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
      color: 'from-blue-500 to-blue-700',
    },
    {
      title: 'LED Lighting',
      description: 'Energy-efficient LED solutions for industrial and commercial spaces',
      image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80',
      color: 'from-yellow-500 to-yellow-700',
    },
    {
      title: 'Safety Equipment',
      description: 'Complete range of safety gear and industrial protection equipment',
      image: 'https://images.unsplash.com/photo-1581578017093-cd30b0e417bf?w=800&q=80',
      color: 'from-red-500 to-red-700',
    },
    {
      title: 'Electrical Switchgear',
      description: 'High-quality switchgear and control systems for power distribution',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
      color: 'from-green-500 to-green-700',
    },
    {
      title: 'Pipes & Fittings',
      description: 'Durable pipes and fittings for industrial plumbing applications',
      image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=800&q=80',
      color: 'from-purple-500 to-purple-700',
    },
    {
      title: 'Power Tools',
      description: 'Professional-grade power tools for construction and maintenance',
      image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80',
      color: 'from-orange-500 to-orange-700',
    },
  ];

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate header on scroll
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1,
        },
        y: 50,
        opacity: 0,
      });

      // Create stacking cards effect
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const isEven = index % 2 === 0;

        // Initial state
        gsap.set(card, {
          scale: 0.9,
          opacity: 0,
          rotationY: isEven ? -15 : 15,
          z: -100 * index,
        });

        // Scroll animation with stacking effect
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 20%',
            scrub: 1.5,
            toggleActions: 'play none none reverse',
          },
        });

        tl.to(card, {
          scale: 1,
          opacity: 1,
          rotationY: 0,
          z: 0,
          duration: 1,
          ease: 'power3.out',
        });

        // Parallax effect on hover
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = (y - centerY) / 20;
          const rotateY = (centerX - x) / 20;

          gsap.to(card, {
            rotationX: rotateX,
            rotationY: rotateY,
            duration: 0.5,
            ease: 'power2.out',
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            rotationX: 0,
            rotationY: 0,
            duration: 0.5,
            ease: 'power2.out',
          });
        });

        // Floating animation for each card
        gsap.to(card, {
          y: -10,
          duration: 2 + index * 0.2,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
          delay: index * 0.1,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/2 -right-48 w-96 h-96 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary-100/50 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-semibold text-primary-700">1000+ Products Available</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Complete Industrial
            <br />
            <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-primary-700 bg-clip-text text-transparent">
              Material Supply
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Authorized dealers and stockists of leading brands across multiple categories
          </p>
        </div>

        {/* Cards Grid with Perspective */}
        <div
          ref={cardsContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{ perspective: '2000px' }}
        >
          {products.map((product, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group cursor-pointer"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <GlassSurface
                width="100%"
                height={420}
                borderRadius={24}
                brightness={98}
                opacity={0.7}
                blur={12}
                className="shadow-2xl"
              >
                <div className="relative h-full w-full overflow-hidden rounded-3xl">
                  {/* Background Image with Parallax */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${product.image})` }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-60 group-hover:opacity-70 transition-opacity duration-300`}></div>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-8 text-white">
                    <div className="transform transition-transform duration-300 group-hover:translate-y-(-2)">
                      <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
                      <p className="text-white/90 mb-4 leading-relaxed">{product.description}</p>
                      <div className="inline-flex items-center text-sm font-semibold bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 group-hover:bg-white/20 transition-all duration-300">
                        <span>View Products</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>

                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                </div>
              </GlassSurface>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <a
            href="/products"
            className="group inline-flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-primary-500/50 hover:scale-105 transition-all duration-300"
          >
            <span>Explore All Products</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
