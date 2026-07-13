/** Site-relative path helpers for Phase 3B geographic pages. */

export function countryPath(slug: string): string {
  return `/countries/${slug}`;
}

export function indicatorPath(slug: string): string {
  return `/agricultural-data/${slug}`;
}

export function datasetPath(id: string): string {
  return `/datasets/${id}`;
}

export function regionPath(slug: string): string {
  return `/regions/${slug}`;
}

/** Dataset slug for an indicator id (used in /datasets/[dataset]). */
export function datasetSlug(indicatorId: string): string {
  return `worldbank-${indicatorId.toLowerCase().replace(/\./g, '-')}`;
}
