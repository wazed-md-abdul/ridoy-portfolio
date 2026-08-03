"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import CountUp from "react-countup";
import Ferrofluid from "./Ferrofluid";
import { MeshGradientBackground } from "./ui/mesh-gradient";
import BlendedVideo from "./BlendedVideo";

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
    { value: 22, label: "Age", suffix: "" },
    { value: 2, label: "Years of experience", suffix: "+" },
    { value: 25, label: "Projects worked on", suffix: "+" },
    { value: 15, label: "Projects Deployed", suffix: "+" },
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
    <>
      {/* FIXED NAVBAR — Apple "Liquid Glass" floating bar */}
      <motion.nav
        initial={{ y: -40, opacity: 0, x: "-50%" }}
        animate={{ y: 0, opacity: 1, x: "-50%" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-3 sm:top-4 md:top-5 left-1/2 z-[5000] w-[calc(100%-2.5rem)] max-w-7xl"
      >
        <div
          className="relative min-h-12 sm:min-h-14 md:h-[68px] px-3 sm:px-4 md:px-6 py-2 sm:py-0 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 rounded-2xl sm:rounded-[22px] border-t border-[rgba(7,88,104,0.3)] backdrop-blur-[24px]"
          style={{
            backdropFilter: "blur(24px) saturate(190%)",
            WebkitBackdropFilter: "blur(24px) saturate(190%)",
            boxShadow:
              "0 8px 32px rgba(0, 0, 0, 0.37), inset 0 1px 0 0 rgba(0, 0, 0, 0.16), inset 0 0 0 1px rgba(0, 0, 0, 0.04)",
          }}
        >
          <div
            className="pointer-events-none absolute -inset-px opacity-60 rounded-2xl sm:rounded-[22px]"
            style={{
              background:
                "radial-gradient(120% 140% at 50% -20%, rgba(19,214,233,0.10) 0%, transparent 55%)",
            }}
          />
          {/* Logo */}
          <a
            href="#"
            className="group flex items-center gap-1.5 sm:gap-2 font-bold text-base sm:text-xl md:text-2xl tracking-wide text-foreground hover:opacity-90 transition-opacity shrink-0 z-10"
          >
            <span className="sm:hidden">Hriday</span>
            <span className="hidden sm:inline">Hriday Debnath</span>
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#13D6E9] inline-block self-center shadow-[0_0_10px_rgba(19,214,233,0.7)] group-hover:shadow-[0_0_16px_rgba(19,214,233,0.9)] transition-shadow" />
          </a>

          {/* Navigation Links — Centered in Middle */}
          <div className="sm:absolute sm:left-1/2 sm:-translate-x-1/2 flex items-center justify-center">
            <div
              className="flex items-center gap-0.5 sm:gap-1 p-0.5 sm:p-1 rounded-full backdrop-blur-lg overflow-x-auto max-w-full scrollbar-none"
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
                    className="relative px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs md:text-sm font-semibold tracking-wide rounded-full transition-colors duration-300 whitespace-nowrap"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                        className="absolute inset-0 rounded-full"
                        style={{
                          backgroundColor: "rgba(19, 214, 233, 0.9)",
                          border: "1px solid rgba(19, 214, 233, 0.55)",
                          boxShadow:
                            "0 0 16px rgba(19,214,233,0.25), inset 0 1px 0 0 rgba(255,255,255,0.2)",
                        }}
                      />
                    )}
                    <span
                      className={`relative z-10 ${isActive
                        ? "text-black"
                        : "text-muted-foreground hover:text-[#13D6E9]"
                        }`}
                    >
                      {tab}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Language Switcher Pill — glass */}
          <div className="relative shrink-0 z-10">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1 sm:gap-1.5 text-[#13D6E9] active:scale-95 transition-all duration-300 px-2.5 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-medium backdrop-blur-lg"
              style={{
                backgroundColor: "rgba(17, 25, 40, 0.45)",
                border: "1px solid rgba(19, 214, 233, 0.35)",
                boxShadow:
                  "0 8px 40px rgba(0,0,0,0.35), inset 0 1px 0 0 rgba(7,88,104,0.25)",
              }}
            >
              <span className="sm:hidden">🌐</span>
              <span className="hidden sm:inline">🌐 {lang}</span>
              <span
                className={`text-[10px] opacity-80 transition-transform duration-300 hidden sm:inline ${isLangOpen ? "rotate-180" : ""
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
                      className={`w-full text-left px-4 py-2 text-xs transition-colors hover:bg-[#13D6E9]/10 ${lang === l
                        ? "font-bold text-[#13D6E9]"
                        : "text-muted-foreground hover:text-[#13D6E9]"
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
      </motion.nav>

      <div
        className="isolate relative w-full min-h-screen flex flex-col font-mono text-foreground bg-[#010307]"
        style={{ backgroundColor: "#010307" }}
      >
        {/* Mesh gradient animated background */}
        <div className="absolute inset-0 -z-10">
          <MeshGradientBackground
            colors={["#075868", "#13D6E9", "#06b6d4", "#2563eb", "#7c3aed"]}
            speed={1.2}
            backgroundColor="#010307"
          />
        </div>

        {/* Background overlay for depth */}
        <div className="absolute inset-0 bg-[#010307]/50 -z-20 pointer-events-none" />

        {/* Fade overlay - edges */}
        <div
          className="absolute inset-0 -z-20 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse at center, transparent 0%, rgba(1, 3, 7, 0.4) 40%, rgba(1, 3, 7, 0.85) 100%)
            `,
          }}
        />

        {/* Gradient blur border glow */}
        <div
          className="absolute inset-0 -z-20 pointer-events-none"
          style={{
            background: `
              linear-gradient(to right, rgba(1, 3, 7, 0.85) 0%, transparent 12%, transparent 88%, rgba(1, 3, 7, 0.85) 100%),
              linear-gradient(to bottom, rgba(1, 3, 7, 0.85) 0%, transparent 12%, transparent 88%, rgba(1, 3, 7, 0.85) 100%)
            `,
            backdropFilter: 'blur(40px)',
            WebkitBackdropFilter: 'blur(40px)',
          }}
        />

        {/* HERO CONTENT */}
        <main className="flex-grow flex items-center w-full pt-28 sm:pt-28 md:pt-32 pb-8 sm:pb-12 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 md:gap-4 lg:gap-2 items-center w-full">
            {/* LEFT COLUMN: Texts & Stats */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="md:col-span-6 lg:col-span-5 flex flex-col justify-center space-y-5 sm:space-y-7 md:space-y-8 lg:space-y-9 text-center md:text-left items-center md:items-start order-2 md:order-1"
            >
              {/* Label */}
              <motion.span
                variants={itemVariants}
                className="text-primary text-xs sm:text-sm font-bold uppercase tracking-[0.15em]"
              >
                Fullstack Developer
              </motion.span>

              {/* Heading */}
              <motion.div variants={itemVariants} className="space-y-1 sm:space-y-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold tracking-tight leading-none text-foreground whitespace-nowrap">
                  Hello I&apos;m
                </h1>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold tracking-tight text-[#13D6E9] leading-none mt-1 whitespace-nowrap">
                  Hriday Debnath
                </h2>
              </motion.div>

              {/* Tagline */}
              <motion.p
                variants={itemVariants}
                className="text-gray-300 text-sm sm:text-base md:text-base lg:text-lg max-w-md md:max-w-xl leading-relaxed font-mono px-2 sm:px-0"
              >
                Pragmatic, delivery-oriented | Fintech, Cloud & AI Engineering | Mongolia
              </motion.p>

              {/* CTA & Socials Row */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pt-1 sm:pt-2 w-full sm:w-auto justify-center md:justify-start"
              >
                {/* CTA Button */}
                <a
                  href="#cv"
                  className="group relative inline-flex items-center justify-center text-[#13D6E9] hover:text-primary-foreground text-xs sm:text-sm tracking-wider font-semibold rounded-full px-6 py-3 overflow-hidden bg-background/10 backdrop-blur-lg shadow-[0_8px_32px_rgba(0,0,0,0.25),inset_0_1px_0_0_rgba(7,88,104,0.35)] transition-colors duration-300 self-center md:self-start sm:self-auto active:scale-95"
                >
                  <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out -z-10" />
                  <span>VIEW CV &gt;</span>
                </a>

                {/* Social Icons */}
                <div className="flex items-center justify-center md:justify-start gap-2.5 sm:gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${social.name}`}
                      className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-background/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.25),inset_0_1px_0_0_rgba(7,88,104,0.35)] text-[#13D6E9] hover:border-primary hover:bg-primary hover:text-primary-foreground active:scale-90 transition-all duration-300"
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT COLUMN: 3D Holographic WebM Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="md:col-span-6 lg:col-span-7 flex justify-center md:justify-end items-center relative py-2 sm:py-4 md:py-0 order-1 md:order-2 overflow-visible"
            >
              <div
                className="relative flex items-center justify-center overflow-visible"
                style={{
                  width: "min(90vw, 580px)",
                  height: "min(90vw, 580px)",

                }}
              >
                <BlendedVideo
                  src="/Final.webm"
                  className="w-full h-full object-contain scale-115 md:scale-125 lg:scale-130 origin-center"
                />
              </div>
            </motion.div>
          </div>
        </main>

        {/* Stats Row */}
        <motion.div
          variants={itemVariants}
          className="w-full pb-10 sm:pb-14 md:pb-16"
        >
          <div className="w-full grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-20 rounded-3xl sm:rounded-full bg-background-900/50 backdrop-blur-lg shadow-[0_8px_40px_rgba(0,0,0,0.35),inset_0_1px_0_0_rgba(7,88,104,0.25)] px-5 sm:px-8 md:px-12 py-6 sm:py-6 md:py-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 sm:gap-3.5 md:gap-5 text-left justify-center md:justify-start"
              >
                <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground tracking-[-0.02em] leading-none font-mono">
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    useEasing={true}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  {stat.suffix}
                </span>
                <span className="text-[9px] sm:text-[10px] md:text-xs text-muted-foreground leading-tight max-w-[72px] sm:max-w-[100px] uppercase tracking-wider font-semibold font-mono">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
