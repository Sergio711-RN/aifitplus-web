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
import { useEffect, useRef, useState } from "react";
import { DAY_TARGET_KCAL } from "../_lib/content";
import { sparkPath } from "./app-mark";
import { CountUp } from "./count-up";
import { DishArt } from "./food-thumb";
import { GlassMeter } from "./glass-meter";
import { PhoneFrame } from "./phone-frame";

// Copy from the app's «Как это работает» onboarding step
const STEPS = [
  { title: "Снимите тарелку", text: "Можно сделать пару кадров с разных сторон — так точнее." },
  { title: "ИИ разберёт блюдо", text: "Определит состав и порцию. Если что-то неясно — задаст короткий вопрос." },
  { title: "Следите за днём", text: "Главный экран покажет, сколько осталось и чего не хватает." },
];

const Plate = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden>
    <circle cx={24} cy={24} r={23} fill="var(--color-plate)" />
    <circle cx={24} cy={24} r={19} fill="var(--color-plate-well)" opacity={0.55} />
    <g transform="translate(24 24) scale(1.25) translate(-24 -24)">
      <DishArt dish="syrniki" />
    </g>
  </svg>
);

const SnapScreen = () => (
  <div className="flex h-full flex-col items-center pt-16">
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
        className="absolute inset-[9%]"
        animate={{ rotate: [0, -8, 6, 0], scale: [1, 0.96, 1.02, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Plate className="size-full" />
      </motion.div>
      <motion.div
        className="absolute inset-x-[4%] h-0.5 rounded-full bg-apricot shadow-[0_0_16px_4px_rgba(255,176,120,0.55)]"
        animate={{ top: ["6%", "94%", "6%"] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
    <div className="mt-auto mb-7 flex w-full items-center justify-between px-8">
      <div className="flex gap-1.5">
        {[0, 1].map((shot) => (
          <motion.span
            key={shot}
            className="size-10 overflow-hidden rounded-xl border border-line bg-surface-tile p-1"
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.6 + shot * 0.5, type: "spring", stiffness: 300, damping: 16 }}
          >
            <Plate className="size-full" />
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

const PARTS = [
  { name: "Сырники, 3 шт.", grams: "150 г", kcal: 324 },
  { name: "Сметана 15%", grams: "30 г", kcal: 48 },
  { name: "Ягодный соус", grams: "15 г", kcal: 28 },
];

const AnalyseScreen = () => (
  <div className="flex h-full flex-col px-4 pt-14">
    <div className="relative mx-auto size-32">
      <Plate className="size-full" />
      <motion.span
        className="absolute inset-0 rounded-full border-2 border-lilac"
        animate={{ scale: [1, 1.3], opacity: [0.8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity }}
      />
    </div>
    <div className="mt-5 space-y-2">
      {PARTS.map((part, index) => (
        <motion.div
          key={part.name}
          className="flex items-center justify-between rounded-2xl bg-surface px-3.5 py-2.5 text-[12px]"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 + index * 0.25, type: "spring", stiffness: 220, damping: 22 }}
        >
          <span className="font-semibold">{part.name}</span>
          <span className="text-text-3">
            {part.grams} <span className="ml-1 font-bold text-apricot">{part.kcal}</span>
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
        <Typewriter text="Сметана жирная или лёгкая? От этого зависит около 40 ккал." delay={1.4} />
      </div>
      <div className="mt-3 flex gap-2">
        {["15%", "20%"].map((option, index) => (
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
  const level = useMotionValue(0);

  useEffect(() => {
    const controls = animate(level, EATEN / DAY_TARGET_KCAL, { duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 });

    return () => controls.stop();
  }, [level]);

  const days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

  return (
    <div className="flex h-full flex-col px-4 pt-14">
      <div className="flex items-center justify-between">
        <span className="text-[17px] font-extrabold">Сегодня</span>
        <span className="rounded-full bg-surface px-2.5 py-1 text-[11px] font-bold text-apricot">12 дней подряд</span>
      </div>
      <div className="mt-3 flex justify-between">
        {days.map((day, index) => (
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
          <div className="text-[11px] text-text-3">Съедено</div>
          <div className="text-[30px] leading-none font-extrabold">
            <CountUp value={EATEN} duration={1.6} />
          </div>
          <div className="mt-1 text-[12px] text-text-2">из {DAY_TARGET_KCAL.toLocaleString("ru-RU")} ккал</div>
          <div className="mt-4 text-[11px] text-text-3">Осталось</div>
          <div className="text-[18px] font-bold text-apricot">
            <CountUp value={DAY_TARGET_KCAL - EATEN} duration={1.6} /> ккал
          </div>
        </div>
      </div>
      <div className="mt-5 space-y-2.5">
        {[
          { label: "Углеводы", value: 134, target: 236, color: "var(--color-apricot)" },
          { label: "Жиры", value: 52, target: 58, color: "var(--color-lilac)" },
          { label: "Белки", value: 70, target: 130, color: "var(--color-mint)" },
        ].map((macro, index) => (
          <div key={macro.label}>
            <div className="mb-1 flex justify-between text-[11px]">
              <span className="text-text-3">{macro.label}</span>
              <span>
                <span className="font-bold" style={{ color: macro.color }}>
                  {macro.value}
                </span>
                <span className="text-text-3"> / {macro.target} г</span>
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

export const HowItWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const railHeight = useTransform(progress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setActive(Math.min(STEPS.length - 1, Math.floor(value * STEPS.length)));
  });

  const Screen = SCREENS[active];

  return (
    <section ref={sectionRef} id="how" className="relative" style={{ height: `${STEPS.length * 100 + 40}vh` }}>
      <div className="sticky top-0 flex h-dvh items-center overflow-hidden px-5 md:px-10">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-24">
          <div className="order-2 lg:order-1">
            <h2 className="mb-6 text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.02] font-extrabold tracking-[-0.03em] lg:mb-12">
              Как это работает
            </h2>
            <ol className="relative space-y-2 pl-8 lg:space-y-8">
              {/* Progress rail */}
              <span className="absolute top-2 bottom-2 left-[7px] w-0.5 rounded-full bg-line" />
              <motion.span className="absolute top-2 left-[7px] w-0.5 rounded-full bg-apricot" style={{ height: railHeight }} />
              {STEPS.map((step, index) => (
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
                    <div className="text-[14px] font-semibold text-text-3">Шаг {index + 1}</div>
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

          <div className="order-1 mx-auto origin-top scale-[0.62] max-lg:-mb-[38%] sm:scale-75 sm:max-lg:-mb-[28%] lg:order-2 lg:scale-100 lg:max-xl:scale-90">
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
