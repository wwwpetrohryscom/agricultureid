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

/**
 * Counts are asserted explicitly so a loop can never pass vacuously over an
 * empty registry, and so silently dropping an authority fails loudly.
 */
const EXPECTED_TOTAL = 31;
const EXPECTED_PUBLISHED = 21;

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
    expect(withCountry.length).toBe(29);
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
    expect(
      authoritiesForCountry('USA')
        .map((a) => a.id)
        .sort(),
    ).toEqual(['us-usda-aphis', 'us-usda-nass', 'usa-ers']);
    expect(authoritiesForCountry('ZZZ')).toHaveLength(0);
  });
});

describe('authorities registry — provenance', () => {
  it('cites a real source for every responsibility', () => {
    const all = AUTHORITIES.flatMap((a) => a.responsibilities);
    expect(all.length).toBe(70);
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
    expect(dirs).toHaveLength(10);
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
