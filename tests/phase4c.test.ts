import { describe, it, expect } from 'vitest';
import {
  REGIONS,
  ZONES,
  allRegions,
  regionsForCountry,
  getRegion,
  regionPath,
  countriesWithRegions,
  zonesSorted,
  getZone,
  zonePath,
} from '@/lib/geo/region-registry';
import { ZONE_BY_CODE, ZONE_BY_SLUG } from '@/data/geo/zones';
import { regionIssues } from '@/lib/geo/validate-regions';
import { getProfile } from '@/lib/geo/registry';
import { resolveRef } from '@/lib/content/registry';
import { SOURCES } from '@/data/sources';
import { allRoutes } from '@/lib/seo/routes';
import { buildSearchDocuments } from '@/lib/search/documents';

const SOURCE_IDS = new Set(SOURCES.map((s) => s.id));
const ISO_SUB = /^[A-Z]{2}-[A-Z0-9]{1,3}$/;
const ISO3 = /^[A-Z]{3}$/;
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

describe('Phase 4C — agroecological zones', () => {
  it('has a non-trivial, Köppen-classified zone set', () => {
    expect(ZONES.length).toBeGreaterThanOrEqual(15);
    for (const z of ZONES) {
      expect(z.system).toMatch(/Köppen/);
      expect(SLUG.test(z.slug)).toBe(true);
      expect(z.classification.length).toBeGreaterThanOrEqual(2);
      expect(z.agriculturalRelevance.length).toBeGreaterThan(0);
      expect(z.sourceReferences.length).toBeGreaterThan(0);
      expect(z.limitations.length).toBeGreaterThan(0);
    }
  });

  it('has unique zone slugs and classification codes', () => {
    expect(new Set(ZONES.map((z) => z.slug)).size).toBe(ZONES.length);
    expect(new Set(ZONES.map((z) => z.classification)).size).toBe(ZONES.length);
  });

  it('indexes zones by slug and by Köppen code consistently', () => {
    for (const z of ZONES) {
      expect(ZONE_BY_SLUG.get(z.slug)).toBe(z);
      expect(ZONE_BY_CODE.get(z.classification)).toBe(z);
      expect(getZone(z.slug)).toBe(z);
    }
    expect(getZone('does-not-exist')).toBeUndefined();
  });

  it('sorts zones by classification and builds stable paths', () => {
    const sorted = zonesSorted().map((z) => z.classification);
    expect(sorted).toEqual([...sorted].sort((a, b) => a.localeCompare(b)));
    for (const z of ZONES) {
      expect(zonePath(z)).toBe(`/agroecological-zones/${z.slug}`);
    }
  });

  it('cites only registered sources for every zone', () => {
    for (const z of ZONES) {
      for (const ref of z.sourceReferences) {
        expect(SOURCE_IDS.has(ref.sourceId)).toBe(true);
      }
    }
  });
});

describe('Phase 4C — subnational region profiles', () => {
  it('has a substantive, curated region set', () => {
    expect(REGIONS.length).toBeGreaterThanOrEqual(50);
  });

  it('uses valid slugs, ISO3 country codes, and ISO 3166-2 official codes', () => {
    for (const r of REGIONS) {
      expect(SLUG.test(r.slug)).toBe(true);
      expect(ISO3.test(r.countryCode)).toBe(true);
      expect(ISO_SUB.test(r.officialCode)).toBe(true);
    }
  });

  it('has a unique regionId and a unique country/slug key', () => {
    expect(new Set(REGIONS.map((r) => r.regionId)).size).toBe(REGIONS.length);
    const keys = REGIONS.map((r) => `${r.countrySlug}/${r.slug}`);
    expect(new Set(keys).size).toBe(REGIONS.length);
  });

  it('anchors every region to a published country profile', () => {
    for (const r of REGIONS) {
      expect(getProfile(r.countrySlug)).toBeDefined();
    }
  });

  it('references only Köppen codes that exist in the zone registry', () => {
    for (const r of REGIONS) {
      expect(r.agroecologicalZones.length).toBeGreaterThan(0);
      for (const code of r.agroecologicalZones) {
        expect(ZONE_BY_CODE.has(code)).toBe(true);
      }
    }
  });

  it('carries region-specific systems, institutions, sources, and limitations', () => {
    for (const r of REGIONS) {
      expect(r.majorCropSystems.length).toBeGreaterThan(0);
      expect(r.majorLivestockSystems.length).toBeGreaterThan(0);
      expect(r.officialInstitutions.length).toBeGreaterThan(0);
      expect(r.limitations.length).toBeGreaterThan(0);
      expect(r.sourceReferences.length).toBeGreaterThan(0);
      for (const s of r.sourceReferences) {
        expect(SOURCE_IDS.has(s.sourceId)).toBe(true);
      }
    }
  });

  it('resolves every content connection to a real published entity', () => {
    for (const r of REGIONS) {
      for (const c of r.connections ?? []) {
        expect(resolveRef(c)).toBeDefined();
      }
    }
  });

  it('never fabricates a bare statistic — any statistic carries value+unit+year+source', () => {
    for (const r of REGIONS) {
      if (!r.statistic) continue;
      const st = r.statistic;
      expect(st.value.trim().length).toBeGreaterThan(0);
      expect(st.unit.trim().length).toBeGreaterThan(0);
      expect(st.year).toBeGreaterThan(0);
      expect(SOURCE_IDS.has(st.sourceId)).toBe(true);
    }
  });
});

describe('Phase 4C — registry helpers', () => {
  it('regionsForCountry returns only that country, sorted by name', () => {
    for (const slug of countriesWithRegions()) {
      const regions = regionsForCountry(slug);
      expect(regions.length).toBeGreaterThan(0);
      expect(regions.every((r) => r.countrySlug === slug)).toBe(true);
      const names = regions.map((r) => r.name);
      expect(names).toEqual([...names].sort((a, b) => a.localeCompare(b)));
    }
    expect(regionsForCountry('atlantis')).toEqual([]);
  });

  it('getRegion resolves a known key and rejects unknown ones', () => {
    const sample = REGIONS[0]!;
    expect(getRegion(sample.countrySlug, sample.slug)).toBe(sample);
    expect(getRegion(sample.countrySlug, 'nope')).toBeUndefined();
    expect(getRegion('nowhere', sample.slug)).toBeUndefined();
  });

  it('builds canonical region paths', () => {
    for (const r of allRegions()) {
      expect(regionPath(r)).toBe(
        `/countries/${r.countrySlug}/regions/${r.slug}`,
      );
    }
  });

  it('countriesWithRegions is deduplicated and sorted', () => {
    const list = countriesWithRegions();
    expect(new Set(list).size).toBe(list.length);
    expect(list).toEqual([...list].sort());
  });
});

describe('Phase 4C — validator + wiring', () => {
  it('the offline region validator reports zero issues', () => {
    const issues = regionIssues();
    expect(issues.filter((i) => i.level === 'error')).toEqual([]);
  });

  it('exposes every zone and region in the sitemap', () => {
    const paths = new Set(allRoutes().map((r) => r.path));
    expect(paths.has('/agroecological-zones')).toBe(true);
    for (const z of ZONES) expect(paths.has(zonePath(z))).toBe(true);
    for (const slug of countriesWithRegions()) {
      expect(paths.has(`/countries/${slug}/regions`)).toBe(true);
    }
    for (const r of REGIONS) expect(paths.has(regionPath(r))).toBe(true);
  });

  it('indexes regions and zones for search with resolvable routes', () => {
    const docs = buildSearchDocuments();
    const regionDocs = docs.filter((d) => d.type === 'region');
    const zoneDocs = docs.filter((d) => d.type === 'agroecological-zone');
    expect(regionDocs.length).toBe(REGIONS.length);
    expect(zoneDocs.length).toBe(ZONES.length);
    const paths = new Set(allRoutes().map((r) => r.path));
    for (const d of [...regionDocs, ...zoneDocs]) {
      expect(paths.has(d.route)).toBe(true);
    }
  });
});
