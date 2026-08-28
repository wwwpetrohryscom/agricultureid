/**
 * Query layer over farm economics observations.
 *
 * Derived on read from the committed snapshots, one observation per published
 * figure. There is no page per observation: 24,916 pages each holding one
 * number and its unit would be thinner than the row they came from.
 */
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import type {
  EvidenceType,
  FarmEconomicMetric,
  FarmEconomicObservation,
} from '@/types/farm-economics';
import { ECONOMICS_CONTRACTS } from './contracts';

export { ECONOMICS_PATH } from './paths';

interface ErsRow {
  commodityLabel: string;
  cropRef: string;
  metric: FarmEconomicMetric;
  publishedItem: string;
  value: number;
  currency: string;
  unitBasis: string;
  period: string;
  isForecast: boolean;
  region: string;
}
interface PiRow {
  geo: string;
  geoLabel: string;
  item: string;
  itemLabel: string;
  priceBasis: 'nominal' | 'real';
  indexBase: string;
  period: string;
  value: number;
}
interface ApRow {
  geo: string;
  geoLabel: string;
  product: string;
  productLabel: string;
  currency: string;
  period: string;
  value: number;
}
interface LrRow {
  geo: string;
  geoLabel: string;
  landType: string;
  landTypeLabel: string;
  unit: string;
  unitLabel: string;
  period: string;
  value: number;
}

const CACHE = new Map<string, Record<string, unknown>>();
function snapshot(path: string): Record<string, unknown> {
  const c = CACHE.get(path);
  if (c) return c;
  const raw = JSON.parse(
    readFileSync(join(process.cwd(), path), 'utf8'),
  ) as Record<string, unknown>;
  CACHE.set(path, raw);
  return raw;
}

export function economicsSnapshot(datasetId: string) {
  const contract = ECONOMICS_CONTRACTS.find((c) => c.datasetId === datasetId);
  if (!contract) throw new Error(`no contract for "${datasetId}"`);
  return snapshot(contract.snapshotPath);
}

/**
 * A union aggregate is not a country.
 *
 * Eurostat publishes EU-level aggregates alongside member states in the same
 * geography dimension. Treating `EU27_2020` as a country code would put a
 * union in a column readers filter as countries, so it is carried as what it
 * is.
 */
const UNION_GEOS = new Set(['EU27_2020', 'EU28', 'EU', 'EA', 'EA19', 'EA20']);

/** Eurostat two-letter geography → ISO alpha-3 for the countries we carry. */
const ISO3: Record<string, string> = {
  AT: 'AUT',
  BE: 'BEL',
  BG: 'BGR',
  CY: 'CYP',
  CZ: 'CZE',
  DE: 'DEU',
  DK: 'DNK',
  EE: 'EST',
  EL: 'GRC',
  ES: 'ESP',
  FI: 'FIN',
  FR: 'FRA',
  HR: 'HRV',
  HU: 'HUN',
  IE: 'IRL',
  IS: 'ISL',
  IT: 'ITA',
  LT: 'LTU',
  LU: 'LUX',
  LV: 'LVA',
  MT: 'MLT',
  ME: 'MNE',
  MK: 'MKD',
  NL: 'NLD',
  NO: 'NOR',
  PL: 'POL',
  PT: 'PRT',
  RO: 'ROU',
  RS: 'SRB',
  SE: 'SWE',
  SI: 'SVN',
  SK: 'SVK',
  TR: 'TUR',
  UK: 'GBR',
  CH: 'CHE',
  AL: 'ALB',
  BA: 'BIH',
  XK: 'XKX',
};

/**
 * Three kinds of geography, and they are not interchangeable.
 *
 * Eurostat puts unions, countries and NUTS sub-national regions in one
 * dimension. The land-rent dataset alone carries 263 of them, 237 of which are
 * regions inside a country. Treating "not a known country" as "a union" made
 * 228 of them unions, which would have put Bavaria and the euro area in the
 * same bucket.
 */
function geography(geo: string, label: string) {
  if (UNION_GEOS.has(geo))
    return {
      supranationalJurisdiction: label,
      jurisdictionName: label,
      geographyLevel: 'union' as const,
    };
  const iso = ISO3[geo];
  if (iso)
    return {
      countryCode: iso,
      jurisdictionName: label,
      geographyLevel: 'country' as const,
    };
  // A NUTS code is a country code followed by one or more digits. It names a
  // region inside a country, and the country it is inside is knowable.
  const parent = ISO3[geo.slice(0, 2)];
  if (parent && /^[A-Z]{2}[0-9A-Z]+$/.test(geo))
    return {
      countryCode: parent,
      jurisdictionName: label,
      subnationalCode: geo,
      geographyLevel: 'subnational' as const,
    };
  return { jurisdictionName: label, geographyLevel: 'unknown' as const };
}

let ALL: FarmEconomicObservation[] | null = null;

export function allEconomicObservations(): FarmEconomicObservation[] {
  if (ALL) return ALL;
  const out: FarmEconomicObservation[] = [];

  const ers = economicsSnapshot('ers-cost-of-production-forecasts');
  const ersContract = ECONOMICS_CONTRACTS.find(
    (c) => c.datasetId === 'ers-cost-of-production-forecasts',
  )!;
  for (const r of ers.rows as ErsRow[]) {
    out.push({
      id: `ers:${r.cropRef}:${r.period}:${r.metric}`,
      countryCode: 'USA',
      geographyLevel: 'country',
      jurisdictionName: 'United States',
      cropRef: r.cropRef,
      publishedSubject: r.commodityLabel,
      metric: r.metric,
      value: r.value,
      currency: r.currency,
      unitBasis: r.unitBasis,
      period: r.period,
      evidenceType: ersContract.evidenceType,
      sourceDatasetId: ersContract.datasetId,
      sourceReferenceIds: ersContract.sourceIds,
      assumptions: ersContract.assumptions,
      lastVerifiedAt: ers.retrievedAt as string,
    });
  }

  const eu = economicsSnapshot('eurostat-input-price-index');
  const verified = eu.retrievedAt as string;
  const contractOf = (id: string) =>
    ECONOMICS_CONTRACTS.find((c) => c.datasetId === id)!;

  const piC = contractOf('eurostat-input-price-index');
  for (const r of eu.inputPriceIndices as PiRow[]) {
    const g = geography(r.geo, r.geoLabel);
    out.push({
      id: `eurostat-pi:${r.geo}:${r.item}:${r.priceBasis}:${r.period}`,
      ...g,
      publishedSubject: r.itemLabel,
      metric: 'inputPriceIndex',
      value: r.value,
      unitBasis: r.indexBase,
      period: r.period,
      evidenceType: piC.evidenceType,
      priceBasis: r.priceBasis,
      indexBase: r.indexBase,
      sourceDatasetId: piC.datasetId,
      sourceReferenceIds: piC.sourceIds,
      lastVerifiedAt: verified,
    });
  }

  const apC = contractOf('eurostat-input-purchase-prices');
  for (const r of eu.purchasePrices as ApRow[]) {
    const g = geography(r.geo, r.geoLabel);
    out.push({
      id: `eurostat-ap:${r.geo}:${r.product}:${r.currency}:${r.period}`,
      ...g,
      publishedSubject: r.productLabel,
      metric: 'inputPurchasePrice',
      value: r.value,
      currency: r.currency,
      unitBasis: r.productLabel,
      period: r.period,
      evidenceType: apC.evidenceType,
      sourceDatasetId: apC.datasetId,
      sourceReferenceIds: apC.sourceIds,
      lastVerifiedAt: verified,
    });
  }

  const lrC = contractOf('eurostat-land-rents');
  for (const r of eu.landRents as LrRow[]) {
    const g = geography(r.geo, r.geoLabel);
    out.push({
      id: `eurostat-lr:${r.geo}:${r.landType}:${r.unit}:${r.period}`,
      ...g,
      publishedSubject: r.landTypeLabel,
      metric: 'landRent',
      value: r.value,
      currency: r.unit.startsWith('EUR') ? 'EUR' : 'NAC',
      unitBasis: r.unitLabel,
      period: r.period,
      evidenceType: lrC.evidenceType,
      sourceDatasetId: lrC.datasetId,
      sourceReferenceIds: lrC.sourceIds,
      lastVerifiedAt: verified,
    });
  }

  ALL = out;
  return out;
}

/** Cost breakdown for one crop and period, in the source's own item order. */
export function costsForCrop(
  cropRef: string,
  period?: string,
): FarmEconomicObservation[] {
  return allEconomicObservations()
    .filter((o) => o.cropRef === cropRef && (!period || o.period === period))
    .sort((a, b) => a.period.localeCompare(b.period));
}

export function cropsWithCosts(): string[] {
  return [
    ...new Set(
      allEconomicObservations()
        .map((o) => o.cropRef)
        .filter(Boolean) as string[],
    ),
  ].sort();
}

export function byEvidenceType(): Map<EvidenceType, number> {
  const m = new Map<EvidenceType, number>();
  for (const o of allEconomicObservations())
    m.set(o.evidenceType, (m.get(o.evidenceType) ?? 0) + 1);
  return m;
}

/** Jurisdictions with figures, at the level each one actually is. */
export function economicsJurisdictions(): {
  key: string;
  name: string;
  level: FarmEconomicObservation['geographyLevel'];
  count: number;
}[] {
  const m = new Map<
    string,
    {
      name: string;
      level: FarmEconomicObservation['geographyLevel'];
      count: number;
    }
  >();
  for (const o of allEconomicObservations()) {
    const key =
      o.subnationalCode ??
      o.countryCode ??
      o.supranationalJurisdiction ??
      o.jurisdictionName;
    const e = m.get(key) ?? {
      name: o.jurisdictionName,
      level: o.geographyLevel,
      count: 0,
    };
    e.count += 1;
    m.set(key, e);
  }
  return [...m]
    .map(([key, v]) => ({ key, ...v }))
    .sort((a, b) => b.count - a.count);
}
