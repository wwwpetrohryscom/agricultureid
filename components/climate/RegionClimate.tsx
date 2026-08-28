import Link from 'next/link';
import {
  currentDroughtAssessment,
  normalsForState,
  CLIMATE_RISK_PATH,
} from '@/lib/climate/registry';
import {
  CATEGORY_IS_DROUGHT,
  DROUGHT_CATEGORIES,
  DROUGHT_CATEGORY_LABEL,
  DROUGHT_CAVEAT,
  NORMAL_CAVEAT,
} from '@/types/climate-water';

/** The date this corpus was captured. Currency is judged against it, not the clock. */
const AS_OF = '2026-08-27';

/**
 * Climate normals and the drought assessment for one US state.
 *
 * Renders nothing for a jurisdiction with neither, so a region page never shows
 * an empty climate section — and silence here is not a claim that the place has
 * no climate data in the world.
 *
 * Two things it is careful about. The drought figure is shown only if a map is
 * in force on the reference date: an expired weekly assessment presented as the
 * present state of a drought is the error a reader would act on. And D0 is
 * shown separately from drought, because the Drought Monitor calls it
 * "abnormally dry" and counting it as drought would add more than twenty points
 * to the average state.
 */
export function RegionClimate({
  jurisdictionId,
  regionName,
}: {
  jurisdictionId?: string;
  regionName: string;
}) {
  const stateCode = jurisdictionId?.startsWith('US-')
    ? jurisdictionId.slice(3)
    : undefined;
  if (!stateCode) return null;

  const stations = normalsForState(stateCode);
  const drought = currentDroughtAssessment(stateCode, AS_OF);
  if (stations.length === 0 && !drought) return null;

  const inDrought = drought
    ? DROUGHT_CATEGORIES.filter((c) => CATEGORY_IS_DROUGHT[c]).reduce(
        (t, c) => t + (drought.shares[c] ?? 0),
        0,
      )
    : 0;

  return (
    <section
      className="mt-10"
      aria-label={`Climate and drought in ${regionName}`}
    >
      <h2 className="font-serif text-xl text-forest-900">
        Climate and drought
      </h2>

      {drought && (
        <div className="mt-3 rounded-lg border border-ink-100 bg-[#FAFAF7] p-4">
          <div className="flex flex-wrap items-baseline gap-2">
            <h3 className="font-medium text-ink-900">
              Drought assessment, week of {drought.validFrom}
            </h3>
            <span className="rounded-full border border-ink-200 px-2 py-0.5 text-[0.625rem] font-semibold uppercase tracking-wide text-ink-600">
              assessment
            </span>
          </div>
          <p className="mt-2 text-sm text-ink-700">
            <span className="font-medium tabular-nums">
              {inDrought.toFixed(1)}%
            </span>{' '}
            of {regionName}&rsquo;s land area was assessed as being in drought
            (D1 or worse) for the week of {drought.validFrom} to{' '}
            {drought.validTo}.
          </p>
          <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-3">
            {DROUGHT_CATEGORIES.map((c) => (
              <div
                key={c}
                className="flex items-baseline justify-between gap-2"
              >
                <dt className="text-xs text-ink-600">
                  {c === 'none' ? 'No category' : c}
                  {!CATEGORY_IS_DROUGHT[c] && c !== 'none' && (
                    <span className="text-ink-400"> · not drought</span>
                  )}
                </dt>
                <dd className="text-sm tabular-nums text-forest-900">
                  {(drought.shares[c] ?? 0).toFixed(1)}%
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-2 text-xs text-ink-500">
            D0 is {DROUGHT_CATEGORY_LABEL.D0.toLowerCase()} and is counted
            separately: the Drought Monitor treats it as a precursor to drought
            and a category areas pass through while recovering.
          </p>
          <p className="mt-2 text-xs text-ink-500">{DROUGHT_CAVEAT}</p>
        </div>
      )}

      {stations.length > 0 && (
        <div className="mt-3 rounded-lg border border-ink-100 bg-[#FAFAF7] p-4">
          <div className="flex flex-wrap items-baseline gap-2">
            <h3 className="font-medium text-ink-900">
              Climate normals, 1991–2020
            </h3>
            <span className="rounded-full border border-ink-200 px-2 py-0.5 text-[0.625rem] font-semibold uppercase tracking-wide text-ink-600">
              normal
            </span>
          </div>
          <p className="mt-2 text-sm text-ink-700">
            {stations.length} station
            {stations.length === 1 ? '' : 's'} in {regionName} publish a
            full-standard 1991–2020 normal. Each describes its own site; none is
            an average for the state.
          </p>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full min-w-[30rem] border-collapse text-sm">
              <thead>
                <tr className="border-b border-ink-200 text-left">
                  <th className="py-2 pr-4 font-medium text-ink-600">
                    Station
                  </th>
                  <th className="py-2 pr-4 text-right font-medium text-ink-600">
                    Mean temp
                  </th>
                  <th className="py-2 pr-4 text-right font-medium text-ink-600">
                    Precipitation
                  </th>
                  <th className="py-2 text-right font-medium text-ink-600">
                    Days ≤ 32°F
                  </th>
                </tr>
              </thead>
              <tbody>
                {stations.slice(0, 8).map((s) => {
                  const get = (m: string) =>
                    s.values.find((v) => v.metric === m);
                  const t = get('annualMeanTemperature');
                  const p = get('annualPrecipitation');
                  const f = get('daysMinimumAtOrBelow32F');
                  return (
                    <tr key={s.stationId} className="border-b border-ink-100">
                      <td className="py-2 pr-4 text-ink-700">
                        {s.stationName}
                      </td>
                      <td className="py-2 pr-4 text-right tabular-nums text-ink-900">
                        {t ? `${t.value.toFixed(1)}°F` : '—'}
                      </td>
                      <td className="py-2 pr-4 text-right tabular-nums text-ink-900">
                        {p ? `${p.value.toFixed(2)} in` : '—'}
                      </td>
                      <td className="py-2 text-right tabular-nums text-ink-900">
                        {f ? f.value.toFixed(1) : '—'}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {stations.length > 8 && (
            <p className="mt-2 text-xs text-ink-500">
              Eight of {stations.length} stations shown.
            </p>
          )}
          <p className="mt-2 text-xs text-ink-500">{NORMAL_CAVEAT}</p>
        </div>
      )}

      <p className="mt-3 text-sm">
        <Link
          href={CLIMATE_RISK_PATH}
          className="text-forest-700 hover:underline"
        >
          How these figures are produced, and what they do not say
        </Link>
      </p>
    </section>
  );
}
