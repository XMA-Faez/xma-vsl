import React from "react";
import { motion } from "motion/react";

interface FeaturedStatProps {
  value: string;
  label: string;
  delayMultiplier?: number;
}

export default function FeaturedStat({ 
  value, 
  label, 
  delayMultiplier = 0 
}: FeaturedStatProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: "easeOut",
            delay: 0.1 * delayMultiplier
          }
        }
      }}
      className="p-10 rounded-xl bg-gradient-to-b from-[#161616] to-[#111111] backdrop-blur-md border border-[#222]/20 shadow-lg hover-shadow relative overflow-hidden group blur-fix"
      style={{ willChange: "transform" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/8 to-transparent opacity-0 group-hover:opacity-100"></div>
      <p className="text-7xl font-bold mb-6 gradient-text relative z-10">
        {value}
      </p>
      <p className="text-xl text-gray-300 relative z-10">
        {label}
      </p>
    </motion.div>
  );
}