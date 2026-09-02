/**
 * Wave 40 — expanding the encyclopedia where it was measurably thin.
 *
 * ## Why the candidates are not a queue
 *
 * The obvious way to grow a crop encyclopedia is to work down the list of taxa
 * that have no article. That produces growth and it produces it in the shape
 * the corpus already has: more of whatever the earlier waves happened to reach.
 *
 * This wave starts from a composition audit instead — what the published corpus
 * actually contains by crop group, growth habit, agricultural use and region —
 * and selects against the gaps that audit exposes. The audit is recorded here
 * as data with counts the validator recomputes, so "we found a gap" is a
 * checkable statement rather than a claim about a process.
 *
 * ## Why regional significance is a structured field
 *
 * "Important in Africa" is not information. It names no country, no system, no
 * agricultural role and no source, and it is exactly the kind of sentence that
 * makes a page look researched without being so.
 *
 * A `RegionalSignificance` record therefore has to say where, why and in what
 * role, cite a source, and name a place that the crop's own page also names.
 * The validator checks that last part against the live article, so a regional
 * claim cannot be attached to a crop whose page does not support it. Origin is
 * not evidence of significance: a crop domesticated in the Andes may matter
 * most in West Africa, and the opposite happens too.
 */
import type { SearchCheck } from '@/types/crop-publication';

export const WORLD_REGIONS = [
  'sub-saharan-africa',
  'north-africa-mediterranean',
  'south-asia',
  'southeast-asia',
  'east-asia',
  'latin-america-caribbean',
  'oceania',
  'europe',
  'north-america',
] as const;
export type WorldRegion = (typeof WORLD_REGIONS)[number];

export const EXPANSION_RECOMMENDATIONS = [
  /** Researched, written and published in this wave. */
  'PUBLISH',
  /** Significant, but the crop-specific evidence found will not carry an article. */
  'DEFER_MORE_EVIDENCE',
  /** Evidence sufficient; writing deliberately deferred. */
  'DEFER_EDITORIAL',
  /** A published concept page already covers what this page would say. */
  'DECLINE_DUPLICATE_CONCEPT',
  /** The scope question has to be settled before a page can exist. */
  'DECLINE_SCOPE_UNRESOLVED',
  /** Real crop, real evidence, too marginal to earn a page in this corpus. */
  'DECLINE_LOW_SIGNIFICANCE',
] as const;
export type ExpansionRecommendation =
  (typeof EXPANSION_RECOMMENDATIONS)[number];

/** The one recommendation that asserts an article now exists. */
export const PUBLISHING_RECOMMENDATIONS: readonly ExpansionRecommendation[] = [
  'PUBLISH',
];

/**
 * The dimensions the composition audit measured.
 *
 * Each is something the corpus can count about itself without judgement:
 * a crop group, a growth habit, an agricultural use. Region is deliberately
 * NOT one of them — the corpus holds no structured region field for a crop,
 * and inventing one from origin is the error this wave exists to avoid.
 * Regional coverage is carried by `RegionalSignificance` instead, one crop at
 * a time and corroborated against the crop's own page.
 */
export const COMPOSITION_DIMENSIONS = [
  'crop-group',
  'growth-habit',
  'agricultural-use',
] as const;
export type CompositionDimension = (typeof COMPOSITION_DIMENSIONS)[number];

/**
 * The places that belong to each region, pinned.
 *
 * Without this, `region` and `corroboratedBy` are two independent free fields
 * and nothing stops a claim that reads "significant in Oceania" from
 * corroborating on Nigeria — the statement would name Nigeria, the crop page
 * would name Nigeria, and every check would pass while the region was wrong.
 *
 * The list is deliberately a pinned vocabulary rather than a lookup: it is the
 * one thing in this layer that cannot be derived from the corpus, so it is
 * written down where it can be argued with, and a place that is not on it
 * fails rather than being quietly accepted.
 */
export const REGION_PLACES: Record<WorldRegion, readonly string[]> = {
  'sub-saharan-africa': [
    'Sub-Saharan',
    'West Africa',
    'East Africa',
    'Central Africa',
    'East African',
    'West African',
    'Sahel',
    'Nigeria',
    'Ghana',
    'Benin',
    'Togo',
    'Cameroon',
    'Kenya',
    'Tanzania',
    'Uganda',
    'Ethiopia',
    'Mali',
    'Senegal',
    'Burkina Faso',
    'Côte d’Ivoire',
    "Côte d'Ivoire",
    'Sierra Leone',
    'Guinea',
    'Zambia',
    'Malawi',
    'Mozambique',
    'Madagascar',
    'Africa',
  ],
  'north-africa-mediterranean': [
    'North Africa',
    'Mediterranean',
    'Egypt',
    'Morocco',
    'Tunisia',
    'Algeria',
    'Turkey',
    'Syria',
    'Iran',
    'Iraq',
    'Levant',
    'Middle East',
    'Israel',
  ],
  'south-asia': [
    'South Asia',
    'South',
    'India',
    'Indian',
    'Pakistan',
    'Bangladesh',
    'Nepal',
    'Sri Lanka',
    'Bhutan',
    'Rajasthan',
    'Madhya Pradesh',
    'Karnataka',
  ],
  'southeast-asia': [
    'Southeast Asia',
    'Indonesia',
    'Thailand',
    'Vietnam',
    'Malaysia',
    'Philippines',
    'Myanmar',
    'Laos',
    'Cambodia',
    'Papua New Guinea',
  ],
  'east-asia': ['East Asia', 'China', 'Japan', 'Korea', 'Taiwan'],
  'latin-america-caribbean': [
    'Latin America',
    'tropical Latin America',
    'South America',
    'Central America',
    'Caribbean',
    'Andes',
    'Andean',
    'Amazon',
    'Mexico',
    'Brazil',
    'Peru',
    'Colombia',
    'Bolivia',
    'Ecuador',
    'Argentina',
    'Chile',
    'Venezuela',
    'Costa Rica',
    'Guatemala',
    'Cuba',
  ],
  oceania: [
    'Australia',
    'New Zealand',
    'Pacific',
    'Fiji',
    'Oceania',
    'Papua New Guinea',
  ],
  europe: [
    'Europe',
    'European',
    'France',
    'Germany',
    'Italy',
    'Spain',
    'Poland',
    'Netherlands',
    'Ukraine',
    'Russia',
    'United Kingdom',
    'Scotland',
    'Scandinavia',
    'Finland',
    'Hungary',
    'Romania',
    'Serbia',
    'Greece',
  ],
  'north-america': [
    'United States',
    'North America',
    'Canada',
    'Mexico',
    'Great Plains',
    'California',
    'Sonoran',
  ],
};

export interface RegionalSignificance {
  region: WorldRegion;
  /**
   * Where, why and in what agricultural role. A label is not a statement:
   * this has to name places, systems or uses that could be argued with.
   */
  statement: string;
  /**
   * A place named in the statement that the crop's own page also names in its
   * geographic scope. The validator checks both, so a regional claim cannot be
   * bolted onto a crop whose page does not support it.
   */
  corroboratedBy: string;
  sourceIds: readonly string[];
}

export interface CompositionGap {
  dimension: CompositionDimension;
  /** The bucket within the dimension, e.g. a crop group slug. */
  bucket: string;
  /** Articles in this bucket before the wave. Recomputed, not trusted. */
  publishedBefore: number;
  /** Articles in this bucket now. Recomputed, not trusted. */
  publishedAfter: number;
  /**
   * The articles that were in this bucket before the wave, listed.
   *
   * Added after the first draft of this file recorded findings that the counts
   * agreed with and the membership contradicted: "not one of them a tropical
   * pasture species" was written about a bucket that already contained napier
   * grass, and "the African aroids had no representation" about one that
   * already contained taro. A count cannot catch that. The list can, because
   * the validator recomputes it and a reader can see what the finding is a
   * finding about.
   */
  bucketBefore: readonly string[];
  /** What the count means. A number alone is not a finding. */
  finding: string;
}

export interface CropExpansionCandidate {
  slug: string;
  wave: string;
  /**
   * The research outcome this candidate was taken from. Reconciled against the
   * live research layer, so a candidate cannot misstate where it came from.
   */
  priorOutcome: string;
  recommendation: ExpansionRecommendation;
  /** At least one for any candidate; the point of the wave. */
  significance: readonly RegionalSignificance[];
  /** Whether the identity is settled enough to publish against. */
  conceptStability: string;
  /** What was found that will carry an article, or what was not found. */
  depthEvidence: string;
  searchReview: readonly SearchCheck[];
  sourceIds: readonly string[];
  reviewedAt: string;
}

/**
 * Promotional vocabulary that may not appear in a crop article.
 *
 * These phrases attach an argument to a crop without making one. "Climate
 * resilient" in particular is a real agronomic property of some crops and an
 * empty label on most pages that carry it, and the corpus has no way to tell
 * the difference from the phrase alone — so it states the agronomy instead:
 * what the crop tolerates, at what stage, on what evidence.
 *
 * Enforced across every crop article, not only this wave's.
 */
export const PROMOTIONAL_PHRASES = [
  'climate resilient',
  'climate-resilient',
  'climate smart',
  'climate-smart',
  'superfood',
  'super food',
  'miracle crop',
  'wonder crop',
  'crop of the future',
  'future crop',
] as const;
