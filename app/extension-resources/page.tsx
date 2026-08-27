import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { PageIntro } from '@/components/content/PageIntro';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema/jsonld';
import { buildMetadata } from '@/lib/seo/metadata';
import {
  EXTENSION_CAVEAT,
  TOPIC_LABEL,
  type ExtensionTopic,
} from '@/types/extension';
import {
  EXTENSION_RESOURCES,
  EXTENSION_INSTITUTIONS,
  EXTENSION_HUB_PATH,
  resourcesByTopic,
  presentTopics,
  institutionFor,
  isDated,
  statedDate,
} from '@/lib/extension/registry';
import { getSource } from '@/lib/sources/registry';

const TITLE = 'Official Extension Resources';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'An index of agronomic guidance published by extension services and public bodies — who published it, for which jurisdiction, about what, and where to read it at the source.',
  path: EXTENSION_HUB_PATH,
});

const MANDATE_LABEL: Record<string, string> = {
  'land-grant-cooperative-extension': 'Land-grant Cooperative Extension',
  'government-department': 'Government department',
  'statutory-levy-body': 'Statutory levy body',
  'public-research-institute': 'Public research institute',
};

export default function ExtensionResourcesPage() {
  const byTopic = resourcesByTopic();
  const topics = presentTopics();
  const dated = EXTENSION_RESOURCES.filter(isDated).length;

  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description:
            'Index of official public extension and agronomic guidance.',
          path: EXTENSION_HUB_PATH,
        })}
      />

      <PageIntro
        title={TITLE}
        lead="Agronomic guidance published by public extension services — indexed, not copied."
      >
        <p>
          This is a pointer index. The guidance itself stays with its publisher,
          which is both the copyright position and the correct one: extension
          advice is revised, and a copy here would go stale while still looking
          authoritative. Every description below is written for this index; none
          is an extract.
        </p>
        <p>
          Each resource keeps the jurisdiction it was written for. Pennsylvania
          orchard timing is right for Pennsylvania and wrong almost everywhere
          else, so nothing here is presented as general guidance, and the index
          never restates a publisher&rsquo;s recommendations as its own.
        </p>
      </PageIntro>

      <aside
        className="mt-6 rounded-lg border border-olive-200 bg-olive-50/60 p-4 text-sm text-ink-700"
        aria-label="Extension caveat"
      >
        {EXTENSION_CAVEAT}
      </aside>

      <section className="mt-8" aria-label="Coverage">
        <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            ['Resources', EXTENSION_RESOURCES.length],
            ['Publishers', EXTENSION_INSTITUTIONS.length],
            ['Topics', topics.length],
            ['With a publisher date', dated],
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
        <p className="mt-3 max-w-2xl text-sm text-ink-600">
          {EXTENSION_RESOURCES.length - dated} resources carry no date because
          their publisher states none. They are recorded as verified reachable,
          which is not the same as current.
        </p>
      </section>

      <section className="mt-10" aria-label="Publishers">
        <h2 className="font-serif text-xl text-forest-900">
          Who publishes this guidance
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-ink-700">
          A university domain does not make a page official extension. Each
          publisher below states the mandate it holds, and that statement was
          read from the institution&rsquo;s own pages.
        </p>
        <ul className="mt-3 space-y-4">
          {EXTENSION_INSTITUTIONS.map((i) => {
            const src = getSource(i.sourceReferences[0] ?? '');
            const count = EXTENSION_RESOURCES.filter(
              (r) => r.institutionId === i.id,
            ).length;
            return (
              <li key={i.id} className="border-t border-ink-100 pt-3 text-sm">
                <p className="font-medium text-ink-900">
                  {i.officialName}
                  <span className="ml-2 text-xs font-normal text-ink-500">
                    {MANDATE_LABEL[i.mandate] ?? i.mandate} ·{' '}
                    {i.jurisdictionId ?? i.countryCode} · {count} resources
                  </span>
                </p>
                <p className="mt-1 text-ink-700">{i.mandateBasis}</p>
                <p className="mt-1 text-xs text-ink-500">
                  <a
                    href={i.homepageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-forest-700 hover:underline"
                  >
                    {i.homepageUrl}
                  </a>
                  {src && <> · evidence tier {src.reliability}</>}
                </p>
              </li>
            );
          })}
        </ul>
      </section>

      {topics.map((topic: ExtensionTopic) => {
        const rows = (byTopic.get(topic) ?? []).sort((a, b) =>
          a.officialTitle.localeCompare(b.officialTitle),
        );
        return (
          <section key={topic} id={topic} className="mt-10">
            <h2 className="font-serif text-xl text-forest-900">
              {TOPIC_LABEL[topic]}
              <span className="ml-2 text-sm font-normal text-ink-500">
                {rows.length}
              </span>
            </h2>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full min-w-[36rem] border-collapse text-sm">
                <caption className="sr-only">
                  Extension resources about {TOPIC_LABEL[topic].toLowerCase()}
                </caption>
                <thead>
                  <tr className="border-b border-ink-200 text-left text-xs uppercase tracking-wide text-ink-500">
                    <th scope="col" className="py-2 pr-4 font-medium">
                      Resource
                    </th>
                    <th scope="col" className="py-2 pr-4 font-medium">
                      Published for
                    </th>
                    <th scope="col" className="py-2 font-medium">
                      Publisher date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => {
                    const institution = institutionFor(r.institutionId);
                    return (
                      <tr
                        key={r.id}
                        className="border-b border-ink-100 align-top"
                      >
                        <th
                          scope="row"
                          className="py-2 pr-4 font-normal text-ink-900"
                        >
                          <a
                            href={r.officialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-forest-800 hover:underline"
                          >
                            {r.officialTitle}
                          </a>
                          <span className="block text-xs text-ink-500">
                            {institution?.officialName ?? r.institutionId}
                          </span>
                        </th>
                        <td className="py-2 pr-4 text-ink-700">
                          {r.jurisdictionId ?? r.countryCode}
                        </td>
                        <td className="py-2 text-ink-600">
                          {isDated(r) ? statedDate(r) : 'none stated'}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        );
      })}

      <p className="mt-10 max-w-2xl text-sm text-ink-600">
        Resources are linked to crops, pests, diseases and topics from their
        title and subject only. A crop mentioned in a section heading does not
        make a document about that crop, and this index does not guess.{' '}
        <Link
          href="/methodology/data"
          className="text-forest-700 hover:underline"
        >
          How data is verified
        </Link>
      </p>
    </Container>
  );
}
