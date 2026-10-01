import Image from "next/image";
import { MEALS, type Dish } from "../_lib/content";

/** Dish photo in a rounded tile */
export const FoodThumb = ({ dish, size = 40 }: { dish: Dish; size?: number }) => {
  const meal = MEALS[dish];

  return (
    <span
      className="relative inline-block shrink-0 overflow-hidden bg-surface-tile"
      style={{ width: size, height: size, borderRadius: Math.max(8, size / 4) }}
    >
      <Image src={meal.photo} alt="" fill sizes={`${size * 2}px`} className="object-cover" />
    </span>
  );
};
