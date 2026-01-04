"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { useRef, useEffect, useState } from "react";
import { MediumPost, fetchMediumPosts } from "@/lib/medium";
import { blogConfig } from "@/lib/data";

/**
 * Blogs Section Component
 * Horizontal scrolling row of blog cards fetched from Medium
 * Similar design to Projects section for consistency
 */
export default function BlogsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch Medium posts on mount
  useEffect(() => {
    async function loadPosts() {
      try {
        const fetchedPosts = await fetchMediumPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Failed to fetch blog posts:", error);
      } finally {
        setLoading(false);
      }
    }
    loadPosts();
  }, []);

  // Scroll functions for navigation arrows
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 440; // Card width + gap
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Format date to readable string
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  // Don't render section if no posts
  if (!loading && posts.length === 0) {
    return null;
  }

  return (
    <section id="blogs" className="py-20 md:py-32 bg-neutral-50">
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
              <span className="section-label">Blogs</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-3xl md:text-4xl lg:text-[2.75rem] font-extralight leading-[1.15] tracking-tight max-w-lg"
            >
              {blogConfig.sectionTitle}
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
            {blogConfig.sectionDescription}
          </motion.p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-20">
            <div className="animate-pulse text-muted-foreground">
              Loading blog posts...
            </div>
          </div>
        )}

        {/* Blog Cards Carousel */}
        {!loading && posts.length > 0 && (
          <div className="relative flex items-start gap-4">
            {/* Left Arrow */}
            <div
              className="hidden md:flex items-center justify-center shrink-0"
              style={{ height: "calc(420px * 0.6)" }}
            >
              <button
                onClick={() => scroll("left")}
                className="p-2 text-neutral-400 hover:text-foreground transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft size={28} strokeWidth={1.5} />
              </button>
            </div>

            {/* Horizontal Scrolling Blog Cards */}
            <div
              ref={scrollContainerRef}
              className="flex-1 flex gap-5 overflow-x-auto scrollbar-hide pb-4 scroll-smooth snap-x snap-mandatory"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {posts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative shrink-0 w-[320px] md:w-[380px] lg:w-[420px] snap-start"
                >
                  {/* Card */}
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="relative overflow-hidden rounded-2xl aspect-[16/10] bg-neutral-100">
                      {/* Blog Thumbnail */}
                      {post.thumbnail && post.thumbnail !== "/images/blog-placeholder.png" ? (
                        <Image
                          src={post.thumbnail}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center">
                          <span className="text-6xl">📝</span>
                        </div>
                      )}

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Arrow on hover */}
                      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background text-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>

                    {/* Blog info below card */}
                    <div className="mt-4 space-y-2">
                      {/* Categories */}
                      {post.categories.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {post.categories.slice(0, 2).map((category) => (
                            <Badge
                              key={category}
                              variant="secondary"
                              className="text-xs px-2 py-0.5 bg-neutral-200 text-neutral-600 rounded-full"
                            >
                              {category}
                            </Badge>
                          ))}
                        </div>
                      )}

                      {/* Title */}
                      <h3 className="text-base font-medium line-clamp-2 group-hover:text-neutral-600 transition-colors">
                        {post.title}
                      </h3>

                      {/* Date */}
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Calendar size={14} />
                        <span>{formatDate(post.pubDate)}</span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}

              {/* Right spacer */}
              <div className="shrink-0 w-1 snap-start" />
            </div>

            {/* Right Arrow */}
            <div
              className="hidden md:flex items-center justify-center shrink-0"
              style={{ height: "calc(420px * 0.6)" }}
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
        )}
      </div>
    </section>
  );
}

