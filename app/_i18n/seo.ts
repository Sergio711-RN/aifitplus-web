import type { Metadata } from "next";
import { languageAlternates, LOCALE_META, LOCALES, type Locale } from "./config";

export const SITE_URL = "https://aifitplus.com";

/**
 * Title, description, canonical URL, `hreflang` alternates, Open Graph and Twitter card for one page in one language.
 * `path` is the page without the language prefix: "" for home, "/privacy".
 * The share image comes from `app/[lang]/opengraph-image.tsx` and is added by Next automatically.
 */
export const pageMetadata = ({ locale, path, title, description }: { locale: Locale; path: string; title: string; description: string }): Metadata => ({
  title,
  description,
  alternates: { canonical: `/${locale}${path}`, languages: languageAlternates(path) },
  openGraph: {
    type: "website",
    siteName: "AIFit+",
    url: `/${locale}${path}`,
    title,
    description,
    locale: LOCALE_META[locale].openGraph,
    alternateLocale: LOCALES.filter((other) => other !== locale).map((other) => LOCALE_META[other].openGraph),
  },
  twitter: { card: "summary_large_image", title, description },
});
