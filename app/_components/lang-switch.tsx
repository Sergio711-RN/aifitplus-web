"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { LOCALE_COOKIE, LOCALE_META, LOCALES, type Locale } from "../_i18n/config";
import { useI18n } from "../_i18n/i18n-provider";

/** Same page in another language: /uk/privacy → /en/privacy */
export const localizedPath = (pathname: string, target: Locale) => {
  const [, , ...rest] = pathname.split("/");

  return `/${[target, ...rest].join("/")}`.replace(/\/$/, "");
};

/** Remembered by `public/.htaccess` when the visitor comes back to «/» */
export const rememberLocale = (locale: Locale) => {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`;
};

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" className="hidden size-4 sm:block" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden>
    <circle cx={12} cy={12} r={9} />
    <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" />
  </svg>
);

/** Language menu: the current language as a pill, the list opens below */
export const LangSwitch = () => {
  const { locale, t } = useI18n();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-label={`${t.nav.language}: ${LOCALE_META[locale].name}`}
        onClick={() => setIsOpen((value) => !value)}
        className="flex h-10 items-center gap-1.5 rounded-full border border-line px-2.5 sm:px-3 text-[14px] font-semibold text-text-2 transition-colors hover:border-text-off hover:text-text"
      >
        <GlobeIcon />
        {LOCALE_META[locale].short}
        <motion.svg viewBox="0 0 12 12" className="size-3" animate={{ rotate: isOpen ? 180 : 0 }} aria-hidden>
          <path d="M3 4.5 6 7.5 9 4.5" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            // System font for the native names: see `--font-system` in globals.css
            className="absolute top-full right-0 z-10 mt-2 min-w-[190px] origin-top-right rounded-2xl border border-line bg-surface-raised/95 p-1.5 font-system shadow-[0_20px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl"
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            {LOCALES.map((option) => (
              <li key={option}>
                <Link
                  href={localizedPath(pathname, option)}
                  hrefLang={option}
                  lang={option}
                  aria-current={option === locale ? "page" : undefined}
                  onClick={() => {
                    rememberLocale(option);
                    setIsOpen(false);
                  }}
                  className={`flex items-center justify-between gap-6 rounded-xl px-3 py-2.5 text-[15px] transition-colors hover:bg-surface-muted ${
                    option === locale ? "text-text" : "text-text-2"
                  }`}
                >
                  {LOCALE_META[option].name}
                  {option === locale ? (
                    <span className="size-2 rounded-full bg-apricot" aria-hidden />
                  ) : (
                    <span className="text-[12px] text-text-3">{LOCALE_META[option].short}</span>
                  )}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};
