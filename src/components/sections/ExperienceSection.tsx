"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { experiences } from "@/lib/data";

/**
 * Experience Section Component
 * Timeline of work experience with company details
 * Matches the design with duration on the right
 */
export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Experience</span>
        </motion.div>

        {/* Section Header */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extralight leading-tight"
          >
            A Yearly snapshot of my creative growth
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground lg:pt-4"
          >
            An annual summary that summarizes my career journey and development
            throughout the years.
          </motion.p>
        </div>

        {/* Experience Timeline */}
        <div className="mt-12 md:mt-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border-b border-border py-6 md:py-8"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-8">
                {/* Role & Company */}
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-medium group-hover:text-foreground transition-colors flex items-center gap-2 flex-wrap">
                    {exp.role}
                    <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                      {exp.type}
                    </span>
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    {exp.company}, {exp.location}
                  </p>
                </div>

                {/* Duration - Right aligned */}
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-base md:text-lg font-medium whitespace-nowrap">
                    {exp.duration.includes("-")
                      ? exp.duration.split("-")[0].trim() +
                        " - " +
                        (exp.duration.includes("Present")
                          ? "Now"
                          : exp.duration.split("-")[1].trim())
                      : exp.duration}
                  </span>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-8 h-8 rounded-full border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ArrowUpRight size={16} />
                  </motion.div>
                </div>
              </div>

              {/* Additional highlights */}
              {exp.highlights.length > 0 && (
                <div className="mt-4 md:pl-0">
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-muted-foreground flex items-start"
                      >
                        <span className="mr-2 text-foreground">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

