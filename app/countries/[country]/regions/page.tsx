import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema/jsonld';
import { pageBreadcrumbs } from '@/lib/seo/breadcrumbs';
import { buildMetadata } from '@/lib/seo/metadata';
import { getProfile } from '@/lib/geo/registry';
import { countryPath } from '@/lib/geo/paths';
import {
  countriesWithRegions,
  regionsForCountry,
  regionPath,
} from '@/lib/geo/region-registry';

type Params = { params: Promise<{ country: string }> };

export function generateStaticParams() {
  return countriesWithRegions().map((country) => ({ country }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { country } = await params;
  const profile = getProfile(country);
  if (!profile) return {};
  return buildMetadata({
    title: `${profile.name} — regions`,
    description: `Subnational agriculture profiles for ${profile.name}, anchored to official ISO 3166-2 codes.`,
    path: `/countries/${country}/regions`,
  });
}

export default async function CountryRegionsPage({ params }: Params) {
  const { country } = await params;
  const profile = getProfile(country);
  const regions = regionsForCountry(country);
  if (!profile || regions.length === 0) notFound();
  const path = `/countries/${country}/regions`;

  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: `${profile.name} — regions`,
          description: `Subnational agriculture profiles for ${profile.name}.`,
          path,
        })}
      />
      <Breadcrumbs
        items={[
          ...pageBreadcrumbs('Countries', '/countries'),
          { name: profile.name, path: countryPath(profile.slug) },
          { name: 'Regions', path },
        ]}
      />
      <header className="mt-6 border-b border-ink-100 pb-6">
        <h1 className="font-serif text-3xl font-bold text-forest-950 sm:text-4xl">
          {profile.name} — subnational regions
        </h1>
        <p className="mt-3 text-lg leading-8 text-ink-700">
          {regions.length} region profiles anchored to official ISO 3166-2
          codes.
        </p>
      </header>
      <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {regions.map((r) => (
          <li key={r.slug}>
            <Link
              href={regionPath(r)}
              className="block h-full rounded-card border border-ink-100 bg-white p-4 hover:border-olive-300"
            >
              <span className="font-semibold text-forest-950">{r.name}</span>
              <span className="ml-1 font-mono text-xs text-ink-400">
                {r.officialCode}
              </span>
              <span className="mt-1 block text-sm leading-6 text-ink-600">
                {r.majorCropSystems.slice(0, 3).join(', ')}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
