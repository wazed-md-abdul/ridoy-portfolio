import React from "react";
import { cn } from "@/lib/utils";

/**
 *  UI: border magic from tailwind css btns
 *  Link: https://ui.aceternity.com/components/tailwindcss-buttons
 *
 *  change border radius to rounded-lg
 *  add margin of md:mt-10
 *  remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
 */
const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  className,
  as: Component = handleClick ? "button" : "div",
}: {
  title: string | React.ReactNode;
  icon?: React.ReactNode;
  position?: string;
  handleClick?: () => void;
  otherClasses?: string;
  className?: string;
  as?: "button" | "div" | "span";
}) => {
  return (
    <Component
      className={cn(
        "relative inline-flex overflow-hidden rounded-lg p-[1px] focus:outline-none",
        handleClick
          ? "h-12 w-full md:w-60 md:mt-10 cursor-pointer"
          : "!cursor-default select-none",
        className
      )}
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#72F8F1_0%,#13D6E9_50%,#72F8F1_100%)]" />

      {/* remove px-3 py-1, add px-5 gap-2 */}
      <span
        className={cn(
          "inline-flex h-full w-full items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2",
          !handleClick && "!cursor-default",
          otherClasses
        )}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </Component>
  );
};

export default MagicButton;
