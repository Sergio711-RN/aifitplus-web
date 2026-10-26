import type { MetadataRoute } from "next";
import { LOCALES, type Locale } from "./_i18n/config";
import { SITE_URL } from "./_i18n/seo";
import { LEGAL } from "./_lib/legal";

// Written to a file at build time (static export)
export const dynamic = "force-static";

/** Pages without the language prefix; `locales` — for a page that is not translated, `modified` — documents' effective dates */
const PAGES: { path: string; changeFrequency: "monthly" | "yearly"; priority: number; modified?: string; locales?: readonly Locale[] }[] = [
  { path: "", changeFrequency: "monthly", priority: 1 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3, modified: LEGAL.effectiveDate.privacy },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3, modified: LEGAL.effectiveDate.terms },
  { path: "/health-data", changeFrequency: "yearly", priority: 0.3, modified: LEGAL.effectiveDate.healthData, locales: ["en"] },
  { path: "/support", changeFrequency: "monthly", priority: 0.5 },
];

// Every language version of every page, each listing its siblings so search engines link them as translations
export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.flatMap(({ path, changeFrequency, priority, modified, locales = LOCALES }) =>
    locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      ...(modified && { lastModified: new Date(modified) }),
      changeFrequency,
      priority,
      ...(locales.length > 1 && {
        alternates: { languages: Object.fromEntries(locales.map((other) => [other, `${SITE_URL}/${other}${path}`])) },
      }),
    })),
  );
}
