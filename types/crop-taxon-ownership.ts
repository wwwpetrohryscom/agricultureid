/**
 * Wave 43 — who owns the scope a group of crop pages shares.
 *
 * ## The problem this layer is for
 *
 * The corpus publishes cultivar-group pages: cabbage is a cultivar group of
 * Brassica oleracea, grapefruit is one of Citrus × aurantium, sugar beet is one
 * of Beta vulgaris. Each such page inherits facts from its parent taxon — the
 * clubroot that constrains every Brassica, the hybrid history that explains why
 * three citrus pages share a Latin name — and none of them is the right place
 * to state those facts, because they are not that crop's facts.
 *
 * Wave 41 found this from one side: nine pages were covering more than they
 * declared. Wave 43 found the other side by computing it. Six parent taxa carry
 * two or more crop identities in this corpus and NOTHING owned any of them, and
 * two of the six were blocking real crops from being published — mandarin
 * waiting on Citrus, turnip and swede waiting on Brassica.
 *
 * ## Why ownership is a record and not always a page
 *
 * The obvious fix is a page per parent taxon, and it is the wrong fix. A page
 * has to earn a reader, and "Beta vulgaris" earns nobody: the crops under it
 * are sugar beet, beetroot and chard, and a reader looking for any of them
 * wants that page. Citrus is the opposite — "citrus" is a word people use, the
 * hybrid structure genuinely needs explaining, and a page pays for itself.
 *
 * So ownership names an owner and states what kind of owner it is. What the
 * validator enforces is not that a page exists but that exactly one thing owns
 * each parent, that it knows its children, and that concept-level evidence
 * attached to the parent does not silently become the children's.
 */

export const OWNER_KINDS = [
  /** A published concept page whose declared scope covers the parent taxon. */
  'crop-concept',
  /** A published crop page for the parent taxon itself. */
  'species-page',
  /**
   * A record, with no page. The parent taxon has no reader-facing name worth a
   * URL, and the scope is stated here instead.
   */
  'taxon-scope-record',
] as const;
export type OwnerKind = (typeof OWNER_KINDS)[number];

export const OWNER_KIND_MEANING: Record<OwnerKind, string> = {
  'crop-concept':
    'A published concept page carries the scope, and its concept record lists the children as constituents. The validator checks that list rather than trusting this one.',
  'species-page':
    'The parent taxon has a crop page of its own, and that page carries the shared scope.',
  'taxon-scope-record':
    'Nothing publishes the parent taxon, and nothing should. The scope is stated in this record, which is where anything downstream should read it from.',
};

export interface TaxonScopeOwnership {
  /** The parent taxon, exactly as the authorities give it. */
  parentTaxon: string;
  ownerKind: OwnerKind;
  /**
   * The slug that owns it — a published crop, or the parent taxon itself for a
   * record with no page, in which case this is a stable identifier and not a
   * route.
   */
  ownerSlug: string;
  /** Why this owner, and why not a page if there is none. */
  rationale: string;
  /**
   * Children with their own crop page. Recomputed by the validator from the
   * identity layer, so promoting a child without updating this record fails.
   */
  publishedChildren: readonly string[];
  /** Children held as taxa only. Also recomputed. */
  taxonOnlyChildren: readonly string[];
  /**
   * What may be said at parent level and must not be attributed to a child.
   *
   * Wave 38 found the market form of this — green coffee names the coffee
   * concept, so arabica correctly carries no market series. The same rule
   * applies to anything else attached to a parent: a calendar row, a
   * biosecurity listing, an extension resource. Stating it here is what makes
   * "it did not leak" checkable rather than assumed.
   */
  conceptLevelEvidence: readonly string[];
  sourceIds: readonly string[];
  reviewedAt: string;
}
