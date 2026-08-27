import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { PageIntro } from '@/components/content/PageIntro';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema/jsonld';
import { buildMetadata } from '@/lib/seo/metadata';
import { HISTORY_CAVEAT, HISTORY_SCOPE_CAVEAT } from '@/types/history';
import {
  CHANGE_HUB_PATH,
  byJurisdiction,
  changeEvents,
  detectionOnly,
  eventsByType,
  officiallyDated,
  officiallyDatedByYear,
} from '@/lib/history/registry';
import { authorityEvents } from '@/lib/history/derive';

const TITLE = 'Agricultural Change History';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'What official agricultural registers have changed, when they say it happened, and what AgricultureID knows only from having looked.',
  path: CHANGE_HUB_PATH,
});

const TYPE_LABEL: Record<string, string> = {
  'input-authorization': 'Input authorisations',
  'variety-registration': 'Variety registrations',
  authority: 'Agricultural authorities',
};

export default function AgriculturalChangesPage() {
  const all = changeEvents();
  const dated = officiallyDated();
  const undated = detectionOnly();
  const byType = eventsByType();
  const years = officiallyDatedByYear().filter(
    (y) => Number(y.year) >= 2015 && Number(y.year) <= 2026,
  );
  const jurisdictions = byJurisdiction();
  const renames = authorityEvents();
  const maxYear = Math.max(...years.map((y) => y.count), 1);

  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description:
            'Recorded changes in official agricultural registers, separated by whether the source states when they took effect.',
          path: CHANGE_HUB_PATH,
        })}
      />

      <PageIntro
        title={TITLE}
        lead="What official registers have changed — and the difference between when it happened and when we noticed."
      >
        <p>
          A change has two dates and they are almost never the same. The
          register states when a decision took effect; AgricultureID knows when
          it read the register. An EU approval that ended in 2021 was read into
          this corpus in 2026, and reporting the second as the first would say
          the substance was approved for five years after it was not.
        </p>
        <p>
          So the two are counted separately on this page and labelled separately
          everywhere else. Where a source publishes no date at all, no date is
          shown — not a substitute.
        </p>
      </PageIntro>

      <section className="mt-8" aria-label="Summary">
        <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            ['Recorded changes', all.length.toLocaleString('en')],
            ['With an official date', dated.length.toLocaleString('en')],
            ['Date not published', undated.length.toLocaleString('en')],
            ['Jurisdictions', jurisdictions.length],
          ].map(([label, value]) => (
            <div
              key={String(label)}
              className="rounded-lg border border-ink-100 bg-[#FAFAF7] p-3"
            >
              <dt className="text-xs uppercase tracking-wide text-ink-500">
                {label}
              </dt>
              <dd className="mt-1 font-serif text-2xl text-forest-900">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-10" aria-label="What kind of thing changed">
        <h2 className="font-serif text-xl text-forest-900">
          What kind of thing changed
        </h2>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[34rem] border-collapse text-sm">
            <thead>
              <tr className="border-b border-ink-200 text-left text-xs uppercase tracking-wide text-ink-500">
                <th scope="col" className="py-2 pr-3 font-medium">
                  Entity
                </th>
                <th scope="col" className="py-2 pr-3 font-medium">
                  Changes
                </th>
                <th scope="col" className="py-2 pr-3 font-medium">
                  With an official date
                </th>
                <th scope="col" className="py-2 font-medium">
                  Where it is shown
                </th>
              </tr>
            </thead>
            <tbody>
              {[...byType.entries()]
                .sort((a, b) => b[1].length - a[1].length)
                .map(([type, events]) => (
                  <tr key={type} className="border-b border-ink-100 align-top">
                    <th
                      scope="row"
                      className="py-2 pr-3 font-normal text-ink-900"
                    >
                      {TYPE_LABEL[type] ?? type}
                    </th>
                    <td className="py-2 pr-3 tabular-nums text-ink-700">
                      {events.length.toLocaleString('en')}
                    </td>
                    <td className="py-2 pr-3 tabular-nums text-ink-700">
                      {events
                        .filter((e) => e.occurredAt)
                        .length.toLocaleString('en')}
                    </td>
                    <td className="py-2 text-ink-600">
                      {type === 'input-authorization' ? (
                        <Link
                          href="/agricultural-inputs"
                          className="text-forest-800 hover:underline"
                        >
                          on the register listings
                        </Link>
                      ) : type === 'variety-registration' ? (
                        <Link
                          href="/variety-registration"
                          className="text-forest-800 hover:underline"
                        >
                          on each cultivar page
                        </Link>
                      ) : (
                        <Link
                          href="/agricultural-authorities"
                          className="text-forest-800 hover:underline"
                        >
                          on each authority page
                        </Link>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>

      <section
        className="mt-10"
        aria-label="When registers say changes took effect"
      >
        <h2 className="font-serif text-xl text-forest-900">
          When the registers say it happened
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-ink-700">
          Only the {dated.length.toLocaleString('en')} changes whose source
          publishes an effective date appear here, by the year the source
          states. The other {undated.length.toLocaleString('en')} are real
          changes with no published date, and they are not placed on this
          timeline at all.
        </p>
        <ul className="mt-4 space-y-1">
          {years.map((y) => (
            <li key={y.year} className="flex items-center gap-3 text-sm">
              <span className="w-12 font-mono tabular-nums text-ink-500">
                {y.year}
              </span>
              <span
                className="h-3 rounded-sm bg-olive-300"
                style={{ width: `${Math.max(2, (y.count / maxYear) * 100)}%` }}
                aria-hidden="true"
              />
              <span className="tabular-nums text-ink-600">
                {y.count.toLocaleString('en')}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10" aria-label="Where changes were recorded">
        <h2 className="font-serif text-xl text-forest-900">
          Where they were recorded
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-ink-700">
          This is a map of which registers AgricultureID reads, not of where
          agriculture changes. France and Canada dominate because their
          registers publish their whole history, including every authorisation
          that has ended; a register that publishes only what is current
          contributes nothing here however much it changes.
        </p>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[26rem] border-collapse text-sm">
            <thead>
              <tr className="border-b border-ink-200 text-left text-xs uppercase tracking-wide text-ink-500">
                <th scope="col" className="py-2 pr-3 font-medium">
                  Jurisdiction
                </th>
                <th scope="col" className="py-2 font-medium">
                  Recorded changes
                </th>
              </tr>
            </thead>
            <tbody>
              {jurisdictions.slice(0, 12).map((j) => (
                <tr
                  key={j.jurisdictionName}
                  className="border-b border-ink-100"
                >
                  <th
                    scope="row"
                    className="py-1.5 pr-3 font-normal text-ink-900"
                  >
                    {j.jurisdictionName}
                  </th>
                  <td className="py-1.5 tabular-nums text-ink-700">
                    {j.count.toLocaleString('en')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10" aria-label="Authorities that were renamed">
        <h2 className="font-serif text-xl text-forest-900">
          Authorities that were renamed
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-ink-700">
          Two of eighty authorities record a former name in their own
          verification notes. The other seventy-eight do not, and that is not
          evidence they have always been called what they are called now — an
          alias, an abbreviation or a legacy domain is not a former name, and
          building a chronology out of one would invent renames wholesale.
        </p>
        {renames.map((e) => (
          <div
            key={e.id}
            className="mt-4 rounded-lg border border-ink-100 bg-[#FAFAF7] p-4 text-sm"
          >
            <p className="text-ink-900">
              <span className="text-ink-500 line-through">
                {e.previousValue}
              </span>
              {' → '}
              <span className="font-medium">{e.currentValue}</span>
            </p>
            <p className="mt-1 text-xs text-ink-500">
              {e.jurisdictionName} · observed {e.detectedAt} · the date the
              rename took effect is not established
            </p>
            <p className="mt-2 text-ink-700">{e.explanation}</p>
          </div>
        ))}
      </section>

      <aside
        className="mt-10 rounded-lg border border-olive-200 bg-olive-50/60 p-4 text-sm text-ink-700"
        aria-label="How to read this page"
      >
        <p>{HISTORY_CAVEAT}</p>
        <p className="mt-2">{HISTORY_SCOPE_CAVEAT}</p>
      </aside>
    </Container>
  );
}
