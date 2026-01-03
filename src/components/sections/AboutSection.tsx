"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { stats } from "@/lib/data";

/**
 * About Section Component
 * Layout matches design:
 * - Row 1: "About Me" label
 * - Row 2: Main heading (left) + short description (right) - same row
 * - Row 3: Large video/image (left ~60%) + Stats centered (right ~40%)
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

        {/* Row 3: Video + Stats - Grid layout, stats centered */}
        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center">
          {/* Left - Video/Image Card (takes 3 of 5 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-3 relative rounded-2xl overflow-hidden bg-muted group cursor-pointer"
          >
            <div className="aspect-[16/9]">
              {/* Placeholder for video thumbnail */}
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-6xl">💻</span>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Coding in action
                  </p>
                </div>
              </div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-foreground text-background flex items-center justify-center shadow-lg group-hover:bg-foreground/90 transition-colors"
                >
                  <Play size={28} className="ml-1" />
                </motion.div>
              </div>
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
