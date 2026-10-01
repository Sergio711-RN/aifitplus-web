"use client";

import { createContext, useContext, type ReactNode } from "react";
import { LOCALE_META, type Locale } from "./config";
import { DICTIONARIES } from "./dictionaries";
import type { Dictionary } from "./dictionaries/ru";

interface II18n {
  locale: Locale;
  t: Dictionary;
  /** Number in the locale's format: 2 200 / 2,200 */
  formatNumber: (value: number) => string;
}

const I18nContext = createContext<II18n | null>(null);

// Dictionaries hold functions, so they are imported here on the client instead of being passed from the server
export const I18nProvider = ({ locale, children }: { locale: Locale; children: ReactNode }) => {
  const format = new Intl.NumberFormat(LOCALE_META[locale].intl);

  return (
    <I18nContext.Provider value={{ locale, t: DICTIONARIES[locale], formatNumber: (value) => format.format(value) }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = (): II18n => {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used inside I18nProvider");

  return context;
};
