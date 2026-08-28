import Link from 'next/link';
import { costsForCrop, ECONOMICS_PATH } from '@/lib/economics/registry';
import { FORECAST_CAVEAT } from '@/types/farm-economics';

/**
 * Cost-of-production figures on a crop page.
 *
 * Renders nothing for a crop with no ingested figures — a crop this corpus has
 * no cost data for must not advertise an empty section, and silence here is not
 * a claim that growing it is free or unstudied.
 *
 * What it deliberately does not do: compute a margin, a profit or a break-even
 * price. Every one of those needs revenue, and no dataset in this corpus
 * carries any. It also never shows a bare number — each figure keeps its
 * currency, its unit basis, its year and the fact that it is a forecast.
 */
export function CropCostSummary({ cropSlug }: { cropSlug: string }) {
  const rows = costsForCrop(cropSlug);
  if (rows.length === 0) return null;

  const years = [...new Set(rows.map((r) => r.period))].sort();
  const latest = years[years.length - 1];
  const forLatest = rows.filter((r) => r.period === latest);
  const headline = ['totalCost', 'operatingCost', 'allocatedOverheadCost']
    .map((m) => forLatest.find((r) => r.metric === m))
    .filter((r): r is NonNullable<typeof r> => Boolean(r));
  if (headline.length === 0) return null;

  const LABEL: Record<string, string> = {
    totalCost: 'Total costs listed',
    operatingCost: 'Operating costs',
    allocatedOverheadCost: 'Allocated overhead',
  };

  return (
    <section className="mt-8 rounded-lg border border-ink-100 bg-[#FAFAF7] p-4">
      <h2 className="font-serif text-lg text-forest-900">
        Cost of production, as forecast
      </h2>
      <p className="mt-1 text-sm text-ink-600">
        United States national estimates for {latest}, published by USDA
        Economic Research Service.
      </p>

      <dl className="mt-3 space-y-1.5">
        {headline.map((r) => (
          <div key={r.id} className="flex flex-wrap items-baseline gap-x-2">
            <dt className="text-sm text-ink-600">{LABEL[r.metric]}</dt>
            <dd className="text-sm font-medium tabular-nums text-forest-900">
              {r.value.toFixed(2)} {r.currency}
            </dd>
            <dd className="text-xs text-ink-500">{r.unitBasis}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-3 text-xs text-ink-500">{FORECAST_CAVEAT}</p>
      <p className="mt-2 text-xs text-ink-500">
        These are costs only. The source publishes no revenue alongside them, so
        no margin, profit or break-even price is derived from them here.
      </p>
      <p className="mt-2 text-sm">
        <Link href={ECONOMICS_PATH} className="text-forest-700 hover:underline">
          How these figures are produced
        </Link>
      </p>
    </section>
  );
}
