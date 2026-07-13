import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { SourceList } from '@/components/content/SourceList';
import { ComparisonTable } from '@/components/comparison/ComparisonTable';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema/jsonld';
import { pageBreadcrumbs } from '@/lib/seo/breadcrumbs';
import { buildMetadata, absoluteUrl } from '@/lib/seo/metadata';
import {
  COMPARISONS,
  COMPARE_ROUTE,
  comparisonPath,
  getComparison,
} from '@/lib/comparison/registry';
import { resolveComparison } from '@/lib/comparison/resolve';

type Params = { params: Promise<{ type: string; slug: string }> };

export function generateStaticParams() {
  return COMPARISONS.map((c) => ({
    type: COMPARE_ROUTE[c.entityType],
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { type, slug } = await params;
  const c = getComparison(slug);
  if (!c || COMPARE_ROUTE[c.entityType] !== type) return {};
  return buildMetadata({
    title: c.seo.title,
    description: c.seo.description,
    path: comparisonPath(c),
  });
}

export default async function ComparisonPage({ params }: Params) {
  const { type, slug } = await params;
  const c = getComparison(slug);
  if (!c || COMPARE_ROUTE[c.entityType] !== type) notFound();
  const resolved = resolveComparison(c);
  const path = comparisonPath(c);

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: c.title,
    itemListElement: resolved.columns.map((col, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: col.title,
      url: col.route === '#' ? undefined : absoluteUrl(col.route),
    })),
  };

  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={[
          webPageSchema({ name: c.title, description: c.purpose, path }),
          itemList,
        ]}
      />
      <Breadcrumbs
        items={[
          ...pageBreadcrumbs('Compare', '/compare'),
          { name: c.title, path },
        ]}
      />
      <header className="mt-6 border-b border-ink-100 pb-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-olive-700">
          Comparison · {c.entityType}
        </p>
        <h1 className="mt-2 font-serif text-3xl font-bold text-forest-950 sm:text-4xl">
          {c.title}
        </h1>
        <p className="mt-3 max-w-3xl text-lg leading-8 text-ink-700">
          {c.purpose}
        </p>
      </header>

      <section className="mt-8">
        <ComparisonTable resolved={resolved} />
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-lg font-bold text-ink-900">
          Methodology
        </h2>
        <p className="mt-2 text-sm leading-7 text-ink-700">{c.methodology}</p>
      </section>

      <section className="mt-6 rounded-card border border-clay-200 bg-[#FAFAF7] p-5">
        <h2 className="font-serif text-lg font-bold text-ink-900">
          Limitations
        </h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-ink-700">
          {c.limitations.map((l, i) => (
            <li key={i}>{l}</li>
          ))}
        </ul>
      </section>

      <SourceList references={c.sourceReferences} />
    </Container>
  );
}
