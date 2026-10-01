import type { MetadataRoute } from "next";
import { getDictionary } from "./_i18n/dictionaries";

// Written to a file at build time (static export)
export const dynamic = "force-static";

// One manifest for the whole site, in the default language; icons come from `npm run icons`
export default function manifest(): MetadataRoute.Manifest {
  const t = getDictionary("en");

  return {
    name: "AIFit+",
    short_name: "AIFit+",
    description: t.meta.description,
    start_url: "/",
    display: "browser",
    background_color: "#12162B",
    theme_color: "#12162B",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icons/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
