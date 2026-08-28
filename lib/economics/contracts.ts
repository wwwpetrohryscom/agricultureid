/**
 * Pinned contracts, one per economics dataset.
 *
 * The rule this program keeps arriving at: a dataset with no contract must
 * fail closed. A rule written for a cost forecast in dollars per acre does not
 * merely stop applying to a price index — it stops firing, and the index sails
 * through with no currency, no base year and no rules at all.
 *
 * Each contract pins what its dataset can produce: which metrics, in which
 * evidence type, in which currencies, and whether its figures are indices.
 */
import type { EvidenceType, FarmEconomicMetric } from '@/types/farm-economics';

export interface EconomicsDatasetContract {
  datasetId: string;
  label: string;
  snapshotPath: string;
  registryId: string;
  sourceIds: readonly string[];
  metrics: readonly FarmEconomicMetric[];
  evidenceType: EvidenceType;
  /** Currencies this dataset publishes in. Empty for an index. */
  currencies: readonly string[];
  /** True where every figure is an index rather than an amount. */
  isIndex: boolean;
  /** Required on a forecast or a budget: what it assumes. */
  assumptions?: readonly string[];
  /**
   * What kind of place the figures are about. Sources mix union aggregates,
   * countries and sub-national regions in one geography column, and a reader
   * who does not know which of the three they are looking at cannot use the
   * number.
   */
  geographyNote: string;
  why: string;
}

export const ECONOMICS_CONTRACTS: readonly EconomicsDatasetContract[] = [
  {
    datasetId: 'ers-cost-of-production-forecasts',
    label: 'USDA ERS commodity cost-of-production forecasts',
    snapshotPath:
      'data/snapshots/ers__cost-of-production-forecasts__2026-08-27.json',
    registryId: 'usda-ers-data-products',
    sourceIds: ['reg-usda-ers-data-products'],
    metrics: [
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
    ],
    evidenceType: 'forecast',
    currencies: ['USD'],
    isIndex: false,
    geographyNote:
      'United States, national. ERS publishes no state or regional breakdown in this series, so no figure here is about a particular place inside the country.',
    assumptions: [
      'The figures are for a year that has not finished; ERS marks them 2026F and 2027F.',
      'They are national estimates for the United States as a whole, not for a state, a region or a farm.',
      'They are costs only. The dataset carries no returns, so no margin can be computed from it.',
    ],
    why: 'ERS publishes cost-of-production forecasts by commodity with its own item breakdown and its own totals.',
  },
  {
    datasetId: 'eurostat-input-price-index',
    label: 'Eurostat agricultural input price indices',
    snapshotPath:
      'data/snapshots/eurostat__agricultural-economics__2026-08-27.json',
    registryId: 'eurostat-agriculture',
    sourceIds: ['reg-eurostat-agriculture'],
    metrics: ['inputPriceIndex'],
    evidenceType: 'index',
    // An index carries no currency. That is not a gap; it is what an index is.
    currencies: [],
    isIndex: true,
    geographyNote:
      'EU member states and the EU aggregate. The union figure is a weighted aggregate published by Eurostat, not a number this corpus computed from the member states.',
    why: 'Published as a nominal and a real series on a stated base year. Both are ingested as published and neither is derived here.',
  },
  {
    datasetId: 'eurostat-input-purchase-prices',
    label: 'Eurostat purchase prices of the means of agricultural production',
    snapshotPath:
      'data/snapshots/eurostat__agricultural-economics__2026-08-27.json',
    registryId: 'eurostat-agriculture',
    sourceIds: ['reg-eurostat-agriculture'],
    metrics: ['inputPurchasePrice'],
    evidenceType: 'survey-average',
    // Euro and national currency are separate published series, not one series
    // with a conversion applied.
    currencies: ['EUR', 'NAC'],
    isIndex: false,
    geographyNote:
      'EU member states. Each figure is a national average for the reporting country; no sub-national breakdown is published in this series.',
    why: 'Collected by national authorities to a common methodology and published as averages.',
  },
  {
    datasetId: 'eurostat-land-rents',
    label: 'Eurostat agricultural land renting prices',
    snapshotPath:
      'data/snapshots/eurostat__agricultural-economics__2026-08-27.json',
    registryId: 'eurostat-agriculture',
    sourceIds: ['reg-eurostat-agriculture'],
    metrics: ['landRent'],
    evidenceType: 'survey-average',
    currencies: ['EUR', 'NAC'],
    isIndex: false,
    geographyNote:
      'EU member states and NUTS regions inside them. This is the only series here with sub-national figures, and a NUTS region is a region, never a small country.',
    why: 'Regional averages for the land types the source distinguishes, published per hectare in euro and in national currency.',
  },
];

export const ECONOMICS_CONTRACT_MAP: ReadonlyMap<
  string,
  EconomicsDatasetContract
> = new Map(ECONOMICS_CONTRACTS.map((c) => [c.datasetId, c]));

/**
 * Evidence types no dataset here produces, and why they are kept anyway.
 *
 * The distinction between them is the layer's whole purpose. Removing
 * `observed` would leave nothing for a forecast to be contrasted with, and a
 * later dataset of actual farm accounts would have nowhere honest to go.
 */
export const RESERVED_EVIDENCE_TYPES: readonly {
  evidenceType: EvidenceType;
  why: string;
}[] = [
  {
    evidenceType: 'observed',
    why: 'No dataset of actual farm accounts is ingested. Farm accountancy networks hold them and publish aggregates rather than the accounts themselves, so what would arrive is a survey average, not an observation.',
  },
  {
    evidenceType: 'enterprise-budget',
    why: 'Public enterprise budgets are published by universities and extension services, overwhelmingly as PDFs with their assumptions in prose. A budget whose assumptions could not be carried with it would be a set of numbers detached from the scenario that produced them.',
  },
  {
    evidenceType: 'modeled',
    why: 'Reserved for a model output that is not a forecast of a future year. The ERS figures are forecasts and are typed as such; nothing else here is modelled.',
  },
];

/**
 * Metrics deliberately absent from the vocabulary, and why.
 *
 * These are the ones a reader most wants, which is exactly why they are not
 * here: every one of them requires revenue, and no dataset in this layer
 * carries any.
 */
export const ABSENT_METRICS: readonly {
  name: string;
  label: string;
  why: string;
}[] = [
  {
    name: 'grossMargin',
    label: 'Gross margin',
    why: 'Requires revenue. Nothing here carries any, and a margin computed from a cost dataset plus an assumed price is a scenario presented as a result.',
  },
  {
    name: 'netReturn',
    label: 'Net return, or profit',
    why: 'Requires revenue and a full cost basis together. Calling a gross margin a profit is the most common error in farm economics writing and this layer will not make it.',
  },
  {
    name: 'breakEvenPrice',
    label: 'Break-even price',
    why: 'Total cost divided by expected output. No source here publishes an expected yield to divide by, and a calculator that asked the reader for one would be computing their number rather than a source’s.',
  },
];

/**
 * What the source's own words are for each metric.
 *
 * The metric name is this corpus's word; `publishedItem` is ERS's. Nothing was
 * checking that the two still line up, so an ingest that mapped
 * "Total, operating costs" onto `totalCost` would have published one of the
 * source's totals under the name of another — a number that is real, sourced
 * and about a third of the way wrong.
 */
export const ERS_ITEM_FOR_METRIC: Record<string, string> = {
  seedCost: 'Seed',
  fertilizerCost: 'Fertilizer',
  pesticideCost: 'Chemicals',
  customOperationsCost: 'Custom operations',
  fuelCost: 'Fuel, lube, and electricity',
  repairsCost: 'Repairs',
  otherVariableCost: 'Other variable expenses',
  operatingInterestCost: 'Interest on operating capital',
  operatingCost: 'Total, operating costs',
  hiredLabourCost: 'Hired labor',
  unpaidLabourOpportunityCost: 'Opportunity cost of unpaid labor',
  landOpportunityCost: 'Opportunity cost of land (rental rate)',
  machineryCapitalRecoveryCost: 'Capital recovery of machinery and equipment',
  taxesAndInsuranceCost: 'Taxes and insurance',
  generalOverheadCost: 'General farm overhead',
  allocatedOverheadCost: 'Total, allocated costs',
  totalCost: 'Total, costs listed',
};

/**
 * The marker in each payload that carries the source's own claim about what
 * kind of figure it publishes, and what that marker must say.
 *
 * A contract can declare a dataset a forecast; only the payload can confirm it.
 * Without this the contract would be believed about data it does not describe —
 * the same failure as a contract declaring a map scale the survey denies.
 */
export const PAYLOAD_EVIDENCE_MARKERS: readonly {
  datasetId: string;
  series: string;
  field: string;
  mustEqual: unknown;
  why: string;
}[] = [
  {
    datasetId: 'ers-cost-of-production-forecasts',
    series: 'rows',
    field: 'isForecast',
    mustEqual: true,
    why: 'ERS marks each forecast year with an F. A row in this file that is not marked is not a forecast, and the contract calling the whole dataset one would then be publishing a false label over real data.',
  },
];

/**
 * Series whose rows must carry no currency at all.
 *
 * The index derivation simply does not read a currency field, so one appearing
 * in the payload would be dropped in silence rather than rejected — and the
 * next reader of the snapshot would find a currency on an index and believe it.
 */
export const CURRENCY_FORBIDDEN_SERIES: readonly {
  datasetId: string;
  series: string;
  why: string;
}[] = [
  {
    datasetId: 'eurostat-input-price-index',
    series: 'inputPriceIndices',
    why: 'An index measures movement against a base year. A currency on one would make it look like an amount that could be spent, added or compared with a price.',
  },
];

/**
 * Geography levels held in the vocabulary but not published.
 *
 * `unknown` exists so an unplaceable geography can be recorded rather than
 * guessed at. Nothing may actually be published at that level: a figure whose
 * place cannot be named is a figure a reader cannot use, and it would sit in
 * the corpus looking like every other one.
 */
export const RESERVED_GEOGRAPHY_LEVELS: readonly {
  level: string;
  why: string;
}[] = [
  {
    level: 'unknown',
    why: 'A geography this corpus cannot place as a union, a country or a region inside one is a gap to be closed, not a figure to publish. Eurostat mixes all three in one column, so an unrecognised code means the mapping is incomplete rather than that the place is exotic.',
  },
];
