import type { Metadata } from 'next';
import Link from 'next/link';
import { PageIntro } from '@/components/content/PageIntro';
import { Container } from '@/components/ui/Container';
import { JsonLd } from '@/components/seo/JsonLd';
import { glossarySorted } from '@/lib/content/registry';
import { contentUrlPath } from '@/lib/content/registry';
import { resolveRef } from '@/lib/content/registry';
import { definedTermSchema, webPageSchema } from '@/lib/schema/jsonld';
import { pageBreadcrumbs } from '@/lib/seo/breadcrumbs';
import { buildMetadata } from '@/lib/seo/metadata';

const TITLE = 'Glossary';
const PATH = '/glossary';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'Clear definitions of key agronomic and agricultural terms — from soil texture and evapotranspiration to integrated pest management — cross-linked to related entries.',
  path: PATH,
});

export default function GlossaryPage() {
  const terms = glossarySorted();

  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={[
          webPageSchema({
            name: TITLE,
            description: 'Definitions of key agricultural and agronomic terms.',
            path: PATH,
          }),
          ...terms.map((t) => definedTermSchema(t)),
        ]}
      />
      <PageIntro
        eyebrow="Reference"
        title="Glossary"
        lead="Concise, non-prescriptive definitions of key agricultural and agronomic terms used across the platform."
        crumbs={pageBreadcrumbs(TITLE, PATH)}
      />

      <dl className="mt-8 space-y-4">
        {terms.map((term) => (
          <div
            key={term.slug}
            id={term.slug}
            className="scroll-mt-24 rounded-card border border-parchment-200 bg-white p-5"
          >
            <dt className="font-serif text-lg font-bold text-ink-900">
              {term.term}
            </dt>
            <dd className="mt-1.5 leading-7 text-ink-700">{term.definition}</dd>
            {term.related && term.related.length > 0 && (
              <dd className="mt-3 flex flex-wrap gap-2">
                {term.related.map((ref) => {
                  const item = resolveRef(ref);
                  if (!item) return null;
                  return (
                    <Link
                      key={item.id}
                      href={contentUrlPath(item)}
                      className="inline-flex rounded-full border border-parchment-200 px-2.5 py-1 text-xs font-medium text-ink-700 hover:border-forest-200 hover:text-forest-700"
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </dd>
            )}
          </div>
        ))}
      </dl>
    </Container>
  );
}
