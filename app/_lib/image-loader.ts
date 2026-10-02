// `next/image` loader for the static export: there is no Next image server, so every width is a ready file in
// `public/photos` (`npm run photos`). `src` is the photo without width and extension: «/photos/syrniki».
export default function photoLoader({ src, width }: { src: string; width: number }) {
  return `${src}-${width}.webp`;
}
