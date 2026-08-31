"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface MeteorsProps {
  number?: number;
  minDelay?: number;
  maxDelay?: number;
  minDuration?: number;
  maxDuration?: number;
  angle?: number;
  className?: string;
}

export const Meteors = ({
  number = 20,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 2,
  maxDuration = 8,
  angle = 215,
  className,
}: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>([]);

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      "--angle": `${-angle}deg`,
      top: "-10px",
      left: `calc(0% + ${Math.floor(Math.random() * 1200) - 200}px)`,
      animationDelay: `${Math.random() * (maxDelay - minDelay) + minDelay}s`,
      animationDuration: `${Math.floor(Math.random() * (maxDuration - minDuration) + minDuration)}s`,
    } as React.CSSProperties));
    setMeteorStyles(styles);
  }, [number, minDelay, maxDelay, minDuration, maxDuration, angle]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[inherit] z-0">
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          style={style}
          className={cn(
            "animate-meteor pointer-events-none absolute h-1 w-1 rounded-full bg-[#13D6E9] shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_0_10px_#13D6E9]",
            className
          )}
        >
          {/* Meteor Tail */}
          <div className="pointer-events-none absolute top-1/2 -z-10 h-[1.5px] w-[60px] -translate-y-1/2 bg-gradient-to-r from-[#13D6E9] via-[#13D6E9]/40 to-transparent" />
        </span>
      ))}
    </div>
  );
};
