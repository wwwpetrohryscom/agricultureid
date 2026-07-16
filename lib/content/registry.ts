import {
  ALL_CONTENT,
  CROPS,
  SOILS,
  DISEASES,
  PESTS,
  LIVESTOCK,
  NUTRIENTS,
  FERTILIZERS,
  SOIL_TOPICS,
  MACHINERY,
  CLIMATE,
  FARMING_SYSTEMS,
  IRRIGATION_METHODS,
  POST_HARVEST,
  COMMODITIES,
  COMMODITY_PRODUCTS,
  COMMODITY_GRADES,
  CULTIVARS,
  BREEDS,
} from '@/content';
import { GLOSSARY } from '@/data/glossary';
import { IMAGE_MAP } from '@/data/images';
import { CONTENT_TYPE_ROUTE, type ContentType } from '@/lib/site';
import type {
  AnyContent,
  BreedContent,
  ContentRef,
  CropContent,
  CultivarContent,
  GlossaryTerm,
  ImageMeta,
  LivestockContent,
  PestContent,
  PlantDiseaseContent,
  SoilContent,
} from '@/types/content';

export {
  ALL_CONTENT,
  CROPS,
  SOILS,
  DISEASES,
  PESTS,
  LIVESTOCK,
  NUTRIENTS,
  FERTILIZERS,
  SOIL_TOPICS,
  MACHINERY,
  CLIMATE,
  FARMING_SYSTEMS,
  IRRIGATION_METHODS,
  POST_HARVEST,
  COMMODITIES,
  COMMODITY_PRODUCTS,
  COMMODITY_GRADES,
  CULTIVARS,
  BREEDS,
};

/** Only published content is publicly routable / indexable. */
export const PUBLISHED_CONTENT: AnyContent[] = ALL_CONTENT.filter(
  (c) => c.editorialStatus === 'published',
);

/** Composite key uniquely identifying a page within the whole graph. */
export function refKey(type: ContentType, slug: string): string {
  return `${type}:${slug}`;
}

const CONTENT_BY_KEY: ReadonlyMap<string, AnyContent> = new Map(
  ALL_CONTENT.map((c) => [refKey(c.contentType, c.slug), c]),
);

/** Resolve a typed content reference to its content item (published or not). */
export function resolveRef(ref: ContentRef): AnyContent | undefined {
  return CONTENT_BY_KEY.get(refKey(ref.type, ref.slug));
}

/** Look up a single item by content type + slug (published set). */
export function getContent(
  type: ContentType,
  slug: string,
): AnyContent | undefined {
  const item = CONTENT_BY_KEY.get(refKey(type, slug));
  return item && item.editorialStatus === 'published' ? item : undefined;
}

/** All published items of a given content type. */
export function getContentByType(type: ContentType): AnyContent[] {
  return PUBLISHED_CONTENT.filter((c) => c.contentType === type);
}

/** Published items of a content type, sorted by title. Used by hub pages. */
export function contentTypeSorted(type: ContentType): AnyContent[] {
  return getContentByType(type).sort((a, b) => a.title.localeCompare(b.title));
}

/** Canonical site-relative path for a content item, e.g. "/crops/wheat". */
export function contentPath(type: ContentType, slug: string): string {
  return `/${CONTENT_TYPE_ROUTE[type]}/${slug}`;
}

export function contentUrlPath(item: AnyContent): string {
  return contentPath(item.contentType, item.slug);
}

/**
 * The lead image for an item: an inline `image` field takes precedence,
 * otherwise the verified image registry (keyed by `type:slug`). Returns
 * undefined when neither exists (the renderer falls back to an original figure).
 */
export function resolveImage(item: AnyContent): ImageMeta | undefined {
  return item.image ?? IMAGE_MAP[refKey(item.contentType, item.slug)];
}

/* Typed collection accessors ------------------------------------------------ */

export const cropsSorted = (): CropContent[] =>
  [...CROPS]
    .filter((c) => c.editorialStatus === 'published')
    .sort((a, b) => a.title.localeCompare(b.title));

export const soilsSorted = (): SoilContent[] =>
  [...SOILS]
    .filter((c) => c.editorialStatus === 'published')
    .sort((a, b) => a.title.localeCompare(b.title));

export const diseasesSorted = (): PlantDiseaseContent[] =>
  [...DISEASES]
    .filter((c) => c.editorialStatus === 'published')
    .sort((a, b) => a.title.localeCompare(b.title));

export const pestsSorted = (): PestContent[] =>
  [...PESTS]
    .filter((c) => c.editorialStatus === 'published')
    .sort((a, b) => a.title.localeCompare(b.title));

export const livestockSorted = (): LivestockContent[] =>
  [...LIVESTOCK]
    .filter((c) => c.editorialStatus === 'published')
    .sort((a, b) => a.title.localeCompare(b.title));

export const cultivarsSorted = (): CultivarContent[] =>
  [...CULTIVARS]
    .filter((c) => c.editorialStatus === 'published')
    .sort((a, b) => a.title.localeCompare(b.title));

export const breedsSorted = (): BreedContent[] =>
  [...BREEDS]
    .filter((c) => c.editorialStatus === 'published')
    .sort((a, b) => a.title.localeCompare(b.title));

/** Published cultivars whose parent crop is `cropSlug` (parent-panel query). */
export const cultivarsForCrop = (cropSlug: string): CultivarContent[] =>
  cultivarsSorted().filter((c) => c.parentCrop.slug === cropSlug);

/** Published breeds whose parent species is `livestockSlug` (parent panel). */
export const breedsForLivestock = (livestockSlug: string): BreedContent[] =>
  breedsSorted().filter((b) => b.parentLivestock.slug === livestockSlug);

/* Glossary ------------------------------------------------------------------ */

const GLOSSARY_BY_SLUG: ReadonlyMap<string, GlossaryTerm> = new Map(
  GLOSSARY.map((g) => [g.slug, g]),
);

export function getGlossaryTerm(slug: string): GlossaryTerm | undefined {
  return GLOSSARY_BY_SLUG.get(slug);
}

export function glossarySorted(): GlossaryTerm[] {
  return [...GLOSSARY].sort((a, b) => a.term.localeCompare(b.term));
}

export { GLOSSARY };
