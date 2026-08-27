import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { PageIntro } from '@/components/content/PageIntro';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema/jsonld';
import { buildMetadata } from '@/lib/seo/metadata';
import { CALENDAR_CAVEAT } from '@/types/calendar';
import {
  cropsWithCalendars,
  calendarsForCrop,
  seasonsForCrop,
  cropCalendarPath,
} from '@/lib/calendars/registry';
import { PUBLISHED_CONTENT } from '@/lib/content/registry';

const TITLE = 'Crop Calendars';
const PATH = '/crop-calendars';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'When field crops are usually sown and harvested, by jurisdiction — transcribed from official agricultural statistics rather than generalised.',
  path: PATH,
});

export default function CropCalendarsPage() {
  const crops = cropsWithCalendars();
  const titleOf = (slug: string) =>
    PUBLISHED_CONTENT.find((c) => c.contentType === 'crop' && c.slug === slug)
      ?.title ?? slug;

  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description:
            'Usual sowing and harvest windows by crop and jurisdiction.',
          path: PATH,
        })}
      />

      <PageIntro
        title={TITLE}
        lead="When a crop is usually sown and harvested, by jurisdiction."
      >
        <p>
          Windows are transcribed from official agricultural statistics at the
          granularity the source publishes — begin, most-active and end dates
          per jurisdiction. Nothing here is generalised from a national average,
          and no date was derived from a seasonal description.
        </p>
        <p>
          Where a crop has distinct winter and spring forms, they are kept
          separate: conflating them would put an autumn sowing date on a spring
          crop.
        </p>
      </PageIntro>

      <aside
        className="mt-6 rounded-lg border border-olive-200 bg-olive-50/60 p-4 text-sm text-ink-700"
        aria-label="Timing caveat"
      >
        {CALENDAR_CAVEAT}
      </aside>

      <ul className="mt-8 divide-y divide-ink-100 border-y border-ink-100">
        {crops.map((slug) => {
          const entries = calendarsForCrop(slug);
          const seasons = seasonsForCrop(slug);
          return (
            <li key={slug} className="py-4">
              <p className="font-medium text-ink-900">
                <Link
                  href={cropCalendarPath(slug)}
                  className="text-forest-800 hover:underline"
                >
                  {titleOf(slug)}
                </Link>
              </p>
              <p className="mt-1 text-sm text-ink-600">
                {entries.length} jurisdictions
                {seasons.length > 0 && <> · {seasons.join(', ')}</>}
              </p>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
