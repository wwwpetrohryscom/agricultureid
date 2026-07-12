import type { ContentSection } from '@/types/content';

interface TableOfContentsProps {
  sections: ContentSection[];
  /** Extra trailing anchors, e.g. limitations and sources. */
  extra?: { id: string; heading: string }[];
}

/** Static, no-JS on-page navigation built from section anchors. */
export function TableOfContents({
  sections,
  extra = [],
}: TableOfContentsProps) {
  const items = [
    ...sections.map((s) => ({ id: s.id, heading: s.heading })),
    ...extra,
  ];
  if (items.length < 3) return null;

  return (
    <nav
      aria-label="On this page"
      className="rounded-card border border-parchment-200 bg-white p-4"
    >
      <h2 className="text-xs font-semibold uppercase tracking-wide text-ink-500">
        On this page
      </h2>
      <ul className="mt-3 space-y-1.5 text-sm">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="block rounded text-ink-600 hover:text-forest-700 hover:underline"
            >
              {item.heading}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
