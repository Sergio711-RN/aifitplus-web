// Dish photos for the site: square WebP copies of `assets/photos/*.jpg` in every width `next/image` asks for
// (`images.imageSizes` and `deviceSizes` in `next.config.ts` — keep the list below in step with them).
// The originals are from Unsplash (free licence), their ids are in `app/_lib/content.ts`. Run: `npm run photos`.
// Outputs (`public/photos/*`) are committed; do not edit them by hand. `sharp` comes with Next.

import { mkdirSync, readdirSync, rmSync, statSync } from "node:fs";
import { basename, join } from "node:path";
import sharp from "sharp";

const ROOT = join(import.meta.dirname, "..");
const SOURCE = join(ROOT, "assets", "photos");
const TARGET = join(ROOT, "public", "photos");

/** The page shows the photos in squares (`object-cover`), the largest one 290 px wide at 2× density */
const WIDTHS = [32, 64, 96, 128, 256, 384, 640];
const QUALITY = 72;

rmSync(TARGET, { recursive: true, force: true });
mkdirSync(TARGET, { recursive: true });

let total = 0;
for (const file of readdirSync(SOURCE).filter((name) => name.endsWith(".jpg"))) {
  const name = basename(file, ".jpg");
  for (const width of WIDTHS) {
    const output = join(TARGET, `${name}-${width}.webp`);
    await sharp(join(SOURCE, file))
      .resize(width, width, { fit: "cover", position: "centre" })
      .webp({ quality: QUALITY, effort: 6 })
      .toFile(output);
    total += statSync(output).size;
  }
  console.log(name, WIDTHS.map((width) => `${width}: ${(statSync(join(TARGET, `${name}-${width}.webp`)).size / 1024).toFixed(1)} KB`).join(", "));
}
console.log(`public/photos: ${(total / 1024).toFixed(0)} KB`);
