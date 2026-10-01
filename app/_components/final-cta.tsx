"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { useI18n } from "../_i18n/i18n-provider";
import { sparkPath } from "./app-mark";
import { FlairText } from "./flair-text";
import { StoreButtons } from "./store-buttons";

const BARS = [
  { x: 38, height: 58, color: "var(--color-apricot)" },
  { x: 69, height: 86, color: "var(--color-lilac)" },
  { x: 100, height: 70, color: "var(--color-mint)" },
];

/** The app mark assembling itself with scroll: bars grow from the floor one after another, the spark drops in and spins */
const AssemblingMark = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 95%", "center 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 20 });
  const bar0 = useTransform(progress, [0, 0.5], [0, 1]);
  const bar1 = useTransform(progress, [0.15, 0.7], [0, 1]);
  const bar2 = useTransform(progress, [0.3, 0.85], [0, 1]);
  const sparkY = useTransform(progress, [0.6, 1], [-60, 0]);
  const sparkOpacity = useTransform(progress, [0.6, 0.9], [0, 1]);
  const sparkRotate = useTransform(progress, [0.6, 1], [-180, 0]);
  const scales = [bar0, bar1, bar2];

  return (
    <div ref={ref} className="relative mx-auto size-40 md:size-52">
      <div className="absolute inset-0 rounded-[28%] border border-line bg-ink shadow-[0_30px_80px_-20px_rgba(183,166,255,0.35)]" />
      <svg viewBox="0 0 160 160" className="relative size-full" aria-hidden>
        {BARS.map((bar, index) => (
          <motion.g key={bar.x} style={{ scaleY: scales[index], originY: 1, transformBox: "fill-box" }}>
            <rect
              x={bar.x}
              y={136 - bar.height}
              width={22}
              height={bar.height}
              rx={11}
              fill={bar.color}
              className="animate-pulse-bar"
              style={{ transformBox: "fill-box", transformOrigin: "bottom", animationDelay: `${index * 0.2}s` }}
            />
          </motion.g>
        ))}
        <motion.g style={{ y: sparkY, opacity: sparkOpacity, rotate: sparkRotate, transformBox: "fill-box", originX: 0.5, originY: 0.5 }}>
          <path
            d={sparkPath(80, 34, 10)}
            fill="var(--color-text)"
            className="animate-spin-slow"
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
          />
        </motion.g>
      </svg>
    </div>
  );
};

export const FinalCta = () => {
  const { t } = useI18n();

  return (
    <section id="download" className="relative overflow-hidden px-5 pt-28 pb-24 text-center md:px-10 md:pt-40">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[70%] bg-[radial-gradient(60%_60%_at_50%_100%,rgba(255,176,120,0.16),transparent)]" />
      <AssemblingMark />
      <FlairText
        as="h2"
        text={t.cta.title}
        className="mx-auto mt-12 max-w-[14ch] text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.98] tracking-[-0.035em]"
        weight={780}
        radius={180}
      />
      <p className="mx-auto mt-6 max-w-md text-[18px] leading-relaxed text-text-2">
        {t.cta.text}
      </p>
      <StoreButtons className="mt-10 justify-center" />
    </section>
  );
};
