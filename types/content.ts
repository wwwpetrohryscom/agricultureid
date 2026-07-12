import type { ContentType } from '@/lib/site';
import type { EvidenceTier } from '@/types/sources';

export type { ContentType };

/**
 * Editorial lifecycle of a page. Only `published` pages are rendered publicly,
 * included in the sitemap, and counted by the knowledge graph.
 */
export type EditorialStatus = 'draft' | 'in-review' | 'published';

/**
 * Structured, safe-to-render content blocks. Content is authored as data (not
 * raw HTML/markdown) so rendering is deterministic and there is no unsafe HTML
 * injection surface. Inline emphasis is intentionally omitted to keep the model
 * simple and the output clean.
 */
export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'list'; ordered?: boolean; items: string[] }
  | {
      type: 'definitionList';
      items: { term: string; description: string }[];
    }
  | {
      type: 'table';
      caption?: string;
      columns: string[];
      rows: string[][];
    }
  | {
      type: 'callout';
      tone: 'note' | 'caution' | 'important';
      title?: string;
      text: string;
    };

/** A single scannable fact rendered in the key-facts panel. */
export interface KeyFact {
  label: string;
  value: string;
  note?: string;
}

/** A named body section with a stable anchor id for deep-linking and ToC. */
export interface ContentSection {
  /** Stable, unique-within-page kebab-case anchor. */
  id: string;
  heading: string;
  body: ContentBlock[];
}

/**
 * A citation from a page to a registry source. `sourceId` must resolve to a
 * `Source` in the registry (validated at build time).
 */
export interface SourceReference {
  sourceId: string;
  /** What, specifically, this source supports on the page. */
  citedFor?: string;
}

/**
 * A typed reference to another content page, used to build the knowledge graph
 * and internal links. Both `type` and `slug` must resolve to a published page.
 */
export interface ContentRef {
  type: ContentType;
  slug: string;
}

/* -------------------------------------------------------------------------- */
/*  Field-level provenance (Phase 2.1)                                         */
/* -------------------------------------------------------------------------- */

/**
 * A citation that supports a specific factual field or claim, with an optional
 * locator into the source. Locators are never fabricated: omit rather than
 * invent. See docs/field-level-provenance.md.
 */
export interface FieldCitation {
  /** Registry source id (must resolve). */
  sourceId: string;
  /** Where in the source, e.g. "PLANTS profile: TRAE", "Table 2", "p. 14". */
  locator?: string;
  /** What, specifically, the source supports. */
  evidenceNote?: string;
  /** Geographic scope of the cited evidence, if narrower than global. */
  jurisdiction?: string;
  /** ISO date the source was retrieved for this claim. */
  retrievedDate?: string;
  /** Evidence tier of the citation (defaults to the source's registry tier). */
  evidenceTier?: EvidenceTier;
}

/**
 * A specific, provenance-backed claim on a page. `field` names the claim type
 * (e.g. "scientific-classification", "soil-ph", "nutrient-analysis"); when the
 * claim is quantitative, `quantitative: true` requires a Tier 1–2 citation.
 */
export interface ProvenancedClaim {
  field: string;
  /** The exact claim text this provenance supports. */
  statement: string;
  /** True for numeric/quantitative claims (stricter evidence rules apply). */
  quantitative?: boolean;
  /** True for safety-critical/regulatory claims (Tier 1–2 required). */
  safetyCritical?: boolean;
  citations: FieldCitation[];
}

/* -------------------------------------------------------------------------- */
/*  Semantic relations (Phase 2.1)                                            */
/* -------------------------------------------------------------------------- */

/**
 * Controlled vocabulary of semantic relation types for knowledge-graph edges.
 * Typed relationship fields (commonDiseases, hostCrops, …) map to precise,
 * content-verified relations; generic `connections`/`relatedTopics` edges map
 * to conservative relations via a documented deterministic mapping
 * (see lib/content/graph.ts and docs/semantic-relations.md). Ambiguous pairs
 * use `relatedConcept` rather than asserting causation.
 */
export type RelationType =
  | 'affects'
  | 'susceptibleTo'
  | 'suitableForSoil'
  | 'suitableFor'
  | 'requiresNutrient'
  | 'associatedWithDeficiency'
  | 'suppliesNutrient'
  | 'suppliedByFertilizer'
  | 'appliedToCrop'
  | 'managedWith'
  | 'cultivatedWith'
  | 'usedToCultivate'
  | 'usedToHarvest'
  | 'usedToApply'
  | 'irrigatedBy'
  | 'irrigates'
  | 'sensitiveToClimate'
  | 'riskIncreasesUnder'
  | 'affectsNutrientAvailability'
  | 'partOfFarmingSystem'
  | 'includesCrop'
  | 'commonlyRaisedIn'
  | 'includesLivestock'
  | 'feedsOn'
  | 'relatedConcept';

export interface SemanticEdge {
  from: ContentRef;
  to: ContentRef;
  relation: RelationType;
  /** Which field the edge was derived from (provenance of the edge itself). */
  field: string;
}

/** Metadata for an image, capturing licensing/provenance when one is used. */
export interface ImageMeta {
  /** Local file path under /public (self-hosted; never a hotlink). */
  src: string;
  alt: string;
  width?: number;
  height?: number;
  /** Creator / author of the work. */
  creator?: string;
  /** Direct file/source URL. */
  sourceUrl?: string;
  /** The original description page (e.g. the Wikimedia Commons File: page). */
  originalPage?: string;
  /** Human-readable license, e.g. "CC BY-SA 4.0", "Public domain", "CC0". */
  license?: string;
  /** Canonical URL of the license deed. */
  licenseUrl?: string;
  /** Full attribution line to display. */
  attribution?: string;
  /** What the image depicts. */
  subject?: string;
}

/** Per-page SEO metadata. Titles and descriptions must be globally unique. */
export interface SeoMeta {
  /** Page title (without the site-name suffix, which is appended centrally). */
  title: string;
  description: string;
  keywords?: string[];
}

/**
 * Structured-data configuration. Kept minimal and honest: we only emit schema
 * that the visible page genuinely satisfies. `article` marks encyclopedic
 * reference entries; the renderer always adds WebPage + BreadcrumbList.
 */
export interface StructuredDataConfig {
  /** Emit an Article/`schema.org` node in addition to WebPage. */
  article?: boolean;
}

/**
 * Base shape shared by every structured content page. Domain-specific types
 * extend this with typed relationship fields.
 */
export interface BaseContent {
  id: string;
  /** Unique-within-type, kebab-case URL slug. */
  slug: string;
  contentType: ContentType;
  title: string;
  scientificName?: string;
  alternativeNames?: string[];
  /** Human-readable category label (e.g. "Cereal crop"). */
  category: string;
  subcategory?: string;
  /** One–two sentence summary used in cards and as a metadata fallback. */
  summary: string;
  /** Opening prose shown above the fold. */
  introduction: ContentBlock[];
  keyFacts: KeyFact[];
  sections: ContentSection[];
  /** Generic related pages beyond the typed relationship fields. */
  relatedTopics?: ContentRef[];
  /**
   * Cross-type knowledge-graph links available to every content type. This is
   * the primary mechanism for dense interconnection across the graph (e.g. a
   * crop linking to nutrients, fertilizers, climate factors, and machinery).
   * Every reference must resolve to a published page.
   */
  connections?: ContentRef[];
  sourceReferences: SourceReference[];
  /**
   * Field-level provenance for specific factual claims (Phase 2.1). Optional
   * corpus-wide; required by the validator for quantitative and safety-critical
   * claims that the audit has identified. See docs/field-level-provenance.md.
   */
  claims?: ProvenancedClaim[];
  /** Glossary term slugs relevant to this page. */
  glossaryTerms?: string[];
  /** ISO date the content was last editorially reviewed, when applicable. */
  reviewedAt?: string;
  /** ISO date the content was last updated. */
  updatedAt: string;
  /** Explicit statement of geographic applicability. */
  geographicScope: string;
  climateContext?: string;
  /** Honest, explicit limitations and sources of uncertainty. */
  limitations: string[];
  editorialStatus: EditorialStatus;
  image?: ImageMeta;
  seo: SeoMeta;
  structuredData?: StructuredDataConfig;
}

/* -------------------------------------------------------------------------- */
/*  Domain-specific content types                                             */
/* -------------------------------------------------------------------------- */

export interface CropContent extends BaseContent {
  contentType: 'crop';
  botanicalFamily?: string;
  /** e.g. "Annual", "Perennial", "Biennial". */
  lifecycle?: string;
  /** Diseases commonly associated with the crop. */
  commonDiseases: ContentRef[];
  /** Pests commonly associated with the crop. */
  commonPests: ContentRef[];
  /** Soils the crop is commonly grown on / suited to. */
  suitableSoils: ContentRef[];
}

export interface SoilContent extends BaseContent {
  contentType: 'soil';
  /** Dominant texture / particle character. */
  texture?: string;
  /** Crops commonly suited to this soil. */
  suitedCrops: ContentRef[];
}

export interface PlantDiseaseContent extends BaseContent {
  contentType: 'plant-disease';
  /** Causal agent, e.g. "Fungus (Phytophthora infestans)". */
  causalAgent?: string;
  pathogenType?: 'fungal' | 'oomycete' | 'bacterial' | 'viral' | 'other';
  /** Crops that are notable hosts. */
  hostCrops: ContentRef[];
}

export interface PestContent extends BaseContent {
  contentType: 'pest';
  /** Higher-level taxonomic grouping, e.g. "Insect — Hemiptera". */
  pestGroup?: string;
  /** Crops that are notable hosts. */
  hostCrops: ContentRef[];
}

export interface LivestockContent extends BaseContent {
  contentType: 'livestock';
  /** Primary products / purpose, e.g. "Meat, milk, hides". */
  primaryProducts?: string[];
  /** Common production systems (labels; farm-systems hub, not per-page). */
  productionSystems?: string[];
}

/**
 * Plant nutrient (macro-, secondary, and micronutrient). Relationships to
 * crops (deficiency/requirement), fertilizers (that supply it), and soils use
 * the generic `connections` and `relatedTopics` fields.
 */
export interface NutrientContent extends BaseContent {
  contentType: 'nutrient';
  nutrientClass?:
    | 'primary-macronutrient'
    | 'secondary-macronutrient'
    | 'micronutrient'
    | 'beneficial';
  /** Chemical symbol, e.g. "N", "P", "K", "Zn". */
  symbol?: string;
}

/** Fertilizer product or class (mineral, compound, organic, micronutrient). */
export interface FertilizerContent extends BaseContent {
  contentType: 'fertilizer';
  fertilizerClass?:
    | 'mineral-nitrogen'
    | 'mineral-phosphorus'
    | 'mineral-potassium'
    | 'compound-npk'
    | 'secondary-micronutrient'
    | 'organic';
  /** Typical grade / analysis, e.g. "46-0-0" for urea. */
  typicalAnalysis?: string;
}

/** Soil-science topic (a property or process rather than a soil type). */
export interface SoilTopicContent extends BaseContent {
  contentType: 'soil-topic';
  topicClass?: 'physical' | 'chemical' | 'biological' | 'management';
}

/** Agricultural machinery or equipment category. */
export interface MachineryContent extends BaseContent {
  contentType: 'machinery';
  machineryClass?:
    | 'power'
    | 'tillage'
    | 'seeding'
    | 'crop-protection'
    | 'harvest'
    | 'irrigation'
    | 'precision';
}

/** Climate factor relevant to agriculture (drought, frost, GDD, etc.). */
export interface ClimateContent extends BaseContent {
  contentType: 'climate';
  climateClass?: 'temperature' | 'water' | 'stress' | 'metric';
}

/** Agricultural production system or approach. */
export interface FarmingSystemContent extends BaseContent {
  contentType: 'farming-system';
  systemClass?: 'production-approach' | 'protected' | 'soilless' | 'integrated';
}

/** Irrigation method or water-management approach. */
export interface IrrigationMethodContent extends BaseContent {
  contentType: 'irrigation-method';
  methodClass?: 'surface' | 'pressurized' | 'localized' | 'management';
}

/** Discriminated union across every structured content type. */
export type AnyContent =
  | CropContent
  | SoilContent
  | PlantDiseaseContent
  | PestContent
  | LivestockContent
  | NutrientContent
  | FertilizerContent
  | SoilTopicContent
  | MachineryContent
  | ClimateContent
  | FarmingSystemContent
  | IrrigationMethodContent;

/* -------------------------------------------------------------------------- */
/*  Glossary                                                                  */
/* -------------------------------------------------------------------------- */

export interface GlossaryTerm {
  slug: string;
  term: string;
  definition: string;
  /** Optional related content pages. */
  related?: ContentRef[];
  sourceReferences?: SourceReference[];
}
