import Link from 'next/link';
import { relatedGroupsFor } from '@/lib/content/graph';
import { contentUrlPath } from '@/lib/content/registry';
import { CONTENT_TYPE_LABEL_PLURAL } from '@/lib/site';
import type { AnyContent } from '@/types/content';

/**
 * Related pages grouped by content type, combining explicit and reciprocal
 * relationships from the knowledge graph.
 */
export function RelatedContent({ item }: { item: AnyContent }) {
  const groups = relatedGroupsFor(item);
  if (groups.length === 0) return null;

  return (
    <section aria-labelledby="related-heading" className="mt-12">
      <h2
        id="related-heading"
        className="font-serif text-2xl font-bold text-ink-900"
      >
        Related topics
      </h2>
      <div className="mt-4 space-y-5">
        {groups.map((group) => (
          <div key={group.type}>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-ink-500">
              {CONTENT_TYPE_LABEL_PLURAL[group.type]}
            </h3>
            <ul className="mt-2 flex flex-wrap gap-2">
              {group.items.map((related) => (
                <li key={related.id}>
                  <Link
                    href={contentUrlPath(related)}
                    className="inline-flex items-center rounded-full border border-parchment-200 bg-white px-3 py-1.5 text-sm font-medium text-ink-700 transition-colors hover:border-forest-200 hover:bg-forest-50 hover:text-forest-700"
                  >
                    {related.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
