"use client";

import type { ReactNode } from "react";
import { es } from "../dictionaries/es";
import { DictionaryProvider } from "../i18n-provider";

export const I18nProviderEs = ({ children }: { children: ReactNode }) => (
  <DictionaryProvider locale="es" t={es}>
    {children}
  </DictionaryProvider>
);
