import type { Metadata } from "next";
import { Commissioner } from "next/font/google";
import { NotFoundView } from "./_components/not-found-view";
import { DEFAULT_LOCALE } from "./_i18n/config";
import { getDictionary } from "./_i18n/dictionaries";
import "./globals.css";

// `out/404.html`: Apache shows it for missing files outside the language folders (the language folders — /en, /uk, /fr… — have their own,
// `app/[lang]/404`). Renders without the `[lang]` layout, so it brings its own font and styles

const commissioner = Commissioner({
  variable: "--font-commissioner",
  subsets: ["latin", "cyrillic"],
  axes: ["FLAR", "VOLM"],
});

export const metadata: Metadata = {
  title: getDictionary(DEFAULT_LOCALE).notFound.metaTitle,
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <html lang={DEFAULT_LOCALE} className={`${commissioner.variable} antialiased`}>
      <body className="grain min-h-dvh">
        <NotFoundView locale={DEFAULT_LOCALE} />
      </body>
    </html>
  );
}
