import React from 'react';
import { Phone, Sparkles } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

export const AnnouncementBar: React.FC = () => {
  return (
    <aside 
      aria-label="Salon Announcement"
      className="bg-espresso-900 text-linen-100 text-xs sm:text-sm py-2 px-4 transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-4 text-center sm:text-left">
        <div className="flex items-center gap-2 font-medium tracking-wide">
          <Sparkles className="w-3.5 h-3.5 text-terracotta-300 flex-shrink-0" aria-hidden="true" />
          <span>
            Walk-ins welcome when chairs are free &bull; To guarantee your spot, call ahead
          </span>
        </div>
        <a
          href={`tel:${SALON_DATA.phoneRaw}`}
          className="inline-flex items-center gap-1.5 font-semibold text-terracotta-200 hover:text-white underline underline-offset-4 transition-colors"
          aria-label={`Call the salon at ${SALON_DATA.phone}`}
        >
          <Phone className="w-3 h-3 text-terracotta-300" aria-hidden="true" />
          <span>Call: {SALON_DATA.phone}</span>
        </a>
      </div>
    </aside>
  );
};
