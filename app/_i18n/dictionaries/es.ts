// Interface copy, Spanish — neutral, US and Latin America first (the app launches in the US before the EU): informal «tú»,
// no «vosotros», decimal point («2.1 s»), “…” quotes. The legal documents use formal «usted».

import type { Dictionary } from "./ru";

export const es: Dictionary = {
  meta: {
    title: "AIFit+ — contador de calorías con IA a partir de una foto",
    description:
      "Toma una foto de tu comida y AIFit+ estima plato, porción, calorías y macros. Meta diaria personal, diario de comidas y consejos de IA. Pronto en iOS y Android.",
    ogImageAlt: "AIFit+ — calorías y macros a partir de una foto de tu comida",
    privacyTitle: "Política de privacidad — AIFit+",
    privacyDescription:
      "Qué datos recopila el contador de calorías AIFit+, para qué, dónde se guardan y cómo eliminarlos. Tus derechos según el RGPD.",
    termsTitle: "Términos de uso — AIFit+",
    termsDescription:
      "Las reglas de uso de AIFit+: cuenta, suscripción y prueba gratuita, uso aceptable, aviso sobre salud y responsabilidad.",
  },
  nav: {
    how: "Cómo funciona",
    day: "Tu día",
    plan: "Plan",
    toTop: "AIFit+, volver arriba",
    toHome: "AIFit+, página de inicio",
    cta: "Próximamente",
    ctaShort: "Pronto",
    language: "Idioma",
  },
  units: { kcal: "kcal", g: "g", kg: "kg", cm: "cm", years: "años" },
  macros: { carbs: "Carbohidratos", fats: "Grasas", protein: "Proteínas", carbsShort: "C", fatsShort: "G", proteinShort: "P" },
  mealTypes: { breakfast: "Desayuno", lunch: "Almuerzo", snack: "Merienda", dinner: "Cena" },
  meals: {
    syrniki: "Tortitas de queso con frutos rojos y kiwi",
    salad: "Ensalada de pollo y aguacate",
    chickenRice: "Arroz con pollo glaseado al sésamo",
    yogurt: "Yogur con frambuesas",
    lavash: "Lavash con carne de res y verduras",
    bowl: "Bowl de tofu, huevo y verduras",
  },
  stores: {
    soonIn: "Próximamente en",
    downloadOn: "Consíguelo en el",
    getItOn: "Disponible en",
    soon: (store: string) => `Próximamente en ${store}`,
  },
  hero: {
    badgeAi: "IA",
    badge: "Plato, porción y macros con una sola foto",
    title: "Toma una foto. Las calorías se cuentan solas",
    subtitle: "La IA reconoce el plato, el tamaño de la porción, las calorías y los macros. Tú solo sigues tu día.",
    scroll: "Desliza",
  },
  scan: {
    recognized: "Reconocido en 2.1 s",
    portion: (grams: string) => `${grams} g, una porción`,
  },
  marquee: { label: "Ejemplos de platos reconocidos" },
  how: {
    title: "Cómo funciona",
    step: (number: number) => `Paso ${number}`,
    /** Under the pinned section until the first scroll */
    hint: "Desliza para recorrer los pasos",
    steps: [
      { title: "Fotografía tu plato", text: "Un par de tomas desde distintos ángulos mejoran la precisión." },
      { title: "La IA analiza el plato", text: "Identifica los ingredientes y la porción. Si algo no queda claro, te hace una pregunta rápida." },
      { title: "Sigue tu día", text: "El inicio te muestra cuánto te queda y qué te falta." },
    ],
    parts: ["Tortitas de queso, 5 piezas", "Fresas y cerezas", "Kiwi y albaricoque"],
    question: "¿Las tortitas se frieron en aceite o se hornearon? Son unas 60 kcal de diferencia.",
    answers: ["Fritas en aceite", "Al horno"],
    today: "Hoy",
    streak: "12 días seguidos",
    weekdays: ["Lu", "Ma", "Mi", "Ju", "Vi", "Sá", "Do"],
    eaten: "Consumido",
    left: "Restante",
  },
  day: {
    title: "Todo tu día en una sola pantalla",
    text: "Cada comida se suma a la línea de tiempo del día y el vaso se va llenando con lo que comiste. Ves cuánto te queda y qué te falta.",
    tipTitle: "Consejo de la IA",
    tip: (eaten: string, target: string, closes: string) =>
      `Proteínas hasta ahora: ${eaten} de ${target} g. Una cena con pollo, atún o queso cottage aporta unos ${closes} g.`,
    add: "Agregar ensalada de pollo",
    added: "Agregado a la cena",
  },
  plan: {
    title: "Una meta diaria hecha para ti",
    text: "El mismo cálculo que en la aplicación: tu metabolismo según la ecuación de Mifflin-St Jeor, tu actividad y tu ritmo. Proteínas: 2 g por kilogramo de tu peso meta; grasas: una cuarta parte de tus calorías. Mueve los controles.",
    sex: "Sexo",
    female: "Mujer",
    male: "Hombre",
    goal: "Objetivo",
    lose: "Bajar",
    maintain: "Mantener",
    gain: "Subir",
    weight: "Peso",
    height: "Estatura",
    age: "Edad",
    activity: "Actividad",
    sedentary: "Sedentaria",
    light: "Ligera",
    moderate: "Moderada",
    high: "Alta",
    perDay: "Meta diaria",
  },
  cta: {
    title: "Muy pronto en tu teléfono",
    text: "Estamos terminando la aplicación. AIFit+ llegará al App Store y a Google Play: fotografía tu primer plato el día del lanzamiento.",
  },
  common: {
    ofKcal: (kcal: string) => `de ${kcal} kcal`,
  },
  notFound: {
    metaTitle: "Página no encontrada — AIFit+",
    chip: "Plato no encontrado",
    title: "Este plato está vacío",
    text: "Esta página no existe. Puede que se haya movido o que el enlace tenga un error.",
    home: "Ir al inicio",
    how: "Cómo funciona AIFit+",
  },
  consent: {
    label: "Consentimiento de cookies",
    text: "Nos gustaría saber cuántas personas visitan el sitio y de dónde llegan. Para eso se necesitan las cookies de Google Analytics; solo las activamos si aceptas.",
    more: "Cómo usamos las cookies",
    accept: "Aceptar",
    decline: "Rechazar",
  },
  footer: { privacy: "Política de privacidad", terms: "Términos de uso", cookies: "Configuración de cookies" },
  legal: {
    effective: (date: string) => `Vigente desde el ${date}`,
    contents: "Contenido",
  },
};
