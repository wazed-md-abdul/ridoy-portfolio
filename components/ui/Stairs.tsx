"use client";

import { motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: (index: number) => ({
    top: "100%",
    transition: {
      duration: 0.6,
      ease: [0.76, 0, 0.24, 1], // Premium custom cubic bezier
      delay: index * 0.08,
    },
    transitionEnd: {
      height: "0px",
    },
  }),
  exit: (index: number) => ({
    top: ["100%", "0%"],
    height: "100%",
    transition: {
      duration: 0.6,
      ease: [0.76, 0, 0.24, 1],
      delay: index * 0.08,
    },
  }),
};

// Calculate reverse index for a smooth staggered exit/entry direction
const reverseIndex = (index: number, totalSteps: number) => {
  return totalSteps - index - 1;
};

interface StairsProps {
  isFirstLoad?: boolean;
}

export default function Stairs({ isFirstLoad = false }: StairsProps) {
  const totalSteps = 6;

  return (
    <>
      {[...Array(totalSteps)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate={isFirstLoad ? "initial" : "animate"}
          exit="exit"
          custom={reverseIndex(index, totalSteps)}
          className="h-full w-full bg-[#064e59] relative border-r border-[#075c66]/20"
        />
      ))}
    </>
  );
}
