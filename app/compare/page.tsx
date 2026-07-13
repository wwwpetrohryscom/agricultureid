import type { Metadata } from 'next';
import Link from 'next/link';
import { PageIntro } from '@/components/content/PageIntro';
import { Container } from '@/components/ui/Container';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema/jsonld';
import { pageBreadcrumbs } from '@/lib/seo/breadcrumbs';
import { buildMetadata } from '@/lib/seo/metadata';
import { comparisonsByType, comparisonPath } from '@/lib/comparison/registry';
import type { ComparisonEntityType } from '@/types/comparison';

const TITLE = 'Compare';
const PATH = '/compare';

export const metadata: Metadata = buildMetadata({
  title: 'Comparisons',
  description:
    'Evidence-based, curated comparisons of compatible crops, cultivars, breeds, fertilizers, and countries — each with methodology, limitations, and sources.',
  path: PATH,
});

const GROUPS: { type: ComparisonEntityType; label: string }[] = [
  { type: 'crop', label: 'Crops' },
  { type: 'cultivar', label: 'Cultivars' },
  { type: 'breed', label: 'Breeds' },
  { type: 'fertilizer', label: 'Fertilizers' },
  { type: 'country', label: 'Countries' },
];

export default function ComparePage() {
  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: 'Comparisons',
          description: 'Curated, evidence-based agricultural comparisons.',
          path: PATH,
        })}
      />
      <PageIntro
        eyebrow="Compare"
        title="Agricultural comparisons"
        lead="Curated, evidence-based comparisons of compatible entities — not every possible pair. Each compares meaningful dimensions read from the source entries, with methodology, limitations, and sources. No entity is ranked as universally “better”."
        crumbs={pageBreadcrumbs(TITLE, PATH)}
      />
      <div className="mt-8 space-y-8">
        {GROUPS.map((g) => {
          const items = comparisonsByType(g.type);
          if (items.length === 0) return null;
          return (
            <section key={g.type} aria-labelledby={`g-${g.type}`}>
              <h2
                id={`g-${g.type}`}
                className="text-sm font-semibold uppercase tracking-wide text-olive-700"
              >
                {g.label} ({items.length})
              </h2>
              <ul className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {items.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={comparisonPath(c)}
                      className="block h-full rounded-card border border-ink-100 bg-white p-4 transition hover:border-olive-300 hover:shadow-sm"
                    >
                      <span className="font-semibold text-forest-950">
                        {c.title}
                      </span>
                      <span className="mt-1 block text-sm leading-6 text-ink-600">
                        {c.purpose}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </Container>
  );
}
