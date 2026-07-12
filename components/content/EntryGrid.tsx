import { ContentCard } from '@/components/cards/ContentCard';
import { JsonLd } from '@/components/seo/JsonLd';
import { contentUrlPath, contentTypeSorted } from '@/lib/content/registry';
import { itemListSchema } from '@/lib/schema/jsonld';
import type { ContentType } from '@/lib/site';

interface EntryGridProps {
  type: ContentType;
  path: string;
  heading: string;
  intro?: string;
}

/**
 * A browsable grid of every published entry of a content type, with matching
 * ItemList structured data. Used to turn overview pages into hubs without
 * changing the routing pattern.
 */
export function EntryGrid({ type, path, heading, intro }: EntryGridProps) {
  const items = contentTypeSorted(type);
  if (items.length === 0) return null;

  return (
    <section aria-labelledby="entries-heading" className="mt-14">
      <JsonLd
        data={itemListSchema({
          name: heading,
          path,
          items: items.map((i) => ({ name: i.title, path: contentUrlPath(i) })),
        })}
      />
      <h2
        id="entries-heading"
        className="font-serif text-2xl font-bold text-ink-900"
      >
        {heading}
      </h2>
      {intro && <p className="mt-2 max-w-3xl text-ink-600">{intro}</p>}
      <p className="mt-1 text-sm text-ink-500">
        {items.length} {items.length === 1 ? 'entry' : 'entries'}
      </p>
      <ul className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <ContentCard key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}
