import type { Dish } from "./content";

/** Dish photo for `next/image`; `image-loader.ts` adds the width and the extension: «/photos/fruitBowl-640.webp» */
export const photo = (dish: Dish) => `/photos/${dish}`;
