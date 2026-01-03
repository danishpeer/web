"use client";

import Image from "next/image";
import { personalInfo } from "@/lib/data";

/**
 * Hero Section Component
 * Mobile: Stacked layout - Image, Title, Tagline (centered)
 * Desktop: Split layout - Title left, Image+Tagline right
 */
export default function HeroSection() {
  return (
    <section className="relative pt-24 md:pt-28 pb-12 md:pb-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout - Stacked (visible on screens below 768px) */}
        <div className="flex md:hidden flex-col items-center text-center">
          {/* Profile Image - Centered on mobile */}
          <div className="relative w-[180px] h-[220px] rounded-2xl overflow-hidden bg-muted mb-8">
            <Image
              src="/assets/profile.jpeg"
              alt={personalInfo.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Title - Centered on mobile */}
          <h1 className="text-[3.5rem] leading-[0.9] font-light tracking-[-0.02em]">
            Software
            <br />
            <span className="text-neutral-400">Engineer</span>
          </h1>

          {/* Tagline - Centered on mobile */}
          <p className="mt-6 text-sm leading-relaxed text-foreground/80 max-w-[280px]">
            Hi, I&apos;m {personalInfo.name.split(' ')[0]}, A Software / ML Engineer Building Scalable Deep Tech Solutions.
          </p>
        </div>

        {/* Desktop Layout - Split with bottom alignment */}
        <div className="hidden md:flex items-end justify-between min-h-[50vh] lg:min-h-[55vh] xl:min-h-[50vh] max-w-6xl mx-auto">
          {/* Title - Left side, bottom-aligned with tagline */}
          <div className="max-w-[55%] xl:max-w-[50%]">
            <h1 className="text-[clamp(4rem,9vw,8rem)] font-light leading-[0.9] tracking-[-0.02em]">
              Software
              <br />
              <span className="text-neutral-400">Engineer</span>
            </h1>
          </div>

          {/* Right Column - Image + Tagline */}
          <div className="flex flex-col items-center">
            {/* Profile Image - Responsive sizing with max constraint */}
            <div className="relative w-[200px] h-[260px] lg:w-[240px] lg:h-[300px] xl:w-[260px] xl:h-[320px] rounded-2xl overflow-hidden bg-muted shadow-lg">
              <Image
                src="/assets/profile.jpeg"
                alt={personalInfo.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Tagline - Below image */}
            <div className="text-center mt-5 lg:mt-6">
              <p className="text-sm lg:text-[15px] leading-[1.75] text-foreground font-semibold">
                Hi, I&apos;m {personalInfo.name.split(' ')[0]},
              </p>
              <p className="text-sm lg:text-[15px] leading-[1.75] text-foreground font-semibold">
                A Software / ML Engineer Building
              </p>
              <p className="text-sm lg:text-[15px] leading-[1.75] text-foreground font-semibold">
                Scalable Deep Tech Solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
