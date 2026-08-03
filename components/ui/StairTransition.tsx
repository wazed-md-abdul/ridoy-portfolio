"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";

// Global flag to ensure the initial loader only runs on first visit/mount of the session
let hasLoadedOnce = false;

export default function StairTransition() {
  const pathname = usePathname();
  const [isFirstLoad, setIsFirstLoad] = useState(!hasLoadedOnce);

  useEffect(() => {
    if (!hasLoadedOnce) {
      const timer = setTimeout(() => {
        setIsFirstLoad(false);
        hasLoadedOnce = true;
      }, 1500); // 1.5s loading logo display duration
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        {/* Stairs container */}
        <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-[9999] flex overflow-hidden">
          <Stairs isFirstLoad={isFirstLoad} />
        </div>

        {/* Initial loading screen with pulsing name and cyan dot */}
        {isFirstLoad && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#064F59] z-[99999] flex flex-col items-center justify-center pointer-events-auto"
          >

          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
}
