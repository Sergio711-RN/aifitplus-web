import type { CSSProperties } from "react";

export interface IGlow {
  /** Position, size, colour and blur */
  className: string;
  /** Offsets in px the glow drifts through and back: [0, to, 0] or [0, to, via, 0] */
  x: number[];
  y: number[];
  duration: number;
}

/** Evening-sky backdrop of a page section: a vertical gradient that starts and ends in `ink`, so sections join without a seam, and slowly drifting glows */
export const SectionBackdrop = ({ glows }: { glows: IGlow[] }) => (
  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
    <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--color-ink)_0%,var(--color-dusk)_45%,var(--color-dusk-deep)_70%,var(--color-ink)_100%)]" />
    {glows.map((glow) => (
      <div
        key={glow.className}
        className={`absolute rounded-full ${glow.className}`}
        style={
          {
            "--dx": `${glow.x[1]}px`,
            "--dy": `${glow.y[1]}px`,
            "--dx2": `${glow.x[2]}px`,
            "--dy2": `${glow.y[2]}px`,
            animation: `${glow.x.length > 3 ? "drift-2" : "drift"} ${glow.duration}s ease-in-out infinite`,
          } as CSSProperties
        }
      />
    ))}
  </div>
);
