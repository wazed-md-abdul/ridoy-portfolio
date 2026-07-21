"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import Ferrofluid from "./Ferrofluid";

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
    <div
      className="isolate relative w-screen min-h-screen flex flex-col font-mono text-foreground overflow-hidden -mx-full ml-[-50vw] left-[50%]"

    >
      {/* Ferrofluid animated background */}
      <div className="absolute inset-0 -z-10">
        <Ferrofluid
          colors={["#b0b8c3", "#06B6D4", "#06B6D4"]}
          speed={0.4}
          scale={1.2}
          turbulence={1}
          fluidity={0.1}
          rimWidth={0.2}
          sharpness={2.4}
          shimmer={1.5}
          glow={2}
          flowDirection="down"
          opacity={1}
          mouseInteraction
          mouseStrength={3}
          mouseRadius={0.1}
        />
      </div>

      {/* Background overlay for depth */}
      <div className="absolute inset-0 bg-background/40 -z-20 pointer-events-none" />

      {/* Fade overlay - edges */}
      <div
        className="absolute inset-0 -z-20 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at center, transparent 0%, rgba(10, 14, 39, 0.3) 40%, rgba(10, 14, 39, 0.6) 100%)
          `,
        }}
      />

      {/* Gradient blur border glow */}
      <div
        className="absolute inset-0 -z-20 pointer-events-none"
        style={{
          background: `
            linear-gradient(to right, rgba(0, 0, 0, 0.85) 0%, transparent 12%, transparent 88%, rgba(0, 0, 0, 0.85) 100%),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.85) 0%, transparent 12%, transparent 88%, rgba(0, 0, 0, 0.85) 100%)
          `,
          backdropFilter: 'blur(40px)',
          WebkitBackdropFilter: 'blur(40px)',
        }}
      />

      {/* FIXED NAVBAR — Apple "Liquid Glass" floating bar */}
      <motion.nav
        initial={{ y: -40, opacity: 0, x: "-50%" }}
        animate={{ y: 0, opacity: 1, x: "-50%" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-3 sm:top-5 left-1/2 z-50 w-[calc(100%-1.25rem)] max-w-7xl rounded-[22px] overflow-hidden border-t border-[rgba(7,88,104,0.3)] backdrop-blur-[24px]"
        style={{
          // Frosted glass: deep-saturated blur over the banner's translucent navy
          backdropFilter: "blur(24px) saturate(190%)",
          WebkitBackdropFilter: "blur(24px) saturate(190%)",


          // Outer depth shadow + inner specular top highlight + faint cyan inner rim
          boxShadow:
            "0 8px 32px rgba(0, 0, 0, 0.37), inset 0 1px 0 0 rgba(0, 0, 0, 0.16), inset 0 0 0 1px rgba(0, 0, 0, 0.04)",
        }}
      >

        {/* Ambient cyan glow bleeding in from the banner theme */}
        <div
          className="pointer-events-none absolute -inset-px opacity-60"
          style={{
            background:
              "radial-gradient(120% 140% at 50% -20%, rgba(115,249,241,0.10) 0%, transparent 55%)",
          }}
        />

        <div className="relative h-14 sm:h-[68px] px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="group flex items-center gap-2 font-bold text-lg sm:text-2xl tracking-wide text-foreground hover:opacity-90 transition-opacity"
          >
            <span>Hriday Debnath</span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#73F9F1] inline-block self-center shadow-[0_0_10px_rgba(115,249,241,0.7)] group-hover:shadow-[0_0_16px_rgba(115,249,241,0.9)] transition-shadow" />
          </a>

          {/* Navigation Links & Lang Switcher */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Center-Right Nav Links — segmented glass control */}
            <div
              className="flex items-center gap-1 p-1 rounded-full backdrop-blur-lg"
              style={{
                backgroundColor: "rgba(17, 25, 40, 0.45)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow:
                  "0 8px 40px rgba(0,0,0,0.35), inset 0 1px 0 0 rgba(7,88,104,0.25)",
              }}
            >
              {navLinks.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className="relative px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wide rounded-full transition-colors duration-300"
                  >
                    {/* Sliding active pill — cyan liquid glass */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                        className="absolute inset-0 rounded-full"
                        style={{
                          backgroundColor: "rgba(115, 249, 241, 0.14)",
                          border: "1px solid rgba(115, 249, 241, 0.55)",
                          boxShadow:
                            "0 0 16px rgba(115,249,241,0.25), inset 0 1px 0 0 rgba(255,255,255,0.2)",
                        }}
                      />
                    )}
                    <span
                      className={`relative z-10 ${isActive
                        ? "text-[#73F9F1]"
                        : "text-muted-foreground hover:text-[#73F9F1]"
                        }`}
                    >
                      {tab}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Language Switcher Pill — glass */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 text-[#73F9F1] active:scale-95 transition-all duration-300 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium backdrop-blur-lg"
                style={{
                  backgroundColor: "rgba(17, 25, 40, 0.45)",
                  border: "1px solid rgba(115, 249, 241, 0.35)",
                  boxShadow:
                    "0 8px 40px rgba(0,0,0,0.35), inset 0 1px 0 0 rgba(7,88,104,0.25)",
                }}
              >
                <span>🌐 {lang}</span>
                <span
                  className={`text-[10px] opacity-80 transition-transform duration-300 ${isLangOpen ? "rotate-180" : ""
                    }`}
                >
                  ▼
                </span>
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-3 w-36 rounded-2xl overflow-hidden py-1.5 z-50"
                    style={{
                      backdropFilter: "blur(24px) saturate(190%)",
                      WebkitBackdropFilter: "blur(24px) saturate(190%)",
                      backgroundColor: "rgba(17, 25, 40, 0.75)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      boxShadow:
                        "0 12px 40px rgba(0,0,0,0.45), inset 0 1px 0 0 rgba(255,255,255,0.14)",
                    }}
                  >
                    {languages.map((l) => (
                      <button
                        key={l}
                        onClick={() => {
                          setLang(l);
                          setIsLangOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-xs transition-colors hover:bg-[#73F9F1]/10 ${lang === l
                          ? "font-bold text-[#73F9F1]"
                          : "text-muted-foreground hover:text-[#73F9F1]"
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
      </motion.nav>

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
                Hriday <br /> Debnath
              </h2>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed font-mono"
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
                className="group relative inline-flex items-center justify-center  text-[#73F9F1] hover:text-primary-foreground text-xs sm:text-sm tracking-wider font-semibold rounded-full px-6 py-3 overflow-hidden bg-background/10 backdrop-blur-lg shadow-[0_8px_32px_rgba(0,0,0,0.25),inset_0_1px_0_0_rgba(7,88,104,0.35)] transition-colors duration-300 self-start sm:self-auto active:scale-95"
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
                    className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full  bg-background/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.25),inset_0_1px_0_0_rgba(7,88,104,0.35)] text-[#73F9F1] hover:border-primary hover:bg-primary hover:text-primary-foreground active:scale-90 transition-all duration-300"
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
        className="w-full px-4 sm:px-6 lg:px-8 pb-16"
      >
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-10 md:gap-20 rounded-full  bg-background-900/50 backdrop-blur-lg shadow-[0_8px_40px_rgba(0,0,0,0.35),inset_0_1px_0_0_rgba(7,88,104,0.25)] px-8 sm:px-12 py-8 sm:py-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-3.5 sm:gap-5 text-left">
              <span className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-foreground tracking-[-0.02em] leading-none font-mono">
                {stat.value}
              </span>
              <span className="text-[10px] sm:text-xs text-muted-foreground leading-tight max-w-[100px] uppercase tracking-wider font-semibold font-mono">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
