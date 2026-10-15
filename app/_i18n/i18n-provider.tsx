"use client";

import { createContext, useContext, type ReactNode } from "react";
import { LOCALE_META, type Locale } from "./config";
import type { Dictionary } from "./dictionaries/ru";

interface II18n {
  locale: Locale;
  t: Dictionary;
  /** Number in the locale's format: 2 200 / 2,200 */
  formatNumber: (value: number) => string;
}

const I18nContext = createContext<II18n | null>(null);

/**
 * Dictionaries hold functions, so they cannot come from the server: each language has its own client module in
 * `providers/` that imports only its dictionary and renders this provider; `I18nProvider` from `providers` loads the
 * page's one with `next/dynamic`, so a page downloads one dictionary, not all seven
 */
export const DictionaryProvider = ({ locale, t, children }: { locale: Locale; t: Dictionary; children: ReactNode }) => {
  const format = new Intl.NumberFormat(LOCALE_META[locale].intl);

  return (
    <I18nContext.Provider value={{ locale, t, formatNumber: (value) => format.format(value) }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = (): II18n => {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used inside I18nProvider (providers/index.tsx)");

  return context;
};
