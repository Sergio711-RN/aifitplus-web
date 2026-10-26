// Details used by the Privacy Policy, the Terms and the Consumer Health Data Privacy Policy. The registration number is left out on purpose (owner's decision).
// `null` renders a highlighted «fill me» mark on the page,
// so nothing goes live with an invented value.

import type { Locale } from "../_i18n/config";

export const LEGAL = {
  /** The operator is a sole proprietor (ФОП), so the legal name is the owner's full name; per language, nominative case */
  operatorName: {
    en: "Serhii Durytskyi, individual entrepreneur (FOP) registered in Ukraine",
    uk: "ФОП Дурицький Сергій Андрійович",
    ru: "ФОП Дурицкий Сергей Андреевич",
    fr: "Serhii Durytskyi, entrepreneur individuel (FOP) enregistré en Ukraine",
    de: "Serhii Durytskyi, Einzelunternehmer (FOP), registriert in der Ukraine",
    es: "Serhii Durytskyi, empresario individual (FOP) registrado en Ucrania",
    it: "Serhii Durytskyi, imprenditore individuale (FOP) registrato in Ucraina",
  } as Record<Locale, string | null>,
  /** The same name after «between you and…»: instrumental case in Ukrainian and Russian */
  operatorNameWith: {
    en: "Serhii Durytskyi, individual entrepreneur (FOP) registered in Ukraine",
    uk: "ФОП Дурицьким Сергієм Андрійовичем",
    ru: "ФОП Дурицким Сергеем Андреевичем",
    fr: "Serhii Durytskyi, entrepreneur individuel (FOP) enregistré en Ukraine",
    de: "Serhii Durytskyi, Einzelunternehmer (FOP), registriert in der Ukraine",
    es: "Serhii Durytskyi, empresario individual (FOP) registrado en Ucrania",
    it: "Serhii Durytskyi, imprenditore individuale (FOP) registrato in Ucraina",
  } as Record<Locale, string | null>,
  /** Postal address of the operator, per language. Before the release — the city only: the owner is a sole proprietor
   * and the registered address is a home one; must match the address given to the App Store and Google Play */
  operatorAddress: {
    en: "Odesa, 65123, Ukraine",
    uk: "м. Одеса, 65123, Україна",
    ru: "г. Одесса, 65123, Украина",
    fr: "Odessa, 65123, Ukraine",
    de: "Odessa, 65123, Ukraine",
    es: "Odesa, 65123, Ucrania",
    it: "Odessa, 65123, Ucraina",
  } as Record<Locale, string | null>,
  /** Address for privacy requests and support */
  contactEmail: "info@aifitplus.com" as string | null,
  /** Country whose law governs the Terms, per language, in the form the sentence needs: en «the law of Ukraine», uk «право України», ru «право Украины», fr «le droit de l’Ukraine» */
  governingLaw: {
    en: "Ukraine",
    uk: "України",
    ru: "Украины",
    fr: "l’Ukraine",
    de: "der Ukraine",
    es: "Ucrania",
    it: "dell’Ucraina",
  } as Record<Locale, string | null>,
  /** Minimum age to use the app */
  minAge: 16,
  /** How long the hosting provider keeps backups after deletion, days */
  backupRetentionDays: 30,
  /** Date each document takes effect, ISO; shown in each language's format. Separate, so that changing one document
   * does not move the date of the others */
  effectiveDate: {
    privacy: "2026-10-26",
    terms: "2026-10-01",
    healthData: "2026-10-26",
  },
};
