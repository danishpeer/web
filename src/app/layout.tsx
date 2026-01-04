import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

/**
 * Font Configuration
 * Using Inter for a clean, modern look with light weights
 * Matches the elegant thin typography in the design
 */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

/**
 * Metadata Configuration
 * SEO and social sharing metadata for the portfolio
 */
export const metadata: Metadata = {
  title: "Danish Khursheed | Software Engineer",
  description:
    "Software Engineer specializing in scalable backend systems, AI/ML integration, and distributed architectures. Currently at Swiggy, building systems serving 14M+ users.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  keywords: [
    "Software Engineer",
    "Backend Developer",
    "Full Stack Developer",
    "AI/ML Engineer",
    "System Design",
    "Swiggy",
    "Oracle",
    "React",
    "Node.js",
    "Go",
    "Java",
    "Python",
    "PyTorch",
  ],
  authors: [{ name: "Danish Khursheed" }],
  creator: "Danish Khursheed",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://danishkhursheed.vercel.app",
    title: "Danish Khursheed | Software Engineer",
    description:
      "Software Engineer specializing in scalable backend systems, AI/ML integration, and distributed architectures.",
    siteName: "Danish Khursheed Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Danish Khursheed | Software Engineer",
    description:
      "Software Engineer specializing in scalable backend systems, AI/ML integration, and distributed architectures.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/**
 * Root Layout Component
 * Wraps all pages with consistent fonts and styling
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
