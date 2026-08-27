import Link from 'next/link';
import {
  seriesForCommodity,
  commodityMarketPath,
  metricsForCommodity,
  rankedByLatest,
} from '@/lib/markets/registry';
import { METRIC_LABEL } from '@/types/market';

/**
 * Link from a commodity page to its market data.
 *
 * Renders nothing when the commodity has no series, so a commodity without
 * ingested statistics never advertises an empty page. This is also the crawl
 * path that makes market pages reachable from the commodity corpus rather than
 * only from their own hub.
 *
 * The teaser names the largest producer at the latest shared period rather than
 * quoting a bare number, because a figure without its unit, year and status is
 * exactly the kind of claim this layer exists to avoid making.
 */
export function CommodityMarketLink({
  commoditySlug,
}: {
  commoditySlug: string;
}) {
  const series = seriesForCommodity(commoditySlug);
  if (series.length === 0) return null;

  const countries = new Set(series.map((s) => s.countryCode)).size;
  const metrics = metricsForCommodity(commoditySlug);
  const observations = series.reduce((n, s) => n + s.observations.length, 0);
  const top = rankedByLatest(
    commoditySlug,
    'productionQuantity',
    'faostat-production',
  )[0];

  return (
    <section className="mt-8 rounded-lg border border-ink-100 bg-[#FAFAF7] p-4">
      <h2 className="font-serif text-lg text-forest-900">
        Production and market data
      </h2>
      <p className="mt-1 text-sm text-ink-600">
        {observations.toLocaleString('en')} official observations across{' '}
        {countries} countries, covering{' '}
        {metrics
          .map((m) => METRIC_LABEL[m].toLowerCase())
          .join(', ')
          .replace(/, ([^,]*)$/, ' and $1')}
        .
        {top && (
          <>
            {' '}
            The largest reported producer in {
              top.observation.period.year
            } was {top.countryCode} at{' '}
            {top.observation.value.toLocaleString('en', {
              maximumFractionDigits: 0,
            })}{' '}
            {top.observation.unit} ({top.observation.observationStatus}).
          </>
        )}
      </p>
      <p className="mt-2 text-sm">
        <Link
          href={commodityMarketPath(commoditySlug)}
          className="text-forest-700 hover:underline"
        >
          View the market data
        </Link>
      </p>
    </section>
  );
}
