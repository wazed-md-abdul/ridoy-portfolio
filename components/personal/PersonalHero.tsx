'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Sparkles, Heart, Mail, Check, Copy, ExternalLink, MessageSquare } from 'lucide-react';
import { MorphingText } from '@/components/ui/morphing-text';
import GradientText from '@/components/GradientText';
import {
  Dialog,
  DialogTrigger,
  DialogContainer,
  DialogContent,
  DialogClose,
  DialogTitle,
  DialogSubtitle,
  DialogDescription,
  useDialog,
} from '@/components/uilayouts/linear-modal';

const adjectives = [
  'Developer',
  'Peaceful',
  'Curious',
  'Builder',
  'Creative',
  'Passionate',
  'Dreamer',
];

const letterTopics = [
  { id: 'hello', label: '💬 Casual Hello', subject: 'Saying hello!' },
  { id: 'collab', label: '💼 Collaboration', subject: 'Project Collaboration Opportunity' },
  { id: 'book', label: '📚 Book Recommendation', subject: 'Book Recommendation for Hriday' },
  { id: 'music', label: '🎵 Music Share', subject: 'Music / Track Recommendation' },
  { id: 'idea', label: '💡 Idea Pitch', subject: 'Exciting Idea / Discussion' },
];

function LetterForm() {
  const { setIsOpen } = useDialog();
  const [selectedTopic, setSelectedTopic] = useState(letterTopics[0]);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const formattedLetterBody = `From: ${formData.name || 'Anonymous'} (${formData.email || 'No email'})\nTopic: ${selectedTopic.label}\n\nDear Hriday,\n\n${formData.message}`;

  const handleOpenMailto = () => {
    const subject = encodeURIComponent(`[Portfolio Letter] ${selectedTopic.subject}`);
    const body = encodeURIComponent(formattedLetterBody);
    window.open(`mailto:hridaydebnath983@gmail.com?subject=${subject}&body=${body}`, '_blank');
  };

  const handleCopyLetter = () => {
    navigator.clipboard.writeText(formattedLetterBody);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="font-mono">
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="py-6 sm:py-8 text-center"
        >
          {/* Glowing Flying Envelope Animation */}
          <div className="relative w-20 h-20 mx-auto mb-5 flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.25, 1], rotate: [0, -6, 6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="w-18 h-18 rounded-3xl bg-[#13D6E9]/20 border border-[#13D6E9] text-[#13D6E9] flex items-center justify-center text-3xl shadow-[0_0_30px_rgba(19,214,233,0.5)]"
            >
              ✉️
            </motion.div>
            <Sparkles className="w-5 h-5 text-[#13D6E9] absolute -top-1 -right-1 animate-pulse" />
          </div>

          <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Letter Ready to Dispatch!
          </h4>
          <p className="text-xs sm:text-sm text-gray-300 mt-2 max-w-sm mx-auto leading-relaxed">
            Thank you, <span className="text-[#13D6E9] font-bold">{formData.name || 'Friend'}</span>! Your letter is formatted and ready.
          </p>

          {/* Action Buttons */}
          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleOpenMailto}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-xs bg-[#13D6E9] text-black hover:bg-[#13D6E9]/90 shadow-[0_0_20px_rgba(19,214,233,0.4)] flex items-center justify-center gap-2 transition-transform active:scale-95"
            >
              <span>Send via Email Client</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={handleCopyLetter}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/15 flex items-center justify-center gap-2 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-400" />
                  <span className="text-green-400">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-gray-300" />
                  <span>Copy Letter Text</span>
                </>
              )}
            </button>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-center gap-4 text-[11px] text-gray-400">
            <button
              onClick={resetForm}
              className="hover:text-[#13D6E9] transition-colors underline underline-offset-4"
            >
              Write another note
            </button>
            <span>•</span>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:text-white transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 pt-1">
          {/* Selectable Topic Chips */}
          <div>
            <label className="block text-[11px] font-bold text-gray-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-[#13D6E9]" />
              <span>Select Letter Topic</span>
            </label>
            <div className="flex flex-wrap gap-1.5">
              {letterTopics.map((topic) => (
                <button
                  type="button"
                  key={topic.id}
                  onClick={() => setSelectedTopic(topic)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 border ${
                    selectedTopic.id === topic.id
                      ? 'bg-[#13D6E9]/20 border-[#13D6E9] text-[#13D6E9] shadow-[0_0_12px_rgba(19,214,233,0.3)]'
                      : 'bg-white/[0.04] border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {topic.label}
                </button>
              ))}
            </div>
          </div>

          {/* Name and Email Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div>
              <label className="block text-[11px] font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                Your Name / Handle
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Alex"
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-[#13D6E9] focus:ring-1 focus:ring-[#13D6E9] transition-all"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                Your Email (for reply)
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="alex@example.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-[#13D6E9] focus:ring-1 focus:ring-[#13D6E9] transition-all"
              />
            </div>
          </div>

          {/* Letter Body Parchment */}
          <div className="pt-1">
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-[11px] font-semibold text-gray-300 uppercase tracking-wider">
                Letter Body
              </label>
              <span className="text-[10px] text-gray-500">
                {formData.message.length} characters
              </span>
            </div>

            <div className="relative rounded-2xl bg-black/60 border border-white/15 p-3.5 focus-within:border-[#13D6E9] focus-within:ring-1 focus-within:ring-[#13D6E9] transition-all">
              <p className="text-xs text-[#13D6E9]/90 font-bold mb-2">
                Dear Hriday,
              </p>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Write your note, share a thought, recommend music or literature..."
                className="w-full bg-transparent text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none resize-none leading-relaxed"
              />
              <p className="text-[11px] text-gray-400 text-right mt-1 font-sans italic">
                — {formData.name || 'Your signature'}
              </p>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2.5 rounded-xl text-xs text-gray-400 hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl text-xs font-bold bg-[#13D6E9] text-black hover:bg-[#13D6E9]/90 shadow-[0_0_20px_rgba(19,214,233,0.4)] flex items-center gap-2 transition-transform active:scale-95"
            >
              <span>Seal & Send</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default function PersonalHero() {
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
            Riday
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

        {/* Futuristic Glass Shimmer "Write a Letter" Button & Dialog */}
        <div className="mt-10 sm:mt-12 flex items-center justify-center">
          <Dialog
            transition={{
              type: 'spring',
              bounce: 0.05,
              duration: 0.35,
            }}
          >
            <DialogTrigger className="group relative inline-flex items-center justify-center p-[1.5px] rounded-full overflow-hidden shadow-[0_0_30px_rgba(19,214,233,0.35)] hover:shadow-[0_0_45px_rgba(19,214,233,0.7)] transition-all duration-300 active:scale-95">
              {/* Rotating Conic Gradient Neon Border */}
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#13D6E9_0%,#3B82F6_50%,#13D6E9_100%)] opacity-85 group-hover:opacity-100 transition-opacity" />

              {/* Inner Obsidian Glass Core */}
              <span className="relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#04071D]/95 text-white backdrop-blur-3xl tracking-widest text-xs sm:text-sm font-bold uppercase overflow-hidden">
                {/* Shimmer Light Sweep */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />

                <span className="text-[#13D6E9] transition-transform duration-300 group-hover:-translate-x-1">
                  Write a Letter
                </span>
                <span className="p-1.5 rounded-full bg-[#13D6E9]/15 border border-[#13D6E9]/40 text-[#13D6E9] transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-115 group-hover:rotate-12 shadow-[0_0_10px_rgba(19,214,233,0.4)]">
                  <Mail className="w-3.5 h-3.5" />
                </span>
              </span>
            </DialogTrigger>

            <DialogContainer>
              <DialogContent className="w-full max-w-lg p-6 sm:p-8 border border-[#13D6E9]/40 bg-[#04071D]/98 text-left shadow-[0_0_60px_rgba(19,214,233,0.25)] relative rounded-3xl">
                <DialogClose />

                {/* Digital Postmark Header Badge */}
                <div className="flex items-center gap-2 text-[10px] text-[#13D6E9] font-bold tracking-widest uppercase mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#13D6E9] animate-ping" />
                  <span>Personal Letter Box • Postmark 2026</span>
                </div>

                <DialogTitle className="text-lg sm:text-2xl font-black text-white flex items-center gap-2.5">
                  <span>Send a Note to Hriday</span>
                  <span className="text-xl">✉️</span>
                </DialogTitle>

                <DialogSubtitle className="text-xs text-gray-400 mt-1 mb-5 border-b border-white/10 pb-3 leading-relaxed">
                  Direct note to my inbox. I read and reply to all personal correspondence.
                </DialogSubtitle>

                <DialogDescription disableLayoutAnimation>
                  <LetterForm />
                </DialogDescription>
              </DialogContent>
            </DialogContainer>
          </Dialog>
        </div>
      </motion.div>
    </section>
  );
}
