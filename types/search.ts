/** Phase 3D — search & knowledge-graph UX types. */

export type SearchEntityType =
  | 'trade-concept'
  | 'logistics-concept'
  | 'standard-reference'
  | 'market-term'
  | 'supply-chain-risk'
  | 'crop'
  | 'soil'
  | 'plant-disease'
  | 'pest'
  | 'livestock'
  | 'nutrient'
  | 'fertilizer'
  | 'soil-topic'
  | 'machinery'
  | 'climate'
  | 'farming-system'
  | 'irrigation-method'
  | 'post-harvest'
  | 'processing-method'
  | 'quality-attribute'
  | 'post-harvest-defect'
  | 'quality-measurement'
  | 'commodity'
  | 'commodity-product'
  | 'commodity-grade'
  | 'cultivar'
  | 'breed'
  | 'country'
  | 'indicator'
  | 'tool'
  | 'glossary'
  | 'comparison'
  | 'region'
  | 'agroecological-zone'
  | 'agricultural-authority'
  | 'agricultural-registry'
  | 'agricultural-compliance'
  | 'agricultural-support'
  | 'crop-calendar'
  | 'biosecurity-listing'
  | 'variety-registration'
  | 'change-history'
  | 'coverage'
  | 'soil-observation'
  | 'trade-requirement'
  | 'farm-economics'
  | 'climate-water'
  | 'crop-taxon'
  | 'crop-hub'
  | 'market-data'
  | 'extension-resource'
  | 'input-authorization';

/**
 * A published, indexable search document. Holds only the text needed for search
 * — never full article bodies, and never unpublished content or audit notes.
 */
export interface SearchDoc {
  id: string;
  type: SearchEntityType;
  route: string;
  title: string;
  /** Names (title, accepted, alternative, common, cultivar/breed). Weighted high. */
  names: string[];
  scientificName?: string;
  category?: string;
  /** Parent entity title (crop for a cultivar, species for a breed, etc.). */
  parent?: string;
  summary: string;
  glossaryTerms?: string[];
  /**
   * Terms that should reach this document without naming it. Wave 46.
   * Declared per term with a stated relationship; never an assertion that the
   * entity is called this.
   */
  searchPointers?: string[];
  country?: string;
  region?: string;
  /** Human-readable relationship labels the entity participates in. */
  relationLabels?: string[];
  /** Source organizations cited. */
  sources?: string[];
  /**
   * How many other published entities reference this one.
   *
   * Used only to break an exact score tie. It is not a quality score and it
   * never moves a document past one that scored higher; it decides which of
   * two equally relevant answers the corpus itself treats as the more central,
   * instead of leaving that to the alphabet.
   */
  inboundRefs?: number;
  /** Facet values (denormalized for counting). */
  facets: Partial<Record<SearchFacet, string[]>>;
}

export type SearchFacet =
  'entityType' | 'category' | 'country' | 'region' | 'source' | 'evidenceTier';

export type SynonymKind =
  'exact' | 'regional' | 'broader' | 'narrower' | 'deprecated' | 'spelling';

export interface SynonymEntry {
  /** Canonical term (usually the term used in titles). */
  canonical: string;
  /** Equivalent or related surface forms. */
  variants: string[];
  kind: SynonymKind;
  note?: string;
}

export interface SearchResult {
  doc: SearchDoc;
  score: number;
  /** Why it matched (alias/typo/exact), for transparency. */
  matchedVia: string[];
  /**
   * The components the score was built from. Present on every result because
   * the ranker builds the score BY summing this, rather than alongside it —
   * a report assembled separately would be free to disagree with the ranking.
   * Never rendered: the search UI shows results, not arithmetic.
   */
  parts?: import('@/lib/search/engine').ScoreParts;
}

export interface SearchResponse {
  results: SearchResult[];
  total: number;
  facets: Partial<Record<SearchFacet, { value: string; count: number }[]>>;
  /** Synonym/typo suggestions surfaced to the user. */
  suggestions: string[];
}
