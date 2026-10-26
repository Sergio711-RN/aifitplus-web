import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "../../_components/footer";
import { LegalPage } from "../../_components/legal-page";
import { HEALTH_DATA, HEALTH_DATA_META } from "../../_i18n/legal";
import { pageMetadata } from "../../_i18n/seo";
import { LEGAL } from "../../_lib/legal";

// English only: built as /en/health-data alone; the other languages are redirected there (`public/.htaccess`,
// in `next dev` — `next.config.ts`), and every footer links straight to it
export const generateStaticParams = () => [{ lang: "en" }];

export const metadata: Metadata = pageMetadata({ locale: "en", path: "/health-data", translated: false, ...HEALTH_DATA_META });

// Consumer Health Data Privacy Policy (Washington, Nevada): the Washington Attorney General wants nothing in it beyond what the law
// requires, so no links under the title and no store button
export default async function HealthDataPage({ params }: PageProps<"/[lang]/health-data">) {
  const { lang } = await params;
  if (lang !== "en") notFound();

  return (
    <>
      <LegalPage
        title={HEALTH_DATA.title}
        lead={HEALTH_DATA.lead}
        sections={HEALTH_DATA.sections}
        effectiveDate={LEGAL.effectiveDate.healthData}
        links={[]}
        storeButton={false}
      />
      <Footer />
    </>
  );
}
