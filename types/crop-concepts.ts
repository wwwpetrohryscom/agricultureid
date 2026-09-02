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

export interface ConceptConstituent {
  /** Accepted scientific name, as the authorities give it. */
  scientificName: string;
  commonName: string;
  heldAs: HeldAs;
  /** Crop identity slug — required when heldAs is not 'not-held'. */
  identitySlug?: string;
  /** Why this taxon sits inside the concept rather than beside it. */
  role: string;
}

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
