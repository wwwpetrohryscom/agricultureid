import Link from 'next/link';
import {
  calendarsForCrop,
  cropCalendarPath,
  seasonsForCrop,
} from '@/lib/calendars/registry';

/**
 * Link from a crop page to its planting/harvest calendar.
 *
 * Renders nothing when the crop has no calendar entries, so a crop without
 * transcribed timing data never advertises an empty page. This is also the
 * crawl path that makes calendar pages reachable from the crop corpus rather
 * than only from their own hub.
 */
export function CropCalendarLink({ cropSlug }: { cropSlug: string }) {
  const entries = calendarsForCrop(cropSlug);
  if (entries.length === 0) return null;
  const seasons = seasonsForCrop(cropSlug);

  return (
    <section className="mt-8 rounded-lg border border-ink-100 bg-[#FAFAF7] p-4">
      <h2 className="font-serif text-lg text-forest-900">
        Planting and harvest calendar
      </h2>
      <p className="mt-1 text-sm text-ink-600">
        Usual sowing and harvest windows across {entries.length} jurisdictions
        {seasons.length > 0 && (
          <>, covering {seasons.join(' and ').toLowerCase()}</>
        )}
        .
      </p>
      <p className="mt-2 text-sm">
        <Link
          href={cropCalendarPath(cropSlug)}
          className="text-forest-700 hover:underline"
        >
          View the calendar
        </Link>
      </p>
    </section>
  );
}
