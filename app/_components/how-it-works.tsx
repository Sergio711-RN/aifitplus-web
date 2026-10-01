"use client";

import {
  animate,
  AnimatePresence,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "../_i18n/i18n-provider";
import { DAY_TARGET_KCAL, MEALS } from "../_lib/content";
import { sparkPath } from "./app-mark";
import { CountUp } from "./count-up";
import { GlassMeter } from "./glass-meter";
import { PhoneFrame } from "./phone-frame";

// Step copy is the app's «How it works» onboarding step (`t.how.steps`)
const STEP_COUNT = 3;

const SNAP_MEAL = MEALS.syrniki;

const Photo = ({ className, sizes = "300px" }: { className?: string; sizes?: string }) => (
  <span className={`relative block overflow-hidden ${className ?? ""}`}>
    <Image src={SNAP_MEAL.photo} alt="" fill sizes={sizes} className="object-cover" />
  </span>
);

const SnapScreen = () => (
  <div className="relative flex h-full flex-col items-center pt-16">
    <div className="absolute inset-0 scale-125 blur-xl brightness-[0.3] saturate-150">
      <Photo className="size-full" sizes="160px" />
    </div>
    <motion.div
      className="absolute inset-x-0 top-[38px] aspect-square [mask-image:radial-gradient(circle,#000_56%,transparent_71%)]"
      initial={{ scale: 1.2, filter: "blur(12px)" }}
      animate={{ scale: [1.2, 1, 1.06], filter: "blur(0px)" }}
      transition={{ scale: { duration: 6, times: [0, 0.15, 1], ease: "easeOut" }, filter: { duration: 0.8 } }}
    >
      <Photo className="size-full" />
    </motion.div>
    <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink/90 to-transparent" />
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
    <div className="relative aspect-square w-[80%]">
      {["top-0 left-0 border-t-[3px] border-l-[3px] rounded-tl-2xl", "top-0 right-0 border-t-[3px] border-r-[3px] rounded-tr-2xl", "bottom-0 left-0 border-b-[3px] border-l-[3px] rounded-bl-2xl", "bottom-0 right-0 border-b-[3px] border-r-[3px] rounded-br-2xl"].map((corner, index) => (
        <motion.span
          key={corner}
          className={`absolute size-10 border-apricot ${corner}`}
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 + index * 0.06, type: "spring", stiffness: 260, damping: 18 }}
        />
      ))}
      <motion.div
        className="absolute inset-x-[4%] h-0.5 rounded-full bg-apricot shadow-[0_0_16px_4px_rgba(255,176,120,0.55)]"
        animate={{ top: ["6%", "94%", "6%"] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
    <div className="relative mt-auto mb-7 flex w-full items-center justify-between px-8">
      <div className="flex gap-1.5">
        {[0, 1].map((shot) => (
          <motion.span
            key={shot}
            className="size-10 overflow-hidden rounded-xl border-2 border-text/80"
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.6 + shot * 0.5, type: "spring", stiffness: 300, damping: 16 }}
          >
            <Photo className="size-full" sizes="80px" />
          </motion.span>
        ))}
      </div>
      <span className="size-16 rounded-full border-4 border-text p-1">
        <motion.span className="block size-full rounded-full bg-text" animate={{ scale: [1, 0.85, 1] }} transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 1.2 }} />
      </span>
      <span className="size-10" />
    </div>
  </div>
);

/** What the AI found on the plate; names are `t.how.parts` in the same order */
const PARTS = [
  { grams: 200, kcal: 396 },
  { grams: 80, kcal: 34 },
  { grams: 40, kcal: 28 },
];

const AnalyseScreen = () => {
  const { t } = useI18n();

  return (
    <div className="flex h-full flex-col px-4 pt-14">
      <div className="relative mx-auto size-32">
        <Photo className="size-full rounded-full" sizes="256px" />
        <motion.span
          className="absolute inset-0 rounded-full border-2 border-lilac"
          animate={{ scale: [1, 1.3], opacity: [0.8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        />
      </div>
      <div className="mt-5 space-y-2">
        {PARTS.map((part, index) => (
          <motion.div
            key={part.grams}
            className="flex items-center justify-between rounded-2xl bg-surface px-3.5 py-2.5 text-[12px]"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.25, type: "spring", stiffness: 220, damping: 22 }}
          >
            <span className="font-semibold">{t.how.parts[index]}</span>
            <span className="text-text-3">
              {part.grams} {t.units.g} <span className="ml-1 font-bold text-apricot">{part.kcal}</span>
            </span>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="mt-4 rounded-2xl border border-lilac-line bg-lilac-surface p-3.5"
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.1, type: "spring", stiffness: 200, damping: 20 }}
      >
        <div className="flex items-start gap-2 text-[12px] leading-snug text-text">
          <svg viewBox="0 0 20 20" className="mt-0.5 size-3.5 shrink-0 text-lilac" aria-hidden>
            <path d={sparkPath(10, 10, 10)} fill="currentColor" />
          </svg>
          <Typewriter text={t.how.question} delay={1.4} />
        </div>
        <div className="mt-3 flex gap-2">
          {t.how.answers.map((option, index) => (
            <motion.span
              key={option}
              className={`rounded-full px-3.5 py-1.5 text-[12px] font-semibold ${index === 0 ? "bg-lilac text-ink" : "bg-surface-tile text-text-2"}`}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.6 + index * 0.1, type: "spring", stiffness: 300, damping: 16 }}
            >
              {option}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
);
};

/** Text typed letter by letter, with a blinking caret while typing */
export const Typewriter = ({ text, delay = 0, speed = 28 }: { text: string; delay?: number; speed?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval = 0;
    const start = window.setTimeout(() => {
      interval = window.setInterval(() => {
        setCount((value) => {
          if (value >= text.length) window.clearInterval(interval);
          return Math.min(value + 1, text.length);
        });
      }, speed);
    }, delay * 1000);

    return () => {
      window.clearTimeout(start);
      window.clearInterval(interval);
    };
  }, [delay, speed, text]);

  return (
    <span aria-label={text}>
      <span aria-hidden>{text.slice(0, count)}</span>
      {count < text.length && <span aria-hidden className="ml-px inline-block h-[1em] w-0.5 translate-y-0.5 animate-pulse bg-lilac" />}
    </span>
  );
};

const EATEN = 1240;

const HomeScreen = () => {
  const { t, formatNumber } = useI18n();
  const level = useMotionValue(0);

  useEffect(() => {
    const controls = animate(level, EATEN / DAY_TARGET_KCAL, { duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 });

    return () => controls.stop();
  }, [level]);

  return (
    <div className="flex h-full flex-col px-4 pt-14">
      <div className="flex items-center justify-between">
        <span className="text-[17px] font-extrabold">{t.how.today}</span>
        <span className="rounded-full bg-surface px-2.5 py-1 text-[11px] font-bold text-apricot">{t.how.streak}</span>
      </div>
      <div className="mt-3 flex justify-between">
        {t.how.weekdays.map((day, index) => (
          <motion.span
            key={day}
            className={`flex h-12 w-8 flex-col items-center justify-center gap-1 rounded-xl text-[10px] ${index === 3 ? "bg-apricot text-ink" : "bg-surface text-text-3"}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.04 }}
          >
            {day}
            <span className={`size-1.5 rounded-full ${index < 3 ? "bg-mint" : index === 3 ? "bg-ink" : "bg-line"}`} />
          </motion.span>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-5">
        <GlassMeter level={level} width={86} height={196} />
        <div>
          <div className="text-[11px] text-text-3">{t.how.eaten}</div>
          <div className="text-[30px] leading-none font-extrabold">
            <CountUp value={EATEN} duration={1.6} />
          </div>
          <div className="mt-1 text-[12px] text-text-2">{t.common.ofKcal(formatNumber(DAY_TARGET_KCAL))}</div>
          <div className="mt-4 text-[11px] text-text-3">{t.how.left}</div>
          <div className="text-[18px] font-bold text-apricot">
            <CountUp value={DAY_TARGET_KCAL - EATEN} duration={1.6} /> {t.units.kcal}
          </div>
        </div>
      </div>
      <div className="mt-5 space-y-2.5">
        {[
          { label: t.macros.carbs, value: 134, target: 236, color: "var(--color-apricot)" },
          { label: t.macros.fats, value: 52, target: 58, color: "var(--color-lilac)" },
          { label: t.macros.protein, value: 70, target: 130, color: "var(--color-mint)" },
        ].map((macro, index) => (
          <div key={macro.label}>
            <div className="mb-1 flex justify-between text-[11px]">
              <span className="text-text-3">{macro.label}</span>
              <span>
                <span className="font-bold" style={{ color: macro.color }}>
                  {macro.value}
                </span>
                <span className="text-text-3">
                  {" "}
                  / {macro.target} {t.units.g}
                </span>
              </span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-surface-muted">
              <motion.div
                className="h-full origin-left rounded-full"
                style={{ background: macro.color }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: macro.value / macro.target }}
                transition={{ delay: 0.4 + index * 0.12, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SCREENS = [SnapScreen, AnalyseScreen, HomeScreen];

/** Glow behind the phone per step, in the meaning of the app colours: apricot — the action, lilac — AI, mint — progress */
const STEP_GLOWS = ["rgba(255, 176, 120, 0.26)", "rgba(183, 166, 255, 0.3)", "rgba(127, 216, 190, 0.24)"];

const Backdrop = ({ active }: { active: number }) => (
  <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
    <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--color-ink)_0%,#171c3a_45%,#151a34_70%,var(--color-ink)_100%)]" />
    <motion.div
      className="absolute top-[-12%] left-1/2 size-[560px] -translate-x-1/2 rounded-full blur-[110px] lg:top-1/2 lg:right-[-6%] lg:left-auto lg:size-[880px] lg:translate-x-0 lg:-translate-y-1/2"
      animate={{ backgroundColor: STEP_GLOWS[active], scale: [1, 1.08, 1] }}
      transition={{ backgroundColor: { duration: 1.2, ease: "easeInOut" }, scale: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
    />
    <motion.div
      className="absolute -top-48 -left-40 size-[620px] rounded-full bg-lilac/10 blur-[130px]"
      animate={{ x: [0, 80, 0], y: [0, 50, 0] }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute -bottom-56 left-[20%] size-[560px] rounded-full bg-apricot/[0.07] blur-[130px]"
      animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
      transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
    />
    {/* Dot grid, fading out away from the phone */}
    <div className="absolute inset-0 [background-image:radial-gradient(rgba(238,240,255,0.09)_1px,transparent_1.5px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_55%_60%_at_50%_30%,#000,transparent)] lg:[mask-image:radial-gradient(ellipse_50%_70%_at_75%_50%,#000,transparent)]" />
  </div>
);

export const HowItWorks = () => {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const railHeight = useTransform(progress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setActive(Math.min(STEP_COUNT - 1, Math.floor(value * STEP_COUNT)));
  });

  const Screen = SCREENS[active];

  return (
    <section ref={sectionRef} id="how" className="relative" style={{ height: `${STEP_COUNT * 100 + 40}vh` }}>
      <div className="sticky top-0 isolate flex h-dvh items-center overflow-hidden px-5 md:px-10">
        <Backdrop active={active} />
        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-24 lg:pr-12">
          <div className="order-2 lg:order-1">
            <h2 className="mb-4 text-[clamp(1.75rem,4.5vw,3.5rem)] leading-[1.02] font-extrabold tracking-[-0.03em] lg:mb-12">
              {t.how.title}
            </h2>
            <ol className="relative space-y-1 pl-8 lg:space-y-8">
              {/* Progress rail */}
              <span className="absolute top-2 bottom-2 left-[7px] w-0.5 rounded-full bg-line" />
              <motion.span className="absolute top-2 left-[7px] w-0.5 rounded-full bg-apricot" style={{ height: railHeight }} />
              {t.how.steps.map((step, index) => (
                <li key={step.title} className="relative">
                  <motion.span
                    className="absolute top-2 -left-8 grid size-4 place-items-center rounded-full border-2"
                    animate={{
                      borderColor: index <= active ? "var(--color-apricot)" : "var(--color-line)",
                      backgroundColor: index < active ? "var(--color-apricot)" : "var(--color-ink)",
                      scale: index === active ? 1.25 : 1,
                    }}
                  />
                  <motion.div animate={{ opacity: index === active ? 1 : 0.35 }} transition={{ duration: 0.4 }}>
                    <div className="text-[14px] font-semibold text-text-3">{t.how.step(index + 1)}</div>
                    <h3 className="text-[clamp(1.35rem,2.4vw,2rem)] font-bold tracking-tight">{step.title}</h3>
                    <AnimatePresence initial={false}>
                      {index === active && (
                        <motion.p
                          className="max-w-md overflow-hidden text-[16px] leading-relaxed text-text-2 lg:text-[18px]"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <span className="block pt-2">{step.text}</span>
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </li>
              ))}
            </ol>
          </div>

          <div className="order-1 mx-auto -mb-[260px] origin-top scale-[0.58] sm:-mb-[93px] sm:scale-[0.85] lg:order-2 lg:mb-0 lg:origin-center lg:scale-110 lg:[@media(min-height:860px)]:scale-125 lg:[@media(min-height:960px)]:scale-[1.38]">
            <PhoneFrame>
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={active}
                  className="absolute inset-0"
                  initial={{ clipPath: "circle(0% at 50% 85%)" }}
                  animate={{ clipPath: "circle(150% at 50% 85%)" }}
                  exit={{ opacity: 0.4, scale: 0.94, filter: "blur(6px)" }}
                  transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
                  style={{ background: "var(--color-ink)" }}
                >
                  <Screen />
                </motion.div>
              </AnimatePresence>
            </PhoneFrame>
          </div>
        </div>
      </div>
    </section>
  );
};
