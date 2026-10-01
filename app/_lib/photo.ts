/** Default query for Unsplash photos: a 1200px copy instead of the original; `image-loader.ts` sets the width per screen */
export const PHOTO_QUERY = "?auto=format&fit=crop&w=1200&q=80";

export const unsplash = (id: string) => `https://images.unsplash.com/${id}${PHOTO_QUERY}`;
