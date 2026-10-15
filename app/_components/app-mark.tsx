// App mark «Эквалайзер БЖУ» from aifitplus/src/constants/app-mark.ts: three macro bars and the AI spark.
// Animated like the app's splash: bars pulse in a wave (×1.12 from the bottom, 1.6 s, 0.2 s offset), the spark spins.

const BAR_WIDTH = 22;
const BAR_BOTTOM = 136;

const BARS = [
  { key: "carbs", x: 38, height: 58, color: "var(--color-apricot)" },
  { key: "fats", x: 69, height: 86, color: "var(--color-lilac)" },
  { key: "protein", x: 100, height: 70, color: "var(--color-mint)" },
] as const;

/** Same bars with literal colours: CSS variables do not exist outside the page */
const BARS_HEX = [
  { x: 38, height: 58, color: "#FFB078" },
  { x: 69, height: 86, color: "#B7A6FF" },
  { x: 100, height: 70, color: "#7FD8BE" },
];

export const sparkPath = (cx: number, cy: number, r: number) =>
  `M${cx} ${cy - r}Q${cx} ${cy} ${cx + r} ${cy}Q${cx} ${cy} ${cx} ${cy + r}Q${cx} ${cy} ${cx - r} ${cy}Q${cx} ${cy} ${cx} ${cy - r}Z`;

/** The mark on its tile as a standalone SVG string — for generated images, where React components are not rendered */
export const appMarkSvg = ({ rx = 36 } = {}) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160"><rect width="160" height="160" rx="${rx}" fill="#12162B"/>` +
  BARS_HEX.map(
    (bar) =>
      `<rect x="${bar.x}" y="${BAR_BOTTOM - bar.height}" width="${BAR_WIDTH}" height="${bar.height}" rx="${BAR_WIDTH / 2}" fill="${bar.color}"/>`,
  ).join("") +
  `<path d="${sparkPath(80, 34, 10)}" fill="#EEF0FF"/></svg>`;

interface IAppMarkProps {
  size?: number;
  animated?: boolean;
  className?: string;
}

/** The mark's box in the SVG geometry above: the tile's inner square, x and y from 17 to 143 */
const VIEW_MIN = 17;
const VIEW_SIZE = 126;
const SPARK = { cx: 80, cy: 34, r: 10 };
const share = (value: number) => `${((value / VIEW_SIZE) * 100).toFixed(3)}%`;

/**
 * The mark on the page is built of HTML boxes, not SVG shapes: Chrome animates `transform` of shapes inside an SVG on the
 * main thread, so the bars and the spark stopped and jumped whenever the page was busy (seen on a Galaxy Note 10+,
 * 15.10.2026). A transform animation of an HTML box runs on the compositor and stays smooth
 */
export const AppMark = ({ size = 32, animated = true, className }: IAppMarkProps) => (
  <span aria-hidden className={`relative inline-block shrink-0 ${className ?? ""}`} style={{ width: size, height: size }}>
    {BARS.map((bar, index) => (
      <span
        key={bar.key}
        className={`absolute origin-bottom rounded-full ${animated ? "animate-pulse-bar" : ""}`}
        style={{
          left: share(bar.x - VIEW_MIN),
          top: share(BAR_BOTTOM - bar.height - VIEW_MIN),
          width: share(BAR_WIDTH),
          height: share(bar.height),
          background: bar.color,
          animationDelay: `${index * 0.2}s`,
        }}
      />
    ))}
    <svg
      viewBox="0 0 20 20"
      className={`absolute ${animated ? "animate-spin-slow" : ""}`}
      style={{
        left: share(SPARK.cx - SPARK.r - VIEW_MIN),
        top: share(SPARK.cy - SPARK.r - VIEW_MIN),
        width: share(SPARK.r * 2),
        height: share(SPARK.r * 2),
      }}
    >
      <path d={sparkPath(10, 10, 10)} fill="var(--color-text)" />
    </svg>
  </span>
);

/** Four-point AI spark on its own, sized by the parent */
export const Spark = ({ className, spin = false }: { className?: string; spin?: boolean }) => (
  // The whole SVG spins, not the path inside: an HTML-level transform animation runs on the compositor (see `AppMark`)
  <svg viewBox="0 0 20 20" aria-hidden className={`${className ?? ""} ${spin ? "animate-spin-slow" : ""}`}>
    <path d={sparkPath(10, 10, 10)} fill="currentColor" />
  </svg>
);
