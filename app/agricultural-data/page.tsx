import type { Metadata } from 'next';
import Link from 'next/link';
import { PageIntro } from '@/components/content/PageIntro';
import { SourceList } from '@/components/content/SourceList';
import { Container } from '@/components/ui/Container';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema/jsonld';
import { pageBreadcrumbs } from '@/lib/seo/breadcrumbs';
import { buildMetadata } from '@/lib/seo/metadata';
import { INDICATORS } from '@/lib/geo/registry';
import { indicatorPath } from '@/lib/geo/paths';

const TITLE = 'Agricultural Data';
const PATH = '/agricultural-data';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'Country agricultural statistics from official datasets — land, production, yield, economy, inputs, and environment — each value dated, unit-labelled, sourced, and versioned.',
  path: PATH,
});

const CATEGORIES: { key: string; label: string }[] = [
  { key: 'land', label: 'Land' },
  { key: 'production', label: 'Production' },
  { key: 'yield', label: 'Yield' },
  { key: 'economy', label: 'Economy' },
  { key: 'inputs', label: 'Inputs' },
  { key: 'environment', label: 'Environment' },
  { key: 'population', label: 'Population' },
];

export default function AgriculturalDataPage() {
  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description:
            'Country agricultural statistics from official datasets, dated and versioned.',
          path: PATH,
        })}
      />
      <PageIntro
        eyebrow="Data"
        title="Agricultural data"
        lead="Country statistics compiled from official datasets (World Bank / FAO), presented as dated, versioned values — never as evergreen prose. Browse by indicator, by country, or by dataset snapshot."
        crumbs={pageBreadcrumbs(TITLE, PATH)}
      />

      <div className="mt-6 flex flex-wrap gap-3 text-sm">
        <Link
          href="/countries"
          className="rounded-full border border-ink-200 px-4 py-1.5 font-medium text-olive-800 hover:border-olive-300"
        >
          Browse countries →
        </Link>
        <Link
          href="/datasets"
          className="rounded-full border border-ink-200 px-4 py-1.5 font-medium text-olive-800 hover:border-olive-300"
        >
          Dataset snapshots →
        </Link>
        <Link
          href="/methodology/data"
          className="rounded-full border border-ink-200 px-4 py-1.5 font-medium text-olive-800 hover:border-olive-300"
        >
          Data methodology →
        </Link>
      </div>

      <section className="mt-10">
        <h2 className="font-serif text-2xl font-bold text-ink-900">
          Indicators
        </h2>
        <div className="mt-4 space-y-6">
          {CATEGORIES.map((cat) => {
            const inds = INDICATORS.filter((i) => i.category === cat.key);
            if (inds.length === 0) return null;
            return (
              <div key={cat.key}>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-olive-700">
                  {cat.label}
                </h3>
                <ul className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {inds.map((ind) => (
                    <li key={ind.id}>
                      <Link
                        href={indicatorPath(ind.slug)}
                        className="flex items-baseline justify-between gap-3 rounded-card border border-ink-100 bg-white px-3 py-2 hover:border-olive-300"
                      >
                        <span className="text-sm font-medium text-forest-950">
                          {ind.name}
                          {ind.estimateFlag && (
                            <span className="ml-1 text-xs text-clay-700">
                              (est.)
                            </span>
                          )}
                        </span>
                        <span className="shrink-0 text-xs text-ink-500">
                          {ind.unit}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <SourceList
        references={[
          {
            sourceId: 'worldbank',
            citedFor: 'World Development Indicators (CC BY 4.0)',
          },
          {
            sourceId: 'faostat',
            citedFor: 'Underlying agricultural statistics',
          },
          {
            sourceId: 'usda-nass',
            citedFor: 'U.S. agricultural statistics context',
          },
          { sourceId: 'ec-agri', citedFor: 'EU agricultural data context' },
        ]}
      />
    </Container>
  );
}
