// Google Analytics 4 for the site, only after consent in the banner (`_components/analytics-consent.tsx`).
// What it collects is described in the Privacy Policy, section «data» → «Сайт», in all three languages.

/** Measurement ID of the «aifitplus.com» web stream */
export const GA_ID = "G-LN3E8J2156";

/** Analytics runs on the live site only — not in `next dev` or the local Apache preview */
export const ANALYTICS_HOST = "aifitplus.com";

/** The visitor's answer in the banner, in localStorage: "granted" | "denied" */
export const CONSENT_KEY = "aifit-analytics-consent";

/** Window event that reopens the banner («Cookie settings» in the footer) */
export const CONSENT_OPEN_EVENT = "aifit:consent-open";

export const openConsentSettings = () => window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
