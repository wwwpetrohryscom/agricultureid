import { describe, expect, it } from 'vitest';
import { REGISTRIES } from '@/data/registries';
import { isPublishableRegistry, REGISTRY_TYPES } from '@/types/registry';
import {
  publishedRegistries,
  listedRegistries,
  publishedRegistryBySlug,
  registriesForAuthority,
  registryPath,
  REGISTRIES_HUB_PATH,
} from '@/lib/registries/registry';
import { AUTHORITIES } from '@/data/authorities';
import { SOURCE_MAP } from '@/lib/sources/registry';
import { allRoutes } from '@/lib/seo/routes';
import { buildSearchDocuments } from '@/lib/search/documents';

const EXPECTED_TOTAL = 37;
const EXPECTED_PUBLISHED = 25;
const DOCS = buildSearchDocuments();
const REG_DOCS = DOCS.filter((d) => d.type === 'agricultural-registry');

describe('registries — scale and identity', () => {
  it('holds the expected number of verified systems', () => {
    expect(REGISTRIES).toHaveLength(EXPECTED_TOTAL);
    expect(publishedRegistries()).toHaveLength(EXPECTED_PUBLISHED);
    expect(listedRegistries()).toHaveLength(EXPECTED_TOTAL);
  });

  it('has unique ids and slugs', () => {
    expect(new Set(REGISTRIES.map((r) => r.id)).size).toBe(EXPECTED_TOTAL);
    expect(new Set(REGISTRIES.map((r) => r.slug)).size).toBe(EXPECTED_TOTAL);
  });

  it('keeps one logical system per record — no two share an official URL', () => {
    // Splitting a search endpoint out as its own record would inflate the
    // corpus and misstate how many official systems exist.
    const urls = REGISTRIES.map((r) => r.officialUrl);
    expect(new Set(urls).size).toBe(urls.length);
  });

  it('uses HTTPS everywhere', () => {
    expect(REGISTRIES.length).toBe(EXPECTED_TOTAL);
    for (const r of REGISTRIES) {
      for (const u of [
        r.officialUrl,
        r.searchUrl,
        r.downloadUrl,
        r.apiUrl,
      ].filter(Boolean)) {
        expect(new URL(u as string).protocol, r.id).toBe('https:');
      }
    }
  });

  it('uses only the controlled registry-type vocabulary', () => {
    for (const r of REGISTRIES) {
      expect(REGISTRY_TYPES as readonly string[]).toContain(r.registryType);
    }
  });
});

describe('registries — access claims are never guessed', () => {
  it('never claims an API without an endpoint or documentation', () => {
    for (const r of REGISTRIES) {
      if (r.apiAvailable) {
        expect(Boolean(r.apiUrl || r.documentationUrl), r.id).toBe(true);
      }
    }
  });

  it('claims an API only where the operator documents one', () => {
    // For twenty-nine systems the honest value was false, including IP
    // Australia, whose search is served by a public JSON endpoint the register
    // was read through: an internal call a site makes is not an API its
    // operator documents. USDA's Soil Data Access is the other case — a public
    // query service with published schema documentation — so the assertion is
    // no longer "no record claims an API" but the rule underneath it: a record
    // that claims one must carry the documentation it was read from.
    for (const r of REGISTRIES) {
      if (!r.apiAvailable) continue;
      expect(r.apiUrl, r.id).toBeTruthy();
      expect(r.documentationUrl, r.id).toBeTruthy();
    }
    expect(
      REGISTRIES.filter((r) => r.apiAvailable)
        .map((r) => r.id)
        .sort(),
    ).toEqual([
      'noaa-ncei-climate-normals',
      'usda-nrcs-ssurgo',
      'usdm-drought-monitor',
    ]);
  });

  it('keeps accessType coherent with the capability flags', () => {
    for (const r of REGISTRIES) {
      if (r.accessType === 'public-search')
        expect(r.searchable, r.id).toBe(true);
      if (r.accessType === 'public-download')
        expect(r.downloadable, r.id).toBe(true);
      if (r.accessType === 'restricted') {
        expect(r.searchable || r.downloadable || r.apiAvailable, r.id).toBe(
          false,
        );
      }
      if (r.loginRequired) {
        expect(['restricted', 'mixed'], r.id).toContain(r.accessType);
      }
    }
  });

  it('states a cadence only where the operator documents one', () => {
    // For twenty-six systems the honest value was `unknown`, because none of
    // them said how often it updates. The UK gazette does say so — gov.uk calls
    // it "the monthly Seeds Gazette" — so the assertion is no longer "every
    // record says unknown" but the rule underneath it: a stated cadence must be
    // traceable to something on the record that says where it was read.
    for (const r of REGISTRIES) {
      if (r.updateFrequency === 'unknown') continue;
      const evidence = [
        r.coverageDescription ?? '',
        ...(r.limitations ?? []),
        ...r.verification.map((v) => v.evidenceNote),
      ]
        .join(' ')
        .toLowerCase();
      expect(evidence, r.id).toContain(r.updateFrequency.toLowerCase());
    }
    expect(
      REGISTRIES.filter((r) => r.updateFrequency !== 'unknown')
        .map((r) => r.id)
        .sort(),
    ).toEqual(['uk-variety-lists', 'usda-nrcs-ssurgo']);
  });

  it('marks login-gated operational systems as restricted, not public', () => {
    const traces = REGISTRIES.find((r) => r.id === 'eu-traces-nt')!;
    expect(traces.loginRequired).toBe(true);
    expect(traces.accessType).toBe('restricted');
    expect(traces.searchable).toBe(false);
  });
});

describe('registries — provenance and linkage', () => {
  it('cites a real source and a dated verification for every record', () => {
    for (const r of REGISTRIES) {
      expect(r.sourceReferences.length, r.id).toBeGreaterThan(0);
      for (const sid of r.sourceReferences)
        expect(SOURCE_MAP.has(sid), sid).toBe(true);
      expect(r.verification.length, r.id).toBeGreaterThan(0);
      for (const v of r.verification) {
        expect(v.verifiedAt, r.id).toMatch(/^\d{4}-\d{2}-\d{2}$/);
        expect(v.evidenceNote.length, r.id).toBeGreaterThan(20);
      }
    }
  });

  it('resolves every responsible authority id against the authority registry', () => {
    const ids = new Set(AUTHORITIES.map((a) => a.id));
    let checked = 0;
    for (const r of REGISTRIES) {
      for (const aid of r.responsibleAuthorityIds) {
        expect(ids.has(aid), `${r.id} → ${aid}`).toBe(true);
        checked++;
      }
    }
    expect(checked).toBeGreaterThan(0);
  });

  it('states a specific scope, never a vague one', () => {
    for (const r of REGISTRIES) {
      expect(r.scope.length, r.id).toBeGreaterThan(0);
      for (const s of r.scope) {
        expect(s.length, `${r.id}: "${s}"`).toBeGreaterThan(11);
        expect(/^agricultural (data|database)$/i.test(s), r.id).toBe(false);
      }
    }
  });

  it('surfaces an authority page link only from the registry data', () => {
    // registriesForAuthority is the single seam; a hardcoded link on an
    // authority page would not appear here and would go stale on rename.
    const cfia = registriesForAuthority('can-cfia');
    expect(cfia.map((r) => r.id)).toContain('cfia-variety-registration');
    expect(registriesForAuthority('does-not-exist')).toHaveLength(0);
  });
});

describe('registries — routing and sitemap', () => {
  it('gives every published registry exactly one detail route', () => {
    const paths = allRoutes().map((p) => p.path);
    const detail = paths.filter((p) =>
      /^\/agricultural-registries\/.+/.test(p),
    );
    expect(new Set(detail).size).toBe(detail.length);
    expect(detail.length).toBe(EXPECTED_PUBLISHED);
    expect(paths).toContain(REGISTRIES_HUB_PATH);
  });

  it('keeps directory-only records out of the sitemap', () => {
    const paths = new Set(allRoutes().map((p) => p.path));
    for (const r of REGISTRIES.filter((x) => !isPublishableRegistry(x))) {
      expect(paths.has(registryPath(r.slug)), r.id).toBe(false);
      expect(publishedRegistryBySlug(r.slug), r.id).toBeUndefined();
    }
  });
});

describe('registries — search integration', () => {
  it('indexes every listed system, registry-driven', () => {
    expect(REG_DOCS.length).toBe(listedRegistries().length);
    for (const r of listedRegistries()) {
      expect(
        REG_DOCS.some((d) => d.id === `registry:${r.id}`),
        r.id,
      ).toBe(true);
    }
  });

  it('never routes a directory-only system to a page it does not have', () => {
    const routes = new Set(allRoutes().map((p) => p.path));
    for (const r of REGISTRIES.filter((x) => !isPublishableRegistry(x))) {
      const doc = REG_DOCS.find((d) => d.id === `registry:${r.id}`);
      if (!doc) continue;
      expect(doc.route, r.id).not.toBe(registryPath(r.slug));
      expect(routes.has(doc.route), `${r.id} → ${doc.route}`).toBe(true);
    }
  });

  it('ships no verification or provenance into the client index', () => {
    const blob = JSON.stringify(REG_DOCS);
    for (const leak of [
      'evidenceNote',
      'verifiedAt',
      'sourceReferences',
      'lastVerifiedAt',
    ]) {
      expect(blob.includes(leak), leak).toBe(false);
    }
  });
});
