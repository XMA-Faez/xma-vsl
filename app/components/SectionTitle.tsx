import React from "react";
import { motion } from "motion/react";

interface SectionTitleProps {
  title: string;
  centered?: boolean;
  className?: string;
}

export default function SectionTitle({ 
  title, 
  centered = true,
  className = ""
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h2 className={`text-3xl md:text-5xl font-bold ${centered ? 'text-center' : ''} mb-24 bg-gradient-to-r from-red-400 via-red-500 to-red-700 bg-clip-text text-transparent px-4 leading-tight ${className}`}>
        {title}
      </h2>
    </motion.div>
  );
}