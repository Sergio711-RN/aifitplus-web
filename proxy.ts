import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LOCALE, isLocale, LOCALE_COOKIE, LOCALE_HEADER, LOCALES, type Locale } from "./app/_i18n/config";

/** Best supported language from `Accept-Language`, by quality: «uk-UA,uk;q=0.9,en;q=0.8» → uk */
const fromAcceptLanguage = (header: string | null): Locale | null => {
  if (!header) return null;
  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const quality = params.find((param) => param.trim().startsWith("q="));

      return { language: tag.split("-")[0].toLowerCase(), quality: quality ? Number(quality.trim().slice(2)) : 1 };
    })
    .sort((a, b) => b.quality - a.quality);

  return ranked.map((item) => item.language).find(isLocale) ?? null;
};

// Every page lives under a language prefix; a path without one is redirected to the remembered or preferred language
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathLocale = LOCALES.find((locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`));
  if (pathLocale) {
    // Lets the 404 page, which renders outside the `[lang]` layout, speak the visitor's language
    const headers = new Headers(request.headers);
    headers.set(LOCALE_HEADER, pathLocale);

    return NextResponse.next({ request: { headers } });
  }

  const remembered = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale =
    (remembered && isLocale(remembered) ? remembered : null) ?? fromAcceptLanguage(request.headers.get("accept-language")) ?? DEFAULT_LOCALE;
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  // Not for Next internals, the image optimiser or files with an extension (favicon.ico, images)
  matcher: ["/((?!_next|.*\\..*).*)"],
};
