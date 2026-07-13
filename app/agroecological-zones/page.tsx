import type { Metadata } from 'next';
import Link from 'next/link';
import { PageIntro } from '@/components/content/PageIntro';
import { Container } from '@/components/ui/Container';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema/jsonld';
import { pageBreadcrumbs } from '@/lib/seo/breadcrumbs';
import { buildMetadata } from '@/lib/seo/metadata';
import { zonesSorted, zonePath } from '@/lib/geo/region-registry';

const TITLE = 'Agroecological zones';
const PATH = '/agroecological-zones';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'Agroecological/climate zones (Köppen-Geiger classification) and their agricultural relevance — modeled separately from political regions.',
  path: PATH,
});

const GROUPS = [
  'tropical',
  'arid',
  'temperate',
  'continental',
  'polar',
] as const;

export default function ZonesPage() {
  const zones = zonesSorted();
  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description: 'Köppen-Geiger climate zones for agriculture.',
          path: PATH,
        })}
      />
      <PageIntro
        eyebrow="Geography"
        title={TITLE}
        lead="Climate/agroecological zones using the recognized Köppen-Geiger classification, with their agricultural relevance. Zone membership is context, not a crop-suitability recommendation."
        crumbs={pageBreadcrumbs(TITLE, PATH)}
      />
      <div className="mt-8 space-y-8">
        {GROUPS.map((g) => {
          const inGroup = zones.filter((z) => z.group === g);
          if (inGroup.length === 0) return null;
          return (
            <section key={g} aria-labelledby={`g-${g}`}>
              <h2
                id={`g-${g}`}
                className="text-sm font-semibold uppercase tracking-wide text-olive-700"
              >
                {g}
              </h2>
              <ul className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {inGroup.map((z) => (
                  <li key={z.slug}>
                    <Link
                      href={zonePath(z)}
                      className="block h-full rounded-card border border-ink-100 bg-white p-4 transition hover:border-olive-300 hover:shadow-sm"
                    >
                      <span className="font-semibold text-forest-950">
                        <span className="font-mono text-olive-800">
                          {z.classification}
                        </span>{' '}
                        · {z.name}
                      </span>
                      <span className="mt-1 block text-sm leading-6 text-ink-600">
                        {z.agriculturalRelevance}
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
