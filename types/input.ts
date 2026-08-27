/**
 * Agricultural inputs — WHAT IS AUTHORISED, never how to apply it.
 *
 * ## The three things this layer keeps apart
 *
 *   An ACTIVE SUBSTANCE      glyphosate
 *   A PRODUCT                a named formulation containing glyphosate
 *   An AUTHORISATION         a decision about one of those, in one place
 *
 * These are separate objects because the decisions are separate. The European
 * Union approves active substances; Member States authorise products. An
 * approved substance may have no authorised product in a given country, and a
 * product may be withdrawn while its substance remains approved. A single
 * `approved: true` anywhere in this model would have to pick one jurisdiction
 * and one legal object, and would be wrong about both everywhere else.
 *
 * `not-approved` is therefore distinct from `withdrawn`: approval refused or
 * never granted is not the same fact as approval revoked after being held, and
 * flattening the two would rewrite a substance's history.
 *
 * ## Identity is the authorisation number, never the name
 *
 * Product names collide across holders, countries and decades. Identity here is
 * the register's own number (a French AMM number, for instance) plus the
 * register it came from. Nothing is deduplicated by name.
 *
 * ## The holder is read, never inferred
 *
 * {@link AgriculturalInput.holderName} comes from the register's holder field.
 * No manufacturer is inferred from a brand, a website or a product name.
 *
 * ## Scope is recorded as the register writes it
 *
 * A register's use scope is often a collective label — "Fruits à pépins" covers
 * apples AND pears, "Tomate - Aubergine" covers two crops in one entry. Those
 * are stored verbatim and left unmapped. A crop reference is attached only where
 * a term denotes exactly one corpus crop, because turning "cereals" into wheat,
 * barley, rye and oats invents four authorisations from one.
 *
 * ## What this layer will not do
 *
 * Doses, application rates, treatment intervals and buffer distances exist in
 * these registers and are deliberately not ingested. A rate separated from its
 * label, crop stage, equipment and local conditions is not information, it is a
 * hazard. This layer says what is authorised and links to the official label.
 */

/** What kind of input a record describes. */
export const INPUT_TYPES = [
  'active-substance',
  'plant-protection-product',
  'fertilising-material',
  'adjuvant',
  'mixed-product',
  'tank-mixture',
  'other',
] as const;
export type InputType = (typeof INPUT_TYPES)[number];

/** The standing of one authorisation decision. */
export const AUTHORIZATION_STATUSES = [
  /** Currently authorised by the register. */
  'authorized',
  /** Authorised subject to restrictions the register records. */
  'restricted',
  /** Approval refused, or never granted. NOT the same as withdrawn. */
  'not-approved',
  /** Authorised once, then revoked or surrendered. */
  'withdrawn',
  /** Ran its term and lapsed. */
  'expired',
  /** Applied for, not decided. Not an authorisation. */
  'pending',
  'uncertain',
] as const;
export type AuthorizationStatus = (typeof AUTHORIZATION_STATUSES)[number];

/** Statuses under which an input may currently be placed on the market. */
export const CURRENT_AUTHORIZATION_STATUSES: readonly AuthorizationStatus[] = [
  'authorized',
  'restricted',
];

/** Whether a decision concerns a substance or a specific product. */
export const AUTHORIZATION_SCOPES = ['active-substance', 'product'] as const;
export type AuthorizationScope = (typeof AUTHORIZATION_SCOPES)[number];

export interface AgriculturalInput {
  id: string;
  /** The register's own name for the substance or product. */
  name: string;
  inputType: InputType;
  /** CAS number where the register publishes one. */
  casNumber?: string;
  /**
   * Active substances this product contains, by NAME as the register writes
   * them. Empty for an active-substance record, which is one itself.
   */
  activeSubstanceNames: string[];
  /** Authorisation holder, from the register's own field. Never inferred. */
  holderName?: string;
  /** Functions the register assigns, e.g. Herbicide, Fongicide. Verbatim. */
  functions: string[];
}

/** One authorised use, exactly as the register expresses it. */
export interface AuthorizedUse {
  /** The register's own crop or situation term. Never normalised. */
  cropTerm: string;
  /** Corpus crop slug, present ONLY when the term denotes exactly one crop. */
  cropRef?: string;
  /** The register's own target term (pest, disease, weed). */
  target: string;
  /** The register's state for this particular use. */
  publishedState: string;
}

export interface InputAuthorization {
  id: string;
  /** The input this decision is about. */
  inputRef: string;
  scope: AuthorizationScope;

  countryCode?: string;
  jurisdictionId?: string;
  /** e.g. "European Union", for a decision taken above the national level. */
  supranationalJurisdiction?: string;
  jurisdictionName: string;

  /** Wave 5 registry this was read from. Never a hardcoded URL. */
  registryId: string;
  /** Authorities responsible, derived from the registry, never stored. */

  status: AuthorizationStatus;
  /** The register's own wording for the status. */
  publishedStatus: string;
  /** The register's identifier for the decision, e.g. a French AMM number. */
  authorizationNumber?: string;

  validFrom?: string;
  validUntil?: string;

  /** Uses the register authorises. Empty when the register publishes none. */
  authorizedUses: AuthorizedUse[];

  sourceSnapshotId: string;
  sourceReferences: string[];
  lastVerifiedAt: string;
  limitations: string[];
}

/** Shown wherever authorisation status is displayed. */
export const INPUT_CAVEAT =
  'Authorisation is specific to one jurisdiction, one legal object and one moment. It is not a recommendation, and it says nothing about how a product may be used: always read the current official label at the source before acting.';

/** Shown wherever a substance approval appears next to product records. */
export const SUBSTANCE_PRODUCT_CAVEAT =
  'Approval of an active substance is not authorisation of any product containing it, and a product authorised in one country is not authorised in another. The two decisions are made by different authorities under different law.';

/** Shown wherever use scope appears. */
export const USE_SCOPE_CAVEAT =
  'Use scope is recorded as the register writes it. Collective terms cover several crops at once and are left unmapped rather than expanded, because expanding one entry into several would invent authorisations that were never granted.';
