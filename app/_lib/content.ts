// Sample meals shared by the sections; their names and all copy are in `app/_i18n/dictionaries`. Photos: Unsplash, free licence (unsplash.com/license).

import { unsplash } from "./photo";

export type Dish = "syrniki" | "salad" | "chickenRice" | "yogurt" | "lavash" | "bowl";

export type MealType = "breakfast" | "lunch" | "snack" | "dinner";

/** Dish names live in the dictionaries (`t.meals[dish]`) */
export interface IMeal {
  dish: Dish;
  grams: number;
  kcal: number;
  proteinG: number;
  fatG: number;
  carbsG: number;
  photo: string;
}

export const MEALS: Record<Dish, IMeal> = {
  syrniki: {
    dish: "syrniki",
    grams: 320,
    kcal: 458,
    proteinG: 24,
    fatG: 18,
    carbsG: 50,
    photo: unsplash("photo-1693422662014-cfd9a489e2af"),
  },
  salad: {
    dish: "salad",
    grams: 300,
    kcal: 426,
    proteinG: 36,
    fatG: 26,
    carbsG: 12,
    photo: unsplash("photo-1761315600943-d8a5bb0c499f"),
  },
  chickenRice: {
    dish: "chickenRice",
    grams: 380,
    kcal: 634,
    proteinG: 40,
    fatG: 18,
    carbsG: 78,
    photo: unsplash("photo-1788090485550-ca71c6d578fb"),
  },
  yogurt: {
    dish: "yogurt",
    grams: 220,
    kcal: 229,
    proteinG: 14,
    fatG: 9,
    carbsG: 23,
    photo: unsplash("photo-1678651561454-64dfc5d113db"),
  },
  lavash: {
    dish: "lavash",
    grams: 320,
    kcal: 534,
    proteinG: 32,
    fatG: 22,
    carbsG: 52,
    photo: unsplash("photo-1777994505601-fe18ab41f8f0"),
  },
  bowl: {
    dish: "bowl",
    grams: 350,
    kcal: 370,
    proteinG: 22,
    fatG: 18,
    carbsG: 30,
    photo: unsplash("photo-1546069901-d5bfd2cbfb1f"),
  },
};

/** One sample day for the timeline section */
export const DAY: { time: string; mealType: MealType; meal: IMeal }[] = [
  { time: "08:20", mealType: "breakfast", meal: MEALS.syrniki },
  { time: "11:40", mealType: "snack", meal: MEALS.yogurt },
  { time: "14:05", mealType: "lunch", meal: MEALS.chickenRice },
  { time: "17:30", mealType: "snack", meal: MEALS.bowl },
];

export const DAY_TARGET_KCAL = 2200;

/** Store pages; `null` until the app is published there — the button then reads «coming soon» and is not a link */
export const STORE_LINKS: { appStore: string | null; googlePlay: string | null } = {
  appStore: null,
  googlePlay: null,
};
