"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, Terminal, Shield, Brain } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";
import { useRef } from "react";

/**
 * Projects Section Component
 * Horizontal scrolling row of project cards
 * Scroll snap ensures full cards are always shown
 * Navigation arrows centered with card images (not titles below)
 */
export default function PortfolioSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Scroll functions for navigation arrows - scroll by card width + gap
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 440; // Card width (420px) + gap (20px)
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          {/* Left - Label and Heading */}
          <div className="flex-1">
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="section-label">Projects</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-3xl md:text-4xl lg:text-[2.75rem] font-extralight leading-[1.15] tracking-tight max-w-lg"
            >
              Explore my portfolio of creative solutions
            </motion.h2>
          </div>

          {/* Right - Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-sm md:text-base max-w-xs text-right hidden md:block"
          >
            Explore my portfolio full of innovative projects and creative
            solutions.
          </motion.p>
        </div>

        {/* Projects Carousel Container - items-start so arrows align to top */}
        <div className="relative flex items-start gap-4">
          {/* Left Arrow - height matches card image area for vertical centering */}
          <div 
            className="hidden md:flex items-center justify-center shrink-0"
            style={{ height: 'calc(420px * 0.6)' }} /* Card image height: width * 10/16 aspect ratio */
          >
            <button
              onClick={() => scroll("left")}
              className="p-2 text-neutral-400 hover:text-foreground transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={28} strokeWidth={1.5} />
            </button>
          </div>

          {/* Horizontal Scrolling Projects Row with snap */}
          <div
            ref={scrollContainerRef}
            className="flex-1 flex gap-5 overflow-x-auto scrollbar-hide pb-4 scroll-smooth snap-x snap-mandatory"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative shrink-0 w-[320px] md:w-[380px] lg:w-[420px] snap-start"
              >
                <Link
                  href={project.github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative overflow-hidden rounded-2xl aspect-[16/10] bg-neutral-100">
                    {/* Project Image Placeholder with Icon */}
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm">
                        {index === 0 ? (
                          <Terminal size={40} strokeWidth={1.5} className="text-neutral-600" />
                        ) : index === 1 ? (
                          <Shield size={40} strokeWidth={1.5} className="text-neutral-600" />
                        ) : (
                          <Brain size={40} strokeWidth={1.5} className="text-neutral-600" />
                        )}
                      </div>
                    </div>

                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Arrow on hover */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background text-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>

                  {/* Project info below card */}
                  <div className="mt-4 space-y-2">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs px-2 py-0.5 bg-neutral-200 text-neutral-600 rounded-full"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-medium line-clamp-2 group-hover:text-neutral-600 transition-colors">
                      {project.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-sm text-muted-foreground line-clamp-1">
                      {project.subtitle}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}

            {/* Right spacer for last card snap */}
            <div className="shrink-0 w-1 snap-start" />
          </div>

          {/* Right Arrow - height matches card image area for vertical centering */}
          <div 
            className="hidden md:flex items-center justify-center shrink-0"
            style={{ height: 'calc(420px * 0.6)' }} /* Card image height: width * 10/16 aspect ratio */
          >
            <button
              onClick={() => scroll("right")}
              className="p-2 text-neutral-400 hover:text-foreground transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={28} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
