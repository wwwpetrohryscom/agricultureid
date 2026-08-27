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
    label: 'Fertilising materials and amendments',
    match:
      /^(Matière fertilisante|Engrais|Amendement|Additif agronomique|Support de culture)/i,
  },
  {
    slug: 'fungicides',
    label: 'Fungicides',
    match:
      /^(Fongicide|Préparation fongique|Adjuvant pour bouillie fongicide)/i,
  },
  {
    slug: 'herbicides',
    label: 'Herbicides',
    match: /^(Herbicide|Adjuvant pour bouillie herbicide)/i,
  },
  {
    slug: 'insecticides-and-acaricides',
    label: 'Insecticides, acaricides and related',
    match:
      /^(Insecticide|Acaricide|Attractif|Répulsif|Nématicide|Molluscicide)/i,
  },
  { slug: 'other', label: 'Other authorised products', match: /.^/ },
] as const;

export type ProductFamily = (typeof PRODUCT_FAMILIES)[number]['slug'];

export function productFamilyPath(slug: string): string {
  return `${PRODUCTS_PATH}/${slug}`;
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

/** Currently authorised product authorisations in one navigational family. */
export function productsInFamily(family: string): {
  input: AgriculturalInput;
  authorization: InputAuthorization;
}[] {
  const byId = new Map(allInputs().map((i) => [i.id, i]));
  const out: ReturnType<typeof productsInFamily> = [];
  for (const a of allAuthorizations()) {
    if (a.scope !== 'product' || !isCurrent(a)) continue;
    const input = byId.get(a.inputRef);
    if (!input) continue;
    if (familyOf(input.functions[0] ?? '') !== family) continue;
    out.push({ input, authorization: a });
  }
  return out.sort((x, y) => x.input.name.localeCompare(y.input.name));
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
