"use client";

import { animate, motion, useInView, useMotionValue, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import { useI18n } from "../_i18n/i18n-provider";

/** Number that rolls to `value` once visible, and from the previous value on every change */
export const CountUp = ({ value, duration = 1.2, className }: { value: number; duration?: number; className?: string }) => {
  const { formatNumber } = useI18n();
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const current = useMotionValue(0);
  const text = useTransform(current, (latest) => formatNumber(Math.round(latest)));

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(current, value, { duration, ease: [0.16, 1, 0.3, 1] });

    return () => controls.stop();
  }, [current, duration, isInView, value]);

  return (
    <motion.span ref={ref} className={`tabular-nums ${className ?? ""}`}>
      {text}
    </motion.span>
  );
};
