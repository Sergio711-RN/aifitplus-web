import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NotFoundView } from "../../_components/not-found-view";
import { isLocale } from "../../_i18n/config";
import { getDictionary } from "../../_i18n/dictionaries";

// 404 in the visitor's language: `public/.htaccess` shows `out/{lang}/404.html` for a missing page under /{lang}/.
// Not in the sitemap and not indexed
export const generateMetadata = async ({ params }: PageProps<"/[lang]/404">): Promise<Metadata> => {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  // No canonical or hreflang inherited from the home page
  return { title: getDictionary(lang).notFound.metaTitle, robots: { index: false }, alternates: null };
};

export default async function NotFoundPage({ params }: PageProps<"/[lang]/404">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return <NotFoundView locale={lang} />;
}
