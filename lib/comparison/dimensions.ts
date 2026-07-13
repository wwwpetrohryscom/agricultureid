import { resolveRef } from '@/lib/content/registry';
import type { AnyContent, ContentRef } from '@/types/content';
import type { ComparisonEntityType } from '@/types/comparison';

export interface Dimension {
  key: string;
  label: string;
  unit?: string;
  resolve: (item: AnyContent) => string | null;
}

const refTitles = (
  refs: ContentRef[] | undefined,
  limit = 6,
): string | null => {
  if (!refs?.length) return null;
  const titles = refs
    .map((r) => resolveRef(r))
    .filter((c) => c && c.editorialStatus === 'published')
    .map((c) => c!.title);
  return titles.length ? titles.slice(0, limit).join(', ') : null;
};

const list = (arr: string[] | undefined): string | null =>
  arr?.length ? arr.join(', ') : null;

/**
 * Comparable dimensions per entity type. Each resolver reads a field from the
 * source entity — comparison facts are never hand-duplicated. Non-comparable or
 * absent values render as "—".
 */
export const DIMENSIONS: Record<
  Exclude<ComparisonEntityType, 'country'>,
  Dimension[]
> = {
  crop: [
    { key: 'category', label: 'Category', resolve: (i) => i.category ?? null },
    {
      key: 'scientificName',
      label: 'Scientific name',
      resolve: (i) => i.scientificName ?? null,
    },
    {
      key: 'botanicalFamily',
      label: 'Botanical family',
      resolve: (i) =>
        i.contentType === 'crop' ? (i.botanicalFamily ?? null) : null,
    },
    {
      key: 'lifecycle',
      label: 'Lifecycle',
      resolve: (i) => (i.contentType === 'crop' ? (i.lifecycle ?? null) : null),
    },
    {
      key: 'commonDiseases',
      label: 'Common diseases',
      resolve: (i) =>
        i.contentType === 'crop' ? refTitles(i.commonDiseases) : null,
    },
    {
      key: 'commonPests',
      label: 'Common pests',
      resolve: (i) =>
        i.contentType === 'crop' ? refTitles(i.commonPests) : null,
    },
    {
      key: 'suitableSoils',
      label: 'Suitable soils',
      resolve: (i) =>
        i.contentType === 'crop' ? refTitles(i.suitableSoils) : null,
    },
  ],
  cultivar: [
    {
      key: 'parentCrop',
      label: 'Parent crop',
      resolve: (i) =>
        i.contentType === 'cultivar'
          ? (resolveRef(i.parentCrop)?.title ?? i.parentCrop.slug)
          : null,
    },
    {
      key: 'cultivarType',
      label: 'Type',
      resolve: (i) =>
        i.contentType === 'cultivar' ? (i.cultivarType ?? null) : null,
    },
    {
      key: 'origin',
      label: 'Origin',
      resolve: (i) =>
        i.contentType === 'cultivar'
          ? [i.originRegion, i.originCountry].filter(Boolean).join(', ') || null
          : null,
    },
    {
      key: 'maturityClass',
      label: 'Maturity',
      resolve: (i) =>
        i.contentType === 'cultivar' ? (i.maturityClass ?? null) : null,
    },
    {
      key: 'growthHabit',
      label: 'Growth habit',
      resolve: (i) =>
        i.contentType === 'cultivar' ? (i.growthHabit ?? null) : null,
    },
    {
      key: 'registrationStatus',
      label: 'Registry status',
      resolve: (i) =>
        i.contentType === 'cultivar' ? i.registrationStatus : null,
    },
    {
      key: 'intendedUse',
      label: 'Intended use',
      resolve: (i) =>
        i.contentType === 'cultivar' ? list(i.intendedUse) : null,
    },
    {
      key: 'qualityTraits',
      label: 'Quality traits',
      resolve: (i) =>
        i.contentType === 'cultivar' ? list(i.qualityTraits) : null,
    },
  ],
  breed: [
    {
      key: 'species',
      label: 'Species',
      resolve: (i) => (i.contentType === 'breed' ? (i.species ?? null) : null),
    },
    {
      key: 'breedType',
      label: 'Type',
      resolve: (i) =>
        i.contentType === 'breed' ? (i.breedType ?? null) : null,
    },
    {
      key: 'origin',
      label: 'Origin',
      resolve: (i) =>
        i.contentType === 'breed'
          ? [i.originRegion, i.originCountry].filter(Boolean).join(', ') || null
          : null,
    },
    {
      key: 'primaryUses',
      label: 'Primary uses',
      resolve: (i) => (i.contentType === 'breed' ? list(i.primaryUses) : null),
    },
    {
      key: 'climateAdaptation',
      label: 'Climate adaptation',
      resolve: (i) =>
        i.contentType === 'breed' ? (i.climateAdaptation ?? null) : null,
    },
    {
      key: 'conservationStatus',
      label: 'Conservation status',
      resolve: (i) =>
        i.contentType === 'breed' ? (i.conservationStatus ?? null) : null,
    },
  ],
  fertilizer: [
    { key: 'category', label: 'Category', resolve: (i) => i.category ?? null },
    {
      key: 'fertilizerClass',
      label: 'Class',
      resolve: (i) =>
        i.contentType === 'fertilizer' ? (i.fertilizerClass ?? null) : null,
    },
    {
      key: 'typicalAnalysis',
      label: 'Typical grade (N-P₂O₅-K₂O)',
      resolve: (i) =>
        i.contentType === 'fertilizer' ? (i.typicalAnalysis ?? null) : null,
    },
  ],
  soil: [
    {
      key: 'texture',
      label: 'Texture',
      resolve: (i) => (i.contentType === 'soil' ? (i.texture ?? null) : null),
    },
    { key: 'category', label: 'Category', resolve: (i) => i.category ?? null },
    {
      key: 'suitedCrops',
      label: 'Suited crops',
      resolve: (i) =>
        i.contentType === 'soil' ? refTitles(i.suitedCrops) : null,
    },
  ],
};

export function dimensionsFor(
  type: Exclude<ComparisonEntityType, 'country'>,
): Dimension[] {
  return DIMENSIONS[type];
}
