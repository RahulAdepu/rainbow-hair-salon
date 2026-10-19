export interface ServiceItem {
  name: string;
  description: string;
  duration: string;
  price: string;
  popular?: boolean;
}

export interface ServiceCategory {
  id: string;
  name: string;
  tagline: string;
  items: ServiceItem[];
}

export const SALON_DATA = {
  name: "Rainbow Hair Salon",
  tagline: "Your neighborhood sanctuary for hair and care.",
  subheading: "A warm, women-owned neighborhood institution on Broadview Avenue. Providing honest craftsmanship, transparent pricing, and genuine hospitality to the Toronto East End community.",
  phone: "(416) 778-7418",
  phoneRaw: "+14167787418",
  address: "308 Broadview Ave",
  cityStateZip: "Toronto, ON M4M 2G9",
  crossStreets: "Broadview Ave & Gerrard St E / Dundas St E",
  neighborhood: "Broadview / Riverside / Riverdale",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Rainbow+Hair+Salon+308+Broadview+Ave+Toronto+ON+M4M+2G9",
  bingMapsUrl: "https://www.bing.com/maps?cp=43.66416931152344%7E-79.35232543945312&lvl=17.0&q=Rainbow%20Hair%20Salon%20%2C%20308%20Broadview%20Ave%2C%20Toronto%20ON%20M4M%202G9",
  
  hours: [
    { day: "Monday", open: "10:00 AM", close: "8:00 PM", isOpen: true },
    { day: "Tuesday", open: "10:00 AM", close: "8:00 PM", isOpen: true },
    { day: "Wednesday", open: "10:00 AM", close: "8:00 PM", isOpen: true },
    { day: "Thursday", open: "10:00 AM", close: "8:00 PM", isOpen: true },
    { day: "Friday", open: "10:00 AM", close: "8:00 PM", isOpen: true },
    { day: "Saturday", open: "10:00 AM", close: "8:00 PM", isOpen: true },
    { day: "Sunday", open: "11:00 AM", close: "6:00 PM", isOpen: true },
  ],

  transitInfo: "Conveniently accessible by TTC. Take the 504 King, 505 Dundas, or 506 Carlton streetcar directly to Broadview. Broadview Subway Station is a quick 7-minute ride to the north.",
  parkingInfo: "Street parking available right outside along Broadview Ave, plus free 2-hour neighborhood parking along adjacent residential streets (Simpson Ave and Mount Stephen St).",
  paymentMethods: ["Cash", "Interac Debit", "Visa", "Mastercard"],

  story: {
    badge: "Locally Run Since 2008",
    headline: "A welcoming chair where you're treated like family.",
    paragraphs: [
      "Tucked into the vibrant stretch of Broadview Avenue, Rainbow Hair Salon was built on a simple, timeless principle: good hair care shouldn't feel intimidating, pretentious, or overpriced. For over fifteen years, our women-led team has greeted neighbors, busy parents, students, and long-time regulars with warm smiles and thoughtful craft.",
      "We believe a salon visit should be a comforting pause in your week. Whether you're coming in for a clean trim, maintaining your signature color, or bringing your child for their first big-kid haircut, we take our time to listen, consult, and deliver results that suit your natural texture and daily lifestyle.",
      "No rush, no high-pressure retail upsells, and no surprise charges at the register. Just honest neighborhood care, attentive hands, and a space where you always leave feeling refreshed and confident."
    ],
    values: [
      {
        title: "Women-Owned & Rooted",
        desc: "Proudly independent and deeply invested in our Toronto East End neighborhood for over 15 years.",
        icon: "Heart"
      },
      {
        title: "Transparent, Fair Pricing",
        desc: "Clear prices with zero hidden charges. We quote honestly before any scissors touch your hair.",
        icon: "Sparkles"
      },
      {
        title: "Relaxed & Personal Pace",
        desc: "We dedicate focused time to each client, listening closely to understand what you truly want.",
        icon: "Clock"
      }
    ]
  },

  serviceCategories: [
    {
      id: "haircuts",
      name: "Haircuts & Styling",
      tagline: "Tailored shapes, precision cuts, and bouncy finishes for every hair type.",
      items: [
        {
          name: "Women's Haircut & Finish",
          description: "Includes a thorough consultation, warm wash, relaxing scalp massage, precision cut, and blow-dry styling.",
          duration: "45–60 min",
          price: "$48",
          popular: true
        },
        {
          name: "Men's Classic Barber Cut",
          description: "Clean scissor and clipper work, hot rinse, neck taper, and light styling product finish.",
          duration: "30–40 min",
          price: "$28",
          popular: true
        },
        {
          name: "Children's Cut (10 & under)",
          description: "Gentle, patient, and quick haircut designed to keep little ones relaxed and happy.",
          duration: "25–30 min",
          price: "$22"
        },
        {
          name: "Signature Wash & Blowout",
          description: "Invigorating cleanse with botanical shampoo, deep conditioner, and polished round-brush volume finish.",
          duration: "35–45 min",
          price: "$35"
        },
        {
          name: "Bang Trim / Neck Clean-up",
          description: "A quick refresh between full haircut appointments to keep your lines clean.",
          duration: "15 min",
          price: "$12"
        },
        {
          name: "Special Occasion Updo / Style",
          description: "Elegant pins, textured waves, or classic braided updos for weddings, graduations, and parties.",
          duration: "50–60 min",
          price: "From $65"
        }
      ]
    },
    {
      id: "color",
      name: "Color & Highlights",
      tagline: "Dimensional shades, grey coverage, and luminous custom foil work.",
      items: [
        {
          name: "Single Process Root Touch-Up",
          description: "Flawless coverage for new growth up to 1.5 inches, matched seamlessly to your existing color.",
          duration: "60–75 min",
          price: "$65",
          popular: true
        },
        {
          name: "All-Over Single Tone Color",
          description: "Rich, vibrant color saturated from scalp to ends for consistent tone and glossy reflection.",
          duration: "75–90 min",
          price: "From $85"
        },
        {
          name: "Partial Foil Highlights",
          description: "Strategic placement around the crown and face framing for natural, sun-lit dimension.",
          duration: "75–90 min",
          price: "From $95",
          popular: true
        },
        {
          name: "Full Head Highlights",
          description: "Comprehensive foil placement from hairline to nape for an all-over brighter, multi-tonal effect.",
          duration: "100–120 min",
          price: "From $135"
        },
        {
          name: "Balayage / Lived-in Color",
          description: "Freehand hand-painted illumination for soft transitions and effortless low-maintenance grow-out.",
          duration: "120–150 min",
          price: "From $150"
        },
        {
          name: "Toner & Gloss Refresh",
          description: "Neutralizes unwanted brassiness, rebalances blonde hues, and deposits high-mirror shine.",
          duration: "30–40 min",
          price: "$45"
        }
      ]
    },
    {
      id: "treatments",
      name: "Treatments & Care",
      tagline: "Therapeutic hair and scalp rituals to restore bounce, strength, and hydration.",
      items: [
        {
          name: "Deep Moisture Botanical Mask",
          description: "Nutrient-rich conditioning treatment infused with argan and shea butter to restore dehydrated locks.",
          duration: "25–30 min",
          price: "$35",
          popular: true
        },
        {
          name: "Purifying Scalp Detox & Massage",
          description: "Gentle exfoliating treatment to eliminate mineral and product buildup, soothe irritation, and boost circulation.",
          duration: "30–40 min",
          price: "$40"
        },
        {
          name: "Keratin Smoothing Infusion",
          description: "Eliminates stubborn humidity frizz, seals split cuticles, and cuts everyday styling time in half.",
          duration: "90–120 min",
          price: "From $140"
        },
        {
          name: "Bond-Repair Add-On (Olaplex)",
          description: "Rebuilds internal disulfide bonds during chemical coloring or as a standalone strengthening boost.",
          duration: "20 min",
          price: "$30"
        }
      ]
    },
    {
      id: "waxing",
      name: "Waxing & Finishing",
      tagline: "Gentle facial waxing and clean brow shaping using sensitive-skin botanical wax.",
      items: [
        {
          name: "Eyebrow Clean-Up & Sculpt",
          description: "Precise shaping following your natural brow bone architecture for clean, open eyes.",
          duration: "15 min",
          price: "$15",
          popular: true
        },
        {
          name: "Upper Lip Wax",
          description: "Fast, gentle hair removal with calming post-wax aloe infusion.",
          duration: "10 min",
          price: "$10"
        },
        {
          name: "Chin Wax",
          description: "Gentle removal of stray hairs with sensitive chamomile wax formula.",
          duration: "10 min",
          price: "$12"
        },
        {
          name: "Full Face Trio (Brows, Lip, Chin)",
          description: "Complete facial maintenance package for a silky smooth canvas.",
          duration: "25–30 min",
          price: "$32"
        }
      ]
    }
  ]
};
