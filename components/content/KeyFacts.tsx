import type { KeyFact } from '@/types/content';

/** Scannable key-facts panel shown in the article sidebar. */
export function KeyFacts({ facts }: { facts: KeyFact[] }) {
  if (facts.length === 0) return null;
  return (
    <div className="rounded-card border border-ink-100 bg-white">
      <h2 className="border-b border-ink-100 px-4 py-3 font-serif text-base font-bold text-ink-900">
        Key facts
      </h2>
      <dl className="divide-y divide-ink-100">
        {facts.map((fact, i) => (
          <div key={i} className="px-4 py-3">
            <dt className="text-xs font-semibold uppercase tracking-wide text-ink-500">
              {fact.label}
            </dt>
            <dd className="mt-1 text-sm leading-6 text-ink-800">
              {fact.value}
            </dd>
            {fact.note && (
              <dd className="mt-1 text-xs italic leading-5 text-ink-500">
                {fact.note}
              </dd>
            )}
          </div>
        ))}
      </dl>
    </div>
  );
}
