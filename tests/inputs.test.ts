import { describe, expect, it } from 'vitest';
import {
  allInputs,
  allAuthorizations,
  activeSubstances,
  products,
  isCurrent,
  euApprovalFor,
  isoNameOf,
  productsForCrop,
  cropsWithAuthorizedProducts,
  presentListings,
  presentListingPages,
  presentSubstancePages,
  productsInListing,
  productListingPath,
  presentSubstanceJurisdictions,
  PRODUCT_JURISDICTIONS,
  registerAuthoritiesFor,
  INPUTS_HUB_PATH,
  ACTIVE_SUBSTANCES_PATH,
  PRODUCTS_PATH,
} from '@/lib/inputs/registry';
import { euPesticideSnapshot, ephySnapshot } from '@/lib/inputs/snapshot';
import {
  AUTHORIZATION_STATUSES,
  CURRENT_AUTHORIZATION_STATUSES,
  INPUT_TYPES,
} from '@/types/input';
import { REGISTRIES } from '@/data/registries';
import { SOURCE_MAP } from '@/lib/sources/registry';
import { PUBLISHED_CONTENT } from '@/lib/content/registry';
import { allRoutes } from '@/lib/seo/routes';
import { buildSearchDocuments } from '@/lib/search/documents';

const AUTHS = allAuthorizations();
const INPUTS = allInputs();
const DOCS = buildSearchDocuments();
const CROPS = new Set(
  PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop').map((c) => c.slug),
);
/** Any number followed by an application unit. */
const DOSE =
  /\b\d+([.,]\d+)?\s*(l\/ha|kg\/ha|g\/ha|ml\/ha|l\/hl|g\/l|kg\/l)\b/i;

describe('inputs — a substance is not a product', () => {
  it('gives substance approvals no product number and no uses', () => {
    // Note what is NOT asserted here: that a substance approval has no country.
    // The EU approves substances supranationally, but APVMA grants Australian
    // active constituent approvals, so the jurisdiction LEVEL is a property of
    // the source and is checked per source below, not assumed for the scope.
    const substanceAuths = AUTHS.filter((a) => a.scope === 'active-substance');
    expect(substanceAuths.length).toBeGreaterThan(0);
    const byId = new Map(INPUTS.map((i) => [i.id, i]));
    for (const a of substanceAuths) {
      expect(a.authorizationNumber, a.id).toBeUndefined();
      expect(a.authorizedUses, a.id).toHaveLength(0);
      expect(byId.get(a.inputRef)?.holderName, a.id).toBeUndefined();
    }
  });

  it('gives every product authorisation a number and a country', () => {
    const productAuths = AUTHS.filter((a) => a.scope === 'product');
    expect(productAuths.length).toBeGreaterThan(0);
    for (const a of productAuths) {
      expect(a.authorizationNumber, a.id).toBeTruthy();
      expect(a.countryCode, a.id).toBeTruthy();
      expect(a.supranationalJurisdiction, a.id).toBeUndefined();
    }
  });

  it('never sources a product authorisation from the substance list', () => {
    const euId = euPesticideSnapshot()?.snapshotId;
    for (const a of AUTHS.filter((x) => x.scope === 'product')) {
      expect(a.sourceSnapshotId, a.id).not.toBe(euId);
    }
  });

  it('links a product substance to the EU only on an exact name', () => {
    // Fenoxaprop is not approved; Fenoxaprop-P-ethyl is. A product listing
    // "Fenoxaprop-P" must be linked to neither rather than to whichever sorts
    // first — that would publish a false legal fact about a pesticide.
    expect(euApprovalFor('Fenoxaprop-P')).toBeUndefined();
    expect(euApprovalFor('glyphosate (Glyphosate)')?.name).toBe('Glyphosate');
    expect(isoNameOf('diméthoate (Dimethoate)')).toBe('Dimethoate');
  });
});

describe('inputs — one decision, one jurisdiction', () => {
  it('never names a country and a supranational body together', () => {
    for (const a of AUTHS) {
      expect(
        Boolean(a.countryCode) !== Boolean(a.supranationalJurisdiction),
        a.id,
      ).toBe(true);
      expect(a.jurisdictionName, a.id).toBeTruthy();
    }
  });

  it('reads every decision from a Wave 5 registry', () => {
    const ids = new Set(REGISTRIES.map((r) => r.id));
    for (const a of AUTHS) {
      expect(ids.has(a.registryId), a.registryId).toBe(true);
      expect(a.sourceReferences.length, a.id).toBeGreaterThan(0);
      for (const s of a.sourceReferences)
        expect(SOURCE_MAP.has(s), s).toBe(true);
    }
    const fr = AUTHS.find((a) => a.scope === 'product')!;
    expect(registerAuthoritiesFor(fr)).toContain('fr-masa');
  });
});

describe('inputs — status is the register’s, and withdrawal is visible', () => {
  it('agrees with the register wording through the snapshot mapping', () => {
    const eu = euPesticideSnapshot()!;
    const fr = ephySnapshot()!;
    for (const a of AUTHS) {
      expect(AUTHORIZATION_STATUSES, a.id).toContain(a.status);
      const map =
        a.scope === 'active-substance' ? eu.statusMapping : fr.statusMapping;
      const mapped = map[a.publishedStatus];
      if (mapped) expect(mapped, a.id).toBe(a.status);
    }
  });

  it('counts only authorised and restricted as in force', () => {
    for (const a of AUTHS) {
      expect(isCurrent(a), a.id).toBe(
        CURRENT_AUTHORIZATION_STATUSES.includes(a.status),
      );
    }
    const withdrawn = AUTHS.filter((a) => a.status === 'withdrawn');
    expect(withdrawn.length).toBeGreaterThan(0);
    for (const a of withdrawn) expect(isCurrent(a), a.id).toBe(false);
  });

  it('keeps not-approved distinct from withdrawn', () => {
    // Approval refused is not approval revoked; flattening them would rewrite
    // a substance's history.
    const notApproved = AUTHS.filter((a) => a.status === 'not-approved');
    expect(notApproved.length).toBeGreaterThan(0);
    for (const a of notApproved) expect(a.scope).toBe('active-substance');
  });

  it('discloses every contradictory date pair rather than repairing it', () => {
    for (const a of AUTHS) {
      if (!a.validFrom || !a.validUntil) continue;
      if (a.validUntil >= a.validFrom) continue;
      expect(isCurrent(a), a.id).toBe(false);
      expect(
        a.limitations.some((l) => /withdrawal date precedes/i.test(l)),
        a.id,
      ).toBe(true);
    }
  });
});

describe('inputs — scope is recorded, never inflated', () => {
  it('maps a crop only where the reviewed concordance maps that term', () => {
    const map = ephySnapshot()!.cropMap;
    for (const a of AUTHS) {
      for (const u of a.authorizedUses) {
        if (!u.cropRef) continue;
        expect(CROPS.has(u.cropRef), u.cropRef).toBe(true);
        expect(map[u.cropTerm], u.cropTerm).toBe(u.cropRef);
      }
    }
  });

  it('leaves collective register terms unmapped', () => {
    // "Fruits à pépins" is apples AND pears; expanding it invents an
    // authorisation that was never granted.
    const map = ephySnapshot()!.cropMap;
    for (const term of [
      'Fruits à pépins',
      'Tomate - Aubergine',
      'Pêcher - Abricotier',
      'Crucifères oléagineuses',
      'Céréales',
    ]) {
      expect(map[term], term).toBeUndefined();
    }
    expect(
      Object.keys(ephySnapshot()!.unmappedCropTerms).length,
    ).toBeGreaterThan(20);
  });
});

describe('inputs — no dose data anywhere', () => {
  it('carries no application rate in any stored field', () => {
    for (const i of INPUTS) {
      for (const s of i.activeSubstanceNames)
        expect(DOSE.test(s), i.id).toBe(false);
      for (const f of i.functions) expect(DOSE.test(f), i.id).toBe(false);
    }
    for (const a of AUTHS) {
      for (const u of a.authorizedUses) {
        expect(DOSE.test(u.target), a.id).toBe(false);
        expect(DOSE.test(u.cropTerm), a.id).toBe(false);
      }
    }
  });
});

describe('inputs — routes, search and query layer', () => {
  it('publishes listing routes and none per substance or product', () => {
    // 45,000 records must not become 45,000 pages. The only sub-routes are the
    // two index pages and one listing per jurisdiction-and-family.
    const paths = allRoutes().map((r) => r.path);
    for (const p of [INPUTS_HUB_PATH, ACTIVE_SUBSTANCES_PATH, PRODUCTS_PATH])
      expect(paths).toContain(p);
    const listings = presentListings();
    const sub = paths.filter((p) => p.startsWith(`${INPUTS_HUB_PATH}/`));
    // Two index pages, one page per listing page, and one page per substance
    // listing page. Nothing per record.
    expect(sub).toHaveLength(
      2 + presentListingPages().length + presentSubstancePages().length,
    );
    for (const l of presentListingPages())
      expect(sub).toContain(productListingPath(l.pageSlug));
    for (const l of listings)
      expect(productsInListing(l.slug).length).toBeGreaterThan(0);
  });

  it('keeps every listing inside exactly one jurisdiction', () => {
    // A listing that mixed two registers into one table would read as though a
    // product authorised in France were authorised in Canada.
    for (const l of presentListings()) {
      const codes = new Set(
        productsInListing(l.slug).map((r) => r.authorization.countryCode),
      );
      expect(codes.size, l.slug).toBe(1);
      const expected = PRODUCT_JURISDICTIONS.find(
        (j) => j.label === l.jurisdiction,
      )!.countryCode;
      expect([...codes][0], l.slug).toBe(expected);
    }
  });

  it('indexes one document per listing, not one per record', () => {
    // 43,591 records route to 18 pages; 43,591 documents would be the same
    // handful of pages returned tens of thousands of times.
    const docs = DOCS.filter((d) => d.type === 'input-authorization');
    expect(docs).toHaveLength(
      3 + presentListings().length + presentSubstanceJurisdictions().length,
    );
    for (const l of presentListings()) {
      const doc = docs.find((d) => d.route === productListingPath(l.slug))!;
      expect(doc, l.slug).toBeDefined();
      // The jurisdiction must be on the document, or a reader asking about one
      // register can be shown another.
      expect(doc.title).toContain(l.jurisdiction);
    }
  });

  it('uses only the input-type vocabulary', () => {
    for (const i of INPUTS) expect(INPUT_TYPES, i.id).toContain(i.inputType);
    expect(activeSubstances().length + products().length).toBe(INPUTS.length);
  });

  it('returns authorised products for a mapped crop only', () => {
    const wheat = productsForCrop('wheat');
    expect(wheat.length).toBeGreaterThan(0);
    for (const m of wheat) {
      expect(isCurrent(m.authorization)).toBe(true);
      expect(m.uses.every((u) => u.cropRef === 'wheat')).toBe(true);
    }
    expect(productsForCrop('not-a-crop')).toEqual([]);
    expect(cropsWithAuthorizedProducts().every((c) => CROPS.has(c))).toBe(true);
  });
});

describe('inputs — jurisdiction isolation across registers', () => {
  it('sources every record from the register that covers its country', () => {
    const expected: Record<string, string | null> = {
      'eu-pesticides-active-substances-2026-08-27': null,
      'ephy-2026-08-25': 'FRA',
      'pmra-products-2026-08-27': 'CAN',
      'apvma-pubcris-2026-06-25': 'AUS',
    };
    for (const a of AUTHS) {
      const want = expected[a.sourceSnapshotId];
      expect(
        want,
        `unknown snapshot ${a.sourceSnapshotId}`,
      ).not.toBeUndefined();
      if (want === null) {
        expect(a.countryCode, a.id).toBeUndefined();
        expect(a.supranationalJurisdiction, a.id).toBeTruthy();
      } else {
        expect(a.countryCode, a.id).toBe(want);
        expect(a.supranationalJurisdiction, a.id).toBeUndefined();
      }
    }
  });

  it('lets a substance approval be national where the source is national', () => {
    // APVMA grants Australian active constituent approvals. An earlier gate
    // asserted every substance approval was an EU decision and rejected 5,829
    // valid records; the invariant is now pinned per source.
    const au = AUTHS.filter(
      (a) => a.scope === 'active-substance' && a.countryCode === 'AUS',
    );
    expect(au.length).toBeGreaterThan(1000);
    for (const a of au)
      expect(a.supranationalJurisdiction, a.id).toBeUndefined();
    const eu = AUTHS.filter(
      (a) => a.scope === 'active-substance' && a.supranationalJurisdiction,
    );
    expect(eu.length).toBeGreaterThan(1000);
    for (const a of eu) expect(a.countryCode, a.id).toBeUndefined();
  });

  it('keeps Australian state entries as detail, never authorisations', () => {
    const withStates = AUTHS.filter((a) => a.subNationalEntries?.length);
    expect(withStates.length).toBeGreaterThan(1000);
    const ids = new Set(AUTHS.map((a) => a.id));
    for (const a of withStates) {
      expect(a.scope, a.id).toBe('product');
      expect(a.countryCode, a.id).toBe('AUS');
      for (const e of a.subNationalEntries!) {
        expect(ids.has(`${a.id}:${e.jurisdiction}`), a.id).toBe(false);
      }
    }
  });

  it('never derives an Australian status from a date', () => {
    // APVMA registrations renew annually, so most current products carry an
    // expiry already in the past. Comparing that date with today would mark
    // thousands of live registrations as lapsed.
    const au = AUTHS.filter(
      (a) => a.countryCode === 'AUS' && a.scope === 'product',
    );
    const pastExpiry = au.filter(
      (a) => a.validUntil && a.validUntil < '2026-08-27',
    );
    expect(pastExpiry.length).toBeGreaterThan(1000);
    for (const a of pastExpiry) {
      expect(['authorized', 'restricted'], a.id).toContain(a.status);
      expect(
        a.limitations.some((l) => /annual renewal cycle/i.test(l)),
        a.id,
      ).toBe(true);
    }
  });

  it('carries no crop reference from a register with no concordance', () => {
    for (const a of AUTHS) {
      if (a.sourceSnapshotId === 'ephy-2026-08-25') continue;
      for (const u of a.authorizedUses) expect(u.cropRef, a.id).toBeUndefined();
    }
  });
});
