/**
 * Derivation and queries for the climate, drought and water layer.
 *
 * Nothing here is stored twice: the observations are projected from the
 * snapshots on read, so a snapshot and the pages built from it cannot drift
 * apart. The projection is where the source's own distinctions are preserved —
 * a FAOSTAT flag decides whether a value is a country's statistic or FAO's
 * estimate, and a Drought Monitor week decides when a map stops being current.
 */
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import type {
  ClimateObservation,
  DroughtCategory,
} from '@/types/climate-water';
import { DROUGHT_CATEGORIES } from '@/types/climate-water';
import { CLIMATE_CONTRACT_MAP } from './contracts';
import { COUNTRY_META } from '@/lib/geo/snapshots';

export { CLIMATE_RISK_PATH } from './paths';

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

export function climateSnapshot(datasetId: string) {
  const contract = CLIMATE_CONTRACT_MAP.get(datasetId);
  if (!contract) throw new Error(`no contract for "${datasetId}"`);
  return snapshot(contract.snapshotPath);
}

const US_STATE_NAME: Record<string, string> = {
  AL: 'Alabama',
  AK: 'Alaska',
  AZ: 'Arizona',
  AR: 'Arkansas',
  CA: 'California',
  CO: 'Colorado',
  CT: 'Connecticut',
  DE: 'Delaware',
  FL: 'Florida',
  GA: 'Georgia',
  HI: 'Hawaii',
  ID: 'Idaho',
  IL: 'Illinois',
  IN: 'Indiana',
  IA: 'Iowa',
  KS: 'Kansas',
  KY: 'Kentucky',
  LA: 'Louisiana',
  ME: 'Maine',
  MD: 'Maryland',
  MA: 'Massachusetts',
  MI: 'Michigan',
  MN: 'Minnesota',
  MS: 'Mississippi',
  MO: 'Missouri',
  MT: 'Montana',
  NE: 'Nebraska',
  NV: 'Nevada',
  NH: 'New Hampshire',
  NJ: 'New Jersey',
  NM: 'New Mexico',
  NY: 'New York',
  NC: 'North Carolina',
  ND: 'North Dakota',
  OH: 'Ohio',
  OK: 'Oklahoma',
  OR: 'Oregon',
  PA: 'Pennsylvania',
  RI: 'Rhode Island',
  SC: 'South Carolina',
  SD: 'South Dakota',
  TN: 'Tennessee',
  TX: 'Texas',
  UT: 'Utah',
  VT: 'Vermont',
  VA: 'Virginia',
  WA: 'Washington',
  WV: 'West Virginia',
  WI: 'Wisconsin',
  WY: 'Wyoming',
};

/**
 * FAOSTAT names countries; the corpus keys them by ISO 3166-1 alpha-3.
 *
 * The match is on the exact published name only. A name that does not resolve
 * gets no country code at all, and the value is then counted toward no
 * country rather than toward a guessed one — a wrong code would attribute one
 * country's irrigation to another and look entirely ordinary doing it.
 */
const CODE_BY_NAME = new Map(
  COUNTRY_META.map((c) => [c.name.toLowerCase(), c.iso3]),
);
/** Names FAOSTAT publishes that the corpus keys differently. Exact, never fuzzy. */
const FAOSTAT_NAME_ALIASES: Record<string, string> = {
  'united states of america': 'USA',
  'russian federation': 'RUS',
  'republic of korea': 'KOR',
  "democratic people's republic of korea": 'PRK',
  'iran (islamic republic of)': 'IRN',
  'viet nam': 'VNM',
  'united republic of tanzania': 'TZA',
  'bolivia (plurinational state of)': 'BOL',
  'venezuela (bolivarian republic of)': 'VEN',
  'republic of moldova': 'MDA',
  'syrian arab republic': 'SYR',
  "lao people's democratic republic": 'LAO',
  'brunei darussalam': 'BRN',
  czechia: 'CZE',
  türkiye: 'TUR',
  'netherlands (kingdom of the)': 'NLD',
  'china, mainland': 'CHN',
  egypt: 'EGY',
  slovakia: 'SVK',
  'north macedonia': 'MKD',
  'cabo verde': 'CPV',
  "côte d'ivoire": 'CIV',
  congo: 'COG',
  'democratic republic of the congo': 'COD',
  'united kingdom of great britain and northern ireland': 'GBR',
  bahamas: 'BHS',
  'china, hong kong sar': 'HKG',
  gambia: 'GMB',
  kyrgyzstan: 'KGZ',
  'puerto rico': 'PRI',
  somalia: 'SOM',
  yemen: 'YEM',
};

/**
 * Names deliberately left unresolved, and why.
 *
 * "Serbia and Montenegro" and "Sudan (former)" are states that no longer
 * exist; attributing either one's land to a single successor would move
 * irrigation from one country to another and look entirely ordinary doing it.
 * The territories are places the corpus does not key at all. Each keeps its
 * published name, counts toward no country, and stays visible as a gap.
 */
export const UNRESOLVED_AREA_NAMES: readonly { name: string; why: string }[] = [
  {
    name: 'Serbia and Montenegro',
    why: 'A state that dissolved in 2006. Its figures are for the two together, and assigning them to either successor would be an invention.',
  },
  {
    name: 'Sudan (former)',
    why: 'Sudan before the 2011 secession, so its figures include South Sudan. Both successors are reported separately, and folding the former state into either would double-count one of them.',
  },
];
function countryCodeForName(name: string): string | undefined {
  const k = name.toLowerCase();
  return FAOSTAT_NAME_ALIASES[k] ?? CODE_BY_NAME.get(k);
}

type NormalRow = {
  stationId: string;
  stateCode: string;
  metric: string;
  element: string;
  publishedItem: string;
  value: number;
  unit: string;
  completenessFlag: string;
  yearsUsed: number;
};
type StationRow = {
  stationId: string;
  stationName: string;
  stateCode: string;
  latitude: number;
  longitude: number;
  elevationMetres: number | null;
};
type DroughtRow = {
  stateCode: string;
  mapDate: string;
  validStart: string;
  validEnd: string;
  statisticFormat: string;
  none: number;
  d0: number;
  d1: number;
  d2: number;
  d3: number;
  d4: number;
};
type WaterRow = {
  areaCode: number;
  areaName: string;
  m49: string;
  metric: string;
  publishedItem: string;
  period: string;
  value: number;
  unit: string;
  flag: string;
  flagMeaning: string;
};

let ALL: ClimateObservation[] | null = null;

export function allClimateObservations(): ClimateObservation[] {
  if (ALL) return ALL;
  const out: ClimateObservation[] = [];

  /* -- climate normals ---------------------------------------------------- */
  const nc = CLIMATE_CONTRACT_MAP.get('ncei-us-climate-normals')!;
  const nsnap = climateSnapshot('ncei-us-climate-normals');
  const stations = new Map(
    (nsnap.stations as StationRow[]).map((s) => [s.stationId, s]),
  );
  for (const r of nsnap.rows as NormalRow[]) {
    const st = stations.get(r.stationId);
    out.push({
      id: `normal:${r.stationId}:${r.metric}`,
      metric: r.metric as ClimateObservation['metric'],
      publishedItem: r.publishedItem,
      value: r.value,
      unit: r.unit,
      // The averaging period, not a year. Writing "2020" here would make an
      // average of thirty years look like a measurement of one of them.
      period: '1991-2020',
      evidenceClass: nc.evidenceClass,
      spatialBasis: 'station',
      stationId: r.stationId,
      stationName: st?.stationName,
      latitude: st?.latitude,
      longitude: st?.longitude,
      stateCode: r.stateCode,
      countryCode: 'USA',
      jurisdictionName: st?.stationName ?? r.stationId,
      yearsUsed: r.yearsUsed,
      sourceFlag: r.completenessFlag,
      sourceFlagMeaning:
        'Standard — at least 24 of the 30 years were available at this station',
      sourceDatasetId: nc.datasetId,
      sourceReferenceIds: nc.sourceIds,
      limitations: nc.limitations,
      lastVerifiedAt: nsnap.retrievedAt as string,
    });
  }

  /* -- drought assessment -------------------------------------------------- */
  const dc = CLIMATE_CONTRACT_MAP.get('usdm-state-drought-area')!;
  const dsnap = climateSnapshot('usdm-state-drought-area');
  for (const r of dsnap.rows as DroughtRow[]) {
    for (const cat of DROUGHT_CATEGORIES) {
      const key = cat === 'none' ? 'none' : cat.toLowerCase();
      const value = (r as unknown as Record<string, number>)[key];
      if (typeof value !== 'number') continue;
      out.push({
        id: `drought:${r.stateCode}:${r.mapDate}:${cat}`,
        metric: 'droughtAreaShare',
        publishedItem: `Share of state area in ${cat}`,
        value,
        unit: 'Percent of state area',
        period: r.mapDate,
        evidenceClass: dc.evidenceClass,
        spatialBasis: 'state',
        stateCode: r.stateCode,
        countryCode: 'USA',
        jurisdictionName: US_STATE_NAME[r.stateCode] ?? r.stateCode,
        droughtCategory: cat,
        statisticFormat: 'categorical',
        validFrom: r.validStart,
        validTo: r.validEnd,
        sourceDatasetId: dc.datasetId,
        sourceReferenceIds: dc.sourceIds,
        limitations: dc.limitations,
        lastVerifiedAt: dsnap.retrievedAt as string,
      });
    }
  }

  /* -- agricultural water --------------------------------------------------- */
  const wc = CLIMATE_CONTRACT_MAP.get('faostat-land-use-irrigation')!;
  const wsnap = climateSnapshot('faostat-land-use-irrigation');
  for (const r of wsnap.rows as WaterRow[]) {
    // The source says on each value whether the country reported it or FAO
    // produced it. That decides the evidence class; the contract's default is
    // only reached if a flag arrives that the contract has not seen.
    const cls = wc.evidenceClassByFlag?.[r.flag] ?? wc.evidenceClass;
    out.push({
      id: `water:${r.areaCode}:${r.metric}:${r.period}`,
      metric: r.metric as ClimateObservation['metric'],
      publishedItem: r.publishedItem,
      value: r.value,
      unit: r.unit,
      period: r.period,
      evidenceClass: cls,
      spatialBasis: 'country',
      countryCode: countryCodeForName(r.areaName),
      jurisdictionName: r.areaName,
      sourceFlag: r.flag,
      sourceFlagMeaning: r.flagMeaning,
      sourceDatasetId: wc.datasetId,
      sourceReferenceIds: wc.sourceIds,
      limitations: wc.limitations,
      lastVerifiedAt: wsnap.retrievedAt as string,
    });
  }

  ALL = out;
  return out;
}

/* -- queries --------------------------------------------------------------- */

/** Station normals for one US state, grouped by station. */
export function normalsForState(stateCode: string) {
  const rows = allClimateObservations().filter(
    (o) => o.evidenceClass === 'climate-normal' && o.stateCode === stateCode,
  );
  const byStation = new Map<string, ClimateObservation[]>();
  for (const r of rows) {
    const k = r.stationId!;
    byStation.set(k, [...(byStation.get(k) ?? []), r]);
  }
  return [...byStation]
    .map(([stationId, values]) => ({
      stationId,
      stationName: values[0]!.stationName ?? stationId,
      values,
    }))
    .sort((a, b) => a.stationName.localeCompare(b.stationName));
}

/**
 * The drought assessment in force on a given date, or nothing.
 *
 * A weekly map is current only inside its own validity window. Returning the
 * most recent map regardless of date would show an expired assessment as the
 * present state of a drought — which is exactly the thing a reader would act on.
 */
export function currentDroughtAssessment(
  stateCode: string,
  onDate: string,
):
  | {
      mapDate: string;
      validFrom: string;
      validTo: string;
      shares: Record<DroughtCategory, number>;
    }
  | undefined {
  const rows = allClimateObservations().filter(
    (o) =>
      o.metric === 'droughtAreaShare' &&
      o.stateCode === stateCode &&
      o.validFrom! <= onDate &&
      onDate <= o.validTo!,
  );
  if (rows.length === 0) return undefined;
  const shares = {} as Record<DroughtCategory, number>;
  for (const r of rows) shares[r.droughtCategory!] = r.value;
  return {
    mapDate: rows[0]!.period,
    validFrom: rows[0]!.validFrom!,
    validTo: rows[0]!.validTo!,
    shares,
  };
}

/** Every weekly map for a state, most recent first. */
export function droughtHistory(stateCode: string) {
  const byDate = new Map<string, ClimateObservation[]>();
  for (const o of allClimateObservations()) {
    if (o.metric !== 'droughtAreaShare' || o.stateCode !== stateCode) continue;
    byDate.set(o.period, [...(byDate.get(o.period) ?? []), o]);
  }
  return [...byDate]
    .map(([mapDate, values]) => ({
      mapDate,
      validFrom: values[0]!.validFrom!,
      validTo: values[0]!.validTo!,
      values,
    }))
    .sort((a, b) => b.mapDate.localeCompare(a.mapDate));
}

/** Irrigation figures for one country, capacity and use kept apart. */
export function waterForCountry(areaName: string) {
  return allClimateObservations()
    .filter(
      (o) => o.spatialBasis === 'country' && o.jurisdictionName === areaName,
    )
    .sort((a, b) =>
      a.metric === b.metric
        ? a.period.localeCompare(b.period)
        : a.metric.localeCompare(b.metric),
    );
}

export function countriesWithWaterData(): string[] {
  return [
    ...new Set(
      allClimateObservations()
        .filter((o) => o.spatialBasis === 'country')
        .map((o) => o.jurisdictionName),
    ),
  ].sort();
}

export function statesWithNormals(): string[] {
  return [
    ...new Set(
      allClimateObservations()
        .filter((o) => o.evidenceClass === 'climate-normal')
        .map((o) => o.stateCode!),
    ),
  ].sort();
}

export function byEvidenceClass(): Map<string, number> {
  const m = new Map<string, number>();
  for (const o of allClimateObservations())
    m.set(o.evidenceClass, (m.get(o.evidenceClass) ?? 0) + 1);
  return m;
}
