import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { ProvenanceNote } from '@/components/geo/ProvenanceNote';
import { IndicatorCountryTable } from '@/components/geo/IndicatorCountryTable';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema/jsonld';
import { pageBreadcrumbs } from '@/lib/seo/breadcrumbs';
import { buildMetadata } from '@/lib/seo/metadata';
import {
  INDICATORS,
  indicatorBySlug,
  profilesSorted,
} from '@/lib/geo/registry';
import { getSnapshot } from '@/lib/geo/snapshots';
import { datasetPath, indicatorPath, datasetSlug } from '@/lib/geo/paths';

type Params = { params: Promise<{ indicator: string }> };

export function generateStaticParams() {
  return INDICATORS.map((i) => ({ indicator: i.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { indicator } = await params;
  const ind = indicatorBySlug(indicator);
  if (!ind) return {};
  return buildMetadata({
    title: `${ind.name} by country`,
    description:
      `${ind.name} (${ind.unit}): definition, methodology, and the latest values for profiled countries, with source and dataset version. ${ind.description}`.slice(
        0,
        160,
      ),
    path: indicatorPath(ind.slug),
  });
}

export default async function IndicatorPage({ params }: Params) {
  const { indicator } = await params;
  const ind = indicatorBySlug(indicator);
  if (!ind) notFound();
  const snap = getSnapshot(ind.id);
  const path = indicatorPath(ind.slug);

  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: ind.name,
          description: ind.description,
          path,
        })}
      />
      <Breadcrumbs
        items={[
          ...pageBreadcrumbs('Agricultural data', '/agricultural-data'),
          { name: ind.name, path },
        ]}
      />
      <header className="mt-6 border-b border-ink-100 pb-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-olive-700">
          Indicator · {ind.category}
        </p>
        <h1 className="mt-2 font-serif text-3xl font-bold text-forest-950 sm:text-4xl">
          {ind.name}
        </h1>
        <p className="mt-3 max-w-3xl text-lg leading-8 text-ink-700">
          {ind.description}
        </p>
        <dl className="mt-4 grid gap-x-6 gap-y-1 text-sm text-ink-700 sm:grid-cols-2">
          <div>
            <dt className="inline font-semibold">Unit: </dt>
            <dd className="inline">{ind.unit}</dd>
          </div>
          <div>
            <dt className="inline font-semibold">WDI code: </dt>
            <dd className="inline tabular-nums">{ind.id}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="inline font-semibold">Methodology: </dt>
            <dd className="inline">{ind.methodology}</dd>
          </div>
        </dl>
      </header>

      <section className="mt-8">
        <h2 className="font-serif text-2xl font-bold text-ink-900">
          Latest values (profiled countries)
        </h2>
        <p className="mt-1 text-sm text-ink-600">
          Each row shows the most recent available year for that country.
        </p>
        <div className="mt-4">
          <IndicatorCountryTable indicator={ind} profiles={profilesSorted()} />
        </div>
        {snap && (
          <p className="mt-3">
            <ProvenanceNote
              sourceDataset={snap.source}
              sourceVersion={snap.datasetVersion}
              retrievedAt={snap.retrievedAt}
              sourceUrl={snap.sourceUrl}
              estimate={ind.estimateFlag}
            />
          </p>
        )}
        {snap && (
          <p className="mt-2 text-sm">
            <Link
              href={datasetPath(datasetSlug(ind.id))}
              className="text-olive-800 underline underline-offset-2 hover:text-olive-900"
            >
              View the full dataset snapshot →
            </Link>
          </p>
        )}
      </section>
    </Container>
  );
}
