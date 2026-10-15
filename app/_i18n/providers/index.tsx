"use client";

// The client language provider: the module of each language (`./en`, `./ru`…) holds only its dictionary and is loaded
// with `next/dynamic`, so a page downloads one dictionary instead of all seven. It must be a Client Component — a
// dynamic import in a Server Component is not code-split. Rendered on the server too: the HTML has every text
import dynamic from "next/dynamic";
import type { ComponentType, ReactNode } from "react";
import type { Locale } from "../config";

type Provider = ComponentType<{ children: ReactNode }>;

const PROVIDERS: Record<Locale, Provider> = {
  en: dynamic(() => import("./en").then((module) => module.I18nProviderEn)),
  uk: dynamic(() => import("./uk").then((module) => module.I18nProviderUk)),
  ru: dynamic(() => import("./ru").then((module) => module.I18nProviderRu)),
  fr: dynamic(() => import("./fr").then((module) => module.I18nProviderFr)),
  de: dynamic(() => import("./de").then((module) => module.I18nProviderDe)),
  es: dynamic(() => import("./es").then((module) => module.I18nProviderEs)),
  it: dynamic(() => import("./it").then((module) => module.I18nProviderIt)),
};

export const I18nProvider = ({ locale, children }: { locale: Locale; children: ReactNode }) => {
  const Provider = PROVIDERS[locale];

  return <Provider>{children}</Provider>;
};
