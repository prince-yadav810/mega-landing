'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { gsap } from 'gsap';
import GlassSurface from '../ui/GlassSurface';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  useEffect(() => {
    if (!navRef.current) return;

    if (isScrolled) {
      gsap.to(navRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'power3.out',
      });
    } else {
      gsap.to(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 0.3,
        ease: 'power3.in',
      });
    }
  }, [isScrolled]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Floating Glass Navbar - Only appears on scroll */}
      <nav
        ref={navRef}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl opacity-0"
        style={{ transform: 'translateX(-50%) translateY(-100px)' }}
      >
        <GlassSurface
          width="100%"
          height={80}
          borderRadius={44}
          brightness={98}
          opacity={0.85}
          blur={11}
          displace={2}
          backgroundOpacity={0.3}
          saturation={1.1}
          className="shadow-2xl"
        >
          <div className="flex items-center justify-between h-full w-full px-6 lg:px-8">
            {/* Logo - Left aligned */}
            <Link href="/" className="flex items-center space-x-3 group flex-shrink-0">
              <div className="w-11 h-11 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 overflow-hidden p-1.5">
                {/*
                  Replace this with your actual logo:
                  <Image src="/logo.png" alt="MEGA Logo" width={44} height={44} className="object-contain w-full h-full" />
                */}
                <Image src="/logo.png" alt="MEGA Logo" width={54} height={54} className="object-contain w-full h-full" />
                {/* <span className="text-white font-bold text-lg">M</span> */}
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-lg font-bold text-gray-900">MEGA</span>
                <span className="text-[10px] text-gray-600 -mt-1">Enterprise</span>
              </div>
            </Link>

            {/* Desktop Navigation - Right aligned */}
            <div className="hidden md:flex items-center space-x-8 flex-shrink-0">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-primary-600 font-bold transition-colors duration-200 relative group py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-700 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}

              {/* CTA Button */}
              <Link
                href="/contact"
                className="px-5 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 text-sm"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100/50 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-900" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900" />
              )}
            </button>
          </div>
        </GlassSurface>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-72 transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <GlassSurface
            width="100%"
            height="100%"
            borderRadius={0}
            brightness={98}
            opacity={0.95}
            blur={20}
            backgroundOpacity={0.4}
            className="shadow-2xl"
          >
            <div className="flex flex-col p-6 space-y-6 mt-24">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-semibold text-gray-700 hover:text-primary-600 transition-colors py-2 border-b border-gray-200/50"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full font-semibold text-center hover:shadow-lg hover:scale-105 transition-all duration-200 mt-4"
              >
                Get Quote
              </Link>
            </div>
          </GlassSurface>
        </div>
      </div>
    </>
  );
};

export default Navbar;
