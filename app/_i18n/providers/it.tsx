"use client";

import type { ReactNode } from "react";
import { it } from "../dictionaries/it";
import { DictionaryProvider } from "../i18n-provider";

export const I18nProviderIt = ({ children }: { children: ReactNode }) => (
  <DictionaryProvider locale="it" t={it}>
    {children}
  </DictionaryProvider>
);
