// Subset of the app's plan calculation (aifitplus/src/utils/nutrition-plan.ts) — keep the numbers in sync.

export type Sex = "female" | "male";
export type Goal = "lose" | "maintain" | "gain";
export type Activity = "sedentary" | "light" | "moderate" | "high";

export const ACTIVITY_FACTORS: Record<Activity, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  high: 1.725,
};

const KCAL_PER_KG = 7700;
const CALORIE_FLOOR: Record<Sex, number> = { female: 1200, male: 1500 };
const SEX_CONSTANT: Record<Sex, number> = { male: 5, female: -161 };
const PROTEIN_G_PER_KG = 2;
const PROTEIN_MAX_SHARE = 0.35;
const FAT_SHARE = 0.25;
/** Default pace on the landing; the app lets the user pick it */
const PACE_KG_PER_WEEK = 0.5;
/** Target weight the landing assumes for «lose» / «gain» */
const GOAL_STEP_KG = 5;

export interface IPlanInput {
  sex: Sex;
  age: number;
  heightCm: number;
  weightKg: number;
  activity: Activity;
  goal: Goal;
}

/** What the calculator starts with; the water demo on the page counts the same person's water goal */
export const DEFAULT_PLAN_INPUT: IPlanInput = {
  sex: "female",
  age: 30,
  heightCm: 168,
  weightKg: 68,
  activity: "light",
  goal: "lose",
};

export interface IPlan {
  calories: number;
  proteinG: number;
  fatG: number;
  carbsG: number;
}

export const buildPlan = ({ sex, age, heightCm, weightKg, activity, goal }: IPlanInput): IPlan => {
  const bmr = 10 * weightKg + 6.25 * heightCm - 5 * age + SEX_CONSTANT[sex];
  const tdee = bmr * ACTIVITY_FACTORS[activity];
  const delta = goal === "maintain" ? 0 : ((goal === "lose" ? -1 : 1) * PACE_KG_PER_WEEK * KCAL_PER_KG) / 7;
  const calories = Math.round(Math.max(tdee + delta, CALORIE_FLOOR[sex]));
  const targetWeightKg = goal === "lose" ? weightKg - GOAL_STEP_KG : goal === "gain" ? weightKg + GOAL_STEP_KG : weightKg;
  const proteinG = Math.round(Math.min(PROTEIN_G_PER_KG * targetWeightKg, (calories * PROTEIN_MAX_SHARE) / 4));
  const fatG = Math.round((calories * FAT_SHARE) / 9);
  const carbsG = Math.max(0, Math.round((calories - proteinG * 4 - fatG * 9) / 4));

  return { calories, proteinG, fatG, carbsG };
};
