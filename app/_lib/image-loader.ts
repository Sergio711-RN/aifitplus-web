// `next/image` loader for the static export: no Next image server, so Unsplash resizes the photo itself.
// Every photo comes from `unsplash(id)`; the loader only swaps in the width the browser needs.
export default function unsplashLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  const url = new URL(src);
  url.searchParams.set("w", String(width));
  if (quality) url.searchParams.set("q", String(quality));

  return url.href;
}
