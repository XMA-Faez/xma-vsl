import React, { ReactNode } from "react";
import { motion } from "motion/react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  delayMultiplier?: number;
  children?: ReactNode;
}

export default function FeatureCard({ 
  title, 
  description, 
  icon,
  delayMultiplier = 0,
  children
}: FeatureCardProps) {
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
      className="bg-gradient-to-b from-[#161616] to-[#111111] p-8 rounded-xl shadow-lg border border-[#222]/20 hover-shadow hover-lift blur-fix"
      style={{ willChange: "transform" }}
    >
      <div className="h-16 w-16 bg-gradient-to-br from-red-400 via-red-500 to-red-700 text-white rounded-full flex items-center justify-center mb-8 text-2xl font-bold shadow-lg animate-glow relative overflow-hidden">
        <div className="absolute inset-0 animate-shimmer opacity-50"></div>
        <span className="relative z-10">{icon}</span>
      </div>
      <h3 className="text-xl font-bold mb-4 text-red-500">
        {title}
      </h3>
      <p className="text-gray-300 leading-relaxed mb-4">
        {description}
      </p>
      {children}
    </motion.div>
  );
}