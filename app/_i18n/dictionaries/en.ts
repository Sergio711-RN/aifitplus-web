// Interface copy, English (British, as in the app: ../aifitplus/src/i18n/locales/en.ts).

import type { Dictionary } from "./ru";

export const en: Dictionary = {
  meta: {
    title: "AIFit+ — AI calorie counter from a food photo",
    description:
      "Snap your meal and AIFit+ estimates the dish, portion, calories and macros. A personal daily target, food diary and AI tips. Coming soon to iOS and Android.",
    ogImageAlt: "AIFit+ — calories and macros from a food photo",
    privacyTitle: "Privacy Policy — AIFit+",
    privacyDescription:
      "What data the AIFit+ calorie counter collects, why, where it is stored and how to delete it. Your rights under the GDPR.",
    termsTitle: "Terms of Use — AIFit+",
    termsDescription:
      "The rules for using AIFit+: account, subscription and free trial, acceptable use, health disclaimer and liability.",
  },
  nav: {
    how: "How it works",
    day: "Your day",
    plan: "Plan",
    toTop: "AIFit+, back to top",
    toHome: "AIFit+, home page",
    cta: "Coming soon",
    ctaShort: "Soon",
    language: "Language",
  },
  units: { kcal: "kcal", g: "g", kg: "kg", cm: "cm", years: "years" },
  macros: { carbs: "Carbs", fats: "Fat", protein: "Protein", carbsShort: "C", fatsShort: "F", proteinShort: "P" },
  mealTypes: { breakfast: "Breakfast", lunch: "Lunch", snack: "Snack", dinner: "Dinner" },
  meals: {
    syrniki: "Cheese pancakes with berries and kiwi",
    salad: "Chicken and avocado salad",
    chickenRice: "Rice with sesame-glazed chicken",
    yogurt: "Yogurt with raspberries",
    lavash: "Lavash with beef and vegetables",
    bowl: "Tofu, egg and vegetable bowl",
  },
  stores: {
    soonIn: "Coming soon to",
    downloadOn: "Download on the",
    getItOn: "Get it on",
    soon: (store: string) => `Coming soon to ${store}`,
  },
  hero: {
    badgeAi: "AI",
    badge: "Dish, portion and macros from one photo",
    title: "Snap your food. Calories count themselves",
    subtitle: "AI recognises the dish, portion size, calories and macros. You just keep an eye on your day.",
    scroll: "Scroll",
  },
  scan: {
    recognized: "Recognised in 2.1 s",
    portion: (grams: string) => `${grams} g, one serving`,
  },
  marquee: { label: "Examples of recognised dishes" },
  how: {
    title: "How it works",
    step: (number: number) => `Step ${number}`,
    /** Under the pinned section until the first scroll */
    hint: "Scroll to go through the steps",
    steps: [
      { title: "Snap your plate", text: "A couple of shots from different angles make it more accurate." },
      { title: "AI breaks the dish down", text: "It finds the ingredients and portion. If something is unclear, it asks a quick question." },
      { title: "Follow your day", text: "Home shows what's left and what you're missing." },
    ],
    parts: ["Cheese pancakes, 5 pcs", "Strawberries and cherries", "Kiwi and apricot"],
    question: "Were the pancakes fried in oil or baked? That's about 60 kcal of difference.",
    answers: ["Fried in oil", "Baked"],
    today: "Today",
    streak: "12-day streak",
    weekdays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    eaten: "Eaten",
    left: "Left",
  },
  day: {
    title: "Your whole day on one screen",
    text: "Every meal lands on the day's timeline and the glass fills up with what you've eaten. You can see how much is left and what's missing.",
    tipTitle: "AI tip",
    tip: (eaten: string, target: string, closes: string) =>
      `Protein so far: ${eaten} of ${target} g. A dinner with chicken, tuna or cottage cheese covers about ${closes} g.`,
    add: "Add chicken salad",
    added: "Added to dinner",
  },
  plan: {
    title: "A daily target made for you",
    text: "The same calculation as in the app: your metabolism by the Mifflin–St Jeor equation, your activity and pace. Protein is 2 g per kilogram of target weight, fat a quarter of your calories. Move the sliders.",
    sex: "Sex",
    female: "Female",
    male: "Male",
    goal: "Goal",
    lose: "Lose",
    maintain: "Maintain",
    gain: "Gain",
    weight: "Weight",
    height: "Height",
    age: "Age",
    activity: "Activity",
    sedentary: "Sedentary",
    light: "Light",
    moderate: "Moderate",
    high: "High",
    perDay: "Daily target",
  },
  cta: {
    title: "Coming soon to your phone",
    text: "We're finishing the app. AIFit+ is coming to the App Store and Google Play — snap your first plate on launch day.",
  },
  common: {
    ofKcal: (kcal: string) => `of ${kcal} kcal`,
  },
  notFound: {
    metaTitle: "Page not found — AIFit+",
    chip: "No dish found",
    title: "This plate is empty",
    text: "This page doesn't exist. It may have moved, or there's a typo in the link.",
    home: "Go to home page",
    how: "How AIFit+ works",
  },
  consent: {
    label: "Cookie consent",
    text: "We'd like to know how many people visit the site and where they come from. That needs Google Analytics cookies — we only switch them on if you agree.",
    more: "How we use cookies",
    accept: "Accept",
    decline: "Decline",
  },
  footer: { privacy: "Privacy Policy", terms: "Terms of Use", cookies: "Cookie settings" },
  legal: {
    effective: (date: string) => `Effective from ${date}`,
    contents: "Contents",
  },
};
