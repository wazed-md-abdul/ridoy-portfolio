"use client";

import React, { useRef, useEffect } from "react";

interface BlendedVideoProps {
  src: string;
  className?: string;
}

const BlendedVideo: React.FC<BlendedVideoProps> = ({ src, className }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    let animId: number;

    const render = () => {
      if (video.readyState >= 2 && !video.paused && !video.ended) {
        if (canvas.width !== video.videoWidth || canvas.height !== video.videoHeight) {
          canvas.width = video.videoWidth || 600;
          canvas.height = video.videoHeight || 600;
        }

        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const d = frame.data;
        const len = d.length;

        // Targeted dark-background keying: ONLY zero out pure black/dark background (< 18 max RGB)
        // This preserves 100% of the original video colors, saturation, and skin tones.
        for (let i = 0; i < len; i += 4) {
          const r = d[i];
          const g = d[i + 1];
          const b = d[i + 2];

          const maxVal = Math.max(r, g, b);
          if (maxVal < 18) {
            d[i + 3] = 50;
          }
        }

        ctx.putImageData(frame, 0, 0);
      }
      animId = requestAnimationFrame(render);
    };

    video.play().catch(() => { });
    render();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [src]);

  return (
    <div className={`relative ${className || ""}`}>
      {/* Hidden source video */}
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="hidden"
      />
      {/* Real-time alpha-transparent canvas preserving original colors */}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default BlendedVideo;
