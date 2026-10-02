// Interface copy, German — informal «du», quotes „…“, en dash with spaces, decimal comma. Legal documents use formal «Sie».

import type { Dictionary } from "./ru";

export const de: Dictionary = {
  meta: {
    title: "AIFit+ – KI-Kalorienzähler per Foto vom Essen",
    description:
      "Mahlzeit fotografieren – AIFit+ schätzt Gericht, Portion, Kalorien und Makros. Persönliches Tagesziel, Tagebuch und KI-Tipps. Bald für iOS und Android.",
    ogImageAlt: "AIFit+ – Kalorien und Makros per Foto vom Essen",
    privacyTitle: "Datenschutzerklärung – AIFit+",
    privacyDescription:
      "Welche Daten der Kalorienzähler AIFit+ erhebt, wozu, wo sie gespeichert werden und wie du sie löschst. Deine Rechte nach der DSGVO.",
    termsTitle: "Nutzungsbedingungen – AIFit+",
    termsDescription:
      "Die Regeln für die Nutzung von AIFit+: Konto, Abo und kostenlose Testphase, zulässige Nutzung, Gesundheitshinweis und Haftung.",
  },
  nav: {
    how: "So geht’s",
    day: "Dein Tag",
    plan: "Plan",
    toTop: "AIFit+, nach oben",
    toHome: "AIFit+, zur Startseite",
    cta: "Bald verfügbar",
    ctaShort: "Bald",
    language: "Sprache",
  },
  units: { kcal: "kcal", g: "g", kg: "kg", cm: "cm", years: "Jahre" },
  macros: { carbs: "Kohlenhydrate", fats: "Fett", protein: "Eiweiß", carbsShort: "K", fatsShort: "F", proteinShort: "E" },
  mealTypes: { breakfast: "Frühstück", lunch: "Mittagessen", snack: "Snack", dinner: "Abendessen" },
  meals: {
    syrniki: "Quarkpfannkuchen mit Beeren und Kiwi",
    salad: "Hähnchen-Avocado-Salat",
    chickenRice: "Reis mit Sesam-Hähnchen",
    yogurt: "Joghurt mit Himbeeren",
    lavash: "Lavash mit Rindfleisch und Gemüse",
    bowl: "Bowl mit Tofu, Ei und Gemüse",
  },
  stores: {
    soonIn: "Bald verfügbar",
    downloadOn: "Laden im",
    getItOn: "Jetzt bei",
    soon: (store: string) => `Bald verfügbar: ${store}`,
  },
  hero: {
    badgeAi: "KI",
    badge: "Gericht, Portion und Makros aus einem Foto",
    title: "Essen knipsen. Kalorien zählen sich selbst",
    subtitle: "Die KI erkennt Gericht, Portionsgröße, Kalorien und Makros. Du behältst einfach deinen Tag im Blick.",
    scroll: "Scrollen",
  },
  scan: {
    recognized: "Erkannt in 2,1 s",
    portion: (grams: string) => `${grams} g, eine Portion`,
  },
  marquee: { label: "Beispiele erkannter Gerichte" },
  how: {
    title: "So funktioniert’s",
    step: (number: number) => `Schritt ${number}`,
    /** Under the pinned section until the first scroll */
    hint: "Scrolle, um die Schritte durchzugehen",
    steps: [
      { title: "Fotografiere deinen Teller", text: "Ein paar Aufnahmen aus verschiedenen Winkeln machen das Ergebnis genauer." },
      { title: "Die KI zerlegt das Gericht", text: "Sie erkennt Zutaten und Portion. Ist etwas unklar, stellt sie eine kurze Rückfrage." },
      { title: "Behalte deinen Tag im Blick", text: "Die Startseite zeigt, was noch übrig ist und was dir fehlt." },
    ],
    parts: ["Quarkpfannkuchen, 5 Stück", "Erdbeeren und Kirschen", "Kiwi und Aprikose"],
    question: "Wurden die Pfannkuchen in Öl gebraten oder gebacken? Das macht etwa 60 kcal Unterschied.",
    answers: ["In Öl gebraten", "Gebacken"],
    today: "Heute",
    streak: "12 Tage in Folge",
    weekdays: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"],
    eaten: "Gegessen",
    left: "Übrig",
  },
  day: {
    title: "Dein ganzer Tag auf einem Bildschirm",
    text: "Jede Mahlzeit landet auf der Zeitleiste des Tages, und das Glas füllt sich mit dem, was du gegessen hast. Du siehst, wie viel noch übrig ist und was fehlt.",
    tipTitle: "KI-Tipp",
    tip: (eaten: string, target: string, closes: string) =>
      `Eiweiß bisher: ${eaten} von ${target} g. Ein Abendessen mit Hähnchen, Thunfisch oder Hüttenkäse deckt etwa ${closes} g.`,
    add: "Hähnchensalat hinzufügen",
    added: "Zum Abendessen hinzugefügt",
  },
  plan: {
    title: "Ein Tagesziel, das zu dir passt",
    text: "Dieselbe Berechnung wie in der App: dein Grundumsatz nach der Mifflin-St-Jeor-Formel, deine Aktivität und dein Tempo. Eiweiß: 2 g pro Kilogramm Zielgewicht, Fett: ein Viertel deiner Kalorien. Beweg die Regler.",
    sex: "Geschlecht",
    female: "Weiblich",
    male: "Männlich",
    goal: "Ziel",
    lose: "Abnehmen",
    maintain: "Halten",
    gain: "Zunehmen",
    weight: "Gewicht",
    height: "Größe",
    age: "Alter",
    activity: "Aktivität",
    sedentary: "Sitzend",
    light: "Leicht",
    moderate: "Mittel",
    high: "Hoch",
    perDay: "Tagesziel",
  },
  cta: {
    title: "Bald auf deinem Handy",
    text: "Wir geben der App den letzten Schliff. AIFit+ kommt in den App Store und zu Google Play – fotografiere deinen ersten Teller gleich am Starttag.",
  },
  common: {
    ofKcal: (kcal: string) => `von ${kcal} kcal`,
  },
  notFound: {
    metaTitle: "Seite nicht gefunden – AIFit+",
    chip: "Kein Gericht gefunden",
    title: "Dieser Teller ist leer",
    text: "Diese Seite gibt es nicht. Vielleicht wurde sie verschoben, oder im Link steckt ein Tippfehler.",
    home: "Zur Startseite",
    how: "So funktioniert AIFit+",
  },
  consent: {
    label: "Cookie-Einwilligung",
    text: "Wir möchten wissen, wie viele Menschen die Website besuchen und woher sie kommen. Dafür braucht es Cookies von Google Analytics – wir aktivieren sie nur, wenn du zustimmst.",
    more: "So verwenden wir Cookies",
    accept: "Akzeptieren",
    decline: "Ablehnen",
  },
  footer: { privacy: "Datenschutzerklärung", terms: "Nutzungsbedingungen", cookies: "Cookie-Einstellungen" },
  legal: {
    effective: (date: string) => `Gültig ab ${date}`,
    contents: "Inhalt",
  },
};
