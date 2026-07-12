import Link from 'next/link';
import { latestStatistic } from '@/lib/geo/snapshots';
import { countryName } from '@/lib/geo/registry';
import { countryPath } from '@/lib/geo/paths';
import type {
  AgriculturalIndicator,
  CountryAgricultureProfile,
} from '@/types/geo';

/**
 * Latest value of one indicator across the profiled countries. Each row shows
 * its own year, so values from different years are never silently presented as a
 * strict ranking; rows are ordered alphabetically, not by value. For
 * non-comparable indicators (index bases, modeled estimates) a caveat is shown.
 */
export function IndicatorCountryTable({
  indicator,
  profiles,
}: {
  indicator: AgriculturalIndicator;
  profiles: CountryAgricultureProfile[];
}) {
  const rows = profiles
    .map((p) => ({ p, stat: latestStatistic(indicator.id, p.countryCode) }))
    .filter((r) => r.stat)
    .sort((a, b) => a.p.name.localeCompare(b.p.name));

  if (rows.length === 0) {
    return (
      <p className="text-sm text-ink-600">
        No profiled country has a value for this indicator in the current
        snapshot.
      </p>
    );
  }

  return (
    <div>
      {!indicator.comparable && (
        <p className="mb-3 rounded-card border border-clay-200 bg-[#FAFAF7] p-3 text-xs leading-5 text-ink-600">
          This indicator is an index or modeled measure. Values are useful for
          tracking change over time within a country, but are{' '}
          <span className="font-semibold">not</span> directly comparable across
          countries as an absolute ranking.
        </p>
      )}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[30rem] border-collapse text-sm">
          <caption className="sr-only">
            Latest {indicator.name} ({indicator.unit}) by country, each with its
            own reference year
          </caption>
          <thead>
            <tr className="border-b border-ink-200 text-left text-ink-700">
              <th scope="col" className="py-2 pr-4 font-semibold">
                Country
              </th>
              <th scope="col" className="py-2 pr-4 font-semibold">
                {indicator.unit}
              </th>
              <th scope="col" className="py-2 font-semibold">
                Year
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map(({ p, stat }) => (
              <tr key={p.slug} className="border-b border-ink-100">
                <td className="py-2 pr-4">
                  <Link
                    href={countryPath(p.slug)}
                    className="text-olive-800 underline decoration-olive-300 underline-offset-2 hover:text-olive-900"
                  >
                    {countryName(p.countryCode)}
                  </Link>
                </td>
                <td className="py-2 pr-4 tabular-nums">
                  {stat!.value.toLocaleString('en', {
                    maximumFractionDigits: 2,
                  })}
                  {stat!.estimateFlag && (
                    <span className="ml-1 text-xs text-clay-700">est.</span>
                  )}
                </td>
                <td className="py-2 tabular-nums">{stat!.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
