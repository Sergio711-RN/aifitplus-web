"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { useI18n } from "../_i18n/i18n-provider";
import { AppMark } from "./app-mark";
import { LangSwitch } from "./lang-switch";
import { Magnetic } from "./magnetic";

const LINKS = [
  { href: "#how", key: "how" },
  { href: "#day", key: "day" },
  { href: "#plan", key: "plan" },
] as const;

/** Floating pill header: hides while scrolling down, comes back on the way up, gains glass once off the top */
export const Nav = () => {
  const { t } = useI18n();
  const { scrollY } = useScroll();
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    setIsHidden(current > previous && current > 240);
    setIsScrolled(current > 24);
  });

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: isHidden ? -96 : 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 30 }}
    >
      <nav
        className={`flex w-full max-w-5xl items-center justify-between rounded-full border px-3 py-2 pl-4 transition-colors duration-500 ${
          isScrolled ? "border-line bg-ink/70 backdrop-blur-xl" : "border-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-2" aria-label={t.nav.toTop}>
          <AppMark size={30} />
          <span className="text-xl font-extrabold tracking-tight">
            AIFit<span className="text-apricot">+</span>
          </span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-4 py-2 text-[15px] text-text-2 transition-colors hover:bg-surface hover:text-text"
              >
                {t.nav[link.key]}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <LangSwitch />
          <Magnetic strength={0.25}>
            <a
              href="#download"
              className="block rounded-full bg-apricot px-4 py-2.5 text-[15px] font-bold whitespace-nowrap text-ink transition-colors hover:bg-apricot-light sm:px-5"
            >
              <span className="sm:hidden">{t.nav.ctaShort}</span>
              <span className="hidden sm:inline">{t.nav.cta}</span>
            </a>
          </Magnetic>
        </div>
      </nav>
    </motion.header>
  );
};
