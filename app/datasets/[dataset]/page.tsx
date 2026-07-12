import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { ExternalLink } from '@/components/ui/ExternalLink';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema/jsonld';
import { pageBreadcrumbs } from '@/lib/seo/breadcrumbs';
import { buildMetadata } from '@/lib/seo/metadata';
import { allSnapshots, checksumValid } from '@/lib/geo/snapshots';
import { INDICATOR_BY_ID } from '@/data/geo/indicators';
import { datasetPath, datasetSlug, indicatorPath } from '@/lib/geo/paths';

type Params = { params: Promise<{ dataset: string }> };

function snapshotBySlug(slug: string) {
  return allSnapshots().find((s) => datasetSlug(s.indicatorId) === slug);
}

export function generateStaticParams() {
  return allSnapshots().map((s) => ({ dataset: datasetSlug(s.indicatorId) }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { dataset } = await params;
  const snap = snapshotBySlug(dataset);
  if (!snap) return {};
  return buildMetadata({
    title: `${snap.indicatorName} — dataset snapshot`,
    description:
      `Immutable snapshot of ${snap.indicatorName} (${snap.unit}) from ${snap.source}, version ${snap.datasetVersion}, with coverage and integrity checksum.`.slice(
        0,
        160,
      ),
    path: datasetPath(dataset),
  });
}

function Row({ k, v }: { k: string; v: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-0.5 border-b border-ink-100 py-2 sm:grid-cols-[12rem_1fr] sm:gap-3">
      <dt className="text-sm font-semibold text-ink-700">{k}</dt>
      <dd className="break-words text-sm text-ink-700">{v}</dd>
    </div>
  );
}

export default async function DatasetPage({ params }: Params) {
  const { dataset } = await params;
  const snap = snapshotBySlug(dataset);
  if (!snap) notFound();
  const ind = INDICATOR_BY_ID.get(snap.indicatorId);
  const valid = checksumValid(snap);
  const path = datasetPath(dataset);

  return (
    <Container className="py-8 lg:py-10" width="narrow">
      <JsonLd
        data={webPageSchema({
          name: `${snap.indicatorName} — dataset snapshot`,
          description: snap.limitations.slice(0, 200),
          path,
        })}
      />
      <Breadcrumbs
        items={[
          ...pageBreadcrumbs('Datasets', '/datasets'),
          { name: snap.indicatorName, path },
        ]}
      />
      <header className="mt-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-olive-700">
          Dataset snapshot
        </p>
        <h1 className="mt-2 font-serif text-3xl font-bold text-forest-950">
          {snap.indicatorName}
        </h1>
      </header>

      <dl className="mt-6">
        <Row
          k="Snapshot ID"
          v={<span className="tabular-nums">{snap.snapshotId}</span>}
        />
        <Row
          k="Source"
          v={
            <ExternalLink
              href={snap.sourceUrl}
              className="text-olive-800 underline underline-offset-2"
            >
              {snap.source}
            </ExternalLink>
          }
        />
        <Row k="License" v={snap.license} />
        <Row
          k="Dataset version"
          v={<span className="tabular-nums">{snap.datasetVersion}</span>}
        />
        <Row
          k="Retrieved"
          v={<span className="tabular-nums">{snap.retrievedAt}</span>}
        />
        <Row k="Unit" v={snap.unit} />
        <Row
          k="Coverage"
          v={
            snap.coveredYears.length === 2
              ? `${snap.coveredYears[0]}–${snap.coveredYears[1]}, ${snap.jurisdictionCount} jurisdictions, ${snap.rowCount.toLocaleString('en')} observations`
              : `${snap.jurisdictionCount} jurisdictions`
          }
        />
        <Row k="Transformation version" v={snap.transformationVersion} />
        <Row
          k="Integrity"
          v={
            <span className={valid ? 'text-forest-700' : 'text-clay-700'}>
              {valid ? 'checksum verified' : 'checksum mismatch'} ·{' '}
              <span className="break-all font-mono text-xs">
                {snap.checksum}
              </span>
            </span>
          }
        />
        {ind && (
          <Row
            k="Indicator page"
            v={
              <Link
                href={indicatorPath(ind.slug)}
                className="text-olive-800 underline underline-offset-2"
              >
                {ind.name} by country →
              </Link>
            }
          />
        )}
      </dl>

      <section className="mt-6 rounded-card border border-clay-200 bg-[#FAFAF7] p-4">
        <h2 className="font-serif text-lg font-bold text-ink-900">
          Limitations
        </h2>
        <p className="mt-2 text-sm leading-7 text-ink-700">
          {snap.limitations}
        </p>
      </section>
    </Container>
  );
}
