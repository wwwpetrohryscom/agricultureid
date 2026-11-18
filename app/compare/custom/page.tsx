import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { CustomComparison } from '@/components/comparison/CustomComparison';
import { pageBreadcrumbs } from '@/lib/seo/breadcrumbs';
import { buildMetadata } from '@/lib/seo/metadata';

const PATH = '/compare/custom';

// User-selected combinations are query-dependent and must NOT create indexable
// URLs — always noindex.
export const metadata: Metadata = {
  ...buildMetadata({
    title: 'Custom comparison',
    description:
      'Build an ad-hoc comparison of compatible agricultural entities.',
    path: PATH,
  }),
  robots: { index: false, follow: true },
};

// Prerendered once for the static export. The selection (`?type=&ids=`) is
// read in the browser by CustomComparison, which assembles the table from the
// build-time data in /compare/custom/data/{type}.json.
export default function CustomComparePage() {
  return (
    <Container className="py-8 lg:py-10">
      <Breadcrumbs
        items={[
          ...pageBreadcrumbs('Compare', '/compare'),
          { name: 'Custom', path: PATH },
        ]}
      />
      <header className="mt-6 border-b border-ink-100 pb-6">
        <h1 className="font-serif text-3xl font-bold text-forest-950">
          Custom comparison
        </h1>
        <p className="mt-2 text-sm text-ink-600">
          This page is not indexed. For durable, cited comparisons, see the{' '}
          <Link
            href="/compare"
            className="text-olive-800 underline underline-offset-2"
          >
            curated comparisons
          </Link>
          .
        </p>
      </header>
      <CustomComparison />
    </Container>
  );
}
