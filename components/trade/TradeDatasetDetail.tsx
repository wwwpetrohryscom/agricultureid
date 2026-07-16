import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { ExternalLink } from '@/components/ui/ExternalLink';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema/jsonld';
import { pageBreadcrumbs } from '@/lib/seo/breadcrumbs';
import { datasetPath } from '@/lib/geo/paths';
import { tradeCommoditySlugs } from '@/lib/trade/snapshot';
import type { DatasetRegistryEntry } from '@/types/data-ops';
import type { TradeSnapshot } from '@/types/trade-data';

/**
 * Phase 5D — dataset detail page for the FAOSTAT Detailed Trade Matrix.
 *
 * The World Bank detail page assumes an indicator series (iso3/year/value rows,
 * a unit, an indicator page, a recomputable row checksum). None of that holds
 * for this dataset, so it renders from its registry entry + snapshot metadata.
 * Server component; no client JS.
 */

function Row({ k, v }: { k: string; v: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-0.5 border-b border-ink-100 py-2 sm:grid-cols-[12rem_1fr] sm:gap-3">
      <dt className="text-sm font-semibold text-ink-700">{k}</dt>
      <dd className="break-words text-sm text-ink-700">{v}</dd>
    </div>
  );
}

export function TradeDatasetDetail({
  entry,
  snap,
}: {
  entry: DatasetRegistryEntry;
  snap: TradeSnapshot;
}) {
  const path = datasetPath(entry.datasetId);
  const slugs = tradeCommoditySlugs();

  return (
    <Container className="py-8 lg:py-10" width="narrow">
      <JsonLd
        data={webPageSchema({
          name: `${entry.title} — dataset snapshot`,
          description: entry.description.slice(0, 200),
          path,
        })}
      />
      <Breadcrumbs
        items={[
          ...pageBreadcrumbs('Datasets', '/datasets'),
          { name: entry.title, path },
        ]}
      />
      <header className="mt-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-olive-700">
          Dataset snapshot
        </p>
        <h1 className="mt-2 font-serif text-3xl font-bold text-forest-950">
          {entry.title}
        </h1>
        <p className="mt-3 text-sm leading-7 text-ink-700">
          {entry.description}
        </p>
      </header>

      <dl className="mt-6">
        <Row
          k="Snapshot ID"
          v={<span className="tabular-nums">{snap.snapshotId}</span>}
        />
        <Row k="Provider" v={entry.provider} />
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
        <Row
          k="Bulk file"
          v={
            <ExternalLink
              href={snap.bulkUrl}
              className="break-all text-olive-800 underline underline-offset-2"
            >
              {snap.bulkUrl}
            </ExternalLink>
          }
        />
        <Row
          k="Licence"
          v={
            <>
              {snap.license} —{' '}
              <ExternalLink
                href={snap.licenseUrl}
                className="text-olive-800 underline underline-offset-2"
              >
                licence terms
              </ExternalLink>
              . Attribution required: “{snap.attribution}”
            </>
          }
        />
        <Row
          k="Dataset version"
          v={<span className="tabular-nums">{snap.datasetVersion}</span>}
        />
        <Row
          k="Retrieved"
          v={<span className="tabular-nums">{snap.retrievedAt}</span>}
        />
        <Row k="Units" v={entry.expectedUnit} />
        <Row
          k="Reference year"
          v={<span className="tabular-nums">{snap.referenceYear}</span>}
        />
        <Row
          k="Coverage"
          v={
            snap.coveredYears.length === 2
              ? `${snap.coveredYears[0]}–${snap.coveredYears[1]} scanned; ${snap.commodityCount} commodities, ${snap.observationCount.toLocaleString('en')} observations`
              : `${snap.commodityCount} commodities, ${snap.observationCount.toLocaleString('en')} observations`
          }
        />
        <Row k="Update frequency" v={entry.updateFrequency} />
        <Row k="Transformation version" v={snap.transformationVersion} />
        <Row k="Transformation" v={snap.transformation} />
        <Row k="Aggregate rule" v={snap.aggregateRule} />
        <Row k="Expected columns" v={entry.expectedColumns.join(', ')} />
        <Row k="Missing values" v={entry.missingValueRule} />
        <Row k="Revision policy" v={entry.revisionPolicy} />
        <Row
          k="Checksum"
          v={
            <>
              <span className="break-all font-mono text-xs">
                {snap.checksum}
              </span>
              <span className="mt-1 block text-xs text-ink-500">
                Recorded by the snapshot’s producer over the source extract. It
                is not recomputed from the rows on this page, so it is shown as
                recorded rather than as verified.
              </span>
            </>
          }
        />
        <Row
          k="Element codes"
          v={Object.entries(snap.elementCodes)
            .map(([code, label]) => `${code} = ${label}`)
            .join('; ')}
        />
        <Row
          k="Flags"
          v={Object.entries(snap.flagMeanings)
            .map(([code, label]) => `${code} = ${label}`)
            .join('; ')}
        />
      </dl>

      <section className="mt-6 rounded-card border border-clay-200 bg-[#FAFAF7] p-4">
        <h2 className="font-serif text-lg font-bold text-ink-900">
          Limitations
        </h2>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-7 text-ink-700">
          {entry.knownLimitations.map((l, i) => (
            <li key={i}>{l}</li>
          ))}
        </ul>
      </section>

      {slugs.length > 0 && (
        <section className="mt-6">
          <h2 className="font-serif text-lg font-bold text-ink-900">
            Where this dataset is used
          </h2>
          <p className="mt-1 text-sm leading-7 text-ink-700">
            Reported-trade figures from this snapshot appear on the{' '}
            {slugs.length} commodity pages below. There is no separate trade
            page per commodity: the commodity page owns the subject.
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5 text-sm">
            {slugs.map((s) => (
              <li key={s}>
                <Link
                  href={`/commodities/${s}#reported-trade`}
                  className="text-olive-800 underline decoration-olive-300 underline-offset-2 hover:text-olive-900"
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </Container>
  );
}
