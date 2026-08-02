"use client"

import { cn } from "@/lib/utils"

export interface MeshGradientBackgroundProps {
  className?: string
  children?: React.ReactNode
  /** Gradient colors */
  colors?: string[]
  /** Animation speed multiplier */
  speed?: number
  /** Background color */
  backgroundColor?: string
}

export function MeshGradientBackground({
  className,
  children,
  colors = ["#7c3aed", "#2563eb", "#06b6d4", "#8b5cf6", "#ec4899"],
  speed = 1,
  backgroundColor = "#030014",
}: MeshGradientBackgroundProps) {
  // Faster, more dynamic animation durations
  const duration1 = 18 / speed
  const duration2 = 22 / speed
  const duration3 = 25 / speed
  const duration4 = 20 / speed
  const duration5 = 24 / speed

  const color1 = colors[0] || "#7c3aed"
  const color2 = colors[1] || "#2563eb"
  const color3 = colors[2] || "#06b6d4"
  const color4 = colors[3] || "#8b5cf6"
  const color5 = colors[4] || "#13d6e9"

  return (
    <div className={cn("fixed inset-0 overflow-hidden", className)} style={{ backgroundColor }}>
      {/* Dynamic Gradient mesh orbs */}
      <div className="absolute inset-0">
        {/* Orb 1 - Top Left dynamic sweep */}
        <div
          className="absolute h-[65%] w-[65%] rounded-full opacity-60"
          style={{
            left: "-15%",
            top: "-15%",
            background: `radial-gradient(circle at center, ${color1}60 0%, transparent 70%)`,
            filter: "blur(75px)",
            animation: `meshMove1 ${duration1}s ease-in-out infinite alternate`,
          }}
        />

        {/* Orb 2 - Top Right wide floating morph */}
        <div
          className="absolute h-[60%] w-[60%] rounded-full opacity-55"
          style={{
            right: "-10%",
            top: "5%",
            background: `radial-gradient(circle at center, ${color2}55 0%, transparent 70%)`,
            filter: "blur(90px)",
            animation: `meshMove2 ${duration2}s ease-in-out infinite alternate`,
          }}
        />

        {/* Orb 3 - Bottom Center active pulse */}
        <div
          className="absolute h-[70%] w-[75%] rounded-full opacity-50"
          style={{
            left: "15%",
            bottom: "-20%",
            background: `radial-gradient(circle at center, ${color3}50 0%, transparent 70%)`,
            filter: "blur(110px)",
            animation: `meshMove3 ${duration3}s ease-in-out infinite alternate`,
          }}
        />

        {/* Orb 4 - Center dynamic accent */}
        <div
          className="absolute h-[50%] w-[50%] rounded-full opacity-50"
          style={{
            left: "30%",
            top: "25%",
            background: `radial-gradient(circle at center, ${color4}45 0%, transparent 70%)`,
            filter: "blur(85px)",
            animation: `meshMove4 ${duration4}s ease-in-out infinite alternate`,
          }}
        />

        {/* Orb 5 - Extra diagonal mesh accent */}
        <div
          className="absolute h-[45%] w-[45%] rounded-full opacity-45"
          style={{
            left: "55%",
            top: "45%",
            background: `radial-gradient(circle at center, ${color5}40 0%, transparent 70%)`,
            filter: "blur(95px)",
            animation: `meshMove5 ${duration5}s ease-in-out infinite alternate`,
          }}
        />
      </div>

      {/* Subtle noise overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content layer */}
      {children && <div className="relative z-10 h-full w-full">{children}</div>}

      <style>{`
        @keyframes meshMove1 {
          0% {
            transform: translate(0%, 0%) scale(1) rotate(0deg);
          }
          25% {
            transform: translate(30%, 20%) scale(1.25) rotate(45deg);
          }
          50% {
            transform: translate(45%, -10%) scale(0.85) rotate(90deg);
          }
          75% {
            transform: translate(20%, 35%) scale(1.15) rotate(135deg);
          }
          100% {
            transform: translate(-10%, 15%) scale(1.05) rotate(180deg);
          }
        }
        @keyframes meshMove2 {
          0% {
            transform: translate(0%, 0%) scale(1) rotate(0deg);
          }
          33% {
            transform: translate(-35%, 25%) scale(1.3) rotate(-60deg);
          }
          66% {
            transform: translate(-20%, -25%) scale(0.9) rotate(30deg);
          }
          100% {
            transform: translate(-45%, 15%) scale(1.15) rotate(-120deg);
          }
        }
        @keyframes meshMove3 {
          0% {
            transform: translate(0%, 0%) scale(1) rotate(0deg);
          }
          30% {
            transform: translate(-25%, -30%) scale(1.2) rotate(40deg);
          }
          70% {
            transform: translate(30%, -20%) scale(0.85) rotate(-40deg);
          }
          100% {
            transform: translate(15%, -35%) scale(1.1) rotate(80deg);
          }
        }
        @keyframes meshMove4 {
          0% {
            transform: translate(0%, 0%) scale(1) rotate(0deg);
          }
          25% {
            transform: translate(35%, -25%) scale(0.8) rotate(-45deg);
          }
          50% {
            transform: translate(-30%, 30%) scale(1.3) rotate(90deg);
          }
          75% {
            transform: translate(-35%, -20%) scale(0.9) rotate(-135deg);
          }
          100% {
            transform: translate(25%, 20%) scale(1.1) rotate(180deg);
          }
        }
        @keyframes meshMove5 {
          0% {
            transform: translate(0%, 0%) scale(1);
          }
          33% {
            transform: translate(-40%, -35%) scale(1.35) rotate(75deg);
          }
          66% {
            transform: translate(25%, -40%) scale(0.8) rotate(-75deg);
          }
          100% {
            transform: translate(-20%, 30%) scale(1.2) rotate(150deg);
          }
        }
      `}</style>
    </div>
  )
}

export default function MeshGradientBackgroundDemo() {
  return <MeshGradientBackground />
}
