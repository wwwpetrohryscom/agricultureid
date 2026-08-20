import { describe, expect, it } from 'vitest';
import { CANONICAL_JURISDICTIONS } from '@/data/jurisdictions';
import { JURISDICTION_KINDS } from '@/types/jurisdiction';
import {
  getJurisdiction,
  hasRegionProfile,
  regionProfileFor,
  jurisdictionsForCountry,
} from '@/lib/jurisdictions/registry';
import { REGIONS } from '@/lib/geo/region-registry';
import { AUTHORITIES } from '@/data/authorities';

/**
 * Expected target written out INDEPENDENTLY of the registry under test.
 * Deriving it from CANONICAL_JURISDICTIONS would make every assertion here
 * tautological — it would pass even if half the states vanished.
 */
const EXPECTED = { USA: 50, CAN: 13, AUS: 8 } as const;
const EXPECTED_TOTAL = 71;

/** A hand-written sample; if a code here is wrong the registry is wrong. */
const SAMPLE: [string, string, string, string][] = [
  ['US-RI', 'Rhode Island', 'USA', 'state'],
  ['US-CA', 'California', 'USA', 'state'],
  ['US-WY', 'Wyoming', 'USA', 'state'],
  ['CA-NU', 'Nunavut', 'CAN', 'territory'],
  ['CA-YT', 'Yukon', 'CAN', 'territory'],
  ['CA-NT', 'Northwest Territories', 'CAN', 'territory'],
  ['CA-ON', 'Ontario', 'CAN', 'province'],
  ['AU-ACT', 'Australian Capital Territory', 'AUS', 'territory'],
  ['AU-NT', 'Northern Territory', 'AUS', 'territory'],
  ['AU-NSW', 'New South Wales', 'AUS', 'state'],
];

describe('canonical jurisdictions — cardinality', () => {
  it('contains exactly 71 jurisdictions', () => {
    expect(CANONICAL_JURISDICTIONS).toHaveLength(EXPECTED_TOTAL);
  });

  it('contains exactly 50 US states, 13 Canadian, 8 Australian', () => {
    for (const [cc, n] of Object.entries(EXPECTED)) {
      expect(jurisdictionsForCountry(cc), cc).toHaveLength(n);
    }
  });

  it('excludes the District of Columbia from the 50 states', () => {
    expect(
      CANONICAL_JURISDICTIONS.some((j) => /District of Columbia/i.test(j.name)),
    ).toBe(false);
  });
});

describe('canonical jurisdictions — identity integrity', () => {
  it('resolves the hand-written sample exactly', () => {
    expect(SAMPLE).toHaveLength(10);
    for (const [id, name, cc, kind] of SAMPLE) {
      const j = getJurisdiction(id);
      expect(j, id).toBeDefined();
      expect(j!.name, id).toBe(name);
      expect(j!.countryCode, id).toBe(cc);
      expect(j!.kind, id).toBe(kind);
    }
  });

  it('has unique ids and unique slugs', () => {
    expect(new Set(CANONICAL_JURISDICTIONS.map((j) => j.id)).size).toBe(
      EXPECTED_TOTAL,
    );
    expect(new Set(CANONICAL_JURISDICTIONS.map((j) => j.slug)).size).toBe(
      EXPECTED_TOTAL,
    );
  });

  it('keeps subdivision codes unique WITHIN a country, not globally', () => {
    // AU-NT and CA-NT are both legitimately "NT"; a global uniqueness rule
    // would wrongly reject one of them.
    expect(getJurisdiction('AU-NT')!.subdivisionCode).toBe('NT');
    expect(getJurisdiction('CA-NT')!.subdivisionCode).toBe('NT');
    for (const cc of Object.keys(EXPECTED)) {
      const codes = jurisdictionsForCountry(cc).map((j) => j.subdivisionCode);
      expect(new Set(codes).size, cc).toBe(codes.length);
    }
  });

  it('keeps the id prefix, subdivision code and parent country in agreement', () => {
    const prefix: Record<string, string> = { USA: 'US', CAN: 'CA', AUS: 'AU' };
    for (const j of CANONICAL_JURISDICTIONS) {
      const [p, code] = j.id.split('-');
      expect(p, j.id).toBe(prefix[j.countryCode]);
      expect(code, j.id).toBe(j.subdivisionCode);
    }
  });

  it('uses only valid kinds, and only ones the country actually has', () => {
    const allowed: Record<string, string[]> = {
      USA: ['state'],
      CAN: ['province', 'territory'],
      AUS: ['state', 'territory'],
    };
    for (const j of CANONICAL_JURISDICTIONS) {
      expect(JURISDICTION_KINDS as readonly string[]).toContain(j.kind);
      expect(allowed[j.countryCode], j.id).toContain(j.kind);
    }
  });
});

describe('canonical jurisdictions — identity is independent of agronomy', () => {
  it('carries no agricultural fields at all', () => {
    const banned = [
      'climateContext',
      'agroecologicalZones',
      'agriculturalLandContext',
      'majorCropSystems',
      'majorLivestockSystems',
      'irrigationContext',
      'statistic',
    ];
    for (const j of CANONICAL_JURISDICTIONS) {
      for (const key of banned) {
        expect(
          key in (j as unknown as Record<string, unknown>),
          `${j.id}.${key}`,
        ).toBe(false);
      }
    }
  });

  it('lets a jurisdiction exist with no RegionProfile — the whole point', () => {
    // Rhode Island has identity but no researched agronomy, and that must be a
    // completely normal, valid state rather than a validation failure.
    expect(getJurisdiction('US-RI')).toBeDefined();
    expect(hasRegionProfile('US-RI')).toBe(false);
    expect(regionProfileFor('US-RI')).toBeUndefined();

    const without = CANONICAL_JURISDICTIONS.filter(
      (j) => !hasRegionProfile(j.id),
    );
    expect(without.length).toBe(46);
  });

  it('still derives the RegionProfile where one genuinely exists', () => {
    expect(hasRegionProfile('US-CA')).toBe(true);
    expect(regionProfileFor('US-CA')?.regionId).toBe('california');

    const withProfile = CANONICAL_JURISDICTIONS.filter((j) =>
      hasRegionProfile(j.id),
    );
    expect(withProfile.length).toBe(25);
    expect(withProfile.length + without().length).toBe(EXPECTED_TOTAL);
    function without() {
      return CANONICAL_JURISDICTIONS.filter((j) => !hasRegionProfile(j.id));
    }
  });

  it('keeps every existing RegionProfile substantive — no dilution', () => {
    // Guards against the tempting shortcut of creating placeholder profiles to
    // unlock jurisdictions. Every profile must still carry real agronomy.
    const targets = REGIONS.filter((r) =>
      ['USA', 'CAN', 'AUS'].includes(r.countryCode),
    );
    expect(targets.length).toBe(25);
    for (const r of targets) {
      expect(r.climateContext.length, r.regionId).toBeGreaterThan(40);
      expect(r.agriculturalLandContext.length, r.regionId).toBeGreaterThan(40);
      expect(r.majorCropSystems.length, r.regionId).toBeGreaterThan(0);
      expect(r.majorLivestockSystems.length, r.regionId).toBeGreaterThan(0);
      expect(r.irrigationContext.length, r.regionId).toBeGreaterThan(20);
      for (const c of r.majorCropSystems) {
        expect(c.trim(), r.regionId).not.toBe('');
        expect(/unknown|n\/a|tbd|placeholder/i.test(c), r.regionId).toBe(false);
      }
    }
  });

  it('maps every target-country RegionProfile to exactly one jurisdiction', () => {
    const targets = REGIONS.filter((r) =>
      ['USA', 'CAN', 'AUS'].includes(r.countryCode),
    );
    expect(targets.length).toBeGreaterThan(0);
    for (const r of targets) {
      const matches = CANONICAL_JURISDICTIONS.filter(
        (j) => j.id === r.officialCode,
      );
      expect(matches.length, r.regionId).toBe(1);
      expect(matches[0]?.countryCode, r.regionId).toBe(r.countryCode);
    }
  });
});

describe('authority → jurisdiction migration integrity', () => {
  it('migrated all 22 subnational records and lost none', () => {
    const sub = AUTHORITIES.filter((a) => a.jurisdictionId);
    expect(sub).toHaveLength(22);
  });

  it('leaves no record carrying the retired regionId field', () => {
    // A dual source of truth is the failure mode this guards.
    for (const a of AUTHORITIES) {
      expect(
        'regionId' in (a as unknown as Record<string, unknown>),
        a.id,
      ).toBe(false);
    }
  });

  it('binds every subnational authority to an existing jurisdiction in its own country', () => {
    const byId = new Map(CANONICAL_JURISDICTIONS.map((j) => [j.id, j]));
    const sub = AUTHORITIES.filter((a) => a.jurisdictionId);
    expect(sub.length).toBe(22);
    for (const a of sub) {
      const j = byId.get(a.jurisdictionId!);
      expect(j, `${a.id} → ${a.jurisdictionId}`).toBeDefined();
      expect(j!.countryCode, a.id).toBe(a.countryCode);
    }
  });

  it('never lets a national or federal body claim a subdivision', () => {
    for (const a of AUTHORITIES.filter((x) => x.jurisdictionId)) {
      expect(['national', 'federal'], a.id).not.toContain(a.governmentLevel);
    }
  });
});
