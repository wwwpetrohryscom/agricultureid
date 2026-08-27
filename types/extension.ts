/**
 * Extension resources — an INDEX of official public agronomic guidance, not a
 * copy of it.
 *
 * ## What this layer is
 *
 * A pointer with enough structure to be findable: who published it, for which
 * jurisdiction, about which crops, pests and topics, when it was written, and
 * where to read it. The guidance itself stays on the publisher's site, which is
 * both the copyright position and the correct one — extension advice is revised,
 * and a copy here would silently go stale.
 *
 * `summary` is therefore a DESCRIPTION written for this index, never an extract.
 * The validator enforces the distinction it can enforce: bounded length, no
 * second-person instruction, and no field large enough to constitute
 * republication. Nothing in this layer stores source prose.
 *
 * ## Indexing is not advising
 *
 * "The source discusses nitrogen timing for winter wheat" is a statement about a
 * document. "Apply nitrogen at GS30" is agronomic advice, and this layer is not
 * entitled to give it — the rate depends on soil, season, variety and law that
 * the index cannot see. Summaries state what a resource covers; they never
 * restate its recommendations.
 *
 * ## Jurisdiction is part of the fact
 *
 * Extension guidance is written for a place. Penn State's orchard spray timing
 * is for Pennsylvania; AHDB's disease thresholds are for Great Britain. Dropping
 * the jurisdiction turns correct local guidance into wrong general guidance, so
 * {@link ExtensionResource.jurisdictionId} is required wherever the publisher is
 * a sub-national body, and a resource is never presented as applying beyond the
 * system that issued it.
 *
 * ## A university is not automatically an extension service
 *
 * A land-grant Cooperative Extension service, a provincial ministry and a
 * statutory levy body all carry a public mandate to advise. A university
 * research blog does not. {@link ExtensionInstitution.mandate} records which
 * kind of body this is and the evidence for it, so "official" is a checked
 * claim rather than an assumption drawn from a .edu domain.
 */

/** The basis on which a publisher counts as official public extension. */
export const EXTENSION_MANDATES = [
  /** US land-grant Cooperative Extension established under the Smith-Lever Act. */
  'land-grant-cooperative-extension',
  /** A government department or ministry publishing advisory material. */
  'government-department',
  /** A statutory levy body with a public knowledge-exchange remit. */
  'statutory-levy-body',
  /** A public research institute with a stated advisory mandate. */
  'public-research-institute',
] as const;
export type ExtensionMandate = (typeof EXTENSION_MANDATES)[number];

export const RESOURCE_TYPES = [
  'guide',
  'factsheet',
  'bulletin',
  'manual',
  'decision-guide',
  'best-practice-guide',
  'technical-note',
  'other',
] as const;
export type ResourceType = (typeof RESOURCE_TYPES)[number];

/**
 * Agronomic topics. Deliberately a closed, coarse vocabulary: thousands of
 * free-text tags would make the index unfilterable and would encode one
 * publisher's taxonomy as though it were general.
 */
export const EXTENSION_TOPICS = [
  'cropEstablishment',
  'cultivarSelection',
  'soilPreparation',
  'nutrientManagement',
  'irrigation',
  'pestManagement',
  'diseaseManagement',
  'weedManagement',
  'harvest',
  'postHarvest',
  'storage',
  'livestockManagement',
  'grazing',
  'pasture',
  'biosecurity',
  'farmManagement',
  'machineryUse',
  'conservation',
  'soilHealth',
  'coverCrops',
  'cropRotation',
] as const;
export type ExtensionTopic = (typeof EXTENSION_TOPICS)[number];

export const TOPIC_LABEL: Record<ExtensionTopic, string> = {
  cropEstablishment: 'Crop establishment',
  cultivarSelection: 'Cultivar selection',
  soilPreparation: 'Soil preparation',
  nutrientManagement: 'Nutrient management',
  irrigation: 'Irrigation',
  pestManagement: 'Pest management',
  diseaseManagement: 'Disease management',
  weedManagement: 'Weed management',
  harvest: 'Harvest',
  postHarvest: 'Post-harvest',
  storage: 'Storage',
  livestockManagement: 'Livestock management',
  grazing: 'Grazing',
  pasture: 'Pasture',
  biosecurity: 'Biosecurity',
  farmManagement: 'Farm management',
  machineryUse: 'Machinery use',
  conservation: 'Conservation',
  soilHealth: 'Soil health',
  coverCrops: 'Cover crops',
  cropRotation: 'Crop rotation',
};

export interface ExtensionInstitution {
  id: string;
  /** The publisher's own name for itself. */
  officialName: string;
  mandate: ExtensionMandate;
  /** What establishes the mandate — a statute, a ministry, a charter. */
  mandateBasis: string;
  countryCode: string;
  /** ISO 3166-2, required when the body serves one sub-national jurisdiction. */
  jurisdictionId?: string;
  /** An authority in the Wave 1–4 registry, where the publisher IS one. */
  responsibleAuthorityId?: string;
  homepageUrl: string;
  sourceReferences: string[];
  lastVerifiedAt: string;
}

export interface ExtensionResource {
  id: string;
  slug: string;
  /** The resource's own title, as published. */
  officialTitle: string;
  institutionId: string;
  resourceType: ResourceType;

  countryCode: string;
  /** Inherited from the institution; never widened. */
  jurisdictionId?: string;

  topics: ExtensionTopic[];
  cropRefs: string[];
  livestockRefs: string[];
  pestRefs: string[];
  diseaseRefs: string[];
  /** Other corpus entities the resource addresses (soil topics, nutrients). */
  topicRefs: string[];

  officialUrl: string;
  /** Only where the publisher states it. Never inferred from a server header. */
  publicationDate?: string;
  revisionDate?: string;
  lastVerifiedAt: string;

  /**
   * A description written for this index. Not an extract, not a recommendation.
   * See the module note: bounded, third-person, about the document.
   */
  summary: string;
  /** Section headings as published, which are titles rather than prose. */
  keyTopics: string[];
  sourceReferences: string[];
  limitations: string[];
}

/** Shown wherever extension resources are listed. */
export const EXTENSION_CAVEAT =
  'These are pointers to guidance published by others. Each was written for a particular place and season and is revised by its publisher; read it at the source, and check it applies where you farm.';

/** Shown wherever a resource carries no publisher date. */
export const UNDATED_CAVEAT =
  'The publisher states no publication or revision date for this resource, so its vintage is unknown. It is listed as verified reachable on the date shown, which is not the same as current.';

/** Bounds that keep a summary an index entry rather than a republication. */
export const SUMMARY_MIN_LENGTH = 60;
export const SUMMARY_MAX_LENGTH = 400;
