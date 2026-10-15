"use client";

import type { ReactNode } from "react";
import { ru } from "../dictionaries/ru";
import { DictionaryProvider } from "../i18n-provider";

export const I18nProviderRu = ({ children }: { children: ReactNode }) => (
  <DictionaryProvider locale="ru" t={ru}>
    {children}
  </DictionaryProvider>
);
