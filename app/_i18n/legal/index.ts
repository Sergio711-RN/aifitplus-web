import type { Locale } from "../config";
import { privacyEn } from "./privacy.en";
import { privacyRu } from "./privacy.ru";
import { privacyUk } from "./privacy.uk";
import { termsEn } from "./terms.en";
import { termsRu } from "./terms.ru";
import { termsUk } from "./terms.uk";
import type { ILegalDocument } from "./types";

export const PRIVACY: Record<Locale, ILegalDocument> = { en: privacyEn, uk: privacyUk, ru: privacyRu };
export const TERMS: Record<Locale, ILegalDocument> = { en: termsEn, uk: termsUk, ru: termsRu };
