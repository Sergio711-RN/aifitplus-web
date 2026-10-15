"use client";

import type { ReactNode } from "react";
import { fr } from "../dictionaries/fr";
import { DictionaryProvider } from "../i18n-provider";

export const I18nProviderFr = ({ children }: { children: ReactNode }) => (
  <DictionaryProvider locale="fr" t={fr}>
    {children}
  </DictionaryProvider>
);
