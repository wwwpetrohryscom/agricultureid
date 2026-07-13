import Link from 'next/link';
import { ProvenanceNote } from '@/components/geo/ProvenanceNote';
import type { ResolvedComparison } from '@/types/comparison';

/**
 * Renders a resolved comparison as an accessible table: entities are columns,
 * dimensions are rows. Values are resolved from the source entities; absent or
 * non-comparable values show "—". For country comparisons every row shows the
 * common reference year, and a source/version provenance line is displayed.
 */
export function ComparisonTable({
  resolved,
}: {
  resolved: ResolvedComparison;
}) {
  const { comparison, columns, rows, provenance } = resolved;
  const isCountry = comparison.entityType === 'country';

  if (rows.length === 0) {
    return (
      <p className="text-sm text-ink-600">
        No comparable fields resolved for these entities.
      </p>
    );
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[36rem] border-collapse text-sm">
          <caption className="sr-only">{comparison.title}</caption>
          <thead>
            <tr className="border-b border-ink-200 text-left">
              <th scope="col" className="py-2 pr-4 font-semibold text-ink-700">
                {isCountry ? 'Indicator' : 'Dimension'}
              </th>
              {columns.map((c) => (
                <th key={c.id} scope="col" className="py-2 pr-4 font-semibold">
                  {c.route === '#' ? (
                    c.title
                  ) : (
                    <Link
                      href={c.route}
                      className="text-olive-800 underline decoration-olive-300 underline-offset-2 hover:text-olive-900"
                    >
                      {c.title}
                    </Link>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.key} className="border-b border-ink-100 align-top">
                <th
                  scope="row"
                  className="py-2 pr-4 text-left font-medium text-ink-700"
                >
                  {row.label}
                  {row.unit && (
                    <span className="block text-xs font-normal text-ink-500">
                      {row.unit}
                    </span>
                  )}
                  {isCountry && row.year && (
                    <span className="block text-xs font-normal text-ink-400">
                      {row.year}
                    </span>
                  )}
                </th>
                {row.cells.map((cell, i) => (
                  <td key={i} className="py-2 pr-4 tabular-nums text-ink-700">
                    {cell}
                    {row.note && i === 0 && (
                      <span className="mt-1 block text-xs italic text-ink-500">
                        {row.note}
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isCountry && provenance && (
        <p className="mt-3">
          <ProvenanceNote
            sourceDataset={provenance.sourceDataset}
            sourceVersion={provenance.sourceVersion}
            retrievedAt={provenance.retrievedAt}
            sourceUrl="https://data.worldbank.org"
          />
        </p>
      )}
    </div>
  );
}
