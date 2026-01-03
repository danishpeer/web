/**
 * Home Page
 * Main landing page for Danish Khursheed's portfolio
 * Assembles all section components into a cohesive layout
 */

import { Navbar, Footer } from "@/components/layout";
import {
  HeroSection,
  LogoMarquee,
  AboutSection,
  ServicesSection,
  ExperienceSection,
  PortfolioSection,
  BlogsSection,
  TestimonialSection,
  ContactSection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section - Main landing area */}
        <HeroSection />

        {/* Logo Marquee - Companies/Technologies */}
        <LogoMarquee />

        {/* About Section - Bio and stats */}
        <AboutSection />

        {/* Services Section - What I offer */}
        <ServicesSection />

        {/* Experience Section - Work timeline */}
        <ExperienceSection />

        {/* Portfolio Section - Projects showcase */}
        <PortfolioSection />

        {/* Blogs Section - Medium articles */}
        <BlogsSection />

        {/* Testimonial Section - Awards and recognition */}
        <TestimonialSection />

        {/* Contact Section - CTA */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
