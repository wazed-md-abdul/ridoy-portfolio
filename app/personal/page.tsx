'use client';

import React, { useState } from 'react';
import Hero from '@/components/Hero';
import PersonalView from '@/components/personal/PersonalView';

export default function PersonalPage() {
  const [activeTab, setActiveTab] = useState('Personal');

  return (
    <main className="relative bg-background text-foreground flex justify-center items-center flex-col overflow-x-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full mx-auto">
        <Hero activeTab={activeTab} setActiveTab={setActiveTab} initialTab="Personal" />
        <PersonalView />

      </div>
    </main>
  );
}
