import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { PageIntro } from '@/components/content/PageIntro';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema/jsonld';
import { buildMetadata } from '@/lib/seo/metadata';
import { SOIL_SURVEYS_PATH } from '@/lib/soils/paths';
import { SOIL_CAVEAT, SOIL_SUITABILITY_CAVEAT } from '@/types/soil';
import {
  allSoilObservations,
  classificationsPresent,
  jurisdictionsCovered,
  propertySummary,
} from '@/lib/soils/registry';
import {
  RESERVED_EVIDENCE_CLASSES,
  SOIL_DATASET_CONTRACTS,
} from '@/lib/soils/contracts';
import { regionProfilesData } from '@/data/geo/regions';

const TITLE = 'Soil Survey Observations';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'What official soil surveys document about the soils of particular places — the mapped soil bodies, their properties, and the scale each value belongs to.',
  path: SOIL_SURVEYS_PATH,
});

export default function SoilSurveysPage() {
  const obs = allSoilObservations();
  const jurisdictions = jurisdictionsCovered();
  const bodies = new Set(obs.map((o) => `${o.jurisdictionId}|${o.soilBody}`))
    .size;
  const regionName = new Map(
    regionProfilesData.map((r) => [r.officialCode, r.name]),
  );
  const regionPath = new Map(
    regionProfilesData.map((r) => [
      r.officialCode,
      `/countries/${r.countrySlug}/regions/${r.slug}`,
    ]),
  );
  const varyTax = new Set(
    obs
      .filter((o) => o.classification?.varies)
      .map((o) => `${o.jurisdictionId}|${o.soilBody}`),
  ).size;
  const varyDrain = new Set(
    obs
      .filter((o) => o.property === 'drainageClass' && o.categoryVaries)
      .map((o) => `${o.jurisdictionId}|${o.soilBody}`),
  ).size;

  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description:
            'Soil survey observations for mapped soil bodies, with the scale and evidence class of every value.',
          path: SOIL_SURVEYS_PATH,
        })}
      />

      <PageIntro
        title={TITLE}
        lead="What official soil surveys document about particular places — and what kind of fact each number is."
      >
        <p>
          A soil survey does not measure fields. It maps soil bodies and
          publishes a <em>representative value</em> for each named component of
          one: the surveyor&rsquo;s characterisation, informed by field
          description and laboratory work, of a polygon on a map. A measurement
          taken on one farm can differ from the representative value of the map
          unit containing it, and nothing here should be read as describing a
          particular field.
        </p>
        <p>
          Every value carries the scale it belongs to. A number for a mapped
          soil body is not a number for a county, and a county&rsquo;s map units
          are not a number for a state — so what is shown below is the spread
          across a state&rsquo;s soil bodies, never a single figure standing in
          for the state.
        </p>
        <p>
          For what a soil <em>type</em> is — a chernozem, a clay soil, a podzol
          — see the{' '}
          <Link href="/soils" className="text-forest-800 hover:underline">
            soils reference
          </Link>
          . This page is about what a survey has documented on particular
          ground.
        </p>
      </PageIntro>

      <section className="mt-8" aria-label="Summary">
        <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            ['Observations', obs.length.toLocaleString('en')],
            ['Mapped soil bodies', bodies.toLocaleString('en')],
            ['Jurisdictions', jurisdictions.length],
            ['Surveys read', SOIL_DATASET_CONTRACTS.length],
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

      <section className="mt-10" aria-label="Coverage by jurisdiction">
        <h2 className="font-serif text-xl text-forest-900">
          What is documented, and where
        </h2>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[46rem] border-collapse text-sm">
            <caption className="sr-only">
              Soil bodies and property ranges documented in each jurisdiction
            </caption>
            <thead>
              <tr className="border-b border-ink-200 text-left text-xs uppercase tracking-wide text-ink-500">
                <th scope="col" className="py-2 pr-3 font-medium">
                  Jurisdiction
                </th>
                <th scope="col" className="py-2 pr-3 font-medium">
                  Soil bodies
                </th>
                <th scope="col" className="py-2 pr-3 font-medium">
                  pH across those bodies
                </th>
                <th scope="col" className="py-2 pr-3 font-medium">
                  Organic matter
                </th>
                <th scope="col" className="py-2 font-medium">
                  Clay
                </th>
              </tr>
            </thead>
            <tbody>
              {jurisdictions.map((j) => {
                const ph = propertySummary(j.jurisdictionId, 'pH');
                const om = propertySummary(j.jurisdictionId, 'organicMatter');
                const clay = propertySummary(j.jurisdictionId, 'clayContent');
                const href = regionPath.get(j.jurisdictionId);
                return (
                  <tr
                    key={j.jurisdictionId}
                    className="border-b border-ink-100"
                  >
                    <th
                      scope="row"
                      className="py-1.5 pr-3 font-normal text-ink-900"
                    >
                      {href ? (
                        <Link
                          href={href}
                          className="text-forest-800 hover:underline"
                        >
                          {regionName.get(j.jurisdictionId) ?? j.jurisdictionId}
                        </Link>
                      ) : (
                        (regionName.get(j.jurisdictionId) ?? j.jurisdictionId)
                      )}
                      <span className="ml-2 font-mono text-xs text-ink-500">
                        {j.jurisdictionId}
                      </span>
                    </th>
                    <td className="py-1.5 pr-3 tabular-nums text-ink-700">
                      {j.soilBodies.toLocaleString('en')}
                    </td>
                    <td className="py-1.5 pr-3 tabular-nums text-ink-700">
                      {ph ? `${ph.min.toFixed(1)}–${ph.max.toFixed(1)}` : '—'}
                    </td>
                    <td className="py-1.5 pr-3 tabular-nums text-ink-700">
                      {om ? `${om.min.toFixed(1)}–${om.max.toFixed(1)}%` : '—'}
                    </td>
                    <td className="py-1.5 tabular-nums text-ink-700">
                      {clay
                        ? `${clay.min.toFixed(0)}–${clay.max.toFixed(0)}%`
                        : '—'}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-ink-500">
          Each range is the spread of the survey&rsquo;s representative values
          across that jurisdiction&rsquo;s mapped soil bodies. It is not a range
          of measurements, and no single value in it describes the jurisdiction.
        </p>
      </section>

      <section className="mt-10" aria-label="Soil classification">
        <h2 className="font-serif text-xl text-forest-900">
          How the survey classifies them
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-ink-700">
          These are orders of the USDA Soil Taxonomy, the system this survey
          uses. No crosswalk to the World Reference Base is applied: the two
          systems classify the same ground differently, and matching an Order to
          a Reference Soil Group by name would produce confident nonsense.
        </p>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[24rem] border-collapse text-sm">
            <thead>
              <tr className="border-b border-ink-200 text-left text-xs uppercase tracking-wide text-ink-500">
                <th scope="col" className="py-2 pr-3 font-medium">
                  Order
                </th>
                <th scope="col" className="py-2 font-medium">
                  Soil bodies
                </th>
              </tr>
            </thead>
            <tbody>
              {classificationsPresent().map((c) => (
                <tr key={c.value} className="border-b border-ink-100">
                  <th
                    scope="row"
                    className="py-1.5 pr-3 font-normal text-ink-900"
                  >
                    {c.value}
                    {c.value.includes(' to ') ? (
                      <span className="ml-2 text-xs text-ink-500">
                        the survey records both within the state
                      </span>
                    ) : null}
                  </th>
                  <td className="py-1.5 tabular-nums text-ink-700">
                    {c.bodies.toLocaleString('en')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-sm text-ink-600">
          {varyTax.toLocaleString('en')} soil bodies are classified into more
          than one order within a single state, and{' '}
          {varyDrain.toLocaleString('en')} into more than one drainage class.
          Both are shown as they are recorded. Choosing one would invent a
          certainty the survey does not have.
        </p>
      </section>

      <section className="mt-10" aria-label="What is not here">
        <h2 className="font-serif text-xl text-forest-900">What is not here</h2>
        <dl className="mt-3 space-y-3 text-sm">
          <div>
            <dt className="font-medium text-ink-900">Crop suitability</dt>
            <dd className="text-ink-700">{SOIL_SUITABILITY_CAVEAT}</dd>
          </div>
          <div>
            <dt className="font-medium text-ink-900">Subsoil</dt>
            <dd className="text-ink-700">
              Only the surface horizon is read. The survey publishes deeper
              horizons and they are not represented here.
            </dd>
          </div>
          {RESERVED_EVIDENCE_CLASSES.map((r) => (
            <div key={r.evidenceClass}>
              <dt className="font-medium text-ink-900">
                {r.evidenceClass === 'measured'
                  ? 'Laboratory measurements'
                  : r.evidenceClass === 'modeled'
                    ? 'Modelled soil maps'
                    : 'Derived values'}
              </dt>
              <dd className="text-ink-700">{r.why}</dd>
            </div>
          ))}
        </dl>
      </section>

      <aside
        className="mt-10 rounded-lg border border-olive-200 bg-olive-50/60 p-4 text-sm text-ink-700"
        aria-label="How to read this page"
      >
        {SOIL_CAVEAT}
      </aside>
    </Container>
  );
}
