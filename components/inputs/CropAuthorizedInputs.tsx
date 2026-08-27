import Link from 'next/link';
import {
  productsForCrop,
  PRODUCTS_PATH,
  INPUTS_HUB_PATH,
} from '@/lib/inputs/registry';
import { INPUT_CAVEAT, USE_SCOPE_CAVEAT } from '@/types/input';

/**
 * Authorised input products for a crop.
 *
 * Deliberately a SUMMARY, not a list. Wheat alone carries several hundred
 * currently authorised French products; rendering them here would bury the crop
 * page and imply this site is where you choose one. It is not. The counts say
 * what exists, the register is where you look it up, and nothing here suggests a
 * product, a rate or a treatment.
 *
 * Renders nothing when the register records no authorised use naming this crop.
 * That is not a claim that none exists — only unambiguous single-crop terms are
 * mapped, so a crop covered by a collective term ("Fruits à pépins") shows here
 * as absent rather than as guesswork.
 */
export function CropAuthorizedInputs({ cropSlug }: { cropSlug: string }) {
  const matches = productsForCrop(cropSlug);
  if (matches.length === 0) return null;

  const byFunction = new Map<string, number>();
  for (const m of matches) {
    const fn = m.input.functions[0] ?? 'Not stated';
    byFunction.set(fn, (byFunction.get(fn) ?? 0) + 1);
  }
  const targets = new Map<string, number>();
  for (const m of matches) {
    for (const u of m.uses) {
      if (u.target) targets.set(u.target, (targets.get(u.target) ?? 0) + 1);
    }
  }
  const holders = new Set(
    matches.map((m) => m.input.holderName).filter(Boolean),
  ).size;

  return (
    <section className="mt-8 rounded-lg border border-ink-100 bg-[#FAFAF7] p-4">
      <h2 className="font-serif text-lg text-forest-900">
        Authorised inputs (France)
      </h2>
      <p className="mt-1 text-sm text-ink-600">
        The French register records{' '}
        <strong>{matches.length.toLocaleString('en')}</strong> currently
        authorised products whose authorised use names this crop, held by{' '}
        {holders} authorisation holders. This is a count of what exists on the
        register, not a recommendation and not a shortlist.
      </p>

      <div className="mt-3 grid gap-4 sm:grid-cols-2">
        <div>
          <h3 className="text-xs uppercase tracking-wide text-ink-500">
            By function
          </h3>
          <ul className="mt-1 space-y-0.5 text-sm text-ink-700">
            {[...byFunction]
              .sort((a, b) => b[1] - a[1])
              .slice(0, 6)
              .map(([fn, n]) => (
                <li key={fn}>
                  {fn} <span className="tabular-nums text-ink-500">{n}</span>
                </li>
              ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-wide text-ink-500">
            Targets named on the register
          </h3>
          <ul className="mt-1 space-y-0.5 text-sm text-ink-700">
            {[...targets]
              .sort((a, b) => b[1] - a[1])
              .slice(0, 6)
              .map(([t, n]) => (
                <li key={t}>
                  {t} <span className="tabular-nums text-ink-500">{n}</span>
                </li>
              ))}
          </ul>
        </div>
      </div>

      <p className="mt-4 text-xs text-ink-500">{USE_SCOPE_CAVEAT}</p>
      <p className="mt-2 text-xs text-ink-500">{INPUT_CAVEAT}</p>
      <p className="mt-2 text-sm">
        <Link href={PRODUCTS_PATH} className="text-forest-700 hover:underline">
          Browse authorised products
        </Link>
        {' · '}
        <Link
          href={INPUTS_HUB_PATH}
          className="text-forest-700 hover:underline"
        >
          How authorisation is recorded
        </Link>
      </p>
    </section>
  );
}
