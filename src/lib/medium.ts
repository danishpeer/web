/**
 * Medium Blog Fetching Utility
 * Fetches and parses blog posts from Medium RSS feed
 */

export interface MediumPost {
  id: string;
  title: string;
  pubDate: string;
  link: string;
  thumbnail: string;
  categories: string[];
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
    }) => ({
      id: item.guid,
      title: item.title,
      pubDate: item.pubDate,
      link: item.link,
      thumbnail: extractThumbnail(item.content),
      categories: item.categories || [],
    }));

    return posts;
  } catch (error) {
    console.error("Error fetching Medium posts:", error);
    return [];
  }
}
