"use client";

import React from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import ParticlesBackground from "./components/ParticlesBackground";
import GlowingOrb from "./components/GlowingOrb";
import RadialGradient from "./components/RadialGradient";
import IconBox from "./components/IconBox";
import TargetIcon from "./components/icons/TargetIcon";
import AiIcon from "./components/icons/AiIcon";
import AnalyticsIcon from "./components/icons/AnalyticsIcon";
import ChatIcon from "./components/icons/ChatIcon";
import DashboardIcon from "./components/icons/DashboardIcon";
import AutomationIcon from "./components/icons/AutomationIcon";
import GraphIcon from "./components/icons/GraphIcon";
import FeaturedStat from "./components/FeaturedStat";
import FeatureCard from "./components/FeatureCard";
import SectionTitle from "./components/SectionTitle";
import SectionHeader from "./components/SectionHeader";
import TestimonialCard from "./components/TestimonialCard";
import Header from "./components/Header";
import AdCarousel from "./components/AdCarousel";
import FloatingCTA from "./components/FloatingCTA";

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

interface FadeInWhenVisibleProps {
  children: React.ReactNode;
  delay?: number;
}

const FadeInWhenVisible = ({ children, delay = 0 }: FadeInWhenVisibleProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: "easeOut",
            delay,
            opacity: { duration: 0.5, delay },
            y: { duration: 0.5, delay },
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#0f0f0f] text-gray-100 relative overflow-hidden">
      {/* Background elements */}
      {/* <div className="fixed top-20 left-20 w-64 h-64 border border-white/5 rounded-full backdrop-blur-sm bg-red-500/5 animate-float"></div> */}
      {/* <div className="fixed top-40 right-40 w-40 h-40 border border-white/5 rounded-full backdrop-blur-sm bg-red-500/5 animate-float" style={{ animationDelay: "1s" }}></div> */}
      {/* <div className="fixed bottom-10 left-1/3 w-24 h-24 border border-white/5 rounded-full backdrop-blur-sm bg-red-500/5 animate-float" style={{ animationDelay: "2s" }}></div> */}

      {/* <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-red-500/20 to-transparent fixed top-[10%] -rotate-12"></div> */}
      {/* <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-red-600/20 to-transparent fixed top-[60%] -rotate-6"></div> */}

      {/* Enhanced decorative elements using GlowingOrb component */}
      {/* <GlowingOrb position="top-[25%] right-[10%]" size="w-20 h-20" delay={0.2} color="from-red-500/20" /> */}
      {/* <GlowingOrb position="bottom-[30%] left-[8%]" size="w-16 h-16" delay={1.5} color="from-red-500/15" /> */}
      {/* <GlowingOrb position="bottom-[5%] right-[15%]" size="w-32 h-32" delay={0.5} color="from-red-500/10" blur="blur-2xl" /> */}
      {/* <GlowingOrb position="top-[50%] left-[15%]" size="w-24 h-24" delay={0.8} color="from-red-500/5" blur="blur-3xl" /> */}
      {/* <GlowingOrb position="top-[5%] left-[50%]" size="w-28 h-28" delay={1.2} color="from-red-600/10" /> */}
      {/* <GlowingOrb position="bottom-[15%] right-[45%]" size="w-20 h-20" delay={2} color="from-red-400/15" /> */}

      {/* Animated gradient overlays */}
      <div className="fixed inset-0 opacity-30 z-[2] overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-red-500/6 to-transparent transform -rotate-6 translate-y-[-10%]"></div>
        <div className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t from-red-700/4 to-transparent transform rotate-6 translate-y-[10%]"></div>

        {/* Enhanced background gradients */}
        <RadialGradient
          position="top-[10%] left-[20%]"
          size="w-[40rem] h-[40rem]"
          color="from-red-500/8"
          blur="blur-[100px]"
        />
        <RadialGradient
          position="bottom-[5%] right-[10%]"
          size="w-[35rem] h-[35rem]"
          color="from-red-700/6"
          blur="blur-[120px]"
        />
        <RadialGradient
          position="top-[40%] right-[30%]"
          size="w-[30rem] h-[30rem]"
          color="from-red-600/4"
          blur="blur-[90px]"
        />
      </div>

      {/* Hero Section with Video */}
      <Header
        title="Scale Your Business With Our Proven LeadFlow System"
        subtitle="Watch this exclusive presentation to discover how we've generated 30K+ qualified leads and managed 3M+ dirhams in ad spend for businesses like yours."
        videoSrc="https://res.cloudinary.com/dw1j7izud/video/upload/v1747401674/djybf6fdqmbsdeofr3gz.mp4"
      />

      {/* Our Process Section */}
      <section className="w-full py-32 relative">
        <SectionTitle title="Our 4-Step LeadFlow System" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="bg-gradient-to-b w-full from-[#161616] to-[#111111] p-8 rounded-xl shadow-lg border border-[#222]/20 hover-shadow hover-lift blur-fix"
            >
              <div className="h-16 w-16 bg-gradient-to-br from-red-500 to-red-700 text-white rounded-full flex items-center justify-center mb-8 text-2xl font-bold shadow-lg animate-glow relative overflow-hidden">
                <div className="absolute inset-0 animate-shimmer opacity-50"></div>
                <span className="relative z-10">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4 gradient-text">
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
              className="bg-gradient-to-b from-[#161616] to-[#111111] backdrop-blur-md p-8 rounded-xl shadow-lg border border-[#222]/20 hover-shadow hover-lift blur-fix"
              style={{ willChange: "transform" }}
            >
              <div className="h-16 w-16 bg-gradient-to-br from-red-600 to-red-500 text-white rounded-full flex items-center justify-center mb-8 text-2xl font-bold shadow-lg animate-glow relative overflow-hidden">
                <div className="absolute inset-0 animate-shimmer opacity-50"></div>
                <span className="relative z-10">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4 gradient-text">
                Custom CRM Integration
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Our CRM system captures leads instantly, responds immediately,
                and uses AI to engage prospects and move them through your
                pipeline.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              variants={fadeIn}
              className="bg-gradient-to-b from-[#161616] to-[#111111] backdrop-blur-md p-8 rounded-xl shadow-lg border border-[#222]/20 hover-shadow hover-lift blur-fix"
              style={{ willChange: "transform" }}
            >
              <div className="h-16 w-16 bg-gradient-to-br from-red-700 to-red-600 text-white rounded-full flex items-center justify-center mb-8 text-2xl font-bold shadow-lg animate-glow relative overflow-hidden">
                <div className="absolute inset-0 animate-shimmer opacity-50"></div>
                <span className="relative z-10">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4 gradient-text">
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
              className="bg-gradient-to-b from-[#161616] to-[#111111] backdrop-blur-md p-8 rounded-xl shadow-lg border border-[#222]/20 hover-shadow hover-lift blur-fix"
              style={{ willChange: "transform" }}
            >
              <div className="h-16 w-16 bg-gradient-to-br from-red-600 to-red-800 text-white rounded-full flex items-center justify-center mb-8 text-2xl font-bold shadow-lg animate-glow relative overflow-hidden">
                <div className="absolute inset-0 animate-shimmer opacity-50"></div>
                <span className="relative z-10">4</span>
              </div>
              <h3 className="text-xl font-bold mb-4 gradient-text">
                Ongoing Campaign Management
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We continuously monitor and optimize your campaigns to ensure
                your pipeline is always filled with quality leads.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="w-full py-32 relative z-10">
        <div className="absolute w-full h-full bg-red-500/3 mix-blend-overlay"></div>
        <div className="max-w-7xl py-16 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader 
            title="Our Work" 
            subtitle="Check out the high-quality videos we create for our clients using our script automation tool."
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <AdCarousel />
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      {/* <section className="w-full py-32 relative"> */}
      {/*   <SectionTitle title="Results We've Delivered" /> */}
      {/**/}
      {/*   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
      {/*     <motion.div */}
      {/*       variants={staggerContainer} */}
      {/*       initial="hidden" */}
      {/*       whileInView="visible" */}
      {/*       viewport={{ once: true, amount: 0.1 }} */}
      {/*       className="grid grid-cols-1 lg:grid-cols-3 gap-8" */}
      {/*     > */}
      {/*       <TestimonialCard */}
      {/*         client="Luxury Bag Brand" */}
      {/*         testimonial="Increased revenue from a few thousand dirhams to 400,000 dirhams with a 12.65% customer retention rate (top 1% in luxury industry)." */}
      {/*         achievement="Revenue Growth" */}
      {/*         delayMultiplier={0} */}
      {/*       /> */}
      {/**/}
      {/*       <TestimonialCard */}
      {/*         client="The Flower Guys" */}
      {/*         testimonial="Helped this UAE e-commerce phenomenon take Dubai by storm in 2025 with website building, landing page optimization, and ad campaigns." */}
      {/*         achievement="Market Domination" */}
      {/*         delayMultiplier={1} */}
      {/*       /> */}
      {/**/}
      {/*       <TestimonialCard */}
      {/*         client="Formatic Car Infos" */}
      {/*         testimonial="Generated qualified leads daily and created an optimized landing page that significantly increased conversion rates." */}
      {/*         achievement="Increased Conversions" */}
      {/*         delayMultiplier={2} */}
      {/*       /> */}
      {/*     </motion.div> */}
      {/*   </div> */}
      {/* </section> */}

      {/* Stats Section */}
      <section className="w-full py-32 pt-64 relative">
        <div className="absolute w-full h-full bg-red-600/3 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle title="Our Impact By The Numbers" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
          >
            <FeaturedStat
              value="3M+"
              label="Dirhams in Ad Spend Managed"
              delayMultiplier={0}
            />
            <FeaturedStat
              value="30K+"
              label="Qualified Leads Generated"
              delayMultiplier={1}
            />
            <FeaturedStat
              value="300+"
              label="Converting Video Ads"
              delayMultiplier={2}
            />
          </motion.div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="w-full py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            title="Our Technology Stack"
            subtitle="Cutting-edge tools and platforms that power our lead generation systems"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Platform 1 */}
            <motion.div
              variants={fadeIn}
              className="bg-white/5 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/10 blur-fix"
              style={{ willChange: "transform" }}
            >
              <IconBox
                icon={<DashboardIcon size={40} />}
                className="mb-6 mx-auto"
              />
              <h3 className="text-xl font-bold text-center mb-4 gradient-text">
                Meta Ads Platform
              </h3>
              <p className="text-gray-300 text-center mb-6">
                Advanced Facebook & Instagram ad optimization with custom
                audience building and pixel tracking.
              </p>
              <div className="flex justify-center">
                <span className="text-sm bg-white/10 rounded-full px-3 py-1 text-gray-300">
                  Core Technology
                </span>
              </div>
            </motion.div>

            {/* Platform 2 */}
            <motion.div
              variants={fadeIn}
              className="bg-white/5 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/10 blur-fix"
              style={{ willChange: "transform" }}
            >
              <IconBox icon={<AiIcon size={40} />} className="mb-6 mx-auto" />
              <h3 className="text-xl font-bold text-center mb-4 gradient-text">
                Proprietary CRM Suite
              </h3>
              <p className="text-gray-300 text-center mb-6">
                Customized lead management system with automated follow-up
                sequences and conversion tracking.
              </p>
              <div className="flex justify-center">
                <span className="text-sm bg-white/10 rounded-full px-3 py-1 text-gray-300">
                  Exclusive Technology
                </span>
              </div>
            </motion.div>

            {/* Platform 3 */}
            <motion.div
              variants={fadeIn}
              className="bg-white/5 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/10 blur-fix"
              style={{ willChange: "transform" }}
            >
              <IconBox
                icon={<AnalyticsIcon size={40} />}
                className="mb-6 mx-auto"
              />
              <h3 className="text-xl font-bold text-center mb-4 gradient-text">
                AI Analytics Dashboard
              </h3>
              <p className="text-gray-300 text-center mb-6">
                Real-time campaign performance visualization with predictive
                analysis and ROI forecasting.
              </p>
              <div className="flex justify-center">
                <span className="text-sm bg-white/10 rounded-full px-3 py-1 text-gray-300">
                  Advanced Analytics
                </span>
              </div>
            </motion.div>

            {/* Platform 4 */}
            <motion.div
              variants={fadeIn}
              className="bg-white/5 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/10 blur-fix"
              style={{ willChange: "transform" }}
            >
              <IconBox icon={<ChatIcon size={40} />} className="mb-6 mx-auto" />
              <h3 className="text-xl font-bold text-center mb-4 gradient-text">
                Smart Chat Automation
              </h3>
              <p className="text-gray-300 text-center mb-6">
                Intelligent chatbot system that qualifies leads and books
                appointments automatically 24/7.
              </p>
              <div className="flex justify-center">
                <span className="text-sm bg-white/10 rounded-full px-3 py-1 text-gray-300">
                  Conversion Focused
                </span>
              </div>
            </motion.div>

            {/* Platform 5 */}
            <motion.div
              variants={fadeIn}
              className="bg-white/5 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/10 blur-fix"
              style={{ willChange: "transform" }}
            >
              <IconBox
                icon={<AutomationIcon size={40} />}
                className="mb-6 mx-auto"
              />
              <h3 className="text-xl font-bold text-center mb-4 gradient-text">
                Campaign Automation
              </h3>
              <p className="text-gray-300 text-center mb-6">
                Rule-based campaign management system that scales ad spend based
                on performance metrics.
              </p>
              <div className="flex justify-center">
                <span className="text-sm bg-white/10 rounded-full px-3 py-1 text-gray-300">
                  Scalability Focused
                </span>
              </div>
            </motion.div>

            {/* Platform 6 */}
            <motion.div
              variants={fadeIn}
              className="bg-white/5 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/10 blur-fix"
              style={{ willChange: "transform" }}
            >
              <IconBox
                icon={<GraphIcon size={40} />}
                className="mb-6 mx-auto"
              />
              <h3 className="text-xl font-bold text-center mb-4 gradient-text">
                Conversion Tracking
              </h3>
              <p className="text-gray-300 text-center mb-6">
                End-to-end attribution system that tracks customer journey from
                ad impression to sale.
              </p>
              <div className="flex justify-center">
                <span className="text-sm bg-white/10 rounded-full px-3 py-1 text-gray-300">
                  Data Driven
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-700/6"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Ready to Scale Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of successful businesses that have transformed their growth with our proven LeadFlow System. Book your strategy call today and discover your custom growth plan.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href="https://link.xmaboost.com/widget/booking/Tj3i8x3FyT8sQOayn89T"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-[0_8px_30px_rgba(255,68,68,0.4)] hover:shadow-[0_12px_40px_rgba(204,43,43,0.6)] text-lg"
              >
                <span>Book Your Free Strategy Call</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12l4 4 4-4m0 6H8a2 2 0 01-2-2V7a2 2 0 012-2h8a2 2 0 012 2v1" />
                </svg>
              </a>
              <p className="text-gray-400 text-sm mt-4 max-w-md mx-auto">
                🔥 Limited availability - Only 5 strategy calls available this week
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Floating CTA */}
      <FloatingCTA />
    </main>
  );
}
