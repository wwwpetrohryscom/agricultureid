import { COMMODITIES, COMMODITY_PRODUCTS, COMMODITY_GRADES } from '@/content';
import { resolveRef } from '@/lib/content/registry';
import type {
  CommodityContent,
  CommodityGradeContent,
  CommodityProductContent,
  ContentRef,
} from '@/types/content';

const published = <T extends { editorialStatus: string }>(items: T[]): T[] =>
  items.filter((i) => i.editorialStatus === 'published');

const byTitle = <T extends { title: string }>(items: T[]): T[] =>
  [...items].sort((a, b) => a.title.localeCompare(b.title));

/** All published commodities, sorted by title. */
export const commoditiesSorted = (): CommodityContent[] =>
  byTitle(published(COMMODITIES));

/** All published commodity products, sorted by title. */
export const commodityProductsSorted = (): CommodityProductContent[] =>
  byTitle(published(COMMODITY_PRODUCTS));

/** All published grading standards, sorted by title. */
export const commodityGradesSorted = (): CommodityGradeContent[] =>
  byTitle(published(COMMODITY_GRADES));

/** Commodities harvested from a given crop (crop → commodity panel). */
export const commoditiesForCrop = (cropSlug: string): CommodityContent[] =>
  commoditiesSorted().filter((c) => c.sourceCrop?.slug === cropSlug);

/** Commodities obtained from a given livestock species. */
export const commoditiesForLivestock = (
  livestockSlug: string,
): CommodityContent[] =>
  commoditiesSorted().filter((c) => c.sourceLivestock?.slug === livestockSlug);

/** Products derived from a commodity, optionally filtered by product class. */
export const productsForCommodity = (
  commoditySlug: string,
  productClass?: CommodityProductContent['productClass'],
): CommodityProductContent[] =>
  commodityProductsSorted().filter(
    (p) =>
      p.derivedFrom?.slug === commoditySlug &&
      (!productClass || p.productClass === productClass),
  );

/** Grading standards that apply to a commodity. */
export const gradesForCommodity = (
  commoditySlug: string,
): CommodityGradeContent[] =>
  commodityGradesSorted().filter(
    (g) => g.gradedCommodity?.slug === commoditySlug,
  );

/**
 * All products of every commodity harvested from a crop — used for the
 * "Primary products" panel on a crop page, which reaches products through the
 * commodity rather than pretending the crop makes them directly.
 */
export const productsForCrop = (
  cropSlug: string,
): CommodityProductContent[] => {
  const slugs = new Set(commoditiesForCrop(cropSlug).map((c) => c.slug));
  return commodityProductsSorted().filter((p) =>
    slugs.has(p.derivedFrom?.slug),
  );
};

/** Resolve a list of refs to published items of an expected type. */
export function resolvePublished<T>(
  refs: ContentRef[] | undefined,
  type: string,
): T[] {
  return (refs ?? [])
    .filter((r) => r.type === type)
    .map((r) => resolveRef(r))
    .filter((i): i is NonNullable<typeof i> => Boolean(i))
    .filter((i) => i.editorialStatus === 'published') as unknown as T[];
}
