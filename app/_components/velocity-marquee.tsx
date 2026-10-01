"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "motion/react";
import { useRef, type ReactNode } from "react";
import { MEALS } from "../_lib/content";
import { FoodThumb } from "./food-thumb";

/** Strip that drifts on its own and speeds up (and flips direction) with the page's scroll velocity */
const VelocityRow = ({ children, baseVelocity }: { children: ReactNode; baseVelocity: number }) => {
  const offset = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });
  const direction = useRef(1);
  const x = useTransform(offset, (value) => `${wrap(-25, -50, value)}%`);

  useAnimationFrame((_, delta) => {
    const factor = velocityFactor.get();
    if (factor < 0) direction.current = -1;
    else if (factor > 0) direction.current = 1;
    offset.set(offset.get() + direction.current * baseVelocity * (delta / 1000) * (1 + Math.abs(factor)));
  });

  return (
    <div className="flex overflow-hidden whitespace-nowrap">
      <motion.div className="flex shrink-0 gap-0" style={{ x }}>
        {[0, 1, 2, 3].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy > 0}>
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const ITEMS = Object.values(MEALS);

export const VelocityMarquee = () => (
  <section className="relative border-y border-line/70 bg-ink-deep/60 py-7" aria-label="Примеры распознанных блюд">
    <VelocityRow baseVelocity={-2.2}>
      {ITEMS.map((meal) => (
        <span key={meal.dish} className="mx-6 flex items-center gap-4">
          <FoodThumb dish={meal.dish} size={52} />
          <span className="text-[clamp(1.6rem,3.2vw,2.6rem)] font-bold tracking-tight">{meal.title}</span>
          <span className="text-[clamp(1.6rem,3.2vw,2.6rem)] font-light text-apricot tabular-nums">{meal.kcal}</span>
        </span>
      ))}
    </VelocityRow>
    <div className="mt-4 opacity-70">
      <VelocityRow baseVelocity={1.6}>
        {ITEMS.map((meal) => (
          <span key={meal.dish} className="mx-5 flex items-center gap-3 text-[15px] text-text-2">
            <span className="text-apricot">У {meal.carbsG} г</span>
            <span className="text-lilac">Ж {meal.fatG} г</span>
            <span className="text-mint">Б {meal.proteinG} г</span>
            <span className="ml-5 size-1.5 rounded-full bg-line" />
          </span>
        ))}
      </VelocityRow>
    </div>
  </section>
);
