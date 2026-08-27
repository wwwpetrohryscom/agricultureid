import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { PageIntro } from '@/components/content/PageIntro';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema/jsonld';
import { buildMetadata } from '@/lib/seo/metadata';
import {
  MARKET_CAVEAT,
  METRIC_LABEL,
  OBSERVATION_STATUSES,
  type MarketMetric,
} from '@/types/market';
import {
  allMarketSeries,
  commoditiesWithMarketData,
  countriesWithMarketData,
  commodityMarketPath,
  seriesForCommodity,
  statusBreakdown,
  observationCount,
  MARKETS_HUB_PATH,
} from '@/lib/markets/registry';
import { marketSnapshots } from '@/lib/markets/snapshot';
import { getDataset } from '@/lib/data-ops/registry';
import { PUBLISHED_CONTENT } from '@/lib/content/registry';

const TITLE = 'Agricultural Markets and Commodity Data';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'Production, area, yield, stocks, use and trade series for agricultural commodities, from official statistical releases — each figure with the status, unit and release its source gives it.',
  path: MARKETS_HUB_PATH,
});

export default function MarketsPage() {
  const commodities = commoditiesWithMarketData();
  const series = allMarketSeries();
  const statuses = statusBreakdown(series);
  const commodityOf = (slug: string) =>
    PUBLISHED_CONTENT.find(
      (c) => c.contentType === 'commodity' && c.slug === slug,
    );

  const rows = commodities
    .map((slug) => {
      const s = seriesForCommodity(slug);
      return {
        slug,
        title: commodityOf(slug)?.title ?? slug,
        countries: new Set(s.map((x) => x.countryCode)).size,
        metrics: [...new Set(s.map((x) => x.metric))] as MarketMetric[],
        observations: s.reduce((n, x) => n + x.observations.length, 0),
      };
    })
    .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description:
            'Official agricultural market and commodity statistics with explicit status, unit and source.',
          path: MARKETS_HUB_PATH,
        })}
      />

      <PageIntro
        title={TITLE}
        lead="How much is produced, where, on what area, at what yield — and how much of each figure is a measurement rather than an estimate."
      >
        <p>
          Every figure here is read from an official statistical release and
          keeps three things that market summaries usually drop: the{' '}
          <strong>unit</strong> its source published it in, the{' '}
          <strong>status</strong> its source gave it, and the{' '}
          <strong>release</strong> it came from. Nothing is converted, smoothed,
          interpolated or projected.
        </p>
        <p>
          Series from different sources are never merged. FAOSTAT reports
          calendar years and USDA reports marketing years, which differ by
          commodity and by country; drawing them as one line would invent a
          series neither publishes.
        </p>
      </PageIntro>

      <aside
        className="mt-6 rounded-lg border border-olive-200 bg-olive-50/60 p-4 text-sm text-ink-700"
        aria-label="Market data caveat"
      >
        {MARKET_CAVEAT}
      </aside>

      <section className="mt-8" aria-label="Coverage">
        <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            ['Observations', observationCount().toLocaleString('en')],
            ['Series', series.length.toLocaleString('en')],
            ['Commodities', commodities.length],
            ['Countries', countriesWithMarketData().length],
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

      <section className="mt-10" aria-label="What the statuses mean">
        <h2 className="font-serif text-xl text-forest-900">
          What each figure claims
        </h2>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[30rem] border-collapse text-sm">
            <thead>
              <tr className="border-b border-ink-200 text-left text-xs uppercase tracking-wide text-ink-500">
                <th scope="col" className="py-2 pr-4 font-medium">
                  Status
                </th>
                <th scope="col" className="py-2 pr-4 font-medium">
                  Observations
                </th>
                <th scope="col" className="py-2 font-medium">
                  Meaning
                </th>
              </tr>
            </thead>
            <tbody>
              {OBSERVATION_STATUSES.filter((s) => statuses.get(s)).map((s) => (
                <tr key={s} className="border-b border-ink-100">
                  <th scope="row" className="py-2 pr-4 font-normal">
                    {s}
                  </th>
                  <td className="py-2 pr-4 tabular-nums">
                    {(statuses.get(s) ?? 0).toLocaleString('en')}
                  </td>
                  <td className="py-2 text-ink-700">
                    {s === 'observed'
                      ? 'The source publishes it as an official or reported figure.'
                      : 'The source publishes it as an estimate, imputation or model output.'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 max-w-2xl text-sm text-ink-600">
          No figure on this site is a forecast. Neither release ingested here
          flags projections in a machine-readable way, so USDA marketing years
          after 2024 — which are USDA projections — were withheld rather than
          published as though they had been observed.
        </p>
      </section>

      <section className="mt-10" aria-label="Sources">
        <h2 className="font-serif text-xl text-forest-900">Sources</h2>
        <ul className="mt-3 space-y-4">
          {[...marketSnapshots().entries()].map(([datasetId, snap]) => {
            const dataset = getDataset(datasetId);
            return (
              <li
                key={datasetId}
                className="border-t border-ink-100 pt-3 text-sm"
              >
                <p className="font-medium text-ink-900">
                  {dataset?.title ?? datasetId}
                  <span className="ml-2 text-xs font-normal text-ink-500">
                    release {snap.datasetVersion}
                  </span>
                </p>
                <p className="mt-1 text-ink-700">{snap.source}</p>
                <p className="mt-1 text-ink-600">{snap.statusRule}</p>
                <p className="mt-1 text-xs text-ink-500">
                  {snap.seriesCount.toLocaleString('en')} series ·{' '}
                  {snap.observationCount.toLocaleString('en')} observations ·
                  read {snap.retrievedAt} ·{' '}
                  <Link
                    href={`/datasets/${datasetId}`}
                    className="text-forest-700 hover:underline"
                  >
                    dataset record
                  </Link>
                </p>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="mt-10" aria-label="Commodities">
        <h2 className="font-serif text-xl text-forest-900">
          Commodities with market data
        </h2>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[34rem] border-collapse text-sm">
            <thead>
              <tr className="border-b border-ink-200 text-left text-xs uppercase tracking-wide text-ink-500">
                <th scope="col" className="py-2 pr-4 font-medium">
                  Commodity
                </th>
                <th scope="col" className="py-2 pr-4 font-medium">
                  Countries
                </th>
                <th scope="col" className="py-2 pr-4 font-medium">
                  Observations
                </th>
                <th scope="col" className="py-2 font-medium">
                  Metrics
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.slug} className="border-b border-ink-100 align-top">
                  <th scope="row" className="py-2 pr-4 font-normal">
                    <Link
                      href={commodityMarketPath(r.slug)}
                      className="text-forest-800 hover:underline"
                    >
                      {r.title}
                    </Link>
                  </th>
                  <td className="py-2 pr-4 tabular-nums">{r.countries}</td>
                  <td className="py-2 pr-4 tabular-nums">
                    {r.observations.toLocaleString('en')}
                  </td>
                  <td className="py-2 text-ink-600">
                    {r.metrics.map((m) => METRIC_LABEL[m]).join(', ')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </Container>
  );
}
