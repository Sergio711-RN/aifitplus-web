"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOCALE_META, LOCALES } from "../_i18n/config";
import { useI18n } from "../_i18n/i18n-provider";
import { AppMark } from "./app-mark";
import { localizedPath, rememberLocale } from "./lang-switch";

export const Footer = () => {
  const { locale, t } = useI18n();
  const pathname = usePathname();

  return (
    <footer className="border-t border-line/70 px-5 py-10 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 text-[14px] text-text-3 md:flex-row md:items-center">
        <div className="flex items-center gap-2">
          <AppMark size={24} animated={false} />
          <span className="font-extrabold text-text">
            AIFit<span className="text-apricot">+</span>
          </span>
          <span className="ml-2">© 2026</span>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href={`/${locale}/privacy`} className="transition-colors hover:text-text">
            {t.footer.privacy}
          </Link>
          <Link href={`/${locale}/terms`} className="transition-colors hover:text-text">
            {t.footer.terms}
          </Link>
        </nav>
        <nav aria-label={t.nav.language} className="flex gap-1">
          {LOCALES.map((option) => (
            <Link
              key={option}
              href={localizedPath(pathname, option)}
              hrefLang={option}
              lang={option}
              aria-current={option === locale ? "page" : undefined}
              onClick={() => rememberLocale(option)}
              className={`rounded-full px-3 py-1.5 transition-colors ${option === locale ? "bg-surface text-text" : "hover:text-text"}`}
            >
              {LOCALE_META[option].name}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
};
