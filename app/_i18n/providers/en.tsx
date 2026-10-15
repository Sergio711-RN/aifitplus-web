"use client";

import type { ReactNode } from "react";
import { en } from "../dictionaries/en";
import { DictionaryProvider } from "../i18n-provider";

export const I18nProviderEn = ({ children }: { children: ReactNode }) => (
  <DictionaryProvider locale="en" t={en}>
    {children}
  </DictionaryProvider>
);
