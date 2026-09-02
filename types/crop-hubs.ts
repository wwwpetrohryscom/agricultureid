/**
 * Hubs over the crop corpus, and the rules that decide which ones exist.
 *
 * The corpus holds 350 crop identities across 74 families and 213 genera. Every
 * one of those is a slug, and generating a page for each would add 287 routes
 * in an afternoon — which is precisely the thing this program exists not to do.
 * A taxon existing is not a reason to publish a page about it.
 *
 * So hubs are qualified rather than enumerated. A hub has to hold enough crops
 * to be worth navigating, and it has to be able to say something that is true
 * of the group and not merely true of its largest member.
 */

export const HUB_KINDS = [
  /** A botanical family. Members derived from the identity layer. */
  'BOTANICAL_FAMILY_HUB',
  /** A botanical genus. Rare by design — see GENUS_HUB_MIN_PUBLISHED. */
  'BOTANICAL_GENUS_HUB',
  /** An agricultural grouping — cereals, pulses. Not a taxon. */
  'AGRICULTURAL_CROP_GROUP_HUB',
] as const;
export type HubKind = (typeof HUB_KINDS)[number];

export const HUB_KIND_MEANING: Record<HubKind, string> = {
  BOTANICAL_FAMILY_HUB:
    'A botanical family. Membership is a fact about the plants and is derived from the verified identities, never listed by hand.',
  BOTANICAL_GENUS_HUB:
    'A botanical genus. Published only where several agriculturally distinct crops sit inside one genus and the genus itself explains something about them.',
  AGRICULTURAL_CROP_GROUP_HUB:
    'An agricultural grouping. Not a taxon and not claimed to be one — cereals span two families, pulses and oilseeds overlap, and the grouping is about what the crop is grown for.',
};

/**
 * Thresholds, and why each is where it is.
 *
 * These are floors on membership, not the qualification itself. A candidate
 * that clears them still has to carry hub-level content that is not just a
 * restatement of its biggest member, and that is a judgement recorded per hub.
 */
export const FAMILY_HUB_MIN_PUBLISHED = 4;
export const GENUS_HUB_MIN_PUBLISHED = 3;
export const GROUP_HUB_MIN_PUBLISHED = 3;

/** Total members — published plus taxa — below which a hub is a list, not a page. */
export const HUB_MIN_TOTAL_MEMBERS = 6;

export interface HubSection {
  heading: string;
  body: string;
}

export interface CropHub {
  slug: string;
  kind: HubKind;
  title: string;
  /** The family name, genus name or crop-group key membership derives from. */
  memberKey: string;
  /** One sentence: what this hub is and what it is not. */
  definition: string;
  /**
   * Hub-level content. Every section must say something true of the group.
   *
   * The failure this guards against is taking a property of the largest member
   * and writing it as a property of the family — "Poaceae crops generally…"
   * when the sentence is really about wheat.
   */
  sections: readonly HubSection[];
  /** Contrasts with a neighbouring hub, which is what stops hubs blurring. */
  contrasts: readonly string[];
  sourceIds: readonly string[];
  /** Honest statements of what the grouping does not determine. */
  limitations: readonly string[];
  reviewedAt: string;
}

/**
 * A candidate that was evaluated and not published.
 *
 * Recorded because the decision not to create 287 pages is the substance of
 * this wave, and a decision nobody wrote down is indistinguishable from an
 * oversight.
 */
export const HUB_REFUSAL_REASONS = [
  /** Too few members to navigate. */
  'BELOW_MEMBERSHIP_FLOOR',
  /** A crop concept page already carries these semantics. */
  'DUPLICATES_CONCEPT_PAGE',
  /** Members share a name and nothing a reader would act on. */
  'NO_GROUP_LEVEL_CONTENT',
  /** Real hub, evidence available, not written yet. */
  'READY_BUT_DEFER_EDITORIAL',
] as const;
export type HubRefusalReason = (typeof HUB_REFUSAL_REASONS)[number];

export interface HubRefusal {
  memberKey: string;
  kind: HubKind;
  reason: HubRefusalReason;
  note: string;
}
