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
  PRODUCT_FAMILIES,
  productsInFamily,
  productFamilyPath,
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
  it('gives substance approvals no holder, number or use', () => {
    const substanceAuths = AUTHS.filter((a) => a.scope === 'active-substance');
    expect(substanceAuths.length).toBeGreaterThan(0);
    const byId = new Map(INPUTS.map((i) => [i.id, i]));
    for (const a of substanceAuths) {
      expect(a.authorizationNumber, a.id).toBeUndefined();
      expect(a.authorizedUses, a.id).toHaveLength(0);
      expect(a.countryCode, a.id).toBeUndefined();
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
    // 16,623 records must not become 16,623 pages. The only sub-routes are the
    // two listings and one page per product family, each a substantive listing
    // of hundreds of products rather than a slice made to create URLs.
    const paths = allRoutes().map((r) => r.path);
    for (const p of [INPUTS_HUB_PATH, ACTIVE_SUBSTANCES_PATH, PRODUCTS_PATH])
      expect(paths).toContain(p);
    const families = PRODUCT_FAMILIES.filter(
      (f) => productsInFamily(f.slug).length > 0,
    );
    const sub = paths.filter((p) => p.startsWith(`${INPUTS_HUB_PATH}/`));
    expect(sub).toHaveLength(2 + families.length);
    for (const f of families) expect(sub).toContain(productFamilyPath(f.slug));
    // Every family listing is substantial; none is a thin slice.
    for (const f of families)
      expect(productsInFamily(f.slug).length).toBeGreaterThan(100);
  });

  it('indexes three documents, not one per record', () => {
    const docs = DOCS.filter((d) => d.type === 'input-authorization');
    expect(docs).toHaveLength(3);
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
