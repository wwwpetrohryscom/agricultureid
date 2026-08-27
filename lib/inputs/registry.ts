/**
 * Query layer over agricultural input authorisations.
 *
 * ## Substance names are matched exactly, or not at all
 *
 * Linking a French product to the EU approval of its active substance means
 * matching two registers' names. That is where this layer could most easily lie,
 * so the matcher is deliberately strict:
 *
 *  - the product's ISO name (the parenthetical E-Phy publishes) must equal an
 *    EU substance name exactly, OR
 *  - it must equal an EU name with a single trailing parenthetical removed
 *    ("Chloridazon (aka pyrazone)" → "Chloridazon"), and ONLY where that
 *    shortened form is unique across the EU list.
 *
 * The uniqueness condition is not decoration. Stripping parentheticals merges
 * eleven distinct paraffin oils that differ only by CAS number, and two Dicofol
 * entries that differ by purity — all with their own approval decisions. Those
 * are excluded from base-name matching.
 *
 * And nothing looser is allowed. `Fenoxaprop` is NOT approved in the EU while
 * `Fenoxaprop-P-ethyl` IS; a product listing `Fenoxaprop-P` sits between them
 * and is therefore left unlinked rather than assigned either status. Assigning
 * the wrong one would publish a false legal fact about a pesticide.
 */
import {
  euPesticideSnapshot,
  ephySnapshot,
  pmraSnapshot,
  apvmaSnapshot,
  type EphyProduct,
  type EuSubstanceRecord,
} from '@/lib/inputs/snapshot';
import { REGISTRIES } from '@/data/registries';
import type {
  AgriculturalInput,
  AuthorizationStatus,
  InputAuthorization,
} from '@/types/input';
import { CURRENT_AUTHORIZATION_STATUSES } from '@/types/input';

export const INPUTS_HUB_PATH = '/agricultural-inputs';
export const ACTIVE_SUBSTANCES_PATH = `${INPUTS_HUB_PATH}/active-substances`;
export const PRODUCTS_PATH = `${INPUTS_HUB_PATH}/products`;

/**
 * Navigational families for the product listing.
 *
 * Presentation only. Each row still shows the register's own function verbatim;
 * these families exist because 2,691 products in one page is 2.6 MB of markup,
 * and a reader looking for a fungicide should not download every fertiliser to
 * find one. Anything the register labels outside these families falls into
 * `other`, which is listed in full rather than dropped.
 */
export const PRODUCT_FAMILIES = [
  {
    slug: 'fertilising-materials',
    label: 'Fertilising materials, adjuvants and growth regulators',
    match:
      /(Matière fertilisante|Engrais|Amendement|Additif agronomique|Support de culture|Adjuvant|PLANT GROWTH REGULATOR|FERTILI|WETTING AGENT|SURFACTANT|SPREADER|PENETRANT|ANTITRANSPIRANT|SPROUT INHIBITOR|SOIL CONDITIONER)/i,
  },
  {
    slug: 'fungicides',
    label: 'Fungicides and bactericides',
    match:
      /(Fongicide|Préparation fongique|FUNGICIDE|MICROBIOCIDE|BACTERICIDE|SEED DRESSING)/i,
  },
  {
    slug: 'herbicides',
    label: 'Herbicides',
    match: /(Herbicide|HERBICIDE|DEFOLIANT|DESICCANT|ALGICIDE|MOSS)/i,
  },
  {
    slug: 'insecticides-and-acaricides',
    label: 'Insecticides, acaricides and vertebrate control',
    match:
      /(Insecticide|Acaricide|Attractif|Répulsif|Nématicide|Molluscicide|INSECTICIDE|ACARICIDE|MITICIDE|NEMATICIDE|MOLLUSCICIDE|REPELLENT|RODENTICIDE|VERTEBRATE POISON|AVICIDE|LAMPRICIDE|PISCICIDE)/i,
  },
  { slug: 'other', label: 'Other authorised products', match: /.^/ },
] as const;

export type ProductFamily = (typeof PRODUCT_FAMILIES)[number]['slug'];

export function productFamilyPath(slug: string): string {
  return `${PRODUCTS_PATH}/${slug}`;
}

/**
 * Jurisdictions with a product register, in listing order.
 *
 * Listings are keyed by JURISDICTION AND FAMILY together. One page per family
 * would mix French, Canadian and Australian authorisations into a single
 * table — exactly the confusion this layer exists to prevent — and would run to
 * several megabytes besides.
 */
export const PRODUCT_JURISDICTIONS = [
  { slug: 'france', countryCode: 'FRA', label: 'France' },
  { slug: 'canada', countryCode: 'CAN', label: 'Canada' },
  { slug: 'australia', countryCode: 'AUS', label: 'Australia' },
] as const;

export function productListingSlug(
  jurisdiction: string,
  family: string,
): string {
  return `${jurisdiction}-${family}`;
}

export function productListingPath(slug: string): string {
  return `${PRODUCTS_PATH}/${slug}`;
}

/** Parse a listing slug back into its jurisdiction and family. */
export function parseListingSlug(slug: string) {
  for (const j of PRODUCT_JURISDICTIONS) {
    if (!slug.startsWith(`${j.slug}-`)) continue;
    const rest = slug.slice(j.slug.length + 1);
    const family = PRODUCT_FAMILIES.find((f) => f.slug === rest);
    if (family) return { jurisdiction: j, family };
  }
  return null;
}

/** The family a register function belongs to. Unmatched functions go to other. */
export function familyOf(functionLabel: string): ProductFamily {
  for (const f of PRODUCT_FAMILIES) {
    if (f.slug !== 'other' && f.match.test(functionLabel)) return f.slug;
  }
  return 'other';
}

const slugify = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 80);

/** The ISO name E-Phy publishes in parentheses, or the whole string. */
export function isoNameOf(substanceString: string): string {
  const m = substanceString.match(/\(([^)]+)\)\s*$/);
  return (m ? m[1]! : substanceString).trim();
}

interface EuIndex {
  exact: Map<string, EuSubstanceRecord>;
  base: Map<string, EuSubstanceRecord>;
}

let EU_INDEX: EuIndex | null = null;
function euIndex(): EuIndex {
  if (EU_INDEX) return EU_INDEX;
  const snap = euPesticideSnapshot();
  const exact = new Map<string, EuSubstanceRecord>();
  const byBase = new Map<string, EuSubstanceRecord[]>();
  for (const r of snap?.records ?? []) {
    exact.set(r.name.toLowerCase(), r);
    const base = r.name
      .replace(/\s*\([^()]*\)\s*$/, '')
      .trim()
      .toLowerCase();
    byBase.set(base, [...(byBase.get(base) ?? []), r]);
  }
  const base = new Map<string, EuSubstanceRecord>();
  for (const [key, records] of byBase) {
    // Only an unambiguous shortening may be used, and never over an exact name.
    if (records.length === 1 && !exact.has(key)) base.set(key, records[0]!);
  }
  EU_INDEX = { exact, base };
  return EU_INDEX;
}

/** The EU approval record for a substance name, or undefined. Never fuzzy. */
export function euApprovalFor(
  substanceName: string,
): EuSubstanceRecord | undefined {
  const key = isoNameOf(substanceName).toLowerCase();
  const { exact, base } = euIndex();
  return exact.get(key) ?? base.get(key);
}

export function euSubstanceId(name: string): string {
  return `eu-as-${slugify(name)}`;
}
export function productInputId(amm: string): string {
  return `fr-amm-${amm}`;
}
export function pmraInputId(number: string): string {
  return `ca-pmra-${slugify(number)}`;
}
export function apvmaProductInputId(code: string): string {
  return `au-apvma-${slugify(code)}`;
}
export function apvmaSubstanceInputId(code: string): string {
  return `au-apvma-tg-${slugify(code)}`;
}

let INPUTS: AgriculturalInput[] | null = null;
let AUTHORIZATIONS: InputAuthorization[] | null = null;

function build(): void {
  if (INPUTS && AUTHORIZATIONS) return;
  const eu = euPesticideSnapshot();
  const fr = ephySnapshot();
  const inputs: AgriculturalInput[] = [];
  const auths: InputAuthorization[] = [];

  for (const r of eu?.records ?? []) {
    const id = euSubstanceId(r.name);
    inputs.push({
      id,
      name: r.name,
      inputType: 'active-substance',
      activeSubstanceNames: [],
      functions: [],
    });
    auths.push({
      id: `eu-${id}`,
      inputRef: id,
      scope: 'active-substance',
      supranationalJurisdiction: 'European Union',
      jurisdictionName: 'European Union',
      registryId: eu!.registryId,
      status: r.status as AuthorizationStatus,
      publishedStatus: r.publishedStatus,
      validUntil: r.validUntil ?? undefined,
      authorizedUses: [],
      sourceSnapshotId: eu!.snapshotId,
      sourceReferences: ['reg-eu-pesticides-database'],
      lastVerifiedAt: eu!.retrievedAt,
      limitations: eu!.limitations,
    });
  }

  for (const p of (fr?.products ?? []) as EphyProduct[]) {
    const id = productInputId(p.amm);
    inputs.push({
      id,
      name: p.name,
      inputType: (p.productType as AgriculturalInput['inputType']) ?? 'other',
      activeSubstanceNames: p.substances,
      holderName: p.holder || undefined,
      functions: p.functions,
    });
    auths.push({
      id: `fr-${p.amm}`,
      inputRef: id,
      scope: 'product',
      countryCode: fr!.countryCode,
      jurisdictionName: 'France',
      registryId: fr!.registryId,
      status: p.status as AuthorizationStatus,
      publishedStatus: p.publishedStatus,
      authorizationNumber: p.amm,
      validFrom: p.validFrom ?? undefined,
      validUntil: p.validUntil ?? undefined,
      authorizedUses: p.uses.map((u) => ({
        cropTerm: u.cropTerm,
        cropRef: u.cropRef ?? undefined,
        target: u.target,
        publishedState: u.state,
      })),
      sourceSnapshotId: fr!.snapshotId,
      sourceReferences: ['reg-anses-ephy'],
      lastVerifiedAt: fr!.retrievedAt,
      limitations: p.dateIncoherent
        ? [...fr!.limitations, fr!.dateIncoherenceRule]
        : fr!.limitations,
    });
  }

  // ---- Canada: PMRA product registrations -------------------------------
  const pmra = pmraSnapshot();
  for (const p of pmra?.products ?? []) {
    const id = pmraInputId(p.number);
    inputs.push({
      id,
      name: p.name,
      inputType: 'plant-protection-product',
      activeSubstanceNames: p.substances,
      holderName: p.holder ?? undefined,
      functions: p.functions,
    });
    auths.push({
      id: `ca-${p.number}`,
      inputRef: id,
      scope: 'product',
      countryCode: pmra!.countryCode,
      jurisdictionName: 'Canada',
      registryId: pmra!.registryId,
      status: p.status as AuthorizationStatus,
      publishedStatus: p.publishedStatus,
      authorizationNumber: p.number,
      validFrom: p.validFrom ?? undefined,
      validUntil: p.validUntil ?? undefined,
      marketingClass: p.marketingType ?? undefined,
      // Use sites and target pests are register vocabulary, never mapped: PMRA
      // terms are collective ("BERRY CROPS"), and expanding one into named
      // crops would invent authorisations that were never granted.
      authorizedUses: p.useSites.map((site, i) => ({
        cropTerm: site,
        target: p.targets[i] ?? '',
        publishedState: p.currency ?? p.publishedStatus,
      })),
      sourceSnapshotId: pmra!.snapshotId,
      sourceReferences: ['reg-health-canada-pesticide-label-search'],
      lastVerifiedAt: pmra!.retrievedAt,
      limitations: p.contradiction
        ? [...pmra!.limitations, pmra!.currencyRule]
        : pmra!.limitations,
    });
  }

  // ---- Australia: APVMA product registrations and constituent approvals --
  const apvma = apvmaSnapshot();
  for (const p of apvma?.products ?? []) {
    const id = apvmaProductInputId(p.number);
    inputs.push({
      id,
      name: p.name,
      inputType: 'plant-protection-product',
      activeSubstanceNames: p.substances,
      holderName: p.holder ?? undefined,
      functions: p.functions,
    });
    auths.push({
      id: `au-${p.number}`,
      inputRef: id,
      scope: 'product',
      countryCode: apvma!.countryCode,
      jurisdictionName: 'Australia',
      registryId: apvma!.registryId,
      status: p.status as AuthorizationStatus,
      publishedStatus: p.publishedStatus,
      authorizationNumber: p.number,
      validFrom: p.validFrom ?? undefined,
      validUntil: p.validUntil ?? undefined,
      authorizedUses: [],
      // State entries are register detail on ONE national decision, never
      // eight Australian authorisations.
      subNationalEntries: p.stateEntries.map((e) => ({
        jurisdiction: e.state,
        publishedCode: e.code,
      })),
      sourceSnapshotId: apvma!.snapshotId,
      sourceReferences: ['reg-apvma-pubcris'],
      lastVerifiedAt: apvma!.retrievedAt,
      limitations: [...apvma!.limitations, apvma!.renewalRule],
    });
  }
  for (const sub of apvma?.substances ?? []) {
    const id = apvmaSubstanceInputId(sub.number);
    inputs.push({
      id,
      name: sub.name,
      inputType: 'active-substance',
      activeSubstanceNames: [],
      functions: [],
    });
    auths.push({
      id: `au-tg-${sub.number}`,
      inputRef: id,
      scope: 'active-substance',
      countryCode: apvma!.countryCode,
      jurisdictionName: 'Australia',
      registryId: apvma!.registryId,
      status: sub.status as AuthorizationStatus,
      publishedStatus: sub.publishedStatus,
      validFrom: sub.validFrom ?? undefined,
      validUntil: sub.validUntil ?? undefined,
      authorizedUses: [],
      sourceSnapshotId: apvma!.snapshotId,
      sourceReferences: ['reg-apvma-pubcris'],
      lastVerifiedAt: apvma!.retrievedAt,
      limitations: [...apvma!.limitations, apvma!.renewalRule],
    });
  }

  INPUTS = inputs;
  AUTHORIZATIONS = auths;
}

export function allInputs(): AgriculturalInput[] {
  build();
  return INPUTS!;
}
export function allAuthorizations(): InputAuthorization[] {
  build();
  return AUTHORIZATIONS!;
}

export function activeSubstances(): AgriculturalInput[] {
  return allInputs().filter((i) => i.inputType === 'active-substance');
}
export function products(): AgriculturalInput[] {
  return allInputs().filter((i) => i.inputType !== 'active-substance');
}

export function isCurrent(a: InputAuthorization): boolean {
  return CURRENT_AUTHORIZATION_STATUSES.includes(a.status);
}

const BY_INPUT = () => {
  const m = new Map<string, InputAuthorization[]>();
  for (const a of allAuthorizations())
    m.set(a.inputRef, [...(m.get(a.inputRef) ?? []), a]);
  return m;
};
let BY_INPUT_CACHE: Map<string, InputAuthorization[]> | null = null;
export function authorizationsFor(inputId: string): InputAuthorization[] {
  BY_INPUT_CACHE ??= BY_INPUT();
  return BY_INPUT_CACHE.get(inputId) ?? [];
}

/** Currently authorised products whose register-recorded use names this crop. */
export function productsForCrop(cropSlug: string): {
  input: AgriculturalInput;
  authorization: InputAuthorization;
  uses: InputAuthorization['authorizedUses'];
}[] {
  const byId = new Map(allInputs().map((i) => [i.id, i]));
  const out: ReturnType<typeof productsForCrop> = [];
  for (const a of allAuthorizations()) {
    if (a.scope !== 'product' || !isCurrent(a)) continue;
    const uses = a.authorizedUses.filter((u) => u.cropRef === cropSlug);
    if (!uses.length) continue;
    const input = byId.get(a.inputRef);
    if (input) out.push({ input, authorization: a, uses });
  }
  return out.sort((x, y) => x.input.name.localeCompare(y.input.name));
}

/** Jurisdictions that publish a substance-level decision, in listing order. */
export const SUBSTANCE_JURISDICTIONS = [
  {
    slug: 'european-union',
    label: 'European Union',
    countryCode: null as string | null,
    instrument: 'EU approval of active substances',
  },
  {
    slug: 'australia',
    label: 'Australia',
    countryCode: 'AUS' as string | null,
    instrument: 'APVMA approval of active constituents',
  },
] as const;

export function substanceListingPath(slug: string): string {
  return `${ACTIVE_SUBSTANCES_PATH}/${slug}`;
}

/** Substance approvals for one jurisdiction, with their inputs. */
export function substancesInJurisdiction(slug: string): {
  input: AgriculturalInput;
  authorization: InputAuthorization;
}[] {
  const j = SUBSTANCE_JURISDICTIONS.find((x) => x.slug === slug);
  if (!j) return [];
  const byId = new Map(allInputs().map((i) => [i.id, i]));
  const out: { input: AgriculturalInput; authorization: InputAuthorization }[] =
    [];
  for (const a of allAuthorizations()) {
    if (a.scope !== 'active-substance') continue;
    if ((a.countryCode ?? null) !== j.countryCode) continue;
    const input = byId.get(a.inputRef);
    if (input) out.push({ input, authorization: a });
  }
  return out.sort((x, y) => x.input.name.localeCompare(y.input.name));
}

/** Rows for one page of a substance listing, 1-indexed. */
export function substancesInJurisdictionPage(
  slug: string,
  page: number,
): { input: AgriculturalInput; authorization: InputAuthorization }[] {
  const all = substancesInJurisdiction(slug);
  const start = (page - 1) * LISTING_PAGE_SIZE;
  return all.slice(start, start + LISTING_PAGE_SIZE);
}

export function substancePageCount(slug: string): number {
  return Math.max(
    1,
    Math.ceil(substancesInJurisdiction(slug).length / LISTING_PAGE_SIZE),
  );
}

export function substancePageSlug(slug: string, page: number): string {
  return page <= 1 ? slug : `${slug}-p${page}`;
}

export function parseSubstancePageSlug(
  pageSlug: string,
): { slug: string; page: number } | null {
  const known = SUBSTANCE_JURISDICTIONS.map((j) => j.slug);
  const m = pageSlug.match(/^(.*)-p(\d+)$/);
  if (m && known.includes(m[1] as never))
    return { slug: m[1]!, page: Number(m[2]) };
  return known.includes(pageSlug as never) ? { slug: pageSlug, page: 1 } : null;
}

/** Every substance listing PAGE that holds rows. */
export function presentSubstancePages(): {
  pageSlug: string;
  slug: string;
  page: number;
  pages: number;
  label: string;
  count: number;
}[] {
  const out: ReturnType<typeof presentSubstancePages> = [];
  for (const j of SUBSTANCE_JURISDICTIONS) {
    const pages = substancePageCount(j.slug);
    for (let page = 1; page <= pages; page += 1) {
      const count = substancesInJurisdictionPage(j.slug, page).length;
      if (count > 0)
        out.push({
          pageSlug: substancePageSlug(j.slug, page),
          slug: j.slug,
          page,
          pages,
          label: j.label,
          count,
        });
    }
  }
  return out;
}

/** Substance jurisdictions that actually hold records. */
export function presentSubstanceJurisdictions() {
  return SUBSTANCE_JURISDICTIONS.map((j) => ({
    ...j,
    count: substancesInJurisdiction(j.slug).length,
  })).filter((j) => j.count > 0);
}

/** Currently authorised products in one jurisdiction and family. */
export function productsInListing(slug: string): {
  input: AgriculturalInput;
  authorization: InputAuthorization;
}[] {
  const parsed = parseListingSlug(slug);
  if (!parsed) return [];
  const byId = new Map(allInputs().map((i) => [i.id, i]));
  const out: { input: AgriculturalInput; authorization: InputAuthorization }[] =
    [];
  for (const a of allAuthorizations()) {
    if (a.scope !== 'product' || !isCurrent(a)) continue;
    if (a.countryCode !== parsed.jurisdiction.countryCode) continue;
    const input = byId.get(a.inputRef);
    if (!input) continue;
    if (familyOf(input.functions.join(' ')) !== parsed.family.slug) continue;
    out.push({ input, authorization: a });
  }
  return out.sort((x, y) => x.input.name.localeCompare(y.input.name));
}

/**
 * Maximum rows on one listing page.
 *
 * Not a cap on data: every row is published, on a numbered page. A single
 * Australian herbicide table ran to 3,803 rows and 4.27 MB, most of it React
 * hydration payload — unusable on a phone. Splitting is disclosed on every
 * page and nothing is dropped, which is the difference between pagination and
 * a silent truncation.
 */
export const LISTING_PAGE_SIZE = 1200;

export function listingPageCount(slug: string): number {
  const n = productsInListing(slug).length;
  return Math.max(1, Math.ceil(n / LISTING_PAGE_SIZE));
}

/** Rows for one page of a listing, 1-indexed. */
export function productsInListingPage(
  slug: string,
  page: number,
): { input: AgriculturalInput; authorization: InputAuthorization }[] {
  const all = productsInListing(slug);
  const start = (page - 1) * LISTING_PAGE_SIZE;
  return all.slice(start, start + LISTING_PAGE_SIZE);
}

/** A listing page slug: the listing, plus a page number when it has several. */
export function listingPageSlug(slug: string, page: number): string {
  return page <= 1 ? slug : `${slug}-p${page}`;
}

/** Split a page slug back into its listing and page number. */
export function parseListingPageSlug(
  pageSlug: string,
): { slug: string; page: number } | null {
  const m = pageSlug.match(/^(.*)-p(\d+)$/);
  if (m) {
    const slug = m[1]!;
    const page = Number(m[2]);
    return parseListingSlug(slug) ? { slug, page } : null;
  }
  return parseListingSlug(pageSlug) ? { slug: pageSlug, page: 1 } : null;
}

/** Every listing PAGE that holds rows, so no empty page is ever built. */
export function presentListingPages(): {
  pageSlug: string;
  slug: string;
  page: number;
  pages: number;
  jurisdiction: string;
  familyLabel: string;
  count: number;
}[] {
  const out: ReturnType<typeof presentListingPages> = [];
  for (const l of presentListings()) {
    const pages = listingPageCount(l.slug);
    for (let page = 1; page <= pages; page += 1) {
      out.push({
        pageSlug: listingPageSlug(l.slug, page),
        slug: l.slug,
        page,
        pages,
        jurisdiction: l.jurisdiction,
        familyLabel: l.familyLabel,
        count: productsInListingPage(l.slug, page).length,
      });
    }
  }
  return out;
}

/** Listing slugs that actually hold products, so no empty page is ever built. */
export function presentListings(): {
  slug: string;
  jurisdiction: string;
  familyLabel: string;
  label: string;
  count: number;
}[] {
  const out: ReturnType<typeof presentListings> = [];
  for (const j of PRODUCT_JURISDICTIONS) {
    for (const f of PRODUCT_FAMILIES) {
      const slug = productListingSlug(j.slug, f.slug);
      const count = productsInListing(slug).length;
      if (count > 0)
        out.push({
          slug,
          jurisdiction: j.label,
          familyLabel: f.label,
          label: `${f.label} — ${j.label}`,
          count,
        });
    }
  }
  return out;
}

/** Crops any currently authorised product is recorded as covering. */
export function cropsWithAuthorizedProducts(): string[] {
  const out = new Set<string>();
  for (const a of allAuthorizations()) {
    if (a.scope !== 'product' || !isCurrent(a)) continue;
    for (const u of a.authorizedUses) if (u.cropRef) out.add(u.cropRef);
  }
  return [...out].sort();
}

/**
 * Authorities that operate the REGISTER a decision was read from — not the body
 * that granted it, which these registers do not publish per record. Derived,
 * never stored, following the jurisdiction and variety layers.
 */
export function registerAuthoritiesFor(a: InputAuthorization): string[] {
  const registry = REGISTRIES.find((r) => r.id === a.registryId);
  return [...(registry?.responsibleAuthorityIds ?? [])].sort();
}
