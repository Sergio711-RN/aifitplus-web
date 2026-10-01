import type { Metadata } from "next";
import { Commissioner } from "next/font/google";
import { NotFoundView, notFoundLocale } from "./_components/not-found-view";
import { getDictionary } from "./_i18n/dictionaries";
import "./globals.css";

// Any URL that matches no route. Renders without the `[lang]` layout, so it brings its own font and styles;
// the language comes from the URL prefix via `proxy.ts`

const commissioner = Commissioner({
  variable: "--font-commissioner",
  subsets: ["latin", "cyrillic"],
  axes: ["FLAR", "VOLM"],
});

export const generateMetadata = async (): Promise<Metadata> => ({
  title: getDictionary(await notFoundLocale()).notFound.metaTitle,
  robots: { index: false },
});

export default async function GlobalNotFound() {
  const locale = await notFoundLocale();

  return (
    <html lang={locale} className={`${commissioner.variable} antialiased`}>
      <body className="grain min-h-dvh">
        <NotFoundView locale={locale} />
      </body>
    </html>
  );
}
