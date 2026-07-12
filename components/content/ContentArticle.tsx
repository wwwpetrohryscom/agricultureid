import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { ContentBlocks } from '@/components/content/ContentBlocks';
import { KeyFacts } from '@/components/content/KeyFacts';
import { RelatedContent } from '@/components/content/RelatedContent';
import { SourceList } from '@/components/content/SourceList';
import { TableOfContents } from '@/components/content/TableOfContents';
import { Badge } from '@/components/ui/Badge';
import { Container } from '@/components/ui/Container';
import { JsonLd } from '@/components/seo/JsonLd';
import { contentUrlPath } from '@/lib/content/registry';
import { articleSchema, webPageSchema } from '@/lib/schema/jsonld';
import { contentBreadcrumbs } from '@/lib/seo/breadcrumbs';
import { CONTENT_TYPE_LABEL } from '@/lib/site';
import type { AnyContent } from '@/types/content';

/** Full rendering of a structured content page, shared by all content types. */
export function ContentArticle({ item }: { item: AnyContent }) {
  const path = contentUrlPath(item);
  const crumbs = contentBreadcrumbs(item.contentType, item.title, item.slug);

  const schema: Record<string, unknown>[] = [
    webPageSchema({ name: item.title, description: item.summary, path }),
  ];
  if (item.structuredData?.article) schema.push(articleSchema(item, path));

  return (
    <Container as="article" className="py-10 lg:py-12">
      <JsonLd data={schema} />
      <Breadcrumbs items={crumbs} />

      <header className="mt-6 border-b border-ink-100 pb-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-olive-700">
          {CONTENT_TYPE_LABEL[item.contentType]} · {item.category}
        </p>
        <h1 className="mt-2 max-w-4xl font-serif text-4xl font-bold tracking-tight text-forest-950 sm:text-5xl">
          {item.title}
        </h1>
        {item.scientificName && (
          <p className="mt-2 text-lg italic text-ink-500">
            {item.scientificName}
          </p>
        )}
        {item.alternativeNames && item.alternativeNames.length > 0 && (
          <p className="mt-1 text-sm text-ink-500">
            Also known as: {item.alternativeNames.join(', ')}
          </p>
        )}
        <p className="mt-4 max-w-3xl text-lg leading-8 text-ink-700">
          {item.summary}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-ink-500">
          <Badge tone="forest">Dated reference</Badge>
          {item.reviewedAt && <span>Last reviewed: {item.reviewedAt}</span>}
          <span>Updated: {item.updatedAt}</span>
        </div>
      </header>

      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_18rem]">
        <aside className="space-y-6 lg:sticky lg:top-20 lg:order-2 lg:self-start">
          <KeyFacts facts={item.keyFacts} />
          <div className="hidden lg:block">
            <TableOfContents
              sections={item.sections}
              extra={[
                { id: 'scope-and-limitations', heading: 'Scope & limitations' },
                { id: 'sources', heading: 'Sources' },
              ]}
            />
          </div>
        </aside>

        <div className="min-w-0 lg:order-1">
          <div className="prose-content max-w-prose">
            <ContentBlocks blocks={item.introduction} />
          </div>

          {item.sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="mt-10 scroll-mt-24"
              aria-labelledby={`${section.id}-heading`}
            >
              <h2
                id={`${section.id}-heading`}
                className="font-serif text-2xl font-bold text-ink-900"
              >
                {section.heading}
              </h2>
              <div className="max-w-prose">
                <ContentBlocks blocks={section.body} />
              </div>
            </section>
          ))}

          <section
            id="scope-and-limitations"
            className="mt-12 scroll-mt-24 rounded-card border border-clay-200 bg-[#FAFAF7] p-5"
            aria-labelledby="scope-heading"
          >
            <h2
              id="scope-heading"
              className="font-serif text-xl font-bold text-ink-900"
            >
              Scope &amp; limitations
            </h2>
            <p className="mt-2 text-sm leading-7 text-ink-700">
              <span className="font-semibold">Geographic scope:</span>{' '}
              {item.geographicScope}
            </p>
            {item.climateContext && (
              <p className="mt-1 text-sm leading-7 text-ink-700">
                <span className="font-semibold">Climate context:</span>{' '}
                {item.climateContext}
              </p>
            )}
            {item.limitations.length > 0 && (
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-7 text-ink-700">
                {item.limitations.map((limitation, i) => (
                  <li key={i}>{limitation}</li>
                ))}
              </ul>
            )}
          </section>

          <SourceList references={item.sourceReferences} />
          <RelatedContent item={item} />
        </div>
      </div>
    </Container>
  );
}
