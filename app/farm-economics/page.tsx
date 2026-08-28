import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { PageIntro } from '@/components/content/PageIntro';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema/jsonld';
import { buildMetadata } from '@/lib/seo/metadata';
import { ECONOMICS_PATH } from '@/lib/economics/paths';
import {
  ECONOMICS_CAVEAT,
  EVIDENCE_TYPES,
  FORECAST_CAVEAT,
  INDEX_CAVEAT,
} from '@/types/farm-economics';
import {
  ABSENT_METRICS,
  ECONOMICS_CONTRACTS,
  RESERVED_EVIDENCE_TYPES,
} from '@/lib/economics/contracts';
import {
  allEconomicObservations,
  byEvidenceType,
  costsForCrop,
  cropsWithCosts,
  economicsJurisdictions,
} from '@/lib/economics/registry';
import { REGISTRIES } from '@/data/registries';
import { getSource } from '@/lib/sources/registry';

const TITLE = 'Farm Economics: Production Costs, Input Prices and Land Rents';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'What official statistical agencies publish about what it costs to grow a crop, what farm inputs cost, and what farmland rents for — with each figure kept as the kind of statement its source made.',
  path: ECONOMICS_PATH,
});

export default function FarmEconomicsPage() {
  const observations = allEconomicObservations();
  const counts = byEvidenceType();
  const jurisdictions = economicsJurisdictions();
  const crops = cropsWithCosts();
  const registryName = new Map(REGISTRIES.map((r) => [r.id, r.officialName]));
  const levels = new Map<string, number>();
  for (const j of jurisdictions)
    levels.set(j.level, (levels.get(j.level) ?? 0) + 1);

  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description:
            'Cost of production, farm input prices and agricultural land rents, as published by official statistical agencies.',
          path: ECONOMICS_PATH,
        })}
      />

      <PageIntro
        title={TITLE}
        lead="What official statistics say about the cost side of farming — and what they do not say."
      >
        <p>
          Four datasets from two statistical agencies underlie this page:
          USDA&rsquo;s cost-of-production forecasts for nine field crops, and
          Eurostat&rsquo;s farm input price indices, input purchase prices and
          agricultural land rents. Together they carry{' '}
          {observations.length.toLocaleString('en')} figures.
        </p>
        <p>
          The hard part is not gathering them. It is keeping each one as the
          kind of statement its source made. A forecast for a year that has not
          finished, an average across every farm in a country, and an index
          measuring movement against a base year are three different things, and
          a page that lined them up in one column would turn all three into a
          fourth thing that none of them is.
        </p>
        <p>{ECONOMICS_CAVEAT}</p>
      </PageIntro>

      <section className="mt-8" aria-label="Summary">
        <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            ['Figures', observations.length.toLocaleString('en')],
            ['Datasets', ECONOMICS_CONTRACTS.length],
            ['Crops with costs', crops.length],
            ['Margins published', 0],
          ].map(([label, value]) => (
            <div
              key={String(label)}
              className="rounded-lg border border-ink-100 bg-[#FAFAF7] p-3"
            >
              <dt className="text-xs uppercase tracking-wide text-ink-500">
                {label}
              </dt>
              <dd className="mt-1 font-serif text-2xl text-forest-900">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-10" aria-label="What cannot be published">
        <h2 className="font-serif text-xl text-forest-900">
          What this page does not publish
        </h2>
        <p className="mt-2 text-sm text-ink-700">
          The three figures a reader most often wants are the three no source
          here supports. Every one of them needs revenue, and not one of these
          datasets carries any.
        </p>
        <dl className="mt-4 space-y-3">
          {ABSENT_METRICS.map((a) => (
            <div
              key={a.name}
              className="rounded-lg border border-ink-100 bg-[#FAFAF7] p-4"
            >
              <dt className="font-medium text-ink-900">{a.label}</dt>
              <dd className="mt-1 text-sm text-ink-700">{a.why}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-10" aria-label="Kinds of figure">
        <h2 className="font-serif text-xl text-forest-900">
          Three kinds of figure, kept apart
        </h2>
        <dl className="mt-4 space-y-3">
          {EVIDENCE_TYPES.map((t) => {
            const n = counts.get(t) ?? 0;
            const reserved = RESERVED_EVIDENCE_TYPES.find(
              (r) => r.evidenceType === t,
            );
            return (
              <div
                key={t}
                className="rounded-lg border border-ink-100 bg-[#FAFAF7] p-4"
              >
                <dt className="flex flex-wrap items-baseline gap-2">
                  <span className="font-medium text-ink-900">{t}</span>
                  <span className="text-sm tabular-nums text-ink-600">
                    {n ? `${n.toLocaleString('en')} figures` : 'none held'}
                  </span>
                </dt>
                {reserved && (
                  <dd className="mt-1 text-sm text-ink-700">{reserved.why}</dd>
                )}
              </div>
            );
          })}
        </dl>
        <p className="mt-3 text-sm text-ink-600">{INDEX_CAVEAT}</p>
      </section>

      <section className="mt-10" aria-label="Cost of production by crop">
        <h2 className="font-serif text-xl text-forest-900">
          Cost of production, by crop
        </h2>
        <p className="mt-2 text-sm text-ink-700">
          United States national forecasts. {FORECAST_CAVEAT}
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[34rem] border-collapse text-sm">
            <thead>
              <tr className="border-b border-ink-200 text-left">
                <th className="py-2 pr-4 font-medium text-ink-600">Crop</th>
                <th className="py-2 pr-4 font-medium text-ink-600">Year</th>
                <th className="py-2 pr-4 text-right font-medium text-ink-600">
                  Total costs listed
                </th>
                <th className="py-2 font-medium text-ink-600">Basis</th>
              </tr>
            </thead>
            <tbody>
              {crops.map((crop) => {
                const rows = costsForCrop(crop).filter(
                  (r) => r.metric === 'totalCost',
                );
                const latest = rows.sort((a, b) =>
                  a.period.localeCompare(b.period),
                )[rows.length - 1];
                if (!latest) return null;
                return (
                  <tr key={crop} className="border-b border-ink-100">
                    <td className="py-2 pr-4">
                      <Link
                        href={`/crops/${crop}`}
                        className="text-forest-700 hover:underline"
                      >
                        {crop}
                      </Link>
                    </td>
                    <td className="py-2 pr-4 tabular-nums text-ink-700">
                      {latest.period}
                    </td>
                    <td className="py-2 pr-4 text-right tabular-nums text-ink-900">
                      {latest.value.toFixed(2)} {latest.currency}
                    </td>
                    <td className="py-2 text-ink-600">{latest.unitBasis}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-ink-600">
          These are the source&rsquo;s own totals. AgricultureID does not add
          the cost items up to produce one, because the source decides what
          belongs in a total and a recomputed figure would disagree with it for
          definitional reasons that would read as an error.
        </p>
      </section>

      <section className="mt-10" aria-label="Geography">
        <h2 className="font-serif text-xl text-forest-900">
          Where the figures are about
        </h2>
        <p className="mt-2 text-sm text-ink-700">
          Eurostat publishes union aggregates, countries and regions inside
          countries in a single column. They are counted separately here,
          because a region is not a small country and a union total is not a
          country either.
        </p>
        <dl className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[...levels]
            .sort((a, b) => b[1] - a[1])
            .map(([level, n]) => (
              <div
                key={level}
                className="rounded-lg border border-ink-100 bg-[#FAFAF7] p-3"
              >
                <dt className="text-xs uppercase tracking-wide text-ink-500">
                  {level}
                </dt>
                <dd className="mt-1 font-serif text-2xl text-forest-900">
                  {n}
                </dd>
              </div>
            ))}
        </dl>
      </section>

      <section className="mt-10" aria-label="Datasets">
        <h2 className="font-serif text-xl text-forest-900">
          Datasets, and what each is entitled to say
        </h2>
        <div className="mt-4 space-y-4">
          {ECONOMICS_CONTRACTS.map((c) => {
            const n = observations.filter(
              (o) => o.sourceDatasetId === c.datasetId,
            ).length;
            return (
              <article
                key={c.datasetId}
                className="rounded-lg border border-ink-100 bg-[#FAFAF7] p-4"
              >
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="font-medium text-ink-900">{c.label}</h3>
                  <span className="rounded-full border border-ink-200 px-2 py-0.5 text-[0.625rem] font-semibold uppercase tracking-wide text-ink-600">
                    {c.evidenceType}
                  </span>
                  <span className="text-sm tabular-nums text-ink-600">
                    {n.toLocaleString('en')} figures
                  </span>
                </div>
                <p className="mt-2 text-sm text-ink-700">{c.why}</p>
                <dl className="mt-3 space-y-1 text-sm">
                  <div>
                    <dt className="inline text-ink-500">Geography: </dt>
                    <dd className="inline text-ink-700">{c.geographyNote}</dd>
                  </div>
                  <div>
                    <dt className="inline text-ink-500">Money: </dt>
                    <dd className="inline text-ink-700">
                      {c.isIndex
                        ? 'none — an index carries a base year, not a currency'
                        : `${c.currencies.join(', ')}, exactly as published; no conversion is applied`}
                    </dd>
                  </div>
                  {c.assumptions && (
                    <div>
                      <dt className="text-ink-500">Assumes:</dt>
                      <dd>
                        <ul className="mt-0.5 list-disc space-y-0.5 pl-5 text-ink-700">
                          {c.assumptions.map((a) => (
                            <li key={a}>{a}</li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  )}
                </dl>
                <p className="mt-3 text-sm">
                  <span className="text-ink-500">Source: </span>
                  {c.sourceIds.map((id, i) => {
                    const s = getSource(id);
                    return (
                      <span key={id}>
                        {i > 0 && ', '}
                        {s ? (
                          <a
                            href={s.url}
                            className="text-forest-700 hover:underline"
                            rel="nofollow noopener"
                          >
                            {s.title}
                          </a>
                        ) : (
                          id
                        )}
                      </span>
                    );
                  })}
                  {registryName.has(c.registryId) && (
                    <span className="text-ink-500">
                      {' '}
                      · {registryName.get(c.registryId)}
                    </span>
                  )}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mt-10" aria-label="Currency and inflation">
        <h2 className="font-serif text-xl text-forest-900">
          Currency and inflation
        </h2>
        <p className="mt-2 text-sm text-ink-700">
          Figures appear in the currency the source published them in.
          Eurostat&rsquo;s <code className="text-xs">NAC</code> series are in
          each reporting country&rsquo;s national currency and its{' '}
          <code className="text-xs">EUR</code> series are in euro; both are
          carried as published. No figure is converted between currencies here,
          and no historical amount is restated in today&rsquo;s money. A
          conversion needs a rate and a date, an inflation adjustment needs a
          deflator and a base, and inventing either would change what the source
          said while looking like a courtesy.
        </p>
      </section>
    </Container>
  );
}
