import React from 'react';
import { Heart, Sparkles, Clock, CheckCircle } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-linen-100 scroll-mt-20 border-t border-linen-300/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Warm visual collage */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Photo */}
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-[4/5] bg-linen-200">
                <img
                  src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80"
                  alt="Stylist working with client hair in warm natural light"
                  className="w-full h-full object-cover filter saturate-[0.95]"
                  loading="lazy"
                />
              </div>

              {/* Overlaid Floating Card */}
              <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 bg-linen-50 border border-linen-300 p-5 rounded-2xl shadow-xl max-w-xs text-left">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-olive-100 flex items-center justify-center text-olive-700">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-espresso-900">
                      Community Staple
                    </p>
                    <p className="text-[11px] text-espresso-700">East Chinatown &bull; Riverside</p>
                  </div>
                </div>
                <p className="text-xs text-espresso-800 leading-relaxed italic">
                  &ldquo;A warm, friendly team that listens to what you want and never rushes you through the chair.&rdquo;
                </p>
              </div>

            </div>
          </div>

          {/* Right: The Story */}
          <div className="lg:col-span-7 space-y-6 text-left order-1 lg:order-2">
            
            <div className="inline-flex items-center gap-2 bg-linen-200 border border-linen-300 text-espresso-800 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide">
              <span>{SALON_DATA.story.badge}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-espresso-950 leading-[1.2]">
              {SALON_DATA.story.headline}
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-espresso-800/85 leading-relaxed font-normal">
              {SALON_DATA.story.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Core Values 3-Grid */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-linen-300">
              {SALON_DATA.story.values.map((val, idx) => {
                return (
                  <div key={idx} className="bg-linen-50 p-4 rounded-xl border border-linen-200 shadow-sm space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-terracotta-100/70 text-terracotta-600 flex items-center justify-center">
                      {idx === 0 && <Heart className="w-4 h-4" />}
                      {idx === 1 && <Sparkles className="w-4 h-4" />}
                      {idx === 2 && <Clock className="w-4 h-4" />}
                    </div>
                    <h3 className="font-serif text-base font-semibold text-espresso-950">
                      {val.title}
                    </h3>
                    <p className="text-xs text-espresso-700 leading-normal">
                      {val.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
