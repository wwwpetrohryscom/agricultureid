import Link from 'next/link';
import {
  seriesForCountry,
  commodityMarketPath,
  MARKETS_HUB_PATH,
} from '@/lib/markets/registry';
import { METRIC_LABEL, type MarketMetric } from '@/types/market';
import { PUBLISHED_CONTENT } from '@/lib/content/registry';

/**
 * Market coverage on a country page.
 *
 * A directory, not a dashboard: it says which commodities this country has
 * official series for and links to each, rather than repeating figures the
 * commodity pages already present with their units, statuses and sources. A
 * country-by-commodity page would be the 2,480-route explosion this layer
 * exists to avoid, so the crawl path runs country → commodity market page.
 *
 * Renders nothing when the country has no series.
 */
export function CountryMarketPanel({ countryCode }: { countryCode: string }) {
  const series = seriesForCountry(countryCode);
  if (series.length === 0) return null;

  const byCommodity = new Map<string, Set<MarketMetric>>();
  for (const s of series) {
    const set = byCommodity.get(s.commodityRef) ?? new Set<MarketMetric>();
    set.add(s.metric);
    byCommodity.set(s.commodityRef, set);
  }

  const rows = [...byCommodity.entries()]
    .map(([slug, metrics]) => ({
      slug,
      title:
        PUBLISHED_CONTENT.find(
          (c) => c.contentType === 'commodity' && c.slug === slug,
        )?.title ?? slug,
      metrics: [...metrics],
    }))
    .sort((a, b) => a.title.localeCompare(b.title));

  const observations = series.reduce((n, s) => n + s.observations.length, 0);

  return (
    <section className="mt-8 rounded-lg border border-ink-100 bg-[#FAFAF7] p-4">
      <h2 className="font-serif text-lg text-forest-900">
        Commodity market data
      </h2>
      <p className="mt-1 text-sm text-ink-600">
        {observations.toLocaleString('en')} official observations across{' '}
        {rows.length} commodities. Figures are shown on each commodity page with
        the unit, status and release its source published.
      </p>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full min-w-[26rem] border-collapse text-sm">
          <caption className="sr-only">
            Commodities with official market series for this country
          </caption>
          <thead>
            <tr className="border-b border-ink-200 text-left text-xs uppercase tracking-wide text-ink-500">
              <th scope="col" className="py-2 pr-4 font-medium">
                Commodity
              </th>
              <th scope="col" className="py-2 font-medium">
                Metrics recorded
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
                <td className="py-2 text-ink-600">
                  {r.metrics.map((m) => METRIC_LABEL[m]).join(', ')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm">
        <Link
          href={MARKETS_HUB_PATH}
          className="text-forest-700 hover:underline"
        >
          How these figures are recorded
        </Link>
      </p>
    </section>
  );
}
