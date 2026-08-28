import { describe, expect, it } from 'vitest';
import {
  BASIS_REPRESENTS_AREA,
  CATEGORY_IS_DROUGHT,
  CLIMATE_EVIDENCE_CLASSES,
  CLIMATE_METRICS,
  CLIMATE_SPATIAL_BASES,
  DEGREE_DAY_BASE,
  DEGREE_DAY_BOUND_TOLERANCE,
  DROUGHT_CATEGORIES,
  WATER_METRIC_KIND,
} from '@/types/climate-water';
import {
  ABSENT_CLIMATE_CLAIMS,
  CLIMATE_CONTRACTS,
  CLIMATE_CONTRACT_MAP,
  RESERVED_EVIDENCE_CLASSES,
} from '@/lib/climate/contracts';
import {
  allClimateObservations,
  climateSnapshot,
  countriesWithWaterData,
  currentDroughtAssessment,
  droughtHistory,
  normalsForState,
  statesWithNormals,
  CLIMATE_RISK_PATH,
  UNRESOLVED_AREA_NAMES,
} from '@/lib/climate/registry';
import { climateObservationLineage } from '@/lib/provenance/lineage';
import { SOURCE_MAP } from '@/lib/sources/registry';
import { allRoutes } from '@/lib/seo/routes';
import { buildSearchDocuments } from '@/lib/search/documents';
import { SOURCE_SNAPSHOTS } from '@/data/freshness';

const OBS = allClimateObservations();
const DOCS = buildSearchDocuments();
const AS_OF = '2026-08-27';

describe('climate — a normal is not a measurement and not a forecast', () => {
  it('publishes no forecast and no projection at all', () => {
    expect(
      OBS.filter(
        (o) =>
          o.evidenceClass === 'forecast' || o.evidenceClass === 'projection',
      ),
    ).toEqual([]);
    const reserved = RESERVED_EVIDENCE_CLASSES.map((r) => r.evidenceClass);
    expect(reserved).toContain('forecast');
    expect(reserved).toContain('projection');
  });

  it('dates every normal to the averaging period, never to a year', () => {
    const normals = OBS.filter((o) => o.evidenceClass === 'climate-normal');
    expect(normals.length).toBeGreaterThan(0);
    expect(normals.every((o) => o.period === '1991-2020')).toBe(true);
  });

  it('publishes only NCEI’s Standard tier, with the years it used', () => {
    for (const o of OBS.filter((o) => o.evidenceClass === 'climate-normal')) {
      expect(o.sourceFlag, o.id).toBe('S');
      expect(o.yearsUsed!, o.id).toBeGreaterThanOrEqual(24);
      expect(o.yearsUsed!, o.id).toBeLessThanOrEqual(30);
    }
  });

  it('says in the lineage statement what kind of value each one is', () => {
    const l = climateObservationLineage(
      OBS.find((o) => o.evidenceClass === 'climate-normal')!.id,
    );
    expect(l?.statement).toContain('averaged');
    expect(l?.interpretation?.vocabulary).toBe('ClimateEvidenceClass');
    const a = climateObservationLineage(
      OBS.find((o) => o.evidenceClass === 'assessment')!.id,
    );
    expect(a?.statement).toContain('assessed');
  });
});

describe('climate — a degree-day total keeps its base', () => {
  it('never reports fewer degree days than the station’s own mean allows', () => {
    // GDD = Σ max(0, Tᵢ − base) ≥ Σ (Tᵢ − base) = 365 × (mean − base).
    // True in every climate; it is what catches an inverted column.
    const byStation = new Map<string, { t?: number; g?: number }>();
    for (const o of OBS) {
      if (!o.stationId) continue;
      const e = byStation.get(o.stationId) ?? {};
      if (o.metric === 'annualMeanTemperature') e.t = o.value;
      if (o.metric === 'growingDegreeDaysBase50') e.g = o.value;
      byStation.set(o.stationId, e);
    }
    const broken = [...byStation].filter(([, v]) => {
      if (v.t === undefined || v.g === undefined) return false;
      const bound =
        365 * Math.max(0, v.t - DEGREE_DAY_BASE.growingDegreeDaysBase50!);
      return v.g < bound * (1 - DEGREE_DAY_BOUND_TOLERANCE);
    });
    expect(broken).toEqual([]);
  });

  it('records the element it discarded, with the evidence', () => {
    const d = (climateSnapshot('ncei-us-climate-normals').discardedElements ??
      []) as { element: string; why: string; valuesDiscarded: number }[];
    expect(d.length).toBeGreaterThan(0);
    expect(d[0]!.element).toBe('ANN-GRDD-TB5086');
    expect(d[0]!.why.length).toBeGreaterThan(200);
    expect(d[0]!.valuesDiscarded).toBeGreaterThan(0);
    expect(CLIMATE_METRICS as readonly string[]).not.toContain(
      'growingDegreeDaysTruncated5086',
    );
  });
});

describe('climate — the drought monitor is an assessment, read correctly', () => {
  it('keeps categorical shares summing to one whole state', () => {
    // Categorical shares partition the state. Cumulative shares nest, and
    // would sum far above 100 — which is how the two are told apart.
    const byWeek = new Map<string, number>();
    for (const o of OBS) {
      if (o.metric !== 'droughtAreaShare') continue;
      const k = `${o.stateCode}|${o.period}`;
      byWeek.set(k, (byWeek.get(k) ?? 0) + o.value);
    }
    expect(byWeek.size).toBeGreaterThan(0);
    const off = [...byWeek].filter(([, t]) => Math.abs(t - 100) > 0.5);
    expect(off).toEqual([]);
  });

  it('does not count D0 as drought', () => {
    expect(CATEGORY_IS_DROUGHT.D0).toBe(false);
    expect(CATEGORY_IS_DROUGHT.none).toBe(false);
    for (const c of ['D1', 'D2', 'D3', 'D4'] as const)
      expect(CATEGORY_IS_DROUGHT[c]).toBe(true);
  });

  it('never presents an expired weekly map as current', () => {
    expect(currentDroughtAssessment('NE', '2019-01-01')).toBeUndefined();
    expect(currentDroughtAssessment('NE', '2099-01-01')).toBeUndefined();
    const now = currentDroughtAssessment('NE', AS_OF);
    expect(now).toBeDefined();
    expect(now!.validFrom <= AS_OF && AS_OF <= now!.validTo).toBe(true);
  });

  it('has exactly one map in force per state on the reference date', () => {
    for (const s of statesWithNormals()) {
      const inForce = new Set(
        OBS.filter(
          (o) =>
            o.metric === 'droughtAreaShare' &&
            o.stateCode === s &&
            o.validFrom! <= AS_OF &&
            AS_OF <= o.validTo!,
        ).map((o) => o.period),
      );
      expect(inForce.size, s).toBe(1);
    }
  });

  it('keeps every map inside the week it says it is valid for', () => {
    const bad = OBS.filter(
      (o) =>
        o.metric === 'droughtAreaShare' &&
        (o.period < o.validFrom! || o.period > o.validTo!),
    );
    expect(bad).toEqual([]);
  });

  it('keeps history as history', () => {
    const h = droughtHistory('NE');
    expect(h.length).toBeGreaterThan(100);
    expect(h[0]!.mapDate > h[h.length - 1]!.mapDate).toBe(true);
  });
});

describe('climate — irrigation capacity is not irrigation use', () => {
  it('labels each water metric by what the source calls it', () => {
    for (const [metric, kind] of Object.entries(WATER_METRIC_KIND)) {
      const sample = OBS.find((o) => o.metric === metric);
      expect(sample, metric).toBeDefined();
      if (kind === 'use')
        expect(sample!.publishedItem.toLowerCase()).toContain(
          'actually irrigated',
        );
      else
        expect(sample!.publishedItem.toLowerCase()).toContain(
          'equipped for irrigation',
        );
    }
  });

  it('takes the evidence class from the source’s own flag', () => {
    const c = CLIMATE_CONTRACT_MAP.get('faostat-land-use-irrigation')!;
    for (const o of OBS.filter(
      (o) => o.sourceDatasetId === 'faostat-land-use-irrigation',
    )) {
      const expected = c.evidenceClassByFlag![o.sourceFlag!];
      expect(expected, `${o.id} flag ${o.sourceFlag}`).toBeDefined();
      expect(o.evidenceClass).toBe(expected);
    }
    // Official statistics and agency estimates must both actually occur, or
    // the distinction is decorative.
    expect(OBS.some((o) => o.evidenceClass === 'reported-statistic')).toBe(
      true,
    );
    expect(OBS.some((o) => o.evidenceClass === 'agency-estimate')).toBe(true);
  });
});

describe('climate — an aggregate is not a country', () => {
  it('excludes the two aggregates that sit below the code threshold', () => {
    const snap = climateSnapshot('faostat-land-use-irrigation');
    const codes = new Set(
      (snap.rows as { areaCode: number }[]).map((r) => r.areaCode),
    );
    expect(codes.has(351)).toBe(false); // "China", the sum of four members
    expect(codes.has(420)).toBe(false); // M49 202, Sub-Saharan Africa
    expect([...codes].filter((c) => c >= 5000)).toEqual([]);
    // and the members it grouped are all still here
    expect(codes.has(41)).toBe(true);
    expect(codes.has(96)).toBe(true);
    expect(codes.has(214)).toBe(true);
  });

  it('never folds a former state into a successor', () => {
    for (const former of ['Serbia and Montenegro', 'Sudan (former)']) {
      const rows = OBS.filter((o) => o.jurisdictionName === former);
      expect(rows.length, former).toBeGreaterThan(0);
      expect(
        rows.every((o) => !o.countryCode),
        former,
      ).toBe(true);
    }
    expect(UNRESOLVED_AREA_NAMES.every((u) => u.why.length > 40)).toBe(true);
  });
});

describe('climate — a station describes itself', () => {
  it('never treats a station value as standing for the area around it', () => {
    expect(BASIS_REPRESENTS_AREA.station).toBe(false);
    for (const o of OBS.filter((o) => o.spatialBasis === 'station')) {
      expect(o.stationId, o.id).toBeTruthy();
      expect(typeof o.latitude, o.id).toBe('number');
    }
  });

  it('groups a state’s normals by station rather than averaging them', () => {
    const s = normalsForState('IA');
    expect(s.length).toBeGreaterThan(0);
    for (const st of s)
      expect(st.values.every((v) => v.stationId === st.stationId)).toBe(true);
  });
});

describe('climate — nothing infers impact from exposure', () => {
  it('keeps every impact claim out of the vocabulary', () => {
    for (const a of ABSENT_CLIMATE_CLAIMS) {
      expect(CLIMATE_METRICS as readonly string[]).not.toContain(a.name);
      expect(a.why.length).toBeGreaterThan(60);
    }
  });

  it('holds no metric expressing loss, damage or yield effect', () => {
    const bad = CLIMATE_METRICS.filter((m) =>
      /loss|damage|yield|risk|impact|stress/i.test(m),
    );
    expect(bad).toEqual([]);
  });
});

describe('climate — vocabularies are live or reserved with a reason', () => {
  it('reaches every metric, basis and drought category with real data', () => {
    const metrics = new Set(OBS.map((o) => o.metric));
    expect([...CLIMATE_METRICS].filter((m) => !metrics.has(m))).toEqual([]);
    const bases = new Set(OBS.map((o) => o.spatialBasis));
    expect([...CLIMATE_SPATIAL_BASES].filter((b) => !bases.has(b))).toEqual([]);
    const cats = new Set(OBS.map((o) => o.droughtCategory).filter(Boolean));
    expect([...DROUGHT_CATEGORIES].filter((c) => !cats.has(c))).toEqual([]);
  });

  it('either produces each evidence class or gives a reason for holding none', () => {
    const used = new Set(OBS.map((o) => o.evidenceClass));
    const reserved = new Set(
      RESERVED_EVIDENCE_CLASSES.map((r) => r.evidenceClass),
    );
    for (const c of CLIMATE_EVIDENCE_CLASSES)
      expect(used.has(c) || reserved.has(c), c).toBe(true);
    for (const r of RESERVED_EVIDENCE_CLASSES) {
      expect(used.has(r.evidenceClass)).toBe(false);
      expect(r.why.length).toBeGreaterThan(60);
    }
  });
});

describe('climate — every value is traceable', () => {
  it('gives every dataset a snapshot registered with the freshness layer', () => {
    const paths = new Set(SOURCE_SNAPSHOTS.map((s) => s.payloadPath));
    for (const c of CLIMATE_CONTRACTS) expect(paths).toContain(c.snapshotPath);
  });

  it('names a real source and a limitation on every value', () => {
    const bad = OBS.filter(
      (o) =>
        o.sourceReferenceIds.some((s) => !SOURCE_MAP.has(s)) ||
        !o.limitations?.length,
    );
    expect(bad).toEqual([]);
  });
});

describe('climate — the public surface', () => {
  it('publishes one hub and no per-station or per-week URLs', () => {
    const paths = allRoutes().map((r) => r.path);
    expect(paths).toContain(CLIMATE_RISK_PATH);
    expect(
      paths.filter((p) => p.startsWith(`${CLIMATE_RISK_PATH}/`)),
    ).toHaveLength(0);
    // and the 20 climate reference pages are untouched
    expect(paths).toContain('/climate');
    expect(paths).toContain('/climate/drought');
  });

  it('gives the hub one search document that takes no concept page’s name', () => {
    const docs = DOCS.filter((d) => d.type === 'climate-water');
    expect(docs).toHaveLength(1);
    const doc = docs[0]!;
    expect(doc.route).toBe(CLIMATE_RISK_PATH);
    for (const n of doc.names ?? [])
      expect(['drought', 'frost', 'evapotranspiration']).not.toContain(
        n.toLowerCase(),
      );
  });

  it('counts water data for the countries it resolved and no others', () => {
    expect(countriesWithWaterData().length).toBeGreaterThan(150);
    expect(statesWithNormals()).toHaveLength(50);
  });
});
