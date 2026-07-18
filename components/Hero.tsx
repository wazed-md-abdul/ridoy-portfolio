"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaGithub } from "react-icons/fa6";

const Hero = () => {
  const [activeTab, setActiveTab] = useState("Professional");
  const [lang, setLang] = useState("English");
  const [isLangOpen, setIsLangOpen] = useState(false);

  const navLinks = ["Professional", "Personal", "Contact"];
  const languages = ["English", "Mongolian", "Spanish"];

  const socials = [
    { name: "Facebook", icon: FaFacebookF, url: "https://facebook.com" },
    { name: "Instagram", icon: FaInstagram, url: "https://instagram.com" },
    { name: "YouTube", icon: FaYoutube, url: "https://youtube.com" },
    { name: "LinkedIn", icon: FaLinkedinIn, url: "https://linkedin.com" },
    { name: "GitHub", icon: FaGithub, url: "https://github.com" },
  ];

  const stats = [
    { value: "22", label: "Age" },
    { value: "2", label: "Years of experience" },
    { value: "25", label: "Projects worked on" },
    { value: "15", label: "Projects Deployed" },
  ];

  // Motion variants for staggered container entries
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="relative min-h-screen flex flex-col font-mono text-foreground bg-background overflow-hidden w-full">
      {/* Theme adaptive grid background */}
      <div className="absolute inset-0 bg-grid-foreground/[0.02] -z-20 flex items-center justify-center pointer-events-none">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* FIXED NAVBAR */}
      <nav className="fixed top-0 left-0 w-full h-16 sm:h-20 border-b border-border/40 bg-background/80 backdrop-blur-md z-50 flex items-center transition-colors duration-300">
        <div className="max-w-9xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-1.5 font-bold text-lg sm:text-4xl tracking-wider text-foreground hover:opacity-90 transition-opacity"
          >
            <span>Hriday Debnath</span>
            <span className="w-2.5 h-2.5 rounded-full bg-primary inline-block self-center shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
          </a>

          {/* Navigation Links & Lang Switcher */}
          <div className="flex items-center gap-4 sm:gap-8">
            {/* Center-Right Nav Links */}
            <div className="flex items-center gap-3 sm:gap-6">
              {navLinks.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`relative py-1 text-xs sm:text-sm font-semibold tracking-wider transition-colors duration-300 ${
                      isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {tab}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Language Switcher Pill */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1 border border-primary/50 text-primary hover:border-primary hover:bg-primary/5 active:scale-95 transition-all duration-300 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium"
              >
                <span>🌐 {lang}</span>
                <span className="text-[10px] opacity-80">▼</span>
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-32 rounded-xl bg-background border border-border shadow-xl py-1.5 z-50"
                  >
                    {languages.map((l) => (
                      <button
                        key={l}
                        onClick={() => {
                          setLang(l);
                          setIsLangOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-xs hover:bg-accent hover:text-accent-foreground transition-colors ${
                          lang === l ? "font-bold text-primary" : "text-muted-foreground"
                        }`}
                      >
                        {l}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO CONTENT */}
      <main className="flex-grow flex items-center max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-24 pb-12 sm:py-24 ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12  lg:gap-8 items-center w-full">
          {/* LEFT COLUMN: Texts & Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-9"
          >
            {/* Label */}
            <motion.span
              variants={itemVariants}
              className="text-primary text-xs sm:text-sm font-bold uppercase tracking-[0.15em]"
            >
              Fullstack Developer
            </motion.span>

            {/* Heading */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight leading-none text-foreground">
                Hello I&apos;m
              </h1>
              <h2 className="text-4xl sm:text-5xl md:text-[79px] font-semibold tracking-tight text-[#73F9F1] leading-none mt-1">
                Hriday <br/> Debnath
              </h2>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-xl leading-relaxed font-mono"
            >
              Pragmatic, delivery-oriented | Fintech, Cloud & AI Engineering | Mongolia
            </motion.p>

            {/* CTA & Socials Row */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row sm:items-center gap-6 pt-2"
            >
              {/* CTA Button */}
              <a
                href="#cv"
                className="group relative inline-flex items-center justify-center border border-[#73F9F1] text-[#73F9F1] hover:text-primary-foreground text-xs sm:text-sm tracking-wider font-semibold rounded-full px-6 py-3 overflow-hidden bg-transparent transition-colors duration-300 self-start sm:self-auto active:scale-95"
              >
                <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out -z-10" />
                <span>VIEW CV &gt;</span>
              </a>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${social.name}`}
                    className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#73F9F1] text-[#73F9F1] hover:border-primary hover:bg-primary hover:text-primary-foreground active:scale-90 transition-all duration-300"
                  >
                    <social.icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                  </a>
                ))}
              </div>
            </motion.div>

            
          </motion.div>

          {/* RIGHT COLUMN: Rotating Rings & Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-5 flex justify-center items-center relative py-6 lg:py-0"
          >
            {/* Visual Container Sizing */}
            <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[440px] md:h-[440px] lg:w-[480px] lg:h-[480px] flex items-center justify-center">
              
              {/* Outermost Rotating Ring (Primary Color, Clockwise) */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
                className="absolute inset-0 z-10 pointer-events-none text-[#73F9F1]"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle
                    cx="50"
                    cy="50"
                    r="48"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="1.9"
                    strokeDasharray="22 8 8 6 12 5 28 8"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>

              {/* Second Rotating Ring (Accent/Muted-Foreground, Counter-Clockwise) */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
                className="absolute inset-[8px] sm:inset-[12px] z-10 pointer-events-none text-muted-foreground/30"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle
                    cx="50"
                    cy="50"
                    r="48"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="0.8"
                    strokeDasharray="8 12 18 6 4 10"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>

              {/* Theme Gradient Glow Circle */}
              <div className="absolute inset-[16px] sm:inset-[24px] rounded-full bg-gradient-to-tr from-primary/10 via-accent/20 to-secondary/15 filter blur-[6px] -z-10" />

              {/* Portrait Image Container */}
              <div className="w-[84%] h-[84%] rounded-full overflow-hidden border border-primary/20 relative bg-background shadow-xl flex items-center justify-center">
                <Image
                  src="/hridoy.jpg"
                  alt="Hriday Debnath Bulgan"
                  fill
                  sizes="(max-w-7xl) 100vw, 500px"
                  className="object-cover rounded-full p-2 scale-102 transition-transform duration-500 hover:scale-105"
                  priority
                />
              </div>

            </div>
          </motion.div>
        </div>

      </main>
      {/* Stats Row */}
      <motion.div
        variants={itemVariants}
        className="flex flex-wrap container mx-auto justify-center gap-10 md:gap-20 border-t border-border/20 pt-10 pb-16 w-full px-4 sm:px-6 lg:px-8"
      >
        {stats.map((stat, idx) => (
          <div key={idx} className="flex items-center gap-3.5 sm:gap-5 text-left">
            <span className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-foreground tracking-tight leading-none font-mono">
              {stat.value}
            </span>
            <span className="text-[10px] sm:text-xs text-muted-foreground leading-tight max-w-[100px] uppercase tracking-wider font-semibold font-mono">
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Hero;
