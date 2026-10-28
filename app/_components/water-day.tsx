"use client";

import { AnimatePresence, motion, useAnimate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState, type Ref } from "react";
import { LOCALE_META } from "../_i18n/config";
import { useI18n } from "../_i18n/i18n-provider";
import { DEFAULT_PLAN_INPUT } from "../_lib/nutrition-plan";
import { calcWaterGoal, formatWater, getWaterSchedule } from "../_lib/water-plan";
import { Spark } from "./app-mark";
import { type IGlow, SectionBackdrop } from "./section-backdrop";

/** The calculator's person below: 68 kg, light activity — 1.8 l, eight drops of 225 ml */
const GOAL_ML = calcWaterGoal(DEFAULT_PLAN_INPUT);
const GLASS_ML = 250;
/** The app's default water day, minutes from midnight */
const WATER_DAY = { start: 8 * 60, end: 21 * 60 };
/**
 * The moment the demo shows. The numbers are picked so the story holds: 750 ml by 15:30 is a glass behind, the AI's tea
 * puts the day back on track, and the third glass after it lands on the goal exactly
 */
const NOW = 15 * 60 + 30;
/** How long the AI «estimates» the tea's water, ms */
const ANALYZE_MS = 1400;
/** «Undo» after «+» stays this long, as in the app */
const UNDO_MS = 4000;
/** Rows the list keeps: older ones slide out at the bottom */
const ROWS = 4;

type Drink = "cappuccino" | "greenTea";

interface IEntry {
  id: number;
  /** Minutes from midnight */
  time: number;
  ml: number;
  /** A drink from the diary: its water is the AI's estimate */
  drink?: Drink;
}

/** The cappuccino comes with the timeline's breakfast at 08:20 */
const MORNING: IEntry[] = [
  { id: 1, time: 8 * 60 + 20, ml: 170, drink: "cappuccino" },
  { id: 2, time: 10 * 60 + 15, ml: 330 },
  { id: 3, time: 12 * 60 + 40, ml: 250 },
];
/** The tea photographed with the timeline's lunch at 14:05: the AI counts its water while the visitor watches */
const TEA: IEntry = { id: 4, time: 14 * 60 + 5, ml: 300, drink: "greenTea" };

type TeaPhase = "hidden" | "estimating" | "counted";

const clock = (minutes: number) => `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`;

/** A drop in a 24 × 30 box: from the tip at 2 to the bottom at 24.6, as in the app's water card */
const DROP_PATH = "M12 2c4.6 5.6 8 10 8 14.6a8 8 0 0 1-16 0C4 12 7.4 7.6 12 2z";
const DROP_MASK = `url("data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 30"><path d="${DROP_PATH}"/></svg>`,
)}")`;

export const DropIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 30" aria-hidden className={className}>
    <path d={DROP_PATH} fill="currentColor" />
  </svg>
);

const PlusIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" aria-hidden className={className}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

const CheckIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);

const ClockIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden className={className}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);

interface IDropProps {
  /** 0–1 */
  fill: number;
  /** The first empty drop: dashed, the one the next glass fills */
  isNext: boolean;
  index: number;
  /** Bumped when the goal is reached: the drops jump one after another; 0 — never */
  pulse: number;
}

/**
 * The water rises as a `scaleY` of an HTML layer clipped by a drop-shaped mask — a compositor animation; only the
 * outline is SVG, and it does not move
 */
const Drop = ({ fill, isNext, index, pulse }: IDropProps) => {
  const [scope, animate] = useAnimate<HTMLSpanElement>();
  const isReduced = useReducedMotion();

  useEffect(() => {
    if (pulse === 0 || isReduced) return;
    animate(scope.current, { scale: [1, 1.3, 1] }, { delay: index * 0.045, duration: 0.45, ease: "easeOut" });
  }, [animate, index, isReduced, pulse, scope]);

  return (
    <span ref={scope} className="relative block aspect-[24/30] w-full max-w-8">
      <span className="absolute inset-0" style={{ maskImage: DROP_MASK, WebkitMaskImage: DROP_MASK }}>
        <span
          className="absolute inset-x-0 top-[6.67%] bottom-[18%] origin-bottom bg-water transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `scaleY(${fill})` }}
        />
      </span>
      <svg viewBox="0 0 24 30" aria-hidden className="absolute inset-0 size-full overflow-visible">
        <path
          d={DROP_PATH}
          fill="none"
          strokeWidth={2}
          strokeDasharray={isNext ? "3 3" : undefined}
          className={fill > 0 || isNext ? "stroke-water" : "stroke-line"}
        />
      </svg>
    </span>
  );
};

interface IEntryRowProps {
  /** `popLayout` of the list measures the leaving row through it */
  ref?: Ref<HTMLLIElement>;
  entry: IEntry;
  isEstimating: boolean;
  water: (ml: number) => string;
}

/** A row of the app's water screen: a glass from «+», or a drink of the diary with the AI's estimate */
const EntryRow = ({ ref, entry, isEstimating, water }: IEntryRowProps) => {
  const { t } = useI18n();

  return (
    <motion.li
      ref={ref}
      layout
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 28 }}
      className="relative flex h-15 items-center gap-3 overflow-hidden border-t border-line px-3 first:border-t-0"
    >
      <span className="w-11 shrink-0 text-[13px] text-text-3 tabular-nums">{clock(entry.time)}</span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-[15px] font-semibold">{entry.drink ? t.water.drinks[entry.drink] : t.water.entry}</span>
        {entry.drink && (
          // Two lines on phones: «KI-Schätzung» cut off would hide the point of the row
          <span className="mt-0.5 flex items-start gap-1 text-[12px] leading-tight text-lilac">
            <Spark className="mt-px size-3 shrink-0" spin={isEstimating} />
            <span className="line-clamp-2">{isEstimating ? t.water.estimating : t.water.fromDiary}</span>
          </span>
        )}
      </span>
      <span className="shrink-0 text-[15px] font-bold tabular-nums">{isEstimating ? "—" : water(entry.ml)}</span>
      {/* The AI reads the meal: a lilac beam crosses the row (a transform, not `left`, so nothing reflows) */}
      <AnimatePresence>
        {isEstimating && (
          <motion.span
            className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-lilac/20 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: "300%" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>
    </motion.li>
  );
};

/** Water leads, lilac stands for the AI counting the tea, mint for the goal kept without a race */
const WATER_GLOWS: IGlow[] = [
  { className: "top-[-8%] left-[-12%] size-[560px] bg-water/15 blur-[130px]", x: [0, 90, 0], y: [0, 50, 0], duration: 22 },
  { className: "top-[30%] right-[-14%] size-[560px] bg-lilac/15 blur-[140px]", x: [0, -80, 0], y: [0, 60, 0], duration: 24 },
  { className: "bottom-[-14%] left-[20%] size-[480px] bg-mint/10 blur-[130px]", x: [0, 70, -40, 0], y: [0, -50, 30, 0], duration: 26 },
];

/**
 * Water through the day, as on the app's Home and water screen: drops for the goal's glasses, «+» for one more, a line
 * that says whether the day keeps up. The AI counts the tea from lunch while the visitor watches; then «+» is theirs —
 * the goal makes the drops jump, and far above it the line warns softly instead of praising
 */
export const WaterDay = () => {
  const { t, locale } = useI18n();
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-20% 0px" });
  const [teaPhase, setTeaPhase] = useState<TeaPhase>("hidden");
  /** Glasses added with «+», newest first */
  const [added, setAdded] = useState<IEntry[]>([]);
  /** The glass just added: «Undo» takes it back */
  const [lastAdded, setLastAdded] = useState<number | null>(null);
  const [pulse, setPulse] = useState(0);
  const nextId = useRef(100);

  const water = (ml: number) => formatWater(ml, LOCALE_META[locale].intl, t.units);

  useEffect(() => {
    if (!isInView) return;
    const timer = window.setTimeout(() => setTeaPhase("estimating"), 900);

    return () => window.clearTimeout(timer);
  }, [isInView]);

  useEffect(() => {
    if (teaPhase !== "estimating") return;
    const timer = window.setTimeout(() => setTeaPhase("counted"), ANALYZE_MS);

    return () => window.clearTimeout(timer);
  }, [teaPhase]);

  useEffect(() => {
    if (lastAdded === null) return;
    const timer = window.setTimeout(() => setLastAdded(null), UNDO_MS);

    return () => window.clearTimeout(timer);
  }, [lastAdded]);

  const counted = [...MORNING, ...(teaPhase === "counted" ? [TEA] : []), ...added];
  const drunkMl = counted.reduce((sum, entry) => sum + entry.ml, 0);
  const schedule = getWaterSchedule(GOAL_ML, drunkMl, GLASS_ML, NOW, WATER_DAY);
  const firstEmpty = schedule.fills.findIndex((fill) => fill === 0);
  const isOnTrack = schedule.status === "onTrack" || schedule.status === "done";
  const rows = [...added, ...(teaPhase === "hidden" ? [] : [TEA]), ...[...MORNING].reverse()].slice(0, ROWS);

  const statusText = {
    done: schedule.overMl > 0 ? t.water.status.over(water(schedule.overMl)) : t.water.status.done,
    tooMuch: t.water.status.tooMuch,
    onTrack: t.water.status.onTrack(clock(schedule.nextBy ?? NOW)),
    behind: t.water.status.behind,
  }[schedule.status];

  const addGlass = () => {
    const entry = { id: nextId.current++, time: NOW, ml: GLASS_ML };
    if (drunkMl < GOAL_ML && drunkMl + GLASS_ML >= GOAL_ML) setPulse((value) => value + 1);
    setAdded((current) => [entry, ...current]);
    setLastAdded(entry.id);
  };

  const undo = () => {
    setAdded((current) => current.filter((entry) => entry.id !== lastAdded));
    setLastAdded(null);
  };

  const points = [
    { icon: <Spark className="size-5" />, tone: "bg-lilac/15 text-lilac" },
    { icon: <ClockIcon className="size-5" />, tone: "bg-water/15 text-water" },
    { icon: <CheckIcon className="size-5" />, tone: "bg-mint/15 text-mint" },
  ];

  return (
    <section id="water" className="relative isolate overflow-x-clip px-5 py-28 md:px-10 md:py-40">
      <SectionBackdrop glows={WATER_GLOWS} />
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.02] font-extrabold tracking-[-0.03em]">{t.water.title}</h2>
          <p className="mt-5 text-[18px] leading-relaxed text-text-2">{t.water.text}</p>
        </div>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[minmax(0,27rem)_minmax(0,1fr)] lg:gap-24">
          <div ref={cardRef} className="mx-auto w-full max-w-[27rem]">
            {/* The water card of Home */}
            <div className="rounded-[22px] border border-line bg-surface-raised p-4 sm:p-5">
              <div className="flex items-center gap-3">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 text-[15px] font-bold">
                    <DropIcon className="h-4 w-3.5 text-water" />
                    {t.water.card}
                  </div>
                  <div className="mt-0.5 text-[13px] text-text-2">
                    <span className="text-[15px] font-bold text-text tabular-nums">{water(drunkMl)}</span> {t.water.of(water(GOAL_ML))}
                  </div>
                </div>
                <motion.button
                  type="button"
                  onClick={addGlass}
                  aria-label={t.water.add(water(GLASS_ML))}
                  className="relative flex h-11 shrink-0 items-center gap-1.5 rounded-full bg-water pr-4 pl-3 text-[14.5px] font-bold text-ink"
                  whileTap={{ scale: 0.92 }}
                >
                  {teaPhase === "counted" && added.length === 0 && (
                    <span className="absolute -inset-1 animate-ping rounded-full border-2 border-water/50" />
                  )}
                  <PlusIcon className="size-[18px]" />
                  {water(GLASS_ML)}
                </motion.button>
              </div>

              <div className="mt-4 flex justify-between gap-1.5">
                {schedule.fills.map((fill, index) => (
                  <Drop key={index} fill={fill} isNext={index === firstEmpty} index={index} pulse={pulse} />
                ))}
              </div>

              {/* Two lines' height, so a longer status does not move the list under the card */}
              <div className="mt-3 flex min-h-[2.6rem] items-start gap-1.5 text-[13px] leading-snug text-text-2" aria-live="polite">
                {lastAdded === null ? (
                  <>
                    {isOnTrack && <CheckIcon className="mt-px size-4 shrink-0 text-mint" />}
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.span key={statusText} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.2 }}>
                        {statusText}
                      </motion.span>
                    </AnimatePresence>
                  </>
                ) : (
                  <>
                    <span className="flex-1">{t.water.addedShort(water(GLASS_ML))}</span>
                    <button type="button" onClick={undo} className="-my-2 -mr-2 shrink-0 px-2 py-2 font-bold text-water hover:underline">
                      {t.water.undo}
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* The day's entries of the water screen */}
            <div className="mt-4 rounded-[22px] border border-line bg-surface-raised/80 p-2">
              <div className="px-3 pt-2 pb-1 text-[13px] text-text-3">{t.water.today(clock(NOW))}</div>
              <ul className="h-60 overflow-hidden">
                <AnimatePresence initial={false} mode="popLayout">
                  {rows.map((entry) => (
                    <EntryRow key={entry.id} entry={entry} isEstimating={entry.id === TEA.id && teaPhase === "estimating"} water={water} />
                  ))}
                </AnimatePresence>
              </ul>
            </div>
          </div>

          <ul className="space-y-9">
            {t.water.points.map((point, index) => (
              <li key={point.title} className="flex gap-4">
                <span className={`grid size-11 shrink-0 place-items-center rounded-2xl ${points[index].tone}`}>{points[index].icon}</span>
                <div>
                  <h3 className="text-[20px] leading-tight font-bold">{point.title}</h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-text-2">{point.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
