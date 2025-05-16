import React from "react";
import { motion } from "motion/react";

interface TestimonialCardProps {
  client: string;
  testimonial: string;
  achievement: string;
  delayMultiplier?: number;
}

export default function TestimonialCard({ 
  client, 
  testimonial, 
  achievement,
  delayMultiplier = 0 
}: TestimonialCardProps) {
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
      className="bg-gradient-to-b from-[#161616] to-[#111111] backdrop-blur-md p-8 rounded-xl shadow-lg border border-[#222]/20 hover-shadow relative overflow-hidden group blur-fix hover-scale"
      style={{ willChange: "transform" }}
    >
      <div className="absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-br from-red-400 via-red-500 to-red-700 rounded-full opacity-10 blur-3xl group-hover-opacity"></div>
      <h3 className="text-2xl font-bold mb-4 text-red-500">
        {client}
      </h3>
      <p className="text-gray-300 mb-6 leading-relaxed">
        {testimonial}
      </p>
      <div className="flex items-center gap-2">
        <span className="text-cyan-400">✓</span>
        <span className="text-gray-300">{achievement}</span>
      </div>
    </motion.div>
  );
}