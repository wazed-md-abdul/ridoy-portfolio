'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  AlarmClock,
  Sparkles,
  Check,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Flame,
  Music,
  BookOpen,
  Dumbbell,
  GraduationCap,
  Plane,
  Guitar,
  Piano,
  Award,
  Disc3,
  Zap,
  Target,
  Activity,
  Layers,
  TrendingUp,
} from 'lucide-react';

export default function LifeDashboard() {
  // Aspirations & Goals state
  const [plans, setPlans] = useState([
    { id: 1, text: 'Complete Academic Degree (B.Sc CSE)', category: 'Education', done: true },
    { id: 2, text: 'Travel across Europe & East Asia', category: 'Travel', done: false },
    { id: 3, text: 'Master Piano & Classical Fingerstyle', category: 'Music', done: false },
    { id: 4, text: 'Read 100 Landmark Books & Literature', category: 'Mind', done: true },
    { id: 5, text: 'Calisthenics Mastery & 100kg Bench', category: 'Fitness', done: true },
    { id: 6, text: 'Build & Ship Impactful Open Source Apps', category: 'Code', done: true },
    { id: 7, text: 'Learn Conversational Italian & Japanese', category: 'Language', done: false },
    { id: 8, text: 'Publish Technical Research Articles', category: 'Tech', done: false },
    { id: 9, text: 'Inspire fellow builders & community', category: 'Life', done: true },
  ]);

  const [activePlanTab, setActivePlanTab] = useState<'all' | 'ongoing' | 'completed'>('all');

  // Lo-Fi Player State
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(38);

  const tracks = [
    {
      title: 'Aruarian Dance',
      artist: 'Nujabes • Samurai Champloo',
      duration: '4:10',
      cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=400&auto=format&fit=crop',
      genre: 'Chillhop / Nostalgia',
    },
    {
      title: 'Luv(sic) Part 3',
      artist: 'Nujabes ft. Shing02',
      duration: '3:45',
      cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=400&auto=format&fit=crop',
      genre: 'Jazzy Hip-Hop',
    },
    {
      title: 'Weightless Ambient',
      artist: 'Marconi Union',
      duration: '8:05',
      cover: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=400&auto=format&fit=crop',
      genre: 'Deep Focus Ambient',
    },
  ];

  // Daily Routine schedule
  const routineItems = [
    { time: '06:00 AM', label: 'Morning Run & Hydration', category: 'Health', status: 'done', icon: Flame },
    { time: '08:30 AM', label: 'Deep Architecture & Cloud Code', category: 'Work', status: 'done', icon: Zap },
    { time: '01:00 PM', label: 'Tech Sync & Problem Solving', category: 'Tech', status: 'done', icon: Target },
    { time: '05:00 PM', label: 'Gym / Calisthenics Routine', category: 'Fitness', status: 'current', icon: Dumbbell },
    { time: '07:00 PM', label: 'Literature & Philosophy Reading', category: 'Mind', status: 'upcoming', icon: BookOpen },
    { time: '09:00 PM', label: 'Piano & Acoustic Melodies', category: 'Music', status: 'upcoming', icon: Music },
  ];

  // Milestones Timeline
  const milestones = [
    { label: 'Degree', desc: 'B.Sc in CSE', icon: GraduationCap, height: 110, color: '#13D6E9' },
    { label: 'Piano', desc: 'Chopin & Lo-Fi', icon: Piano, height: 75, color: '#38BDF8' },
    { label: 'Guitar', desc: 'Fingerstyle', icon: Guitar, height: 125, color: '#818CF8' },
    { label: 'Books', desc: '50+ Finished', icon: BookOpen, height: 85, color: '#C084FC' },
    { label: 'Fitness', desc: 'Discipline', icon: Dumbbell, height: 115, color: '#13D6E9' },
    { label: 'Travel', desc: 'New Horizons', icon: Plane, height: 90, color: '#2DD4BF' },
  ];

  // 7-day habit streaks
  const habitDays = [
    { day: 'M', done: true },
    { day: 'T', done: true },
    { day: 'W', done: true },
    { day: 'T', done: true },
    { day: 'F', done: true },
    { day: 'S', done: true },
    { day: 'S', done: true },
  ];

  // Tracker achievements
  const stats = [
    { label: 'Books Read', value: '50+', sub: 'Literature & Sci-Fi', icon: BookOpen, color: 'from-[#13D6E9] to-blue-500' },
    { label: 'Coding Commits', value: '1.2k+', sub: '2025-2026 Activity', icon: Zap, color: 'from-purple-500 to-indigo-500' },
    { label: 'Anime & Films', value: '500+', sub: 'Cinematic Inspirations', icon: Layers, color: 'from-pink-500 to-rose-500' },
    { label: 'Music Repertoire', value: '25+', sub: 'Piano & Guitar', icon: Music, color: 'from-teal-400 to-cyan-500' },
  ];

  // Toggle plan completion
  const togglePlan = (id: number) => {
    setPlans(plans.map((p) => (p.id === id ? { ...p, done: !p.done } : p)));
  };

  const completedCount = plans.filter((p) => p.done).length;
  const completionPercentage = Math.round((completedCount / plans.length) * 100);

  const filteredPlans = plans.filter((p) => {
    if (activePlanTab === 'completed') return p.done;
    if (activePlanTab === 'ongoing') return !p.done;
    return true;
  });

  return (
    <section className="relative w-full py-16 sm:py-24 font-mono">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-radial from-[#13D6E9]/10 via-[#075868]/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#13D6E9]/10 border border-[#13D6E9]/30 text-[#13D6E9] text-xs font-bold uppercase tracking-widest mb-4 shadow-[0_0_15px_rgba(19,214,233,0.2)]">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span>Bio-Rhythm & Life OS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white flex items-center justify-center gap-3">
            <span>Life Dashboard & Habits</span>
            <Sparkles className="w-6 h-6 text-[#13D6E9] animate-pulse" />
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground mt-3 max-w-2xl mx-auto leading-relaxed">
            Real-time routine telemetry, ongoing aspirations, audio landscapes, and creative milestones.
          </p>
        </div>

        {/* Bento Grid Layout - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* ================= CARD 1: Daily Bio-Rhythm Routine ================= */}
          <div className="rounded-3xl bg-[#04071D] border border-white/10 hover:border-[#13D6E9]/40 p-6 shadow-2xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-12 -top-12 w-32 h-32 bg-[#13D6E9]/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3.5 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#13D6E9]/15 border border-[#13D6E9]/30 text-[#13D6E9]">
                    <AlarmClock className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">Daily Routine</h3>
                    <p className="text-[10px] text-muted-foreground">Structured Habit Flow</p>
                  </div>
                </div>
                <span className="text-[10px] text-[#13D6E9] font-bold px-2.5 py-1 rounded-full bg-[#13D6E9]/10 border border-[#13D6E9]/30 flex items-center gap-1.5 shadow-[0_0_10px_rgba(19,214,233,0.2)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#13D6E9] animate-ping" />
                  <span>UTC+6 Active</span>
                </span>
              </div>

              {/* Routine Items */}
              <div className="space-y-2.5">
                {routineItems.map((item, idx) => {
                  const Icon = item.icon;
                  const isCurrent = item.status === 'current';
                  const isDone = item.status === 'done';

                  return (
                    <div
                      key={idx}
                      className={`flex items-center justify-between p-2.5 rounded-xl transition-all duration-200 ${
                        isCurrent
                          ? 'bg-[#13D6E9]/15 border border-[#13D6E9]/50 shadow-[0_0_15px_rgba(19,214,233,0.25)]'
                          : 'bg-white/[0.03] border border-white/5 hover:border-white/15'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0 pr-2">
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                            isCurrent
                              ? 'bg-[#13D6E9] text-black font-bold shadow-[0_0_8px_#13D6E9]'
                              : isDone
                              ? 'bg-[#13D6E9]/20 text-[#13D6E9]'
                              : 'bg-white/5 text-gray-400'
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-xs font-semibold text-gray-200 truncate">{item.label}</span>
                          <span className="text-[10px] text-gray-500">{item.category}</span>
                        </div>
                      </div>

                      <span
                        className={`text-[11px] font-bold px-2 py-0.5 rounded-md shrink-0 ${
                          isCurrent
                            ? 'bg-[#13D6E9] text-black font-extrabold'
                            : isDone
                            ? 'text-[#13D6E9] bg-[#13D6E9]/10'
                            : 'text-gray-400 bg-white/5'
                        }`}
                      >
                        {item.time}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Habit Streak Footer */}
            <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs text-orange-400 font-bold">
                <Flame className="w-4 h-4 fill-orange-400 animate-bounce" />
                <span>42-Day Streak</span>
              </div>
              <div className="flex items-center gap-1">
                {habitDays.map((d, i) => (
                  <div key={i} className="flex flex-col items-center gap-0.5">
                    <span className="text-[9px] text-gray-500">{d.day}</span>
                    <div className="w-4 h-4 rounded-md bg-[#13D6E9] flex items-center justify-center shadow-[0_0_6px_rgba(19,214,233,0.5)]">
                      <Check className="w-2.5 h-2.5 text-black stroke-[3]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================= CARD 2: Future Aspirations Checklist ================= */}
          <div className="rounded-3xl bg-[#04071D] border border-white/10 hover:border-blue-500/40 p-6 shadow-2xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-12 -top-12 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3.5 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-blue-500/15 border border-blue-500/30 text-blue-400">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">Future Aspirations</h3>
                    <p className="text-[10px] text-muted-foreground">Long-term Vision Map</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/40">
                  <span className="text-xs font-black text-blue-400">{completionPercentage}%</span>
                  <span className="text-[10px] text-gray-400">
                    ({completedCount}/{plans.length})
                  </span>
                </div>
              </div>

              {/* Filter Tabs */}
              <div className="flex gap-1.5 mb-3 bg-black/50 p-1 rounded-xl border border-white/10">
                {(['all', 'ongoing', 'completed'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActivePlanTab(tab)}
                    className={`flex-1 py-1 text-[11px] font-bold rounded-lg capitalize transition-all ${
                      activePlanTab === tab
                        ? 'bg-blue-500 text-white shadow-[0_0_10px_rgba(59,130,246,0.5)]'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Aspirations Checklist */}
              <div className="space-y-2 max-h-[280px] overflow-y-auto pr-1">
                <AnimatePresence>
                  {filteredPlans.map((p) => (
                    <motion.div
                      key={p.id}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      onClick={() => togglePlan(p.id)}
                      className={`flex items-center justify-between gap-3 p-2.5 rounded-xl border transition-all duration-200 ${
                        p.done
                          ? 'bg-blue-500/10 border-blue-500/30'
                          : 'bg-white/[0.03] border-white/5 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all shrink-0 ${
                            p.done
                              ? 'bg-blue-500 border-blue-500 text-white shadow-[0_0_8px_#3B82F6]'
                              : 'border-gray-500 hover:border-blue-400'
                          }`}
                        >
                          {p.done && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                        </div>
                        <span
                          className={`text-xs truncate ${
                            p.done ? 'line-through text-gray-500 font-normal' : 'text-gray-200 font-medium'
                          }`}
                        >
                          {p.text}
                        </span>
                      </div>

                      <span className="text-[9px] font-bold px-2 py-0.5 rounded-md bg-white/10 text-gray-400 uppercase tracking-wider shrink-0">
                        {p.category}
                      </span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Bottom Target Status */}
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-muted-foreground">
              <span>Goal Target: 2026-2027</span>
              <span className="text-blue-400 font-bold">● Active Sprint</span>
            </div>
          </div>

          {/* ================= CARD 3: Cyber Lo-Fi Ambient Player ================= */}
          <div className="rounded-3xl bg-[#04071D] border border-white/10 hover:border-[#13D6E9]/40 p-6 shadow-2xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-[#075868]/20 via-[#04071D] to-[#010307]">
            <div className="absolute -right-12 -top-12 w-32 h-32 bg-[#13D6E9]/15 rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3.5 mb-4">
                <div className="flex items-center gap-2">
                  <Disc3 className={`w-4 h-4 text-[#13D6E9] ${isPlaying ? 'animate-spin' : ''}`} />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Lo-Fi Ambient Player</h3>
                </div>
                <span className="text-[10px] text-[#13D6E9] font-bold bg-[#13D6E9]/10 px-2 py-0.5 rounded-full border border-[#13D6E9]/30">
                  {tracks[currentTrackIndex].genre}
                </span>
              </div>

              {/* Cover Art & Track Info */}
              <div className="flex items-center gap-4 mt-2">
                <div className="relative shrink-0">
                  <img
                    src={tracks[currentTrackIndex].cover}
                    alt="cover"
                    className={`w-20 h-20 rounded-full object-cover border-2 border-[#13D6E9]/60 shadow-[0_0_20px_rgba(19,214,233,0.4)] ${
                      isPlaying ? 'animate-[spin_8s_linear_infinite]' : ''
                    }`}
                  />
                  {/* Center Spindle */}
                  <div className="absolute inset-0 m-auto w-5 h-5 rounded-full bg-black border-2 border-white/80 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#13D6E9]" />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-white truncate drop-shadow-md">
                    {tracks[currentTrackIndex].title}
                  </p>
                  <p className="text-xs text-[#13D6E9] truncate mt-0.5">{tracks[currentTrackIndex].artist}</p>

                  {/* Frequency Equalizer Visualizer */}
                  <div className="flex items-end gap-1 h-3.5 mt-3">
                    {[100, 60, 85, 45, 95, 70, 50, 80].map((h, i) => (
                      <motion.span
                        key={i}
                        className="w-1 bg-gradient-to-t from-[#13D6E9] to-cyan-200 rounded-full"
                        animate={{
                          height: isPlaying ? [`${h * 0.3}%`, `${h}%`, `${h * 0.4}%`] : '30%',
                        }}
                        transition={{
                          duration: 0.6 + i * 0.1,
                          repeat: isPlaying ? Infinity : 0,
                          ease: 'easeInOut',
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Progress Scrubber */}
              <div className="mt-5">
                <div
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickX = e.clientX - rect.left;
                    setTrackProgress(Math.round((clickX / rect.width) * 100));
                  }}
                  className="w-full h-2 rounded-full bg-white/10 relative overflow-hidden group cursor-pointer"
                >
                  <div
                    className="h-full bg-gradient-to-r from-[#13D6E9] via-cyan-300 to-teal-200 rounded-full relative shadow-[0_0_10px_#13D6E9]"
                    style={{ width: `${isPlaying ? trackProgress : 42}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-gray-400 mt-1.5 font-bold">
                  <span>1:28</span>
                  <span>{tracks[currentTrackIndex].duration}</span>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-5 mt-4 pt-3 border-t border-white/10">
              <button
                onClick={() => setCurrentTrackIndex((prev) => (prev === 0 ? tracks.length - 1 : prev - 1))}
                className="p-2 text-gray-400 hover:text-white hover:scale-110 transition-all"
                aria-label="Previous Track"
              >
                <SkipBack className="w-5 h-5 fill-current" />
              </button>

              <motion.button
                whileTap={{ scale: 0.92 }}
                whileHover={{ scale: 1.08 }}
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#13D6E9] to-cyan-300 text-black flex items-center justify-center shadow-[0_0_25px_rgba(19,214,233,0.7)]"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 fill-current stroke-[2.5]" />
                ) : (
                  <Play className="w-5 h-5 fill-current stroke-[2.5] translate-x-0.5" />
                )}
              </motion.button>

              <button
                onClick={() => setCurrentTrackIndex((prev) => (prev + 1) % tracks.length)}
                className="p-2 text-gray-400 hover:text-white hover:scale-110 transition-all"
                aria-label="Next Track"
              >
                <SkipForward className="w-5 h-5 fill-current" />
              </button>
            </div>
          </div>

          {/* ================= CARD 4: Curated Aesthetic Mood Gallery ================= */}
          <div className="rounded-3xl bg-[#04071D] border border-white/10 hover:border-purple-500/40 p-6 shadow-2xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-12 -top-12 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3.5 mb-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Aesthetic Mood Gallery</h3>
                </div>
                <span className="text-[10px] text-gray-400">Tokyo • Synth • Lo-Fi</span>
              </div>

              {/* Grid Images */}
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { src: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=300&auto=format&fit=crop', tag: 'Neon Tokyo' },
                  { src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=300&auto=format&fit=crop', tag: 'Fluid Art' },
                  { src: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=300&auto=format&fit=crop', tag: 'Cyber Grid' },
                  { src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=300&auto=format&fit=crop', tag: 'Silicon Matrix' },
                  { src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=300&auto=format&fit=crop', tag: 'Terminal Green' },
                  { src: 'https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?q=80&w=300&auto=format&fit=crop', tag: 'Prism Horizon' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.06, y: -2 }}
                    className="aspect-square rounded-xl overflow-hidden border border-white/10 bg-black/60 relative group shadow-md"
                  >
                    <img
                      src={item.src}
                      alt={item.tag}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-115"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-1.5">
                      <span className="text-[9px] font-bold text-cyan-300 leading-tight truncate">{item.tag}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-muted-foreground">
              <span>Visual Inspirations</span>
              <span className="text-purple-400 font-bold">★ 4K Curated</span>
            </div>
          </div>

          {/* ================= CARD 5: Milestones Constellation ================= */}
          <div className="rounded-3xl bg-[#04071D] border border-white/10 hover:border-[#13D6E9]/40 p-6 shadow-2xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-12 -top-12 w-32 h-32 bg-[#13D6E9]/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3.5 mb-3">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#13D6E9]" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Milestones & Focus</h3>
                </div>
                <span className="text-[10px] text-gray-400">Progress Vectors</span>
              </div>

              {/* Vertical Beams */}
              <div className="relative h-44 mt-4 flex items-end justify-between px-3">
                {/* Horizontal Baseline */}
                <div className="absolute top-4 inset-x-0 h-px bg-white/15">
                  <span className="absolute top-1/2 left-1/3 h-1 w-16 -translate-y-1/2 rounded-full bg-[#13D6E9] blur-[2px] animate-pulse" />
                </div>

                {milestones.map((m, idx) => {
                  const Icon = m.icon;
                  return (
                    <div key={idx} className="relative flex flex-col items-center group">
                      {/* Top connecting dot */}
                      <span
                        className="w-2 h-2 rounded-full absolute top-[-19px] shadow-[0_0_8px_#13D6E9]"
                        style={{ backgroundColor: m.color }}
                      />

                      {/* Vertical Beam */}
                      <div
                        className="w-[2px] bg-gradient-to-b from-[#13D6E9] via-white/20 to-transparent transition-all duration-500 group-hover:w-[3px] group-hover:from-cyan-300"
                        style={{ height: `${m.height}px` }}
                      />

                      {/* Icon Button */}
                      <motion.div
                        whileHover={{ scale: 1.2, y: -4 }}
                        className="w-10 h-10 rounded-2xl bg-[#04071D] border border-white/20 flex flex-col items-center justify-center shadow-lg group-hover:border-[#13D6E9] group-hover:shadow-[0_0_20px_rgba(19,214,233,0.5)] transition-all duration-300"
                        style={{ color: m.color }}
                      >
                        <Icon className="w-4 h-4" />
                      </motion.div>
                      <span className="text-[10px] font-bold text-gray-300 mt-1.5">{m.label}</span>
                      <span className="text-[8px] text-gray-500 truncate max-w-[50px]">{m.desc}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-muted-foreground">
              <span>Lifelong Horizons</span>
              <span className="text-[#13D6E9] font-bold">2026-2030</span>
            </div>
          </div>

          {/* ================= CARD 6: Growth Mastery & Stats ================= */}
          <div className="rounded-3xl bg-[#04071D] border border-white/10 hover:border-emerald-500/40 p-6 shadow-2xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-12 -top-12 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3.5 mb-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Growth & Mastery</h3>
                </div>
                <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
                  Level 26+
                </span>
              </div>

              {/* Progress Bars */}
              <div className="space-y-3.5">
                {[
                  { name: 'TypeScript & Next.js Architecture', pct: 95, color: 'from-[#13D6E9] to-blue-500' },
                  { name: 'Piano & Classical Fingerstyle', pct: 75, color: 'from-purple-500 to-pink-500' },
                  { name: 'Physical Conditioning & Calisthenics', pct: 90, color: 'from-emerald-400 to-teal-500' },
                  { name: 'World Literature & Philosophy', pct: 85, color: 'from-amber-400 to-orange-500' },
                ].map((item, i) => (
                  <div key={i} className="space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-300 font-medium truncate max-w-[200px]">{item.name}</span>
                      <span className="font-bold text-white text-[11px]">{item.pct}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: i * 0.15, ease: 'easeOut' }}
                        className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stat Pill Row */}
            <div className="mt-5 pt-3.5 border-t border-white/10 grid grid-cols-2 gap-2">
              {stats.slice(0, 2).map((s, idx) => (
                <div key={idx} className="p-2 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-2">
                  <s.icon className="w-3.5 h-3.5 text-[#13D6E9]" />
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold text-white leading-tight">{s.value}</p>
                    <p className="text-[9px] text-gray-500 truncate">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
