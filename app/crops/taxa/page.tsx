import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { PageIntro } from '@/components/content/PageIntro';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema/jsonld';
import { buildMetadata } from '@/lib/seo/metadata';
import { CROP_TAXA_PATH } from '@/lib/crops/paths';
import {
  CROP_IDENTITIES,
  contestedIdentities,
  dataOnlyIdentities,
  familyCounts,
  genusCount,
  groupCounts,
} from '@/lib/crops/identity';
import { CROP_GROUP_LABEL, IDENTITY_CAVEAT } from '@/types/crop-identity';
import { DATA_ONLY_NOTICE } from '@/types/crop-qualification';
import type { CropGroup } from '@/types/crop-identity';

const TITLE = 'Verified Crop Taxa';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'Every cultivated plant AgricultureID holds a verified botanical identity for — the accepted name, its rank, family and genus, checked against two independent taxonomic authorities.',
  path: CROP_TAXA_PATH,
});

/**
 * One page for every verified taxon, rather than one page each.
 *
 * A taxon with a verified identity and no encyclopedia article behind it
 * belongs in the corpus — but not as a page. Fifty-five templated pages built
 * from a name and a family would be thin content wearing a botanist's coat, and
 * the crops validator fails if any of these acquires a URL of its own.
 */
export default function CropTaxaPage() {
  const groups = groupCounts();
  const dataOnly = dataOnlyIdentities();
  const contested = contestedIdentities();

  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description:
            'Verified botanical identities for cultivated crops, checked against two independent taxonomic authorities.',
          path: CROP_TAXA_PATH,
        })}
      />

      <PageIntro
        title={TITLE}
        lead="What plant each crop actually is, according to the botanical authorities — and where they disagree."
      >
        <p>
          A common name is not an identity. &ldquo;Yam&rdquo; is several
          Dioscorea species with different agronomy, and in parts of North
          America it is a sweet potato, which is a different plant in a
          different family. &ldquo;Millet&rdquo; covers grasses from at least
          four genera. Matching on a name alone gets those wrong.
        </p>
        <p>
          Every name below was resolved against{' '}
          <strong>two independent authorities</strong> — World Flora Online and
          Kew&rsquo;s Plants of the World Online. Where they agreed, the name is
          published. Where they disagreed, both readings are shown and the
          difference is stated.
        </p>
        <p>{IDENTITY_CAVEAT}</p>
      </PageIntro>

      <section className="mt-8" aria-label="Summary">
        <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            ['Verified taxa', CROP_IDENTITIES.length],
            ['Botanical families', familyCounts().length],
            ['Genera', genusCount()],
            ['Authorities differ', contested.length],
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

      {groups.map(({ group }) => {
        const inGroup = CROP_IDENTITIES.filter((c) =>
          c.cropGroups.includes(group as CropGroup),
        ).sort((a, b) =>
          a.primaryCommonName.localeCompare(b.primaryCommonName),
        );
        if (inGroup.length === 0) return null;
        return (
          <section
            key={group}
            id={group}
            className="mt-10"
            aria-label={CROP_GROUP_LABEL[group]}
          >
            <h2 className="font-serif text-xl text-forest-900">
              {CROP_GROUP_LABEL[group]}
              <span className="ml-2 font-sans text-sm font-normal text-ink-500">
                {inGroup.length}
              </span>
            </h2>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full min-w-[40rem] border-collapse text-sm">
                <caption className="sr-only">
                  Verified taxa in {CROP_GROUP_LABEL[group]}
                </caption>
                <thead>
                  <tr className="border-b border-ink-200 text-left">
                    <th
                      scope="col"
                      className="py-2 pr-4 font-medium text-ink-600"
                    >
                      Crop
                    </th>
                    <th
                      scope="col"
                      className="py-2 pr-4 font-medium text-ink-600"
                    >
                      Accepted name
                    </th>
                    <th
                      scope="col"
                      className="py-2 pr-4 font-medium text-ink-600"
                    >
                      Family
                    </th>
                    <th scope="col" className="py-2 font-medium text-ink-600">
                      Harvested
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {inGroup.map((c) => (
                    <tr key={c.slug} className="border-b border-ink-100">
                      <td className="py-2 pr-4">
                        {c.cropPageSlug ? (
                          <Link
                            href={`/crops/${c.cropPageSlug}`}
                            className="text-forest-700 hover:underline"
                          >
                            {c.primaryCommonName}
                          </Link>
                        ) : (
                          <span
                            className="text-ink-800"
                            title={DATA_ONLY_NOTICE}
                          >
                            {c.primaryCommonName}
                          </span>
                        )}
                        {c.agreement !== 'agreed' && (
                          <span
                            className="ml-2 text-[0.625rem] uppercase tracking-wide text-clay-700"
                            title={c.agreementNote}
                          >
                            authorities differ
                          </span>
                        )}
                      </td>
                      <td className="py-2 pr-4 italic text-ink-800">
                        {c.acceptedScientificName}
                      </td>
                      <td className="py-2 pr-4 text-ink-700">{c.family}</td>
                      <td className="py-2 text-ink-700">
                        {c.harvestedParts
                          .map((p) => p.replace(/-/g, ' '))
                          .join(', ')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        );
      })}

      <section className="mt-12 rounded-lg border border-ink-200 bg-parchment-50 p-5">
        <h2 className="font-serif text-lg text-forest-900">
          Why {dataOnly.length} of these have no page
        </h2>
        <p className="mt-2 text-sm text-ink-700">
          A verified taxon is worth holding. A taxon plus a template is not
          worth publishing. These {dataOnly.length} have a checked identity and
          appear here, in search and in relationships — but no encyclopedia
          article has been written for them yet, and generating one from a name
          and a family would produce a page that says nothing a reader could not
          get from this table. When an article is written, the taxon gets a
          page.
        </p>
        <p className="mt-3 text-sm text-ink-700">
          The crops validator enforces this: it fails the build if a data-only
          taxon acquires a URL. Each one is assessed against the same
          publication standard as the articles that do have pages, and the
          assessment says what is missing — for almost all of them, the missing
          thing is simply that nobody has written the article yet.
        </p>
      </section>

      {contested.length > 0 && (
        <section className="mt-10" aria-label="Where the authorities disagree">
          <h2 className="font-serif text-xl text-forest-900">
            Where the authorities disagree
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-ink-700">
            Taxonomy is a living science and two authorities can read the same
            plant differently. Neither is a mistake, and resolving the
            difference silently would hide it from a reader comparing this
            corpus with either source.
          </p>
          <div className="mt-4 space-y-4">
            {contested.map((c) => (
              <article
                key={c.slug}
                className="rounded-lg border border-ink-100 bg-[#FAFAF7] p-4"
              >
                <h3 className="font-medium text-ink-900">
                  {c.primaryCommonName}
                  <span className="ml-2 text-sm font-normal italic text-ink-600">
                    {c.acceptedScientificName}
                  </span>
                </h3>
                <p className="mt-2 text-sm text-ink-700">{c.agreementNote}</p>
              </article>
            ))}
          </div>
        </section>
      )}
    </Container>
  );
}
