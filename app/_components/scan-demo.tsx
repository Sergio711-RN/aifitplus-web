"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { MEALS, type IMeal } from "../_lib/content";
import { sparkPath } from "./app-mark";
import { CountUp } from "./count-up";
import { DishArt, FoodThumb } from "./food-thumb";

// Camera screen of the app in a loop: the beam sweeps the plate, the shutter flashes,
// the AI finds the dish and the result card rises with calories and macros.

const SEQUENCE: { meal: IMeal; grams: number; mealType: string }[] = [
  { meal: MEALS.syrniki, grams: 180, mealType: "Завтрак" },
  { meal: MEALS.chicken, grams: 350, mealType: "Обед" },
  { meal: MEALS.yogurt, grams: 200, mealType: "Перекус" },
];

const SCAN_MS = 2200;
const RESULT_MS = 3200;

type Phase = "scan" | "result";

/** Points the «AI» marks on the dish while it looks at it */
const PROBES = [
  { x: 38, y: 40 },
  { x: 62, y: 36 },
  { x: 50, y: 62 },
  { x: 66, y: 60 },
];

const Corner = ({ className }: { className: string }) => (
  <span className={`absolute size-9 border-apricot ${className}`} />
);

const MacroBar = ({ label, grams, max, color, delay }: { label: string; grams: number; max: number; color: string; delay: number }) => (
  <div className="flex-1">
    <div className="mb-1 flex items-baseline justify-between text-[11px]">
      <span className="text-text-3">{label}</span>
      <span className="font-bold" style={{ color }}>
        {grams} г
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
  const [step, setStep] = useState(0);
  const [phase, setPhase] = useState<Phase>("scan");
  const { meal, grams, mealType } = SEQUENCE[step % SEQUENCE.length];

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
    <div className="absolute inset-0 flex flex-col pt-12">
      {/* Meal type switcher */}
      <div className="mx-auto flex rounded-full bg-surface p-1 text-[11px] font-semibold">
        {["Завтрак", "Обед", "Перекус"].map((type) => (
          <span key={type} className="relative px-3 py-1.5">
            {type === mealType && (
              <motion.span layoutId="meal-type" className="absolute inset-0 rounded-full bg-surface-tile" transition={{ type: "spring", stiffness: 400, damping: 32 }} />
            )}
            <span className={`relative ${type === mealType ? "text-text" : "text-text-3"}`}>{type}</span>
          </span>
        ))}
      </div>

      {/* Viewfinder */}
      <div className="relative mx-auto mt-6 aspect-square w-[78%]">
        <Corner className="top-0 left-0 rounded-tl-2xl border-t-[3px] border-l-[3px]" />
        <Corner className="bottom-0 left-0 rounded-bl-2xl border-b-[3px] border-l-[3px]" />
        <Corner className="right-0 bottom-0 rounded-br-2xl border-r-[3px] border-b-[3px]" />
        <svg viewBox="0 0 20 20" className="absolute -top-2 -right-2 size-7 text-lilac" aria-hidden>
          <motion.path
            d={sparkPath(10, 10, 10)}
            fill="currentColor"
            animate={{ rotate: phase === "scan" ? 360 : 0, scale: phase === "scan" ? [1, 0.8, 1] : 1.15 }}
            transition={{ rotate: { duration: 1.6, repeat: phase === "scan" ? Infinity : 0, ease: "linear" }, scale: { duration: 0.8, repeat: phase === "scan" ? Infinity : 0 } }}
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
          />
        </svg>

        {/* Plate */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={step}
            className="absolute inset-[10%]"
            initial={{ x: 120, rotate: 40, opacity: 0 }}
            animate={{ x: 0, rotate: 0, opacity: 1 }}
            exit={{ x: -120, rotate: -40, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
          >
            <svg viewBox="0 0 48 48" className="size-full drop-shadow-[0_12px_24px_rgba(0,0,0,0.45)]" aria-hidden>
              <circle cx={24} cy={24} r={23} fill="var(--color-plate)" />
              <circle cx={24} cy={24} r={19} fill="var(--color-plate-well)" opacity={0.55} />
              <g transform="translate(24 24) scale(1.25) translate(-24 -24)">
                <DishArt dish={meal.dish} />
              </g>
            </svg>
          </motion.div>
        </AnimatePresence>

        {/* Scan beam */}
        <AnimatePresence>
          {phase === "scan" && (
            <motion.div
              className="pointer-events-none absolute inset-x-[6%] h-16 -translate-y-full"
              initial={{ top: "8%", opacity: 0 }}
              animate={{ top: ["8%", "92%", "8%"], opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ top: { duration: SCAN_MS / 1000, ease: "easeInOut" }, opacity: { duration: 0.2 } }}
            >
              <div className="h-full bg-gradient-to-b from-transparent to-apricot/25" />
              <div className="h-0.5 rounded-full bg-apricot shadow-[0_0_16px_4px_rgba(255,176,120,0.6)]" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* AI probes */}
        {phase === "scan" &&
          PROBES.map((probe, index) => (
            <motion.span
              key={`${step}-${index}`}
              className="absolute size-2.5 -translate-1/2 rounded-full bg-lilac"
              style={{ left: `${probe.x}%`, top: `${probe.y}%` }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.4, 1], opacity: 1, boxShadow: ["0 0 0 0 rgba(183,166,255,0.6)", "0 0 0 10px rgba(183,166,255,0)"] }}
              transition={{ delay: 0.5 + index * 0.25, duration: 0.6, boxShadow: { repeat: Infinity, duration: 1.2 } }}
            />
          ))}

        {/* Shutter flash */}
        <AnimatePresence>
          {phase === "result" && (
            <motion.div
              key={`flash-${step}`}
              className="pointer-events-none absolute -inset-[30%] rounded-full bg-text"
              initial={{ opacity: 0.7 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </AnimatePresence>

        {/* Recognised label */}
        <AnimatePresence>
          {phase === "result" && (
            <motion.div
              className="absolute top-[6%] left-1/2 flex items-center gap-1.5 rounded-full border border-lilac-line bg-lilac-surface/90 px-3 py-1.5 text-[11px] font-semibold whitespace-nowrap text-lilac backdrop-blur"
              initial={{ opacity: 0, y: 8, x: "-50%", scale: 0.9 }}
              animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
              exit={{ opacity: 0, y: -8, x: "-50%" }}
              transition={{ type: "spring", stiffness: 300, damping: 22, delay: 0.15 }}
            >
              <svg viewBox="0 0 20 20" className="size-3" aria-hidden>
                <path d={sparkPath(10, 10, 10)} fill="currentColor" />
              </svg>
              Распознано за 2,1 с
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Result card */}
      <div className="relative mt-auto h-[188px]">
        <AnimatePresence>
          {phase === "result" ? (
            <motion.div
              key={`card-${step}`}
              className="absolute inset-x-2.5 bottom-2.5 rounded-[26px] border border-line bg-surface-raised p-4"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              exit={{ y: "110%", transition: { duration: 0.35, ease: "easeIn" } }}
              transition={{ type: "spring", stiffness: 210, damping: 24 }}
            >
              <div className="flex items-center gap-3">
                <FoodThumb dish={meal.dish} size={42} />
                <div className="min-w-0 flex-1">
                  <div className="truncate text-[13px] font-semibold">{meal.title}</div>
                  <div className="text-[11px] text-text-3">{grams} г, одна порция</div>
                </div>
              </div>
              <div className="mt-3 flex items-baseline gap-1.5">
                <CountUp value={meal.kcal} duration={0.9} className="text-[34px] leading-none font-extrabold text-apricot" />
                <span className="text-[13px] text-text-2">ккал</span>
              </div>
              <div className="mt-3 flex gap-3">
                <MacroBar label="Углеводы" grams={meal.carbsG} max={70} color="var(--color-apricot)" delay={0.3} />
                <MacroBar label="Жиры" grams={meal.fatG} max={30} color="var(--color-lilac)" delay={0.4} />
                <MacroBar label="Белки" grams={meal.proteinG} max={50} color="var(--color-mint)" delay={0.5} />
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
                transition={{ delay: SCAN_MS / 1000 - 0.5, duration: 0.3 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
