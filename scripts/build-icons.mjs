// Site icons from the app mark «Эквалайзер БЖУ» — same geometry and colours as the app's icon generator
// (../aifitplus/src/constants/app-mark.ts, ../aifitplus/scripts/build-icons.mjs). Run: `npm run icons` (needs `brew install librsvg`).
// Outputs are committed; do not edit them by hand.

import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = join(import.meta.dirname, "..");
const APP = join(ROOT, "app");
const PUBLIC_ICONS = join(ROOT, "public", "icons");

const COLORS = { background: "#12162B", carbs: "#FFB078", fats: "#B7A6FF", protein: "#7FD8BE", spark: "#EEF0FF" };

// 160-unit canvas, bars stand on y = 136, the spark sits above the middle bar
const BAR_WIDTH = 22;
const BAR_BOTTOM = 136;
const BARS = [
  { x: 38, height: 58, color: COLORS.carbs },
  { x: 69, height: 86, color: COLORS.fats },
  { x: 100, height: 70, color: COLORS.protein },
];
const SPARK = { cx: 80, cy: 34, radius: 10 };

const sparkPath = ({ cx, cy, radius: r }) =>
  `M${cx} ${cy - r}Q${cx} ${cy} ${cx + r} ${cy}Q${cx} ${cy} ${cx} ${cy + r}Q${cx} ${cy} ${cx - r} ${cy}Q${cx} ${cy} ${cx} ${cy - r}Z`;

const mark = [
  ...BARS.map(
    ({ x, height, color }) =>
      `<rect x="${x}" y="${BAR_BOTTOM - height}" width="${BAR_WIDTH}" height="${height}" rx="${BAR_WIDTH / 2}" fill="${color}"/>`,
  ),
  `<path d="${sparkPath(SPARK)}" fill="${COLORS.spark}"/>`,
].join("");

/** `rx` — corner radius of the background on the 160 canvas; `scale` — shrinks the mark around the centre */
const svg = ({ rx = 0, scale = 1 } = {}) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160">` +
  `<rect width="160" height="160" rx="${rx}" fill="${COLORS.background}"/>` +
  `<g transform="translate(80 80) scale(${scale}) translate(-80 -80)">${mark}</g>` +
  `</svg>`;

const png = (source, size) => execFileSync("rsvg-convert", ["-w", String(size), "-h", String(size)], { input: source });

/** ICO with PNG entries (supported by every current browser) */
const ico = (images) => {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);
  let offset = 6 + 16 * images.length;
  const entries = images.map(({ size, data }) => {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0);
    entry.writeUInt8(size >= 256 ? 0 : size, 1);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(data.length, 8);
    entry.writeUInt32LE(offset, 12);
    offset += data.length;

    return entry;
  });

  return Buffer.concat([header, ...entries, ...images.map(({ data }) => data)]);
};

// Browser tab: rounded tile like the app's web favicon (rx 36 of 160)
const rounded = svg({ rx: 36 });
writeFileSync(join(APP, "icon.svg"), `${rounded}\n`);
writeFileSync(join(APP, "favicon.ico"), ico([16, 32, 48].map((size) => ({ size, data: png(rounded, size) }))));

// iOS home screen: full-bleed square, the system rounds the corners
writeFileSync(join(APP, "apple-icon.png"), png(svg(), 180));

// Web app manifest: regular icons and a maskable one with the mark inside the 80% safe zone
mkdirSync(PUBLIC_ICONS, { recursive: true });
writeFileSync(join(PUBLIC_ICONS, "icon-192.png"), png(rounded, 192));
writeFileSync(join(PUBLIC_ICONS, "icon-512.png"), png(rounded, 512));
writeFileSync(join(PUBLIC_ICONS, "icon-maskable-512.png"), png(svg({ scale: 0.82 }), 512));

console.log("Icons written: app/icon.svg, app/favicon.ico, app/apple-icon.png, public/icons/*.png");
