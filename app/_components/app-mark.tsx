// App mark «Эквалайзер БЖУ» from aifitplus/src/constants/app-mark.ts: three macro bars and the AI spark.
// Animated like the app's splash: bars pulse in a wave (×1.12 from the bottom, 1.6 s, 0.2 s offset), the spark spins.

const BAR_WIDTH = 22;
const BAR_BOTTOM = 136;

const BARS = [
  { key: "carbs", x: 38, height: 58, color: "var(--color-apricot)" },
  { key: "fats", x: 69, height: 86, color: "var(--color-lilac)" },
  { key: "protein", x: 100, height: 70, color: "var(--color-mint)" },
] as const;

export const sparkPath = (cx: number, cy: number, r: number) =>
  `M${cx} ${cy - r}Q${cx} ${cy} ${cx + r} ${cy}Q${cx} ${cy} ${cx} ${cy + r}Q${cx} ${cy} ${cx - r} ${cy}Q${cx} ${cy} ${cx} ${cy - r}Z`;

interface IAppMarkProps {
  size?: number;
  animated?: boolean;
  className?: string;
}

export const AppMark = ({ size = 32, animated = true, className }: IAppMarkProps) => (
  <svg width={size} height={size} viewBox="17 17 126 126" aria-hidden className={className}>
    {BARS.map((bar, index) => (
      <rect
        key={bar.key}
        x={bar.x}
        y={BAR_BOTTOM - bar.height}
        width={BAR_WIDTH}
        height={bar.height}
        rx={BAR_WIDTH / 2}
        fill={bar.color}
        className={animated ? "animate-pulse-bar" : undefined}
        style={{ transformBox: "fill-box", transformOrigin: "bottom", animationDelay: `${index * 0.2}s` }}
      />
    ))}
    <path
      d={sparkPath(80, 34, 10)}
      fill="var(--color-text)"
      className={animated ? "animate-spin-slow" : undefined}
      style={{ transformBox: "fill-box", transformOrigin: "center" }}
    />
  </svg>
);

/** Four-point AI spark on its own, sized by the parent */
export const Spark = ({ className, spin = false }: { className?: string; spin?: boolean }) => (
  <svg viewBox="0 0 20 20" aria-hidden className={className}>
    <path
      d={sparkPath(10, 10, 10)}
      fill="currentColor"
      className={spin ? "animate-spin-slow" : undefined}
      style={{ transformBox: "fill-box", transformOrigin: "center" }}
    />
  </svg>
);
