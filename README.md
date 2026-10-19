# Rainbow Hair Salon — Website

A lightweight, warm, and minimalist static website for **Rainbow Hair Salon**, a women-owned neighborhood salon on Broadview Avenue in Toronto, Ontario.

## 📍 Business Details Integrated
- **Name:** Rainbow Hair Salon
- **Address:** 308 Broadview Ave, Toronto, ON M4M 2G9
- **Phone:** (416) 778-7418 (Direct tap-to-call on all devices)
- **Neighborhood:** Broadview / Riverside / Riverdale / East Chinatown
- **Hours:** Mon–Sat: 10:00 AM – 8:00 PM | Sun: 11:00 AM – 6:00 PM
- **Rating:** 3.5 / 5 (15 Yelp community reviews)
- **Directions:** Direct links to Google Maps & Bing Maps
- **Transit:** TTC 504 King, 505 Dundas, and 506 Carlton streetcars stop within 100 meters

---

## 🎨 Design System
- **Aesthetic:** Soft linen & cream backgrounds (`#FAF6F0`), warm terracotta (`#B85D43`), sage olive (`#7B8456`), and deep espresso typography (`#231B15`).
- **Typography:** Playfair Display (editorial serif) paired with Inter (modern readable sans-serif).
- **Core Principle:** Phone-first, zero fluff, transparent line-item pricing, real-time open/closed status badge, accessible contrast (WCAG AA/AAA).

---

## 📁 Project Structure

```
salon/
├── dist/                     # Static production build (ready to deploy)
│   ├── index.html            # Standalone static HTML
│   └── assets/               # Bundled CSS & JavaScript
├── src/
│   ├── components/
│   │   ├── AnnouncementBar.tsx # Top micro-banner with walk-in note & phone link
│   │   ├── Header.tsx          # Wordmark, anchor navigation & primary CTA
│   │   ├── Hero.tsx            # Headline, community badges, dual CTAs & photo
│   │   ├── ServiceMenu.tsx     # Filterable services with transparent pricing
│   │   ├── About.tsx           # 15+ year history, women-led team & core values
│   │   ├── LocationHours.tsx   # Live open/closed badge, hours table, transit & maps
│   │   ├── StickyCallBar.tsx   # Mobile-only persistent one-tap call button
│   │   └── Footer.tsx          # Address recap, payment badges & copyright
│   ├── data/
│   │   └── salonData.ts        # Central configuration for pricing, hours & info
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

---

## 🚀 Running the Project

### Development Server:
```bash
npm run dev
```

### Production Build:
```bash
npm run build
```

### Local Preview:
```bash
npm run preview
```
Or open `dist/index.html` directly in any web browser.
