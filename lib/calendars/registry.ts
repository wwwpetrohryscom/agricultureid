/**
 * Query layer over the crop-calendar corpus.
 *
 * Calendars are DATA, not pages. A crop gets one page listing every
 * jurisdiction; individual crop×state records are rows in that table, never
 * routes of their own — thousands of near-identical pages would be pSEO, not
 * product.
 */
import { CROP_CALENDARS } from '@/data/calendars';
import { hasTimingData } from '@/types/calendar';
import type { CropCalendarEntry } from '@/types/calendar';

export { CROP_CALENDARS };

export const CALENDARS_HUB_PATH = '/crop-calendars';

export function cropCalendarPath(cropSlug: string): string {
  return `${CALENDARS_HUB_PATH}/${cropSlug}`;
}

/** Entries with at least one usable timing window. */
export function usableCalendars(): CropCalendarEntry[] {
  return CROP_CALENDARS.filter(hasTimingData);
}

/** Crops that have enough entries to justify a page. */
export function cropsWithCalendars(): string[] {
  return [...new Set(usableCalendars().map((c) => c.cropRef))].sort();
}

export function calendarsForCrop(cropSlug: string): CropCalendarEntry[] {
  return usableCalendars()
    .filter((c) => c.cropRef === cropSlug)
    .sort(
      (a, b) =>
        (a.seasonType ?? '').localeCompare(b.seasonType ?? '') ||
        a.jurisdictionName.localeCompare(b.jurisdictionName),
    );
}

export function calendarsForJurisdiction(
  jurisdictionId: string,
): CropCalendarEntry[] {
  return usableCalendars().filter((c) => c.jurisdictionId === jurisdictionId);
}

/** Seasons present for a crop, e.g. winter vs spring wheat. */
export function seasonsForCrop(cropSlug: string): string[] {
  return [
    ...new Set(
      calendarsForCrop(cropSlug)
        .map((c) => c.seasonType)
        .filter((s): s is string => Boolean(s)),
    ),
  ].sort();
}

/** Render a window as published, e.g. "Apr 19 – May 26 (most active Apr 25 – May 18)". */
export function formatWindow(w?: {
  begin?: string;
  mostActiveStart?: string;
  mostActiveEnd?: string;
  end?: string;
}): string | undefined {
  if (!w) return undefined;
  const span = w.begin && w.end ? `${w.begin} – ${w.end}` : (w.begin ?? w.end);
  if (!span) return undefined;
  const active =
    w.mostActiveStart && w.mostActiveEnd
      ? ` (most active ${w.mostActiveStart} – ${w.mostActiveEnd})`
      : '';
  return `${span}${active}`;
}
