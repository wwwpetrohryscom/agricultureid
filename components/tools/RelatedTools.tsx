import Link from 'next/link';
import { toolsForContentType, toolsForPath } from '@/lib/tools/relevance';

/**
 * Tools declared relevant to this page.
 *
 * Every pairing comes from an explicit table and carries the reason it is
 * there, which is rendered — a "related tools" list whose logic cannot be
 * explained is a list nobody can check. Nothing is scored, inferred or ranked.
 *
 * No value is prefilled. A calculator opened from here is the same calculator,
 * with the same empty fields, as one opened from search, so context can never
 * silently change what the maths does.
 *
 * Renders nothing when no rule matches.
 */
export function RelatedTools({
  contentType,
  path,
}: {
  contentType?: string;
  path?: string;
}) {
  const entries = [
    ...(contentType ? toolsForContentType(contentType) : []),
    ...(path ? toolsForPath(path) : []),
  ];
  const seen = new Set<string>();
  const unique = entries.filter((e) => {
    if (seen.has(e.tool.slug)) return false;
    seen.add(e.tool.slug);
    return true;
  });
  if (unique.length === 0) return null;

  return (
    <section className="mt-8 rounded-lg border border-ink-100 bg-[#FAFAF7] p-4">
      <h2 className="font-serif text-lg text-forest-900">Tools for this</h2>
      <p className="mt-1 text-sm text-ink-600">
        Each tool shows its formula, constants and sources, and starts empty —
        nothing is filled in from this page.
      </p>
      <ul className="mt-3 space-y-3">
        {unique.map(({ tool, reason }) => (
          <li key={tool.slug} className="border-t border-ink-100 pt-3">
            <Link
              href={`/tools/${tool.slug}`}
              className="text-sm font-medium text-forest-800 hover:underline"
            >
              {tool.title}
            </Link>
            <p className="mt-0.5 text-sm text-ink-600">{reason}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
