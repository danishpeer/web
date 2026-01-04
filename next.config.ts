import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-images-1.medium.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "miro.medium.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "medium.com",
        pathname: "/**",
      },
      {
        // Wildcard for all Medium subdomains
        protocol: "https",
        hostname: "**.medium.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
