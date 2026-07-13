import { describe, expect, it } from 'vitest';
import {
  allSnapshots,
  checksumValid,
  latestStatistic,
  timeSeries,
  COUNTRY_META,
  countryMeta,
} from '@/lib/geo/snapshots';
import { deriveArableShareOfAgri, GEO_FORMULAS } from '@/lib/geo/derived';
import { INDICATORS, INDICATOR_BY_ID } from '@/data/geo/indicators';
import { countryProfiles } from '@/data/geo/profiles';
import { REGIONS } from '@/data/geo/wb-regions';
import { geoIssues } from '@/lib/geo/validate-geo';
import { getSource } from '@/lib/sources/registry';

describe('phase 3B — snapshots & integrity', () => {
  it('loads country metadata', () => {
    expect(COUNTRY_META.length).toBeGreaterThan(180);
  });

  it('has a snapshot per registered indicator with verifying checksum', () => {
    expect(allSnapshots().length).toBeGreaterThanOrEqual(INDICATORS.length - 1);
    for (const s of allSnapshots()) {
      expect(checksumValid(s), s.snapshotId).toBe(true);
      expect(s.datasetVersion, s.snapshotId).toBeTruthy();
      expect(s.retrievedAt, s.snapshotId).toBeTruthy();
      expect(s.license, s.snapshotId).toBeTruthy();
      expect(s.rowCount).toBe(s.rows.length);
    }
  });

  it('snapshot unit matches its indicator unit', () => {
    for (const s of allSnapshots()) {
      const ind = INDICATOR_BY_ID.get(s.indicatorId);
      expect(ind, s.indicatorId).toBeDefined();
      expect(s.unit, s.indicatorId).toBe(ind!.unit);
    }
  });
});

describe('phase 3B — statistics carry provenance', () => {
  it('latestStatistic yields year/unit/source/version for a known country', () => {
    const s = latestStatistic('AG.LND.AGRI.ZS', 'USA');
    expect(s).toBeDefined();
    expect(s!.year).toBeGreaterThan(2000);
    expect(s!.unit).toBe('% of land area');
    expect(s!.sourceVersion).toBeTruthy();
    expect(s!.retrievedAt).toBeTruthy();
    expect(getSource(s!.sourceId)).toBeDefined();
  });

  it('time series are ascending by year', () => {
    const ts = timeSeries('AG.YLD.CREL.KG', 'FRA');
    for (let i = 1; i < ts.length; i++)
      expect(ts[i]!.year).toBeGreaterThan(ts[i - 1]!.year);
  });
});

describe('phase 3B — derived values', () => {
  it('derives arable-share-of-agri with full formula provenance', () => {
    const d = deriveArableShareOfAgri('IND');
    expect(d).toBeDefined();
    expect(d!.formulaId).toBe('arable-share-of-agricultural-land');
    expect(d!.formulaVersion).toBeTruthy();
    expect(d!.inputs.length).toBe(2);
    for (const inp of d!.inputs) expect(inp.sourceVersion).toBeTruthy();
    expect(d!.value).toBeGreaterThan(0);
    expect(d!.value).toBeLessThanOrEqual(100);
  });

  it('every formula input references a known indicator', () => {
    for (const f of GEO_FORMULAS)
      for (const id of f.inputIndicators)
        expect(INDICATOR_BY_ID.has(id), id).toBe(true);
  });
});

describe('phase 3B — country profiles', () => {
  it('has a launch corpus of country profiles', () => {
    expect(countryProfiles.length).toBeGreaterThanOrEqual(30);
  });

  const regionNames = new Set(REGIONS.map((r) => r.name));

  it('each profile has a valid region and resolvable country code', () => {
    for (const p of countryProfiles) {
      expect(regionNames.has(p.region), `${p.slug}: ${p.region}`).toBe(true);
      expect(countryMeta(p.countryCode), p.slug).toBeDefined();
    }
  });

  it('each profile references valid highlight indicators and sources', () => {
    for (const p of countryProfiles) {
      for (const id of p.highlightIndicators)
        expect(INDICATOR_BY_ID.has(id), `${p.slug}:${id}`).toBe(true);
      expect(
        p.sourceReferences.some((r) => r.sourceId === 'worldbank'),
        p.slug,
      ).toBe(true);
    }
  });

  it('overviews do not embed volatile large numbers', () => {
    for (const p of countryProfiles) {
      expect(/\b\d{5,}\b|\b\d{1,3}(?:,\d{3})+\b/.test(p.overview), p.slug).toBe(
        false,
      );
    }
  });
});

describe('phase 3B — geo validation', () => {
  it('reports no geo errors', () => {
    expect(geoIssues().filter((i) => i.level === 'error')).toEqual([]);
  });
});
