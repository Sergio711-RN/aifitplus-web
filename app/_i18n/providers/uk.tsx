"use client";

import type { ReactNode } from "react";
import { uk } from "../dictionaries/uk";
import { DictionaryProvider } from "../i18n-provider";

export const I18nProviderUk = ({ children }: { children: ReactNode }) => (
  <DictionaryProvider locale="uk" t={uk}>
    {children}
  </DictionaryProvider>
);
