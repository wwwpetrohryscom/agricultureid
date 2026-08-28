/**
 * Farm economics — what official and public sources estimate agricultural
 * production costs to be, and what kind of estimate each one is.
 *
 * ## Six kinds of number that are not the same thing
 *
 *   observed           a farm's actual accounts
 *   survey-average     what a survey found across many farms
 *   enterprise-budget  what a costing exercise assumes a system would cost
 *   modeled            an estimate produced by a model
 *   index              how far a price has MOVED from a base year
 *   forecast           what a source expects a future year to cost
 *
 * They answer different questions and none substitutes for another. A forecast
 * of what maize will cost to grow in 2026 is not a record of what it cost; an
 * average across a country is not any one farm's costs; and an index is not a
 * price at all — it carries no currency and cannot be spent.
 *
 * So {@link EvidenceType} is required, comes from the dataset's contract, and
 * is never inferred from the shape of a number.
 *
 * ## A number without its currency, year and basis is not a figure
 *
 * "184.33" is meaningless. "184.33 US dollars per planted acre, forecast for
 * 2026, United States" is a figure. Every monetary observation therefore
 * carries currency, period and unit basis, and the gate refuses one that does
 * not.
 *
 * Nothing is converted. Eurostat publishes purchase prices in euro AND in
 * national currency as separate series and both are ingested as published;
 * no exchange rate is applied anywhere, and no figure is adjusted for
 * inflation. Where a source publishes a real (deflated) series alongside a
 * nominal one, it deflated it — this corpus did not, and the two are kept
 * apart because a nominal rise and a real rise are different statements.
 *
 * ## What is deliberately absent
 *
 * There is no margin, no net return and no profitability metric anywhere,
 * because there is no revenue here to compute one from. A cost dataset plus an
 * assumed price is a scenario, and presenting one as a farm's margin would be
 * the fabrication this layer exists to avoid.
 *
 * There is no break-even calculator either. Break-even price is total cost
 * divided by expected output, and no source here publishes an expected yield
 * to divide by. A calculator that asked the reader for one would be computing
 * their number, not a source's.
 */

/**
 * Cost and price metrics. Each maps to something a source publishes under its
 * own name, and nothing here combines items a source keeps separate.
 */
export const FARM_ECONOMIC_METRICS = [
  'seedCost',
  'fertilizerCost',
  'pesticideCost',
  'fuelCost',
  'customOperationsCost',
  'repairsCost',
  'operatingInterestCost',
  'otherVariableCost',
  'operatingCost',
  'hiredLabourCost',
  'unpaidLabourOpportunityCost',
  'machineryCapitalRecoveryCost',
  'landOpportunityCost',
  'taxesAndInsuranceCost',
  'generalOverheadCost',
  'allocatedOverheadCost',
  'totalCost',
  'inputPriceIndex',
  'inputPurchasePrice',
  'landRent',
] as const;
export type FarmEconomicMetric = (typeof FARM_ECONOMIC_METRICS)[number];

/**
 * Metrics that are a SOURCE'S OWN total, not a sum computed here.
 *
 * The source decides what belongs in each of its totals. A total computed
 * downstream by adding the items would silently disagree with the source's,
 * and the difference would look like a data error rather than a definitional
 * one.
 */
export const SOURCE_TOTAL_METRICS: readonly FarmEconomicMetric[] = [
  'operatingCost',
  'allocatedOverheadCost',
  'totalCost',
];

/** Metrics that are an index rather than an amount of money. */
export const INDEX_METRICS: readonly FarmEconomicMetric[] = ['inputPriceIndex'];

export const FARM_ECONOMIC_METRIC_LABEL: Record<FarmEconomicMetric, string> = {
  seedCost: 'Seed',
  fertilizerCost: 'Fertiliser',
  pesticideCost: 'Chemicals',
  fuelCost: 'Fuel, lubricants and electricity',
  customOperationsCost: 'Custom operations',
  repairsCost: 'Repairs',
  operatingInterestCost: 'Interest on operating capital',
  otherVariableCost: 'Other variable expenses',
  operatingCost: 'Total operating costs',
  hiredLabourCost: 'Hired labour',
  unpaidLabourOpportunityCost: 'Opportunity cost of unpaid labour',
  machineryCapitalRecoveryCost: 'Capital recovery of machinery and equipment',
  landOpportunityCost: 'Opportunity cost of land',
  taxesAndInsuranceCost: 'Taxes and insurance',
  generalOverheadCost: 'General farm overhead',
  allocatedOverheadCost: 'Total allocated overhead',
  totalCost: 'Total costs listed',
  inputPriceIndex: 'Input price index',
  inputPurchasePrice: 'Input purchase price',
  landRent: 'Agricultural land rent',
};

/** What kind of estimate a figure is. See the module note. */
export const EVIDENCE_TYPES = [
  'observed',
  'survey-average',
  'enterprise-budget',
  'modeled',
  'index',
  'forecast',
] as const;
export type EvidenceType = (typeof EVIDENCE_TYPES)[number];

/**
 * What kind of place a figure is about.
 *
 * Eurostat publishes union aggregates, countries and NUTS regions in one
 * dimension. `unknown` exists because a geography this corpus cannot place is
 * a fact to record, not one to guess at.
 */
export const GEOGRAPHY_LEVELS = [
  'union',
  'country',
  'subnational',
  'unknown',
] as const;
export type GeographyLevel = (typeof GEOGRAPHY_LEVELS)[number];

/** Nominal or deflated — by the SOURCE, never by this corpus. */
export const PRICE_BASES = ['nominal', 'real'] as const;
export type PriceBasis = (typeof PRICE_BASES)[number];

export interface FarmEconomicObservation {
  id: string;
  /** ISO 3166-1 alpha-3, or absent for a union-level aggregate. */
  countryCode?: string;
  /** e.g. "European Union". Never set together with countryCode. */
  supranationalJurisdiction?: string;
  /**
   * The source's own code for a region inside a country, where the figure is
   * regional. Sources mix unions, countries and regions in one geography
   * dimension, and collapsing that distinction puts a region and a union in
   * the same bucket.
   */
  subnationalCode?: string;
  geographyLevel: GeographyLevel;
  jurisdictionName: string;

  /** Slug of a published crop, where the source names one. Never inferred. */
  cropRef?: string;
  /** The source's own name for what the figure is about. */
  publishedSubject: string;

  metric: FarmEconomicMetric;
  value: number;
  /**
   * ISO 4217 for a monetary figure, or the source's own code where it
   * publishes national currency without naming it. Absent only for an index.
   */
  currency?: string;
  /** e.g. "Dollars per planted acre", "Euro per hectare", "Index, 2020=100". */
  unitBasis: string;
  /** The year the figure is for. Never the year it was retrieved. */
  period: string;

  evidenceType: EvidenceType;
  /** Present on an index: whether the source deflated it. */
  priceBasis?: PriceBasis;
  /** Present on an index: the base the source states, e.g. "Index, 2020=100". */
  indexBase?: string;

  sourceDatasetId: string;
  sourceReferenceIds: readonly string[];
  /** What a budget or forecast assumes. Required on both. */
  assumptions?: readonly string[];
  lastVerifiedAt: string;
}

/** Shown wherever farm economics figures are displayed. */
export const ECONOMICS_CAVEAT =
  'These are what official and public sources estimate, not what any particular farm spent. A national average, a forecast and a price index are three different kinds of statement, and none of them describes an individual business.';

/** Shown wherever a forecast appears. */
export const FORECAST_CAVEAT =
  'A forecast of what a crop will cost to grow is not a record of what it cost. It is the source’s expectation for a year that has not finished.';

/** Shown wherever an index appears. */
export const INDEX_CAVEAT =
  'An index measures how far a price has moved from its base year. It carries no currency and is not an amount of money.';
