import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { ComparisonTable } from '@/components/comparison/ComparisonTable';
import { pageBreadcrumbs } from '@/lib/seo/breadcrumbs';
import { buildMetadata } from '@/lib/seo/metadata';
import { resolveComparison } from '@/lib/comparison/resolve';
import { DIMENSIONS } from '@/lib/comparison/dimensions';
import { getContent } from '@/lib/content/registry';
import { countryMeta } from '@/lib/geo/snapshots';
import type { Comparison, ComparisonEntityType } from '@/types/comparison';
import type { ContentType } from '@/lib/site';

const PATH = '/compare/custom';
const VALID_TYPES: ComparisonEntityType[] = [
  'crop',
  'cultivar',
  'breed',
  'fertilizer',
  'soil',
  'country',
];

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

type Search = { searchParams: Promise<{ type?: string; ids?: string }> };

export default async function CustomComparePage({ searchParams }: Search) {
  const { type, ids } = await searchParams;
  const entityType = VALID_TYPES.includes(type as ComparisonEntityType)
    ? (type as ComparisonEntityType)
    : undefined;
  const idList = (ids ?? '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
    .slice(0, 4);

  // Only accept ids that resolve to compatible, published entities.
  const validIds = entityType
    ? idList.filter((id) =>
        entityType === 'country'
          ? Boolean(countryMeta(id))
          : Boolean(getContent(entityType as ContentType, id)),
      )
    : [];

  const ready = entityType && validIds.length >= 2;
  const comparison: Comparison | null = ready
    ? {
        comparisonId: 'custom',
        slug: 'custom',
        entityType,
        title: 'Custom comparison',
        comparedEntityIds: validIds,
        purpose: 'An ad-hoc comparison you selected.',
        dimensions:
          entityType === 'country'
            ? []
            : DIMENSIONS[entityType].map((d) => d.key),
        indicators:
          entityType === 'country'
            ? ['AG.YLD.CREL.KG', 'AG.LND.AGRI.ZS', 'NV.AGR.TOTL.ZS']
            : undefined,
        methodology:
          'Fields are resolved from the source entities; country indicators use a common year across the selected countries.',
        limitations: ['Ad-hoc comparison; descriptive only, not a ranking.'],
        sourceReferences: [],
        reviewedAt: '2026-07-13',
        updatedAt: '2026-07-13',
        editorialStatus: 'draft',
        seo: { title: 'Custom comparison', description: '' },
      }
    : null;

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
      {comparison ? (
        <section className="mt-8">
          <ComparisonTable resolved={resolveComparison(comparison)} />
          <p className="mt-3 text-xs text-ink-500">
            Descriptive comparison only — not a ranking or recommendation.
          </p>
        </section>
      ) : (
        <p className="mt-8 text-sm text-ink-700">
          Choose a type and at least two compatible entities (via{' '}
          <code className="text-ink-600">?type=crop&amp;ids=wheat,barley</code>)
          to build a comparison, or browse the{' '}
          <Link
            href="/compare"
            className="text-olive-800 underline underline-offset-2"
          >
            curated comparisons
          </Link>
          .
        </p>
      )}
    </Container>
  );
}
