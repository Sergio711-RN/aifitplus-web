"use client";

import { motion, useMotionTemplate, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import { useRef, type CSSProperties, type PointerEvent, type ReactNode } from "react";
import { useI18n } from "../_i18n/i18n-provider";
import { MEALS, type IMeal } from "../_lib/content";
import { FlairText } from "./flair-text";
import { FoodThumb } from "./food-thumb";
import { PhoneFrame } from "./phone-frame";
import { ScanDemo } from "./scan-demo";
import { StoreButtons } from "./store-buttons";

/** Recognised-meal cards floating around the phone; `depth` scales their response to the cursor.
 * The left ones are pinned by their right edge: a longer dish name (Ukrainian, Russian) grows away from the phone, not over its screen */
const FLOATING: { meal: IMeal; className: string; rotate: number; depth: number }[] = [
  { meal: MEALS.lavash, className: "right-[calc(100%-2.5rem)] top-[8%]", rotate: -6, depth: 34 },
  { meal: MEALS.salad, className: "-right-40 top-[42%]", rotate: 5, depth: -26 },
  { meal: MEALS.chickenRice, className: "right-[calc(100%-1.75rem)] bottom-[24%]", rotate: 3, depth: 20 },
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

/** Scales the phone mockup (laid out in fixed pixels) down to the space its box gets, never up — `.fit-phone` in `globals.css` */
const FitPhone = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={`fit-phone flex min-h-0 justify-center ${className ?? ""}`}>
    <div className="relative shrink-0">
      <div className="absolute top-0 left-0">{children}</div>
    </div>
  </div>
);

/** Drifting glows of the evening sky: position, size and colour; `to` — where it drifts and back, `via` — a second point */
const GLOWS: { className: string; to: [number, number]; via?: [number, number]; duration: number }[] = [
  { className: "top-[-10%] left-[-10%] size-[620px] bg-lilac/20 blur-[120px]", to: [120, 60], duration: 18 },
  { className: "right-[-12%] bottom-[-20%] size-[680px] bg-apricot/15 blur-[140px]", to: [-100, -80], duration: 22 },
  { className: "top-[30%] left-[40%] size-[380px] bg-mint/10 blur-[110px]", to: [80, -60], via: [-60, 40], duration: 26 },
];

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
        {GLOWS.map((glow) => (
          <div
            key={glow.className}
            className={`absolute rounded-full ${glow.className}`}
            style={
              {
                "--dx": `${glow.to[0]}px`,
                "--dy": `${glow.to[1]}px`,
                "--dx2": `${glow.via?.[0] ?? 0}px`,
                "--dy2": `${glow.via?.[1] ?? 0}px`,
                animation: `${glow.via ? "drift-2" : "drift"} ${glow.duration}s ease-in-out infinite`,
              } as CSSProperties
            }
          />
        ))}
        <Stars />
        <motion.div className="absolute inset-0" style={{ background: glow }} />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink" />
      </div>

      <div className="mx-auto flex min-h-0 w-full max-w-6xl flex-1 flex-col lg:grid lg:flex-none lg:grid-cols-[1.1fr_0.9fr] lg:grid-rows-[1fr_auto_auto_1fr] lg:gap-x-16 lg:[grid-template-areas:'._phone''head_phone''cta_phone''._phone']">
        <motion.div className="shrink-0 text-center lg:text-left lg:[grid-area:head]" style={{ y: copyY, opacity: copyOpacity }}>
          {/* The first screen enters with CSS animations, not Motion: it is visible before the scripts load */}
          <div
            className="mb-7 hidden animate-rise-in items-center gap-2 rounded-full border border-lilac-line bg-lilac-surface/70 py-1.5 pr-4 pl-1.5 text-[14px] text-lilac backdrop-blur lg:inline-flex"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="rounded-full bg-lilac px-2.5 py-0.5 text-[12px] font-bold text-ink">{t.hero.badgeAi}</span>
            {t.hero.badge}
          </div>
          <FlairText
            text={t.hero.title}
            className="mx-auto max-w-[16ch] text-[clamp(1.85rem,8.4vw,5.6rem)] lg:text-[clamp(3rem,4.9vw,4.5rem)] [text-wrap:balance] lg:[text-wrap:wrap] leading-[0.98] tracking-[-0.035em] lg:mx-0 lg:max-w-[16ch]"
            delay={0.2}
          />
        </motion.div>

        {/* On phones the mockup takes whatever height is left between the headline and the store buttons */}
        <FitPhone className="flex-1 py-4 sm:py-6 lg:h-[619px] lg:flex-none lg:self-center lg:py-0 lg:[grid-area:phone]">
          <motion.div className="relative [perspective:1400px]" style={{ y: phoneY, scale: phoneScale }}>
            {/* Tilts in around its top edge: the photo then starts no smaller than it ends up, and stays the largest image
                of the page for the browser (Largest Contentful Paint) — see `scan-demo.tsx` */}
            <div className="origin-top animate-phone-in" style={{ animationDelay: "0.4s" }}>
              <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}>
                {/* Halo behind the phone */}
                <div className="absolute inset-[-12%] -z-10 rounded-full bg-[conic-gradient(from_0deg,var(--color-apricot),var(--color-lilac),var(--color-mint),var(--color-apricot))] opacity-25 blur-[70px] animate-[spin_14s_linear_infinite]" />
                <PhoneFrame>
                  <ScanDemo />
                </PhoneFrame>
              </motion.div>
            </div>
            {FLOATING.map((card, index) => (
              <FloatingCard key={card.meal.dish} {...card} pointerX={smoothX} pointerY={smoothY} index={index} />
            ))}
          </motion.div>
        </FitPhone>

        <motion.div className="shrink-0 lg:[grid-area:cta]" style={{ y: copyY, opacity: copyOpacity }}>
          <p
            className="mt-7 hidden max-w-[30rem] animate-rise-in text-[clamp(1.05rem,1.6vw,1.25rem)] leading-relaxed text-text-2 lg:block"
            style={{ animationDelay: "1.1s" }}
          >
            {t.hero.subtitle}
          </p>
          <div className="animate-rise-in" style={{ animationDelay: "1.3s" }}>
            <StoreButtons stretch className="sm:mx-auto sm:max-w-md lg:mx-0 lg:mt-9 lg:max-w-none" />
          </div>
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
