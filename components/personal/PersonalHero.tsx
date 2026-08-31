'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, Sparkles, Heart } from 'lucide-react';
import { LiquidGlassCard } from '@/components/ui/liquid-glass';
import { MorphingText } from '@/components/ui/morphing-text';
import GradientText from '@/components/GradientText';

const adjectives = [
  'Developer',
  'Peaceful',
  'Curious',
  'Builder',
  'Creative',
  'Passionate',
  'Dreamer',
];

export default function PersonalHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsModalOpen(false);
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <section className="relative w-full pt-28 pb-16 sm:pt-36 sm:pb-24 flex flex-col items-center justify-center text-center font-mono">
      {/* Background ambient light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-radial from-[#13D6E9]/15 via-transparent to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Main Title with glowing nickname badge */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto px-4"
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.25]">
          Hello again? <br />
          <span className="text-muted-foreground font-normal text-2xl sm:text-4xl md:text-5xl"> My nickname is </span>
          <GradientText
            colors={['#13D6E9', '#06b6d4', '#2563eb']}
            animationSpeed={3}
            direction="horizontal"
            yoyo={true}
            pauseOnHover={true}
            showBorder={true}
            className="px-4 py-1.5 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mx-1.5 align-middle shadow-[0_0_24px_rgba(19,214,233,0.35)] hover:shadow-[0_0_35px_rgba(19,214,233,0.6)]"
          >
            Ridoy
          </GradientText>
        </h1>

        {/* Dynamic Animated Morphing Text */}
        <div className="mt-8 sm:mt-10 min-h-[5rem] flex flex-col items-center justify-center">
          <div className="text-xl sm:text-3xl md:text-4xl font-normal text-muted-foreground flex items-center justify-center flex-wrap gap-2">
            <span>Hriday is</span>
            <div className="relative inline-flex items-center justify-center min-w-[180px] sm:min-w-[240px] h-10 sm:h-12 overflow-visible px-2">
              <MorphingText
                texts={adjectives}
                className="text-2xl sm:text-4xl text-[#13D6E9] font-bold drop-shadow-[0_0_15px_rgba(19,214,233,0.7)]"
              />
            </div>
          </div>

          <p className="text-xs sm:text-sm md:text-base text-muted-foreground/80 mt-4 tracking-wide flex items-center justify-center gap-1.5">
            <span>Built this website with love</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 inline animate-bounce" />
            <span>🍕🚀</span>
          </p>
        </div>

        {/* Write a Letter Button */}
        <div className="mt-10 sm:mt-12 flex items-center justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="group relative px-7 py-3.5 rounded-full font-bold text-xs sm:text-sm tracking-widest uppercase overflow-hidden border border-[#13D6E9]/60 bg-[#04071D]/90 text-white shadow-[0_0_24px_rgba(19,214,233,0.3)] hover:shadow-[0_0_35px_rgba(19,214,233,0.6)] hover:border-[#13D6E9] transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#13D6E9]/20 via-transparent to-[#13D6E9]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-center gap-2.5 relative z-10">
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                Write a Letter
              </span>
              <span className="text-base transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110">
                ✉️
              </span>
            </div>
          </motion.button>
        </div>
      </motion.div>

      {/* Write a Letter Interactive Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 350, damping: 28 }}
              className="relative z-10 w-full max-w-lg"
            >
              <LiquidGlassCard
                glowIntensity="md"
                shadowIntensity="md"
                borderRadius="24px"
                blurIntensity="xl"
                draggable={false}
                className="w-full p-6 sm:p-8 border border-[#13D6E9]/40 bg-[#04071D]/95 text-left"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                      <span>Send a Note to Hriday</span>
                      <span>✉️</span>
                    </h3>
                    <p className="text-xs text-[#13D6E9] mt-0.5">I read every personal letter.</p>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-1.5 rounded-full hover:bg-white/10 text-muted-foreground hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#13D6E9]/20 border border-[#13D6E9] text-[#13D6E9] mx-auto flex items-center justify-center text-2xl mb-4 shadow-[0_0_20px_rgba(19,214,233,0.5)]">
                      ✨
                    </div>
                    <h4 className="text-lg font-bold text-white">Letter Sent!</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Thank you for reaching out. I will reply to you soon!
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-[#13D6E9] focus:ring-1 focus:ring-[#13D6E9] transition-colors font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-[#13D6E9] focus:ring-1 focus:ring-[#13D6E9] transition-colors font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                        Your Message / Letter
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Say hello, recommend a book, share music, or just talk..."
                        className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-[#13D6E9] focus:ring-1 focus:ring-[#13D6E9] transition-colors font-sans resize-none"
                      />
                    </div>

                    <div className="pt-2 flex justify-end gap-3">
                      <button
                        type="button"
                        onClick={() => setIsModalOpen(false)}
                        className="px-4 py-2 rounded-xl text-xs text-gray-400 hover:text-white transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-2.5 rounded-xl text-xs font-bold bg-[#13D6E9] text-black hover:bg-[#13D6E9]/90 shadow-[0_0_15px_rgba(19,214,233,0.4)] flex items-center gap-2 transition-transform active:scale-95"
                      >
                        <span>Send Letter</span>
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </form>
                )}
              </LiquidGlassCard>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section >
  );
}
