"use client";

import { motion, useTransform, type MotionValue } from "motion/react";
import type { ReactNode } from "react";

// The «glass» from the app's Home screen (aifitplus/src/components/glass-meter.tsx): eaten calories rise like liquid.
// Here the level is a motion value, so it can follow scroll or a spring.

/** Two periods of a soft wave on a 200×10 canvas; the strip is twice as wide as the glass and slides left */
const WAVE = "M0 5 Q25 0 50 5 T100 5 T150 5 T200 5 V10 H0 Z";

interface IGlassMeterProps {
  level: MotionValue<number>;
  width: number;
  height: number;
  children?: ReactNode;
  className?: string;
}

export const GlassMeter = ({ level, width, height, children, className }: IGlassMeterProps) => {
  const padding = Math.round(width / 14);
  const liquidHeight = useTransform(level, (value) => `${Math.min(Math.max(value, 0), 1) * 100}%`);

  return (
    <div
      className={`relative border-2 border-line ${className ?? ""}`}
      style={{ width, height, borderRadius: width / 2, padding }}
    >
      <div className="relative flex h-full items-end overflow-hidden bg-surface" style={{ borderRadius: width }}>
        <motion.div className="relative w-full bg-apricot" style={{ height: liquidHeight }}>
          <svg
            className="animate-wave absolute -top-[9px] left-0 h-[10px] w-[200%] opacity-50"
            style={{ animationDuration: "3.8s" }}
            viewBox="0 0 200 10"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path d={WAVE} fill="var(--color-apricot)" />
          </svg>
          <svg
            className="animate-wave absolute -top-[9px] left-0 h-[10px] w-[200%]"
            viewBox="0 0 200 10"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path d={WAVE} fill="var(--color-apricot)" />
          </svg>
          {/* Bubbles rising through the liquid */}
          <span className="absolute inset-0 overflow-hidden">
            {[18, 46, 70].map((left, index) => (
              <span
                key={left}
                className="absolute bottom-0 size-1.5 rounded-full bg-ink/25"
                style={{
                  left: `${left}%`,
                  animation: `bubble-${height} ${2.4 + index * 0.7}s ${index * 0.6}s ease-in infinite`,
                }}
              />
            ))}
          </span>
        </motion.div>
        {children}
      </div>
      <div className="absolute flex flex-col justify-evenly" style={{ top: padding, bottom: padding, right: padding + 6 }}>
        {[0, 1, 2].map((tick) => (
          <span key={tick} className="block h-0.5 w-2.5 rounded-full bg-text/20" />
        ))}
      </div>
      <style>{`@keyframes bubble-${height} { from { transform: translateY(0); opacity: 0 } 20% { opacity: 1 } to { transform: translateY(-${height}px); opacity: 0 } }`}</style>
    </div>
  );
};
