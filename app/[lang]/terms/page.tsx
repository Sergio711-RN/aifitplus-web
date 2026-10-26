import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "../../_components/footer";
import { LegalPage } from "../../_components/legal-page";
import { isLocale } from "../../_i18n/config";
import { getDictionary } from "../../_i18n/dictionaries";
import { TERMS } from "../../_i18n/legal";
import { pageMetadata } from "../../_i18n/seo";
import { LEGAL } from "../../_lib/legal";

export const generateMetadata = async ({ params }: PageProps<"/[lang]/terms">): Promise<Metadata> => {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const t = getDictionary(lang);

  return pageMetadata({ locale: lang, path: "/terms", title: t.meta.termsTitle, description: t.meta.termsDescription });
};

export default async function TermsPage({ params }: PageProps<"/[lang]/terms">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const document = TERMS[lang];

  return (
    <>
      <LegalPage
        title={document.title}
        lead={document.lead}
        sections={document.sections}
        effectiveDate={LEGAL.effectiveDate.terms}
        links={[{ href: `/${lang}/privacy`, label: getDictionary(lang).footer.privacy }]}
      />
      <Footer />
    </>
  );
}
