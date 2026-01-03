"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo, footerLinks } from "@/lib/data";

/**
 * Footer Component
 * Dark background with logo, description, contact info columns
 * Matches the design layout
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      {/* Divider line */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-background/10" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12">
          {/* Brand & Description - Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4"
          >
            {/* Logo - Matching navbar style */}
            <Link href="/" className="flex items-center space-x-3 group">
              {/* Sleek geometric logo mark */}
              <div className="relative w-9 h-9 flex items-center justify-center">
                <svg 
                  width="36" 
                  height="36" 
                  viewBox="0 0 36 36" 
                  fill="none" 
                  className="text-background"
                >
                  {/* Outer rounded square frame */}
                  <rect 
                    x="1" 
                    y="1" 
                    width="34" 
                    height="34" 
                    rx="8" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    fill="none"
                  />
                  {/* Stylized "D" - Modern geometric design */}
                  <path 
                    d="M11 10h6c4.418 0 8 3.582 8 8s-3.582 8-8 8h-6V10z" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    fill="none"
                  />
                  {/* Inner accent line */}
                  <path 
                    d="M14 14h3c2.21 0 4 1.79 4 4s-1.79 4-4 4h-3" 
                    stroke="currentColor" 
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span className="text-xl font-light tracking-wide">
                {personalInfo.name.split(' ')[0]}
              </span>
            </Link>

            <p className="mt-5 text-background/50 text-sm leading-relaxed max-w-xs">
              Software Engineer specializing in building scalable backend systems,
              AI-powered solutions, and distributed architectures. Currently crafting
              digital experiences at Swiggy.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-3 mt-6">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <h4 className="text-xs font-medium uppercase tracking-wider text-background/40 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Email Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <h4 className="text-xs font-medium uppercase tracking-wider text-background/40 mb-5">
              Email Address
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  {personalInfo.email}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Phone Number */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <h4 className="text-xs font-medium uppercase tracking-wider text-background/40 mb-5">
              Phone Number
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </li>
              <li className="text-sm text-background/50">
                {personalInfo.location}
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar - Copyright centered */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-background/10"
        >
          <p className="text-sm text-background/40 text-center">
            All rights reserved @{personalInfo.name}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
