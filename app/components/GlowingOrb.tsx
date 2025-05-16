"use client";

import motion from "motion/react";

interface GlowingOrbProps {
  size?: string;
  position: string;
  delay?: number;
  color?: string;
  blur?: string;
}

export default function GlowingOrb({
  size = "w-20 h-20",
  position,
  delay = 0,
  color = "from-red-500/20",
  blur = "blur-xl",
}: GlowingOrbProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay }}
      className={`fixed ${position} ${size} pointer-events-none blur-fix`}
      style={{ 
        willChange: "transform, opacity",
        height: size.includes("h-") ? "" : "100%", // Ensure even height if not specified
        width: size.includes("w-") ? "" : "100%"
      }}
    >
      <div
        className={`absolute inset-0 bg-gradient-radial ${color} to-transparent rounded-full ${blur} animate-pulse blur-fix`}
        style={{ 
          animationDelay: `${delay}s`,
          transform: "translateZ(0)",
          backfaceVisibility: "hidden"
        }}
      ></div>
      <div 
        className="absolute inset-0 backdrop-blur-sm bg-white/5 rounded-full border border-white/10 blur-fix"
        style={{ 
          transform: "translateZ(0)",
          backfaceVisibility: "hidden"
        }}
      ></div>
    </motion.div>
  );
}
