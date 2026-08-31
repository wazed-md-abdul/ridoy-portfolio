'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Flame, BookOpen, Music, Globe2, Sparkles, ExternalLink } from 'lucide-react';
import { LiquidGlassCard } from '@/components/ui/liquid-glass';

export default function HobbiesBento() {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const mediaCovers = [
    { title: 'Norwegian Wood', tag: 'Novel', color: 'from-amber-600 to-amber-900', emoji: '📖', rot: -8 },
    { title: 'Interstellar', tag: 'Film', color: 'from-blue-600 to-indigo-950', emoji: '🌌', rot: 6 },
    { title: 'Steins;Gate', tag: 'Anime', color: 'from-emerald-600 to-teal-950', emoji: '⏳', rot: -4 },
    { title: 'Dark Souls', tag: 'Game', color: 'from-orange-700 to-stone-900', emoji: '🔥', rot: 8 },
    { title: 'Radiohead', tag: 'Music', color: 'from-purple-700 to-slate-900', emoji: '🎧', rot: -6 },
    { title: 'Cyberpunk', tag: 'Sci-Fi', color: 'from-cyan-500 to-blue-900', emoji: '⚡', rot: 4 },
  ];

  const languagesList = [
    { name: 'English', level: 'Fluent', flag: '🇬🇧', color: '#13D6E9' },
    { name: 'Bangla', level: 'Native', flag: '🇧🇩', color: '#10b981' },
    { name: 'Italian', level: 'Intermediate', flag: '🇮🇹', color: '#f59e0b' },
    { name: 'Japanese', level: 'Learning', flag: '🇯🇵', color: '#ec4899' },
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white flex items-center justify-center gap-3">
            <span>Hriday&apos;s Hobbies</span>
            <Sparkles className="w-6 h-6 text-[#13D6E9] animate-pulse" />
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground mt-3 max-w-xl mx-auto">
            I like to stay active and creative. New hobbies and skills are explored every year.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-5 sm:gap-6">
          {/* Card 1: Morning Run (col-span 4) */}
          <div className="col-span-1 lg:col-span-4">
            <LiquidGlassCard
              glowIntensity="sm"
              shadowIntensity="sm"
              borderRadius="24px"
              blurIntensity="xl"
              draggable={false}
              className="h-full min-h-[360px] lg:min-h-[420px] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden border border-white/10 group"
            >
              {/* Background running imagery / gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#075868]/40 via-black/80 to-[#04071D] z-0" />
              <div
                className="absolute inset-0 opacity-25 mix-blend-screen bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at center, rgba(19, 214, 233, 0.2) 0%, transparent 70%), url("https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=1200&auto=format&fit=crop")',
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-2 text-[#13D6E9] text-xs font-bold uppercase tracking-widest mb-2">
                  <Flame className="w-4 h-4" />
                  <span>Activity & Wellness</span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
                  Morning Run & Fitness
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-2.5 max-w-lg leading-relaxed">
                  There&apos;s something special about running at sunrise. I&apos;m not a professional athlete, but it brings clarity, discipline, and peaceful focus (⊗`◟´⊗). I also enjoy calisthenics, gym, and swimming.
                </p>
              </div>

              {/* Stat badges */}
              <div className="relative z-10 mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-3">
                <div className="px-3.5 py-1.5 rounded-full bg-black/60 border border-[#13D6E9]/40 text-[#13D6E9] text-xs font-semibold flex items-center gap-1.5 shadow-[0_0_12px_rgba(19,214,233,0.2)]">
                  <span>🏃 5km Daily Morning Pacing</span>
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-black/60 border border-white/10 text-gray-300 text-xs font-semibold flex items-center gap-1.5">
                  <span>🏊 Weekend Swimming</span>
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-black/60 border border-white/10 text-gray-300 text-xs font-semibold flex items-center gap-1.5">
                  <span>🧘 Mindful Flow</span>
                </div>
              </div>
            </LiquidGlassCard>
          </div>

          {/* Card 2: Enjoyer of Good Books (col-span 2) */}
          <div className="col-span-1 lg:col-span-2">
            <LiquidGlassCard
              glowIntensity="sm"
              shadowIntensity="sm"
              borderRadius="24px"
              blurIntensity="xl"
              draggable={false}
              className="h-full min-h-[360px] lg:min-h-[420px] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden border border-white/10"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-[#13D6E9] text-xs font-bold uppercase tracking-widest mb-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Literature & Culture</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Enjoyer of good books
                </h3>
                <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                  From novels to sci-fi and anime lore, reading books and appreciating narrative art is how I spend peaceful evenings o(〃＾▽＾〃)o.
                </p>
              </div>

              {/* Interactive Rotated Cards Fan */}
              <div className="relative z-10 py-6 h-36 flex items-center justify-center overflow-hidden">
                <div className="flex items-center justify-center -space-x-4">
                  {mediaCovers.map((item, i) => (
                    <motion.div
                      key={item.title}
                      whileHover={{ y: -16, scale: 1.15, zIndex: 50, rotate: 0 }}
                      style={{ rotate: `${item.rot}deg` }}
                      className={`w-20 sm:w-24 h-28 sm:h-32 rounded-xl p-2 flex flex-col justify-between border border-white/20 shadow-xl bg-gradient-to-br ${item.color} transition-all duration-300 shrink-0`}
                    >
                      <div className="text-lg">{item.emoji}</div>
                      <div>
                        <span className="text-[9px] uppercase tracking-wider text-white/70 block">{item.tag}</span>
                        <span className="text-[10px] font-bold text-white leading-tight line-clamp-2">{item.title}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </LiquidGlassCard>
          </div>

          {/* Card 3: Music Enthusiast (col-span 3) */}
          <div className="col-span-1 lg:col-span-3">
            <LiquidGlassCard
              glowIntensity="sm"
              shadowIntensity="sm"
              borderRadius="24px"
              blurIntensity="xl"
              draggable={false}
              className="h-full min-h-[340px] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden border border-white/10 group"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-[#13D6E9] text-xs font-bold uppercase tracking-widest mb-2">
                  <Music className="w-4 h-4" />
                  <span>Acoustics & Melody</span>
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Music Enthusiast
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
                  I play acoustic guitar and piano, composing Lo-Fi beats, fingerstyle melodies, and ambient soundscapes (❁´◡`❁).
                </p>
              </div>

              {/* Music Player Interactive Card */}
              <div className="relative z-10 mt-6 p-4 rounded-2xl bg-black/60 border border-white/10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                    className="w-12 h-12 rounded-full bg-[#13D6E9] text-black flex items-center justify-center font-bold shadow-[0_0_20px_rgba(19,214,233,0.5)] shrink-0 transition-transform hover:scale-105"
                  >
                    <Play className={`w-5 h-5 fill-current ${isPlayingAudio ? 'animate-pulse' : 'translate-x-0.5'}`} />
                  </motion.button>
                  <div>
                    <p className="text-xs font-bold text-white">Aruarian Vibes (Fingerstyle)</p>
                    <p className="text-[10px] text-[#13D6E9]">Acoustic Guitar • Lo-Fi Chill</p>
                  </div>
                </div>

                {/* Animated sound waves */}
                <div className="flex items-end gap-1 h-8 px-2">
                  {[40, 75, 55, 90, 65, 80, 45].map((h, i) => (
                    <span
                      key={i}
                      className="w-1 bg-[#13D6E9] rounded-full transition-all duration-300"
                      style={{
                        height: isPlayingAudio ? `${h}%` : '20%',
                        animation: isPlayingAudio ? `bounce 1s ease-in-out infinite ${i * 0.15}s` : 'none',
                      }}
                    />
                  ))}
                </div>
              </div>
            </LiquidGlassCard>
          </div>

          {/* Card 4: Dream of Becoming a Polyglot (col-span 3) */}
          <div className="col-span-1 lg:col-span-3">
            <LiquidGlassCard
              glowIntensity="sm"
              shadowIntensity="sm"
              borderRadius="24px"
              blurIntensity="xl"
              draggable={false}
              className="h-full min-h-[340px] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden border border-white/10"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-[#13D6E9] text-xs font-bold uppercase tracking-widest mb-2">
                  <Globe2 className="w-4 h-4" />
                  <span>Global Communication</span>
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Dream of Becoming a Polyglot
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
                  Currently fluent in English & Bangla, practicing Italian, and studying Japanese. I love connecting with developers worldwide []~(￣▽￣)~*
                </p>
              </div>

              {/* Language Chips */}
              <div className="relative z-10 mt-6 grid grid-cols-2 gap-2.5">
                {languagesList.map((lang) => (
                  <div
                    key={lang.name}
                    className="p-2.5 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between hover:border-[#13D6E9]/50 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{lang.flag}</span>
                      <div className="text-left">
                        <p className="text-xs font-bold text-white">{lang.name}</p>
                        <p className="text-[9px] text-muted-foreground">{lang.level}</p>
                      </div>
                    </div>
                    <span
                      className="w-2 h-2 rounded-full shadow-[0_0_8px_currentColor]"
                      style={{ backgroundColor: lang.color, color: lang.color }}
                    />
                  </div>
                ))}
              </div>
            </LiquidGlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
