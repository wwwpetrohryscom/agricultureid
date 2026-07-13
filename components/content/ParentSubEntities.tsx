import Link from 'next/link';
import {
  breedsForLivestock,
  contentUrlPath,
  cultivarsForCrop,
} from '@/lib/content/registry';
import type { AnyContent } from '@/types/content';

/**
 * "Notable cultivars"/"Notable breeds" panel shown on a parent crop or
 * livestock page. Only rendered when the parent actually has published
 * sub-entities — no empty headings.
 */
export function ParentSubEntities({ item }: { item: AnyContent }) {
  const children =
    item.contentType === 'crop'
      ? cultivarsForCrop(item.slug)
      : item.contentType === 'livestock'
        ? breedsForLivestock(item.slug)
        : [];

  if (children.length === 0) return null;

  const heading =
    item.contentType === 'crop' ? 'Notable cultivars' : 'Notable breeds';

  return (
    <section
      id="sub-entities"
      className="mt-12 scroll-mt-24"
      aria-labelledby="sub-entities-heading"
    >
      <h2
        id="sub-entities-heading"
        className="font-serif text-2xl font-bold text-ink-900"
      >
        {heading}
      </h2>
      <p className="mt-1 text-sm text-ink-500">
        Documented {item.contentType === 'crop' ? 'varieties' : 'breeds'} tied
        to this species, with registry status and sources on each page. Not an
        exhaustive list.
      </p>
      <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {children.map((c) => (
          <li key={c.slug}>
            <Link
              href={contentUrlPath(c)}
              className="block rounded-card border border-ink-100 bg-white p-4 transition hover:border-olive-300 hover:shadow-sm"
            >
              <span className="font-semibold text-forest-950">{c.title}</span>
              <span className="mt-0.5 block text-sm leading-6 text-ink-600">
                {c.summary}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
