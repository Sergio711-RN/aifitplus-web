"use client";

import { motion } from "motion/react";
import { useEffect, useRef, type ElementType } from "react";

// Headline set in Commissioner with its own axes as the effect:
// letters arrive thin and blurred and settle at the final weight, then swell («volume» + «flair» + weight)
// around the cursor, like a lens moving over the line.

interface IFlairTextProps {
  text: string;
  as?: ElementType;
  className?: string;
  /** Resting weight */
  weight?: number;
  /** Seconds before the first letter appears */
  delay?: number;
  /** Lens radius in px */
  radius?: number;
}

const settings = (weight: number, volume: number, flair: number) =>
  `"wght" ${weight.toFixed(0)}, "VOLM" ${volume.toFixed(0)}, "FLAR" ${flair.toFixed(0)}`;

export const FlairText = ({ text, as: Tag = "h1", className, weight = 760, delay = 0, radius = 140 }: IFlairTextProps) => {
  const rootRef = useRef<HTMLElement>(null);
  const words = text.split(" ");
  let charIndex = 0;

  useEffect(() => {
    const root = rootRef.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const chars = Array.from(root.querySelectorAll<HTMLSpanElement>("[data-char]"));
    let frame = 0;
    let pointer: { x: number; y: number } | null = null;

    const paint = () => {
      frame = 0;
      for (const char of chars) {
        if (!pointer) {
          char.style.fontVariationSettings = settings(weight, 0, 0);
          continue;
        }
        const rect = char.getBoundingClientRect();
        const distance = Math.hypot(rect.left + rect.width / 2 - pointer.x, rect.top + rect.height / 2 - pointer.y);
        const force = Math.max(0, 1 - distance / radius) ** 1.6;
        char.style.fontVariationSettings = settings(weight + (900 - weight) * force, 100 * force, 100 * force);
      }
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(paint);
    };
    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      pointer = { x: event.clientX, y: event.clientY };
      schedule();
    };
    const onLeave = () => {
      pointer = null;
      schedule();
    };

    root.addEventListener("pointermove", onMove);
    root.addEventListener("pointerleave", onLeave);

    return () => {
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(frame);
    };
  }, [radius, weight]);

  return (
    <Tag ref={rootRef} className={className} aria-label={text}>
      {words.map((word, wordIndex) => [
        wordIndex > 0 && " ",
        <span key={wordIndex} className="inline-block whitespace-nowrap" aria-hidden>
          {Array.from(word).map((char) => {
            const index = charIndex++;

            return (
              <motion.span
                key={index}
                data-char
                className="inline-block transition-[font-variation-settings] duration-200 ease-out"
                style={{ fontVariationSettings: settings(weight, 0, 0) }}
                initial={{ opacity: 0, y: "0.35em", filter: "blur(10px)", fontVariationSettings: settings(200, 0, 0) }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)", fontVariationSettings: settings(weight, 0, 0) }}
                transition={{ delay: delay + index * 0.022, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                {char}
              </motion.span>
            );
          })}
        </span>,
      ])}
    </Tag>
  );
};
