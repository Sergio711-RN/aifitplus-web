import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "../../_components/footer";
import { LegalPage } from "../../_components/legal-page";
import { isLocale } from "../../_i18n/config";
import { getDictionary } from "../../_i18n/dictionaries";
import { PRIVACY } from "../../_i18n/legal";
import { pageMetadata } from "../../_i18n/seo";

export const generateMetadata = async ({ params }: PageProps<"/[lang]/privacy">): Promise<Metadata> => {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const t = getDictionary(lang);

  return pageMetadata({ locale: lang, path: "/privacy", title: t.meta.privacyTitle, description: t.meta.privacyDescription });
};

export default async function PrivacyPage({ params }: PageProps<"/[lang]/privacy">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const document = PRIVACY[lang];

  return (
    <>
      <LegalPage
        title={document.title}
        lead={document.lead}
        sections={document.sections}
        sibling={{ href: `/${lang}/terms`, label: getDictionary(lang).footer.terms }}
      />
      <Footer />
    </>
  );
}
