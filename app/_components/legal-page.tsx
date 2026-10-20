"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { LOCALE_META } from "../_i18n/config";
import { useI18n } from "../_i18n/i18n-provider";
import { LEGAL } from "../_lib/legal";
import { AppMark } from "./app-mark";
import { LangSwitch } from "./lang-switch";
import { ScrollProgress } from "./scroll-progress";

export interface ILegalSection {
  id: string;
  title: string;
  body: ReactNode;
}

interface ILegalPageProps {
  title: string;
  lead: ReactNode;
  sections: ILegalSection[];
  /** Other pages, linked under the title */
  links: { href: string; label: string }[];
  /** «Effective from» date under the title; not for pages that are not a legal document */
  effective?: boolean;
}

/** Last section whose top has crossed the upper third of the screen */
const useActiveSection = (ids: string[]) => {
  const [active, setActive] = useState(ids[0]);
  const key = ids.join();

  useEffect(() => {
    const elements = key.split(",").map((id) => document.getElementById(id)).filter((element) => element !== null);
    let frame = 0;

    const update = () => {
      frame = 0;
      const line = window.innerHeight / 3;
      const current = elements.filter((element) => element.getBoundingClientRect().top <= line).at(-1) ?? elements[0];
      if (current) setActive(current.id);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    // The browser jumps to a #section link after the first paint, so check again once it has
    const afterJump = window.setTimeout(onScroll, 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(afterJump);
      cancelAnimationFrame(frame);
    };
  }, [key]);

  return active;
};

export const LegalPage = ({ title, lead, sections, links, effective = true }: ILegalPageProps) => {
  const { locale, t } = useI18n();
  const effectiveDate = new Intl.DateTimeFormat(LOCALE_META[locale].intl, { dateStyle: "long" }).format(new Date(LEGAL.effectiveDate));
  const ids = sections.map((section) => section.id);
  const active = useActiveSection(ids);

  return (
    <>
      <ScrollProgress />
      <header className="sticky top-0 z-40 border-b border-line/60 bg-ink/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-10">
          <Link href={`/${locale}`} className="flex items-center gap-2" aria-label={t.nav.toHome}>
            <AppMark size={28} />
            <span className="text-xl font-extrabold tracking-tight">
              AIFit<span className="text-apricot">+</span>
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <LangSwitch />
            <Link
              href={`/${locale}#download`}
              className="rounded-full bg-apricot px-4 py-2.5 text-[15px] font-bold whitespace-nowrap text-ink transition-colors hover:bg-apricot-light sm:px-5"
            >
              <span className="sm:hidden">{t.nav.ctaShort}</span>
              <span className="hidden sm:inline">{t.nav.cta}</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="relative px-5 pt-16 pb-28 md:px-10 md:pt-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(50%_60%_at_20%_0%,rgba(183,166,255,0.12),transparent)]" />
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-[clamp(1.85rem,7.6vw,4rem)] leading-[1] font-extrabold tracking-[-0.035em]">{title}</h1>
            <p className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-[15px] text-text-3">
              {effective && <span>{t.legal.effective(effectiveDate)}</span>}
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="text-apricot underline-offset-4 hover:underline">
                  {link.label}
                </Link>
              ))}
            </p>
            <div className="mt-8 text-[clamp(1.05rem,1.5vw,1.2rem)] leading-relaxed text-text-2">{lead}</div>
          </motion.div>

          <div className="mt-16 grid gap-12 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16">
            {/* Contents */}
            <nav aria-label={t.legal.contents} className="hidden lg:block">
              <ol className="sticky top-28 space-y-0.5 border-l border-line">
                {sections.map((section, index) => (
                  <li key={section.id} className="relative">
                    {active === section.id && (
                      <motion.span
                        layoutId="toc-indicator"
                        className="absolute top-0 bottom-0 -left-px w-0.5 rounded-full bg-apricot"
                        transition={{ type: "spring", stiffness: 400, damping: 36 }}
                      />
                    )}
                    <a
                      href={`#${section.id}`}
                      className={`flex gap-2 py-1.5 pl-4 text-[14px] leading-snug transition-colors ${
                        active === section.id ? "text-text" : "text-text-3 hover:text-text-2"
                      }`}
                    >
                      <span className="tabular-nums">{index + 1}.</span>
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <article className="legal max-w-[68ch]">
              {sections.map((section, index) => (
                <section key={section.id} id={section.id} className="scroll-mt-28 border-t border-line/60 pt-10 pb-6 first:border-t-0 first:pt-0">
                  <h2 className="text-[clamp(1.4rem,2.4vw,1.75rem)] leading-tight font-bold tracking-tight">
                    <span className="mr-2 text-text-3 tabular-nums">{index + 1}.</span>
                    {section.title}
                  </h2>
                  <div className="mt-5">{section.body}</div>
                </section>
              ))}
            </article>
          </div>
        </div>
      </main>
    </>
  );
};

/** Value still to be filled in `app/_lib/legal.ts` */
export const Fill = ({ value, label }: { value: string | number | null; label: string }) =>
  value === null ? (
    <mark className="rounded-md border border-dashed border-apricot/60 bg-apricot/10 px-1.5 py-0.5 text-apricot">[{label}]</mark>
  ) : (
    <>{value}</>
  );
