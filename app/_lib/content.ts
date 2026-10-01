// Sample meals and copy shared by the sections. Meals mirror the app's mock diary (aifitplus/src/mocks/use-diary.tsx).

export type Dish = "syrniki" | "lavash" | "yogurt" | "cottage" | "chicken";

export interface IMeal {
  dish: Dish;
  title: string;
  kcal: number;
  proteinG: number;
  fatG: number;
  carbsG: number;
}

export const MEALS: Record<Dish, IMeal> = {
  syrniki: { dish: "syrniki", title: "Сырники со сметаной", kcal: 400, proteinG: 20, fatG: 18, carbsG: 40 },
  lavash: { dish: "lavash", title: "Лаваш с сыром и зеленью", kcal: 328, proteinG: 17, fatG: 15, carbsG: 32 },
  yogurt: { dish: "yogurt", title: "Греческий йогурт с ягодами", kcal: 240, proteinG: 11, fatG: 13, carbsG: 19 },
  chicken: { dish: "chicken", title: "Курица с рисом и брокколи", kcal: 560, proteinG: 42, fatG: 14, carbsG: 62 },
  cottage: { dish: "cottage", title: "Творог 5%, 200 г", kcal: 242, proteinG: 34, fatG: 10, carbsG: 6 },
};

/** One sample day for the timeline section */
export const DAY: { time: string; label: string; meal: IMeal }[] = [
  { time: "08:20", label: "Завтрак", meal: MEALS.syrniki },
  { time: "11:40", label: "Перекус", meal: MEALS.yogurt },
  { time: "14:05", label: "Обед", meal: MEALS.chicken },
  { time: "17:30", label: "Перекус", meal: MEALS.lavash },
];

export const DAY_TARGET_KCAL = 2100;

/** Macro colours, in the order of the bars in the app mark: carbs, fats, protein */
export const MACRO = {
  carbs: { label: "Углеводы", short: "У", color: "var(--color-apricot)" },
  fats: { label: "Жиры", short: "Ж", color: "var(--color-lilac)" },
  protein: { label: "Белки", short: "Б", color: "var(--color-mint)" },
} as const;

export const STORE_LINKS = {
  appStore: "#download",
  googlePlay: "#download",
};
