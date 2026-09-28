"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface Skiper10Props {
  /** Text to reveal in the center of the preloader */
  text?: string;
  /** Custom list of words to animate sequentially */
  words?: string[];
  /** Duration in ms to display the preloader before opening stairs (default: 2200) */
  duration?: number;
  /** Callback fired after the stairs animation completes and preloader unmounts */
  onComplete?: () => void;
  /** Additional CSS classes for the container */
  className?: string;
  /** Manually control visibility if desired */
  show?: boolean;
}

/**
 * Preloader_004 - The core Double Stairs animated preloader component from Skiper UI (skiper10)
 * Styled with Hriday's portfolio UI theme: deep obsidian black and vibrant cyan (#13D6E9 / #72F8F1).
 */
export const Preloader_004: React.FC<{
  text?: string;
  words?: string[];
  className?: string;
}> = ({
  text = "",
  words,
  className = "",
}) => {
    const displayWords = words || text.split(" ");
    const totalColumns = 10;

    return (
      <motion.div
        className={`fixed inset-0 z-[99999] overflow-hidden pointer-events-auto select-none ${className}`}
        initial={{ opacity: 1 }}
        exit={{ opacity: 1 }}
      >
        {/* Center content with staggered word reveal */}
        <div className="absolute z-10 flex flex-col h-full w-full items-center justify-center text-center px-4 pointer-events-none">

          {/* Dynamic staggered text reveal */}
          <motion.h1
            className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight font-sans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.2 } }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
          >
            {displayWords.map((word, i) => {
              const isCyanAccent =
                word.toLowerCase().includes("portfolio") ||
                word.toLowerCase().includes("debnath") ||
                word === "•";

              return (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 * i,
                    ease: "easeOut",
                  }}
                  className={`mr-2.5 inline-block ${isCyanAccent
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#13D6E9] to-[#72F8F1] drop-shadow-[0_0_18px_rgba(19,214,233,0.5)]"
                    : "text-white"
                    }`}
                >
                  {word}
                </motion.span>
              );
            })}
          </motion.h1>

          {/* Sleek glowing cyan accent line */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "120px", opacity: 1 }}
            exit={{ width: 0, opacity: 0, transition: { duration: 0.3 } }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mt-6 h-[2px] bg-gradient-to-r from-transparent via-[#13D6E9] to-transparent shadow-[0_0_10px_#13D6E9]"
          />
        </div>

        {/* Top half stairs - 10 columns collapsing upwards */}
        <motion.div className="pointer-events-none fixed left-0 top-0 z-[2] flex h-[50vh] w-full overflow-hidden">
          {[...Array(totalColumns)].map((_, t) => (
            <motion.div
              key={t}
              initial={{ height: "100%" }}
              animate={{ height: "100%" }}
              exit={{ height: 0 }}
              transition={{
                duration: 0.55,
                delay: 0.35 + 0.05 * t,
                ease: [0.455, 0.03, 0.515, 0.955],
              }}
              className="h-full w-[10vw] bg-[#000319] border-r border-[#13D6E9]/15 border-b border-[#13D6E9]/40 shadow-[0_2px_15px_rgba(19,214,233,0.3)] last:border-r-0"
            />
          ))}
        </motion.div>

        {/* Bottom half stairs - 10 columns collapsing downwards */}
        <motion.div className="pointer-events-none fixed bottom-0 left-0 z-[2] flex h-[50vh] w-full items-end overflow-hidden">
          {[...Array(totalColumns)].map((_, t) => (
            <motion.div
              key={t}
              initial={{ height: "100%" }}
              animate={{ height: "100%" }}
              exit={{ height: 0 }}
              transition={{
                duration: 0.55,
                delay: 0.35 + 0.05 * t,
                ease: [0.455, 0.03, 0.515, 0.955],
              }}
              className="h-full w-[10vw] bg-[#000319] border-r border-[#13D6E9]/15 border-t border-[#13D6E9]/40 shadow-[0_-2px_15px_rgba(19,214,233,0.3)] last:border-r-0"
            />
          ))}
        </motion.div>
      </motion.div>
    );
  };


export const Skiper10: React.FC<Skiper10Props> = ({
  text = "",
  words,
  duration = 2200,
  onComplete,
  className = "",
  show: controlledShow,
}) => {
  const [internalShow, setInternalShow] = useState(true);
  const isVisible = controlledShow !== undefined ? controlledShow : internalShow;

  useEffect(() => {
    if (controlledShow !== undefined) return;

    const timer = setTimeout(() => {
      setInternalShow(false);
      onComplete?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onComplete, controlledShow]);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <Preloader_004
          key="skiper10-preloader"
          text={text}
          words={words}
          className={className}
        />
      )}
    </AnimatePresence>
  );
};

export default Skiper10;
