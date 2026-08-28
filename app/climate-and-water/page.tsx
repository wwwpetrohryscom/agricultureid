import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { PageIntro } from '@/components/content/PageIntro';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema/jsonld';
import { buildMetadata } from '@/lib/seo/metadata';
import { CLIMATE_RISK_PATH } from '@/lib/climate/paths';
import {
  CATEGORY_IS_DROUGHT,
  CLIMATE_CAVEAT,
  CLIMATE_EVIDENCE_CLASSES,
  CLIMATE_EVIDENCE_LABEL,
  DEGREE_DAY_METHOD,
  DROUGHT_CATEGORIES,
  DROUGHT_CATEGORY_LABEL,
  DROUGHT_CAVEAT,
  NORMAL_CAVEAT,
  WATER_METRIC_KIND,
} from '@/types/climate-water';
import {
  ABSENT_CLIMATE_CLAIMS,
  CLIMATE_CONTRACTS,
  RESERVED_EVIDENCE_CLASSES,
} from '@/lib/climate/contracts';
import {
  allClimateObservations,
  byEvidenceClass,
  climateSnapshot,
  countriesWithWaterData,
  statesWithNormals,
} from '@/lib/climate/registry';
import { REGISTRIES } from '@/data/registries';
import { getSource } from '@/lib/sources/registry';

const TITLE = 'Climate Normals, Drought and Agricultural Water';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'What official sources record about climate normals, drought conditions and agricultural water — each kept as the kind of statement it is, and none of it turned into a prediction.',
  path: CLIMATE_RISK_PATH,
});

export default function ClimateAndWaterPage() {
  const observations = allClimateObservations();
  const counts = byEvidenceClass();
  const registryName = new Map(REGISTRIES.map((r) => [r.id, r.officialName]));
  const discarded = (climateSnapshot('ncei-us-climate-normals')
    .discardedElements ?? []) as {
    element: string;
    documentedAs: string;
    why: string;
    valuesDiscarded: number;
  }[];
  const official = observations.filter(
    (o) => o.evidenceClass === 'reported-statistic',
  ).length;
  const countryValues = observations.filter(
    (o) => o.spatialBasis === 'country',
  ).length;

  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description:
            'Climate normals, weekly drought assessments and agricultural irrigation statistics, from official sources.',
          path: CLIMATE_RISK_PATH,
        })}
      />

      <PageIntro
        title={TITLE}
        lead="What the record shows about climate, drought and water — and where the record stops."
      >
        <p>
          Three sources underlie this page:{' '}
          {observations.length.toLocaleString('en')} values from NOAA&rsquo;s
          1991–2020 climate normals, the U.S. Drought Monitor&rsquo;s weekly
          assessments, and FAO&rsquo;s irrigation statistics.
        </p>
        <p>
          They are four different kinds of statement and they look alike on the
          page. A normal is what thirty years averaged to. An assessment is what
          an author judged. A reported statistic is what a country told FAO. An
          agency estimate is what FAO worked out when a country said nothing.
          Each value here says which it is, because a reader who cannot tell
          them apart will read all four as measurements.
        </p>
        <p>{CLIMATE_CAVEAT}</p>
      </PageIntro>

      <section className="mt-8" aria-label="Summary">
        <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            ['Values', observations.length.toLocaleString('en')],
            ['States with normals', statesWithNormals().length],
            ['Countries with water data', countriesWithWaterData().length],
            ['Forecasts published', 0],
          ].map(([label, value]) => (
            <div
              key={String(label)}
              className="rounded-lg border border-ink-100 bg-[#FAFAF7] p-3"
            >
              <dt className="text-xs uppercase tracking-wide text-ink-500">
                {label}
              </dt>
              <dd className="mt-1 font-serif text-2xl text-forest-900">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-10" aria-label="What this page will not say">
        <h2 className="font-serif text-xl text-forest-900">
          What this page will not say
        </h2>
        <p className="mt-2 text-sm text-ink-700">
          Every one of these is a step from exposure to impact. Knowing that a
          state was in severe drought and that a crop grows there establishes
          exposure; what it cost is a different question, and the step between
          them is the whole of the claim.
        </p>
        <dl className="mt-4 space-y-3">
          {ABSENT_CLIMATE_CLAIMS.map((a) => (
            <div
              key={a.name}
              className="rounded-lg border border-ink-100 bg-[#FAFAF7] p-4"
            >
              <dt className="font-medium text-ink-900">{a.label}</dt>
              <dd className="mt-1 text-sm text-ink-700">{a.why}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-10" aria-label="Kinds of statement">
        <h2 className="font-serif text-xl text-forest-900">
          Four kinds of statement, kept apart
        </h2>
        <dl className="mt-4 space-y-3">
          {CLIMATE_EVIDENCE_CLASSES.map((c) => {
            const n = counts.get(c) ?? 0;
            const res = RESERVED_EVIDENCE_CLASSES.find(
              (r) => r.evidenceClass === c,
            );
            return (
              <div
                key={c}
                className="rounded-lg border border-ink-100 bg-[#FAFAF7] p-4"
              >
                <dt className="flex flex-wrap items-baseline gap-2">
                  <span className="font-medium text-ink-900">{c}</span>
                  <span className="text-sm tabular-nums text-ink-600">
                    {n ? `${n.toLocaleString('en')} values` : 'none held'}
                  </span>
                </dt>
                <dd className="mt-1 text-sm text-ink-700">
                  {CLIMATE_EVIDENCE_LABEL[c]}.
                  {res && <span className="text-ink-600"> {res.why}</span>}
                </dd>
              </div>
            );
          })}
        </dl>
        <p className="mt-3 text-sm text-ink-600">{NORMAL_CAVEAT}</p>
      </section>

      <section className="mt-10" aria-label="Drought categories">
        <h2 className="font-serif text-xl text-forest-900">
          D0 is not drought
        </h2>
        <p className="mt-2 text-sm text-ink-700">
          The Drought Monitor describes D0 as a precursor to drought and a
          category that areas pass through while recovering. It is counted
          separately everywhere on this site; folding it in would add more than
          twenty points to the average state&rsquo;s drought figure.
        </p>
        <dl className="mt-4 grid gap-3 sm:grid-cols-2">
          {DROUGHT_CATEGORIES.map((c) => (
            <div
              key={c}
              className="flex items-baseline gap-3 rounded-lg border border-ink-100 bg-[#FAFAF7] p-3"
            >
              <dt className="w-12 shrink-0 font-medium text-ink-900">
                {c === 'none' ? '—' : c}
              </dt>
              <dd className="text-sm text-ink-700">
                {DROUGHT_CATEGORY_LABEL[c]}
                {!CATEGORY_IS_DROUGHT[c] && (
                  <span className="text-ink-500">
                    {' '}
                    · not counted as drought
                  </span>
                )}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-3 text-sm text-ink-600">{DROUGHT_CAVEAT}</p>
      </section>

      <section className="mt-10" aria-label="Irrigation capacity and use">
        <h2 className="font-serif text-xl text-forest-900">
          Irrigation capacity is not irrigation use
        </h2>
        <p className="mt-2 text-sm text-ink-700">
          Land equipped for irrigation is infrastructure that could be watered.
          Area actually irrigated is what was. They are different figures for
          the same country in the same year, and reading the first as the second
          overstates agricultural water use.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[32rem] border-collapse text-sm">
            <thead>
              <tr className="border-b border-ink-200 text-left">
                <th className="py-2 pr-4 font-medium text-ink-600">
                  As the source names it
                </th>
                <th className="py-2 pr-4 font-medium text-ink-600">
                  What it measures
                </th>
                <th className="py-2 text-right font-medium text-ink-600">
                  Values
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(WATER_METRIC_KIND).map(([metric, kind]) => {
                const rows = observations.filter((o) => o.metric === metric);
                return (
                  <tr key={metric} className="border-b border-ink-100">
                    <td className="py-2 pr-4 text-ink-700">
                      {rows[0]?.publishedItem ?? metric}
                    </td>
                    <td className="py-2 pr-4 text-ink-700">{kind}</td>
                    <td className="py-2 text-right tabular-nums text-ink-900">
                      {rows.length.toLocaleString('en')}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-ink-600">
          {((official / countryValues) * 100).toFixed(0)}% of these figures are
          a country&rsquo;s own official statistic. The rest carry FAO&rsquo;s
          flag saying it estimated or imputed them, and that flag travels with
          every value on this site.
        </p>
      </section>

      <section className="mt-10" aria-label="Growing degree days">
        <h2 className="font-serif text-xl text-forest-900">
          Growing degree days need their base
        </h2>
        <dl className="mt-3 space-y-2">
          {Object.entries(DEGREE_DAY_METHOD).map(([metric, how]) => (
            <div key={metric} className="text-sm">
              <dt className="inline font-medium text-ink-900">{metric}: </dt>
              <dd className="inline text-ink-700">{how}</dd>
            </div>
          ))}
        </dl>
        {discarded.map((d) => (
          <div
            key={d.element}
            className="mt-4 rounded-lg border border-ink-100 bg-[#FAFAF7] p-4"
          >
            <h3 className="font-medium text-ink-900">Discarded: {d.element}</h3>
            <p className="mt-1 text-sm text-ink-600">
              Documented as: {d.documentedAs}
            </p>
            <p className="mt-2 text-sm text-ink-700">{d.why}</p>
            <p className="mt-2 text-xs text-ink-500">
              {d.valuesDiscarded.toLocaleString('en')} values not published.
            </p>
          </div>
        ))}
      </section>

      <section className="mt-10" aria-label="Datasets">
        <h2 className="font-serif text-xl text-forest-900">
          Datasets, and what each is entitled to say
        </h2>
        <div className="mt-4 space-y-4">
          {CLIMATE_CONTRACTS.map((c) => {
            const n = observations.filter(
              (o) => o.sourceDatasetId === c.datasetId,
            ).length;
            return (
              <article
                key={c.datasetId}
                className="rounded-lg border border-ink-100 bg-[#FAFAF7] p-4"
              >
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="font-medium text-ink-900">{c.label}</h3>
                  <span className="rounded-full border border-ink-200 px-2 py-0.5 text-[0.625rem] font-semibold uppercase tracking-wide text-ink-600">
                    {c.evidenceClass}
                  </span>
                  <span className="text-sm tabular-nums text-ink-600">
                    {n.toLocaleString('en')} values
                  </span>
                </div>
                <p className="mt-2 text-sm text-ink-700">{c.why}</p>
                <p className="mt-2 text-sm">
                  <span className="text-ink-500">About: </span>
                  <span className="text-ink-700">{c.geographyNote}</span>
                </p>
                <div className="mt-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">
                    What it does not tell you
                  </p>
                  <ul className="mt-1 list-disc space-y-0.5 pl-5 text-sm text-ink-700">
                    {c.limitations.map((l) => (
                      <li key={l}>{l}</li>
                    ))}
                  </ul>
                </div>
                <p className="mt-3 text-sm">
                  <span className="text-ink-500">Source: </span>
                  {c.sourceIds.map((id, i) => {
                    const s = getSource(id);
                    return (
                      <span key={id}>
                        {i > 0 && ', '}
                        {s ? (
                          <a
                            href={s.url}
                            className="text-forest-700 hover:underline"
                            rel="nofollow noopener"
                          >
                            {s.title}
                          </a>
                        ) : (
                          id
                        )}
                      </span>
                    );
                  })}
                  {registryName.has(c.registryId) && (
                    <span className="text-ink-500">
                      {' '}
                      · {registryName.get(c.registryId)}
                    </span>
                  )}
                </p>
              </article>
            );
          })}
        </div>
        <p className="mt-4 text-sm text-ink-600">
          Drought assessments and climate normals for individual states appear
          on their{' '}
          <Link
            href="/countries/us"
            className="text-forest-700 hover:underline"
          >
            state pages
          </Link>
          , where a weekly assessment is shown only while the week it applies to
          is still current.
        </p>
      </section>
    </Container>
  );
}
