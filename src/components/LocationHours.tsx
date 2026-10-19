import React, { useMemo } from 'react';
import { Clock, MapPin, Phone, Car, Train, ExternalLink } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

export const LocationHours: React.FC = () => {
  // Current Day & Open/Closed Status
  const statusInfo = useMemo(() => {
    const now = new Date();
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayName = dayNames[now.getDay()];
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTimeInMinutes = currentHour * 60 + currentMinute;

    const todaySchedule = SALON_DATA.hours.find((h) => h.day === currentDayName);

    if (!todaySchedule) {
      return { isOpen: false, text: 'Closed today', currentDayName };
    }

    // Mon-Sat: 10:00 AM (600m) to 8:00 PM (1200m)
    // Sun: 11:00 AM (660m) to 6:00 PM (1080m)
    const openMinutes = currentDayName === 'Sunday' ? 11 * 60 : 10 * 60;
    const closeMinutes = currentDayName === 'Sunday' ? 18 * 60 : 20 * 60;

    const isOpen = currentTimeInMinutes >= openMinutes && currentTimeInMinutes < closeMinutes;

    if (isOpen) {
      return {
        isOpen: true,
        text: `Open Now &bull; Closes at ${todaySchedule.close}`,
        currentDayName,
      };
    } else if (currentTimeInMinutes < openMinutes) {
      return {
        isOpen: false,
        text: `Opens today at ${todaySchedule.open}`,
        currentDayName,
      };
    } else {
      return {
        isOpen: false,
        text: `Closed for today &bull; Opens tomorrow at 10:00 AM`,
        currentDayName,
      };
    }
  }, []);

  return (
    <section id="hours-location" className="py-16 md:py-24 bg-linen-50 scroll-mt-20 border-t border-linen-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-terracotta-600 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3">
            <MapPin className="w-4 h-4" />
            <span>Find Us on Broadview</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-espresso-950">
            Hours &amp; Location
          </h2>
          <p className="mt-4 text-base sm:text-lg text-espresso-800/80 leading-relaxed font-normal">
            Easily reached by car or TTC streetcar. Drop in or call ahead to save your chair.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Operating Hours Card */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-linen-200 shadow-sm space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-linen-200">
              <div className="flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-terracotta-600" />
                <h3 className="font-serif text-2xl font-medium text-espresso-950">
                  Salon Hours
                </h3>
              </div>

              {/* Live Open / Closed Pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border bg-linen-100 border-linen-300">
                <span 
                  className={`w-2 h-2 rounded-full ${
                    statusInfo.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-600'
                  }`}
                  aria-hidden="true"
                />
                <span dangerouslySetInnerHTML={{ __html: statusInfo.text }} />
              </div>
            </div>

            {/* Hours Table */}
            <table className="w-full text-sm">
              <caption className="sr-only">Weekly Salon Hours of Operation</caption>
              <tbody>
                {SALON_DATA.hours.map((schedule) => {
                  const isToday = schedule.day === statusInfo.currentDayName;
                  return (
                    <tr
                      key={schedule.day}
                      className={`border-b border-linen-100/80 last:border-0 ${
                        isToday ? 'bg-terracotta-50/60 font-semibold text-espresso-950 rounded-lg' : 'text-espresso-800'
                      }`}
                    >
                      <td className="py-3 px-2 flex items-center gap-2">
                        <span>{schedule.day}</span>
                        {isToday && (
                          <span className="text-[10px] font-bold uppercase tracking-wider text-terracotta-600 bg-terracotta-100 px-1.5 py-0.5 rounded">
                            Today
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-2 text-right">
                        <span>{schedule.open} – {schedule.close}</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {/* Booking by Phone Reminder */}
            <div className="bg-linen-100 p-4 rounded-xl border border-linen-200 flex items-center justify-between gap-4">
              <div className="text-xs text-espresso-700">
                <span className="font-medium text-espresso-900 block mb-0.5">Need a specific time?</span>
                Calling ahead ensures zero wait time.
              </div>
              <a
                href={`tel:${SALON_DATA.phoneRaw}`}
                className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold bg-terracotta-500 hover:bg-terracotta-600 text-white px-3 py-2 rounded-full transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>
            </div>

          </div>

          {/* Right Column: Address, Directions, Transit & Parking */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Address & Quick Links Card */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-linen-200 shadow-sm space-y-6">
              
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-terracotta-600 block">
                  Neighborhood Location
                </span>
                <p className="font-serif text-3xl font-medium text-espresso-950">
                  {SALON_DATA.address}
                </p>
                <p className="text-base text-espresso-800 font-normal">
                  {SALON_DATA.cityStateZip} &bull; <span className="text-espresso-700">{SALON_DATA.neighborhood}</span>
                </p>
                <p className="text-xs text-espresso-700 italic">
                  Between Gerrard St E &amp; Dundas St E
                </p>
              </div>

              {/* Maps Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={SALON_DATA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-espresso-900 hover:bg-espresso-950 text-linen-100 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-colors"
                >
                  <MapPin className="w-4 h-4 text-terracotta-300" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-linen-300" />
                </a>

                <a
                  href={SALON_DATA.bingMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-linen-200 hover:bg-linen-300 text-espresso-900 border border-linen-300 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-colors"
                >
                  <span>Open in Bing Maps</span>
                  <ExternalLink className="w-3 h-3 text-espresso-700" />
                </a>
              </div>

              {/* Transit & Parking Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-linen-200">
                
                {/* Transit */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-espresso-950 uppercase tracking-wider">
                    <Train className="w-4 h-4 text-terracotta-600" />
                    <span>TTC Transit</span>
                  </div>
                  <p className="text-xs text-espresso-700 leading-relaxed">
                    {SALON_DATA.transitInfo}
                  </p>
                </div>

                {/* Parking */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-espresso-950 uppercase tracking-wider">
                    <Car className="w-4 h-4 text-olive-600" />
                    <span>Free &amp; Metered Parking</span>
                  </div>
                  <p className="text-xs text-espresso-700 leading-relaxed">
                    {SALON_DATA.parkingInfo}
                  </p>
                </div>

              </div>

            </div>

            {/* Direct Phone Assistance Banner */}
            <div className="bg-espresso-950 text-linen-100 p-6 sm:p-7 rounded-2xl shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-wider text-terracotta-300 font-semibold">
                  Direct Line &bull; No Automated Menus
                </p>
                <p className="font-serif text-2xl font-medium">
                  {SALON_DATA.phone}
                </p>
                <p className="text-xs text-linen-300/80">
                  Speak directly to our stylists. Walk-ins always accommodated whenever possible.
                </p>
              </div>

              <a
                href={`tel:${SALON_DATA.phoneRaw}`}
                className="inline-flex items-center gap-2 bg-terracotta-500 hover:bg-terracotta-600 text-white px-6 py-3 rounded-full text-sm font-medium transition-all shadow hover:shadow-lg flex-shrink-0"
              >
                <Phone className="w-4 h-4" />
                <span>Tap to Call</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
