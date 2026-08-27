import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { PageIntro } from '@/components/content/PageIntro';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema/jsonld';
import { buildMetadata } from '@/lib/seo/metadata';
import {
  INSTRUMENT_KIND,
  INSTRUMENT_KIND_CAVEAT,
  VARIETY_REGISTRATION_CAVEAT,
} from '@/types/variety';
import {
  VARIETY_REGISTRATIONS,
  isCurrent,
  presentSpecies,
  presentRegisters,
  registrationsByKind,
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

  const byKind = registrationsByKind();
  const registers = presentRegisters();
  const currentCount = VARIETY_REGISTRATIONS.filter(isCurrent).length;
  const nationalSource = getSource('eu-pvp-national-lists');
  const marketing = byKind.get('variety-registration') ?? [];
  const ownership = byKind.get('plant-variety-protection-right') ?? [];

  /* Grouped by species, then by cultivar: a reader looking for apples should
     not have to scan potatoes, and species is what makes a denomination
     unambiguous in the first place. The grouping key is the CULTIVAR's taxon,
     because the five registers write the same species five different ways. */
  const bySpecies = presentSpecies().map((s) => {
    const entries = VARIETY_REGISTRATIONS.filter((r) =>
      s.cultivars.includes(r.cultivarRef),
    );
    return { ...s, entries };
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
          Two different things are called registration. A national list entry, a
          vine catalogue listing or a registration under a seeds act is
          PERMISSION TO MARKET the variety in a territory. A plant breeder’s
          right, a Community plant variety right or a United States certificate
          of plant variety protection is OWNERSHIP of it. They are issued by
          different bodies under different law, expire on different terms, and
          are counted separately here.
        </p>
        <p>
          Two further things are often confused with both and appear nowhere on
          this page. A recommended list or reference catalogue is a{' '}
          <em>cultivar listing</em> and carries no legal effect. Seed
          certification does not attach to a variety at all — it certifies a lot
          of seed, and the same variety yields certified and uncertified lots in
          the same season.
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
            ['Registers', registers.length],
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
          {marketing.length} entries are permission to market a variety and{' '}
          {ownership.length} are ownership of one.{' '}
          {VARIETY_REGISTRATIONS.length - currentCount} are recorded as expired,
          surrendered, withdrawn or cancelled and are shown as no longer
          current. {INSTRUMENT_KIND_CAVEAT}
        </p>
      </section>

      <section className="mt-10" aria-label="Registers read">
        <h2 className="font-serif text-xl text-forest-900">Registers read</h2>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[38rem] border-collapse text-sm">
            <thead>
              <tr className="border-b border-ink-200 text-left text-xs uppercase tracking-wide text-ink-500">
                <th scope="col" className="py-2 pr-3 font-medium">
                  Register
                </th>
                <th scope="col" className="py-2 pr-3 font-medium">
                  Jurisdiction
                </th>
                <th scope="col" className="py-2 pr-3 font-medium">
                  What an entry is
                </th>
                <th scope="col" className="py-2 font-medium">
                  Entries
                </th>
              </tr>
            </thead>
            <tbody>
              {registers.map((r) => {
                const kinds = [
                  ...new Set(
                    r.entries.map((e) => INSTRUMENT_KIND[e.instrument]),
                  ),
                ];
                return (
                  <tr key={r.id} className="border-b border-ink-100 align-top">
                    <th
                      scope="row"
                      className="py-2 pr-3 font-normal text-ink-900"
                    >
                      {r.registerName}
                    </th>
                    <td className="py-2 pr-3 text-ink-700">
                      {r.countryOrOrganisation === 'multiple'
                        ? `${new Set(r.entries.map((e) => e.countryOrOrganisation)).size} jurisdictions`
                        : r.countryOrOrganisation}
                    </td>
                    <td className="py-2 pr-3 text-ink-700">
                      {kinds
                        .map((k) =>
                          k === 'variety-registration'
                            ? 'Permission to market'
                            : 'Ownership of the variety',
                        )
                        .join(' and ')}
                    </td>
                    <td className="py-2 tabular-nums text-ink-700">
                      {r.entries.length}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10" aria-label="How entries are matched">
        <h2 className="font-serif text-xl text-forest-900">
          Why a matching name is not enough
        </h2>
        <p className="mt-2 text-sm text-ink-700">
          Variety denominations are unique only within a species group, so an
          identical name proves nothing on its own — and every register read
          here has demonstrated it independently. The bread wheat{' '}
          <em>Cadenza</em> returns a granted right for a strawberry in the EU
          portal and, separately, in the United Kingdom&rsquo;s own register.
          The apple <em>McIntosh</em> is a common wheat in the United States,
          where the tomato <em>Roma</em> is a garden bean and the grape{' '}
          <em>Merlot</em> is both a bean and a potato. Every entry on this page
          therefore also matches the register&rsquo;s own botanical species, and
          the 24 entries that matched only by name were discarded rather than
          published.
        </p>
        <p className="mt-2 text-sm text-ink-700">
          The same rule is why no grapevine appears here. Three vine registers
          were examined — the EU Plant Variety Portal, the Commission&rsquo;s
          Common Catalogue of Vine Varieties and the French official vine
          catalogue — and none publishes a botanical species for its entries.
          The Common Catalogue lists Cabernet Blanc, Cabernet Cantor and
          Cabernet Carol, German interspecific hybrids, alongside{' '}
          <em>Chardonnay</em> and <em>Merlot</em> with nothing to tell them
          apart. A genus is not a species, so no vine entry could be established
          and none is published.
        </p>
      </section>

      {bySpecies.map((s) => (
        <section key={s.taxon} className="mt-10">
          <h2 className="font-serif text-xl italic text-forest-900">
            {s.taxon}
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
          Entries were read from five registers, beginning with the{' '}
          <a
            href={nationalSource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-forest-700 hover:underline"
          >
            EU Plant Variety Portal
          </a>
          . Each covers particular species in particular territories, and none
          of them covers everything: Canada&rsquo;s register holds field crops
          only, the United States operates no national variety list at all, and
          Japan&rsquo;s register publishes denominations in Japanese script,
          which no romanised name can be identical to. Absence from this page is
          not evidence that a variety is unregistered.
        </p>
      )}
    </Container>
  );
}
