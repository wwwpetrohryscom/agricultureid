/**
 * What a crop page is ABOUT, when that is not one plant.
 *
 * Waves 27–30 verified 348 botanical identities and recorded, in prose, that
 * sixteen published pages name a genus, a species complex or a hybrid rather
 * than a single species. Prose is where that had to stop: a sentence saying
 * "all four species are held separately" cannot be checked, and three of those
 * sentences turned out to be wrong. This layer turns the scope of a page into
 * something a validator can read.
 *
 * The distinction that matters is NOT how many taxa exist under a name — it is
 * how many the PAGE claims to cover, and whether the corpus actually holds
 * them. A hybrid such as Citrus × limon is a single taxon and needs nothing
 * here. "Cotton" covers four species and needs all four accounted for.
 */

/**
 * Ranks at which a published page cannot name one plant, and must therefore
 * declare what it covers.
 *
 * Deliberately NOT `MULTI_TAXON_RANKS` from the identity layer. That set drives
 * promotion tiering and holds genus and species-complex only. A nothogenus is a
 * third case: ×Triticosecale is one accepted name, so the identity layer is
 * right to treat it as a single taxon, and the crop is nonetheless a cross
 * spanning several nothospecies, so the page is right to declare a scope.
 */
export const CONCEPT_REQUIRED_RANKS = [
  'genus',
  'species-complex',
  'intergeneric-hybrid',
] as const;

export const CONCEPT_KINDS = [
  /** Several cultivated species of one genus, each independently verifiable. */
  'genus-concept',
  /** The species boundaries themselves are contested — apomixis, aggregates. */
  'species-complex',
  /** Commercial material is sterile or vegetative clones described by genome
   *  group, not by species. */
  'clone-group-concept',
  /** An intergeneric hybrid spanning several nothospecies. */
  'nothogenus-concept',
  /**
   * A grouping by what the crops are grown FOR, spanning genera.
   *
   * Added in Wave 41 because two pages did not fit any of the above and were
   * being filed as genus concepts, which was false and had a consequence:
   * classing "mustard" as a Brassica genus concept made the Brassica hub look
   * like a duplicate of it, when the hub covers ten Brassica crops and the
   * mustard page covers three pungent-seed crops in three genera and excludes
   * oilseed rape. The model has to match the evidence, and for these two the
   * evidence is a use.
   */
  'agricultural-use-concept',
] as const;
export type ConceptKind = (typeof CONCEPT_KINDS)[number];

export const CONCEPT_KIND_MEANING: Record<ConceptKind, string> = {
  'genus-concept':
    'The page covers several cultivated species of one genus. Each is a real, separately verifiable taxon; the page exists because the trade name covers all of them.',
  'species-complex':
    'The species boundaries under this name are contested by the authorities themselves, so no single accepted binomial can carry the page.',
  'clone-group-concept':
    'What is grown commercially is not a wild species but a set of clones, described by genome group or parentage.',
  'nothogenus-concept':
    'The crop is an intergeneric cross. Naming any one nothospecies would be wrong about the rest.',
  'agricultural-use-concept':
    'The page groups crops by what they are grown for rather than by taxon. The members may be in different genera and the boundary is agricultural: what belongs is what is grown and traded for the same purpose.',
};

/**
 * How firmly the corpus actually holds a taxon a concept names.
 *
 * This field exists because of what the prose notes got wrong. One said "both
 * species are verified separately" when the corpus held neither; another said
 * "all four are held separately" when one was present only as a cultivar group.
 * A claim about coverage has to name its own strength so the validator can
 * check it in BOTH directions — an overclaim and an underclaim are both errors.
 */
export const HELD_AS = [
  /** The corpus holds this taxon as its own crop identity. */
  'own-identity',
  /** The corpus holds a cultivar group of it, not the species itself. */
  'cultivar-group-only',
  /** The corpus does not hold this taxon at all. */
  'not-held',
] as const;
export type HeldAs = (typeof HELD_AS)[number];

/**
 * How a constituent relates to the page that covers it.
 *
 * `heldAs` says how firmly the corpus holds the taxon. This says what kind of
 * thing it is inside the concept, which is a different question and the one
 * that decides whether a split would even make sense. A cultivar group and a
 * cultivated species both sit under an umbrella and they are not the same
 * case: promoting a species gives the reader a plant, promoting a cultivar
 * group gives them a market category with a Latin name on it.
 */
export const RELATIONSHIP_KINDS = [
  /** A cultivated species in its own right. */
  'cultivated-species',
  /** A subspecies or variety grown as a crop of its own. */
  'infraspecific-taxon',
  /** A named cultivar group of a species the concept or another page holds. */
  'cultivar-group',
  /** A wild species that contributed a genome to the cultivated material. */
  'genome-donor',
  /** A form defined by how it is grown or used rather than by taxonomy. */
  'agricultural-form',
  /** A hybrid between constituents of the concept. */
  'hybrid',
] as const;
export type RelationshipKind = (typeof RELATIONSHIP_KINDS)[number];

/**
 * Whether the constituent has a page of its own.
 *
 * Recorded here and RECOMPUTED by the validator against the emitted route list.
 * This is the parent–child scope contract: promoting a child changes what the
 * corpus contains, and if the parent's scope record does not change with it,
 * the parent is describing a corpus that no longer exists. The check fails in
 * both directions, so an unpromoted child recorded as having a page fails too.
 */
export const ROUTE_STATUSES = [
  /** A crop page exists at /crops/<slug>. */
  'own-page',
  /** Held as an identity, listed in the taxon table, with no page of its own. */
  'taxon-row-only',
  /** Not held by the corpus at all. */
  'no-route',
] as const;
export type RouteStatus = (typeof ROUTE_STATUSES)[number];

export interface ConceptConstituent {
  /** Accepted scientific name, as the authorities give it. */
  scientificName: string;
  commonName: string;
  heldAs: HeldAs;
  /** Crop identity slug — required when heldAs is not 'not-held'. */
  identitySlug?: string;
  /** What kind of thing this is inside the concept. */
  relationshipKind: RelationshipKind;
  /** Whether it has its own page. Recomputed by the validator. */
  routeStatus: RouteStatus;
  /** Why this taxon sits inside the concept rather than beside it. */
  role: string;
}

/**
 * A taxon the page's name might be taken to cover and deliberately does not.
 *
 * Exclusions are where a scope statement earns its keep. Saying what a page
 * covers is easy and mostly obvious; saying what it does not cover is where a
 * reader learns something, and it is the only way a scope can be wrong in a
 * way anyone notices.
 */
export interface ConceptExclusion {
  scientificName: string;
  commonName: string;
  /** Why the name reaches for it and the page does not cover it. */
  reason: string;
  /** Where the reader should go instead, if the corpus holds it. */
  resolvesTo?: { type: string; slug: string };
}

/**
 * How a concept page's name relates to the market data keyed against it.
 *
 * The distinction Wave 38 found the hard way: green coffee names the coffee
 * CONCEPT, so coffee shows 535 market series and arabica correctly shows none.
 * Market coverage must not leak from a concept to its children, and a
 * declaration is what stops it happening silently.
 */
export const MARKET_GRANULARITIES = [
  /** The commodity names exactly this taxon. */
  'EXACT_ENTITY',
  /** The commodity names the concept, not any one constituent. */
  'CONCEPT_LEVEL',
  /** The commodity is wider than the concept. */
  'BROADER_THAN_ENTITY',
  /** The commodity names one constituent, not the concept. */
  'NARROWER_THAN_ENTITY',
  /** Sources use the name for different scopes and it is not resolved. */
  'AMBIGUOUS',
  /** No market series is keyed to this page. */
  'NO_MARKET_LINKAGE',
] as const;
export type MarketGranularity = (typeof MARKET_GRANULARITIES)[number];

export interface CropConcept {
  /** Published crop page whose scope this describes. */
  slug: string;
  kind: ConceptKind;
  /** One sentence a reader sees: what this page covers, and what it does not. */
  scopeStatement: string;
  constituents: ConceptConstituent[];
  /**
   * What would have to be true for a constituent to earn its own page.
   *
   * Written down so promotion stays a judgement someone made rather than a
   * thing that happens. Wave 32 promoted three constituents out of two
   * concepts; this is the standard those promotions were held to.
   */
  splitCriterion: string;
  /** Taxa the name reaches for that this page does not cover. */
  excludes?: readonly ConceptExclusion[];
  /** How the market data keyed to this page relates to its scope. */
  marketGranularity: MarketGranularity;
  /** Why that granularity, in terms a reader can disagree with. */
  marketGranularityNote: string;
  sourceIds: string[];
  reviewedAt: string;
}

/* -------------------------------------------------------------------------- */
/*  Disagreement between authorities                                          */
/* -------------------------------------------------------------------------- */

/**
 * Two authorities can fail to agree in several different ways, and the ways are
 * not equally serious. "Neither holds the name" is a gap in coverage; "they put
 * the plant in different genera" is a live taxonomic dispute. Recording both as
 * `disagreed` loses the distinction that tells a reader how much to trust it.
 */
export const DISAGREEMENT_KINDS = [
  /** One authority does not resolve the name at all. */
  'coverage',
  /** Different accepted genus or family for the same plant. */
  'placement',
  /** Same plant, different rank — species against subspecies. */
  'rank',
  /** One authority sinks the taxon into another. */
  'sinking',
  /** The same epithet, spelled differently. */
  'orthography',
] as const;
export type DisagreementKind = (typeof DISAGREEMENT_KINDS)[number];

export const DISAGREEMENT_KIND_MEANING: Record<DisagreementKind, string> = {
  coverage:
    'One authority returned no placement for the name. This is a gap in that authority, not a dispute about the plant.',
  placement:
    'The authorities accept different genera or families. A live taxonomic dispute; both readings are recorded.',
  rank: 'The authorities agree on the plant and differ on the rank it is given.',
  sinking:
    'One authority treats the taxon as a synonym of another. The two readings describe different circumscriptions.',
  orthography:
    'The same epithet spelled differently by the two authorities. Not a dispute about the plant.',
};

export interface TaxonomyDisagreement {
  identitySlug: string;
  kind: DisagreementKind;
  /** What World Flora Online gives. */
  wfo: string;
  /** What Plants of the World Online gives. */
  powo: string;
  /** Which reading this corpus publishes, and why. */
  corpusTakes: string;
  /** What would settle it. */
  resolvedBy: string;
}

/* -------------------------------------------------------------------------- */
/*  Homonyms                                                                  */
/* -------------------------------------------------------------------------- */

/**
 * A binomial that more than one author has used for more than one plant.
 *
 * The verification harness in Waves 27–30 hit this repeatedly: searching
 * `Sorghum bicolor` returns Kuntze's homonym, which is a different grass
 * entirely, and `Solanum tuberosum` returns two homonyms that are not the
 * potato. Both authorities return them, and both are "exact matches" by string
 * comparison. Nothing in a name tells you which sense you have.
 *
 * So the sense is pinned. An identity resting on an ambiguous binomial must say
 * which author's plant it means, and the validator fails closed if it does not.
 */
export interface HomonymResolution {
  /** The ambiguous binomial, without author. */
  name: string;
  /** Every sense the authorities return for it. At least two, or it is not a homonym. */
  senses: {
    author: string;
    /** The accepted taxon this sense resolves to. */
    resolvesTo: string;
    authority: 'wfo' | 'powo' | 'both';
  }[];
  /** The author whose sense this corpus means. */
  corpusTakes: string;
  /** Identity slugs that rest on this name. */
  identitySlugs: string[];
  evidence: string;
}

/* -------------------------------------------------------------------------- */
/*  Name crosswalk                                                            */
/* -------------------------------------------------------------------------- */

/**
 * Names that are NOT crop identities, and where the answer actually is.
 *
 * Waves 27–30 refused 83 candidates, each for a stated reason, and the refusals
 * were recorded in a research ledger nobody reads. But a refusal is a fact
 * about a name a reader may well type: "canola", "Pisum sativum", "nectarine",
 * "Cavendish banana" are all things people search for and none of them is a
 * crop identity here. The crosswalk is the refusal made useful — it says what
 * the name is and where to go instead, and `resolvesTo: null` is a legitimate
 * answer meaning the corpus deliberately holds nothing.
 */
export const CROSSWALK_KINDS = [
  /** A taxonomic synonym of an accepted name. */
  'synonym',
  /** A quality or end-use specification, not a taxon. */
  'market-class',
  /** A cultivar or cultivar group, not a crop. */
  'cultivar',
  /** The traded product rather than the plant. */
  'commodity',
  /** A use of a crop, not a different crop. */
  'use',
  /** A common name applied to more than one plant. */
  'ambiguous-common-name',
  /** A binomial used by more than one author for different plants. */
  'homonym',
  /** A taxon the authorities do not agree on, which the corpus does not publish. */
  'unresolved-taxon',
] as const;
export type CrosswalkKind = (typeof CROSSWALK_KINDS)[number];

export interface NameCrosswalk {
  name: string;
  kind: CrosswalkKind;
  /** Where the answer is. `null` means the corpus deliberately holds nothing. */
  resolvesTo: { type: string; slug: string } | null;
  note: string;
}
