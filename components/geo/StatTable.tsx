import { INDICATOR_BY_ID } from '@/data/geo/indicators';
import { latestStatistic } from '@/lib/geo/snapshots';
import { indicatorPath } from '@/lib/geo/paths';
import Link from 'next/link';

/**
 * Latest observed value per indicator for a country, each row carrying its own
 * year and estimate flag. Units and source/version are shown; values are never
 * bare numbers. Indicators with no data for the country are omitted (no fake
 * coverage).
 */
export function StatTable({
  iso3,
  indicatorIds,
}: {
  iso3: string;
  indicatorIds: string[];
}) {
  const rows = indicatorIds
    .map((id) => ({
      ind: INDICATOR_BY_ID.get(id),
      stat: latestStatistic(id, iso3),
    }))
    .filter((r) => r.ind && r.stat);

  if (rows.length === 0) {
    return (
      <p className="text-sm text-ink-600">
        No indicator values are available for this country in the current
        snapshots.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[34rem] border-collapse text-sm">
        <caption className="sr-only">
          Latest available agricultural indicators, with year and unit
        </caption>
        <thead>
          <tr className="border-b border-ink-200 text-left text-ink-700">
            <th scope="col" className="py-2 pr-4 font-semibold">
              Indicator
            </th>
            <th scope="col" className="py-2 pr-4 font-semibold">
              Value
            </th>
            <th scope="col" className="py-2 pr-4 font-semibold">
              Unit
            </th>
            <th scope="col" className="py-2 font-semibold">
              Year
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ ind, stat }) => (
            <tr
              key={ind!.id}
              className="border-b border-ink-100 align-baseline"
            >
              <td className="py-2 pr-4">
                <Link
                  href={indicatorPath(ind!.slug)}
                  className="font-medium text-olive-800 underline decoration-olive-300 underline-offset-2 hover:text-olive-900"
                >
                  {ind!.name}
                </Link>
                {stat!.estimateFlag && (
                  <span className="ml-1 text-xs text-clay-700">(est.)</span>
                )}
              </td>
              <td className="py-2 pr-4 tabular-nums">
                {stat!.value.toLocaleString('en', { maximumFractionDigits: 2 })}
              </td>
              <td className="py-2 pr-4 text-ink-600">{ind!.unit}</td>
              <td className="py-2 tabular-nums">{stat!.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
