import type { MetadataRoute } from "next";
import { LOCALES } from "./_i18n/config";
import { SITE_URL } from "./_i18n/seo";
import { LEGAL } from "./_lib/legal";

// Written to a file at build time (static export)
export const dynamic = "force-static";

/** Pages without the language prefix */
const PAGES = [
  { path: "", changeFrequency: "monthly", priority: 1 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  { path: "/support", changeFrequency: "monthly", priority: 0.5 },
] as const;

// Every language version of every page, each listing its siblings so search engines link them as translations
export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.flatMap(({ path, changeFrequency, priority }) =>
    LOCALES.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified: new Date(LEGAL.effectiveDate),
      changeFrequency,
      priority,
      alternates: { languages: Object.fromEntries(LOCALES.map((other) => [other, `${SITE_URL}/${other}${path}`])) },
    })),
  );
}
