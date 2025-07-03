import React from "react";
import { motion } from "motion/react";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  centered?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  centered = true
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`mb-10 ${centered ? 'text-center' : ''}`}
    >
      <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4 leading-tight">
        {title}
      </h2>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </motion.div>
  );
}