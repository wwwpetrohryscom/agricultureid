import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema, breadcrumbSchema } from '@/lib/schema/jsonld';
import { buildMetadata } from '@/lib/seo/metadata';
import { MarketSeriesChart } from '@/components/markets/MarketSeriesChart';
import { RelatedTools } from '@/components/tools/RelatedTools';
import {
  MARKET_CAVEAT,
  CROSS_SOURCE_CAVEAT,
  METRIC_LABEL,
  type MarketMetric,
} from '@/types/market';
import {
  commoditiesWithMarketData,
  commodityMarketPath,
  seriesForCommodity,
  seriesByDataset,
  rankedByLatest,
  latestObservation,
  MARKETS_HUB_PATH,
} from '@/lib/markets/registry';
import { marketSnapshot } from '@/lib/markets/snapshot';
import { getDataset } from '@/lib/data-ops/registry';
import { PUBLISHED_CONTENT, contentUrlPath } from '@/lib/content/registry';
import { countryName, countryPath, getProfileByCode } from '@/lib/geo/registry';

type Params = { params: Promise<{ commodity: string }> };

export function generateStaticParams() {
  return commoditiesWithMarketData().map((commodity) => ({ commodity }));
}

const commodityOf = (slug: string) =>
  PUBLISHED_CONTENT.find(
    (c) => c.contentType === 'commodity' && c.slug === slug,
  );

/** Countries whose full series is charted. The rest appear in the table. */
const CHARTED = 5;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { commodity } = await params;
  const c = commodityOf(commodity);
  const series = seriesForCommodity(commodity);
  if (!c || series.length === 0) return {};
  const countries = new Set(series.map((s) => s.countryCode)).size;
  return buildMetadata({
    title: `${c.title} Production and Market Data`,
    description: `Production, area, yield, stocks and trade series for ${c.title.toLowerCase()} across ${countries} countries, from official statistical releases with the status each figure carries.`,
    path: commodityMarketPath(commodity),
  });
}

export default async function CommodityMarketPage({ params }: Params) {
  const { commodity } = await params;
  const c = commodityOf(commodity);
  const series = seriesForCommodity(commodity);
  if (!c || series.length === 0) notFound();

  const byDataset = seriesByDataset(series);
  const title = `${c.title} production and market data`;

  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: title,
          description: `Official market series for ${c.title.toLowerCase()}.`,
          path: commodityMarketPath(commodity),
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Agricultural markets', path: MARKETS_HUB_PATH },
          { name: c.title, path: commodityMarketPath(commodity) },
        ])}
      />

      <nav aria-label="Breadcrumb" className="text-sm text-ink-500">
        <Link href={MARKETS_HUB_PATH} className="hover:underline">
          Agricultural markets
        </Link>
        <span aria-hidden="true"> / </span>
        <span>{c.title}</span>
      </nav>

      <h1 className="mt-2 font-serif text-3xl text-forest-900">{title}</h1>
      <p className="mt-2 max-w-2xl text-ink-700">
        Official statistical series for{' '}
        <Link
          href={contentUrlPath(c)}
          className="text-forest-800 hover:underline"
        >
          {c.title.toLowerCase()}
        </Link>
        . Every figure carries the status its source gives it, in the unit its
        source publishes.
      </p>

      <aside
        className="mt-6 rounded-lg border border-olive-200 bg-olive-50/60 p-4 text-sm text-ink-700"
        aria-label="Market data caveat"
      >
        {MARKET_CAVEAT}
        {byDataset.size > 1 ? ` ${CROSS_SOURCE_CAVEAT}` : ''}
      </aside>

      {[...byDataset.entries()].map(([datasetId, dsSeries]) => {
        const snap = marketSnapshot(datasetId);
        const dataset = getDataset(datasetId);
        const metrics = [
          ...new Set(dsSeries.map((s) => s.metric)),
        ] as MarketMetric[];
        return (
          <section key={datasetId} className="mt-10">
            <h2 className="font-serif text-xl text-forest-900">
              {dataset?.title ?? datasetId}
            </h2>
            {snap && (
              <p className="mt-1 text-sm text-ink-600">
                Release {snap.datasetVersion}, read {snap.retrievedAt}. Periods
                are{' '}
                {snap.periodBasis === 'marketing-year'
                  ? 'marketing years, which differ by commodity and country'
                  : 'calendar years'}
                .{' '}
                <a
                  href={snap.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forest-700 hover:underline"
                >
                  Official source
                </a>
              </p>
            )}

            {metrics.map((metric) => {
              const ranked = rankedByLatest(commodity, metric, datasetId);
              if (!ranked.length) return null;
              const unit = ranked[0]!.observation.unit;
              const year = ranked[0]!.observation.period.year;
              const charted = ranked.slice(0, CHARTED);
              return (
                <div key={metric} className="mt-8">
                  <h3 className="font-medium text-ink-900">
                    {METRIC_LABEL[metric]}{' '}
                    <span className="text-sm font-normal text-ink-500">
                      {unit}
                    </span>
                  </h3>

                  <div className="mt-3 overflow-x-auto">
                    <table className="w-full min-w-[28rem] border-collapse text-sm">
                      <caption className="mb-2 text-left text-xs uppercase tracking-wide text-ink-500">
                        {METRIC_LABEL[metric]} by country, {year} — the latest
                        period every country below has in common
                      </caption>
                      <thead>
                        <tr className="border-b border-ink-200 text-left text-xs uppercase tracking-wide text-ink-500">
                          <th scope="col" className="py-2 pr-4 font-medium">
                            Country
                          </th>
                          <th scope="col" className="py-2 pr-4 font-medium">
                            {unit}
                          </th>
                          <th scope="col" className="py-2 font-medium">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {ranked.map(({ countryCode, observation }) => (
                          <tr
                            key={countryCode}
                            className="border-b border-ink-100"
                          >
                            <th
                              scope="row"
                              className="py-1.5 pr-4 font-normal text-ink-900"
                            >
                              {(() => {
                                // countryPath takes a profile SLUG, not an
                                // ISO3 code; a country with no profile is
                                // named in plain text rather than linked to a
                                // route that does not exist.
                                const profile = getProfileByCode(countryCode);
                                const name =
                                  countryName(countryCode) ?? countryCode;
                                return profile ? (
                                  <Link
                                    href={countryPath(profile.slug)}
                                    className="text-forest-800 hover:underline"
                                  >
                                    {name}
                                  </Link>
                                ) : (
                                  name
                                );
                              })()}
                            </th>
                            <td className="py-1.5 pr-4 tabular-nums">
                              {observation.value.toLocaleString('en', {
                                maximumFractionDigits: 2,
                              })}
                            </td>
                            <td className="py-1.5 text-ink-600">
                              {observation.observationStatus}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {charted.map(({ countryCode }) => {
                    const s = dsSeries.find(
                      (x) =>
                        x.countryCode === countryCode && x.metric === metric,
                    );
                    if (!s || !latestObservation(s)) return null;
                    return (
                      <div key={s.id} className="mt-6">
                        <h4 className="text-sm font-medium text-ink-800">
                          {countryName(countryCode) ?? countryCode}
                        </h4>
                        <MarketSeriesChart series={s} />
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </section>
        );
      })}
      <RelatedTools path={MARKETS_HUB_PATH} />
    </Container>
  );
}
