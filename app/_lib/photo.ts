/** Query every Unsplash photo is requested with; `next.config.ts` allows exactly this one */
export const PHOTO_QUERY = "?auto=format&fit=crop&w=1200&q=80";

export const unsplash = (id: string) => `https://images.unsplash.com/${id}${PHOTO_QUERY}`;
