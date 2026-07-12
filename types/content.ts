import type { ContentType } from '@/lib/site';

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

/** Metadata for an image, capturing licensing/provenance when one is used. */
export interface ImageMeta {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  creator?: string;
  sourceUrl?: string;
  license?: string;
  attribution?: string;
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
  sourceReferences: SourceReference[];
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

/** Discriminated union across every structured content type. */
export type AnyContent =
  | CropContent
  | SoilContent
  | PlantDiseaseContent
  | PestContent
  | LivestockContent;

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
