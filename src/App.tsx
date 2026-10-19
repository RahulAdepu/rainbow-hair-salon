import React from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServiceMenu } from './components/ServiceMenu';
import { About } from './components/About';
import { LocationHours } from './components/LocationHours';
import { Footer } from './components/Footer';
import { StickyCallBar } from './components/StickyCallBar';

export const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-linen-100 font-sans text-espresso-900 selection:bg-terracotta-200 selection:text-espresso-950">
      {/* Top Announcement Bar */}
      <AnnouncementBar />

      {/* Primary Sticky Header */}
      <Header />

      {/* Main Single-Page Content */}
      <main className="flex-1">
        <Hero />
        <ServiceMenu />
        <About />
        <LocationHours />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile-Only Persistent Bottom Sticky Call Bar */}
      <StickyCallBar />
    </div>
  );
};

export default App;
