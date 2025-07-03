"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after user scrolls down 300px
      const scrolled = window.scrollY > 300;
      setIsVisible(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-gradient-to-t from-black/80 to-transparent backdrop-blur-sm p-4"
        >
          <a
            href="https://link.xmaboost.com/widget/booking/Tj3i8x3FyT8sQOayn89T"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-[0_4px_20px_rgba(255,68,68,0.4)] hover:shadow-[0_6px_25px_rgba(204,43,43,0.6)] transform hover:scale-[1.02] animate-pulse"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
            </svg>
            <span className="text-lg font-extrabold">Book Your Free Strategy Call</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}