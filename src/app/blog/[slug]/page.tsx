import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, ExternalLink } from "lucide-react";
import { fetchMediumPostBySlug, fetchMediumPosts } from "@/lib/medium";
import { personalInfo } from "@/lib/data";
import { Navbar, Footer } from "@/components/layout";

/**
 * Generate static params for all blog posts
 * This enables static generation at build time
 */
export async function generateStaticParams() {
  const posts = await fetchMediumPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

/**
 * Generate metadata for each blog post
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchMediumPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: `${post.title} | ${personalInfo.name}`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.pubDate,
      authors: [post.author],
      images: post.thumbnail ? [post.thumbnail] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.thumbnail ? [post.thumbnail] : [],
    },
  };
}

/**
 * Calculate reading time from content
 */
function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const plainText = content.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
  const wordCount = plainText.split(" ").length;
  return Math.ceil(wordCount / wordsPerMinute);
}

/**
 * Format date to readable string
 */
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

/**
 * Blog Post Page Component
 * Clean, minimal design matching the portfolio theme
 */
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await fetchMediumPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const readingTime = calculateReadingTime(post.content);

  return (
    <>
      <Navbar />

      <main className="relative bg-background min-h-screen pt-24 md:pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          {/* Back Navigation */}
          <Link
            href="/#blogs"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group mb-10"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span>Back</span>
          </Link>

          {/* Article */}
          <article>
            {/* Header */}
            <header className="mb-10">
              {/* Categories */}
              {post.categories.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.categories.map((category) => (
                    <span
                      key={category}
                      className="text-xs px-3 py-1 bg-muted text-muted-foreground rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              )}

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extralight leading-[1.15] tracking-tight mb-6">
                {post.title}
              </h1>

              {/* Author & Meta */}
              <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-muted-foreground pb-8 border-b border-border">
                {/* Author */}
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center text-xs font-medium">
                    {personalInfo.name.charAt(0)}
                  </div>
                  <span className="font-medium text-foreground">
                    {personalInfo.name}
                  </span>
                </div>

                {/* Date */}
                <div className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  <span>{formatDate(post.pubDate)}</span>
                </div>

                {/* Reading Time */}
                <div className="flex items-center gap-1.5">
                  <Clock size={14} />
                  <span>{readingTime} min read</span>
                </div>

                {/* Medium Link */}
                <Link
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-foreground transition-colors ml-auto"
                >
                  <span>Read on Medium</span>
                  <ExternalLink size={14} />
                </Link>
              </div>
            </header>

            {/* Article Content */}
            <div
              className="article-content mb-16"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Article Footer */}
            <footer className="border-t border-border pt-10 pb-20">
              {/* Tags */}
              {post.categories.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-10">
                  {post.categories.map((category) => (
                    <span
                      key={category}
                      className="px-4 py-2 bg-muted text-muted-foreground text-sm rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              )}

              {/* Author Card */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 bg-muted/50 rounded-2xl border border-border">
                <div className="w-14 h-14 rounded-full bg-foreground text-background flex items-center justify-center text-xl font-medium shrink-0">
                  {personalInfo.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium mb-1">
                    Written by {personalInfo.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Software Engineer specializing in scalable backend systems,
                    AI/ML solutions, and distributed architecture.
                  </p>
                  <div className="flex items-center gap-3">
                    <Link
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background text-sm font-medium rounded-full hover:bg-foreground/90 transition-colors"
                    >
                      Read on Medium
                      <ExternalLink size={14} />
                    </Link>
                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-border text-foreground text-sm font-medium rounded-full hover:bg-muted transition-colors"
                    >
                      Get in Touch
                    </Link>
                  </div>
                </div>
              </div>
            </footer>
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}
