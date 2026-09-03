/**
 * Wave 46 §45 — what kind of thing an alternative name is.
 *
 * The programme has twice been tempted by a rule that no two crops may share
 * an alias, and twice refused it, because four pairs in this corpus share one
 * legitimately: "red bean" really is both adzuki and rice bean, "cocoyam"
 * really is both taro and tannia. A uniqueness rule would force the corpus to
 * pick one and be wrong about the other, which is worse than the ambiguity it
 * would remove.
 *
 * What can be required is that a shared name is REGISTERED as shared. The
 * kinds below distinguish the cases the corpus has: a name only one crop
 * carries, a name several carry for good reason, a name that denotes different
 * plants to different readers, a name the trade uses for a product rather than
 * a plant — and one kind that is never permitted, an alias equal to another
 * published crop's title, which is not an alias at all but a claim on somebody
 * else's page.
 */

export const ALIAS_KINDS = [
  /** One crop carries it, and nothing else in the corpus is called that. */
  'UNIQUE_ALIAS',
  /**
   * Several crops carry it and each is right to. The reader who types it is
   * asking about a group of plants that share a name, and the corpus's answer
   * is all of them rather than a guess at one.
   */
  'SHARED_ALIAS',
  /**
   * The name denotes different plants to different readers, and the corpus
   * holds an ambiguity record for it rather than resolving it. Distinct from
   * SHARED_ALIAS: a shared alias is one name for several crops that belong
   * together, an ambiguous one is the same string meaning unrelated things.
   */
  'AMBIGUOUS_ALIAS',
  /** A superseded name still current enough in the literature to search for. */
  'HISTORICAL_ALIAS',
  /** Used in one region and not generally. */
  'REGIONAL_ALIAS',
  /** A trade or product name rather than a name for the plant. */
  'MARKET_ALIAS',
  /**
   * Equal to another published crop's title. Never permitted: the alias claims
   * a page that exists and belongs to a different plant.
   */
  'INVALID_COLLISION',
] as const;
export type AliasKind = (typeof ALIAS_KINDS)[number];

export const ALIAS_KIND_MEANING: Record<AliasKind, string> = {
  UNIQUE_ALIAS:
    'Exactly one published crop carries the name and no other published page is titled with it. Computed rather than recorded — a record is only needed where uniqueness does not hold.',
  SHARED_ALIAS:
    'Two or more published crops carry the name and each is right to. Search must present them rather than choose between them.',
  AMBIGUOUS_ALIAS:
    'The name denotes unrelated plants and the corpus holds an ambiguous-common-name crosswalk entry for it. The ambiguity is stated, never resolved silently.',
  HISTORICAL_ALIAS:
    'A superseded name kept because the literature still uses it. It points at the current page without asserting the old treatment is right.',
  REGIONAL_ALIAS:
    'Current in one region and not generally. Carried so a reader who knows the crop by that name can find it.',
  MARKET_ALIAS:
    'A name for the traded product rather than for the plant. It may equal a commodity page title, which is not a collision: the plant and the thing traded are different pages about the same material.',
  INVALID_COLLISION:
    "The alias is another published crop's title. Never a permitted end state; the record exists so a wave that finds one has somewhere to put it before removing it.",
};

export interface CropAliasRecord {
  alias: string;
  kind: AliasKind;
  /** Published crop slugs carrying it. Recomputed, never trusted. */
  crops: readonly string[];
  rationale: string;
  reviewedAt: string;
}

/**
 * A term that should REACH a page without claiming to name it.
 *
 * Waves 27 and 32 both had to remove technical terms from `alternativeNames`,
 * because an alternative name is a claim that the crop is called that, and
 * castor bean is not called ricinoleic acid. But a reader who types the
 * compound has exactly one crop in mind, and the corpus knew it and could not
 * say so: the term appears in the article body, which is indexed at summary
 * weight and cannot outrank a partial title match anywhere else.
 *
 * A search pointer is the missing third thing. It is indexed, it is weighted
 * below a name and above a category, and it asserts nothing about what the
 * crop is called — the record says what the relationship actually is.
 */
export interface CropSearchPointer {
  term: string;
  cropSlug: string;
  /** Why this term should reach this crop, in the corpus's own words. */
  relationship: string;
  sourceIds: readonly string[];
  reviewedAt: string;
}
