import type { Metadata, Viewport } from "next";
import { Commissioner } from "next/font/google";
import { notFound } from "next/navigation";
import { AnalyticsConsent } from "../_components/analytics-consent";
import { SmoothScroll } from "../_components/smooth-scroll";
import { isLocale, LOCALES } from "../_i18n/config";
import { getDictionary } from "../_i18n/dictionaries";
import { I18nProvider } from "../_i18n/providers";
import { pageMetadata, SITE_URL } from "../_i18n/seo";
import "../globals.css";

// Same family as the app; variable, with the «flair» and «volume» axes animated in headlines. The CSS has every subset
// (Cyrillic covers Ukrainian too); `subsets` only says what to preload. Only Latin: on /en, /fr, /de, /es, /it no text
// needs the Cyrillic file (42 KB) — the language names in the footer and the menu are set in the system font for that —
// and on /ru and /uk the browser asks for it as soon as the CSS is in
const commissioner = Commissioner({
  variable: "--font-commissioner",
  subsets: ["latin"],
  axes: ["FLAR", "VOLM"],
});

// Only the languages of `LOCALES` exist (/en, /uk, /ru, /fr, /de, /es, /it); anything else is a 404
export const dynamicParams = false;

export const generateStaticParams = () => LOCALES.map((lang) => ({ lang }));

export const generateMetadata = async ({ params }: LayoutProps<"/[lang]">): Promise<Metadata> => {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang);

  return {
    metadataBase: new URL(SITE_URL),
    applicationName: "AIFit+",
    ...pageMetadata({ locale: lang, path: "", title: t.meta.title, description: t.meta.description }),
  };
};

export const viewport: Viewport = {
  themeColor: "#12162B",
};

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html lang={lang} className={`${commissioner.variable} antialiased`}>
      <body className="grain min-h-dvh">
        <I18nProvider locale={lang}>
          <SmoothScroll>
            {children}
            <AnalyticsConsent />
          </SmoothScroll>
        </I18nProvider>
      </body>
    </html>
  );
}
