/**
 * Query layer over soil observations.
 *
 * Observations are DERIVED from the committed snapshot on read, one per
 * (soil body, property), rather than stored a second time. The snapshot is
 * what the survey published; an observation is one property of it, carrying
 * the scale and evidence class that make the number attributable.
 *
 * There is no page per observation and none per soil body: 94,000 pages each
 * holding one number would be thinner than the survey row they came from.
 */
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import {
  CATEGORICAL_PROPERTIES,
  SOIL_PROPERTY_UNIT,
  type SoilObservation,
  type SoilProperty,
} from '@/types/soil';
import { SOIL_DATASET_CONTRACTS, type SoilDatasetContract } from './contracts';

export { SOIL_SURVEYS_PATH } from './paths';

interface SnapshotRow {
  stateCode: string;
  regionRef: string;
  series: string;
  surveyAreas: number;
  mapUnits: number;
  surfaceHorizonBottomCmMin: number | null;
  surfaceHorizonBottomCmMax: number | null;
  taxonomicOrder: string | null;
  taxonomicOrderVaries: boolean;
  drainageClass: string | null;
  drainageClassVaries: boolean;
  ph: { min: number | null; max: number | null; mean: number | null };
  organicMatterPct: {
    min: number | null;
    max: number | null;
    mean: number | null;
  };
  clayPct: { min: number | null; max: number | null; mean: number | null };
  sandPct: { min: number | null; max: number | null; mean: number | null };
  siltPct: { min: number | null; max: number | null; mean: number | null };
}

export interface SoilSnapshot {
  snapshotId: string;
  datasetVersion: string;
  retrievedAt: string;
  checksum: string;
  seriesCount: number;
  stateCount: number;
  limitations: string[];
  evidenceRule: string;
  spatialRule: string;
  aggregationRule: string;
  variationRule: string;
  scopeRule: string;
  depthRule: string;
  rows: SnapshotRow[];
}

const CACHE = new Map<string, SoilSnapshot>();

export function soilSnapshot(contract: SoilDatasetContract): SoilSnapshot {
  const cached = CACHE.get(contract.datasetId);
  if (cached) return cached;
  const raw = JSON.parse(
    readFileSync(join(process.cwd(), contract.snapshotPath), 'utf8'),
  ) as SoilSnapshot;
  CACHE.set(contract.datasetId, raw);
  return raw;
}

const RANGE_FIELD: Partial<Record<SoilProperty, keyof SnapshotRow>> = {
  pH: 'ph',
  organicMatter: 'organicMatterPct',
  clayContent: 'clayPct',
  sandContent: 'sandPct',
  siltContent: 'siltPct',
};

/**
 * An identifier that cannot merge two soil bodies the source keeps apart.
 *
 * SSURGO publishes both `Xerorthents` and `Xerorthents,` in California — the
 * second in one survey area, its qualifier evidently lost somewhere upstream.
 * They are two rows in the source and a slug turned them into one, which is
 * the same failure the variety layer met with two peas under one reference.
 * The raw name goes into the id, because ids here are internal and no page is
 * ever addressed by one.
 */
const bodyKey = (s: string) => s.trim();

/** One row becomes one observation per property the source actually filled. */
function observationsFromRow(
  row: SnapshotRow,
  contract: SoilDatasetContract,
  verifiedAt: string,
): SoilObservation[] {
  const out: SoilObservation[] = [];
  const base = {
    soilBody: row.series,
    jurisdictionId: row.stateCode,
    countryCode: contract.countryCode,
    regionRef: row.regionRef,
    evidenceClass: contract.evidenceClass,
    spatialBasis: contract.spatialBasis,
    unitsCovered: { surveyAreas: row.surveyAreas, mapUnits: row.mapUnits },
    classification:
      row.taxonomicOrder && contract.classificationSystem
        ? {
            system: contract.classificationSystem,
            value: row.taxonomicOrder,
            varies: row.taxonomicOrderVaries,
          }
        : undefined,
    sourceDatasetId: contract.datasetId,
    sourceReferences: [...contract.sourceIds],
    lastVerifiedAt: verifiedAt,
  };

  for (const property of contract.properties) {
    const id = `${contract.datasetId}:${row.stateCode}:${bodyKey(row.series)}:${property}`;

    if (property === 'drainageClass') {
      if (!row.drainageClass) continue;
      out.push({
        ...base,
        id,
        property,
        categoricalValue: row.drainageClass,
        categoryVaries: row.drainageClassVaries,
      });
      continue;
    }

    if (property === 'surfaceHorizonDepth') {
      const min = row.surfaceHorizonBottomCmMin;
      const max = row.surfaceHorizonBottomCmMax;
      if (min === null || max === null) continue;
      out.push({
        ...base,
        id,
        property,
        range: { min, max, mean: (min + max) / 2 },
        unit: SOIL_PROPERTY_UNIT[property],
        depthRange: { minCm: 0, maxCm: max },
      });
      continue;
    }

    const field = RANGE_FIELD[property];
    if (!field) continue;
    const v = row[field] as SnapshotRow['ph'];
    if (v.min === null || v.max === null || v.mean === null) continue;
    out.push({
      ...base,
      id,
      property,
      range: { min: v.min, max: v.max, mean: v.mean },
      unit: SOIL_PROPERTY_UNIT[property],
      // Every value here is for the surface horizon; the depth its bottom
      // reaches varies by soil body and the survey records that range.
      depthRange:
        row.surfaceHorizonBottomCmMax !== null
          ? { minCm: 0, maxCm: row.surfaceHorizonBottomCmMax }
          : undefined,
    });
  }
  return out;
}

let ALL: SoilObservation[] | null = null;

export function allSoilObservations(): SoilObservation[] {
  if (ALL) return ALL;
  const out: SoilObservation[] = [];
  for (const contract of SOIL_DATASET_CONTRACTS) {
    const snap = soilSnapshot(contract);
    for (const row of snap.rows)
      out.push(...observationsFromRow(row, contract, snap.retrievedAt));
  }
  ALL = out;
  return out;
}

/** Soil bodies documented in one jurisdiction, with their properties. */
export function soilBodiesIn(jurisdictionId: string): {
  soilBody: string;
  observations: SoilObservation[];
}[] {
  const m = new Map<string, SoilObservation[]>();
  for (const o of allSoilObservations()) {
    if (o.jurisdictionId !== jurisdictionId) continue;
    m.set(o.soilBody, [...(m.get(o.soilBody) ?? []), o]);
  }
  return [...m]
    .map(([soilBody, observations]) => ({ soilBody, observations }))
    .sort((a, b) => a.soilBody.localeCompare(b.soilBody));
}

/** Jurisdictions with observations, with counts. Never a country roll-up. */
export function jurisdictionsCovered(): {
  jurisdictionId: string;
  regionRef?: string;
  soilBodies: number;
  observations: number;
}[] {
  const m = new Map<
    string,
    { regionRef?: string; bodies: Set<string>; n: number }
  >();
  for (const o of allSoilObservations()) {
    const e = m.get(o.jurisdictionId) ?? {
      regionRef: o.regionRef,
      bodies: new Set<string>(),
      n: 0,
    };
    e.bodies.add(o.soilBody);
    e.n += 1;
    m.set(o.jurisdictionId, e);
  }
  return [...m]
    .map(([jurisdictionId, e]) => ({
      jurisdictionId,
      regionRef: e.regionRef,
      soilBodies: e.bodies.size,
      observations: e.n,
    }))
    .sort((a, b) => a.jurisdictionId.localeCompare(b.jurisdictionId));
}

/** Distribution of a numeric property across a jurisdiction's soil bodies. */
export function propertySummary(
  jurisdictionId: string,
  property: SoilProperty,
): { bodies: number; min: number; max: number; mean: number } | undefined {
  const rows = allSoilObservations().filter(
    (o) =>
      o.jurisdictionId === jurisdictionId && o.property === property && o.range,
  );
  if (!rows.length || CATEGORICAL_PROPERTIES.includes(property))
    return undefined;
  const means = rows.map((r) => r.range!.mean);
  return {
    bodies: rows.length,
    min: Math.min(...rows.map((r) => r.range!.min)),
    max: Math.max(...rows.map((r) => r.range!.max)),
    mean: means.reduce((a, b) => a + b, 0) / means.length,
  };
}

/** Taxonomic orders present, by system. Never merged across systems. */
export function classificationsPresent(): {
  system: string;
  value: string;
  bodies: number;
}[] {
  const m = new Map<string, number>();
  const seen = new Set<string>();
  for (const o of allSoilObservations()) {
    if (!o.classification) continue;
    const bodyKey = `${o.jurisdictionId}|${o.soilBody}`;
    const key = `${o.classification.system}|${o.classification.value}`;
    if (seen.has(`${key}|${bodyKey}`)) continue;
    seen.add(`${key}|${bodyKey}`);
    m.set(key, (m.get(key) ?? 0) + 1);
  }
  return [...m]
    .map(([k, bodies]) => {
      const [system, value] = k.split('|') as [string, string];
      return { system, value, bodies };
    })
    .sort((a, b) => b.bodies - a.bodies);
}
