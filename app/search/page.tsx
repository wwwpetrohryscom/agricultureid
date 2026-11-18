import type { Metadata } from 'next';
import { PageIntro } from '@/components/content/PageIntro';
import { Container } from '@/components/ui/Container';
import { SearchApp } from '@/components/search/SearchApp';
import { pageBreadcrumbs } from '@/lib/seo/breadcrumbs';
import { buildMetadata } from '@/lib/seo/metadata';

const TITLE = 'Search';
const PATH = '/search';

// Search-result pages are deliberately not indexed (they are query-dependent).
export const metadata: Metadata = {
  ...buildMetadata({
    title: TITLE,
    description:
      'Search across crops, soils, diseases, pests, livestock, cultivars, breeds, countries, indicators, and tools.',
    path: PATH,
  }),
  robots: { index: false, follow: true },
};

// Prerendered once for the static export. The query (`?q=`) is read in the
// browser by SearchApp, so this page no longer renders on request.
export default function SearchPage() {
  return (
    <Container className="py-8 lg:py-10">
      <PageIntro
        eyebrow="Search"
        title="Search AgricultureID"
        lead="Full-text search across every entity — with synonyms (corn → maize), scientific names, conservative typo tolerance, and faceted filtering."
        crumbs={pageBreadcrumbs(TITLE, PATH)}
      />
      <SearchApp />
    </Container>
  );
}
