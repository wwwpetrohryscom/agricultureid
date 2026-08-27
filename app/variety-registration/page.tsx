import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { PageIntro } from '@/components/content/PageIntro';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema/jsonld';
import { buildMetadata } from '@/lib/seo/metadata';
import { VARIETY_REGISTRATION_CAVEAT } from '@/types/variety';
import {
  VARIETY_REGISTRATIONS,
  isCurrent,
  presentSpecies,
  presentJurisdictions,
  registrationsByInstrument,
} from '@/lib/varieties/registry';
import { PUBLISHED_CONTENT, contentUrlPath } from '@/lib/content/registry';
import { getSource } from '@/lib/sources/registry';

const TITLE = 'Official Variety Registration';
const PATH = '/variety-registration';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'Which cultivars appear in official variety registers, in which countries, under which legal instrument, and whether the entry is still current.',
  path: PATH,
});

export default function VarietyRegistrationPage() {
  const cultivarOf = (slug: string) =>
    PUBLISHED_CONTENT.find(
      (c) => c.contentType === 'cultivar' && c.slug === slug,
    );

  const species = presentSpecies();
  const byInstrument = registrationsByInstrument();
  const currentCount = VARIETY_REGISTRATIONS.filter(isCurrent).length;
  const nationalSource = getSource('eu-pvp-national-lists');

  /* Grouped by species, then by cultivar: a reader looking for apples should
     not have to scan potatoes, and species is what makes a denomination
     unambiguous in the first place. */
  const bySpecies = species.map((s) => {
    const entries = VARIETY_REGISTRATIONS.filter(
      (r) => r.upovSpeciesCode === s.code,
    );
    const cultivars = [...new Set(entries.map((r) => r.cultivarRef))].sort();
    return { ...s, entries, cultivars };
  });

  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description:
            'Official variety register entries recorded for cultivars in the AgricultureID corpus.',
          path: PATH,
        })}
      />

      <PageIntro
        title={TITLE}
        lead="Which cultivars appear in official variety registers — and what an entry does and does not mean."
      >
        <p>
          A national list entry permits seed of a variety to be marketed in that
          country. A Community plant variety right is an EU-wide intellectual
          property grant. They are issued by different bodies under different
          law, so they are counted separately here and never added together.
        </p>
        <p>
          Registration is also separate from cultivation: a variety absent from
          every register on this page may still be widely grown, and a variety
          listed in ten countries may be sold in none of them.
        </p>
      </PageIntro>

      <aside
        className="mt-6 rounded-lg border border-olive-200 bg-olive-50/60 p-4 text-sm text-ink-700"
        aria-label="Registration caveat"
      >
        {VARIETY_REGISTRATION_CAVEAT}
      </aside>

      <section className="mt-8" aria-label="Summary">
        <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            ['Register entries', VARIETY_REGISTRATIONS.length],
            ['Still current', currentCount],
            [
              'Cultivars',
              new Set(VARIETY_REGISTRATIONS.map((r) => r.cultivarRef)).size,
            ],
            ['Registers', presentJurisdictions().length],
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
        <p className="mt-3 text-sm text-ink-600">
          {byInstrument.get('national-list')?.length ?? 0} national list entries
          and {byInstrument.get('community-plant-variety-right')?.length ?? 0}{' '}
          Community plant variety right
          {(byInstrument.get('community-plant-variety-right')?.length ?? 0) ===
          1
            ? ''
            : 's'}
          . {VARIETY_REGISTRATIONS.length - currentCount} entries are recorded
          as expired or surrendered and are shown as no longer listed.
        </p>
      </section>

      <section className="mt-10" aria-label="How entries are matched">
        <h2 className="font-serif text-xl text-forest-900">
          Why a matching name is not enough
        </h2>
        <p className="mt-2 text-sm text-ink-700">
          Variety denominations are unique only within a species group, so an
          identical name proves nothing on its own. Searching these registers
          for the bread wheat <em>Cadenza</em> returns a granted plant variety
          right for a strawberry of the same name; the potato <em>Charlotte</em>{' '}
          collides with a strawberry, a peach, a cucumber and an apple. Every
          entry on this page therefore also matches the register&rsquo;s own
          botanical species, and entries that matched only by name were
          discarded rather than published.
        </p>
      </section>

      {bySpecies.map((s) => (
        <section key={s.code} className="mt-10">
          <h2 className="font-serif text-xl italic text-forest-900">
            {s.name}
            <span className="ml-2 text-sm font-normal not-italic text-ink-500">
              {s.entries.length} entries · {s.cultivars.length} cultivars
            </span>
          </h2>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full min-w-[36rem] border-collapse text-sm">
              <thead>
                <tr className="border-b border-ink-200 text-left text-xs uppercase tracking-wide text-ink-500">
                  <th scope="col" className="py-2 pr-3 font-medium">
                    Cultivar
                  </th>
                  <th scope="col" className="py-2 pr-3 font-medium">
                    Currently listed in
                  </th>
                  <th scope="col" className="py-2 font-medium">
                    No longer listed in
                  </th>
                </tr>
              </thead>
              <tbody>
                {s.cultivars.map((slug) => {
                  const rows = s.entries.filter((r) => r.cultivarRef === slug);
                  const cultivar = cultivarOf(slug);
                  const current = rows.filter(isCurrent);
                  const past = rows.filter((r) => !isCurrent(r));
                  return (
                    <tr
                      key={slug}
                      className="border-b border-ink-100 align-top"
                    >
                      <th
                        scope="row"
                        className="py-2 pr-3 font-normal text-ink-900"
                      >
                        {cultivar ? (
                          <Link
                            href={contentUrlPath(cultivar)}
                            className="text-forest-800 hover:underline"
                          >
                            {cultivar.title}
                          </Link>
                        ) : (
                          slug
                        )}
                      </th>
                      <td className="py-2 pr-3 text-ink-700">
                        {current.length
                          ? current
                              .map((r) => r.countryOrOrganisation)
                              .join(', ')
                          : '—'}
                      </td>
                      <td className="py-2 text-ink-500">
                        {past.length
                          ? past
                              .map(
                                (r) =>
                                  `${r.countryOrOrganisation} (${r.publishedStatusWording.toLowerCase()})`,
                              )
                              .join(', ')
                          : '—'}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      ))}

      {nationalSource && (
        <p className="mt-10 text-sm text-ink-600">
          Entries were read from the{' '}
          <a
            href={nationalSource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-forest-700 hover:underline"
          >
            EU Plant Variety Portal
          </a>
          , which covers EU and cooperating-country registers for EU-regulated
          species. Absence from this page is not evidence that a variety is
          unregistered elsewhere.
        </p>
      )}
    </Container>
  );
}
