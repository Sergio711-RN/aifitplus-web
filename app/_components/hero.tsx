"use client";

import { motion, useMotionTemplate, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import { useRef, type PointerEvent } from "react";
import { MEALS, type IMeal } from "../_lib/content";
import { FlairText } from "./flair-text";
import { FoodThumb } from "./food-thumb";
import { PhoneFrame } from "./phone-frame";
import { ScanDemo } from "./scan-demo";
import { StoreButtons } from "./store-buttons";

/** Recognised-meal cards floating around the phone; `depth` scales their response to the cursor */
const FLOATING: { meal: IMeal; className: string; rotate: number; depth: number }[] = [
  { meal: MEALS.lavash, className: "-left-44 top-[6%]", rotate: -6, depth: 34 },
  { meal: MEALS.cottage, className: "-right-36 top-[44%]", rotate: 5, depth: -26 },
  { meal: MEALS.yogurt, className: "-left-40 bottom-[30%]", rotate: 3, depth: 20 },
];

const FloatingCard = ({
  meal,
  className,
  rotate,
  depth,
  pointerX,
  pointerY,
  index,
}: (typeof FLOATING)[number] & { pointerX: ReturnType<typeof useSpring>; pointerY: ReturnType<typeof useSpring>; index: number }) => {
  const x = useTransform(pointerX, (value) => value * depth);
  const y = useTransform(pointerY, (value) => value * depth);

  return (
    <motion.div className={`absolute z-20 hidden lg:block ${className}`} style={{ x, y }}>
      <motion.div
        className="flex items-center gap-2.5 rounded-[18px] border border-line bg-surface-raised/90 py-2 pr-4 pl-2 shadow-[0_14px_30px_rgba(0,0,0,0.35)] backdrop-blur-md"
        initial={{ opacity: 0, scale: 0.6, rotate: rotate * 3 }}
        animate={{ opacity: 1, scale: 1, rotate, y: [0, -10, 0] }}
        transition={{
          opacity: { delay: 1.2 + index * 0.18 },
          scale: { delay: 1.2 + index * 0.18, type: "spring", stiffness: 200, damping: 14 },
          rotate: { delay: 1.2 + index * 0.18, type: "spring", stiffness: 200, damping: 14 },
          y: { delay: 2 + index * 0.4, duration: 4 + index, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <FoodThumb dish={meal.dish} size={40} />
        <div>
          <div className="text-[13px] font-semibold whitespace-nowrap">{meal.title}</div>
          <div className="text-[13px] font-bold text-apricot">{meal.kcal} ккал</div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  // Cursor position over the hero, -0.5…0.5 on both axes
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 80, damping: 18 });
  const smoothY = useSpring(pointerY, { stiffness: 80, damping: 18 });
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-14, 14]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [10, -10]);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(30);
  const glow = useMotionTemplate`radial-gradient(600px circle at ${glowX}% ${glowY}%, rgba(255,176,120,0.10), transparent 60%)`;

  // Leaving the hero, the phone sinks and the copy drifts up slower than the page
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const phoneScale = useTransform(scrollYProgress, [0, 1], [1, 0.88]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const onPointerMove = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const relX = (event.clientX - rect.left) / rect.width;
    const relY = (event.clientY - rect.top) / rect.height;
    pointerX.set(relX - 0.5);
    pointerY.set(relY - 0.5);
    glowX.set(relX * 100);
    glowY.set(relY * 100);
  };

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative isolate flex min-h-dvh items-center overflow-hidden px-5 pt-28 pb-16 md:px-10"
      onPointerMove={onPointerMove}
      onPointerLeave={() => {
        pointerX.set(0);
        pointerY.set(0);
      }}
    >
      {/* Evening sky: three macro-coloured glows drifting, stars, and a soft light following the cursor */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <motion.div
          className="absolute top-[-10%] left-[-10%] size-[620px] rounded-full bg-lilac/20 blur-[120px]"
          animate={{ x: [0, 120, 0], y: [0, 60, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[-12%] bottom-[-20%] size-[680px] rounded-full bg-apricot/15 blur-[140px]"
          animate={{ x: [0, -100, 0], y: [0, -80, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[30%] left-[40%] size-[380px] rounded-full bg-mint/10 blur-[110px]"
          animate={{ x: [0, 80, -60, 0], y: [0, -60, 40, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />
        <Stars />
        <motion.div className="absolute inset-0" style={{ background: glow }} />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div style={{ y: copyY, opacity: copyOpacity }}>
          <motion.div
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-lilac-line bg-lilac-surface/70 py-1.5 pr-4 pl-1.5 text-[14px] text-lilac backdrop-blur"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="rounded-full bg-lilac px-2.5 py-0.5 text-[12px] font-bold text-ink">ИИ</span>
            Блюдо, порция и БЖУ по одному снимку
          </motion.div>
          <FlairText
            text="Сфотографируйте еду. Калории посчитаются сами"
            className="max-w-[13ch] text-[clamp(2.75rem,7vw,5.6rem)] leading-[0.98] tracking-[-0.035em]"
            delay={0.2}
          />
          <motion.p
            className="mt-7 max-w-[34rem] text-[clamp(1.05rem,1.6vw,1.25rem)] leading-relaxed text-text-2"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            ИИ определит блюдо, вес порции, калории и БЖУ. Вам остаётся следить за днём.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <StoreButtons className="mt-9" />
          </motion.div>
        </motion.div>

        <motion.div className="relative mx-auto [perspective:1400px]" style={{ y: phoneY, scale: phoneScale }}>
          <motion.div
            initial={{ opacity: 0, y: 80, rotateX: 30 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.4, duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}>
              {/* Halo behind the phone */}
              <div className="absolute inset-[-12%] -z-10 rounded-full bg-[conic-gradient(from_0deg,var(--color-apricot),var(--color-lilac),var(--color-mint),var(--color-apricot))] opacity-25 blur-[70px] animate-[spin_14s_linear_infinite]" />
              <PhoneFrame>
                <ScanDemo />
              </PhoneFrame>
            </motion.div>
          </motion.div>
          {FLOATING.map((card, index) => (
            <FloatingCard key={card.meal.dish} {...card} pointerX={smoothX} pointerY={smoothY} index={index} />
          ))}
        </motion.div>
      </div>

      <ScrollHint />
    </section>
  );
};

/** Fixed pseudo-random starfield, twinkling */
const STARS = Array.from({ length: 46 }, (_, index) => ({
  left: (index * 37.3) % 100,
  top: (index * 53.7) % 70,
  size: index % 5 === 0 ? 2 : 1,
  delay: (index % 7) * 0.6,
}));

const Stars = () => (
  <div className="absolute inset-0">
    {STARS.map((star, index) => (
      <span
        key={index}
        className="absolute rounded-full bg-text"
        style={{
          left: `${star.left}%`,
          top: `${star.top}%`,
          width: star.size,
          height: star.size,
          animation: `twinkle 3.6s ${star.delay}s ease-in-out infinite`,
        }}
      />
    ))}
    <style>{`@keyframes twinkle { 0%,100% { opacity: .15 } 50% { opacity: .8 } }`}</style>
  </div>
);

const ScrollHint = () => (
  <motion.a
    href="#how"
    className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[13px] text-text-3 md:flex"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 2.2 }}
  >
    Листайте
    <span className="flex h-9 w-5 justify-center rounded-full border border-line pt-1.5">
      <motion.span
        className="block h-2 w-1 rounded-full bg-apricot"
        animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      />
    </span>
  </motion.a>
);
