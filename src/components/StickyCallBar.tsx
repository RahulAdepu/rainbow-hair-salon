import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

export const StickyCallBar: React.FC = () => {
  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-linen-100/95 backdrop-blur-md border-t border-linen-300 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
      style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
      role="region"
      aria-label="Quick appointment call bar"
    >
      <div className="max-w-md mx-auto flex items-center gap-3">
        
        {/* Quick Menu Anchor */}
        <a
          href="#services"
          className="flex flex-col items-center justify-center p-2 rounded-xl text-espresso-800 hover:text-terracotta-600 hover:bg-linen-200 transition-colors text-[10px] font-medium flex-shrink-0"
          aria-label="Scroll to services"
        >
          <Calendar className="w-5 h-5 text-espresso-700" />
          <span>Prices</span>
        </a>

        {/* Primary Call to Book Button */}
        <a
          href={`tel:${SALON_DATA.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-2 bg-terracotta-500 hover:bg-terracotta-600 active:bg-terracotta-700 text-white py-3 px-4 rounded-full font-medium text-sm shadow-md transition-all active:scale-[0.98]"
          aria-label={`Call to book appointment at ${SALON_DATA.phone}`}
        >
          <Phone className="w-4 h-4 fill-white" aria-hidden="true" />
          <span className="truncate">Call to Book: {SALON_DATA.phone}</span>
        </a>

      </div>
    </div>
  );
};
