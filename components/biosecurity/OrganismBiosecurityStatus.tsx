import Link from 'next/link';
import {
  statusForOrganism,
  BIOSECURITY_HUB_PATH,
} from '@/lib/biosecurity/registry';
import { BIOSECURITY_CAVEAT } from '@/types/biosecurity';
import { getSource } from '@/lib/sources/registry';
import {
  registryPath,
  publishedRegistries,
  REGISTRIES,
} from '@/lib/registries/registry';

/**
 * Regulatory status on a pest or disease page.
 *
 * Renders nothing when no status is recorded — silence is correct, because an
 * organism with no entry is one whose regulatory position AgricultureID has not
 * established, not one that is unregulated. Saying "not regulated" would be a
 * claim; saying nothing is not.
 *
 * The listed entry is shown verbatim so a narrower listing (a single race,
 * subspecies or strain) is visible as such rather than read as covering the
 * whole species.
 */
export function OrganismBiosecurityStatus({
  organismRef,
}: {
  organismRef: string;
}) {
  const entries = statusForOrganism(organismRef);
  if (entries.length === 0) return null;

  const publishedRegSlugs = new Set(publishedRegistries().map((r) => r.slug));
  const registryById = new Map(REGISTRIES.map((r) => [r.id, r]));

  return (
    <section className="mt-8 rounded-lg border border-ink-100 bg-[#FAFAF7] p-4">
      <h2 className="font-serif text-lg text-forest-900">Regulatory status</h2>
      <p className="mt-1 text-sm text-ink-600">
        Official listings recorded for this organism. Listing is a regulatory
        fact and is separate from where the organism actually occurs.
      </p>

      <ul className="mt-3 space-y-4">
        {entries.map((e) => (
          <li key={e.id} className="border-t border-ink-100 pt-3">
            <p className="text-sm font-medium text-ink-900">
              {e.officialListName}
              {e.listVersion && (
                <span className="ml-2 text-xs font-normal text-ink-500">
                  version {e.listVersion}
                </span>
              )}
            </p>
            <p className="mt-1 text-sm text-ink-700">
              Listed as: <span className="italic">{e.officialListEntry}</span>
            </p>
            <p className="mt-1 text-xs text-ink-500">
              {e.jurisdictionName} · recorded status:{' '}
              {e.regulatoryStatus.replace(/-/g, ' ')} · verified{' '}
              {e.lastVerifiedAt}
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-ink-600">
              {e.limitations.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
            <p className="mt-2 text-xs">
              {e.sourceReferences.map((sid) => {
                const s = getSource(sid);
                if (!s) return null;
                return (
                  <a
                    key={sid}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-3 text-forest-700 underline-offset-2 hover:underline"
                  >
                    {s.title}
                  </a>
                );
              })}
              {e.relatedRegistryIds.map((rid) => {
                const r = registryById.get(rid);
                if (!r || !publishedRegSlugs.has(r.slug)) return null;
                return (
                  <Link
                    key={rid}
                    href={registryPath(r.slug)}
                    className="mr-3 text-forest-700 hover:underline"
                  >
                    {r.officialName}
                  </Link>
                );
              })}
            </p>
          </li>
        ))}
      </ul>

      <p className="mt-3 border-t border-ink-100 pt-3 text-xs text-ink-600">
        {BIOSECURITY_CAVEAT}{' '}
        <Link
          href={BIOSECURITY_HUB_PATH}
          className="text-forest-700 hover:underline"
        >
          All recorded listings
        </Link>
      </p>
    </section>
  );
}
