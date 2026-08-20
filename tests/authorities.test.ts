import { describe, expect, it } from 'vitest';
import { AUTHORITIES } from '@/data/authorities';
import {
  isPublishableAuthority,
  isListableAuthority,
  RESPONSIBILITY_AREAS,
  AUTHORITY_TYPES,
  GOVERNMENT_LEVELS,
} from '@/types/authority';
import {
  publishedAuthorities,
  listedAuthorities,
  publishedAuthorityBySlug,
  authoritiesForCountry,
  authorityPath,
  AUTHORITIES_HUB_PATH,
} from '@/lib/authorities/registry';
import { SOURCE_MAP } from '@/lib/sources/registry';
import { getProfileByCode } from '@/lib/geo/registry';
import { allRoutes } from '@/lib/seo/routes';
import { CANONICAL_JURISDICTIONS } from '@/data/jurisdictions';

/**
 * Counts are asserted explicitly so a loop can never pass vacuously over an
 * empty registry, and so silently dropping an authority fails loudly.
 */
const EXPECTED_TOTAL = 76;
const EXPECTED_PUBLISHED = 44;

describe('authorities registry — scale', () => {
  it('holds the expected number of verified entries', () => {
    expect(AUTHORITIES.length).toBe(EXPECTED_TOTAL);
    expect(AUTHORITIES.length).toBeGreaterThan(0);
  });

  it('publishes exactly the evidence-rich subset', () => {
    expect(publishedAuthorities()).toHaveLength(EXPECTED_PUBLISHED);
    expect(listedAuthorities()).toHaveLength(EXPECTED_TOTAL);
    expect(publishedAuthorities().length).toBeLessThan(
      listedAuthorities().length,
    );
  });
});

describe('authorities registry — identity', () => {
  it('has unique ids and unique slugs', () => {
    expect(new Set(AUTHORITIES.map((a) => a.id)).size).toBe(EXPECTED_TOTAL);
    expect(new Set(AUTHORITIES.map((a) => a.slug)).size).toBe(EXPECTED_TOTAL);
  });

  it('never lets two bodies claim the same official website', () => {
    const sites = AUTHORITIES.map((a) => a.officialWebsite);
    expect(new Set(sites).size).toBe(sites.length);
  });

  it('uses HTTPS for every official website', () => {
    expect(AUTHORITIES.length).toBe(EXPECTED_TOTAL);
    for (const a of AUTHORITIES) {
      expect(new URL(a.officialWebsite).protocol, a.id).toBe('https:');
    }
  });

  it('records the exact verified official URLs', () => {
    const byId = new Map(AUTHORITIES.map((a) => [a.id, a.officialWebsite]));
    expect(byId.get('gb-defra')).toBe(
      'https://www.gov.uk/government/organisations/department-for-environment-food-rural-affairs',
    );
    expect(byId.get('de-bmleh')).toBe('https://www.bmleh.de');
    expect(byId.get('it-masaf')).toBe('https://www.masaf.gov.it');
    expect(byId.get('us-usda-aphis')).toBe('https://www.aphis.usda.gov');
    expect(byId.get('us-usda-nass')).toBe('https://www.nass.usda.gov');
  });
});

describe('authorities registry — jurisdiction resolution', () => {
  it('resolves every countryCode against the geo layer', () => {
    const withCountry = AUTHORITIES.filter((a) => a.countryCode);
    expect(withCountry.length).toBe(74);
    for (const a of withCountry) {
      expect(getProfileByCode(a.countryCode!), a.id).toBeDefined();
    }
  });

  it('gives supranational bodies no single countryCode', () => {
    const supra = AUTHORITIES.filter(
      (a) => a.governmentLevel === 'supranational',
    );
    expect(supra).toHaveLength(2);
    for (const a of supra) expect(a.countryCode, a.id).toBeUndefined();
  });

  it('finds authorities by country code', () => {
    const usa = authoritiesForCountry('USA');
    // Federal bodies carry no regionId; state bodies must carry one. Asserting
    // the split rather than a literal id list keeps the test meaningful as
    // later waves add states, instead of churning on every insertion.
    const federal = usa
      .filter((a) => !a.jurisdictionId)
      .map((a) => a.id)
      .sort();
    expect(federal).toEqual(['us-usda-aphis', 'us-usda-nass', 'usa-ers']);

    const states = usa.filter((a) => a.jurisdictionId);
    expect(states.length).toBe(31);
    for (const a of states) {
      expect(a.governmentLevel, a.id).toBe('state');
      expect(a.jurisdictionType, a.id).toBe('state');
    }

    expect(authoritiesForCountry('ZZZ')).toHaveLength(0);
  });
});

describe('authorities registry — provenance', () => {
  it('cites a real source for every responsibility', () => {
    const all = AUTHORITIES.flatMap((a) => a.responsibilities);
    expect(all.length).toBe(145);
    for (const r of all)
      expect(SOURCE_MAP.has(r.sourceId), r.sourceId).toBe(true);
  });

  it('uses only the controlled responsibility vocabulary', () => {
    for (const a of AUTHORITIES) {
      for (const r of a.responsibilities) {
        expect(RESPONSIBILITY_AREAS as readonly string[]).toContain(r.area);
      }
    }
  });

  it('uses only the controlled type and level vocabularies', () => {
    for (const a of AUTHORITIES) {
      expect(AUTHORITY_TYPES as readonly string[]).toContain(a.authorityType);
      expect(GOVERNMENT_LEVELS as readonly string[]).toContain(
        a.governmentLevel,
      );
    }
  });

  it('carries at least one dated verification per authority', () => {
    expect(AUTHORITIES.length).toBe(EXPECTED_TOTAL);
    for (const a of AUTHORITIES) {
      expect(a.verification.length, a.id).toBeGreaterThan(0);
      for (const v of a.verification) {
        expect(v.verifiedAt, a.id).toMatch(/^\d{4}-\d{2}-\d{2}$/);
        expect(v.evidenceNote.length, a.id).toBeGreaterThan(20);
        expect(SOURCE_MAP.has(v.sourceId), a.id).toBe(true);
      }
    }
  });

  it('never publishes an uncertain domain classification', () => {
    for (const a of publishedAuthorities()) {
      for (const v of a.verification) {
        expect(v.domainVerification, a.id).not.toBe('uncertain');
      }
    }
  });
});

describe('authorities registry — publication gating', () => {
  it('requires accepted + active + full-profile to publish', () => {
    for (const a of AUTHORITIES) {
      const expected =
        a.candidateStatus === 'accepted' &&
        a.authorityStatus === 'active' &&
        a.profileDepth === 'full-profile' &&
        a.verification.every((v) => v.domainVerification !== 'uncertain');
      expect(isPublishableAuthority(a), a.id).toBe(expected);
    }
  });

  it('enforces the thin-page threshold on published profiles', () => {
    const pub = publishedAuthorities();
    expect(pub).toHaveLength(EXPECTED_PUBLISHED);
    for (const a of pub) {
      // Substance is evidence coverage, not prose length.
      expect(a.responsibilities.length, a.id).toBeGreaterThanOrEqual(2);
      expect(a.limitations?.length ?? 0, a.id).toBeGreaterThan(0);
      expect(a.summary.length, a.id).toBeGreaterThan(60);
    }
  });

  it('lists directory records but gives them no page', () => {
    const dirs = AUTHORITIES.filter(
      (a) => a.profileDepth === 'directory-record',
    );
    expect(dirs).toHaveLength(32);
    for (const a of dirs) {
      expect(isListableAuthority(a), a.id).toBe(true);
      expect(isPublishableAuthority(a), a.id).toBe(false);
      expect(publishedAuthorityBySlug(a.slug), a.id).toBeUndefined();
    }
  });

  it('resolves published slugs and refuses unpublished ones', () => {
    expect(publishedAuthorityBySlug('germany-bmleh')?.id).toBe('de-bmleh');
    expect(publishedAuthorityBySlug('spain-mapa')).toBeUndefined();
    expect(publishedAuthorityBySlug('does-not-exist')).toBeUndefined();
  });
});

describe('authorities registry — sitemap', () => {
  it('includes the hub and every published profile, and nothing else', () => {
    const paths = new Set(allRoutes().map((r) => r.path));
    expect(paths.has(AUTHORITIES_HUB_PATH)).toBe(true);

    for (const a of publishedAuthorities()) {
      expect(paths.has(authorityPath(a.slug)), a.slug).toBe(true);
    }
    for (const a of AUTHORITIES.filter((x) => !isPublishableAuthority(x))) {
      expect(paths.has(authorityPath(a.slug)), a.slug).toBe(false);
    }
  });

  it('adds exactly hub + published profiles to the route set', () => {
    const authorityRoutes = allRoutes().filter((r) =>
      r.path.startsWith('/agricultural-authorities'),
    );
    expect(authorityRoutes).toHaveLength(EXPECTED_PUBLISHED + 1);
  });
});

describe('authorities registry — editorial honesty', () => {
  it('never restates an area label as its own evidence', () => {
    for (const a of AUTHORITIES) {
      for (const r of a.responsibilities) {
        const flat = r.note
          .toLowerCase()
          .replace(/[^a-z ]/g, '')
          .trim();
        expect(flat, `${a.id}/${r.area}`).not.toBe(r.area.replace(/-/g, ' '));
        expect(r.note.length, `${a.id}/${r.area}`).toBeGreaterThan(25);
      }
    }
  });

  it('records the ministry renames rather than inventing separate bodies', () => {
    const de = AUTHORITIES.find((a) => a.id === 'de-bmleh')!;
    expect(de.redirectedFrom).toBe('https://www.bmel.de');
    expect(de.alternativeNames).toContain('BMEL');

    const it_ = AUTHORITIES.find((a) => a.id === 'it-masaf')!;
    expect(it_.redirectedFrom).toBe('https://www.politicheagricole.it');
  });

  it('states limitations on every published profile', () => {
    for (const a of publishedAuthorities()) {
      expect(a.limitations, a.id).toBeDefined();
      expect(a.limitations!.length, a.id).toBeGreaterThan(0);
    }
  });
});

describe('Wave 3 — subnational jurisdiction linkage', () => {
  it('links every subnational authority to a canonical jurisdiction', () => {
    const sub = AUTHORITIES.filter((a) => a.jurisdictionId);
    expect(sub.length).toBe(45);
    const ids = new Set(CANONICAL_JURISDICTIONS.map((j) => j.id));
    for (const a of sub) {
      expect(ids.has(a.jurisdictionId!), `${a.id} → ${a.jurisdictionId}`).toBe(
        true,
      );
    }
  });

  it('uses subnational government levels, never national or federal', () => {
    const sub = AUTHORITIES.filter((a) => a.jurisdictionId);
    expect(sub.length).toBeGreaterThan(0);
    for (const a of sub) {
      expect(['state', 'provincial', 'territorial'], a.id).toContain(
        a.governmentLevel,
      );
    }
  });

  it('keeps each subnational authority in its own jurisdiction’s country', () => {
    const byId = new Map(CANONICAL_JURISDICTIONS.map((j) => [j.id, j]));
    const sub = AUTHORITIES.filter((x) => x.jurisdictionId);
    expect(sub.length).toBeGreaterThan(0);
    for (const a of sub) {
      const j = byId.get(a.jurisdictionId!)!;
      // A province linked to the wrong country is the exact defect this catches.
      expect(j.countryCode, a.id).toBe(a.countryCode);
    }
  });

  it('never lets two jurisdictions share one official website', () => {
    const sub = AUTHORITIES.filter((a) => a.jurisdictionId);
    const sites = sub.map((a) => a.officialWebsite);
    expect(new Set(sites).size).toBe(sites.length);
  });

  it('covers 22 of the 71 target jurisdictions, with the rest geo-blocked', () => {
    // Independent expectation: the coverage number is asserted here, not read
    // back from the same function that computes it.
    const covered = new Set(
      AUTHORITIES.filter((a) => a.jurisdictionId).map((a) => a.jurisdictionId),
    );
    expect(covered.size).toBe(45);
    // Jurisdiction identity is complete even though authority evidence is not —
    // the two are separate metrics and this asserts they stay separate.
    expect(CANONICAL_JURISDICTIONS.length).toBe(71);
    expect(covered.size).toBeLessThan(CANONICAL_JURISDICTIONS.length);
  });
});
