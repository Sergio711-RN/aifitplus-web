// Site languages. URLs are always prefixed: /en, /uk, /ru; `public/.htaccess` sends «/» to the visitor's language.

export const LOCALES = ["en", "uk", "ru"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

/** Remembers the language picked in the switcher; read by `public/.htaccess` (the name is hard-coded there) */
export const LOCALE_COOKIE = "NEXT_LOCALE";

export const isLocale = (value: string): value is Locale => (LOCALES as readonly string[]).includes(value);

export const LOCALE_META: Record<Locale, { name: string; short: string; intl: string; openGraph: string }> = {
  en: { name: "English", short: "EN", intl: "en-GB", openGraph: "en_GB" },
  uk: { name: "Українська", short: "UA", intl: "uk-UA", openGraph: "uk_UA" },
  ru: { name: "Русский", short: "RU", intl: "ru-RU", openGraph: "ru_RU" },
};

/** `/privacy` → { en: "/en/privacy", …, "x-default": "/en/privacy" } for `metadata.alternates.languages` */
export const languageAlternates = (path = "") => ({
  ...Object.fromEntries(LOCALES.map((locale) => [locale, `/${locale}${path}`])),
  "x-default": `/${DEFAULT_LOCALE}${path}`,
});
