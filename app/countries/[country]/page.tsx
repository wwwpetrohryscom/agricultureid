import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CountryProfileView } from '@/components/geo/CountryProfileView';
import { getProfile, profilesSorted } from '@/lib/geo/registry';
import { countryPath } from '@/lib/geo/paths';
import { buildMetadata } from '@/lib/seo/metadata';

type Params = { params: Promise<{ country: string }> };

export function generateStaticParams() {
  return profilesSorted().map((p) => ({ country: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { country } = await params;
  const profile = getProfile(country);
  if (!profile) return {};
  return buildMetadata({
    title: `${profile.name} — agriculture profile`,
    description: `${profile.name}: farming systems, climate zones, major crops and livestock, and dated agricultural statistics (with source and dataset version).`,
    path: countryPath(profile.slug),
    ogType: 'article',
  });
}

export default async function CountryPage({ params }: Params) {
  const { country } = await params;
  const profile = getProfile(country);
  if (!profile) notFound();
  return <CountryProfileView profile={profile} />;
}
