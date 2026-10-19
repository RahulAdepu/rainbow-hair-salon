import React, { useState } from 'react';
import { Phone, Menu, X, Scissors } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services & Pricing', href: '#services' },
    { name: 'Our Story', href: '#about' },
    { name: 'Hours & Location', href: '#hours-location' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-linen-100/90 backdrop-blur-md border-b border-linen-300 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Brand Name */}
          <a 
            href="#" 
            className="group flex flex-col focus:outline-none focus:ring-2 focus:ring-terracotta-500 rounded-sm"
            aria-label={`${SALON_DATA.name} Home`}
          >
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-terracotta-100 flex items-center justify-center text-terracotta-600 transition-transform group-hover:scale-105">
                <Scissors className="w-4 h-4 transform -rotate-45" aria-hidden="true" />
              </span>
              <span className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-espresso-950">
                {SALON_DATA.name}
              </span>
            </div>
            <span className="text-[11px] uppercase tracking-widest text-espresso-700/70 ml-9 font-medium">
              308 Broadview Ave &bull; Toronto
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-espresso-800 hover:text-terracotta-600 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-terracotta-500 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Primary Call to Book CTA */}
          <div className="hidden sm:flex items-center">
            <a
              href={`tel:${SALON_DATA.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-terracotta-500 hover:bg-terracotta-600 active:bg-terracotta-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-terracotta-500"
              aria-label={`Call to book appointment at ${SALON_DATA.phone}`}
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>Call to Book</span>
              <span className="hidden lg:inline text-terracotta-100/90 font-normal">({SALON_DATA.phone})</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`tel:${SALON_DATA.phoneRaw}`}
              className="p-2.5 rounded-full bg-terracotta-500 text-white hover:bg-terracotta-600 transition-colors"
              aria-label="Call salon now"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-espresso-800 hover:bg-linen-200 transition-colors focus:outline-none focus:ring-2 focus:ring-terracotta-500"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-linen-300 bg-linen-100 px-4 pt-3 pb-6 space-y-3 shadow-lg animate-fadeIn">
          <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-espresso-900 hover:text-terracotta-600 py-2 border-b border-linen-200"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href={`tel:${SALON_DATA.phoneRaw}`}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-terracotta-500 text-white py-3 rounded-full font-medium shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {SALON_DATA.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
