"use client";

import { motion } from "framer-motion";
import { Quote, Award, Medal } from "lucide-react";
import { testimonials } from "@/lib/data";

/**
 * Testimonial/Awards Section Component
 * Displays awards and recognition
 * Matches the design with quote card styling
 */
export default function TestimonialSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="section-label">Recognition</span>
        </motion.div>

        {/* Main Quote Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="relative bg-muted/50 rounded-3xl p-8 md:p-12">
            {/* Quote Icon */}
            <Quote
              size={48}
              className="absolute top-8 left-8 text-muted-foreground/20"
            />

            {/* Quote Text */}
            <blockquote className="relative z-10">
              <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed text-center">
                &ldquo;{testimonials[0].quote}&rdquo;
              </p>
            </blockquote>

            {/* Author */}
            <div className="mt-8 flex flex-col items-center">
              {/* Avatar placeholder */}
              <div className="w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center">
                <Award size={28} />
              </div>
              <div className="mt-4 text-center">
                <p className="font-medium text-lg">{testimonials[0].author}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[0].role}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Awards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group p-6 rounded-2xl border border-border bg-background hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-start space-x-4">
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center flex-shrink-0">
                  {index === 0 ? <Award size={24} /> : <Medal size={24} />}
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-medium text-lg">{item.author}</h3>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {item.quote}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

