'use client';

import React from 'react';
import PersonalHero from './PersonalHero';
import HobbiesBento from './HobbiesBento';
import LifeCarousel from './LifeCarousel';
import LifeDashboard from './LifeDashboard';
import ThankYouBanner from './ThankYouBanner';
import Footer from '@/components/Footer';

export default function PersonalView() {
  return (
    <div className="w-full flex flex-col items-center">
      <PersonalHero />
      <HobbiesBento />
      <LifeCarousel />
      <LifeDashboard />
      <ThankYouBanner />
      <Footer />
    </div>
  );
}
