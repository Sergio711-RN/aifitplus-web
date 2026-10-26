import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "../../_components/footer";
import { LegalPage } from "../../_components/legal-page";
import { isLocale } from "../../_i18n/config";
import { getDictionary } from "../../_i18n/dictionaries";
import { pageMetadata } from "../../_i18n/seo";
import { SUPPORT } from "../../_i18n/support";

export const generateMetadata = async ({ params }: PageProps<"/[lang]/support">): Promise<Metadata> => {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const t = getDictionary(lang);

  return pageMetadata({ locale: lang, path: "/support", title: t.meta.supportTitle, description: t.meta.supportDescription });
};

// The support URL for the App Store and Google Play: contacts and answers, laid out like the legal documents
export default async function SupportPage({ params }: PageProps<"/[lang]/support">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const document = SUPPORT[lang];
  const t = getDictionary(lang);

  return (
    <>
      <LegalPage
        title={document.title}
        lead={document.lead}
        sections={document.sections}
        links={[
          { href: `/${lang}/privacy`, label: t.footer.privacy },
          { href: `/${lang}/terms`, label: t.footer.terms },
        ]}
      />
      <Footer />
    </>
  );
}
