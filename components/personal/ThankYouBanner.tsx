'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { LiquidGlassCard } from '@/components/ui/liquid-glass';

export default function ThankYouBanner() {
  return (
    <section className="relative w-full py-16 sm:py-24 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <LiquidGlassCard
          glowIntensity="md"
          shadowIntensity="md"
          borderRadius="32px"
          blurIntensity="xl"
          draggable={false}
          className="relative overflow-hidden p-8 sm:p-14 md:p-20 text-center border border-[#13D6E9]/40 bg-gradient-to-b from-[#075868]/20 via-[#04071D] to-[#010307]"
        >
          {/* Ambient Glowing Particle Lines */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[10, 30, 50, 70, 90].map((left, idx) => (
              <motion.div
                key={idx}
                className="absolute top-0 w-px bg-gradient-to-b from-[#13D6E9] via-[#13D6E9]/40 to-transparent"
                style={{ left: `${left}%`, height: '90px' }}
                animate={{ y: [-100, 300], opacity: [0, 1, 0] }}
                transition={{
                  duration: 3 + idx * 0.5,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: idx * 0.7,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#13D6E9]/10 border border-[#13D6E9]/30 text-[#13D6E9] text-xs font-bold uppercase tracking-widest mb-6 shadow-[0_0_15px_rgba(19,214,233,0.2)]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Appreciation</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              For visiting my profile
              <br />
              <span className="bg-gradient-to-r from-[#13D6E9] via-cyan-300 to-teal-200 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(19,214,233,0.5)]">
                Thank you.
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-gray-300 mt-6 max-w-xl mx-auto leading-relaxed">
              Always open to discussing high-impact software, novel ideas, literature, music, or collaborative opportunities.
            </p>

            <div className="mt-8 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <span>Crafted by Hriday Debnath</span>
              <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
              <span>2026</span>
            </div>
          </div>
        </LiquidGlassCard>
      </div>
    </section>
  );
}
