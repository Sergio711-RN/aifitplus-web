"use client";

import { motion } from "motion/react";

export interface IGlow {
  /** Position, size, colour and blur */
  className: string;
  x: number[];
  y: number[];
  duration: number;
}

/** Evening-sky backdrop of a page section: a vertical gradient that starts and ends in `ink`, so sections join without a seam, and slowly drifting glows */
export const SectionBackdrop = ({ glows }: { glows: IGlow[] }) => (
  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
    <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--color-ink)_0%,var(--color-dusk)_45%,var(--color-dusk-deep)_70%,var(--color-ink)_100%)]" />
    {glows.map((glow) => (
      <motion.div
        key={glow.className}
        className={`absolute rounded-full ${glow.className}`}
        animate={{ x: glow.x, y: glow.y }}
        transition={{ duration: glow.duration, repeat: Infinity, ease: "easeInOut" }}
      />
    ))}
  </div>
);
