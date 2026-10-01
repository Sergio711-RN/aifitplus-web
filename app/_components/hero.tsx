"use client";

import { motion, useMotionTemplate, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState, type PointerEvent, type ReactNode } from "react";
import { useI18n } from "../_i18n/i18n-provider";
import { MEALS, type IMeal } from "../_lib/content";
import { FlairText } from "./flair-text";
import { FoodThumb } from "./food-thumb";
import { PhoneFrame } from "./phone-frame";
import { ScanDemo } from "./scan-demo";
import { StoreButtons } from "./store-buttons";

/** Recognised-meal cards floating around the phone; `depth` scales their response to the cursor */
const FLOATING: { meal: IMeal; className: string; rotate: number; depth: number }[] = [
  { meal: MEALS.lavash, className: "-left-56 top-[8%]", rotate: -6, depth: 34 },
  { meal: MEALS.salad, className: "-right-40 top-[42%]", rotate: 5, depth: -26 },
  { meal: MEALS.chickenRice, className: "-left-60 bottom-[24%]", rotate: 3, depth: 20 },
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
  const { t } = useI18n();
  const x = useTransform(pointerX, (value) => value * depth);
  const y = useTransform(pointerY, (value) => value * depth);

  return (
    <motion.div className={`absolute z-20 hidden xl:block ${className}`} style={{ x, y }}>
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
          <div className="text-[13px] font-semibold whitespace-nowrap">{t.meals[meal.dish]}</div>
          <div className="text-[13px] font-bold text-apricot">{meal.kcal} {t.units.kcal}</div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const PHONE_WIDTH = 290;
const PHONE_HEIGHT = 619;

/** Scales the phone mockup (laid out in fixed pixels) down to the space its box gets, never up */
const FitPhone = ({ children, className }: { children: ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.8);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setScale(Math.max(0.5, Math.min(1, height / PHONE_HEIGHT, width / PHONE_WIDTH)));
    });
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`flex min-h-0 justify-center ${className ?? ""}`}>
      <div className="relative shrink-0" style={{ width: PHONE_WIDTH * scale, height: PHONE_HEIGHT * scale }}>
        <div className="absolute top-0 left-0 origin-top-left" style={{ width: PHONE_WIDTH, transform: `scale(${scale})` }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export const Hero = () => {
  const { t } = useI18n();
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
      className="relative isolate flex h-[100svh] min-h-[540px] flex-col overflow-hidden px-5 pt-[84px] pb-5 md:px-10 lg:h-auto lg:min-h-dvh lg:flex-row lg:items-center lg:pt-28 lg:pb-16"
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

      <div className="mx-auto flex min-h-0 w-full max-w-6xl flex-1 flex-col lg:grid lg:flex-none lg:grid-cols-[1.1fr_0.9fr] lg:grid-rows-[1fr_auto_auto_1fr] lg:gap-x-16 lg:[grid-template-areas:'._phone''head_phone''cta_phone''._phone']">
        <motion.div className="shrink-0 text-center lg:text-left lg:[grid-area:head]" style={{ y: copyY, opacity: copyOpacity }}>
          <motion.div
            className="mb-7 hidden items-center gap-2 rounded-full border border-lilac-line bg-lilac-surface/70 py-1.5 pr-4 pl-1.5 text-[14px] text-lilac backdrop-blur lg:inline-flex"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="rounded-full bg-lilac px-2.5 py-0.5 text-[12px] font-bold text-ink">{t.hero.badgeAi}</span>
            {t.hero.badge}
          </motion.div>
          <FlairText
            text={t.hero.title}
            className="mx-auto max-w-[16ch] text-[clamp(1.85rem,8.4vw,5.6rem)] lg:text-[clamp(3rem,4.9vw,4.5rem)] [text-wrap:balance] lg:[text-wrap:wrap] leading-[0.98] tracking-[-0.035em] lg:mx-0 lg:max-w-[16ch]"
            delay={0.2}
          />
        </motion.div>

        {/* On phones the mockup takes whatever height is left between the headline and the store buttons */}
        <FitPhone className="flex-1 py-4 sm:py-6 lg:h-[619px] lg:flex-none lg:self-center lg:py-0 lg:[grid-area:phone]">
          <motion.div className="relative [perspective:1400px]" style={{ y: phoneY, scale: phoneScale }}>
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
        </FitPhone>

        <motion.div className="shrink-0 lg:[grid-area:cta]" style={{ y: copyY, opacity: copyOpacity }}>
          <motion.p
            className="mt-7 hidden max-w-[34rem] text-[clamp(1.05rem,1.6vw,1.25rem)] leading-relaxed text-text-2 lg:block"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {t.hero.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <StoreButtons stretch className="sm:mx-auto sm:max-w-md lg:mx-0 lg:mt-9 lg:max-w-none" />
          </motion.div>
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

const ScrollHint = () => {
  const { t } = useI18n();

  return (
    <motion.a
      href="#how"
      className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[13px] text-text-3 lg:flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.2 }}
    >
      {t.hero.scroll}
      <span className="flex h-9 w-5 justify-center rounded-full border border-line pt-1.5">
        <motion.span
          className="block h-2 w-1 rounded-full bg-apricot"
          animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </span>
    </motion.a>
  );
};
