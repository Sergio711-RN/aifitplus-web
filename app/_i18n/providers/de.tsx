"use client";

import type { ReactNode } from "react";
import { de } from "../dictionaries/de";
import { DictionaryProvider } from "../i18n-provider";

export const I18nProviderDe = ({ children }: { children: ReactNode }) => (
  <DictionaryProvider locale="de" t={de}>
    {children}
  </DictionaryProvider>
);
