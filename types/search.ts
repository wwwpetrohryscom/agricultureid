/** Phase 3D — search & knowledge-graph UX types. */

export type SearchEntityType =
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
  | 'agroecological-zone';

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
  country?: string;
  region?: string;
  /** Human-readable relationship labels the entity participates in. */
  relationLabels?: string[];
  /** Source organizations cited. */
  sources?: string[];
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
}

export interface SearchResponse {
  results: SearchResult[];
  total: number;
  facets: Partial<Record<SearchFacet, { value: string; count: number }[]>>;
  /** Synonym/typo suggestions surfaced to the user. */
  suggestions: string[];
}
