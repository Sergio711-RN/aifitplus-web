import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { appMarkSvg } from "../_components/app-mark";
import { isLocale, type Locale } from "../_i18n/config";
import { getDictionary } from "../_i18n/dictionaries";
import { MEALS } from "../_lib/content";

// Share preview for every page of a language (legal pages inherit it): mark, headline and the plate in the viewfinder,
// like the hero. Rendered at build time. Commissioner from the app's font package — the default font has no Cyrillic.

const SIZE = { width: 1200, height: 630 };
const COLORS = { ink: "#12162B", text: "#EEF0FF", text2: "#A3ABD6", apricot: "#FFB078", lilac: "#B7A6FF" };

const fonts = Promise.all([
  readFile(join(process.cwd(), "assets/fonts/Commissioner-ExtraBold.ttf")),
  readFile(join(process.cwd(), "assets/fonts/Commissioner-Medium.ttf")),
]);

const localeOf = (lang: string): Locale => (isLocale(lang) ? lang : "en");

export const generateImageMetadata = async ({ params }: { params: Promise<{ lang: string }> | { lang: string } }) => {
  const { lang } = await params;

  return [{ id: "share", alt: getDictionary(localeOf(lang)).meta.ogImageAlt, size: SIZE, contentType: "image/png" }];
};

const Corner = ({ position }: { position: "tl" | "bl" | "br" }) => {
  const side = 64;
  const border = `7px solid ${COLORS.apricot}`;
  const styles = {
    tl: { top: 0, left: 0, borderTop: border, borderLeft: border, borderTopLeftRadius: 28 },
    bl: { bottom: 0, left: 0, borderBottom: border, borderLeft: border, borderBottomLeftRadius: 28 },
    br: { bottom: 0, right: 0, borderBottom: border, borderRight: border, borderBottomRightRadius: 28 },
  }[position];

  return <div style={{ position: "absolute", width: side, height: side, display: "flex", ...styles }} />;
};

export default async function OpenGraphImage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = getDictionary(localeOf(lang));
  const [extraBold, medium] = await fonts;
  const mark = `data:image/svg+xml;utf8,${encodeURIComponent(appMarkSvg())}`;
  const spark = `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 0Q10 10 20 10Q10 10 10 20Q10 10 0 10Q10 10 10 0Z" fill="${COLORS.lilac}"/></svg>`,
  )}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          padding: "64px 72px",
          backgroundColor: COLORS.ink,
          backgroundImage:
            "radial-gradient(circle at 12% 8%, rgba(183,166,255,0.30), transparent 42%), radial-gradient(circle at 92% 96%, rgba(255,176,120,0.26), transparent 46%)",
          color: COLORS.text,
          fontFamily: "Commissioner",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1, paddingRight: 40 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <img src={mark} width={76} height={76} alt="" />
            <div style={{ display: "flex", fontSize: 46, fontWeight: 800, letterSpacing: -1 }}>
              AIFit<span style={{ color: COLORS.apricot }}>+</span>
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 66, fontWeight: 800, lineHeight: 1.04, letterSpacing: -2 }}>{t.hero.title}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 30, fontWeight: 500, color: COLORS.text2 }}>
            <div style={{ display: "flex", width: 14, height: 14, borderRadius: 7, backgroundColor: COLORS.apricot }} />
            {t.cta.title}
          </div>
        </div>

        <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", width: 440, height: 502 }}>
          <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", width: 420, height: 420 }}>
            <img src={MEALS.syrniki.photo} width={360} height={360} alt="" style={{ borderRadius: 180, objectFit: "cover" }} />
            <Corner position="tl" />
            <Corner position="bl" />
            <Corner position="br" />
            <img src={spark} width={54} height={54} alt="" style={{ position: "absolute", top: -14, right: -14 }} />
          </div>
        </div>
      </div>
    ),
    {
      ...SIZE,
      fonts: [
        { name: "Commissioner", data: extraBold, weight: 800, style: "normal" },
        { name: "Commissioner", data: medium, weight: 500, style: "normal" },
      ],
    },
  );
}
