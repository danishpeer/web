"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Server, Layout, Brain, Cloud } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data";

/**
 * Services Section Component
 * Sleek design with left header and 2x2 grid of service cards
 * One card is highlighted with dark background
 */

// Icon mapping for services
const iconMap: Record<string, React.ReactNode> = {
  server: <Server size={28} strokeWidth={1.5} />,
  layout: <Layout size={28} strokeWidth={1.5} />,
  brain: <Brain size={28} strokeWidth={1.5} />,
  cloud: <Cloud size={28} strokeWidth={1.5} />,
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left Column - Section Header (2 of 5 columns) */}
          <div className="lg:col-span-2">
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="section-label">Services</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-3xl md:text-4xl lg:text-[2.75rem] font-extralight leading-[1.15] tracking-tight"
            >
              A Comprehensive look at what I offer and how I deliver
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-5 text-muted-foreground text-sm md:text-base leading-relaxed max-w-md"
            >
              A comprehensive look at my services and how I help bring your
              ideas to life through clean code and scalable architecture.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8"
            >
              <Button
                asChild
                className="rounded-full px-8 py-5 bg-foreground text-background hover:bg-foreground/90 text-sm font-medium"
              >
                <Link href="#contact">Let&apos;s Talk</Link>
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Service Cards Grid (3 of 5 columns) */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {services.map((service, index) => {                
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className={`group relative p-6 md:p-7 rounded-2xl border transition-all duration-300 cursor-pointer min-h-[220px] flex flex-col ${
                       "bg-background border-neutral-200 hover:border-neutral-300 hover:shadow-sm"
                    }`}
                  >
                    {/* Top decoration line */}
                    <div
                      className={`w-12 h-[2px] mb-4 ${
                         "bg-neutral-300"
                      }`}
                    />

                    {/* Service Title */}
                    <h3
                      className={`text-lg md:text-xl font-medium tracking-tight ${
                        "text-foreground"
                      }`}
                    >
                      {service.title}
                    </h3>

                    {/* Service Description */}
                    <p
                      className={`mt-3 text-sm leading-relaxed flex-grow "text-muted-foreground"
                      }`}
                    >
                      {service.description}
                    </p>

                    {/* Arrow Icon at bottom right */}
                    <div className="mt-6 flex justify-between items-end">
                      {/* Icon (decorative, in bottom left) */}
                      <div
                        className={`opacity-20 ${
                          "text-foreground"
                        }`}
                      >
                        {iconMap[service.icon]}
                      </div>

                      {/* Arrow */}
                      <motion.div
                        whileHover={{ scale: 1.1, x: 2, y: -2 }}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                           "bg-neutral-100 text-foreground group-hover:bg-foreground group-hover:text-background"
                        }`}
                      >
                        <ArrowUpRight size={18} strokeWidth={2} />
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
