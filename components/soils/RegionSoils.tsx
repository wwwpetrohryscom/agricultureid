import Link from 'next/link';
import { SOIL_CAVEAT, SOIL_SUITABILITY_CAVEAT } from '@/types/soil';
import {
  propertySummary,
  soilBodiesIn,
  SOIL_SURVEYS_PATH,
} from '@/lib/soils/registry';

/**
 * Soil bodies the official survey maps in one jurisdiction.
 *
 * Renders nothing where no survey is ingested. An empty table would be read as
 * an absence of soil data in the world rather than in this corpus, which is
 * the inference the coverage layer exists to prevent.
 *
 * The most widespread soil bodies come first, measured by how many of the
 * survey's own map units contain them — not by any judgement of importance
 * made here.
 */
export function RegionSoils({
  jurisdictionId,
  regionName,
}: {
  jurisdictionId?: string;
  regionName: string;
}) {
  if (!jurisdictionId) return null;
  const bodies = soilBodiesIn(jurisdictionId);
  if (bodies.length === 0) return null;

  const ph = propertySummary(jurisdictionId, 'pH');
  const om = propertySummary(jurisdictionId, 'organicMatter');

  const ranked = [...bodies]
    .map((b) => ({
      ...b,
      mapUnits: b.observations[0]?.unitsCovered.mapUnits ?? 0,
      surveyAreas: b.observations[0]?.unitsCovered.surveyAreas ?? 0,
    }))
    .sort((a, b) => b.mapUnits - a.mapUnits)
    .slice(0, 20);

  const value = (
    o: (typeof bodies)[number]['observations'],
    property: string,
  ) => {
    const found = o.find((x) => x.property === property);
    if (!found) return '—';
    if (found.categoricalValue) return found.categoricalValue;
    if (!found.range) return '—';
    const { min, max } = found.range;
    return min === max ? `${min}` : `${min}–${max}`;
  };

  return (
    <section className="mt-8">
      <h2 className="font-serif text-lg font-bold text-ink-900">
        Soils documented by the official survey
      </h2>
      <p className="mt-2 text-sm leading-7 text-ink-700">
        The soil survey maps {bodies.length.toLocaleString('en')} named soil
        bodies in {regionName}
        {ph
          ? `, with surface pH from ${ph.min.toFixed(1)} to ${ph.max.toFixed(1)}`
          : ''}
        {om
          ? ` and organic matter from ${om.min.toFixed(1)}% to ${om.max.toFixed(1)}%`
          : ''}
        . The twenty appearing in the most mapped units are shown; each figure
        is the survey&rsquo;s representative value for that soil body, not a
        measurement.
      </p>

      <div className="mt-3 overflow-x-auto">
        <table className="w-full min-w-[40rem] border-collapse text-sm">
          <caption className="sr-only">
            Soil bodies mapped in {regionName}, with representative surface
            properties from the official survey
          </caption>
          <thead>
            <tr className="border-b border-ink-200 text-left text-xs uppercase tracking-wide text-ink-500">
              <th scope="col" className="py-2 pr-3 font-medium">
                Soil body
              </th>
              <th scope="col" className="py-2 pr-3 font-medium">
                pH
              </th>
              <th scope="col" className="py-2 pr-3 font-medium">
                Organic matter %
              </th>
              <th scope="col" className="py-2 pr-3 font-medium">
                Clay %
              </th>
              <th scope="col" className="py-2 pr-3 font-medium">
                Drainage
              </th>
              <th scope="col" className="py-2 font-medium">
                Map units
              </th>
            </tr>
          </thead>
          <tbody>
            {ranked.map((b) => {
              const cls = b.observations[0]?.classification;
              return (
                <tr
                  key={b.soilBody}
                  className="border-b border-ink-100 align-top"
                >
                  <th
                    scope="row"
                    className="py-1.5 pr-3 font-normal text-ink-900"
                  >
                    {b.soilBody}
                    {cls ? (
                      <span className="block text-xs italic text-ink-500">
                        {cls.value}
                        {cls.varies ? ' (the survey records both)' : ''}
                      </span>
                    ) : null}
                  </th>
                  <td className="py-1.5 pr-3 tabular-nums text-ink-700">
                    {value(b.observations, 'pH')}
                  </td>
                  <td className="py-1.5 pr-3 tabular-nums text-ink-700">
                    {value(b.observations, 'organicMatter')}
                  </td>
                  <td className="py-1.5 pr-3 tabular-nums text-ink-700">
                    {value(b.observations, 'clayContent')}
                  </td>
                  <td className="py-1.5 pr-3 text-ink-700">
                    {value(b.observations, 'drainageClass')}
                  </td>
                  <td className="py-1.5 tabular-nums text-ink-600">
                    {b.mapUnits.toLocaleString('en')}
                    <span className="block text-xs text-ink-500">
                      in {b.surveyAreas} survey area
                      {b.surveyAreas === 1 ? '' : 's'}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="mt-3 text-xs text-ink-500">{SOIL_CAVEAT}</p>
      <p className="mt-2 text-xs text-ink-500">
        {SOIL_SUITABILITY_CAVEAT}{' '}
        <Link
          href={SOIL_SURVEYS_PATH}
          className="underline hover:text-forest-800"
        >
          How these observations are recorded
        </Link>
        .
      </p>
    </section>
  );
}
