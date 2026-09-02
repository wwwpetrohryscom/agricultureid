import Link from 'next/link';
import { hubPath, hubsForCrop } from '@/lib/crops/hubs';

/**
 * The hubs a crop belongs to, rendered on its page.
 *
 * Derived from the identity layer at render time, so a crop that is
 * reclassified moves between hubs without anything being edited. This is the
 * inbound half of hub navigation: without it a hub is a page that links out and
 * nothing links back, and the crop pages stay as isolated as they were.
 */
export function CropHubLinks({ slug }: { slug: string }) {
  const hubs = hubsForCrop(slug);
  if (!hubs.length) return null;

  return (
    <section className="mt-8" aria-label="Groups this crop belongs to">
      <h2 className="text-xs font-semibold uppercase tracking-wide text-ink-500">
        Part of
      </h2>
      <p className="mt-2 text-sm text-ink-800">
        {hubs.map((h, i) => (
          <span key={h.slug}>
            {i > 0 && ' · '}
            <Link href={hubPath(h)} className="text-forest-700 hover:underline">
              {h.title}
            </Link>
          </span>
        ))}
      </p>
    </section>
  );
}
