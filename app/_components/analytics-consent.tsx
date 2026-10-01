"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useState, useSyncExternalStore } from "react";
import { useI18n } from "../_i18n/i18n-provider";
import { ANALYTICS_HOST, CONSENT_KEY, CONSENT_OPEN_EVENT, GA_ID } from "../_lib/analytics";

type Choice = "granted" | "denied";
/** "unanswered" — banner not answered yet; "unknown" — server render, the answer lives in the browser only */
type Stored = Choice | "unanswered" | "unknown";

const CHANGE_EVENT = "aifit:consent-change";

// Fallback when storage is blocked (private mode): the answer holds until the page is closed
let memoryChoice: Choice | null = null;

const readChoice = (): Stored => {
  try {
    const value = localStorage.getItem(CONSENT_KEY);
    if (value === "granted" || value === "denied") return value;
  } catch {
    // Falls back to memory
  }

  return memoryChoice ?? "unanswered";
};

const saveChoice = (choice: Choice) => {
  memoryChoice = choice;
  try {
    localStorage.setItem(CONSENT_KEY, choice);
  } catch {
    // Kept in memory only
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
};

// The answer as an external store: same value in every tab («storage»), nothing rendered on the server
const subscribe = (onChange: () => void) => {
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange);

  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
};

/** Withdrawn consent: Google's opt-out flag stops the tag already on the page, its cookies (`_ga`, `_ga_*`) are removed */
const stopAnalytics = () => {
  (window as unknown as Record<string, boolean>)[`ga-disable-${GA_ID}`] = true;
  const domains = ["", `; domain=${location.hostname}`, `; domain=.${location.hostname}`];
  document.cookie
    .split(";")
    .map((cookie) => cookie.split("=")[0].trim())
    .filter((name) => name === "_ga" || name.startsWith("_ga_"))
    .forEach((name) => domains.forEach((domain) => (document.cookie = `${name}=; path=/; max-age=0${domain}`)));
};

// Google Analytics loads only after «Accept» — before that nothing goes to Google, not even cookieless pings.
// Ad features stay off. Page changes without reload are counted by GA's enhanced measurement (history events).
const GA_INIT = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', { analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
gtag('js', new Date());
gtag('config', '${GA_ID}');
`;

/** Consent banner at the bottom of the screen and, once accepted, the Google tag. Reopened from the footer */
export const AnalyticsConsent = () => {
  const { locale, t } = useI18n();
  const choice = useSyncExternalStore(subscribe, readChoice, (): Stored => "unknown");
  const [isReopened, setIsReopened] = useState(false);
  const isOpen = choice === "unanswered" || isReopened;

  useEffect(() => {
    const onOpen = () => setIsReopened(true);
    window.addEventListener(CONSENT_OPEN_EVENT, onOpen);

    return () => window.removeEventListener(CONSENT_OPEN_EVENT, onOpen);
  }, []);

  const answer = (next: Choice) => {
    if (next === "denied" && choice === "granted") stopAnalytics();
    if (next === "granted") delete (window as unknown as Record<string, boolean>)[`ga-disable-${GA_ID}`];
    saveChoice(next);
    setIsReopened(false);
  };

  const isTracking = choice === "granted" && location.hostname === ANALYTICS_HOST;

  return (
    <>
      {isTracking && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">
            {GA_INIT}
          </Script>
        </>
      )}
      <AnimatePresence>
        {isOpen && (
          <motion.section
            role="region"
            aria-label={t.consent.label}
            className="fixed inset-x-3 bottom-[max(12px,env(safe-area-inset-bottom))] z-50 mx-auto max-w-[440px] rounded-2xl border border-line bg-surface-raised/95 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:left-6 sm:mx-0 sm:p-5"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[14px] leading-relaxed text-text-2">
              {t.consent.text}{" "}
              <Link href={`/${locale}/privacy#data`} className="text-text underline decoration-line underline-offset-4 hover:decoration-text">
                {t.consent.more}
              </Link>
            </p>
            {/* Declining is as easy as accepting: same size, side by side */}
            <div className="mt-4 grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => answer("denied")}
                className="rounded-full border border-line px-4 py-2.5 text-[15px] font-semibold text-text-2 transition-colors hover:border-text-off hover:text-text"
              >
                {t.consent.decline}
              </button>
              <button
                type="button"
                onClick={() => answer("granted")}
                className="rounded-full bg-apricot px-4 py-2.5 text-[15px] font-bold text-ink transition-colors hover:bg-apricot-light"
              >
                {t.consent.accept}
              </button>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};
