"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useI18n } from "../_i18n/i18n-provider";
import { MEALS, type IMeal, type MealType } from "../_lib/content";
import { sparkPath } from "./app-mark";
import { CountUp } from "./count-up";
import { FoodThumb } from "./food-thumb";

// Camera screen of the app in a loop: the live view focuses on a plate, the beam sweeps it, the shutter flashes,
// the AI finds the dish and the result card rises with calories and macros.

const MEAL_TYPES: MealType[] = ["breakfast", "lunch", "snack"];

const SEQUENCE: { meal: IMeal; mealType: MealType }[] = [
  { meal: MEALS.fruitBowl, mealType: "breakfast" },
  { meal: MEALS.bowl, mealType: "lunch" },
  { meal: MEALS.yogurt, mealType: "snack" },
];

const SCAN_MS = 2400;
const RESULT_MS = 3200;

type Phase = "scan" | "result";

/** Points the «AI» marks on the dish while it looks at it, in % of the viewfinder */
const PROBES = [
  { x: 36, y: 38 },
  { x: 64, y: 34 },
  { x: 48, y: 60 },
  { x: 68, y: 62 },
];

const CORNERS = [
  "top-0 left-0 rounded-tl-2xl border-t-[3px] border-l-[3px]",
  "bottom-0 left-0 rounded-bl-2xl border-b-[3px] border-l-[3px]",
  "right-0 bottom-0 rounded-br-2xl border-r-[3px] border-b-[3px]",
];

/** The next dish comes into focus, the previous one falls out of it */
const REFOCUS = {
  initial: { opacity: 0, scale: 1.2, filter: "blur(14px)" },
  animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
  exit: { opacity: 0, scale: 0.94, filter: "blur(8px)" },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
} as const;

interface IMacroBarProps {
  label: string;
  unit: string;
  grams: number;
  max: number;
  color: string;
  delay: number;
}

const MacroBar = ({ label, unit, grams, max, color, delay }: IMacroBarProps) => (
  <div className="flex-1">
    <div className="mb-1 flex items-baseline justify-between gap-1 text-[10px]">
      <span className="text-text-3">{label}</span>
      <span className="font-bold whitespace-nowrap" style={{ color }}>
        {grams} {unit}
      </span>
    </div>
    <div className="h-1.5 overflow-hidden rounded-full bg-surface-muted">
      <motion.div
        className="h-full rounded-full"
        style={{ background: color, transformOrigin: "left" }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: Math.min(grams / max, 1) }}
        transition={{ delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  </div>
);

export const ScanDemo = () => {
  const { t } = useI18n();
  const [step, setStep] = useState(0);
  const [phase, setPhase] = useState<Phase>("scan");
  const { meal, mealType } = SEQUENCE[step % SEQUENCE.length];
  const next = SEQUENCE[(step + 1) % SEQUENCE.length].meal;
  const current = step % SEQUENCE.length;
  const previous = (step + SEQUENCE.length - 1) % SEQUENCE.length;

  useEffect(() => {
    const timer = window.setTimeout(
      () => {
        if (phase === "scan") {
          setPhase("result");
        } else {
          setPhase("scan");
          setStep((value) => value + 1);
        }
      },
      phase === "scan" ? SCAN_MS : RESULT_MS,
    );

    return () => window.clearTimeout(timer);
  }, [phase]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-ink-deep">
      {/* Live camera view: the whole plate sits sharp in the viewfinder, the same frame spills out blurred and dark
          around it; the next dish refocuses in, then the camera slowly drifts closer */}
      {/* All three blurred frames are on the page from the start, the current one on top: a frame that first appeared
          with its dish would be the largest image painted so far and would move Largest Contentful Paint to that moment.
          Blurred anyway, so the smallest copy of the photo is enough */}
      <div className="absolute inset-0 isolate">
        {SEQUENCE.map(({ meal: frame }, index) => {
          const isCurrent = index === current;

          return (
            <motion.div
              key={frame.dish}
              className={`absolute inset-0 ${isCurrent ? "z-[2]" : index === previous ? "z-[1]" : ""}`}
              initial={false}
              animate={isCurrent ? { opacity: [0, 1], scale: [1.2, 1], filter: ["blur(14px)", "blur(0px)"] } : { opacity: 1, scale: 1 }}
              transition={isCurrent ? REFOCUS.transition : { duration: 0 }}
            >
              <div className="absolute inset-0 scale-125 blur-xl brightness-[0.3] saturate-150">
                <Image src={frame.photo} alt="" fill sizes="16px" loading="eager" className="object-cover" />
              </div>
            </motion.div>
          );
        })}
      </div>
      {/* The viewfinder window stays put and the photo moves inside it. The browser takes the largest image painted
          before the first tap or scroll as the page's main one (Largest Contentful Paint): a photo zooming in from
          beyond the window would be larger than the first and move that moment seconds past the load. For the same
          reason later photos are cut a few pixels in, where the mask is already transparent */}
      <div
        className={`absolute inset-x-0 top-[78px] aspect-square overflow-hidden [mask-image:radial-gradient(circle,#000_56%,transparent_71%)] ${step > 0 ? "[clip-path:inset(6px)]" : ""}`}
      >
        <AnimatePresence initial={false}>
          <motion.div key={step} className="absolute inset-0" {...REFOCUS}>
            <motion.div
              className="absolute inset-0"
              animate={{ scale: [1, 1.07], x: [0, -4], y: [0, 3] }}
              transition={{ duration: (SCAN_MS + RESULT_MS) / 1000, ease: "linear" }}
            >
              <Image src={meal.photo} alt={t.meals[meal.dish]} fill sizes="300px" loading="eager" fetchPriority="high" className="object-cover" />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Warm the next photo so the swap never shows an empty frame — from the first result on, not in the HTML: on the
          first load its 54 KB competed with the first photo (PageSpeed, 15.10.2026), and the swap is seconds away */}
      {(step > 0 || phase === "result") && (
        <Image src={next.photo} alt="" width={1} height={1} className="pointer-events-none absolute opacity-0" sizes="300px" />
      )}

      {/* Legibility: dark top and bottom, a dim veil while the result is shown */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-ink/90 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
      <motion.div className="pointer-events-none absolute inset-0 bg-ink" animate={{ opacity: phase === "result" ? 0.35 : 0 }} transition={{ duration: 0.5 }} />

      <div className="absolute inset-0 flex flex-col pt-12">
        {/* Meal type switcher */}
        <div className="mx-auto flex rounded-full bg-ink/60 p-1 text-[11px] font-semibold backdrop-blur-md">
          {MEAL_TYPES.map((type) => (
            <span key={type} className="relative px-3 py-1.5">
              {type === mealType && (
                <motion.span layoutId="meal-type" className="absolute inset-0 rounded-full bg-text/15" transition={{ type: "spring", stiffness: 400, damping: 32 }} />
              )}
              <span className={`relative ${type === mealType ? "text-text" : "text-text-2"}`}>{t.mealTypes[type]}</span>
            </span>
          ))}
        </div>

        {/* Viewfinder */}
        <div className="relative mx-auto mt-7 aspect-square w-[80%]">
          {CORNERS.map((corner) => (
            <span key={corner} className={`absolute size-9 border-apricot drop-shadow-[0_0_6px_rgba(0,0,0,0.5)] ${corner}`} />
          ))}
          {/* AI spark: spins, pulses while scanning, grows with the result. CSS animations of HTML boxes run on the
              compositor; Motion on the SVG path ran on the main thread and stuttered while the page was busy */}
          <span
            aria-hidden
            className={`absolute -top-2 -right-2 size-7 transition-transform duration-500 ${phase === "scan" ? "" : "scale-[1.15]"}`}
          >
            <span className="block size-full animate-[spin_1.6s_linear_infinite]">
              <span className={`block size-full ${phase === "scan" ? "animate-spark-pulse" : ""}`}>
                <svg viewBox="0 0 20 20" className="size-full text-lilac drop-shadow-[0_0_8px_rgba(183,166,255,0.8)]">
                  <path d={sparkPath(10, 10, 10)} fill="currentColor" />
                </svg>
              </span>
            </span>
          </span>

          {/* Scan beam, clipped by the frame: the trail above the line would otherwise stick out over the top corners while
              the line is near the top edge */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
            <AnimatePresence>
              {phase === "scan" && (
                // The beam rides a layer as tall as the viewfinder, moved by `transform`: animating `top` would be a layout shift every frame
                <motion.div
                  key={`beam-${step}`}
                  className="absolute inset-0"
                  initial={{ y: "6%", opacity: 0 }}
                  animate={{ y: ["6%", "94%", "6%"], opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ y: { delay: 0.4, duration: (SCAN_MS - 400) / 1000, ease: "easeInOut" }, opacity: { duration: 0.2 } }}
                >
                  <div className="absolute inset-x-[4%] top-0 h-20 -translate-y-full">
                    <div className="h-full bg-gradient-to-b from-transparent to-apricot/30" />
                    <div className="h-0.5 rounded-full bg-apricot shadow-[0_0_18px_5px_rgba(255,176,120,0.7)]" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* AI probes */}
          {phase === "scan" &&
            PROBES.map((probe, index) => (
              <motion.span
                key={`${step}-${index}`}
                className="absolute size-2.5 -translate-1/2 rounded-full border-2 border-text bg-lilac"
                style={{ left: `${probe.x}%`, top: `${probe.y}%` }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 1.4, 1],
                  opacity: 1,
                  boxShadow: ["0 0 0 0 rgba(183,166,255,0.7)", "0 0 0 12px rgba(183,166,255,0)"],
                }}
                transition={{ delay: 0.7 + index * 0.25, duration: 0.6, boxShadow: { repeat: Infinity, duration: 1.2 } }}
              />
            ))}

          {/* Recognised label */}
          <AnimatePresence>
            {phase === "result" && (
              <motion.div
                className="absolute top-[4%] left-1/2 flex items-center gap-1.5 rounded-full border border-lilac-line bg-lilac-surface/90 px-3 py-1.5 text-[11px] font-semibold whitespace-nowrap text-lilac backdrop-blur"
                initial={{ opacity: 0, y: 8, x: "-50%", scale: 0.9 }}
                animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
                exit={{ opacity: 0, y: -8, x: "-50%" }}
                transition={{ type: "spring", stiffness: 300, damping: 22, delay: 0.15 }}
              >
                <svg viewBox="0 0 20 20" className="size-3" aria-hidden>
                  <path d={sparkPath(10, 10, 10)} fill="currentColor" />
                </svg>
                {t.scan.recognized}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Result card or shutter */}
        <div className="relative mt-auto h-[188px]">
          <AnimatePresence>
            {phase === "result" ? (
              <motion.div
                key={`card-${step}`}
                className="absolute inset-x-2.5 bottom-2.5 rounded-[26px] border border-line bg-surface-raised/95 p-4 backdrop-blur-md"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                exit={{ y: "110%", transition: { duration: 0.35, ease: "easeIn" } }}
                transition={{ type: "spring", stiffness: 210, damping: 24 }}
              >
                <div className="flex items-center gap-3">
                  <FoodThumb dish={meal.dish} size={42} />
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-[13px] font-semibold">{t.meals[meal.dish]}</div>
                    <div className="text-[11px] text-text-3">{t.scan.portion(String(meal.grams))}</div>
                  </div>
                </div>
                <div className="mt-3 flex items-baseline gap-1.5">
                  <CountUp value={meal.kcal} duration={0.9} className="text-[34px] leading-none font-extrabold text-apricot" />
                  <span className="text-[13px] text-text-2">{t.units.kcal}</span>
                </div>
                <div className="mt-3 flex gap-2">
                  <MacroBar label={t.macros.carbs} unit={t.units.g} grams={meal.carbsG} max={80} color="var(--color-apricot)" delay={0.3} />
                  <MacroBar label={t.macros.fats} unit={t.units.g} grams={meal.fatG} max={30} color="var(--color-lilac)" delay={0.4} />
                  <MacroBar label={t.macros.protein} unit={t.units.g} grams={meal.proteinG} max={45} color="var(--color-mint)" delay={0.5} />
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="shutter"
                className="absolute bottom-8 left-1/2 -ml-8 size-16 rounded-full border-4 border-text/90 p-1"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
              >
                <motion.span
                  className="block size-full rounded-full bg-text"
                  animate={{ scale: [1, 0.86, 1] }}
                  transition={{ delay: SCAN_MS / 1000 - 0.4, duration: 0.3 }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Shutter flash over the whole screen */}
      <AnimatePresence>
        {phase === "result" && (
          <motion.div
            key={`flash-${step}`}
            className="pointer-events-none absolute inset-0 bg-text"
            initial={{ opacity: 0.75 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
