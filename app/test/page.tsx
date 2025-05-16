"use client";
import { motion } from "motion/react";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      opacity: { duration: 0.5 },
      y: { duration: 0.5 },
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Removed staggering effect
    },
  },
};

function Page() {
  return (
    <div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {/* Step 1 */}
        <motion.div
          variants={fadeIn}
          className="bg-white/5 p-8 rounded-xl shadow-lg border border-white/10 hover:shadow-[0_10px_25px_-5px_rgba(239,68,68,0.15)] hover:-translate-y-1 blur-fix"
        >
          <div className="h-16 w-16 bg-gradient-to-br from-red-400 via-red-500 to-red-700 text-white rounded-full flex items-center justify-center mb-8 text-2xl font-bold shadow-lg animate-glow relative overflow-hidden">
            <div className="absolute inset-0 animate-shimmer opacity-50"></div>
            <span className="relative z-10">1</span>
          </div>
          <h3 className="text-xl font-bold mb-4 text-red-500">
            High Quality Ad Creation
          </h3>
          <p className="text-gray-300 leading-relaxed">
            We create professional, conversion-focused ads specific to your
            business. Our team handles everything from research to final
            production.
          </p>
        </motion.div>

        {/* Step 2 */}
        <motion.div
          variants={fadeIn}
          className="bg-white/5 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/10 hover:shadow-[0_10px_25px_-5px_rgba(239,68,68,0.15)] hover:-translate-y-1 blur-fix"
          style={{ willChange: "transform" }}
        >
          <div className="h-16 w-16 bg-gradient-to-br from-red-400 via-red-500 to-red-700 text-white rounded-full flex items-center justify-center mb-8 text-2xl font-bold shadow-lg animate-glow relative overflow-hidden">
            <div className="absolute inset-0 animate-shimmer opacity-50"></div>
            <span className="relative z-10">2</span>
          </div>
          <h3 className="text-xl font-bold mb-4 text-red-500">
            Custom CRM Integration
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Our CRM system captures leads instantly, responds immediately, and
            uses AI to engage prospects and move them through your pipeline.
          </p>
        </motion.div>

        {/* Step 3 */}
        <motion.div
          variants={fadeIn}
          className="bg-white/5 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/10 hover:shadow-[0_10px_25px_-5px_rgba(239,68,68,0.15)] hover:-translate-y-1 blur-fix"
          style={{ willChange: "transform" }}
        >
          <div className="h-16 w-16 bg-gradient-to-br from-red-400 via-red-500 to-red-700 text-white rounded-full flex items-center justify-center mb-8 text-2xl font-bold shadow-lg animate-glow relative overflow-hidden">
            <div className="absolute inset-0 animate-shimmer opacity-50"></div>
            <span className="relative z-10">3</span>
          </div>
          <h3 className="text-xl font-bold mb-4 text-red-500">
            Strategic Ad Launch
          </h3>
          <p className="text-gray-300 leading-relaxed">
            We put your ads in front of your ideal customers to consistently
            generate quality leads that feed your CRM system.
          </p>
        </motion.div>

        {/* Step 4 */}
        <motion.div
          variants={fadeIn}
          className="bg-white/5 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/10 hover:shadow-[0_10px_25px_-5px_rgba(239,68,68,0.15)] hover:-translate-y-1 blur-fix"
          style={{ willChange: "transform" }}
        >
          <div className="h-16 w-16 bg-gradient-to-br from-red-400 via-red-500 to-red-700 text-white rounded-full flex items-center justify-center mb-8 text-2xl font-bold shadow-lg animate-glow relative overflow-hidden">
            <div className="absolute inset-0 animate-shimmer opacity-50"></div>
            <span className="relative z-10">4</span>
          </div>
          <h3 className="text-xl font-bold mb-4 text-red-500">
            Ongoing Campaign Management
          </h3>
          <p className="text-gray-300 leading-relaxed">
            We continuously monitor and optimize your campaigns to ensure your
            pipeline is always filled with quality leads.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Page;
