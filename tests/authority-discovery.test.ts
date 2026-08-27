import { describe, expect, it } from 'vitest';
import { buildSearchDocuments } from '@/lib/search/documents';
import { search } from '@/lib/search/engine';
import { BENCHMARKS, benchmarkIndex } from '@/lib/search/benchmark';
import { AUTHORITIES } from '@/data/authorities';
import {
  listedAuthorities,
  publishedAuthorities,
  authorityPath,
  countryAuthoritiesPath,
  AUTHORITY_VIEW_COUNTRIES,
} from '@/lib/authorities/registry';
import { allRoutes } from '@/lib/seo/routes';
import { CANONICAL_JURISDICTIONS } from '@/data/jurisdictions';

const DOCS = buildSearchDocuments();
const AUTH_DOCS = DOCS.filter((d) => d.type === 'agricultural-authority');
// Same index the shipped engine and the benchmark use — synonyms included, so
// these assertions exercise real ranking rather than a stripped-down fixture.
const INDEX = benchmarkIndex();
const find = (q: string) => search(INDEX, q, { limit: 5 }).results;

describe('Wave 4B — authority search integration', () => {
  it('indexes every listed authority, and only listed ones', () => {
    expect(AUTH_DOCS.length).toBe(listedAuthorities().length);
    expect(AUTH_DOCS.length).toBe(80);
  });

  it('never indexes an authority twice', () => {
    const ids = AUTH_DOCS.map((d) => d.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('is registry-driven — no hand-maintained authority list to forget', () => {
    // Every registry record must have produced a doc. A switch statement that
    // someone forgets to extend is exactly what this guards against.
    for (const a of listedAuthorities()) {
      expect(
        AUTH_DOCS.some((d) => d.id === `authority:${a.id}`),
        a.id,
      ).toBe(true);
    }
  });

  it('routes full profiles to their detail page', () => {
    const pub = publishedAuthorities();
    expect(pub.length).toBeGreaterThan(0);
    for (const a of pub) {
      const doc = AUTH_DOCS.find((d) => d.id === `authority:${a.id}`)!;
      expect(doc.route, a.id).toBe(authorityPath(a.slug));
    }
  });

  it('never routes a directory-only record to a nonexistent detail page', () => {
    const routes = new Set(allRoutes().map((r) => r.path));
    const dirs = AUTHORITIES.filter(
      (a) => a.profileDepth === 'directory-record',
    );
    expect(dirs.length).toBeGreaterThan(0);
    for (const a of dirs) {
      const doc = AUTH_DOCS.find((d) => d.id === `authority:${a.id}`);
      if (!doc) continue;
      expect(doc.route, a.id).not.toBe(authorityPath(a.slug));
      // …and whatever it does point at must be a real, routable page.
      expect(routes.has(doc.route), `${a.id} → ${doc.route}`).toBe(true);
    }
  });

  it('labels directory-only records truthfully in the result category', () => {
    const dir = AUTHORITIES.find((a) => a.profileDepth === 'directory-record')!;
    const doc = AUTH_DOCS.find((d) => d.id === `authority:${dir.id}`)!;
    expect(doc.category).toContain('directory record');
  });

  it('ships no provenance, evidence or research data into the index', () => {
    const blob = JSON.stringify(AUTH_DOCS);
    for (const leak of [
      'evidenceNote',
      'domainVerification',
      'verifiedAt',
      'candidateStatus',
      'rejectionReason',
      'sourceReferences',
      'lastSuccessfulUrlCheck',
    ]) {
      expect(blob.includes(leak), leak).toBe(false);
    }
  });
});

describe('Wave 4B — jurisdiction precision in ranking', () => {
  /**
   * Asserted on JURISDICTION, not on the title. Several authorities do not
   * carry their jurisdiction in their official name — Alberta's ministry is
   * literally titled "Agriculture and Irrigation" — and normalising titles to
   * include the state would falsify the official name. Jurisdiction is the
   * property that actually has to be right.
   */
  const cases: [string, string][] = [
    ['Texas department of agriculture', 'Texas'],
    ['California department of food and agriculture', 'California'],
    ['Wisconsin agriculture trade consumer protection', 'Wisconsin'],
    ['Alberta agriculture and irrigation', 'Alberta'],
    ['Queensland primary industries', 'Queensland'],
  ];

  it('returns the exact-jurisdiction authority first, not a national one', () => {
    for (const [query, jurisdiction] of cases) {
      const top = find(query)[0];
      expect(top, query).toBeDefined();
      expect(top!.doc.type, query).toBe('agricultural-authority');
      expect(top!.doc.parent, query).toBe(jurisdiction);
    }
  });

  it('does not let a neighbouring jurisdiction win', () => {
    // "South Dakota" and "North Dakota" share a token; the wrong one winning
    // is a realistic and damaging failure.
    const top = find('South Dakota agriculture natural resources')[0];
    expect(top!.doc.title.toLowerCase()).toContain('south dakota');
    expect(top!.doc.title.toLowerCase()).not.toContain('north dakota');
  });

  it('resolves a former name to the current body, not a duplicate', () => {
    const top = find('Queensland department of agriculture and fisheries')[0];
    expect(top!.doc.title.toLowerCase()).toContain('primary industries');
  });

  it('carries at least 30 authority benchmark cases', () => {
    const authCases = BENCHMARKS.filter((b) =>
      (b.types ?? []).includes('agricultural-authority'),
    );
    expect(authCases.length).toBeGreaterThanOrEqual(30);
  });
});

describe('Wave 4B — country authority views', () => {
  it('exposes a view for the United States, Canada and Australia', () => {
    expect(AUTHORITY_VIEW_COUNTRIES.map((c) => c.iso3).sort()).toEqual([
      'AUS',
      'CAN',
      'USA',
    ]);
  });

  it('puts each country view in the sitemap exactly once', () => {
    const paths = allRoutes().map((r) => r.path);
    for (const c of AUTHORITY_VIEW_COUNTRIES) {
      const p = countryAuthoritiesPath(c.slug);
      expect(paths.filter((x) => x === p).length, p).toBe(1);
    }
  });

  it('creates no duplicate canonical authority detail URL', () => {
    const paths = allRoutes().map((r) => r.path);
    const detail = paths.filter((p) =>
      /^\/agricultural-authorities\/.+/.test(p),
    );
    expect(new Set(detail).size).toBe(detail.length);
    expect(detail.length).toBe(publishedAuthorities().length);
  });

  it('keeps directory-only records out of the sitemap as detail routes', () => {
    const paths = new Set(allRoutes().map((r) => r.path));
    for (const a of AUTHORITIES.filter(
      (x) => x.profileDepth === 'directory-record',
    )) {
      expect(paths.has(authorityPath(a.slug)), a.id).toBe(false);
    }
  });

  it('covers jurisdictions that have no RegionProfile', () => {
    // The whole reason these views exist: a state with no rich profile still
    // needs a real HTML page listing its authority.
    const usJurisdictions = CANONICAL_JURISDICTIONS.filter(
      (j) => j.countryCode === 'USA',
    );
    expect(usJurisdictions.length).toBe(50);
    // Arizona has an authority but no RegionProfile — it must still be listed.
    const az = AUTHORITIES.find((a) => a.jurisdictionId === 'US-AZ');
    expect(az).toBeDefined();
    expect(AUTH_DOCS.some((d) => d.id === `authority:${az!.id}`)).toBe(true);
  });
});

describe('Wave 4B — no filter-URL SEO leakage', () => {
  it('puts no query-parameter URL in the route set', () => {
    for (const r of allRoutes()) {
      expect(r.path.includes('?'), r.path).toBe(false);
      expect(r.path.includes('&'), r.path).toBe(false);
    }
  });

  it('gives canonical jurisdictions no routes at all', () => {
    const paths = new Set(allRoutes().map((r) => r.path));
    for (const j of CANONICAL_JURISDICTIONS.slice(0, 20)) {
      expect(paths.has(`/jurisdictions/${j.slug}`), j.id).toBe(false);
      expect(paths.has(`/${j.slug}`), j.id).toBe(false);
    }
  });
});
