// Subset of the app's water goal and day stages (aifitplus/src/utils/water-plan.ts) — keep the numbers in sync.

import type { Activity, Sex } from "./nutrition-plan";

/** EFSA 2010, Dietary Reference Values for water: adequate total intake a day, from food and drinks */
const WATER_TOTAL_ML: Record<Sex, number> = { female: 2000, male: 2500 };
/** The rule of thumb other apps use: the total by weight, when it is above the EFSA value */
const WATER_ML_PER_KG = 30;
/** Drinks give about 80% of the water, food the rest (EFSA: 20–30% from food) */
const WATER_DRINK_SHARE = 0.8;
/** On top for the activity: a guide, not a measurement */
const WATER_ACTIVITY_ML: Record<Activity, number> = { sedentary: 0, light: 150, moderate: 350, high: 500 };
/** The calculated goal stays in this range: never a push towards too much water */
const WATER_GOAL_RANGE = { min: 1500, max: 3500 };
/** More drops would not fit in the card: each then stands for a bigger share of the goal */
const WATER_MAX_DROPS = 12;
/** From here a day is «much more than usual» — a soft hint, never a block. Twice the goal, but never above this */
const WATER_CAUTION_MAX_ML = 5000;

const roundTo = (value: number, step: number): number => Math.round(value / step) * step;

/** The daily water goal from drinks: the larger of EFSA and 30 ml × weight, 80% of it, plus the activity */
export const calcWaterGoal = ({ sex, weightKg, activity }: { sex: Sex; weightKg: number; activity: Activity }): number => {
  const drinksMl = Math.round(Math.max(WATER_TOTAL_ML[sex], Math.round(weightKg * WATER_ML_PER_KG)) * WATER_DRINK_SHARE);

  return Math.min(Math.max(roundTo(drinksMl + WATER_ACTIVITY_ML[activity], 50), WATER_GOAL_RANGE.min), WATER_GOAL_RANGE.max);
};

/**
 * The app's statuses without `notStarted` and `late`: the landing's moment is always inside the water day.
 * `done` — the goal is drunk (`overMl` above it, said neutrally); `tooMuch` — twice the goal or more
 */
export type WaterStatus = "done" | "tooMuch" | "onTrack" | "behind";

export interface IWaterSchedule {
  /** How full each drop is, 0–1 */
  fills: number[];
  status: WaterStatus;
  /** On track: by when the next glass is due, minutes from midnight; `null` — otherwise */
  nextBy: number | null;
  /** Drunk above the goal */
  overMl: number;
}

/**
 * The goal spread evenly over the water day (minutes from midnight): stages are glasses due by a time. Drunk ahead
 * closes the next stages too; a whole glass behind is «behind»
 */
export const getWaterSchedule = (
  goalMl: number,
  drunkMl: number,
  glassMl: number,
  now: number,
  day: { start: number; end: number },
): IWaterSchedule => {
  const drops = Math.min(Math.max(Math.ceil(goalMl / glassMl), 1), WATER_MAX_DROPS);
  const dropMl = goalMl / drops;
  const fills = Array.from({ length: drops }, (_, index) => Math.min(Math.max((drunkMl - index * dropMl) / dropMl, 0), 1));
  const length = day.end - day.start;
  const expectedMl = Math.round(goalMl * Math.min(Math.max((now - day.start) / length, 0), 1));
  const overMl = Math.max(drunkMl - goalMl, 0);
  const base = { fills, nextBy: null, overMl };

  if (drunkMl >= Math.min(goalMl * 2, WATER_CAUTION_MAX_ML)) return { ...base, status: "tooMuch" };
  if (drunkMl >= goalMl) return { ...base, status: "done" };
  if (expectedMl - drunkMl >= glassMl) return { ...base, status: "behind" };

  return { ...base, status: "onTrack", nextBy: Math.round(day.start + Math.min((drunkMl + glassMl) / goalMl, 1) * length) };
};

/** «250 мл», «1,8 л» — as the app's `formatWater` in metric units */
export const formatWater = (ml: number, intl: string, units: { ml: string; l: string }): string =>
  ml < 1000
    ? `${String(Math.round(ml))} ${units.ml}`
    : `${new Intl.NumberFormat(intl, { maximumFractionDigits: 2, useGrouping: false }).format(ml / 1000)} ${units.l}`;
