import Link from 'next/link';
import { integrationFor } from '@/lib/crops/integration';
import { LAYER_ASSESSMENTS } from '@/data/crop-evidence';
import { CROP_TAXA_PATH } from '@/lib/crops/paths';

const LAYER_LABEL: Record<string, string> = {
  calendars: 'crop calendar records',
  cultivars: 'published cultivars',
  varietyRegistrations: 'official variety registrations',
  extension: 'verified extension resources',
  biosecurity: 'pests and diseases naming this crop as a host',
  soils: 'soil references',
  climate: 'climate references',
  economics: 'farm economics observations',
  markets: 'market price series',
  relatedCrops: 'related crops',
};

/**
 * What AgricultureID holds for this crop, counted at render time.
 *
 * Every number here is computed from the corpus when the page is built. None of
 * it is written down, because a sentence saying "AgricultureID indexes calendar
 * records for four jurisdictions" is true on the day it is written and silently
 * false afterwards — which is the failure this program has now found in prose
 * three times.
 *
 * The absent layers are as informative as the present ones, so they are named
 * rather than omitted, with the corpus-level reason attached.
 */
export function CropEvidenceSummary({ slug }: { slug: string }) {
  const x = integrationFor(slug);
  const held = x.coverage.filter(
    (c) => c.refs.length > 0 && LAYER_LABEL[c.layer],
  );
  const absent = x.coverage.filter(
    (c) =>
      c.refs.length === 0 &&
      c.linkage.via !== 'unkeyed' &&
      LAYER_LABEL[c.layer],
  );
  if (!held.length) return null;

  return (
    <section className="mt-8 rounded-lg border border-ink-200 bg-parchment-50 p-5">
      <h2 className="font-serif text-lg text-forest-900">
        What AgricultureID holds for this crop
      </h2>
      <ul className="mt-3 space-y-1 text-sm text-ink-800">
        {held.map((c) => (
          <li key={c.layer}>
            <span className="font-medium tabular-nums">{c.refs.length}</span>{' '}
            {LAYER_LABEL[c.layer]}
          </li>
        ))}
      </ul>

      {absent.length > 0 && (
        <>
          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-ink-500">
            Not held
          </p>
          <ul className="mt-1 space-y-1 text-sm text-ink-700">
            {absent.map((c) => {
              const a = LAYER_ASSESSMENTS.find((y) => y.layer === c.layer);
              return (
                <li key={c.layer}>
                  No {LAYER_LABEL[c.layer]}
                  {a && (
                    <span className="text-ink-600">
                      {' '}
                      — {a.reason.toLowerCase().replace(/_/g, ' ')}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
          <p className="mt-2 text-xs text-ink-600">
            An absence here means this corpus holds no such record, not that
            none exists.
          </p>
        </>
      )}
      <p className="mt-3 text-sm">
        <Link href={CROP_TAXA_PATH} className="text-forest-700 hover:underline">
          Verified crop taxa
        </Link>
      </p>
    </section>
  );
}
