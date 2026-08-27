/**
 * Query layer over agricultural market series.
 *
 * ## What gets a page, and what does not
 *
 * A commodity with real series gets a market page. A commodity-and-country pair
 * does NOT: 62 commodities across 40 countries would be 2,480 pages, each one a
 * single table that the commodity page already shows in full context. Country
 * pages instead carry a compact panel of what that country has data for. This
 * is the §9 depth rule applied to routes rather than to rows.
 *
 * ## Series never merge across sources
 *
 * `seriesFor` groups by dataset as well as by metric, because FAOSTAT calendar
 * years and USDA marketing years are different periods and their units may
 * differ too. Two sources may describe the same commodity and country without
 * either being wrong; showing them as one line would invent a series that
 * neither publishes.
 */
import {
  marketSnapshot,
  marketSnapshots,
  type MarketSnapshot,
  type MarketSnapshotSeries,
} from '@/lib/markets/snapshot';
import {
  METRIC_DIMENSION,
  SETTLED_OBSERVATION_STATUSES,
  type AgriculturalMarketObservation,
  type MarketMetric,
  type MarketSeries,
  type ObservationStatus,
} from '@/types/market';

export { marketSnapshot, marketSnapshots };

export const MARKETS_HUB_PATH = '/agricultural-markets';

export function commodityMarketPath(commoditySlug: string): string {
  return `${MARKETS_HUB_PATH}/${commoditySlug}`;
}

function toSeries(
  snap: MarketSnapshot,
  datasetId: string,
  raw: MarketSnapshotSeries,
): MarketSeries {
  // The currency is part of series identity: a producer price in local
  // currency and the same price in US dollars are two published series, not
  // one series in two units.
  const id = `${datasetId}:${raw.iso3}:${raw.commoditySlug}:${raw.metric}${raw.currency ? `:${raw.currency}` : ''}`;
  const observations: AgriculturalMarketObservation[] = raw.years.map(
    (year, i) => ({
      id: `${id}:${year}`,
      commodityRef: raw.commoditySlug,
      countryCode: raw.iso3,
      metric: raw.metric as MarketMetric,
      period: {
        frequency: snap.periodFrequency,
        basis: snap.periodBasis,
        year,
      },
      value: raw.values[i]!,
      unit: raw.unit,
      observationStatus: (snap.statusLegend[raw.statuses[i]!] ??
        'unknown') as ObservationStatus,
      currency: raw.currency ?? undefined,
      currencyBasis: (raw.currencyBasis ?? undefined) as
        AgriculturalMarketObservation['currencyBasis'] | undefined,
      sourceDatasetId: datasetId,
      sourceSnapshotId: snap.snapshotId,
      retrievedAt: snap.retrievedAt,
    }),
  );
  return {
    id,
    commodityRef: raw.commoditySlug,
    countryCode: raw.iso3,
    metric: raw.metric as MarketMetric,
    unit: raw.unit,
    currency: raw.currency ?? undefined,
    currencyBasis: (raw.currencyBasis ?? undefined) as
      MarketSeries['currencyBasis'] | undefined,
    basis: snap.periodBasis,
    frequency: snap.periodFrequency,
    sourceDatasetId: datasetId,
    sourceSnapshotId: snap.snapshotId,
    retrievedAt: snap.retrievedAt,
    observations,
  };
}

let CACHE: MarketSeries[] | null = null;

/** Every market series across every loaded snapshot. */
export function allMarketSeries(): MarketSeries[] {
  if (CACHE) return CACHE;
  const out: MarketSeries[] = [];
  for (const [datasetId, snap] of marketSnapshots()) {
    for (const raw of snap.series) out.push(toSeries(snap, datasetId, raw));
  }
  CACHE = out;
  return out;
}

/** Commodity slugs with at least one series. Sorted, deduplicated. */
export function commoditiesWithMarketData(): string[] {
  return [...new Set(allMarketSeries().map((s) => s.commodityRef))].sort();
}

/** ISO 3166-1 alpha-3 codes with at least one series. */
export function countriesWithMarketData(): string[] {
  return [...new Set(allMarketSeries().map((s) => s.countryCode))].sort();
}

/** Every series for one commodity. */
export function seriesForCommodity(commodityRef: string): MarketSeries[] {
  return allMarketSeries().filter((s) => s.commodityRef === commodityRef);
}

/** Every series for one country, across commodities. */
export function seriesForCountry(countryCode: string): MarketSeries[] {
  return allMarketSeries().filter((s) => s.countryCode === countryCode);
}

/** Every series for one commodity in one country. */
export function seriesFor(
  commodityRef: string,
  countryCode: string,
): MarketSeries[] {
  return allMarketSeries().filter(
    (s) => s.commodityRef === commodityRef && s.countryCode === countryCode,
  );
}

/** Metrics recorded for a commodity, in vocabulary order. */
export function metricsForCommodity(commodityRef: string): MarketMetric[] {
  return [...new Set(seriesForCommodity(commodityRef).map((s) => s.metric))];
}

/** The most recent observation in a series. Series are stored year-ascending. */
export function latestObservation(
  series: MarketSeries,
): AgriculturalMarketObservation | undefined {
  return series.observations[series.observations.length - 1];
}

/**
 * Countries ranked by their latest value for one commodity and metric.
 *
 * Ranks ONLY within a single dataset and unit — ranking across units would
 * compare bales with tonnes — and only over the latest year that the compared
 * countries actually share, so a country whose series ends early is never shown
 * as though it had stopped producing.
 */
export function rankedByLatest(
  commodityRef: string,
  metric: MarketMetric,
  datasetId: string,
  currency?: string,
): { countryCode: string; observation: AgriculturalMarketObservation }[] {
  const series = seriesForCommodity(commodityRef).filter(
    (s) =>
      s.metric === metric &&
      s.sourceDatasetId === datasetId &&
      // A ranking compares one currency. Ranking a local-currency price
      // against a US dollar price would rank exchange rates.
      (currency === undefined || s.currency === currency),
  );
  if (!series.length) return [];
  const units = new Set(series.map((s) => s.unit));
  if (units.size > 1) return [];
  const sharedYear = Math.min(
    ...series.map((s) => latestObservation(s)?.period.year ?? 0),
  );
  const rows = series
    .map((s) => {
      const observation = s.observations.find(
        (o) => o.period.year === sharedYear,
      );
      return observation ? { countryCode: s.countryCode, observation } : null;
    })
    .filter((r): r is NonNullable<typeof r> => r !== null);
  return rows.sort((a, b) => b.observation.value - a.observation.value);
}

/**
 * The (metric, currency) pairs a dataset publishes for a commodity.
 *
 * Prices arrive in more than one currency, and a currency is part of what the
 * number is. Iterating metrics alone would collapse a local-currency series and
 * a US dollar series into one table with two units in it.
 */
export function metricViewsFor(
  commodityRef: string,
  datasetId: string,
): { metric: MarketMetric; currency?: string }[] {
  const seen = new Map<string, { metric: MarketMetric; currency?: string }>();
  for (const s of seriesForCommodity(commodityRef)) {
    if (s.sourceDatasetId !== datasetId) continue;
    seen.set(`${s.metric}|${s.currency ?? ''}`, {
      metric: s.metric,
      currency: s.currency,
    });
  }
  return [...seen.values()];
}

/** Commodities a country has any series for, for its dashboard. */
export function commoditiesForCountry(countryCode: string): string[] {
  return [
    ...new Set(seriesForCountry(countryCode).map((s) => s.commodityRef)),
  ].sort();
}

/** Series grouped by dataset, so two sources are never drawn as one line. */
export function seriesByDataset(
  series: MarketSeries[],
): Map<string, MarketSeries[]> {
  const out = new Map<string, MarketSeries[]>();
  for (const s of series) {
    out.set(s.sourceDatasetId, [...(out.get(s.sourceDatasetId) ?? []), s]);
  }
  return out;
}

/** True when every observation describes a period that actually happened. */
export function isSettled(series: MarketSeries): boolean {
  return series.observations.every((o) =>
    SETTLED_OBSERVATION_STATUSES.includes(o.observationStatus),
  );
}

/** Status counts across a set of series, for the status legend on a page. */
export function statusBreakdown(
  series: MarketSeries[],
): Map<ObservationStatus, number> {
  const out = new Map<ObservationStatus, number>();
  for (const s of series) {
    for (const o of s.observations) {
      out.set(o.observationStatus, (out.get(o.observationStatus) ?? 0) + 1);
    }
  }
  return out;
}

/** Total observations held, used by the hub and the report. */
export function observationCount(): number {
  return allMarketSeries().reduce((n, s) => n + s.observations.length, 0);
}

/** The dimension a metric measures — used to check a unit can express it. */
export function dimensionOf(metric: MarketMetric) {
  return METRIC_DIMENSION[metric];
}
