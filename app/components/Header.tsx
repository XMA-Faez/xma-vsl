import React from "react";
import { motion } from "motion/react";

interface HeaderProps {
  title: string;
  subtitle: string;
  videoSrc: string;
  posterImg?: string; 
}

export default function Header({
  title,
  subtitle,
  videoSrc,
  posterImg = "/images/video-poster.jpg"
}: HeaderProps) {
  return (
    <section className="w-full relative min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-7xl font-bold text-center mb-6 bg-gradient-to-br from-red-400 via-red-500 to-red-700 bg-clip-text text-transparent leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto mb-12 text-gray-300 font-light tracking-wide">
            {subtitle}
          </p>
        </motion.div>

        {/* Video Embed */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full max-w-4xl aspect-video bg-black mb-16 rounded-xl overflow-hidden border border-red-600/20 shadow-[0_0_35px_rgba(239,68,68,0.25)] relative group hover-scale"
        >
          <video
            className="w-full h-full"
            src={videoSrc}
            title="XMA LeadFlow System Presentation"
            controls
            autoPlay
            muted
            playsInline
            poster={posterImg}
          />
        </motion.div>
      </div>
    </section>
  );
}