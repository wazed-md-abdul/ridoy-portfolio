"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectItem } from "@/data";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Sparkles,
  Layers,
  Calendar,
  User,
  CheckCircle2,
} from "lucide-react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: ProjectItem[];
  currentIndex: number;
  onSelectProject: (index: number) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  projects,
  currentIndex,
  onSelectProject,
}) => {
  const currentProject = projects[currentIndex];
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [mounted, setMounted] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Reset scroll position and video play state when changing projects
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, [currentIndex]);

  // Keyboard navigation: Escape to close, ArrowLeft / ArrowRight to change index
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex, projects.length]);

  const handlePrev = () => {
    const nextIdx = (currentIndex - 1 + projects.length) % projects.length;
    onSelectProject(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % projects.length;
    onSelectProject(nextIdx);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  if (!mounted || !isOpen || !currentProject) return null;

  const nextProjectIndex = (currentIndex + 1) % projects.length;
  const nextProject = projects[nextProjectIndex];

  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[99999] flex justify-center bg-black/90 backdrop-blur-2xl"
        onClick={onClose}
      >
        {/* Main Modal Wrapper (Stops backdrop click propagation) */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          ref={scrollContainerRef}
          className="relative w-full max-w-5xl h-full overflow-y-auto bg-[#020515] border-x border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.8)] text-white"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Sticky Behance Header Bar */}
          <header className="sticky top-0 z-[10000] flex items-center justify-between px-4 sm:px-8 py-3.5 bg-[#020515]/95 backdrop-blur-2xl border-b border-white/10 shadow-lg">
            {/* Left: Project Index Counter & Quick Nav */}
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#13D6E9]/10 border border-[#13D6E9]/30 text-xs font-mono font-bold text-[#72F8F1]">
                <span>{String(currentIndex + 1).padStart(2, "0")}</span>
                <span className="text-gray-500">/</span>
                <span className="text-gray-400">{String(projects.length).padStart(2, "0")}</span>
              </div>

              {/* Direct index pills */}
              <div className="hidden sm:flex items-center gap-1.5 ml-2">
                {projects.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => onSelectProject(idx)}
                    className={`w-7 h-7 rounded-lg text-xs font-mono font-semibold transition-all ${
                      idx === currentIndex
                        ? "bg-[#13D6E9] text-black shadow-[0_0_10px_#13D6E9]"
                        : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </button>
                ))}
              </div>
            </div>

            {/* Center: Prev & Next Switchers */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous project"
                className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#13D6E9]/40 hover:bg-[#13D6E9]/10 text-xs font-mono font-semibold text-gray-300 hover:text-white transition-all active:scale-95"
              >
                <ChevronLeft className="w-3.5 h-3.5 text-[#13D6E9]" />
                <span className="hidden md:inline">Prev</span>
              </button>

              <button
                onClick={handleNext}
                aria-label="Next project"
                className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#13D6E9]/40 hover:bg-[#13D6E9]/10 text-xs font-mono font-semibold text-gray-300 hover:text-white transition-all active:scale-95"
              >
                <span className="hidden md:inline">Next</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#13D6E9]" />
              </button>
            </div>

            {/* Right: Live Link & Close Button */}
            <div className="flex items-center gap-3">
              {currentProject.link && (
                <a
                  href={currentProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#13D6E9] hover:bg-[#13D6E9]/90 text-black text-xs font-bold font-mono shadow-[0_0_15px_rgba(19,214,233,0.4)] active:scale-95 transition-all"
                >
                  <span>Visit Project</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              <button
                onClick={onClose}
                aria-label="Close modal"
                className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 text-gray-300 hover:text-white transition-all active:scale-90"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </header>

          {/* Modal Case Study Body */}
          <div className="p-5 sm:p-8 md:p-12 space-y-10 sm:space-y-14">
            {/* 1. Hero Title & Metadata Banner */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                {currentProject.category && (
                  <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider font-semibold bg-[#13D6E9]/10 text-[#72F8F1] border border-[#13D6E9]/30">
                    {currentProject.category}
                  </span>
                )}
                {currentProject.year && (
                  <span className="px-3 py-1 rounded-full text-xs font-mono text-gray-400 bg-white/5 border border-white/10 flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 text-[#13D6E9]" />
                    {currentProject.year}
                  </span>
                )}
                {currentProject.role && (
                  <span className="px-3 py-1 rounded-full text-xs font-mono text-gray-300 bg-white/5 border border-white/10 flex items-center gap-1.5">
                    <User className="w-3 h-3 text-[#13D6E9]" />
                    {currentProject.role}
                  </span>
                )}
              </div>

              <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-sans leading-tight">
                {currentProject.title}
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed font-sans max-w-3xl">
                {currentProject.des}
              </p>

              {/* Tech Stack Icons Row */}
              <div className="flex items-center gap-3 pt-2">
                <span className="text-xs font-mono uppercase text-gray-400 tracking-wider">
                  Tech Stack:
                </span>
                <div className="flex items-center gap-2">
                  {currentProject.iconLists.map((icon, idx) => (
                    <div
                      key={idx}
                      className="w-8 h-8 rounded-full bg-black/60 border border-white/15 flex items-center justify-center p-1.5 shadow-sm"
                    >
                      <img src={icon} alt="tech icon" className="w-full h-full object-contain" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. Autoplaying Video Showcase (From public/ folder) */}
            {currentProject.video && (
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/60 shadow-[0_0_50px_rgba(19,214,233,0.12)] group">
                <video
                  ref={videoRef}
                  src={currentProject.video}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-auto object-cover max-h-[65vh] rounded-2xl"
                />

                {/* Video HUD status badge */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono font-semibold text-white">
                  <span className="w-2 h-2 rounded-full bg-[#13D6E9] animate-pulse" />
                  <span>Interactive Video Preview</span>
                </div>

                {/* Video controls */}
                <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2">
                  <button
                    onClick={togglePlay}
                    className="p-2 rounded-full bg-black/70 hover:bg-[#13D6E9] hover:text-black text-white backdrop-blur-md border border-white/20 transition-all"
                    title={isPlaying ? "Pause Video" : "Play Video"}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={toggleMute}
                    className="p-2 rounded-full bg-black/70 hover:bg-[#13D6E9] hover:text-black text-white backdrop-blur-md border border-white/20 transition-all"
                    title={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            )}

            {/* 3. Detailed Case Study Overview */}
            {currentProject.overview && (
              <div className="rounded-2xl p-6 sm:p-8 bg-[#04071D]/90 border border-white/10 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase font-bold text-[#13D6E9] tracking-widest">
                  <Layers className="w-4 h-4 text-[#13D6E9]" />
                  <span>Project Overview & Scope</span>
                </div>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-sans">
                  {currentProject.overview}
                </p>
              </div>
            )}

            {/* 4. Key Highlights & Features */}
            {currentProject.features && currentProject.features.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase font-bold text-[#13D6E9] tracking-widest">
                  <Sparkles className="w-4 h-4 text-[#13D6E9]" />
                  <span>Key Features & Architecture</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {currentProject.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#13D6E9]/40 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#13D6E9] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-200 font-sans leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. Pictures & Mockup Gallery Showcase */}
            {currentProject.pictures && currentProject.pictures.length > 0 && (
              <div className="space-y-5">
                <div className="flex items-center gap-2 text-xs font-mono uppercase font-bold text-[#13D6E9] tracking-widest">
                  <span>Visual Showcase & Screenshots</span>
                </div>

                <div className="space-y-6">
                  {currentProject.pictures.map((pic, idx) => (
                    <div
                      key={idx}
                      className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#04071D] shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
                    >
                      <img
                        src={pic}
                        alt={`${currentProject.title} screenshot ${idx + 1}`}
                        className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 6. Behance-Style "Next Project" Jump Card */}
            <div className="pt-8 border-t border-white/10">
              <div
                onClick={handleNext}
                className="group cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#04071D] to-[#020515] border border-white/10 hover:border-[#13D6E9]/50 transition-all duration-300 shadow-xl"
              >
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#13D6E9]">
                    Next Case Study ({String(nextProjectIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")})
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#13D6E9] transition-colors font-sans">
                    {nextProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 font-sans line-clamp-1 max-w-xl">
                    {nextProject.des}
                  </p>
                </div>

                <div className="mt-4 sm:mt-0 flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#13D6E9] text-black font-bold font-mono text-xs shadow-[0_0_15px_rgba(19,214,233,0.3)] group-hover:shadow-[0_0_25px_rgba(19,214,233,0.6)] transition-all">
                  <span>View Project</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};

export default ProjectModal;
