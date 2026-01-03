"use client";

import { motion } from "framer-motion";
import {
  SiGo,
  SiPython,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiDocker,
  SiKubernetes,
  SiAmazonwebservices,
  SiPytorch,
  SiSpring,
  SiPostgresql,
  SiRedis,
  SiApachekafka,
  SiTensorflow,
  SiNextdotjs,
  SiAmazonsqs,
  SiAmazondynamodb,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

/**
 * Logo Marquee Component
 * Shows key skills/technologies
 * Large pills - only 4-5 visible in viewport
 * Seamless infinite loop animation
 */

// Key Technologies
const logos = [
  { name: "Java", icon: FaJava },
  { name: "Go", icon: SiGo },
  { name: "Python", icon: SiPython },
  { name: "AWS", icon: SiAmazonwebservices },
  { name: "Redis", icon: SiRedis },
  { name: "Kafka", icon: SiApachekafka },
  { name: "SQS", icon: SiAmazonsqs },
  { name: "DynamoDB", icon: SiAmazondynamodb },
  { name: "PyTorch", icon: SiPytorch },
  { name: "Spring Boot", icon: SiSpring },
  { name: "Docker", icon: SiDocker },
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TensorFlow", icon: SiTensorflow },
];

// Create 3 copies for seamless loop
const tripleLogos = [...logos, ...logos];

export default function LogoMarquee() {
  return (
    <section className="py-6 md:py-8 overflow-hidden">
      <div className="relative">
        {/* Gradient Overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Marquee Container */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex animate-marquee hover:paused"
        >
          {tripleLogos.map((logo, index) => {
            const IconComponent = logo.icon;
            return (
              <div
                key={`${logo.name}-${index}`}
                className="flex items-center justify-center mx-3 md:mx-4 shrink-0"
              >
                <div className="flex items-center gap-3 md:gap-4 px-7 md:px-10 py-4 md:py-5 rounded-full bg-neutral-100 hover:bg-neutral-200/80 transition-colors cursor-default">
                  <IconComponent className="w-6 h-6 md:w-7 md:h-7 text-neutral-700" />
                  <span className="text-base md:text-lg font-medium text-neutral-800 whitespace-nowrap">
                    {logo.name}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
