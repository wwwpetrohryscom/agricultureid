import Link from 'next/link';
import {
  resourcesForEntity,
  institutionFor,
  statedDate,
  isDated,
  EXTENSION_HUB_PATH,
} from '@/lib/extension/registry';
import { EXTENSION_CAVEAT, TOPIC_LABEL } from '@/types/extension';

/**
 * Official extension guidance on an entity page.
 *
 * Renders nothing when nothing is indexed for the entity — silence is correct,
 * because an absent list means AgricultureID has indexed no guidance, not that
 * none exists.
 *
 * Every row states the publisher and the place it was written for, because that
 * is the fact most easily lost: Pennsylvania orchard timing is right for
 * Pennsylvania and wrong almost everywhere else, and a bare title hides that.
 * Links go to the publisher, where the guidance is maintained.
 */
export function EntityExtensionResources({
  entitySlug,
}: {
  entitySlug: string;
}) {
  const resources = resourcesForEntity(entitySlug);
  if (resources.length === 0) return null;

  return (
    <section className="mt-8 rounded-lg border border-ink-100 bg-[#FAFAF7] p-4">
      <h2 className="font-serif text-lg text-forest-900">
        Official extension guidance
      </h2>
      <p className="mt-1 text-sm text-ink-600">
        {resources.length} resource{resources.length === 1 ? '' : 's'} indexed
        from public extension publishers. Each was written for a particular
        place; read it at the source.
      </p>

      <ul className="mt-3 space-y-4">
        {resources.map((r) => {
          const institution = institutionFor(r.institutionId);
          const date = statedDate(r);
          return (
            <li key={r.id} className="border-t border-ink-100 pt-3">
              <p className="text-sm font-medium text-ink-900">
                <a
                  href={r.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forest-800 hover:underline"
                >
                  {r.officialTitle}
                </a>
              </p>
              <p className="mt-1 text-sm text-ink-700">{r.summary}</p>
              <p className="mt-1 text-xs text-ink-500">
                {institution?.officialName ?? r.institutionId} ·{' '}
                {r.topics.map((t) => TOPIC_LABEL[t]).join(', ')} ·{' '}
                {isDated(r) ? (
                  <>publisher states {date}</>
                ) : (
                  <>publisher states no date; reachable {r.lastVerifiedAt}</>
                )}
              </p>
            </li>
          );
        })}
      </ul>

      <p className="mt-4 text-xs text-ink-500">{EXTENSION_CAVEAT}</p>
      <p className="mt-2 text-sm">
        <Link
          href={EXTENSION_HUB_PATH}
          className="text-forest-700 hover:underline"
        >
          How this index is built
        </Link>
      </p>
    </section>
  );
}
