'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Layers, ArrowUpRight } from 'lucide-react';
import { LiquidGlassCard } from '@/components/ui/liquid-glass';

interface CarouselItem {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  gradient: string;
  stats: string;
}

const items: CarouselItem[] = [
  {
    id: '1',
    category: 'Literature & Philosophy',
    title: 'Fiction Novels & Deep Reads',
    description: 'Exploring profound storytelling from Haruki Murakami to sci-fi classics and philosophy.',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop',
    gradient: 'from-amber-500/20 via-black/60 to-[#04071D]',
    stats: '50+ Books Completed',
  },
  {
    id: '2',
    category: 'Melody & Instruments',
    title: 'Acoustic Guitar & Piano',
    description: 'Improvising chords, fingerstyle acoustic arrangements, and Lo-Fi composition.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop',
    gradient: 'from-purple-500/20 via-black/60 to-[#04071D]',
    stats: '20+ Melodies Recorded',
  },
  {
    id: '3',
    category: 'Engineering & Innovation',
    title: 'Fullstack & Cloud Architecture',
    description: 'Crafting responsive, high-performance web applications with Next.js, React, Node.js & AI.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop',
    gradient: 'from-[#13D6E9]/25 via-black/60 to-[#04071D]',
    stats: '25+ Projects Built',
  },
  {
    id: '4',
    category: 'Discipline & Movement',
    title: 'Gym, Calisthenics & Swimming',
    description: 'Staying healthy, energetic, and resilient through regular strength training and water sports.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop',
    gradient: 'from-emerald-500/20 via-black/60 to-[#04071D]',
    stats: '5x Weekly Routine',
  },
  {
    id: '5',
    category: 'Culture & Dialects',
    title: 'Polyglot Journey',
    description: 'Connecting with cultures worldwide through English, Italian, Bangla, and Japanese.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop',
    gradient: 'from-blue-500/20 via-black/60 to-[#04071D]',
    stats: '4 Languages Explored',
  },
];

export default function LifeCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full py-16 sm:py-24 font-mono overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header with Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 text-[#13D6E9] text-xs font-bold uppercase tracking-widest mb-1.5">
              <Layers className="w-4 h-4" />
              <span>Lifestyle Dimensions</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Components of Hriday&apos;s Life
            </h2>
          </div>

          {/* Navigation Arrow Controls */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={() => handleScroll('left')}
              className="w-10 h-10 rounded-full bg-[#04071D] border border-white/10 text-white hover:border-[#13D6E9] hover:text-[#13D6E9] hover:shadow-[0_0_12px_rgba(19,214,233,0.3)] flex items-center justify-center transition-all duration-200 active:scale-95"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="w-10 h-10 rounded-full bg-[#04071D] border border-white/10 text-white hover:border-[#13D6E9] hover:text-[#13D6E9] hover:shadow-[0_0_12px_rgba(19,214,233,0.3)] flex items-center justify-center transition-all duration-200 active:scale-95"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto pb-6 pt-2 scroll-smooth scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {items.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -6 }}
              className="w-[280px] sm:w-[340px] md:w-[380px] shrink-0 snap-start"
            >
              <LiquidGlassCard
                glowIntensity="sm"
                shadowIntensity="sm"
                borderRadius="28px"
                blurIntensity="xl"
                draggable={false}
                className="h-[440px] sm:h-[480px] p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden border border-white/10 group"
              >
                {/* Background Image with Ambient Glow */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} z-10`} />

                {/* Top Info */}
                <div className="relative z-20">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 border border-white/20 text-[#13D6E9] backdrop-blur-md inline-block">
                    {item.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-3 leading-tight tracking-tight">
                    {item.title}
                  </h3>
                </div>

                {/* Bottom Info */}
                <div className="relative z-20">
                  <p className="text-xs sm:text-sm text-gray-200 leading-relaxed mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  <div className="pt-3 border-t border-white/15 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#13D6E9] tracking-wide">
                      {item.stats}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center group-hover:bg-[#13D6E9] group-hover:text-black transition-colors duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </LiquidGlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
