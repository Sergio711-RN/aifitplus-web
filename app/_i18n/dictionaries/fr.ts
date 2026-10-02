// Interface copy, French — Canadian usage (the app is offered in Canada, not in the EU): «courriel», «témoins» for cookies,
// no space before «?» and «!». Spaces before «:» and inside «…» are non-breaking (U+00A0).

import type { Dictionary } from "./ru";

export const fr: Dictionary = {
  meta: {
    title: "AIFit+ — compteur de calories par IA à partir d’une photo",
    description:
      "Photographiez votre repas : AIFit+ estime plat, portion, calories et macros. Objectif quotidien, journal, conseils de l’IA. Bientôt sur iOS et Android.",
    ogImageAlt: "AIFit+ — calories et macros à partir d’une photo de repas",
    privacyTitle: "Politique de confidentialité — AIFit+",
    privacyDescription:
      "Quelles données le compteur de calories AIFit+ recueille, pourquoi, où elles sont conservées et comment les supprimer. Vos droits.",
    termsTitle: "Conditions d’utilisation — AIFit+",
    termsDescription:
      "Les règles d’utilisation d’AIFit+ : compte, abonnement et essai gratuit, usage acceptable, avertissement santé et responsabilité.",
  },
  nav: {
    how: "Fonctionnement",
    day: "Votre journée",
    plan: "Plan",
    toTop: "AIFit+, haut de la page",
    toHome: "AIFit+, page d’accueil",
    cta: "Bientôt disponible",
    ctaShort: "Bientôt",
    language: "Langue",
  },
  units: { kcal: "kcal", g: "g", kg: "kg", cm: "cm", years: "ans" },
  macros: { carbs: "Glucides", fats: "Lipides", protein: "Protéines", carbsShort: "G", fatsShort: "L", proteinShort: "P" },
  mealTypes: { breakfast: "Déjeuner", lunch: "Dîner", snack: "Collation", dinner: "Souper" },
  meals: {
    syrniki: "Galettes de fromage aux petits fruits et kiwi",
    salad: "Salade de poulet et avocat",
    chickenRice: "Riz au poulet glacé au sésame",
    yogurt: "Yogourt aux framboises",
    lavash: "Lavash au bœuf et aux légumes",
    bowl: "Bol de tofu, œuf et légumes",
  },
  stores: {
    soonIn: "Bientôt sur",
    downloadOn: "Télécharger dans l’",
    getItOn: "Disponible sur",
    soon: (store: string) => `Bientôt sur ${store}`,
  },
  hero: {
    badgeAi: "IA",
    badge: "Plat, portion et macros en une seule photo",
    title: "Une photo, et les calories se comptent seules",
    subtitle: "L’IA reconnaît le plat, la portion, les calories et les macros. Il ne vous reste qu’à suivre votre journée.",
    scroll: "Défiler",
  },
  scan: {
    recognized: "Reconnu en 2,1 s",
    portion: (grams: string) => `${grams} g, une portion`,
  },
  marquee: { label: "Exemples de plats reconnus" },
  how: {
    title: "Comment ça marche",
    step: (number: number) => `Étape ${number}`,
    /** Under the pinned section until the first scroll */
    hint: "Faites défiler pour parcourir les étapes",
    steps: [
      { title: "Photographiez votre assiette", text: "Quelques prises sous différents angles donnent un résultat plus précis." },
      { title: "L’IA analyse le plat", text: "Elle trouve les ingrédients et la portion. En cas de doute, elle pose une courte question." },
      { title: "Suivez votre journée", text: "L’accueil montre ce qu’il vous reste et ce qui vous manque." },
    ],
    parts: ["Galettes de fromage, 5 pièces", "Fraises et cerises", "Kiwi et abricot"],
    question: "Les galettes ont-elles été frites à l’huile ou cuites au four? Cela fait environ 60 kcal de différence.",
    answers: ["Frites à l’huile", "Au four"],
    today: "Aujourd’hui",
    streak: "12 jours de suite",
    weekdays: ["Lu", "Ma", "Me", "Je", "Ve", "Sa", "Di"],
    eaten: "Consommé",
    left: "Restant",
  },
  day: {
    title: "Toute votre journée sur un seul écran",
    text: "Chaque repas s’ajoute au fil de la journée et le verre se remplit de ce que vous avez mangé. Vous voyez ce qu’il reste et ce qui manque.",
    tipTitle: "Conseil de l’IA",
    tip: (eaten: string, target: string, closes: string) =>
      `Protéines jusqu’ici : ${eaten} sur ${target} g. Un souper avec du poulet, du thon ou du fromage cottage en apporte environ ${closes} g.`,
    add: "Ajouter la salade de poulet",
    added: "Ajouté au souper",
  },
  plan: {
    title: "Un objectif quotidien fait pour vous",
    text: "Le même calcul que dans l’application : votre métabolisme selon l’équation de Mifflin-St Jeor, votre activité et votre rythme. Protéines : 2 g par kilogramme du poids visé; lipides : un quart des calories. Déplacez les curseurs.",
    sex: "Sexe",
    female: "Femme",
    male: "Homme",
    goal: "Objectif",
    lose: "Perdre",
    maintain: "Maintenir",
    gain: "Prendre",
    weight: "Poids",
    height: "Taille",
    age: "Âge",
    activity: "Activité",
    sedentary: "Sédentaire",
    light: "Légère",
    moderate: "Modérée",
    high: "Élevée",
    perDay: "Objectif quotidien",
  },
  cta: {
    title: "Bientôt sur votre téléphone",
    text: "Nous terminons l’application. AIFit+ arrive sur l’App Store et Google Play — photographiez votre première assiette le jour du lancement.",
  },
  common: {
    ofKcal: (kcal: string) => `sur ${kcal} kcal`,
  },
  notFound: {
    metaTitle: "Page introuvable — AIFit+",
    chip: "Aucun plat trouvé",
    title: "Cette assiette est vide",
    text: "Cette page n’existe pas. Elle a peut-être été déplacée, ou le lien contient une erreur.",
    home: "Aller à l’accueil",
    how: "Comment fonctionne AIFit+",
  },
  consent: {
    label: "Consentement aux témoins",
    text: "Nous aimerions savoir combien de personnes visitent le site et d’où elles viennent. Il faut pour cela les témoins (cookies) de Google Analytics — nous ne les activons que si vous acceptez.",
    more: "Comment nous utilisons les témoins",
    accept: "Accepter",
    decline: "Refuser",
  },
  footer: { privacy: "Politique de confidentialité", terms: "Conditions d’utilisation", cookies: "Paramètres des témoins" },
  legal: {
    effective: (date: string) => `En vigueur depuis le ${date}`,
    contents: "Sommaire",
  },
};
