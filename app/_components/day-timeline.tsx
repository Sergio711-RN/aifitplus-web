"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "../_i18n/i18n-provider";
import { DAY, DAY_TARGET_KCAL, MEALS, type IMeal, type MealType } from "../_lib/content";
import { Spark } from "./app-mark";
import { CountUp } from "./count-up";
import { FoodThumb } from "./food-thumb";
import { GlassMeter } from "./glass-meter";
import { Typewriter } from "./how-it-works";
import { type IGlow, SectionBackdrop } from "./section-backdrop";

const PROTEIN_TARGET_G = 130;
/** What the visitor «describes» in the «Add without a photo» card at the end of the day */
const QUICK_MEAL = MEALS.salad;
const QUICK_TIME = "19:10";
/** Typing speed of the description, ms per letter */
const TYPE_SPEED = 45;
/** How long the AI «counts» before the meal lands in the timeline, ms */
const ANALYZE_MS = 1400;

type QuickPhase = "ready" | "analyzing" | "added";

const BookmarkIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" aria-hidden className={className}>
    <path d="M6.5 4.5h11v15l-5.5-3.6-5.5 3.6z" />
  </svg>
);

const MicIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden className={className}>
    <rect x="9" y="3.5" width="6" height="11" rx="3" />
    <path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v2.5" />
  </svg>
);

const ArrowUpIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
    <path d="M12 19V5M6 11l6-6 6 6" />
  </svg>
);

interface IQuickAddRowProps {
  isVisible: boolean;
  phase: QuickPhase;
  onSend: () => void;
}

/**
 * «Add without a photo» at the current moment of the day, as on the app's Home: the description is typed into the field,
 * the apricot arrow sends it, the AI counts, and the meal lands in the timeline above
 */
const QuickAddRow = ({ isVisible, phase, onSend }: IQuickAddRowProps) => {
  const { t, formatNumber } = useI18n();
  const description = `${t.meals[QUICK_MEAL.dish]}, ${formatNumber(QUICK_MEAL.grams)} ${t.units.g}`;
  const [isTyped, setIsTyped] = useState(false);

  // The arrow starts to call for a tap once the description is in the field
  useEffect(() => {
    if (!isVisible) return;
    const timer = window.setTimeout(() => setIsTyped(true), 500 + description.length * TYPE_SPEED);

    return () => window.clearTimeout(timer);
  }, [description.length, isVisible]);

  const hint = phase === "analyzing" ? t.day.quickAdd.analyzing : phase === "added" ? t.day.quickAdd.added : t.day.quickAdd.hint;

  return (
    <motion.li
      className="relative grid grid-cols-1 gap-2 pl-7 sm:grid-cols-[4.5rem_minmax(0,1fr)] sm:gap-10 sm:pl-0"
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
      transition={{ type: "spring", stiffness: 140, damping: 20 }}
    >
      <div className="text-[15px] font-bold text-lilac tabular-nums sm:pt-4 sm:text-right">{QUICK_TIME}</div>
      <div className="relative min-w-0">
        {/* «Now» on the rail: a lilac point with a ring breathing around it */}
        <span className="absolute top-6 -left-[27px] size-3.5 rounded-full border-2 border-ink bg-lilac">
          <span className="absolute -inset-1.5 animate-ping rounded-full border border-lilac/60" />
        </span>
        <div className="rounded-[22px] border border-line bg-surface-raised p-4">
          <div className="text-[14px] font-semibold">{t.day.quickAdd.title}</div>
          <div className="relative mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 overflow-hidden rounded-2xl border border-line bg-ink/60 py-2 pr-2 pl-3 sm:h-12 sm:flex-nowrap sm:py-0 sm:pr-1.5">
            <span title={t.day.quickAdd.saved} className="hidden shrink-0 text-text-3 sm:block">
              <BookmarkIcon className="size-[18px]" />
            </span>
            <span className="hidden h-5 w-px shrink-0 bg-line sm:block" />
            {/* Phones: the text takes the whole width in two lines and the buttons go to a row under it, as in the app's field
                with text; the height is fixed, so nothing moves while the description is typed */}
            <span className="line-clamp-2 h-[2.6rem] min-w-0 flex-1 basis-full text-[15px] leading-snug sm:line-clamp-1 sm:h-auto sm:basis-auto">
              {phase === "analyzing" ? (
                description
              ) : phase === "ready" && isVisible ? (
                <Typewriter text={description} delay={0.5} speed={TYPE_SPEED} />
              ) : (
                <span className="text-text-3">{t.day.quickAdd.placeholder}</span>
              )}
            </span>
            <span title={t.day.quickAdd.voice} className="shrink-0 text-text-3">
              <MicIcon className="size-[18px]" />
            </span>
            <motion.button
              type="button"
              aria-label={t.day.quickAdd.send}
              disabled={phase !== "ready"}
              onClick={onSend}
              className="relative ml-auto grid size-9 shrink-0 place-items-center rounded-full bg-apricot text-ink transition-opacity disabled:opacity-50 sm:ml-0"
              whileTap={{ scale: 0.9 }}
            >
              {phase === "ready" && isTyped && <span className="absolute -inset-1 animate-ping rounded-full border-2 border-apricot/50" />}
              <ArrowUpIcon className="size-[18px]" />
            </motion.button>
            {/* The AI reads the description: a lilac beam crosses the field */}
            <AnimatePresence>
              {phase === "analyzing" && (
                <motion.span
                  className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-lilac/25 to-transparent"
                  initial={{ left: "-35%" }}
                  animate={{ left: "105%" }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
                />
              )}
            </AnimatePresence>
          </div>
          <div className="mt-2.5 flex items-center gap-1.5 text-[13px]" aria-live="polite">
            <Spark className={`size-3.5 shrink-0 ${phase === "added" ? "text-mint" : "text-lilac"}`} spin={phase === "analyzing"} />
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={phase}
                className={phase === "added" ? "font-semibold text-mint" : phase === "analyzing" ? "text-lilac" : "text-text-2"}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
              >
                {hint}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.li>
  );
};

/** Calorie shares of carbs, fats and protein as one strip — the app's timeline card (variant 5 «полоска долей») */
const ShareStrip = ({ meal, isVisible }: { meal: IMeal; isVisible: boolean }) => {
  const parts = [
    { kcal: meal.carbsG * 4, color: "var(--color-apricot)" },
    { kcal: meal.fatG * 9, color: "var(--color-lilac)" },
    { kcal: meal.proteinG * 4, color: "var(--color-mint)" },
  ];
  const total = parts.reduce((sum, part) => sum + part.kcal, 0);

  return (
    <div className="mt-3 flex h-1.5 gap-0.5 overflow-hidden rounded-full">
      {parts.map((part, index) => (
        <motion.span
          key={part.color}
          className="h-full rounded-full"
          style={{ background: part.color }}
          initial={{ flexGrow: 0.0001 }}
          animate={{ flexGrow: isVisible ? part.kcal / total : 0.0001 }}
          transition={{ delay: 0.25 + index * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}
    </div>
  );
};

interface IMealRowProps {
  time: string;
  mealType: MealType;
  meal: IMeal;
  isVisible: boolean;
  isNew?: boolean;
}

const MealRow = ({ time, mealType, meal, isVisible, isNew = false }: IMealRowProps) => {
  const { t } = useI18n();

  return (
    <motion.li
      className="relative grid grid-cols-1 gap-2 pl-7 sm:grid-cols-[4.5rem_minmax(0,1fr)] sm:gap-10 sm:pl-0"
      initial={false}
      // Fully transparent until its time, not a 12 % ghost: Lighthouse read the ghosts as text with too little contrast
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 40, filter: isVisible ? "blur(0px)" : "blur(6px)" }}
      transition={{ type: "spring", stiffness: 140, damping: 20 }}
    >
      <div className="flex items-baseline gap-2 sm:block sm:pt-4 sm:text-right">
        <div className="text-[15px] font-bold tabular-nums">{time}</div>
        <div className="text-[12px] text-text-3">{t.mealTypes[mealType]}</div>
      </div>
      <div className="relative min-w-0">
        {/* The dot lights up by cross-fading an apricot layer over the grey one: `background-color` animates on the main thread */}
        <motion.span
          className="absolute top-6 -left-[26px] size-3 rounded-full border-2 border-ink bg-line"
          animate={{ scale: isVisible ? [1, 1.6, 1] : 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span className="absolute inset-0 rounded-full bg-apricot" animate={{ opacity: isVisible ? 1 : 0 }} transition={{ duration: 0.5 }} />
        </motion.span>
        <div
          className={`rounded-[22px] border p-4 transition-colors ${isNew ? "border-mint/50 bg-mint/5" : "border-line bg-surface-raised"}`}
        >
          <div className="flex items-center gap-3">
            <FoodThumb dish={meal.dish} size={46} />
            <div className="min-w-0 flex-1">
              <div className="line-clamp-2 text-[15px] leading-snug font-semibold sm:text-[16px]">{t.meals[meal.dish]}</div>
              <div className="mt-0.5 flex gap-2 text-[12px] font-semibold whitespace-nowrap sm:gap-3">
                <span className="text-apricot">
                  {t.macros.carbsShort} {meal.carbsG}
                </span>
                <span className="text-lilac">
                  {t.macros.fatsShort} {meal.fatG}
                </span>
                <span className="text-mint">
                  {t.macros.proteinShort} {meal.proteinG}
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-[20px] leading-none font-extrabold text-apricot tabular-nums">{meal.kcal}</div>
              <div className="text-[11px] text-text-3">{t.units.kcal}</div>
            </div>
          </div>
          <ShareStrip meal={meal} isVisible={isVisible} />
        </div>
      </div>
    </motion.li>
  );
};

/** The day goes from breakfast to dinner like the timeline rail: apricot at the top, lilac (the AI counting) in the middle, mint (the day closed) at the bottom */
const DAY_GLOWS: IGlow[] = [
  { className: "top-[-8%] left-[-12%] size-[560px] bg-apricot/15 blur-[130px]", x: [0, 90, 0], y: [0, 50, 0], duration: 20 },
  { className: "top-[35%] right-[-14%] size-[620px] bg-lilac/20 blur-[140px]", x: [0, -80, 0], y: [0, 60, 0], duration: 24 },
  { className: "bottom-[-14%] left-[15%] size-[520px] bg-mint/10 blur-[130px]", x: [0, 70, -40, 0], y: [0, -50, 30, 0], duration: 26 },
];

export const DayTimeline = () => {
  const { t, formatNumber } = useI18n();
  const listRef = useRef<HTMLOListElement>(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const [quickPhase, setQuickPhase] = useState<QuickPhase>("ready");
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 80%", "end 75%"] });
  const railProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 26 });
  const railScale = useTransform(railProgress, [0, 1], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setVisibleCount(Math.min(DAY.length + 1, Math.floor(value * (DAY.length + 1) + 0.6)));
  });

  const isQuickAdded = quickPhase === "added";
  const eaten = DAY.slice(0, visibleCount).map((entry) => entry.meal);
  if (isQuickAdded) eaten.push(QUICK_MEAL);
  const eatenKcal = eaten.reduce((sum, meal) => sum + meal.kcal, 0);
  const eatenProtein = eaten.reduce((sum, meal) => sum + meal.proteinG, 0);
  const isQuickVisible = visibleCount > DAY.length;

  useEffect(() => {
    if (quickPhase !== "analyzing") return;
    const timer = window.setTimeout(() => setQuickPhase("added"), ANALYZE_MS);

    return () => window.clearTimeout(timer);
  }, [quickPhase]);

  const level = useSpring(0, { stiffness: 60, damping: 14 });
  useEffect(() => {
    level.set(eatenKcal / DAY_TARGET_KCAL);
  }, [eatenKcal, level]);

  return (
    <section id="day" className="relative isolate overflow-x-clip px-5 py-28 md:px-10 md:py-40">
      <SectionBackdrop glows={DAY_GLOWS} />
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.02] font-extrabold tracking-[-0.03em]">
            {t.day.title}
          </h2>
          <p className="mt-5 text-[18px] leading-relaxed text-text-2">
            {t.day.text}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-[56px_minmax(0,1fr)] gap-4 sm:gap-10 md:grid-cols-[auto_minmax(0,1fr)] md:gap-20">
          {/* Sticky glass */}
          <div className="relative">
            <div className="sticky top-28 flex flex-col items-center gap-4 md:flex-row md:items-end md:gap-7">
              <div className="md:hidden">
                <GlassMeter level={level} width={56} height={170} />
              </div>
              <div className="hidden md:block">
                <GlassMeter level={level} width={128} height={340} />
              </div>
              <div className="text-center md:pb-2 md:text-left">
                <div className="text-[20px] leading-none font-extrabold md:text-[56px]">
                  <CountUp value={eatenKcal} duration={0.8} />
                </div>
                <div className="mt-1 text-[12px] text-text-3 md:text-[15px]">{t.common.ofKcal(formatNumber(DAY_TARGET_KCAL))}</div>
                <div className="mt-5 hidden md:block">
                  <div className="text-[13px] text-text-3">{t.macros.protein}</div>
                  <div className="text-[22px] font-bold text-mint">
                    <CountUp value={eatenProtein} duration={0.8} />
                    <span className="text-[14px] font-medium text-text-3">
                      {" "}
                      / {PROTEIN_TARGET_G} {t.units.g}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            <span className="absolute top-3 bottom-3 left-[7px] w-0.5 rounded-full bg-line sm:left-[calc(4.5rem+2.5rem-21px)]" />
            <motion.span
              className="absolute top-3 bottom-3 left-[7px] w-0.5 origin-top rounded-full bg-gradient-to-b from-apricot via-lilac to-mint sm:left-[calc(4.5rem+2.5rem-21px)]"
              style={{ scaleY: railScale }}
            />
            <ol ref={listRef} className="relative space-y-6">
              {DAY.map((entry, index) => (
                <MealRow key={entry.time} {...entry} isVisible={index < visibleCount} />
              ))}
              <AnimatePresence>
                {isQuickAdded && <MealRow time={QUICK_TIME} mealType="dinner" meal={QUICK_MEAL} isVisible isNew />}
              </AnimatePresence>
              <QuickAddRow isVisible={isQuickVisible} phase={quickPhase} onSend={() => setQuickPhase("analyzing")} />
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
