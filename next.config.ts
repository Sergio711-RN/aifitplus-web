import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  // Plain files for Apache on the shared hosting (no Node.js there): `next build` writes the site to `out/`;
  // language redirects, 404s and caching are in `public/.htaccess`
  output: "export",
  // `next dev` does not read `.htaccess`: «/» opens the default language there, and the English-only
  // Consumer Health Data Privacy Policy opens from every language
  ...(isDev && {
    redirects: async () => [
      { source: "/", destination: "/en", permanent: false },
      { source: "/:lang(uk|ru|fr|de|es|it)/health-data", destination: "/en/health-data", permanent: false },
    ],
  }),
  // The root layout sits under `[lang]`, so unmatched URLs need their own full-page 404 (`app/global-not-found.tsx`)
  experimental: {
    globalNotFound: true,
  },
  images: {
    // There is no image optimiser in a static export: dish photos are ready files in `public/photos`, one per width below
    // (`scripts/build-photos.mjs` — keep its list in step with these two)
    loader: "custom",
    loaderFile: "./app/_lib/image-loader.ts",
    imageSizes: [32, 64, 96, 128, 256, 384],
    deviceSizes: [640],
  },
};

export default nextConfig;
