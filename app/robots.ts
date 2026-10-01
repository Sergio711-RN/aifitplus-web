import type { MetadataRoute } from "next";
import { SITE_URL } from "./_i18n/seo";

// Written to a file at build time (static export)
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
