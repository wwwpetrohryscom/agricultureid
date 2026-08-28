import { describe, expect, it } from 'vitest';
import {
  EVIDENCE_TYPES,
  FARM_ECONOMIC_METRICS,
  GEOGRAPHY_LEVELS,
  INDEX_METRICS,
  SOURCE_TOTAL_METRICS,
} from '@/types/farm-economics';
import {
  ABSENT_METRICS,
  ECONOMICS_CONTRACTS,
  ECONOMICS_CONTRACT_MAP,
  RESERVED_EVIDENCE_TYPES,
} from '@/lib/economics/contracts';
import {
  allEconomicObservations,
  costsForCrop,
  cropsWithCosts,
  economicsJurisdictions,
  ECONOMICS_PATH,
} from '@/lib/economics/registry';
import { farmEconomicLineage } from '@/lib/provenance/lineage';
import { SOURCE_MAP } from '@/lib/sources/registry';
import { allRoutes } from '@/lib/seo/routes';
import { buildSearchDocuments } from '@/lib/search/documents';
import { PUBLISHED_CONTENT } from '@/lib/content/registry';
import { SOURCE_SNAPSHOTS } from '@/data/freshness';

const OBS = allEconomicObservations();
const DOCS = buildSearchDocuments();

describe('economics — a forecast never becomes a record of what was spent', () => {
  it('takes every figure’s evidence type from its dataset, never its record', () => {
    // This is the failure that would matter most. A cost forecast relabelled
    // an observation reads as an accounting of what farms actually paid.
    const wrong = OBS.filter(
      (o) =>
        o.evidenceType !==
        ECONOMICS_CONTRACT_MAP.get(o.sourceDatasetId)?.evidenceType,
    );
    expect(wrong).toEqual([]);
  });

  it('keeps every ERS figure a forecast, because every ERS year is marked F', () => {
    const ers = OBS.filter(
      (o) => o.sourceDatasetId === 'ers-cost-of-production-forecasts',
    );
    expect(ers.length).toBeGreaterThan(0);
    expect(ers.every((o) => o.evidenceType === 'forecast')).toBe(true);
    expect(ers.every((o) => (o.assumptions?.length ?? 0) > 0)).toBe(true);
  });

  it('says in the lineage statement what kind of figure each one is', () => {
    const l = farmEconomicLineage(
      OBS.find((o) => o.evidenceType === 'forecast')!.id,
    );
    expect(l?.statement).toContain('forecast');
    expect(l?.interpretation?.vocabulary).toBe('EvidenceType');
  });
});

describe('economics — an index is not money', () => {
  it('gives no index a currency and no amount a base year', () => {
    for (const o of OBS) {
      const isIndex = INDEX_METRICS.includes(o.metric);
      expect(Boolean(o.currency), `${o.id} currency`).toBe(!isIndex);
      expect(Boolean(o.indexBase), `${o.id} base`).toBe(isIndex);
    }
  });

  it('gives every index a base year, so two bases cannot be compared silently', () => {
    const idx = OBS.filter((o) => INDEX_METRICS.includes(o.metric));
    expect(idx.length).toBeGreaterThan(0);
    expect(idx.every((o) => /\d{4}/.test(o.indexBase ?? ''))).toBe(true);
    expect(idx.every((o) => o.priceBasis)).toBe(true);
  });
});

describe('economics — no currency conversion, no inflation adjustment', () => {
  it('publishes each figure only in a currency its own dataset publishes', () => {
    for (const o of OBS) {
      if (!o.currency) continue;
      const c = ECONOMICS_CONTRACT_MAP.get(o.sourceDatasetId)!;
      expect(c.currencies, `${o.id}`).toContain(o.currency);
    }
  });

  it('carries Eurostat’s euro and national-currency series as two separate series', () => {
    // Neither is derived from the other. If one were computed from the other
    // an exchange rate would have been applied that no source applied.
    const eur = OBS.filter((o) => o.currency === 'EUR');
    const nac = OBS.filter((o) => o.currency === 'NAC');
    expect(eur.length).toBeGreaterThan(0);
    expect(nac.length).toBeGreaterThan(0);
    expect(new Set(OBS.map((o) => o.currency).filter(Boolean))).toEqual(
      new Set(['USD', 'EUR', 'NAC']),
    );
  });
});

describe('economics — a region is not a country and a union is neither', () => {
  it('places every figure at a known geography level', () => {
    expect(OBS.every((o) => GEOGRAPHY_LEVELS.includes(o.geographyLevel))).toBe(
      true,
    );
    expect(OBS.some((o) => o.geographyLevel === 'subnational')).toBe(true);
    expect(OBS.some((o) => o.geographyLevel === 'union')).toBe(true);
    expect(OBS.every((o) => o.geographyLevel !== 'unknown')).toBe(true);
  });

  it('never gives a union aggregate a country code', () => {
    const bad = OBS.filter(
      (o) => o.geographyLevel === 'union' && o.countryCode,
    );
    expect(bad).toEqual([]);
  });

  it('counts regions separately from the countries containing them', () => {
    const j = economicsJurisdictions();
    const regions = j.filter((x) => x.level === 'subnational');
    const countries = j.filter((x) => x.level === 'country');
    expect(regions.length).toBeGreaterThan(countries.length);
    // A region carries its parent country, so a reader can tell where it is.
    const region = OBS.find((o) => o.geographyLevel === 'subnational')!;
    expect(region.countryCode).toMatch(/^[A-Z]{3}$/);
  });
});

describe('economics — nothing that needs revenue is published', () => {
  it('keeps margin, net return and break-even out of the vocabulary entirely', () => {
    for (const a of ABSENT_METRICS) {
      expect(FARM_ECONOMIC_METRICS as readonly string[]).not.toContain(a.name);
      expect(a.why.length).toBeGreaterThan(40);
    }
  });

  it('holds no revenue figure any margin could be computed from', () => {
    const revenueish = OBS.filter((o) =>
      /revenue|receipt|income|return|price.*received/i.test(o.metric),
    );
    expect(revenueish).toEqual([]);
  });
});

describe('economics — totals are the source’s own', () => {
  it('keeps ERS totals consistent with the components it publishes', () => {
    for (const crop of cropsWithCosts()) {
      const rows = costsForCrop(crop);
      for (const period of new Set(rows.map((r) => r.period))) {
        const scope = rows.filter((r) => r.period === period);
        const total = scope.find((r) => r.metric === 'totalCost');
        const op = scope.find((r) => r.metric === 'operatingCost');
        const alloc = scope.find((r) => r.metric === 'allocatedOverheadCost');
        if (!total || !op || !alloc) continue;
        expect(
          Math.abs(total.value - (op.value + alloc.value)),
          `${crop} ${period}`,
        ).toBeLessThan(0.05);
      }
    }
  });

  it('names the metrics that are the source’s totals rather than sums', () => {
    expect(SOURCE_TOTAL_METRICS.length).toBeGreaterThan(0);
    for (const m of SOURCE_TOTAL_METRICS)
      expect(FARM_ECONOMIC_METRICS).toContain(m);
  });
});

describe('economics — vocabularies are live or explicitly reserved', () => {
  it('reaches every metric in the vocabulary with real data', () => {
    const used = new Set(OBS.map((o) => o.metric));
    expect([...FARM_ECONOMIC_METRICS].filter((m) => !used.has(m))).toEqual([]);
  });

  it('either produces each evidence type or gives a reason for holding none', () => {
    const used = new Set(OBS.map((o) => o.evidenceType));
    const reserved = new Set(
      RESERVED_EVIDENCE_TYPES.map((r) => r.evidenceType),
    );
    for (const t of EVIDENCE_TYPES)
      expect(used.has(t) || reserved.has(t), t).toBe(true);
    for (const r of RESERVED_EVIDENCE_TYPES)
      expect(used.has(r.evidenceType)).toBe(false);
  });
});

describe('economics — every figure is traceable', () => {
  it('gives every dataset a snapshot registered with the freshness layer', () => {
    const paths = new Set(SOURCE_SNAPSHOTS.map((s) => s.payloadPath));
    for (const c of ECONOMICS_CONTRACTS)
      expect(paths).toContain(c.snapshotPath);
  });

  it('names a real source on every figure', () => {
    const unknown = OBS.filter((o) =>
      o.sourceReferenceIds.some((s) => !SOURCE_MAP.has(s)),
    );
    expect(unknown).toEqual([]);
  });

  it('says what kind of geography every dataset publishes', () => {
    for (const c of ECONOMICS_CONTRACTS)
      expect(c.geographyNote.length, c.datasetId).toBeGreaterThan(30);
  });
});

describe('economics — the public surface', () => {
  it('publishes the hub and puts it in the route list', () => {
    const paths = allRoutes().map((r) => r.path);
    expect(paths).toContain(ECONOMICS_PATH);
    // No per-crop economics URL: the cost figures belong on the crop page.
    expect(
      paths.filter((p) => p.startsWith(`${ECONOMICS_PATH}/`)),
    ).toHaveLength(0);
  });

  it('gives the hub one search document and no per-crop ones', () => {
    const docs = DOCS.filter((d) => d.type === 'farm-economics');
    expect(docs).toHaveLength(1);
    const doc = docs[0]!;
    expect(doc.route).toBe(ECONOMICS_PATH);
    // A crop name at name weight here would take the crop page's own query,
    // and the crop page is where the cost figures are actually shown.
    const cropNames = new Set(
      PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop').map((c) =>
        c.title.toLowerCase(),
      ),
    );
    for (const n of doc.names ?? [])
      expect(cropNames.has(n.toLowerCase()), n).toBe(false);
  });

  it('shows cost figures only for crops a source publishes them for', () => {
    const crops = cropsWithCosts();
    expect(crops.length).toBeGreaterThan(0);
    for (const c of crops) expect(costsForCrop(c).length).toBeGreaterThan(0);
    expect(costsForCrop('tomato')).toEqual([]);
  });
});
