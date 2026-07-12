import type { Metadata } from 'next';
import { SourceCard } from '@/components/cards/SourceCard';
import { PageIntro } from '@/components/content/PageIntro';
import { Container } from '@/components/ui/Container';
import { JsonLd } from '@/components/seo/JsonLd';
import { allSourcesSorted, SOURCES } from '@/lib/sources/registry';
import { webPageSchema } from '@/lib/schema/jsonld';
import { pageBreadcrumbs } from '@/lib/seo/breadcrumbs';
import { buildMetadata } from '@/lib/seo/metadata';
import { SOURCE_RELIABILITY_LABEL } from '@/types/sources';

const TITLE = 'Sources';
const PATH = '/sources';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: `The registry of ${SOURCES.length} authoritative organizations and publications AgricultureID references — governments, intergovernmental bodies, research institutes, and extension services.`,
  path: PATH,
});

const RELIABILITY_NOTES: Record<string, string> = {
  authoritative:
    'Primary intergovernmental, government, or official registry sources.',
  high: 'Research institutes, universities, extension services, and peer-reviewed references.',
  moderate:
    'Reputable secondary references used for general or historical context.',
};

export default function SourcesPage() {
  const sources = allSourcesSorted();

  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description: `The registry of authoritative sources referenced across AgricultureID.`,
          path: PATH,
        })}
      />
      <PageIntro
        eyebrow="Provenance"
        title="Source registry"
        lead="Every reference entry on AgricultureID cites the authoritative organizations and publications it draws on. This is the full registry of those sources."
        crumbs={pageBreadcrumbs(TITLE, PATH)}
      />

      <section className="mt-8 rounded-card border border-parchment-200 bg-white p-5">
        <h2 className="font-serif text-lg font-bold text-ink-900">
          Reliability classification
        </h2>
        <dl className="mt-3 space-y-2 text-sm">
          {(['authoritative', 'high', 'moderate'] as const).map((level) => (
            <div
              key={level}
              className="flex flex-col gap-0.5 sm:flex-row sm:gap-3"
            >
              <dt className="w-32 shrink-0 font-semibold text-ink-800">
                {SOURCE_RELIABILITY_LABEL[level]}
              </dt>
              <dd className="text-ink-600">{RELIABILITY_NOTES[level]}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-sm text-ink-500">
          See our{' '}
          <a
            href="/methodology"
            className="font-medium text-forest-700 underline underline-offset-2"
          >
            sources &amp; methodology
          </a>{' '}
          for how sources are selected and used.
        </p>
      </section>

      <ul className="mt-8 space-y-3">
        {sources.map((source) => (
          <SourceCard key={source.id} source={source} />
        ))}
      </ul>
    </Container>
  );
}
