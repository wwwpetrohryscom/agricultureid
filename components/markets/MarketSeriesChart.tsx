import {
  METRIC_LABEL,
  type AgriculturalMarketObservation,
  type MarketSeries,
} from '@/types/market';

function fmt(v: number): string {
  const abs = Math.abs(v);
  if (abs >= 1_000_000)
    return `${(v / 1_000_000).toLocaleString('en', { maximumFractionDigits: 1 })}M`;
  if (abs >= 1_000)
    return `${(v / 1_000).toLocaleString('en', { maximumFractionDigits: 1 })}k`;
  return v.toLocaleString('en', { maximumFractionDigits: abs < 10 ? 2 : 1 });
}

/** Statuses that are not a plain reported figure get a distinct fill. */
function isReported(o: AgriculturalMarketObservation): boolean {
  return o.observationStatus === 'observed';
}

/**
 * Accessible market series chart.
 *
 * Three rules the design exists to enforce:
 *
 *  - Bars start at ZERO. A truncated axis turns a 3% change into a cliff, and
 *    on production data that reads as a crop failure.
 *  - Status is drawn, not just captioned. An estimated or forecast value is
 *    hatched, so a reader who never looks at the legend still sees that those
 *    bars are a different kind of number.
 *  - The table is always present, never a fallback. The chart is a summary of
 *    the table, so screen-reader and keyboard users lose nothing, and no value
 *    exists only as a pixel.
 *
 * Server-rendered SVG. No client JS, no smoothing, no interpolation: a gap in
 * the source is a gap on the page.
 */
export function MarketSeriesChart({
  series,
  points = 15,
}: {
  series: MarketSeries;
  points?: number;
}) {
  const data = series.observations.slice(-points);
  if (data.length === 0) return null;

  const label = METRIC_LABEL[series.metric];
  const max = Math.max(...data.map((o) => o.value), 0);
  const min = Math.min(...data.map((o) => o.value), 0);
  const range = max - min || 1;
  const W = 640;
  const H = 170;
  const padB = 22;
  const gap = 4;
  const barW = (W - gap * (data.length - 1)) / data.length;
  const hatchId = `hatch-${series.id.replace(/[^a-zA-Z0-9]/g, '-')}`;
  const anyEstimated = data.some((o) => !isReported(o));
  const basisLabel =
    series.basis === 'marketing-year' ? 'marketing year' : 'calendar year';

  return (
    <figure className="mt-3">
      <div className="overflow-x-auto">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="h-auto w-full min-w-[26rem]"
          role="img"
          aria-label={`${label} in ${series.unit}, ${basisLabel} ${data[0]!.period.year} to ${data[data.length - 1]!.period.year}. Full values follow in the data table.`}
        >
          <defs>
            <pattern
              id={hatchId}
              width="6"
              height="6"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <rect width="6" height="6" className="fill-forest-200" />
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="6"
                strokeWidth="3"
                className="stroke-forest-500"
              />
            </pattern>
          </defs>
          {data.map((o, i) => {
            const h = ((o.value - min) / range) * (H - padB);
            const x = i * (barW + gap);
            const y = H - padB - h;
            return (
              <g key={o.period.year}>
                <rect
                  x={x}
                  y={y}
                  width={barW}
                  height={Math.max(h, 1)}
                  rx={2}
                  fill={isReported(o) ? undefined : `url(#${hatchId})`}
                  className={isReported(o) ? 'fill-forest-500' : undefined}
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
                    {o.period.year}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>
      <figcaption className="mt-1 text-xs text-ink-500">
        {label} ({series.unit}), by {basisLabel}. Bars start at{' '}
        {min < 0 ? `${fmt(min)} (series minimum)` : 'zero'}.
        {anyEstimated
          ? ' Hatched bars are values the source publishes as estimates rather than reported figures.'
          : ''}
      </figcaption>
      <div className="mt-2 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <caption className="sr-only">
            {label} in {series.unit} by {basisLabel}, with the status each value
            carries in its source
          </caption>
          <thead>
            <tr className="border-b border-ink-200 text-left text-xs uppercase tracking-wide text-ink-500">
              <th scope="col" className="py-1 pr-4 font-medium">
                {series.basis === 'marketing-year' ? 'Marketing year' : 'Year'}
              </th>
              <th scope="col" className="py-1 pr-4 font-medium">
                {series.unit}
              </th>
              <th scope="col" className="py-1 font-medium">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((o) => (
              <tr key={o.period.year} className="border-b border-ink-100">
                <th scope="row" className="py-1 pr-4 font-normal">
                  {o.period.year}
                  {series.basis === 'marketing-year' ? '/' : ''}
                  {series.basis === 'marketing-year'
                    ? String((o.period.year + 1) % 100).padStart(2, '0')
                    : ''}
                </th>
                <td className="py-1 pr-4 tabular-nums">
                  {o.value.toLocaleString('en', { maximumFractionDigits: 2 })}
                </td>
                <td className="py-1 text-ink-600">{o.observationStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}
