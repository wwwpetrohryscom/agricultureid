import type { SnapshotRow } from '@/types/geo';

function fmt(v: number): string {
  const abs = Math.abs(v);
  if (abs >= 1_000_000)
    return (
      (v / 1_000_000).toLocaleString('en', { maximumFractionDigits: 1 }) + 'M'
    );
  if (abs >= 1_000)
    return (v / 1_000).toLocaleString('en', { maximumFractionDigits: 1 }) + 'k';
  return v.toLocaleString('en', { maximumFractionDigits: abs < 10 ? 2 : 1 });
}

/**
 * Accessible time-series bar chart. Bars are drawn from a zero baseline (never a
 * truncated axis that misleads), with the underlying data always available as a
 * real table. Server-rendered SVG; no client JS.
 */
export function TimeSeriesChart({
  rows,
  unit,
  label,
  points = 12,
}: {
  rows: SnapshotRow[];
  unit: string;
  label: string;
  points?: number;
}) {
  const data = rows.slice(-points);
  if (data.length === 0) return null;

  const max = Math.max(...data.map((r) => r.value), 0);
  const min = Math.min(...data.map((r) => r.value), 0);
  const range = max - min || 1;
  const W = 640;
  const H = 180;
  const padB = 22;
  const gap = 4;
  const barW = (W - gap * (data.length - 1)) / data.length;

  return (
    <figure className="mt-2">
      <div className="overflow-x-auto">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="h-auto w-full min-w-[28rem]"
          role="img"
          aria-label={`${label} (${unit}) from ${data[0]!.year} to ${data[data.length - 1]!.year}`}
        >
          {data.map((r, i) => {
            const h = ((r.value - min) / range) * (H - padB);
            const x = i * (barW + gap);
            const y = H - padB - h;
            return (
              <g key={r.year}>
                <rect
                  x={x}
                  y={y}
                  width={barW}
                  height={Math.max(h, 1)}
                  rx={2}
                  className="fill-forest-500"
                />
                {(i === 0 ||
                  i === data.length - 1 ||
                  i === Math.floor(data.length / 2)) && (
                  <text
                    x={x + barW / 2}
                    y={H - 6}
                    textAnchor="middle"
                    className="fill-ink-500 text-[11px]"
                  >
                    {r.year}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>
      <figcaption className="mt-1 text-xs text-ink-500">
        {label} ({unit}). Bars start at{' '}
        {min < 0 ? `${fmt(min)} (series minimum)` : 'zero'}.
      </figcaption>
      <details className="mt-2">
        <summary className="cursor-pointer text-xs font-medium text-olive-800">
          Show data table
        </summary>
        <div className="mt-2 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <caption className="sr-only">
              {label} in {unit} by year
            </caption>
            <thead>
              <tr className="border-b border-ink-200 text-left">
                <th scope="col" className="py-1 pr-4 font-semibold">
                  Year
                </th>
                <th scope="col" className="py-1 font-semibold">
                  {unit}
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((r) => (
                <tr key={r.year} className="border-b border-ink-100">
                  <td className="py-1 pr-4">{r.year}</td>
                  <td className="py-1 tabular-nums">
                    {r.value.toLocaleString('en', { maximumFractionDigits: 2 })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
    </figure>
  );
}
