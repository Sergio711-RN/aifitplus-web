// Interface copy, Russian. Wording follows the app's dictionary (../aifitplus/src/i18n/locales/ru.ts) where it exists.
// Numbers come in already formatted for the locale.

export const ru = {
  meta: {
    title: "AIFit+ — счётчик калорий по фото еды с ИИ",
    description:
      "Сфотографируйте блюдо — AIFit+ определит состав, порцию, калории и БЖУ. Персональная норма, дневник питания, штрихкоды и голос. Скоро на iOS и Android.",
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
    fruitBowl: "Фруктовая чаша с ягодами",
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
      { title: "Добавьте, что едите", text: "Фото блюда, штрихкод упаковки, голос или пара слов — как удобнее." },
      { title: "ИИ всё посчитает", text: "Определит состав и порцию. Если что-то неясно — задаст короткий вопрос." },
      { title: "Следите за днём", text: "Главный экран покажет, сколько осталось и чего не хватает." },
    ],
    parts: ["Арбуз", "Клубника и черника", "Черешня, киви, грейпфрут"],
    question: "Под фруктами есть йогурт или гранола? От этого зависит около 150 ккал.",
    answers: ["Нет", "Есть йогурт"],
    today: "Сегодня",
    streak: "12 дней подряд",
    weekdays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    eaten: "Съедено",
    left: "Осталось",
  },
  day: {
    title: "Весь день на одном экране",
    text: "Каждый приём пищи встаёт в ленту дня, а «стакан» наполняется съеденным. Видно, сколько ещё можно и чего не хватает.",
    /** «Add without a photo» at the current moment of the day, like on the app's Home */
    quickAdd: {
      title: "Добавить без фото",
      placeholder: "Яблоко, 170 г",
      hint: "Граммы не обязательны — ИИ уточнит",
      analyzing: "Считаем калории…",
      send: "Распознать",
      saved: "Сохранённые",
      voice: "Надиктовать",
      added: "Добавлено в ужин",
    },
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
    text: "Мы заканчиваем приложение. AIFit+ появится в App Store и Google Play — запишите первый приём пищи в день запуска.",
  },
  common: {
    /** «из 2 200 ккал» */
    ofKcal: (kcal: string) => `из ${kcal} ккал`,
  },
  notFound: {
    metaTitle: "Страница не найдена — AIFit+",
    chip: "Блюдо не найдено",
    title: "Здесь нечего распознать",
    text: "Такой страницы нет: возможно, её переместили или в ссылке опечатка.",
    home: "На главную",
    how: "Как работает AIFit+",
  },
  consent: {
    label: "Согласие на cookie",
    text: "Мы хотим понимать, сколько людей заходит на сайт и откуда. Для этого нужны cookie Google Analytics — включим их, только если вы согласны.",
    more: "Как мы используем cookie",
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
