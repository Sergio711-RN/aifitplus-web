// Interface copy, Russian. Wording follows the app's dictionary (../aifitplus/src/i18n/locales/ru.ts) where it exists.
// Numbers come in already formatted for the locale.

export const ru = {
  meta: {
    title: "AIFit+ — счётчик калорий по фото еды с ИИ",
    description:
      "Сфотографируйте блюдо — AIFit+ определит состав, порцию, калории и БЖУ. Персональная норма, дневник питания и советы ИИ. Скоро на iOS и Android.",
    ogImageAlt: "AIFit+ — калории и БЖУ по фото еды",
    privacyTitle: "Политика конфиденциальности — AIFit+",
    privacyDescription: "Какие данные собирает счётчик калорий AIFit+, зачем, где они хранятся и как их удалить. Ваши права по GDPR.",
    termsTitle: "Условия использования — AIFit+",
    termsDescription:
      "Правила использования AIFit+: аккаунт, подписка и пробный период, ограничения, предупреждение о здоровье и ответственность.",
  },
  nav: {
    how: "Как это работает",
    day: "День",
    plan: "План",
    toTop: "AIFit+, наверх",
    toHome: "AIFit+, на главную",
    cta: "Скоро в сторах",
    /** Phones: the header has no room for the full label */
    ctaShort: "Скоро",
    language: "Язык",
  },
  units: { kcal: "ккал", g: "г", kg: "кг", cm: "см", years: "лет" },
  macros: { carbs: "Углеводы", fats: "Жиры", protein: "Белки", carbsShort: "У", fatsShort: "Ж", proteinShort: "Б" },
  mealTypes: { breakfast: "Завтрак", lunch: "Обед", snack: "Перекус", dinner: "Ужин" },
  meals: {
    syrniki: "Сырники с ягодами и киви",
    salad: "Салат с курицей и авокадо",
    chickenRice: "Рис с курицей в кунжутной глазури",
    yogurt: "Йогурт с малиной",
    lavash: "Лаваш с говядиной и овощами",
    bowl: "Боул с тофу, яйцом и овощами",
  },
  stores: {
    soonIn: "Скоро в",
    downloadOn: "Загрузите в",
    getItOn: "Доступно в",
    soon: (store: string) => `Скоро в ${store}`,
  },
  hero: {
    badgeAi: "ИИ",
    badge: "Блюдо, порция и БЖУ по одному снимку",
    title: "Сфотографируйте еду. Калории посчитаются сами",
    subtitle: "ИИ определит блюдо, вес порции, калории и БЖУ. Вам остаётся следить за днём.",
    scroll: "Листайте",
  },
  scan: {
    recognized: "Распознано за 2,1 с",
    portion: (grams: string) => `${grams} г, одна порция`,
  },
  marquee: { label: "Примеры распознанных блюд" },
  how: {
    title: "Как это работает",
    step: (number: number) => `Шаг ${number}`,
    /** Under the pinned section until the first scroll */
    hint: "Листайте — шаги сменятся",
    steps: [
      { title: "Снимите тарелку", text: "Можно сделать пару кадров с разных сторон — так точнее." },
      { title: "ИИ разберёт блюдо", text: "Определит состав и порцию. Если что-то неясно — задаст короткий вопрос." },
      { title: "Следите за днём", text: "Главный экран покажет, сколько осталось и чего не хватает." },
    ],
    parts: ["Сырники, 5 шт.", "Клубника и черешня", "Киви и абрикос"],
    question: "Сырники жарили на масле или запекали? От этого зависит около 60 ккал.",
    answers: ["На масле", "Запекали"],
    today: "Сегодня",
    streak: "12 дней подряд",
    weekdays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    eaten: "Съедено",
    left: "Осталось",
  },
  day: {
    title: "Весь день на одном экране",
    text: "Каждый приём пищи встаёт в ленту дня, а «стакан» наполняется съеденным. Видно, сколько ещё можно и чего не хватает.",
    tipTitle: "Совет ИИ",
    tip: (eaten: string, target: string, closes: string) =>
      `Белка пока ${eaten} из ${target} г. Ужин с курицей, тунцом или творогом закроет около ${closes} г.`,
    add: "Добавить салат с курицей",
    added: "Добавлено в ужин",
  },
  plan: {
    title: "Норма, посчитанная под вас",
    text: "Тот же расчёт, что в приложении: обмен веществ по формуле Миффлина — Сан Жеора, ваша активность и темп. Белок — 2 г на килограмм целевого веса, жиры — четверть калорий. Подвигайте ползунки.",
    sex: "Пол",
    female: "Женский",
    male: "Мужской",
    goal: "Цель",
    lose: "Снизить",
    maintain: "Держать",
    gain: "Набрать",
    weight: "Вес",
    height: "Рост",
    age: "Возраст",
    activity: "Активность",
    sedentary: "Сидячая",
    light: "Лёгкая",
    moderate: "Средняя",
    high: "Высокая",
    perDay: "Норма в день",
  },
  cta: {
    title: "Скоро на вашем телефоне",
    text: "Мы заканчиваем приложение. AIFit+ появится в App Store и Google Play — снимите первую тарелку в день запуска.",
  },
  common: {
    /** «из 2 200 ккал» */
    ofKcal: (kcal: string) => `из ${kcal} ккал`,
  },
  notFound: {
    metaTitle: "Страница не найдена — AIFit+",
    chip: "Блюдо не найдено",
    title: "На этой тарелке пусто",
    text: "Такой страницы нет: возможно, её переместили или в ссылке опечатка.",
    home: "На главную",
    how: "Как работает AIFit+",
  },
  consent: {
    label: "Согласие на cookie",
    text: "Мы хотим понимать, сколько людей заходит на сайт и откуда. Для этого нужны cookie Google Analytics — включим их, только если вы согласны.",
    more: "Подробнее",
    accept: "Принять",
    decline: "Отклонить",
  },
  footer: { privacy: "Политика конфиденциальности", terms: "Условия использования", cookies: "Настройки cookie" },
  legal: {
    effective: (date: string) => `Действует с ${date}`,
    contents: "Содержание",
  },
};

export type Dictionary = typeof ru;
