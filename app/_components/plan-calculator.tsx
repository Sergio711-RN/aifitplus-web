"use client";

import { motion, useInView } from "motion/react";
import { useId, useRef, useState } from "react";
import { LOCALE_META } from "../_i18n/config";
import { useI18n } from "../_i18n/i18n-provider";
import { buildPlan, DEFAULT_PLAN_INPUT, type Activity, type Goal, type IPlanInput, type Sex } from "../_lib/nutrition-plan";
import { calcWaterGoal, formatWater } from "../_lib/water-plan";
import { CountUp } from "./count-up";
import { type IGlow, SectionBackdrop } from "./section-backdrop";
import { DropIcon } from "./water-day";

const Segmented = <T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: { value: T; label: string }[];
  onChange: (value: T) => void;
}) => {
  const id = useId();

  return (
    <fieldset>
      <legend className="mb-2 text-[14px] text-text-3">{label}</legend>
      <div className="flex rounded-full bg-surface p-1">
        {options.map((option) => (
          <label key={option.value} className="relative flex-1 cursor-pointer text-center">
            <input
              type="radio"
              name={id}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className="peer sr-only"
            />
            {value === option.value && (
              <motion.span
                layoutId={`${id}-pill`}
                className="absolute inset-0 rounded-full bg-surface-tile"
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
              />
            )}
            <span
              className={`relative block rounded-full px-2 py-2 text-[14px] font-semibold transition-colors peer-focus-visible:outline-2 peer-focus-visible:outline-apricot ${
                value === option.value ? "text-text" : "text-text-3 hover:text-text-2"
              }`}
            >
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
};

const Slider = ({
  label,
  unit,
  value,
  min,
  max,
  onChange,
}: {
  label: string;
  unit: string;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}) => {
  const id = useId();
  const percent = ((value - min) / (max - min)) * 100;

  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between">
        <label htmlFor={id} className="text-[14px] text-text-3">
          {label}
        </label>
        <span className="text-[18px] font-bold tabular-nums">
          {value} <span className="text-[13px] font-medium text-text-3">{unit}</span>
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full [&::-moz-range-thumb]:size-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-4 [&::-moz-range-thumb]:border-ink [&::-moz-range-thumb]:bg-apricot [&::-webkit-slider-thumb]:size-6 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-ink [&::-webkit-slider-thumb]:bg-apricot [&::-webkit-slider-thumb]:shadow-[0_0_0_2px_var(--color-apricot)] [&::-webkit-slider-thumb]:transition-transform active:[&::-webkit-slider-thumb]:scale-125"
        style={{ background: `linear-gradient(to right, var(--color-apricot) ${percent}%, var(--color-surface-muted) ${percent}%)` }}
      />
    </div>
  );
};

/** Concentric macro rings, as in the app's loader after sign-in; each ring shows the share of calories */
const MacroRings = ({ shares, calories }: { shares: { color: string; share: number }[]; calories: number }) => {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
  <div ref={ref} className="relative mx-auto aspect-square w-full max-w-[340px]">
    <svg viewBox="0 0 200 200" className="size-full -rotate-90" aria-hidden>
      {shares.map((ring, index) => {
        const radius = 92 - index * 18;

        return (
          <g key={ring.color}>
            <circle cx={100} cy={100} r={radius} fill="none" stroke="var(--color-surface-muted)" strokeWidth={12} />
            <motion.circle
              cx={100}
              cy={100}
              r={radius}
              fill="none"
              stroke={ring.color}
              strokeWidth={12}
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: isInView ? ring.share : 0 }}
              transition={{ type: "spring", stiffness: 60, damping: 16, delay: index * 0.1 }}
            />
          </g>
        );
      })}
    </svg>
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <span className="text-[13px] text-text-3">{t.plan.perDay}</span>
      <CountUp value={calories} duration={0.9} className="text-[44px] leading-none font-extrabold tracking-tight" />
      <span className="text-[14px] text-text-2">{t.units.kcal}</span>
    </div>
  </div>
  );
};

/** The plan is the AI's work, so lilac leads behind the card; apricot and mint are the macros it splits the norm into */
const PLAN_GLOWS: IGlow[] = [
  { className: "top-1/3 left-1/2 h-[500px] w-[min(56rem,100%)] -translate-x-1/2 bg-lilac/20 blur-[140px]", x: [0, 60, -60, 0], y: [0, 30, 0, 0], duration: 22 },
  { className: "top-[-10%] right-[-10%] size-[520px] bg-apricot/15 blur-[130px]", x: [0, -80, 0], y: [0, 60, 0], duration: 20 },
  { className: "bottom-[-12%] left-[-12%] size-[520px] bg-mint/10 blur-[130px]", x: [0, 80, 0], y: [0, -50, 0], duration: 24 },
];

export const PlanCalculator = () => {
  const { t, locale } = useI18n();
  const [input, setInput] = useState<IPlanInput>(DEFAULT_PLAN_INPUT);
  const plan = buildPlan(input);
  const waterMl = calcWaterGoal(input);
  const set = <K extends keyof IPlanInput>(key: K) => (value: IPlanInput[K]) => setInput((current) => ({ ...current, [key]: value }));

  const macros = [
    { label: t.macros.carbs, grams: plan.carbsG, kcal: plan.carbsG * 4, color: "var(--color-apricot)" },
    { label: t.macros.fats, grams: plan.fatG, kcal: plan.fatG * 9, color: "var(--color-lilac)" },
    { label: t.macros.protein, grams: plan.proteinG, kcal: plan.proteinG * 4, color: "var(--color-mint)" },
  ];

  return (
    <section id="plan" className="relative isolate px-5 py-28 md:px-10 md:py-40">
      <SectionBackdrop glows={PLAN_GLOWS} />
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.02] font-extrabold tracking-[-0.03em]">
            {t.plan.title}
          </h2>
          <p className="mt-5 text-[18px] leading-relaxed text-text-2">
            {t.plan.text}
          </p>
        </div>

        <div className="mt-14 grid items-center gap-12 rounded-[32px] border border-line bg-surface/60 p-6 backdrop-blur-sm sm:p-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div className="space-y-7">
            <div className="grid gap-5 sm:grid-cols-2">
              <Segmented<Sex>
                label={t.plan.sex}
                value={input.sex}
                onChange={set("sex")}
                options={[
                  { value: "female", label: t.plan.female },
                  { value: "male", label: t.plan.male },
                ]}
              />
              <Segmented<Goal>
                label={t.plan.goal}
                value={input.goal}
                onChange={set("goal")}
                options={[
                  { value: "lose", label: t.plan.lose },
                  { value: "maintain", label: t.plan.maintain },
                  { value: "gain", label: t.plan.gain },
                ]}
              />
            </div>
            <Slider label={t.plan.weight} unit={t.units.kg} value={input.weightKg} min={40} max={150} onChange={set("weightKg")} />
            <Slider label={t.plan.height} unit={t.units.cm} value={input.heightCm} min={140} max={210} onChange={set("heightCm")} />
            <Slider label={t.plan.age} unit={t.units.years} value={input.age} min={16} max={80} onChange={set("age")} />
            <Segmented<Activity>
              label={t.plan.activity}
              value={input.activity}
              onChange={set("activity")}
              options={[
                { value: "sedentary", label: t.plan.sedentary },
                { value: "light", label: t.plan.light },
                { value: "moderate", label: t.plan.moderate },
                { value: "high", label: t.plan.high },
              ]}
            />
          </div>

          <div>
            <MacroRings shares={macros.map((macro) => ({ color: macro.color, share: macro.kcal / plan.calories }))} calories={plan.calories} />
            <div className="mt-8 grid grid-cols-3 gap-3">
              {macros.map((macro) => (
                <div key={macro.label} className="rounded-2xl bg-surface-muted/60 p-3 text-center sm:p-4">
                  <div className="text-[13px] text-text-3">{macro.label}</div>
                  <div className="mt-1 text-[24px] font-extrabold sm:text-[28px]" style={{ color: macro.color }}>
                    <CountUp value={macro.grams} duration={0.7} />
                    <span className="ml-0.5 text-[14px] font-semibold">{t.units.g}</span>
                  </div>
                </div>
              ))}
            </div>
            {/* Water: the same weight and activity, as on the app's «Норма воды» */}
            <div className="mt-3 flex items-center justify-between gap-3 rounded-2xl bg-surface-muted/60 px-4 py-3">
              <span className="flex items-center gap-2 text-[13px] text-text-3">
                <DropIcon className="h-4 w-3.5 text-water" />
                {t.plan.water}
              </span>
              <span className="text-right">
                <span className="text-[22px] font-extrabold text-water tabular-nums">{formatWater(waterMl, LOCALE_META[locale].intl, t.units)}</span>{" "}
                <span className="text-[13px] text-text-3">{t.plan.waterPerDay}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
