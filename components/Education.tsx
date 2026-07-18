"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa6";

import { education } from "@/data";

const Education = () => {
  // Staggered reveal, mirroring the Hero's motion language
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="education"
      className="relative w-full font-mono text-foreground py-20 sm:py-28 overflow-hidden"
    >
      {/* Theme-adaptive grid backdrop, masked to fade at the edges */}
      <div className="absolute inset-0 -z-20 bg-grid-foreground/[0.02] pointer-events-none">
        <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_15%,black)]" />
      </div>

      <div className="max-w-9xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-14 sm:mb-16"
        >
          <span className="text- text-xs sm:text-sm font-bold uppercase tracking-[0.25em]">
            My Journey
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-none">
            Edu<span className="text-[#73F9F1]">cation</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-sm sm:text-base max-w-xl leading-relaxed">
            The academic foundations and continued learning behind the work.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {education.map((item) => (
            <motion.article
              key={item.id}
              variants={cardVariants}
              className="group relative flex flex-col rounded-2xl border border-border/50 bg-background/60 backdrop-blur-sm p-6 sm:p-8 transition-all duration-300 hover:border-[#73F9F1]/50 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_-12px_hsl(var(--[#73F9F1])/0.25)]"
            >
              {/* Corner accent glow on hover */}
              <div className="absolute -top-px -right-px w-24 h-24 rounded-tr-2xl bg-gradient-to-bl from-[#73F9F1]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Icon + tag row */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center justify-center w-11 h-11 rounded-full border border-[#73F9F1]/30 text-[#73F9F1] transition-all duration-300 group-hover:bg-[#73F9F1] group-hover:text-[#73F9F1]-foreground group-hover:shadow-[0_0_16px_hsl(var(--[#73F9F1])/0.4)]">
                  <FaGraduationCap className="w-5 h-5" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-muted-foreground border border-border/60 rounded-full px-3 py-1">
                  {item.tag}
                </span>
              </div>

              {/* Period */}
              <span className="text-xs font-semibold tracking-wider text-[#73F9F1]/80 mb-2">
                {item.period}
              </span>

              {/* Degree */}
              <h3 className="text-lg sm:text-xl font-bold tracking-tight leading-snug">
                {item.degree}
              </h3>

              {/* School */}
              <p className="mt-1 text-sm font-semibold text-muted-foreground">
                {item.school}
              </p>

              {/* Description */}
              <p className="mt-4 text-sm text-muted-foreground/90 leading-relaxed flex-grow">
                {item.desc}
              </p>

              {/* Footer / grade */}
              <div className="mt-6 pt-4 border-t border-border/40 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#73F9F1] inline-block shadow-[0_0_8px_hsl(var(--[#73F9F1])/0.5)]" />
                <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                  {item.grade}
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
