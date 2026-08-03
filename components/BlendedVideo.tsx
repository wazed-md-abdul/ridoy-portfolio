"use client";

import React from "react";

interface BlendedVideoProps {
  src: string;
  className?: string;
}

const BlendedVideo: React.FC<BlendedVideoProps> = ({ src, className }) => {
  return (
    <div className={`relative ${className || ""}`}>
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-contain"

      />
    </div>
  );
};

export default BlendedVideo;
