"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { DAY, DAY_TARGET_KCAL, MEALS, type IMeal } from "../_lib/content";
import { Spark } from "./app-mark";
import { CountUp } from "./count-up";
import { FoodThumb } from "./food-thumb";
import { GlassMeter } from "./glass-meter";
import { Typewriter } from "./how-it-works";

const PROTEIN_TARGET_G = 130;
const TIP_MEAL = MEALS.cottage;

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

const MealRow = ({ time, label, meal, isVisible, isNew = false }: { time: string; label: string; meal: IMeal; isVisible: boolean; isNew?: boolean }) => (
  <motion.li
    className="relative grid grid-cols-[3.4rem_1fr] gap-10 sm:grid-cols-[4.5rem_1fr]"
    initial={false}
    animate={{ opacity: isVisible ? 1 : 0.12, x: isVisible ? 0 : 40, filter: isVisible ? "blur(0px)" : "blur(6px)" }}
    transition={{ type: "spring", stiffness: 140, damping: 20 }}
  >
    <div className="pt-4 text-right">
      <div className="text-[15px] font-bold tabular-nums">{time}</div>
      <div className="text-[12px] text-text-3">{label}</div>
    </div>
    <div className="relative">
      <motion.span
        className="absolute top-6 -left-[26px] size-3 rounded-full border-2 border-ink"
        animate={{ backgroundColor: isVisible ? "var(--color-apricot)" : "var(--color-line)", scale: isVisible ? [1, 1.6, 1] : 1 }}
        transition={{ duration: 0.5 }}
      />
      <div
        className={`rounded-[22px] border p-4 transition-colors ${isNew ? "border-mint/50 bg-mint/5" : "border-line bg-surface-raised"}`}
      >
        <div className="flex items-center gap-3">
          <FoodThumb dish={meal.dish} size={46} />
          <div className="min-w-0 flex-1">
            <div className="truncate text-[15px] font-semibold sm:text-[16px]">{meal.title}</div>
            <div className="mt-0.5 flex gap-3 text-[12px] font-semibold">
              <span className="text-apricot">У {meal.carbsG}</span>
              <span className="text-lilac">Ж {meal.fatG}</span>
              <span className="text-mint">Б {meal.proteinG}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-[20px] leading-none font-extrabold text-apricot tabular-nums">{meal.kcal}</div>
            <div className="text-[11px] text-text-3">ккал</div>
          </div>
        </div>
        <ShareStrip meal={meal} isVisible={isVisible} />
      </div>
    </div>
  </motion.li>
);

export const DayTimeline = () => {
  const listRef = useRef<HTMLOListElement>(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const [isTipAdded, setIsTipAdded] = useState(false);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 80%", "end 75%"] });
  const railProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 26 });
  const railScale = useTransform(railProgress, [0, 1], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setVisibleCount(Math.min(DAY.length + 1, Math.floor(value * (DAY.length + 1) + 0.6)));
  });

  const eaten = DAY.slice(0, visibleCount).map((entry) => entry.meal);
  if (isTipAdded) eaten.push(TIP_MEAL);
  const eatenKcal = eaten.reduce((sum, meal) => sum + meal.kcal, 0);
  const eatenProtein = eaten.reduce((sum, meal) => sum + meal.proteinG, 0);
  const isTipVisible = visibleCount > DAY.length;
  const dayProtein = DAY.reduce((sum, entry) => sum + entry.meal.proteinG, 0);

  const level = useSpring(0, { stiffness: 60, damping: 14 });
  useEffect(() => {
    level.set(eatenKcal / DAY_TARGET_KCAL);
  }, [eatenKcal, level]);

  return (
    <section id="day" className="relative px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.02] font-extrabold tracking-[-0.03em]">
            Весь день на одном экране
          </h2>
          <p className="mt-5 text-[18px] leading-relaxed text-text-2">
            Каждый приём пищи встаёт в ленту дня, а «стакан» наполняется съеденным. Видно, сколько ещё можно и чего не хватает.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-[76px_1fr] gap-5 sm:gap-10 md:grid-cols-[auto_1fr] md:gap-20">
          {/* Sticky glass */}
          <div className="relative">
            <div className="sticky top-28 flex flex-col items-center gap-4 md:flex-row md:items-end md:gap-7">
              <div className="md:hidden">
                <GlassMeter level={level} width={64} height={190} />
              </div>
              <div className="hidden md:block">
                <GlassMeter level={level} width={128} height={340} />
              </div>
              <div className="text-center md:pb-2 md:text-left">
                <div className="text-[28px] leading-none font-extrabold md:text-[56px]">
                  <CountUp value={eatenKcal} duration={0.8} />
                </div>
                <div className="mt-1 text-[12px] text-text-3 md:text-[15px]">из {DAY_TARGET_KCAL.toLocaleString("ru-RU")} ккал</div>
                <div className="mt-5 hidden md:block">
                  <div className="text-[13px] text-text-3">Белки</div>
                  <div className="text-[22px] font-bold text-mint">
                    <CountUp value={eatenProtein} duration={0.8} />
                    <span className="text-[14px] font-medium text-text-3"> / {PROTEIN_TARGET_G} г</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <ol ref={listRef} className="relative space-y-6">
            <span className="absolute top-3 bottom-3 left-[calc(3.4rem+2.5rem-21px)] w-0.5 rounded-full bg-line sm:left-[calc(4.5rem+2.5rem-21px)]" />
            <motion.span
              className="absolute top-3 bottom-3 left-[calc(3.4rem+2.5rem-21px)] w-0.5 origin-top rounded-full bg-gradient-to-b from-apricot via-lilac to-mint sm:left-[calc(4.5rem+2.5rem-21px)]"
              style={{ scaleY: railScale }}
            />
            {DAY.map((entry, index) => (
              <MealRow key={entry.time} {...entry} isVisible={index < visibleCount} />
            ))}
            <AnimatePresence>
              {isTipAdded && <MealRow time="19:10" label="Ужин" meal={TIP_MEAL} isVisible isNew />}
            </AnimatePresence>

            {/* AI tip, like on the app's Home */}
            <motion.li
              className="grid grid-cols-[3.4rem_1fr] gap-10 sm:grid-cols-[4.5rem_1fr]"
              animate={{ opacity: isTipVisible ? 1 : 0, y: isTipVisible ? 0 : 30 }}
              transition={{ type: "spring", stiffness: 140, damping: 20 }}
            >
              <div className="flex justify-end pt-4">
                <Spark className="size-5 text-lilac" spin />
              </div>
              <div className="rounded-[22px] border border-lilac-line bg-lilac-surface p-4 sm:p-5">
                <div className="text-[13px] font-semibold text-lilac">Совет ИИ</div>
                <p className="mt-1.5 min-h-[3em] text-[15px] leading-relaxed sm:text-[16px]">
                  {isTipVisible && (
                    <Typewriter
                      text={`Белка пока ${dayProtein} из ${PROTEIN_TARGET_G} г. Ужин с творогом, тунцом или курицей закроет около ${TIP_MEAL.proteinG} г.`}
                      speed={22}
                    />
                  )}
                </p>
                <motion.button
                  type="button"
                  disabled={isTipAdded}
                  onClick={() => setIsTipAdded(true)}
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-lilac px-4 py-2 text-[14px] font-bold text-ink transition-opacity disabled:bg-mint"
                  whileTap={{ scale: 0.94 }}
                  layout
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={isTipAdded ? "done" : "add"}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                    >
                      {isTipAdded ? "Добавлено в ужин" : "Добавить творог 5%, 200 г"}
                    </motion.span>
                  </AnimatePresence>
                </motion.button>
              </div>
            </motion.li>
          </ol>
        </div>
      </div>
    </section>
  );
};
