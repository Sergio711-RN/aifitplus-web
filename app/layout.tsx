import type { Metadata, Viewport } from "next";
import { Commissioner } from "next/font/google";
import { SmoothScroll } from "./_components/smooth-scroll";
import "./globals.css";

// Same family as the app; variable, with the «flair» and «volume» axes animated in headlines
const commissioner = Commissioner({
  variable: "--font-commissioner",
  subsets: ["latin", "cyrillic"],
  axes: ["FLAR", "VOLM"],
});

export const metadata: Metadata = {
  title: "AIFit+ — калории по фото",
  description:
    "Сфотографируйте еду, и ИИ определит блюдо, вес порции, калории и БЖУ. Вам остаётся следить за днём.",
  metadataBase: new URL("https://aifitplus.com"),
};

export const viewport: Viewport = {
  themeColor: "#12162B",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${commissioner.variable} antialiased`}>
      <body className="grain min-h-dvh">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
