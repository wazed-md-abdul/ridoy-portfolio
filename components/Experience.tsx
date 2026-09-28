"use client";

import React from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import { Sparkles } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 w-full relative z-10 font-mono">
      {/* Background glow orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#13D6E9]/5 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#72F8F1]/5 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <span className="text-primary text-xs sm:text-sm font-bold uppercase tracking-[0.25em] mb-2">
          Career Path
        </span>
        <h1 className="heading text-white">
          Work <span className="text-[#13D6E9] drop-shadow-[0_0_25px_rgba(19,214,233,0.4)]">Experience</span>
        </h1>
        <p className="text-white-200 text-xs sm:text-sm md:text-base text-center mt-3 max-w-xl mx-auto font-sans px-4">
          Crafting intuitive digital products, scalable design systems, and delightful user experiences.
        </p>
      </div>

      {/* 2x2 Futuristic Bento Cards with Animated Moving Cyan Borders */}
      <div className="w-full grid lg:grid-cols-4 grid-cols-1 gap-6 sm:gap-8">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 8000) + 9000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="flex-1 text-white border-slate-800 p-0 overflow-hidden group/card"
          >
            <div className="flex flex-col justify-between w-full h-full p-6 sm:p-8 lg:p-9 text-left">
              {/* Top Header Row */}
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs sm:text-sm font-semibold tracking-wider text-gray-300 font-mono">
                    {card.company}
                  </span>
                  {card.isCurrent && (
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold font-mono text-[#13D6E9] px-2.5 py-0.5 rounded-full bg-[#13D6E9]/10 border border-[#13D6E9]/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#13D6E9] animate-pulse" />
                      Active
                    </span>
                  )}
                </div>

                <span className="text-xs font-semibold font-mono px-3 py-1 rounded-full bg-[#13D6E9]/10 text-[#72F8F1] border border-[#13D6E9]/25 shrink-0">
                  {card.period}
                </span>
              </div>

              {/* Main Content with 3D Illustration */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-7 flex-grow">
                <img
                  src={card.thumbnail}
                  alt={card.title}
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain shrink-0 drop-shadow-[0_0_24px_rgba(19,214,233,0.3)] group-hover/card:scale-110 transition-transform duration-300"
                />

                <div className="flex-1">
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white group-hover/card:text-[#13D6E9] transition-colors font-sans tracking-tight">
                    {card.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-300/90 leading-relaxed font-sans mt-2.5">
                    {card.desc}
                  </p>
                </div>
              </div>

              {/* Impact Metric Chip */}
              {card.metric && (
                <div className="mt-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-[#13D6E9]/10 border border-[#13D6E9]/25 text-[11px] sm:text-xs font-semibold text-[#72F8F1] font-mono shadow-[0_0_12px_rgba(19,214,233,0.15)]">
                    <Sparkles className="w-3 h-3 text-[#13D6E9]" />
                    <span>{card.metric}</span>
                  </div>
                </div>
              )}

              {/* Design Tool & Skill Tags */}
              {card.skills && card.skills.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-white/[0.08]">
                  {card.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-[10px] sm:text-xs font-mono font-medium px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300 group-hover/card:border-[#13D6E9]/30 group-hover/card:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default Experience;
