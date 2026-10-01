import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  // Plain files for Apache on the shared hosting (no Node.js there): `next build` writes the site to `out/`;
  // language redirects, 404s and caching are in `public/.htaccess`
  output: "export",
  // `next dev` does not read `.htaccess`: «/» opens the default language there
  ...(isDev && { redirects: async () => [{ source: "/", destination: "/en", permanent: false }] }),
  // The root layout sits under `[lang]`, so unmatched URLs need their own full-page 404 (`app/global-not-found.tsx`)
  experimental: {
    globalNotFound: true,
  },
  images: {
    // Dish photos from Unsplash (free licence), resized by Unsplash: there is no image optimiser in a static export
    loaderFile: "./app/_lib/image-loader.ts",
  },
};

export default nextConfig;
