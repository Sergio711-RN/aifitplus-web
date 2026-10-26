import type { Locale } from "../config";
import { healthDataEn } from "./health-data.en";
import { privacyDe } from "./privacy.de";
import { privacyEn } from "./privacy.en";
import { privacyEs } from "./privacy.es";
import { privacyFr } from "./privacy.fr";
import { privacyIt } from "./privacy.it";
import { privacyRu } from "./privacy.ru";
import { privacyUk } from "./privacy.uk";
import { termsDe } from "./terms.de";
import { termsEn } from "./terms.en";
import { termsEs } from "./terms.es";
import { termsFr } from "./terms.fr";
import { termsIt } from "./terms.it";
import { termsRu } from "./terms.ru";
import { termsUk } from "./terms.uk";
import type { ILegalDocument } from "./types";

export { HEALTH_DATA_META } from "./health-data.en";

export const PRIVACY: Record<Locale, ILegalDocument> = {
  en: privacyEn,
  uk: privacyUk,
  ru: privacyRu,
  fr: privacyFr,
  de: privacyDe,
  es: privacyEs,
  it: privacyIt,
};
export const TERMS: Record<Locale, ILegalDocument> = {
  en: termsEn,
  uk: termsUk,
  ru: termsRu,
  fr: termsFr,
  de: termsDe,
  es: termsEs,
  it: termsIt,
};

/** Consumer Health Data Privacy Policy: English only, at /en/health-data */
export const HEALTH_DATA: ILegalDocument = healthDataEn;
