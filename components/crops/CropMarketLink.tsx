import Link from 'next/link';
import { COMMODITIES_BY_CROP, relatedCrops } from '@/lib/crops/integration';
import {
  commodityMarketPath,
  seriesForCommodity,
} from '@/lib/markets/registry';
import { PUBLISHED_CONTENT } from '@/lib/content/registry';

const commodityTitle = (slug: string) =>
  PUBLISHED_CONTENT.find(
    (c) => c.contentType === 'commodity' && c.slug === slug,
  )?.title ?? slug;

/**
 * The traded commodities a crop becomes, and the price record behind them.
 *
 * This link existed in the data from the day the commodity layer was written —
 * every commodity names its `sourceCrop` — and no crop page used it. A reader
 * on the wheat page had no way to reach 535 price observations that are about
 * wheat, because nothing had reversed the reference.
 */
export function CropMarketLink({ slug }: { slug: string }) {
  const commodities = COMMODITIES_BY_CROP.get(slug) ?? [];
  if (!commodities.length) return null;
  const withData = commodities.filter((c) => seriesForCommodity(c).length > 0);

  return (
    <section
      className="mt-8 rounded-lg border border-ink-200 bg-parchment-50 p-5"
      aria-label="Traded as"
    >
      <h2 className="font-serif text-lg text-forest-900">Traded as</h2>
      <p className="mt-2 text-sm text-ink-700">
        {commodities.length === 1
          ? 'This crop is traded as one commodity in this corpus.'
          : `This crop is traded as ${commodities.length} distinct commodities, which are graded and priced separately.`}
      </p>
      <ul className="mt-3 space-y-1 text-sm">
        {commodities.map((c) => {
          const n = seriesForCommodity(c).length;
          return (
            <li key={c}>
              <Link
                href={`/commodities/${c}`}
                className="text-forest-700 hover:underline"
              >
                {commodityTitle(c)}
              </Link>
              {n > 0 && (
                <>
                  {' — '}
                  <Link
                    href={commodityMarketPath(c)}
                    className="text-forest-700 hover:underline"
                  >
                    {n} price series
                  </Link>
                </>
              )}
            </li>
          );
        })}
      </ul>
      {withData.length === 0 && (
        <p className="mt-2 text-sm text-ink-600">
          No ingested price series for these commodities yet.
        </p>
      )}
    </section>
  );
}

const BASIS_LABEL: Record<string, string> = {
  'same-genus': 'Same genus',
  'same-concept': 'Same crop concept',
  'shared-host-pressure': 'Shared pest and disease pressure',
};

/**
 * Crops genuinely related to this one, each saying what the relation is.
 *
 * Deliberately not "you may also like". Every entry names the thing the two
 * crops share — a genus, a concept scope, a set of organisms that attack both —
 * and a relation that cannot name one is not shown. That is what keeps this
 * from becoming a permutation of every crop against every other.
 */
export function RelatedCropList({ slug }: { slug: string }) {
  const related = relatedCrops(slug);
  if (!related.length) return null;
  const byBasis = new Map<string, typeof related>();
  for (const r of related)
    byBasis.set(r.basis, [...(byBasis.get(r.basis) ?? []), r]);

  return (
    <section className="mt-8" aria-label="Related crops">
      <h2 className="font-serif text-lg text-forest-900">Related crops</h2>
      <dl className="mt-3 space-y-3 text-sm">
        {[...byBasis].map(([basis, rows]) => (
          <div key={basis}>
            <dt className="text-xs font-semibold uppercase tracking-wide text-ink-500">
              {BASIS_LABEL[basis] ?? basis}
            </dt>
            <dd className="mt-1 text-ink-800">
              {rows.map((r, i) => (
                <span key={r.slug}>
                  {i > 0 && ', '}
                  <Link
                    href={`/crops/${r.slug}`}
                    className="text-forest-700 hover:underline"
                    title={r.detail}
                  >
                    {PUBLISHED_CONTENT.find(
                      (c) => c.contentType === 'crop' && c.slug === r.slug,
                    )?.title ?? r.slug}
                  </Link>
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
