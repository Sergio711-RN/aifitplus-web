import { NotFoundView, notFoundLocale } from "../_components/not-found-view";

// `notFound()` inside a language segment; unmatched URLs are handled by `app/global-not-found.tsx`
export default async function NotFound() {
  return <NotFoundView locale={await notFoundLocale()} />;
}
