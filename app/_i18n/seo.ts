import type { Metadata } from "next";
import { languageAlternates, LOCALE_META, LOCALES, type Locale } from "./config";
import { getDictionary } from "./dictionaries";

export const SITE_URL = "https://aifitplus.com";

export const OG_IMAGE_SIZE = { width: 1200, height: 630 };

/**
 * Title, description, canonical URL, `hreflang` alternates, Open Graph and Twitter card for one page in one language.
 * `path` is the page without the language prefix: "" for home, "/privacy".
 * The share image is the language's `/{lang}/og.png` (`app/[lang]/og.png/route.tsx`).
 */
export const pageMetadata = ({ locale, path, title, description }: { locale: Locale; path: string; title: string; description: string }): Metadata => {
  const image = { url: `/${locale}/og.png`, ...OG_IMAGE_SIZE, alt: getDictionary(locale).meta.ogImageAlt, type: "image/png" };

  return {
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
      images: [image],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
};
