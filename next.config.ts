import type { NextConfig } from "next";
import { PHOTO_QUERY } from "./app/_lib/photo";

const nextConfig: NextConfig = {
  // The root layout sits under `[lang]`, so unmatched URLs need their own full-page 404 (`app/global-not-found.tsx`)
  experimental: {
    globalNotFound: true,
  },
  images: {
    // Dish photos from Unsplash (free licence); the fixed query asks Unsplash for a 1200px copy instead of the original
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com", pathname: "/photo-*", search: PHOTO_QUERY }],
  },
};

export default nextConfig;
