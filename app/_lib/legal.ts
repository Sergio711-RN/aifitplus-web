// Details used by the Privacy Policy and the Terms. `null` renders a highlighted «fill me» mark on the page,
// so nothing goes live with an invented value.

import type { Locale } from "../_i18n/config";

export const LEGAL = {
  /** Legal name of the operator company */
  operatorName: null as string | null,
  /** Company registration number */
  operatorIds: null as string | null,
  /** Postal address of the operator */
  operatorAddress: null as string | null,
  /** Address for privacy requests and support */
  contactEmail: null as string | null,
  /** Country whose law governs the Terms, per language: en «the Republic of Cyprus», uk «Республіки Кіпр», ru «Республики Кипр» */
  governingLaw: { en: null, uk: null, ru: null } as Record<Locale, string | null>,
  /** Minimum age to use the app */
  minAge: 16,
  /** How long the hosting provider keeps backups after deletion, days */
  backupRetentionDays: 30,
  /** Date both documents take effect, ISO; shown in each language's format */
  effectiveDate: "2026-10-01",
};
