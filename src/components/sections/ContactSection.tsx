"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/data";

/**
 * Contact/CTA Section Component
 * Large CTA section with "Let's Connect There" message
 * Dark background matching the design
 */
export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 bg-foreground text-background overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Content */}
        <div className="max-w-3xl">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight leading-[1.1] tracking-tight">
              Let&apos;s Connect
              <br />
              <span className="text-background/40">There</span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 text-background/60 text-base md:text-lg max-w-xl leading-relaxed"
          >
            Have a project in mind or want to discuss opportunities? I&apos;m always
            open to interesting conversations and new challenges.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full px-6 bg-background text-foreground hover:bg-background/90 group"
            >
              <Link href={`mailto:${personalInfo.email}`}>
                <span>Hire Me Now</span>
                <ChevronRight
                  size={18}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-6 border-background/30 bg-transparent text-background hover:bg-background/10"
            >
              <Link href={personalInfo.resumeUrl} target="_blank">
                Download Resume
              </Link>
            </Button>
          </motion.div>
        </div>

    
      </div>
    </section>
  );
}
