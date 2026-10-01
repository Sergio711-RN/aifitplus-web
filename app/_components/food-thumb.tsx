import type { ReactElement } from "react";
import type { Dish } from "../_lib/content";

// Dish illustrations ported from aifitplus/src/components/food-thumb.tsx; their colours are part of the artwork

const Syrniki = () => (
  <>
    <circle cx={18} cy={21} r={6.5} fill="#EBC074" stroke="#B9812A" strokeWidth={1.2} />
    <circle cx={29.5} cy={20} r={6} fill="#EBC074" stroke="#B9812A" strokeWidth={1.2} />
    <circle cx={23} cy={30.5} r={6} fill="#EBC074" stroke="#B9812A" strokeWidth={1.2} />
    <ellipse cx={32} cy={30} rx={4} ry={3.2} fill="#FFFFFF" stroke="#D8D2C2" strokeWidth={1} />
  </>
);

const Lavash = () => (
  <>
    <g transform="rotate(-14 24 24)">
      <path d="M14.75 16h18.5a3.75 3.75 0 0 1 0 7.5h-18.5a3.75 3.75 0 0 1 0-7.5z" fill="#EFD9A0" stroke="#C4A262" strokeWidth={1.2} />
      <path d="M15.75 25.5h16.5a3.75 3.75 0 0 1 0 7.5h-16.5a3.75 3.75 0 0 1 0-7.5z" fill="#EFD9A0" stroke="#C4A262" strokeWidth={1.2} />
    </g>
    <circle cx={18} cy={20} r={1.3} fill="#5E8F46" />
    <circle cx={27} cy={18} r={1.3} fill="#5E8F46" />
    <circle cx={22} cy={30} r={1.3} fill="#5E8F46" />
    <circle cx={30} cy={27.5} r={1.3} fill="#5E8F46" />
  </>
);

const Yogurt = () => (
  <>
    <circle cx={24} cy={24} r={13.5} fill="#FFFFFF" stroke="#D5D9EC" strokeWidth={1} />
    <circle cx={20} cy={21} r={3.2} fill="#3F3A7A" />
    <circle cx={27} cy={19} r={2.8} fill="#3F3A7A" />
    <circle cx={28.5} cy={27} r={3.2} fill="#3F3A7A" />
    <circle cx={21.5} cy={28.5} r={3} fill="#D2415A" />
  </>
);

const Cottage = () => (
  <>
    <circle cx={24} cy={24} r={13.5} fill="#FFFFFF" stroke="#D5D9EC" strokeWidth={1} />
    <circle cx={20} cy={21.5} r={4.2} fill="#F6F1E4" stroke="#DCD3BC" strokeWidth={1} />
    <circle cx={27.5} cy={20.5} r={3.8} fill="#F6F1E4" stroke="#DCD3BC" strokeWidth={1} />
    <circle cx={24.5} cy={28} r={4.4} fill="#F6F1E4" stroke="#DCD3BC" strokeWidth={1} />
    <circle cx={30} cy={27.5} r={1.8} fill="#E8A33D" />
  </>
);

const Chicken = () => (
  <>
    <ellipse cx={19} cy={27} rx={9} ry={7} fill="#FBF7EC" stroke="#DCD3BC" strokeWidth={1} />
    <path
      d="M24 15.5c5-1.5 10 1 10.5 5.5.5 4-3 6.5-7 6.5-3.5 0-6.5-2-6.5-5.5 0-3 1-5.8 3-6.5z"
      fill="#D99A55"
      stroke="#A8692E"
      strokeWidth={1.2}
    />
    <circle cx={31} cy={31} r={2.4} fill="#6FAE5A" />
    <circle cx={27.5} cy={33.5} r={2} fill="#6FAE5A" />
  </>
);

const DISHES: Record<Dish, () => ReactElement> = {
  syrniki: Syrniki,
  lavash: Lavash,
  yogurt: Yogurt,
  cottage: Cottage,
  chicken: Chicken,
};

/** Dish on a plate inside a rounded tile */
export const FoodThumb = ({ dish, size = 40 }: { dish: Dish; size?: number }) => {
  const DishArt = DISHES[dish];

  return (
    <span
      className="inline-block shrink-0 overflow-hidden bg-surface-tile"
      style={{ width: size, height: size, borderRadius: Math.max(8, size / 4) }}
    >
      <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden>
        <circle cx={24} cy={24} r={20} fill="var(--color-plate)" />
        <DishArt />
      </svg>
    </span>
  );
};

/** Just the dish art, for large plates */
export const DishArt = ({ dish }: { dish: Dish }) => {
  const Art = DISHES[dish];

  return <Art />;
};
