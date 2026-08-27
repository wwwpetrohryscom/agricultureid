/**
 * Agricultural market observations — a NUMBER, with everything needed to know
 * what it is a number OF.
 *
 * ## The five statements this layer refuses to conflate
 *
 *   "Brazil produced 154 Mt of soybeans"        — a quantity
 *   "Brazil harvested 45 Mha of soybeans"       — an area
 *   "Brazil's soybean yield was 3,420 kg/ha"    — a ratio
 *   "Brazil exported 98 Mt of soybeans"         — a flow
 *   "Brazil holds 32 Mt of soybean stocks"      — a level
 *
 * These are different metrics with different units, and none is derivable from
 * another without assumptions this layer does not make. Yield in particular is
 * taken as the source publishes it and is never recomputed from production over
 * area: the two need not divide exactly, because statistical agencies round and
 * revise the three series independently.
 *
 * ## A figure without a status is not a fact
 *
 * A USDA projection and a FAOSTAT official figure are not the same kind of
 * claim, and presenting them in one column would make them look identical.
 * {@link AgriculturalMarketObservation.observationStatus} is therefore required
 * on every observation, and is derived from the source's own flag — never
 * assumed. Where a source publishes no status at all, the honest options are to
 * record what the source says it is, or not to ingest the value: this layer
 * does both, and the snapshot files name which rows were withheld and why.
 *
 * ## A marketing year is not a calendar year
 *
 * FAOSTAT reports calendar years. USDA PSD reports marketing years, which
 * differ by commodity AND by country — a marketing year labelled 2024 may run
 * from mid-2024 into 2025. Plotting the two on one axis as though the labels
 * meant the same thing would be wrong, so {@link MarketPeriod.basis} carries
 * the distinction and the UI never merges series across bases.
 *
 * ## A price basis is part of what the number IS
 *
 * A producer price, a wholesale price and an export price are three different
 * quantities for the same commodity in the same week, and the gap between them
 * is the marketing chain. The metric therefore names the basis — there is no
 * bare `price` — and a producer price is never compared with, averaged into, or
 * charted alongside another basis.
 *
 * ## Currency is carried, never converted
 *
 * FAOSTAT publishes producer prices in local currency AND in US dollars as two
 * separate series. Both are ingested as published; neither is derived from the
 * other here. An index is not money at all, and shares no unit with a price.
 *
 * ## Units travel with the value, always
 *
 * Cotton is published by USDA in 1000 480 lb. bales and by FAO in tonnes. No
 * conversion is applied anywhere in this layer, because a silent bale-to-tonne
 * conversion is indistinguishable from a factor-of-four error. The published
 * unit is stored verbatim and rendered next to every figure.
 */

/** What a figure measures. Each metric fixes a dimension, never a unit. */
export const MARKET_METRICS = [
  'productionQuantity',
  'harvestedArea',
  'plantedArea',
  'yield',
  'importsQuantity',
  'exportsQuantity',
  'importsValue',
  'exportsValue',
  'beginningStocks',
  'endingStocks',
  'domesticUse',
  'feedUse',
  'foodUse',
  'producerPrice',
  'wholesalePrice',
  'indexValue',
] as const;
export type MarketMetric = (typeof MARKET_METRICS)[number];

/**
 * The physical dimension of each metric. Used by the validator to reject a unit
 * that cannot express the metric — an area in tonnes, a price in hectares.
 */
export const METRIC_DIMENSION: Record<MarketMetric, MetricDimension> = {
  productionQuantity: 'mass',
  harvestedArea: 'area',
  plantedArea: 'area',
  yield: 'mass-per-area',
  importsQuantity: 'mass',
  exportsQuantity: 'mass',
  importsValue: 'currency',
  exportsValue: 'currency',
  beginningStocks: 'mass',
  endingStocks: 'mass',
  domesticUse: 'mass',
  feedUse: 'mass',
  foodUse: 'mass',
  producerPrice: 'currency-per-mass',
  wholesalePrice: 'currency-per-mass',
  indexValue: 'index',
};
export const METRIC_DIMENSIONS = [
  'mass',
  'area',
  'mass-per-area',
  'currency',
  'currency-per-mass',
  'index',
] as const;
export type MetricDimension = (typeof METRIC_DIMENSIONS)[number];

/** Human labels, so a page never renders a camelCase key. */
export const METRIC_LABEL: Record<MarketMetric, string> = {
  productionQuantity: 'Production',
  harvestedArea: 'Area harvested',
  plantedArea: 'Area planted',
  yield: 'Yield',
  importsQuantity: 'Imports',
  exportsQuantity: 'Exports',
  importsValue: 'Import value',
  exportsValue: 'Export value',
  beginningStocks: 'Beginning stocks',
  endingStocks: 'Ending stocks',
  domesticUse: 'Domestic use',
  feedUse: 'Feed use',
  foodUse: 'Food use',
  producerPrice: 'Producer price',
  wholesalePrice: 'Wholesale price',
  indexValue: 'Index value',
};

/** How much of a claim a figure is. Required on every observation. */
export const OBSERVATION_STATUSES = [
  /** The source publishes it as an official or reported figure. */
  'observed',
  /** The source publishes it as an estimate, imputation or model output. */
  'estimated',
  /** The source publishes it as a projection for a period not yet complete. */
  'forecast',
  /** Published but flagged by the source as subject to revision. */
  'provisional',
  /** A revised value replacing an earlier published figure. */
  'revised',
  'unknown',
] as const;
export type ObservationStatus = (typeof OBSERVATION_STATUSES)[number];

/** Statuses that describe a period that actually happened. */
export const SETTLED_OBSERVATION_STATUSES: readonly ObservationStatus[] = [
  'observed',
  'estimated',
  'provisional',
  'revised',
];

/** Whether a year label means a calendar year or a commodity marketing year. */
export const PERIOD_BASES = ['calendar-year', 'marketing-year'] as const;
export type PeriodBasis = (typeof PERIOD_BASES)[number];

export const PERIOD_FREQUENCIES = [
  'daily',
  'weekly',
  'monthly',
  'quarterly',
  'annual',
] as const;
export type PeriodFrequency = (typeof PERIOD_FREQUENCIES)[number];

export interface MarketPeriod {
  frequency: PeriodFrequency;
  /** Calendar or marketing year. Never inferred — see the module note. */
  basis: PeriodBasis;
  year: number;
  month?: number;
  week?: number;
  date?: string;
}

export interface AgriculturalMarketObservation {
  id: string;
  /** Slug of a published commodity in the content registry. */
  commodityRef: string;
  /** ISO 3166-1 alpha-3. Absent only for supranational or world figures. */
  countryCode?: string;
  jurisdictionId?: string;
  marketRegion?: string;

  metric: MarketMetric;
  period: MarketPeriod;
  value: number;
  /** The unit exactly as the source publishes it. Never converted. */
  unit: string;

  observationStatus: ObservationStatus;

  /**
   * Currency the value is denominated in, where it is money. Absent for
   * quantities, areas, yields and indices. Never converted.
   */
  currency?: string;
  /**
   * What kind of currency figure this is — a nominal local currency unit, US
   * dollars as the source published them, or a standardised construct. Recorded
   * so two monetary series are never merged because both look like "price".
   */
  currencyBasis?: CurrencyBasis;
  /** Market or delivery point, where the source names one. Usually absent. */
  marketLocation?: string;
  /** Grade or commodity form, where the source names one. Usually absent. */
  grade?: string;

  /** Registry id of the dataset this figure came from. */
  sourceDatasetId: string;
  /** Snapshot the figure was read from — the immutable release. */
  sourceSnapshotId: string;
  /** The source's own series identifier, where it publishes one. */
  sourceSeriesId?: string;
  retrievedAt: string;
  publishedAt?: string;
  notes?: string[];
}

/**
 * A run of observations that share commodity, geography, metric and unit — the
 * unit in which this data is actually meaningful, and the unit the depth
 * threshold applies to. One number is not a series and does not get a page.
 */
export const CURRENCY_BASES = [
  /** The country's own currency, nominal, as the source published it. */
  'local-currency-unit',
  /** US dollars as the source published them — not converted here. */
  'united-states-dollar',
  /** A standardised or constant-currency construct rather than money paid. */
  'standard-local-currency',
] as const;
export type CurrencyBasis = (typeof CURRENCY_BASES)[number];

/** Metrics that denominate money and therefore require a currency. */
export const MONETARY_METRICS: readonly MarketMetric[] = [
  'importsValue',
  'exportsValue',
  'producerPrice',
  'wholesalePrice',
];

export interface MarketSeries {
  id: string;
  commodityRef: string;
  countryCode: string;
  metric: MarketMetric;
  unit: string;
  currency?: string;
  currencyBasis?: CurrencyBasis;
  basis: PeriodBasis;
  frequency: PeriodFrequency;
  sourceDatasetId: string;
  sourceSnapshotId: string;
  retrievedAt: string;
  observations: AgriculturalMarketObservation[];
}

/** Shown wherever market figures are displayed. */
export const MARKET_CAVEAT =
  'Agricultural statistics are revised. Each figure is shown with the status its source gives it, the unit its source publishes, and the release it was read from; a later release may differ.';

/** Shown wherever series from more than one dataset appear together. */
export const CROSS_SOURCE_CAVEAT =
  'Figures from different datasets are not interchangeable: they may use different reporting periods, different commodity definitions and different units, and are never combined into one series.';
