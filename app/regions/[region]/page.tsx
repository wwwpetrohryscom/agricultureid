import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { SourceList } from '@/components/content/SourceList';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema/jsonld';
import { pageBreadcrumbs } from '@/lib/seo/breadcrumbs';
import { buildMetadata } from '@/lib/seo/metadata';
import {
  getRegion,
  regionProfiles,
  getProfileByCode,
} from '@/lib/geo/registry';
import { countryPath, regionPath } from '@/lib/geo/paths';

type Params = { params: Promise<{ region: string }> };

export function generateStaticParams() {
  return regionProfiles().map((r) => ({ region: r.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { region } = await params;
  const r = getRegion(region);
  if (!r) return {};
  return buildMetadata({
    title: `${r.name} — agriculture`,
    description:
      `${r.name}: regional agriculture overview and the country profiles AgricultureID covers in this World Bank region.`.slice(
        0,
        160,
      ),
    path: regionPath(r.slug),
  });
}

export default async function RegionPage({ params }: Params) {
  const { region } = await params;
  const r = getRegion(region);
  if (!r) notFound();
  const path = regionPath(r.slug);
  const countries = r.countryCodes
    .map((c) => getProfileByCode(c))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({ name: r.name, description: r.overview, path })}
      />
      <Breadcrumbs
        items={[
          ...pageBreadcrumbs('Countries', '/countries'),
          { name: r.name, path },
        ]}
      />
      <header className="mt-6 border-b border-ink-100 pb-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-olive-700">
          Region · World Bank classification
        </p>
        <h1 className="mt-2 font-serif text-3xl font-bold text-forest-950 sm:text-4xl">
          {r.name}
        </h1>
        <p className="mt-3 max-w-3xl text-lg leading-8 text-ink-700">
          {r.overview}
        </p>
      </header>

      <section className="mt-8">
        <h2 className="font-serif text-2xl font-bold text-ink-900">
          Country profiles
        </h2>
        {countries.length === 0 ? (
          <p className="mt-2 text-ink-600">
            No country profiles yet in this region.
          </p>
        ) : (
          <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {countries.map((p) => (
              <li key={p.slug}>
                <Link
                  href={countryPath(p.slug)}
                  className="block rounded-card border border-ink-100 bg-white px-3 py-2 text-sm font-medium text-forest-950 hover:border-olive-300"
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-lg font-bold text-ink-900">
          Limitations
        </h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-ink-700">
          {r.keyLimitations.map((l, i) => (
            <li key={i}>{l}</li>
          ))}
        </ul>
      </section>

      <SourceList references={r.sourceReferences} />
    </Container>
  );
}
