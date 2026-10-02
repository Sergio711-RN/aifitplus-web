// Interface copy, Italian — informal «tu», «…» quotes, typographic apostrophe (’), decimal comma; «cookie» is invariable.

import type { Dictionary } from "./ru";

export const it: Dictionary = {
  meta: {
    title: "AIFit+ — contacalorie con IA da una foto del piatto",
    description:
      "Fotografa il tuo pasto: AIFit+ stima piatto, porzione, calorie e macro. Obiettivo su misura, diario alimentare e consigli dell’IA. Presto su iOS e Android.",
    ogImageAlt: "AIFit+ — calorie e macro da una foto del piatto",
    privacyTitle: "Informativa sulla privacy — AIFit+",
    privacyDescription:
      "Quali dati raccoglie il contacalorie AIFit+, perché, dove sono conservati e come cancellarli. I tuoi diritti ai sensi del GDPR.",
    termsTitle: "Condizioni d’uso — AIFit+",
    termsDescription:
      "Le regole per usare AIFit+: account, abbonamento e prova gratuita, uso consentito, avvertenze sulla salute e responsabilità.",
  },
  nav: {
    how: "Come funziona",
    day: "La tua giornata",
    plan: "Piano",
    toTop: "AIFit+, torna su",
    toHome: "AIFit+, pagina iniziale",
    cta: "In arrivo",
    ctaShort: "Presto",
    language: "Lingua",
  },
  units: { kcal: "kcal", g: "g", kg: "kg", cm: "cm", years: "anni" },
  macros: { carbs: "Carboidrati", fats: "Grassi", protein: "Proteine", carbsShort: "C", fatsShort: "G", proteinShort: "P" },
  mealTypes: { breakfast: "Colazione", lunch: "Pranzo", snack: "Spuntino", dinner: "Cena" },
  meals: {
    syrniki: "Frittelle di ricotta, frutti rossi e kiwi",
    salad: "Insalata di pollo e avocado",
    chickenRice: "Riso con pollo glassato al sesamo",
    yogurt: "Yogurt ai lamponi",
    lavash: "Lavash con manzo e verdure",
    bowl: "Bowl di tofu, uovo e verdure",
  },
  stores: {
    soonIn: "Presto su",
    downloadOn: "Scarica su",
    getItOn: "Disponibile su",
    soon: (store: string) => `Presto su ${store}`,
  },
  hero: {
    badgeAi: "IA",
    badge: "Piatto, porzione e macro da una sola foto",
    title: "Una foto, e le calorie si contano da sole",
    subtitle: "L’IA riconosce il piatto, la porzione, le calorie e i macro. A te resta solo da tenere d’occhio la tua giornata.",
    scroll: "Scorri",
  },
  scan: {
    recognized: "Riconosciuto in 2,1 s",
    portion: (grams: string) => `${grams} g, una porzione`,
  },
  marquee: { label: "Esempi di piatti riconosciuti" },
  how: {
    title: "Come funziona",
    step: (number: number) => `Passo ${number}`,
    /** Under the pinned section until the first scroll */
    hint: "Scorri per vedere tutti i passi",
    steps: [
      { title: "Fotografa il piatto", text: "Un paio di scatti da angolazioni diverse rendono la stima più precisa." },
      { title: "L’IA analizza il piatto", text: "Individua ingredienti e porzione. Se qualcosa non è chiaro, ti fa una domanda veloce." },
      { title: "Segui la tua giornata", text: "La schermata principale mostra quanto ti resta e che cosa ti manca." },
    ],
    parts: ["Frittelle di ricotta, 5 pz", "Fragole e ciliegie", "Kiwi e albicocca"],
    question: "Le frittelle erano fritte nell’olio o cotte al forno? Sono circa 60 kcal di differenza.",
    answers: ["Fritte nell’olio", "Al forno"],
    today: "Oggi",
    streak: "Serie: 12 giorni",
    weekdays: ["Lu", "Ma", "Me", "Gi", "Ve", "Sa", "Do"],
    eaten: "Mangiato",
    left: "Restano",
  },
  day: {
    title: "Tutta la tua giornata in una sola schermata",
    text: "Ogni pasto finisce sulla linea del tempo della giornata e il bicchiere si riempie con quello che hai mangiato. Vedi subito quanto ti resta e che cosa manca.",
    tipTitle: "Consiglio dell’IA",
    tip: (eaten: string, target: string, closes: string) =>
      `Proteine finora: ${eaten} su ${target} g. Una cena con pollo, tonno o fiocchi di latte ne copre circa ${closes} g.`,
    add: "Aggiungi insalata di pollo",
    added: "Aggiunta alla cena",
  },
  plan: {
    title: "Un obiettivo giornaliero fatto per te",
    text: "Lo stesso calcolo dell’app: il tuo metabolismo secondo l’equazione di Mifflin-St Jeor, la tua attività e il tuo ritmo. Proteine: 2 g per chilo di peso obiettivo; grassi: un quarto delle calorie. Sposta i cursori.",
    sex: "Sesso",
    female: "Donna",
    male: "Uomo",
    goal: "Obiettivo",
    lose: "Perdere",
    maintain: "Mantenere",
    gain: "Aumentare",
    weight: "Peso",
    height: "Altezza",
    age: "Età",
    activity: "Attività",
    sedentary: "Sedentaria",
    light: "Leggera",
    moderate: "Moderata",
    high: "Intensa",
    perDay: "Obiettivo giornaliero",
  },
  cta: {
    title: "Presto sul tuo telefono",
    text: "Stiamo ultimando l’app. AIFit+ sta per arrivare su App Store e Google Play: fotografa il tuo primo piatto il giorno del lancio.",
  },
  common: {
    ofKcal: (kcal: string) => `su ${kcal} kcal`,
  },
  notFound: {
    metaTitle: "Pagina non trovata — AIFit+",
    chip: "Nessun piatto trovato",
    title: "Questo piatto è vuoto",
    text: "Questa pagina non esiste. Forse è stata spostata, oppure c’è un errore nel link.",
    home: "Vai alla pagina iniziale",
    how: "Come funziona AIFit+",
  },
  consent: {
    label: "Consenso ai cookie",
    text: "Vorremmo sapere quante persone visitano il sito e da dove arrivano. Per farlo servono i cookie di Google Analytics: li attiviamo solo se sei d’accordo.",
    more: "Come usiamo i cookie",
    accept: "Accetta",
    decline: "Rifiuta",
  },
  footer: { privacy: "Informativa sulla privacy", terms: "Condizioni d’uso", cookies: "Impostazioni dei cookie" },
  legal: {
    effective: (date: string) => `In vigore dal ${date}`,
    contents: "Indice",
  },
};
