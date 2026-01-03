"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks, personalInfo } from "@/lib/data";

/**
 * Navbar Component
 * Matches the design with:
 * - Logo on the left
 * - Navigation links centered
 * - Outline "Sign In" / "Hire Me" button on the right
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Professional Monogram */}
          <Link href="/" className="flex items-center space-x-3 group">
            {/* Sleek geometric logo mark */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-9 h-9 flex items-center justify-center"
            >
              <svg 
                width="36" 
                height="36" 
                viewBox="0 0 36 36" 
                fill="none" 
                className="text-foreground"
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
            </motion.div>
            <motion.span
              whileHover={{ opacity: 0.7 }}
              className="text-lg md:text-xl font-light tracking-wide"
            >
              {personalInfo.name.split(' ')[0]}
            </motion.span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-sm font-normal text-foreground hover:text-muted-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Button - Outline Style (matching design) */}
          <div className="hidden md:flex items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                asChild
                variant="outline"
                className="rounded-full px-6 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                <Link href="#contact">Hire Me</Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className="block px-4 py-3 text-base font-normal text-foreground hover:bg-muted rounded-lg transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="pt-2"
              >
                <Button
                  asChild
                  variant="outline"
                  className="w-full rounded-full border-foreground text-foreground hover:bg-foreground hover:text-background"
                >
                  <Link href="#contact" onClick={handleLinkClick}>
                    Hire Me
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
