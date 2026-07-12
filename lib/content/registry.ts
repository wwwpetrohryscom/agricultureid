import {
  ALL_CONTENT,
  CROPS,
  SOILS,
  DISEASES,
  PESTS,
  LIVESTOCK,
} from '@/content';
import { GLOSSARY } from '@/data/glossary';
import { CONTENT_TYPE_ROUTE, type ContentType } from '@/lib/site';
import type {
  AnyContent,
  ContentRef,
  CropContent,
  GlossaryTerm,
  LivestockContent,
  PestContent,
  PlantDiseaseContent,
  SoilContent,
} from '@/types/content';

export { ALL_CONTENT, CROPS, SOILS, DISEASES, PESTS, LIVESTOCK };

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

/** Canonical site-relative path for a content item, e.g. "/crops/wheat". */
export function contentPath(type: ContentType, slug: string): string {
  return `/${CONTENT_TYPE_ROUTE[type]}/${slug}`;
}

export function contentUrlPath(item: AnyContent): string {
  return contentPath(item.contentType, item.slug);
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
