"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { stats } from "@/lib/data";
import aboutCodingAnimation from "@/components/animations/aboutCoding.json";

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

/**
 * About Section Component
 * Layout matches design:
 * - Row 1: "About Me" label
 * - Row 2: Main heading (left) + short description (right) - same row
 * - Row 3: Lottie animation (left ~60%) + Stats centered (right ~40%)
 */
export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Row 1: Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">About Me</span>
        </motion.div>

        {/* Row 2: Main Heading + Short Description - Same Row */}
        <div className="mt-8 md:mt-12 flex flex-col md:flex-row md:justify-between md:items-start gap-6 md:gap-12">
          {/* Left - Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extralight leading-tight flex-1 max-w-2xl"
          >
            Engineering has always been more than just a job - it&apos;s my passion.
          </motion.h2>

          {/* Right - Short Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-muted-foreground text-sm md:text-base max-w-xs md:max-w-sm md:text-right shrink-0"
          >
            Engineering is not just a job for me, it&apos;s a passion that drives me
            to build systems that scale and solve real problems.
          </motion.p>
        </div>

        {/* Row 3: Lottie Animation + Stats - Grid layout, stats centered */}
        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center">
          {/* Left - Lottie Animation (takes 3 of 5 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-3 relative"
          >
            <div className="flex items-center justify-center">
              <Lottie
                animationData={aboutCodingAnimation}
                loop={true}
                autoplay={true}
                className="w-full h-auto max-w-[500px] lg:max-w-[550px] xl:max-w-[500px] 2xl:max-w-[450px]"
                style={{ filter: "grayscale(100%) contrast(1.1)" }}
              />
            </div>
          </motion.div>

          {/* Right - Stats (takes 2 of 5 columns) */}
          {/* Mobile: horizontal row, Desktop: vertical column */}
          <div className="md:col-span-2 h-full flex justify-center">
            <div className="flex flex-row md:flex-col justify-between gap-4 md:gap-0 h-full w-full md:w-fit">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="border-l-2 border-foreground pl-3 md:pl-6 flex-1 md:flex-none"
                >
                  <span className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extralight tracking-tight block">
                    {stat.value}
                  </span>
                  <p className="mt-1 md:mt-2 text-[10px] sm:text-xs md:text-sm text-muted-foreground leading-relaxed max-w-[100px] md:max-w-[200px]">
                    {stat.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
