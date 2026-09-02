/**
 * Botanical identity for a cultivated crop.
 *
 * ## Why this layer exists
 *
 * `CropContent.scientificName` is a free-text display string, and the corpus
 * shows what that costs. It holds sentences like "×Triticosecale spp.
 * (intergeneric hybrid of wheat, Triticum, and rye, Secale)" and "Mentha ×
 * piperita (peppermint) and Mentha spicata (spearmint), among other cultivated
 * Mentha species and hybrids". Those are honest and unusable: nothing can ask
 * what genus a crop is in, whether its name is accepted or a synonym, what rank
 * it sits at, or which authority says so.
 *
 * This layer answers those questions with values, and records which authorities
 * were consulted for each one.
 *
 * ## What it is not
 *
 * It is not a second crop registry. A crop identity may point at a published
 * `crop` page, and many do — but an identity can also exist without one. That
 * is the point: a verified taxon that does not yet have an encyclopedia article
 * behind it belongs in the corpus as data, in the directory and in search, and
 * must not be given a thin page to justify itself.
 */

/* -------------------------------------------------------------------------- */
/*  Rank                                                                      */
/* -------------------------------------------------------------------------- */

/**
 * Ranks a cultivated crop concept is allowed to sit at.
 *
 * `genus` and `species-complex` exist because some crop concepts genuinely are
 * not one species. "Yam" is several Dioscorea species grown and traded as one
 * thing; forcing it to a species would be inventing an identity the sources do
 * not support. `cultivar-group` covers the cultivated forms that horticultural
 * codes name but botanical rank does not.
 */
export const TAXON_RANKS = [
  'species',
  'subspecies',
  'variety',
  'form',
  'hybrid',
  'nothosubspecies',
  'cultivar-group',
  'genus',
  'species-complex',
  'intergeneric-hybrid',
] as const;
export type TaxonRank = (typeof TAXON_RANKS)[number];

/** Ranks below species — an identity at one of these must carry a parent species. */
export const INFRASPECIFIC_RANKS: readonly TaxonRank[] = [
  'subspecies',
  'variety',
  'form',
  'nothosubspecies',
  'cultivar-group',
];

/** Ranks that do not name a single species. */
export const MULTI_TAXON_RANKS: readonly TaxonRank[] = [
  'genus',
  'species-complex',
];

/* -------------------------------------------------------------------------- */
/*  Name status                                                               */
/* -------------------------------------------------------------------------- */

/**
 * What an authority says about a name.
 *
 * A synonym is not a lesser name; it is a different claim. Storing one in the
 * accepted-name field, silently, is how a corpus ends up asserting that pea is
 * *Pisum sativum* long after both authorities moved it to *Lathyrus oleraceus*.
 */
export const NAME_STATUSES = ['accepted', 'synonym', 'unresolved'] as const;
export type NameStatus = (typeof NAME_STATUSES)[number];

export interface TaxonomicSynonym {
  name: string;
  /** Why the name is kept: an agricultural usage, a former placement, a basionym. */
  note: string;
  /** The authority that treats it as a synonym, where one does. */
  sourceId?: string;
}

/* -------------------------------------------------------------------------- */
/*  Agricultural vocabularies                                                 */
/* -------------------------------------------------------------------------- */

/**
 * What is taken off the plant.
 *
 * A crop may have several. Forcing one would make a dual-purpose crop lie: flax
 * is grown for seed and for fibre, and which one decides the whole agronomy.
 */
export const HARVESTED_PARTS = [
  'grain',
  'seed',
  'oilseed',
  'pod',
  'fruit',
  'berry',
  'leaf',
  'stem',
  'stalk',
  'root',
  'tuber',
  'rhizome',
  'corm',
  'bulb',
  'flower',
  'inflorescence',
  'fibre',
  'latex',
  'bark',
  'resin',
  'forage-biomass',
  'whole-plant',
] as const;
export type HarvestedPart = (typeof HARVESTED_PARTS)[number];

/** What the crop is grown for. Multiple uses are the normal case. */
export const AGRICULTURAL_USES = [
  'human-food',
  'animal-feed',
  'forage',
  'oilseed',
  'fibre',
  'sugar',
  'starch',
  'beverage',
  'spice',
  'industrial-raw-material',
  'bioenergy',
  'cover-crop',
  'green-manure',
] as const;
export type AgriculturalUse = (typeof AGRICULTURAL_USES)[number];

/**
 * Crop groups.
 *
 * A controlled vocabulary, because the free-text `category` field it replaces
 * drifted to 32 values for 153 crops — with *Tree fruit crop*, *Fruit and tree
 * crop*, *Tropical fruit crop*, *Fruit crop* and *Vine fruit crop* all in use
 * at once. A crop may belong to several groups; agriculture is not a partition.
 */
export const CROP_GROUPS = [
  'cereals',
  'pseudocereals',
  'pulses',
  'oilseeds',
  'roots-and-tubers',
  'vegetables',
  'fruit',
  'nuts',
  'fibre-crops',
  'sugar-crops',
  'forage-and-pasture',
  'beverage-crops',
  'spices-and-herbs',
  'industrial-crops',
  'cover-crops',
  'other-agricultural-crops',
] as const;
export type CropGroup = (typeof CROP_GROUPS)[number];

export const CROP_GROUP_LABEL: Record<CropGroup, string> = {
  cereals: 'Cereals',
  pseudocereals: 'Pseudocereals',
  pulses: 'Pulses and grain legumes',
  oilseeds: 'Oilseeds',
  'roots-and-tubers': 'Roots and tubers',
  vegetables: 'Vegetables',
  fruit: 'Fruit',
  nuts: 'Nuts',
  'fibre-crops': 'Fibre crops',
  'sugar-crops': 'Sugar crops',
  'forage-and-pasture': 'Forage and pasture',
  'beverage-crops': 'Beverage crops',
  'spices-and-herbs': 'Spices and herbs',
  'industrial-crops': 'Industrial crops',
  'cover-crops': 'Cover crops',
  'other-agricultural-crops': 'Other agricultural crops',
};

export const LIFE_CYCLES = ['annual', 'biennial', 'perennial'] as const;
export type LifeCycle = (typeof LIFE_CYCLES)[number];

export const GROWTH_HABITS = [
  'herb',
  'grass',
  'shrub',
  'tree',
  'vine',
  'palm',
] as const;
export type GrowthHabit = (typeof GROWTH_HABITS)[number];

/* -------------------------------------------------------------------------- */
/*  Publication depth                                                         */
/* -------------------------------------------------------------------------- */

/**
 * Whether the identity has an encyclopedia article behind it.
 *
 * `full-profile` means a published `crop` page exists and this identity
 * describes it. `data-only` means the taxon is verified and real and appears in
 * the directory, in search and in relationships — with no page of its own.
 *
 * The distinction is the whole defence against thin pages. A verified taxon is
 * worth holding; a taxon plus a template is not worth publishing.
 */
export const PROFILE_DEPTHS = ['full-profile', 'data-only'] as const;
export type ProfileDepth = (typeof PROFILE_DEPTHS)[number];

/* -------------------------------------------------------------------------- */
/*  Authority agreement                                                       */
/* -------------------------------------------------------------------------- */

/**
 * What the consulted authorities said, together.
 *
 * `agreed` is the normal case. `disagreed` is recorded rather than resolved:
 * POWO sinks the cultivated Brassica oleracea forms into the species while WFO
 * keeps the infraspecific epithets, and neither is a mistake. `single-source`
 * means only one authority resolved the name at all.
 */
export const AGREEMENT_STATES = [
  'agreed',
  'disagreed',
  'single-source',
] as const;
export type AgreementState = (typeof AGREEMENT_STATES)[number];

export interface AuthorityOpinion {
  /** Source id in the corpus source registry. */
  sourceId: string;
  /** The accepted name this authority resolves the crop to. */
  acceptedName: string;
  /** The authority's own identifier for the record, where it publishes one. */
  recordId?: string;
}

/* -------------------------------------------------------------------------- */
/*  The identity                                                              */
/* -------------------------------------------------------------------------- */

export interface CropIdentity {
  id: string;
  /** Kebab-case, unique across identities. Matches the crop page slug where one exists. */
  slug: string;
  primaryCommonName: string;
  alternativeCommonNames?: readonly string[];

  /** The name this corpus publishes, with its authority string where known. */
  acceptedScientificName: string;
  botanicalAuthority?: string;
  taxonRank: TaxonRank;
  genus: string;
  family: string;
  /** Required for an infraspecific rank: the species it sits under. */
  parentSpecies?: string;
  /**
   * Names deliberately kept alongside the accepted one — a former placement, a
   * name agriculture still uses, a basionym. Never silently promoted.
   */
  synonyms?: readonly TaxonomicSynonym[];

  cropGroups: readonly CropGroup[];
  harvestedParts: readonly HarvestedPart[];
  agriculturalUses: readonly AgriculturalUse[];
  lifeCycle?: LifeCycle;
  growthHabit?: GrowthHabit;

  /** Authority opinions, and whether they agreed. */
  agreement: AgreementState;
  authorities: readonly AuthorityOpinion[];
  /** Required when `agreement` is not `agreed`: what the difference is. */
  agreementNote?: string;

  /** Source ids establishing the taxonomy. At least one. */
  taxonomySourceIds: readonly string[];

  profileDepth: ProfileDepth;
  /** Set when `profileDepth` is `full-profile`: the published crop page slug. */
  cropPageSlug?: string;

  /** What this identity does not establish. */
  limitations?: readonly string[];
  lastVerifiedAt: string;
}

/** Shown wherever a crop identity is displayed. */
export const IDENTITY_CAVEAT =
  'Botanical identity here is what the consulted taxonomic authorities publish, on the date they were read. Where authorities disagree, both readings are shown rather than one being chosen silently.';
