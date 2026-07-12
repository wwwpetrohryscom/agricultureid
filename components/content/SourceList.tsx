import { SourceCard } from '@/components/cards/SourceCard';
import { getSource } from '@/lib/sources/registry';
import type { SourceReference } from '@/types/content';
import type { Source } from '@/types/sources';

/** Renders an article's cited sources as a numbered provenance list. */
export function SourceList({ references }: { references: SourceReference[] }) {
  const resolved: { source: Source; citedFor?: string }[] = references.flatMap(
    (ref) => {
      const source = getSource(ref.sourceId);
      return source ? [{ source, citedFor: ref.citedFor }] : [];
    },
  );

  if (resolved.length === 0) return null;

  return (
    <section
      aria-labelledby="sources-heading"
      className="mt-12 scroll-mt-24"
      id="sources"
    >
      <h2
        id="sources-heading"
        className="font-serif text-2xl font-bold text-ink-900"
      >
        Sources
      </h2>
      <p className="mt-2 text-sm text-ink-600">
        This article draws on the following authoritative sources. See our{' '}
        <a
          href="/methodology"
          className="font-medium text-forest-700 underline underline-offset-2"
        >
          sources &amp; methodology
        </a>{' '}
        for how they are selected.
      </p>
      <ol className="mt-4 space-y-3">
        {resolved.map((r, i) => (
          <SourceCard
            key={r.source.id}
            source={r.source}
            index={i + 1}
            citedFor={r.citedFor}
          />
        ))}
      </ol>
    </section>
  );
}
