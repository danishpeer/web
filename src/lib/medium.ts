/**
 * Medium Blog Fetching Utility
 * Fetches and parses blog posts from Medium RSS feed
 */

export interface MediumPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  pubDate: string;
  link: string;
  thumbnail: string;
  categories: string[];
  author: string;
}

// Medium RSS feed URL - Update this with your Medium username
const MEDIUM_USERNAME = "danishkhursheed"; // Change to your Medium username
const MEDIUM_RSS_URL = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`;

/**
 * Extracts the first image from HTML content
 */
function extractThumbnail(content: string): string {
  const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
  if (imgMatch && imgMatch[1]) {
    return imgMatch[1];
  }
  // Default placeholder if no image found
  return "/images/blog-placeholder.png";
}

/**
 * Extracts plain text description from HTML content
 */
function extractDescription(content: string, maxLength: number = 160): string {
  // Remove HTML tags
  const plainText = content
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  
  // Truncate to maxLength
  if (plainText.length > maxLength) {
    return plainText.substring(0, maxLength).trim() + "...";
  }
  return plainText;
}

/**
 * Generates a URL-friendly slug from title
 */
function generateSlug(title: string, guid: string): string {
  // Extract the Medium post ID from the GUID (usually the last part of the URL)
  const guidMatch = guid.match(/\/([^/]+)$/);
  const postId = guidMatch ? guidMatch[1] : "";
  
  // Create slug from title
  const titleSlug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .substring(0, 50);
  
  return `${titleSlug}-${postId.substring(0, 8)}`;
}

/**
 * Fetches blog posts from Medium RSS feed
 */
export async function fetchMediumPosts(): Promise<MediumPost[]> {
  try {
    const response = await fetch(MEDIUM_RSS_URL, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch Medium posts: ${response.status}`);
    }

    const data = await response.json();

    if (data.status !== "ok" || !data.items) {
      console.warn("Medium RSS feed returned no items");
      return [];
    }

    const posts: MediumPost[] = data.items.map((item: {
      guid: string;
      title: string;
      content: string;
      pubDate: string;
      link: string;
      categories?: string[];
      author?: string;
    }) => ({
      id: item.guid,
      title: item.title,
      slug: generateSlug(item.title, item.guid),
      description: extractDescription(item.content),
      content: item.content,
      pubDate: item.pubDate,
      link: item.link,
      thumbnail: extractThumbnail(item.content),
      categories: item.categories || [],
      author: item.author || MEDIUM_USERNAME,
    }));

    return posts;
  } catch (error) {
    console.error("Error fetching Medium posts:", error);
    return [];
  }
}

/**
 * Fetches a single blog post by slug
 */
export async function fetchMediumPostBySlug(slug: string): Promise<MediumPost | null> {
  const posts = await fetchMediumPosts();
  return posts.find((post) => post.slug === slug) || null;
}

/**
 * Gets all blog slugs for static generation
 */
export async function getAllBlogSlugs(): Promise<string[]> {
  const posts = await fetchMediumPosts();
  return posts.map((post) => post.slug);
}

