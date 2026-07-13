import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { SourceList } from '@/components/content/SourceList';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema/jsonld';
import { pageBreadcrumbs } from '@/lib/seo/breadcrumbs';
import { buildMetadata } from '@/lib/seo/metadata';
import { zonesSorted, getZone, zonePath } from '@/lib/geo/region-registry';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return zonesSorted().map((z) => ({ slug: z.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const z = getZone(slug);
  if (!z) return {};
  return buildMetadata({
    title: `${z.classification} — ${z.name}`,
    description:
      `${z.name} (Köppen ${z.classification}): climate, growing period, and agricultural relevance. ${z.agriculturalRelevance}`.slice(
        0,
        160,
      ),
    path: zonePath(z),
  });
}

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-ink-100 py-3">
      <dt className="text-sm font-semibold text-ink-700">{label}</dt>
      <dd className="mt-1 text-sm leading-7 text-ink-700">{children}</dd>
    </div>
  );
}

export default async function ZonePage({ params }: Params) {
  const { slug } = await params;
  const z = getZone(slug);
  if (!z) notFound();
  const path = zonePath(z);

  return (
    <Container className="py-8 lg:py-10" width="narrow">
      <JsonLd
        data={webPageSchema({
          name: `${z.classification} — ${z.name}`,
          description: z.climateCharacteristics,
          path,
        })}
      />
      <Breadcrumbs
        items={[
          ...pageBreadcrumbs('Agroecological zones', '/agroecological-zones'),
          { name: `${z.classification} — ${z.name}`, path },
        ]}
      />
      <header className="mt-6 border-b border-ink-100 pb-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-olive-700">
          {z.system} · {z.group}
        </p>
        <h1 className="mt-2 font-serif text-3xl font-bold text-forest-950">
          <span className="font-mono text-olive-800">{z.classification}</span> —{' '}
          {z.name}
        </h1>
      </header>
      <dl className="mt-4">
        <Row label="Climate">{z.climateCharacteristics}</Row>
        <Row label="Growing period">{z.growingPeriodContext}</Row>
        <Row label="Soils & vegetation">{z.soilVegetationContext}</Row>
        <Row label="Agricultural relevance">{z.agriculturalRelevance}</Row>
        <Row label="Where it occurs">{z.geographicScope}</Row>
        <Row label="Classification">{z.systemVersion}</Row>
      </dl>
      <section className="mt-6 rounded-card border border-clay-200 bg-[#FAFAF7] p-5">
        <h2 className="font-serif text-lg font-bold text-ink-900">
          Limitations
        </h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-ink-700">
          {z.limitations.map((l, i) => (
            <li key={i}>{l}</li>
          ))}
        </ul>
      </section>
      <SourceList references={z.sourceReferences} />
    </Container>
  );
}
