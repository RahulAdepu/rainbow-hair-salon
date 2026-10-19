import React from 'react';
import { Phone, MapPin, Heart, Scissors, CreditCard, Banknote } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-espresso-950 text-linen-200 pt-16 pb-24 md:pb-16 border-t border-espresso-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-espresso-800/80">
          
          {/* Brand & Neighborhood Note */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-espresso-800 flex items-center justify-center text-terracotta-400">
                <Scissors className="w-4 h-4 transform -rotate-45" />
              </span>
              <span className="font-serif text-2xl font-medium tracking-tight text-linen-100">
                {SALON_DATA.name}
              </span>
            </div>
            <p className="text-sm text-linen-300/80 max-w-sm leading-relaxed">
              A women-owned neighborhood hair salon proudly serving Toronto's Broadview, Riverside, South Riverdale, and East Chinatown communities.
            </p>
            <div className="flex items-center gap-2 text-xs text-terracotta-300 font-medium">
              <Heart className="w-3.5 h-3.5 fill-terracotta-400 text-terracotta-400" />
              <span>Independent &bull; Welcoming Everyone Since 2008</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-linen-100">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-linen-300/80">
              <li>
                <a href="#services" className="hover:text-terracotta-300 transition-colors">
                  Services &amp; Pricing
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-terracotta-300 transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#hours-location" className="hover:text-terracotta-300 transition-colors">
                  Hours &amp; Location
                </a>
              </li>
              <li>
                <a href={SALON_DATA.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-terracotta-300 transition-colors">
                  Google Maps Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Payment Methods */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-linen-100">
              Visit or Call Us
            </h4>
            
            <div className="space-y-2 text-sm text-linen-300/90">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-terracotta-400 flex-shrink-0 mt-0.5" />
                <span>
                  {SALON_DATA.address}, {SALON_DATA.cityStateZip}
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-terracotta-400 flex-shrink-0" />
                <a 
                  href={`tel:${SALON_DATA.phoneRaw}`}
                  className="hover:text-terracotta-300 transition-colors font-medium text-linen-100"
                >
                  {SALON_DATA.phone}
                </a>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="pt-2">
              <p className="text-[11px] uppercase tracking-wider text-linen-400/80 font-semibold mb-2">
                Accepted Payment Methods
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {SALON_DATA.paymentMethods.map((method) => (
                  <span
                    key={method}
                    className="inline-flex items-center gap-1 bg-espresso-900 border border-espresso-800 text-linen-200 text-xs px-2.5 py-1 rounded-md"
                  >
                    {method === 'Cash' ? (
                      <Banknote className="w-3 h-3 text-emerald-400" />
                    ) : (
                      <CreditCard className="w-3 h-3 text-terracotta-300" />
                    )}
                    <span>{method}</span>
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-linen-400/70 text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} {SALON_DATA.name}. All rights reserved.
          </p>
          <p>
            Prices subject to consultation. Walk-ins subject to chair availability.
          </p>
        </div>

      </div>
    </footer>
  );
};
