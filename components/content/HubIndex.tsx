import { ContentCard } from '@/components/cards/ContentCard';
import { PageIntro } from '@/components/content/PageIntro';
import { Container } from '@/components/ui/Container';
import { JsonLd } from '@/components/seo/JsonLd';
import { contentUrlPath } from '@/lib/content/registry';
import { itemListSchema, webPageSchema } from '@/lib/schema/jsonld';
import { pageBreadcrumbs } from '@/lib/seo/breadcrumbs';
import type { AnyContent } from '@/types/content';

interface HubIndexProps {
  title: string;
  path: string;
  description: string;
  items: AnyContent[];
  /** Optional longer editorial note under the intro. */
  note?: string;
}

/** Category hub: intro, ItemList schema, and a responsive grid of entries. */
export function HubIndex({
  title,
  path,
  description,
  items,
  note,
}: HubIndexProps) {
  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={[
          webPageSchema({ name: title, description, path }),
          itemListSchema({
            name: title,
            path,
            items: items.map((i) => ({
              name: i.title,
              path: contentUrlPath(i),
            })),
          }),
        ]}
      />
      <PageIntro
        eyebrow="Knowledge base"
        title={title}
        lead={description}
        crumbs={pageBreadcrumbs(title, path)}
      >
        <p className="mt-4 text-sm text-ink-500">
          {items.length} {items.length === 1 ? 'entry' : 'entries'} · every
          entry is sourced and reviewed
        </p>
      </PageIntro>

      {note && (
        <p className="mt-6 max-w-3xl text-sm leading-7 text-ink-600">{note}</p>
      )}

      {items.length > 0 ? (
        <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <ContentCard key={item.id} item={item} />
          ))}
        </ul>
      ) : (
        <p className="mt-8 text-ink-600">
          Entries in this section are in preparation.
        </p>
      )}
    </Container>
  );
}
