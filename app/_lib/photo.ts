/** Default query for Unsplash photos: a 1200px copy instead of the original; `image-loader.ts` sets the width per screen.
 * `q=60` halves the weight against 80 and looks the same at the sizes on the page (photos are served at 2× density) */
export const PHOTO_QUERY = "?auto=format&fit=crop&w=1200&q=60";

export const unsplash = (id: string) => `https://images.unsplash.com/${id}${PHOTO_QUERY}`;
