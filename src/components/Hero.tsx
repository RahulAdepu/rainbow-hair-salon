import React from 'react';
import { Phone, ArrowDown, MapPin, Clock, Heart } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-gradient-to-b from-linen-100 via-linen-50 to-linen-200">
      
      {/* Subtle organic ambient background accent */}
      <div 
        className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-terracotta-100/40 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-10 left-10 -z-10 w-80 h-80 bg-olive-100/40 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Message & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-linen-200/80 border border-linen-300 text-espresso-800 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium tracking-wide shadow-sm">
              <Heart className="w-3.5 h-3.5 text-terracotta-500 fill-terracotta-500" aria-hidden="true" />
              <span>Women-Owned &bull; Broadview Ave, Toronto</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-espresso-950 leading-[1.15]">
              Your neighborhood <br className="hidden sm:inline" />
              <span className="italic font-normal text-terracotta-600">sanctuary</span> for hair &amp; care.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-espresso-800/85 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              A peaceful, unpretentious chair on Broadview Avenue. For over fifteen years, our women-led team has provided attentive cuts, natural color, and genuine warmth to the East End community.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={`tel:${SALON_DATA.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 bg-terracotta-500 hover:bg-terracotta-600 active:bg-terracotta-700 text-white font-medium px-7 py-3.5 rounded-full text-base shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-terracotta-500"
                aria-label={`Call ${SALON_DATA.phone} to make an appointment`}
              >
                <Phone className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                <span>Call {SALON_DATA.phone}</span>
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-linen-100 hover:bg-linen-300 text-espresso-900 border border-linen-300 font-medium px-6 py-3.5 rounded-full text-base transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-espresso-800"
              >
                <span>View Price List</span>
                <ArrowDown className="w-4 h-4 text-espresso-700" aria-hidden="true" />
              </a>
            </div>

            {/* Quick Community Highlights */}
            <div className="pt-4 border-t border-linen-300/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
              <div className="flex items-start gap-2">
                <span className="text-terracotta-600 font-serif text-lg leading-none mt-0.5">&bull;</span>
                <div>
                  <p className="text-xs font-semibold text-espresso-950 uppercase tracking-wider">Walk-ins</p>
                  <p className="text-xs text-espresso-700">Welcome when available</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-terracotta-600 font-serif text-lg leading-none mt-0.5">&bull;</span>
                <div>
                  <p className="text-xs font-semibold text-espresso-950 uppercase tracking-wider">Clear Prices</p>
                  <p className="text-xs text-espresso-700">No surprise register fees</p>
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-start gap-2">
                <span className="text-terracotta-600 font-serif text-lg leading-none mt-0.5">&bull;</span>
                <div>
                  <p className="text-xs font-semibold text-espresso-950 uppercase tracking-wider">Open Daily</p>
                  <p className="text-xs text-espresso-700">Open until 8:00 PM</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-linen-300 border-4 border-white aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80"
                  alt="Warm, sunlit interior of Rainbow Hair Salon with natural plants, wooden styling stations, and cozy ambiance"
                  className="w-full h-full object-cover object-center filter saturate-[0.95] contrast-[1.02]"
                  loading="eager"
                  fetchPriority="high"
                />
                
                {/* Soft Gradient Overlay for text contrast */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-espresso-950/70 via-transparent to-transparent"
                  aria-hidden="true"
                />

                {/* Overlaid caption card */}
                <div className="absolute bottom-4 left-4 right-4 bg-linen-100/95 backdrop-blur-md p-4 rounded-xl border border-linen-300/60 shadow-lg text-left">
                  <div className="flex items-center gap-2 text-xs font-semibold text-terracotta-600 uppercase tracking-wider mb-1">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>Riverside &bull; Broadview Ave</span>
                  </div>
                  <p className="font-serif text-espresso-950 text-base font-medium">
                    308 Broadview Ave, Toronto
                  </p>
                  <div className="flex items-center gap-2 text-xs text-espresso-700 mt-1">
                    <Clock className="w-3 h-3 text-olive-600" />
                    <span>Open Mon–Sat until 8 PM &bull; Sun until 6 PM</span>
                  </div>
                </div>
              </div>

              {/* Decorative Accent Seal */}
              <div 
                className="hidden sm:flex absolute -top-4 -right-4 bg-linen-50 border border-linen-300 text-espresso-900 rounded-full w-24 h-24 p-2 shadow-md items-center justify-center text-center -rotate-6"
                aria-hidden="true"
              >
                <div className="text-[11px] font-serif leading-tight">
                  <span className="block text-terracotta-600 font-bold">15+ Yrs</span>
                  <span>in the</span>
                  <span className="block font-medium">East End</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
