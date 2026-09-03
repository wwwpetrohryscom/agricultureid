import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema, breadcrumbSchema } from '@/lib/schema/jsonld';
import { buildMetadata } from '@/lib/seo/metadata';
import { getSource } from '@/lib/sources/registry';
import {
  CALENDAR_CAVEAT,
  CALENDAR_FORM_SCOPE_MARKER,
  CALENDAR_GROUP_SCOPE_MARKER,
} from '@/types/calendar';
import {
  cropsWithCalendars,
  calendarsForCrop,
  seasonsForCrop,
  cropCalendarPath,
  formatWindow,
  CALENDARS_HUB_PATH,
} from '@/lib/calendars/registry';
import { PUBLISHED_CONTENT, contentUrlPath } from '@/lib/content/registry';
import { FAO_CROP_MATCHES } from '@/data/calendars/fao';
import { RelatedTools } from '@/components/tools/RelatedTools';

type Params = { params: Promise<{ crop: string }> };

export function generateStaticParams() {
  return cropsWithCalendars().map((crop) => ({ crop }));
}

const cropOf = (slug: string) =>
  PUBLISHED_CONTENT.find((c) => c.contentType === 'crop' && c.slug === slug);

/**
 * The source's own item, where it is broader than this page.
 *
 * Thirteen of the FAO matches resolve at CONCEPT_LEVEL: FAO publishes one
 * "Coffee" item and this corpus holds a coffee concept covering arabica,
 * robusta and liberica, so the windows on that page are the group's and not
 * any one species'. The distinction was recorded in the match layer from Wave
 * 42, validated there, and never shown to a reader — the page said "Coffee"
 * and the reader had no way to tell it from an exact match.
 *
 * Read from the match records rather than from the concept register, because
 * what makes the timing broad is what the SOURCE measured, not what this
 * corpus happens to model as a concept.
 */
const conceptLevelFaoNames = (slug: string) =>
  FAO_CROP_MATCHES.filter(
    (m) => m.cropRef === slug && m.granularity === 'CONCEPT_LEVEL',
  ).map((m) => m.faoName);

/** The forms of this crop the source measured separately, where it did. */
const formLevelMatches = (slug: string) =>
  FAO_CROP_MATCHES.filter(
    (m) => m.cropRef === slug && m.granularity === 'FORM_LEVEL',
  );

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { crop } = await params;
  const c = cropOf(crop);
  const entries = calendarsForCrop(crop);
  if (!c || entries.length === 0) return {};
  return buildMetadata({
    title: `${c.title} Planting and Harvest Calendar`,
    description: `Usual sowing and harvest windows for ${c.title.toLowerCase()} across ${entries.length} jurisdictions, transcribed from official agricultural statistics.`,
    path: cropCalendarPath(crop),
  });
}

export default async function CropCalendarPage({ params }: Params) {
  const { crop } = await params;
  const c = cropOf(crop);
  const entries = calendarsForCrop(crop);
  if (!c || entries.length === 0) notFound();

  const seasons = seasonsForCrop(crop);
  const groups = seasons.length > 0 ? seasons : [null];
  const sources = [...new Set(entries.flatMap((e) => e.sourceReferences))];
  const conceptNames = conceptLevelFaoNames(crop);
  const formMatches = formLevelMatches(crop);

  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={[
          webPageSchema({
            name: `${c.title} planting and harvest calendar`,
            description: `Usual sowing and harvest windows for ${c.title.toLowerCase()} by jurisdiction.`,
            path: cropCalendarPath(crop),
          }),
          breadcrumbSchema([
            { name: 'Crop Calendars', path: CALENDARS_HUB_PATH },
            { name: c.title, path: cropCalendarPath(crop) },
          ]),
        ]}
      />

      <nav aria-label="Breadcrumb" className="text-sm text-ink-500">
        <Link href={CALENDARS_HUB_PATH} className="hover:underline">
          Crop Calendars
        </Link>
        <span className="mx-2">/</span>
        <span className="text-ink-700">{c.title}</span>
      </nav>

      <header className="mt-3">
        <h1 className="font-serif text-3xl text-forest-950 lg:text-4xl">
          {c.title} planting and harvest calendar
        </h1>
        <p className="mt-4 max-w-3xl text-ink-700">
          Usual sowing and harvest windows across {entries.length}{' '}
          jurisdictions, transcribed at the granularity the official source
          publishes.{' '}
          <Link
            href={contentUrlPath(c)}
            className="text-forest-700 hover:underline"
          >
            About {c.title.toLowerCase()}
          </Link>
        </p>
      </header>

      {conceptNames.length > 0 && (
        <aside
          className="mt-6 rounded-lg border border-clay-300 bg-clay-50 p-4 text-sm text-ink-800"
          aria-label="What these windows cover"
        >
          <span className="font-medium text-clay-900">
            {CALENDAR_GROUP_SCOPE_MARKER}
          </span>{' '}
          The source publishes {conceptNames.map((n) => `"${n}"`).join(' and ')}{' '}
          as a single item, and {c.title.toLowerCase()} is a group of crops in
          this corpus. A window here is the usual timing for whatever the
          growers in that zone grow under that name, and it cannot be attributed
          to any one member of the group.
        </aside>
      )}

      {formMatches.length > 0 && (
        <aside
          className="mt-6 rounded-lg border border-clay-300 bg-clay-50 p-4 text-sm text-ink-800"
          aria-label="What these windows cover"
        >
          <span className="font-medium text-clay-900">
            {CALENDAR_FORM_SCOPE_MARKER}
          </span>{' '}
          The source records{' '}
          {formMatches.map((m) => `"${m.faoName}" (${m.form})`).join(' and ')}{' '}
          as {formMatches.length === 1 ? 'an item' : 'items'} of its own. Those
          rows describe that form, and the season column names which item each
          window came from.
        </aside>
      )}

      <aside
        className="mt-6 rounded-lg border border-olive-200 bg-olive-50/60 p-4 text-sm text-ink-700"
        aria-label="Timing caveat"
      >
        {CALENDAR_CAVEAT}
      </aside>

      {groups.map((season) => {
        const rows = entries.filter((e) =>
          season ? e.seasonType === season : true,
        );
        if (rows.length === 0) return null;
        return (
          <section key={season ?? 'all'} className="mt-10">
            {season && (
              <h2 className="font-serif text-xl text-forest-900">
                {season}
                <span className="ml-2 text-sm font-normal text-ink-500">
                  {rows.length}
                </span>
              </h2>
            )}
            {/* Wide data table scrolls inside its own container so the page
                body never scrolls horizontally on small screens. */}
            <div className="mt-3 overflow-x-auto">
              <table className="w-full min-w-[36rem] border-collapse text-sm">
                <caption className="sr-only">
                  Usual sowing and harvest windows for {c.title}
                  {season ? ` (${season})` : ''} by jurisdiction
                </caption>
                <thead>
                  <tr className="border-b border-ink-200 text-left">
                    <th
                      scope="col"
                      className="py-2 pr-4 font-semibold text-ink-700"
                    >
                      Jurisdiction
                    </th>
                    <th
                      scope="col"
                      className="py-2 pr-4 font-semibold text-ink-700"
                    >
                      Usual sowing
                    </th>
                    <th scope="col" className="py-2 font-semibold text-ink-700">
                      Usual harvest
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((e) => (
                    <tr
                      key={e.id}
                      className="border-b border-ink-100 align-top"
                    >
                      <th
                        scope="row"
                        className="py-2 pr-4 text-left font-medium text-ink-900"
                      >
                        {e.jurisdictionName}
                      </th>
                      <td className="py-2 pr-4 text-ink-700">
                        {formatWindow(e.sowingWindow) ?? '—'}
                      </td>
                      <td className="py-2 text-ink-700">
                        {formatWindow(e.harvestWindow) ?? '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        );
      })}

      <section className="mt-10">
        <h2 className="font-serif text-xl text-forest-900">Source</h2>
        <ul className="mt-3 space-y-2 text-sm">
          {sources.map((sid) => {
            const s = getSource(sid);
            if (!s) return null;
            return (
              <li key={sid}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forest-700 hover:underline"
                >
                  {s.title}
                </a>
              </li>
            );
          })}
        </ul>
        <p className="mt-3 text-sm text-ink-600">
          {entries[0]?.limitations[0]}
        </p>
      </section>

      <p className="mt-8 text-sm">
        <Link
          href={CALENDARS_HUB_PATH}
          className="text-forest-700 hover:underline"
        >
          ← All crop calendars
        </Link>
      </p>
      <RelatedTools path={CALENDARS_HUB_PATH} />
    </Container>
  );
}
