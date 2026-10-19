import React, { useState } from 'react';
import { Clock, Phone, Sparkles, Info, CheckCircle2 } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

export const ServiceMenu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Services' },
    ...SALON_DATA.serviceCategories.map((c) => ({ id: c.id, name: c.name }))
  ];

  const displayedCategories = activeCategory === 'all'
    ? SALON_DATA.serviceCategories
    : SALON_DATA.serviceCategories.filter((c) => c.id === activeCategory);

  return (
    <section id="services" className="py-16 md:py-24 bg-linen-50 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-terracotta-600 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Honest &bull; Transparent &bull; Experienced</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-espresso-950">
            Services &amp; Pricing
          </h2>
          <p className="mt-4 text-base sm:text-lg text-espresso-800/80 leading-relaxed font-normal">
            Every service includes our full attention, professional products, and dedicated consultation. What you see is what you pay.
          </p>

          {/* Category Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3" role="tablist">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  role="tab"
                  aria-selected={isActive}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-espresso-900 text-linen-100 shadow-sm'
                      : 'bg-linen-200 text-espresso-800 hover:bg-linen-300'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Categories & Line Items */}
        <div className="space-y-16">
          {displayedCategories.map((category) => (
            <div key={category.id} className="space-y-6">
              
              {/* Category Subtitle */}
              <div className="border-b border-linen-300/80 pb-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-espresso-950">
                  {category.name}
                </h3>
                <span className="text-xs sm:text-sm text-espresso-700 font-normal italic">
                  {category.tagline}
                </span>
              </div>

              {/* Items List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {category.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="group bg-white p-5 sm:p-6 rounded-2xl border border-linen-200 shadow-sm hover:shadow-md hover:border-terracotta-200 transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Name & Price */}
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h4 className="font-serif text-lg sm:text-xl font-medium text-espresso-950 group-hover:text-terracotta-700 transition-colors">
                              {item.name}
                            </h4>
                            {item.popular && (
                              <span className="inline-flex items-center gap-1 bg-terracotta-50 text-terracotta-600 text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full border border-terracotta-200">
                                Popular
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-1.5 text-xs text-espresso-700 font-medium">
                            <Clock className="w-3.5 h-3.5 text-espresso-700/70" aria-hidden="true" />
                            <span>{item.duration}</span>
                          </div>
                        </div>

                        {/* Price Badge */}
                        <div className="text-right flex-shrink-0">
                          <span className="font-serif text-xl sm:text-2xl font-semibold text-espresso-950">
                            {item.price}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="mt-3 text-sm text-espresso-800/80 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom Action Hint */}
                    <div className="mt-4 pt-3 border-t border-linen-100 flex items-center justify-between text-xs text-espresso-700/80">
                      <span className="flex items-center gap-1 text-olive-600">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Consultation included
                      </span>
                      <a
                        href={`tel:${SALON_DATA.phoneRaw}`}
                        className="text-terracotta-600 font-medium hover:underline inline-flex items-center gap-1"
                      >
                        <Phone className="w-3 h-3" />
                        <span>Book by Phone</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Pricing Transparency & Consultation Callout */}
        <div className="mt-16 bg-linen-200/90 rounded-2xl p-6 sm:p-8 border border-linen-300">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-semibold text-terracotta-700 uppercase tracking-wider">
                <Info className="w-4 h-4 flex-shrink-0" />
                <span>Fair Pricing Guarantee &amp; Phone Consultation</span>
              </div>
              <p className="text-sm sm:text-base text-espresso-900 font-medium">
                Prices may vary slightly depending on hair length, density, and specialized formulation. We always confirm the exact total with you before getting started.
              </p>
              <p className="text-xs sm:text-sm text-espresso-700">
                Have questions about color correction, balayage, or special treatments? Give us a call—we're always happy to discuss your hair and give an honest estimate over the phone.
              </p>
            </div>

            <div className="flex-shrink-0 w-full md:w-auto">
              <a
                href={`tel:${SALON_DATA.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-espresso-900 hover:bg-espresso-950 text-linen-100 px-6 py-3.5 rounded-full text-sm font-medium transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4 text-terracotta-300" />
                <span>Call Us: {SALON_DATA.phone}</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
