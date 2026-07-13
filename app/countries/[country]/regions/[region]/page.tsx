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
import { getProfile } from '@/lib/geo/registry';
import { countryPath } from '@/lib/geo/paths';
import { contentPath, resolveRef } from '@/lib/content/registry';
import {
  allRegions,
  getRegion,
  regionPath,
  getZone,
  zonePath,
} from '@/lib/geo/region-registry';

type Params = { params: Promise<{ country: string; region: string }> };

export function generateStaticParams() {
  return allRegions().map((r) => ({ country: r.countrySlug, region: r.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { country, region } = await params;
  const r = getRegion(country, region);
  if (!r) return {};
  return buildMetadata({
    title: `${r.name} agriculture`,
    description:
      `${r.name} (${r.officialCode}): climate, major crop and livestock systems, and agroecological context. ${r.agriculturalLandContext}`.slice(
        0,
        160,
      ),
    path: regionPath(r),
  });
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-1 list-disc space-y-1 pl-5 text-sm leading-7 text-ink-700">
      {items.map((x, i) => (
        <li key={i}>{x}</li>
      ))}
    </ul>
  );
}

export default async function RegionPage({ params }: Params) {
  const { country, region } = await params;
  const r = getRegion(country, region);
  if (!r) notFound();
  const profile = getProfile(r.countrySlug);
  const path = regionPath(r);
  const crops = (r.connections ?? [])
    .map(resolveRef)
    .filter((c) => c && c.editorialStatus === 'published');

  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: `${r.name} agriculture`,
          description: r.agriculturalLandContext,
          path,
        })}
      />
      <Breadcrumbs
        items={[
          ...pageBreadcrumbs('Countries', '/countries'),
          {
            name: profile?.name ?? r.countryCode,
            path: countryPath(r.countrySlug),
          },
          { name: 'Regions', path: `/countries/${r.countrySlug}/regions` },
          { name: r.name, path },
        ]}
      />
      <header className="mt-6 border-b border-ink-100 pb-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-olive-700">
          {r.adminLevel} · {r.officialCode}
        </p>
        <h1 className="mt-2 font-serif text-3xl font-bold text-forest-950 sm:text-4xl">
          {r.name}
        </h1>
        <p className="mt-3 max-w-3xl text-lg leading-8 text-ink-700">
          {r.climateContext}
        </p>
      </header>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div>
          <h2 className="text-sm font-semibold text-ink-800">
            Major crop systems
          </h2>
          <List items={r.majorCropSystems} />
        </div>
        <div>
          <h2 className="text-sm font-semibold text-ink-800">
            Major livestock systems
          </h2>
          <List items={r.majorLivestockSystems} />
        </div>
      </div>

      <p className="mt-4 text-sm leading-7 text-ink-700">
        <span className="font-semibold">Agricultural land:</span>{' '}
        {r.agriculturalLandContext}{' '}
        <span className="font-semibold">Irrigation:</span> {r.irrigationContext}
      </p>

      {r.agroecologicalZones.length > 0 && (
        <p className="mt-3 text-sm text-ink-700">
          <span className="font-semibold">Agroecological zones:</span>{' '}
          {r.agroecologicalZones.map((code, i) => {
            const z = getZone(`koppen-${code.toLowerCase()}`);
            return (
              <span key={code}>
                {i > 0 && ', '}
                {z ? (
                  <Link
                    href={zonePath(z)}
                    className="text-olive-800 underline underline-offset-2"
                  >
                    {code} ({z.name})
                  </Link>
                ) : (
                  code
                )}
              </span>
            );
          })}
        </p>
      )}

      {r.statistic && (
        <p className="mt-3 rounded-card border border-ink-100 bg-white p-3 text-sm">
          <span className="font-semibold">{r.statistic.label}:</span>{' '}
          <span className="tabular-nums">{r.statistic.value}</span>{' '}
          {r.statistic.unit}{' '}
          <span className="text-ink-500">({r.statistic.year})</span>
          <span className="mt-1 block text-xs text-ink-500">
            {r.statistic.sourceNote}
          </span>
        </p>
      )}

      {crops.length > 0 && (
        <section className="mt-6">
          <h2 className="text-sm font-semibold text-ink-800">
            Documented crops & livestock
          </h2>
          <ul className="mt-2 flex flex-wrap gap-2">
            {crops.map((c) => (
              <li key={`${c!.contentType}:${c!.slug}`}>
                <Link
                  href={contentPath(c!.contentType, c!.slug)}
                  className="inline-block rounded-full border border-ink-200 px-3 py-1 text-sm text-olive-800 hover:border-olive-300"
                >
                  {c!.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {r.officialInstitutions.length > 0 && (
        <section className="mt-6">
          <h2 className="text-sm font-semibold text-ink-800">
            Official institutions
          </h2>
          <ul className="mt-1 space-y-1 text-sm leading-7 text-ink-700">
            {r.officialInstitutions.map((inst, i) => (
              <li key={i}>
                <span className="font-medium">{inst.name}</span>
                {inst.note && (
                  <span className="text-ink-600"> — {inst.note}</span>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-6 rounded-card border border-clay-200 bg-[#FAFAF7] p-5">
        <h2 className="font-serif text-lg font-bold text-ink-900">
          Data coverage & limitations
        </h2>
        <p className="mt-2 text-sm leading-7 text-ink-700">{r.dataCoverage}</p>
        <List items={r.limitations} />
      </section>

      <SourceList references={r.sourceReferences} />
    </Container>
  );
}
