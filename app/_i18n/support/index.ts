import type { Locale } from "../config";
import type { ILegalDocument } from "../legal/types";
import { supportDe } from "./de";
import { supportEn } from "./en";
import { supportEs } from "./es";
import { supportFr } from "./fr";
import { supportIt } from "./it";
import { supportRu } from "./ru";
import { supportUk } from "./uk";

// Support page (`/{lang}/support`): the address given to the App Store and Google Play as the support URL.
// The app's labels are quoted as they are in `../aifitplus/src/i18n/locales/` (Ukrainian — as in the site's Privacy Policy)
export const SUPPORT: Record<Locale, ILegalDocument> = {
  en: supportEn,
  uk: supportUk,
  ru: supportRu,
  fr: supportFr,
  de: supportDe,
  es: supportEs,
  it: supportIt,
};
