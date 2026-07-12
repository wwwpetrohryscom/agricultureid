import Link from 'next/link';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { SourceList } from '@/components/content/SourceList';
import { ProvenanceNote } from '@/components/geo/ProvenanceNote';
import { StatTable } from '@/components/geo/StatTable';
import { TimeSeriesChart } from '@/components/geo/TimeSeriesChart';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema/jsonld';
import { pageBreadcrumbs } from '@/lib/seo/breadcrumbs';
import { contentPath, resolveRef } from '@/lib/content/registry';
import { getSnapshot, latestStatistic, timeSeries } from '@/lib/geo/snapshots';
import { deriveArableShareOfAgri } from '@/lib/geo/derived';
import { INDICATOR_BY_ID } from '@/data/geo/indicators';
import { countryPath } from '@/lib/geo/paths';
import type { CountryAgricultureProfile } from '@/types/geo';

function Section({
  id,
  heading,
  children,
}: {
  id: string;
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mt-10 scroll-mt-24" aria-labelledby={`${id}-h`}>
      <h2 id={`${id}-h`} className="font-serif text-2xl font-bold text-ink-900">
        {heading}
      </h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-1 pl-5 text-sm leading-7 text-ink-700">
      {items.map((x, i) => (
        <li key={i}>{x}</li>
      ))}
    </ul>
  );
}

export function CountryProfileView({
  profile,
}: {
  profile: CountryAgricultureProfile;
}) {
  const path = countryPath(profile.slug);
  const crumbs = [
    ...pageBreadcrumbs('Countries', '/countries'),
    { name: profile.name, path },
  ];
  // Pick a time-series indicator that has data for this country.
  const seriesIndicator = [
    'AG.YLD.CREL.KG',
    'AG.PRD.CREL.MT',
    'AG.LND.AGRI.ZS',
  ].find((id) => timeSeries(id, profile.countryCode).length > 1);
  const seriesSnap = seriesIndicator ? getSnapshot(seriesIndicator) : undefined;
  const seriesStat = seriesIndicator
    ? latestStatistic(seriesIndicator, profile.countryCode)
    : undefined;
  const derived = deriveArableShareOfAgri(profile.countryCode);
  const crops = (profile.connections ?? [])
    .map(resolveRef)
    .filter((c) => c && c.editorialStatus === 'published');

  return (
    <Container as="article" className="py-10 lg:py-12">
      <JsonLd
        data={webPageSchema({
          name: `${profile.name} — agriculture profile`,
          description: profile.overview.slice(0, 200),
          path,
        })}
      />
      <Breadcrumbs items={crumbs} />

      <header className="mt-6 border-b border-ink-100 pb-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-olive-700">
          Country agriculture profile · {profile.region}
        </p>
        <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight text-forest-950 sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-ink-700">
          {profile.overview}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Badge tone="forest">Stable overview + dated statistics</Badge>
          <span className="text-xs text-ink-500">
            Updated: {profile.updatedAt}
          </span>
        </div>
      </header>

      {/* 1. Stable overview */}
      <Section id="systems" heading="Farming systems (stable overview)">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold text-ink-800">
              Climate zones
            </h3>
            <List items={profile.climateZones} />
          </div>
          {profile.agroecologicalZones &&
            profile.agroecologicalZones.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-ink-800">
                  Agroecological zones
                </h3>
                <List items={profile.agroecologicalZones} />
              </div>
            )}
          <div>
            <h3 className="text-sm font-semibold text-ink-800">
              Dominant crop systems
            </h3>
            <List items={profile.dominantCropSystems} />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-ink-800">
              Major livestock systems
            </h3>
            <List items={profile.majorLivestockSystems} />
          </div>
        </div>
        <p className="mt-4 text-sm leading-7 text-ink-700">
          <span className="font-semibold">Irrigation:</span>{' '}
          {profile.irrigationContext}
        </p>
      </Section>

      {/* 2. Latest verified snapshot */}
      <Section id="latest-data" heading="Latest verified data">
        <p className="mb-3 text-sm text-ink-600">
          Each value is the most recent available observation, shown with its
          own year and unit. Figures are periodically revised — treat them as
          dated, sourced statistics, not evergreen facts.
        </p>
        <StatTable
          iso3={profile.countryCode}
          indicatorIds={profile.highlightIndicators}
        />
        <p className="mt-2">
          <ProvenanceNote
            sourceDataset="World Bank Open Data (World Development Indicators)"
            sourceVersion={
              getSnapshot('AG.LND.AGRI.ZS')?.datasetVersion ?? 'n/a'
            }
            retrievedAt={getSnapshot('AG.LND.AGRI.ZS')?.retrievedAt ?? 'n/a'}
            sourceUrl="https://data.worldbank.org"
          />
        </p>
      </Section>

      {/* 3. Time series */}
      {seriesIndicator && seriesSnap && seriesStat && (
        <Section
          id="time-series"
          heading={`${INDICATOR_BY_ID.get(seriesIndicator)!.name} over time`}
        >
          <TimeSeriesChart
            rows={timeSeries(seriesIndicator, profile.countryCode)}
            unit={seriesSnap.unit}
            label={`${profile.name} — ${INDICATOR_BY_ID.get(seriesIndicator)!.name}`}
          />
          <p className="mt-1">
            <ProvenanceNote
              {...{
                sourceDataset: seriesStat.sourceDataset,
                sourceVersion: seriesStat.sourceVersion,
                retrievedAt: seriesStat.retrievedAt,
                estimate: seriesStat.estimateFlag,
              }}
              sourceUrl={seriesSnap.sourceUrl}
            />
          </p>
        </Section>
      )}

      {/* Derived value */}
      {derived && (
        <Section id="derived" heading="Derived indicator">
          <p className="text-sm leading-7 text-ink-700">
            <span className="font-semibold">{derived.label}:</span>{' '}
            <span className="tabular-nums">{derived.value}</span> {derived.unit}{' '}
            <span className="text-ink-500">({derived.year})</span>
          </p>
          <p className="mt-1 text-xs leading-5 text-ink-500">
            Derived value — formula {derived.formulaId} v
            {derived.formulaVersion} (calc v{derived.calcVersion}). Inputs:{' '}
            {derived.inputs
              .map((i) => `${i.indicatorId} (${i.value.toFixed(1)})`)
              .join(' ÷ ')}
            . {derived.limitations}
          </p>
        </Section>
      )}

      {/* 4/5. Crops & livestock links */}
      {crops.length > 0 && (
        <Section id="commodities" heading="Documented crops & livestock">
          <ul className="flex flex-wrap gap-2">
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
        </Section>
      )}

      {/* Institutions */}
      {profile.agriculturalInstitutions.length > 0 && (
        <Section id="institutions" heading="Agricultural institutions">
          <ul className="space-y-1.5 text-sm leading-7 text-ink-700">
            {profile.agriculturalInstitutions.map((inst, i) => (
              <li key={i}>
                <span className="font-medium">{inst.name}</span>
                {inst.note && (
                  <span className="text-ink-600"> — {inst.note}</span>
                )}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {/* 8. Limitations */}
      <Section id="limitations" heading="Data coverage & limitations">
        <p className="text-sm leading-7 text-ink-700">{profile.dataCoverage}</p>
        <div className="mt-2">
          <List items={profile.keyLimitations} />
        </div>
      </Section>

      <SourceList references={profile.sourceReferences} />
    </Container>
  );
}
