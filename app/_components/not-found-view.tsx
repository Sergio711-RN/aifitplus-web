import type { Locale } from "../_i18n/config";
import { getDictionary } from "../_i18n/dictionaries";
import { AppMark, sparkPath } from "./app-mark";

const CORNERS = [
  "top-0 left-0 rounded-tl-3xl border-t-4 border-l-4",
  "top-0 right-0 rounded-tr-3xl border-t-4 border-r-4",
  "bottom-0 left-0 rounded-bl-3xl border-b-4 border-l-4",
  "right-0 bottom-0 rounded-br-3xl border-r-4 border-b-4",
];

// 404 as the app's camera pointed at an empty plate: the beam keeps sweeping, the AI finds no dish.
// Server-only and CSS-animated, so it also works outside the `[lang]` layout (global-not-found).
export const NotFoundView = ({ locale }: { locale: Locale }) => {
  const t = getDictionary(locale);

  return (
    <div className="relative isolate flex min-h-dvh flex-col overflow-hidden px-5 md:px-10">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute top-[-15%] left-1/2 size-[680px] -translate-x-1/2 rounded-full bg-lilac/15 blur-[130px]" />
        <div className="absolute right-[-10%] bottom-[-20%] size-[520px] rounded-full bg-apricot/10 blur-[130px]" />
      </div>

      <header className="mx-auto flex h-20 w-full max-w-6xl items-center">
        <a href={`/${locale}`} className="flex items-center gap-2" aria-label={t.nav.toHome}>
          <AppMark size={30} />
          <span className="text-xl font-extrabold tracking-tight">
            AIFit<span className="text-apricot">+</span>
          </span>
        </a>
      </header>

      <main className="mx-auto flex w-full max-w-xl flex-1 flex-col items-center justify-center pb-20 text-center">
        <div className="relative aspect-square w-[min(72vw,300px)]" aria-hidden>
          {CORNERS.map((corner) => (
            <span key={corner} className={`absolute size-14 border-apricot ${corner}`} />
          ))}
          {/* Empty plate */}
          <div className="absolute inset-[13%] rounded-full bg-plate shadow-[0_24px_60px_-12px_rgba(0,0,0,0.6)]">
            <div className="absolute inset-[12%] rounded-full bg-plate-well/70" />
          </div>
          {/* Scan beam, clipped by the frame: the trail above the line would stick out over the top corners */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <div className="animate-scan absolute inset-x-[5%] h-16 -translate-y-full">
              <div className="h-full bg-gradient-to-b from-transparent to-apricot/25" />
              <div className="h-0.5 rounded-full bg-apricot shadow-[0_0_18px_5px_rgba(255,176,120,0.6)]" />
            </div>
          </div>
          <svg viewBox="0 0 20 20" className="animate-spin-slow absolute -top-3 -right-3 size-9 text-lilac" aria-hidden>
            <path d={sparkPath(10, 10, 10)} fill="currentColor" />
          </svg>
          <div className="absolute top-[4%] left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-lilac-line bg-lilac-surface/90 px-3.5 py-1.5 text-[13px] font-semibold whitespace-nowrap text-lilac backdrop-blur">
            <svg viewBox="0 0 20 20" className="size-3" aria-hidden>
              <path d={sparkPath(10, 10, 10)} fill="currentColor" />
            </svg>
            {t.notFound.chip}
          </div>
        </div>

        <p className="mt-10 text-[15px] font-semibold text-text-3 tabular-nums">404</p>
        <h1 className="mt-2 text-[clamp(2rem,6vw,3.25rem)] leading-[1.02] font-extrabold tracking-[-0.03em]">{t.notFound.title}</h1>
        <p className="mt-4 max-w-md text-[17px] leading-relaxed text-text-2">{t.notFound.text}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={`/${locale}`}
            className="rounded-full bg-apricot px-6 py-3 text-[16px] font-bold text-ink transition-colors hover:bg-apricot-light"
          >
            {t.notFound.home}
          </a>
          <a
            href={`/${locale}#how`}
            className="rounded-full border border-line px-6 py-3 text-[16px] font-semibold text-text-2 transition-colors hover:border-text-off hover:text-text"
          >
            {t.notFound.how}
          </a>
        </div>
      </main>
    </div>
  );
};
