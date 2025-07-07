import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable standalone output for Docker optimization
  output: "standalone",

  // Image optimization settings
  images: {
    domains: ["images.unsplash.com", "i.ibb.co"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
    ],
    formats: ["image/webp", "image/avif"],
  },

  // Experimental features for better performance
  experimental: {
    // optimizeCss: true, // Removed due to critters dependency issue
  },

  // Disable source maps in production for security
  productionBrowserSourceMaps: false,

  // Compress responses
  compress: true,

  // PWA and performance optimizations
  poweredByHeader: false,

  // Environment variables
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
};

export default nextConfig;
