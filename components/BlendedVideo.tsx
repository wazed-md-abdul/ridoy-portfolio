"use client";

import React from "react";

interface BlendedVideoProps {
  src: string;
  className?: string;
}

const BlendedVideo: React.FC<BlendedVideoProps> = ({ src, className }) => {
  return (
    <div
      className={`relative ${className || ""}`}
      style={{ background: "transparent" }}
    >
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-contain"
        style={{
          mixBlendMode: "screen",
          background: "transparent",
          border: "none",
          outline: "none",
          WebkitAppearance: "none",
        }}
      />
    </div>
  );
};

export default BlendedVideo;
