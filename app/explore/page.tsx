import type { Metadata } from 'next';
import Link from 'next/link';
import { PageIntro } from '@/components/content/PageIntro';
import { Container } from '@/components/ui/Container';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema/jsonld';
import { pageBreadcrumbs } from '@/lib/seo/breadcrumbs';
import { buildMetadata } from '@/lib/seo/metadata';
import { PUBLISHED_CONTENT, contentUrlPath } from '@/lib/content/registry';
import { allSemanticEdges, edgesByRelation } from '@/lib/content/relations';
import {
  CONTENT_TYPE_LABEL_PLURAL,
  CONTENT_TYPE_ROUTE,
  CONTENT_TYPES,
} from '@/lib/site';

const TITLE = 'Explore the knowledge graph';
const PATH = '/explore';

export const metadata: Metadata = buildMetadata({
  title: 'Explore',
  description:
    'Browse AgricultureID by entity type and relationship. A relation-aware view of the agricultural knowledge graph — crops, soils, diseases, pests, nutrients, and their evidence-backed connections.',
  path: PATH,
});

export default function ExplorePage() {
  const byType = new Map<string, number>();
  for (const c of PUBLISHED_CONTENT)
    byType.set(c.contentType, (byType.get(c.contentType) ?? 0) + 1);

  const relationCounts = Object.entries(edgesByRelation()).sort(
    (a, b) => b[1] - a[1],
  );
  const totalEdges = allSemanticEdges().length;

  // Highest-degree entities (most outgoing edges) — good entry points.
  const degree = new Map<string, number>();
  for (const e of allSemanticEdges()) {
    const k = `${e.from.type}:${e.from.slug}`;
    degree.set(k, (degree.get(k) ?? 0) + 1);
  }
  const topEntities = [...degree.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 16)
    .map(([k, d]) => {
      const [type, slug] = k.split(':');
      const item = PUBLISHED_CONTENT.find(
        (c) => c.contentType === type && c.slug === slug,
      );
      return item
        ? { title: item.title, href: contentUrlPath(item), degree: d }
        : null;
    })
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description: metadata.description as string,
          path: PATH,
        })}
      />
      <PageIntro
        eyebrow="Knowledge graph"
        title={TITLE}
        lead={`Browse by entity type or relationship. The graph holds ${totalEdges.toLocaleString('en')} evidence-backed semantic edges across a controlled relation vocabulary.`}
        crumbs={pageBreadcrumbs('Explore', PATH)}
      />

      <p className="mt-6 text-sm">
        <Link
          href="/search"
          className="font-medium text-olive-800 underline underline-offset-2"
        >
          Full-text search →
        </Link>
      </p>

      <section className="mt-8">
        <h2 className="font-serif text-2xl font-bold text-ink-900">By type</h2>
        <ul className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
          {CONTENT_TYPES.filter((t) => byType.get(t)).map((t) => (
            <li key={t}>
              <Link
                href={`/${CONTENT_TYPE_ROUTE[t]}`}
                className="flex items-baseline justify-between rounded-card border border-ink-100 bg-white px-3 py-2 text-sm hover:border-olive-300"
              >
                <span className="font-medium text-forest-950">
                  {CONTENT_TYPE_LABEL_PLURAL[t]}
                </span>
                <span className="text-xs text-ink-400">{byType.get(t)}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl font-bold text-ink-900">
          Relationship types
        </h2>
        <p className="mt-1 text-sm text-ink-500">
          The controlled vocabulary of semantic edges, with counts.
        </p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {relationCounts.map(([rel, n]) => (
            <li
              key={rel}
              className="rounded-full border border-ink-200 px-3 py-1 text-sm text-ink-700"
            >
              {rel} <span className="text-ink-400">· {n}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl font-bold text-ink-900">
          Most-connected entries
        </h2>
        <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {topEntities.map((e) => (
            <li key={e.href}>
              <Link
                href={e.href}
                className="flex items-baseline justify-between rounded-card border border-ink-100 bg-white px-3 py-2 text-sm hover:border-olive-300"
              >
                <span className="font-medium text-forest-950">{e.title}</span>
                <span className="text-xs text-ink-400">{e.degree} links</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}
