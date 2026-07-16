import { getFormula } from '@/lib/tools/formulas';
import { getSource } from '@/lib/sources/registry';
import { ExternalLink } from '@/components/ui/ExternalLink';

/**
 * Server-rendered panel exposing the maths behind a calculator: expression,
 * assumptions, applicability, limitations, sources, and version. The formula is
 * never hidden.
 */
export function FormulaPanel({ formulaIds }: { formulaIds: string[] }) {
  const formulas = formulaIds
    .map((id) => getFormula(id))
    .filter((f): f is NonNullable<typeof f> => Boolean(f));
  if (formulas.length === 0) return null;

  return (
    <section className="mt-10" aria-labelledby="formula-h">
      <h2 id="formula-h" className="font-serif text-2xl font-bold text-ink-900">
        Formula &amp; assumptions
      </h2>
      <div className="mt-4 space-y-6">
        {formulas.map((f) => (
          <div
            key={f.formulaId}
            className="rounded-card border border-ink-100 bg-white p-5"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold text-forest-950">{f.name}</h3>
              <span className="text-xs text-ink-500">
                formula v{f.formulaVersion} · calc v{f.calcVersion} · reviewed{' '}
                {f.lastReviewedAt}
              </span>
            </div>
            <p className="mt-2 rounded bg-parchment-100 px-3 py-2 font-mono text-sm text-ink-800">
              {f.expression}
            </p>
            <p className="mt-2 text-sm text-ink-600">
              <span className="font-semibold">Applies to:</span>{' '}
              {f.applicability}
            </p>
            {f.assumptions.length > 0 && (
              <div className="mt-2">
                <p className="text-sm font-semibold text-ink-700">
                  Assumptions
                </p>
                <ul className="mt-1 list-disc space-y-0.5 pl-5 text-sm text-ink-700">
                  {f.assumptions.map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>
              </div>
            )}
            {f.limitations.length > 0 && (
              <div className="mt-2">
                <p className="text-sm font-semibold text-ink-700">
                  Limitations
                </p>
                <ul className="mt-1 list-disc space-y-0.5 pl-5 text-sm text-ink-700">
                  {f.limitations.map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>
              </div>
            )}
            {f.safetyContext && (
              // What the formula must not be read as authorising. Validated on
              // the registry and, until Phase 5E, rendered nowhere — which made
              // the strongest sentence about a result ("not an engineering
              // capacity", "not a market price") invisible to the person
              // reading that result.
              <div className="mt-2 border-l-2 border-clay-400 pl-3">
                <p className="text-sm font-semibold text-ink-700">Scope</p>
                <p className="mt-1 text-sm leading-6 text-ink-700">
                  {f.safetyContext}
                </p>
              </div>
            )}
            {f.sourceIds.length > 0 && (
              <p className="mt-2 text-xs text-ink-500">
                Sources:{' '}
                {f.sourceIds.map((id, i) => {
                  const s = getSource(id);
                  return (
                    <span key={id}>
                      {i > 0 && ', '}
                      {s ? (
                        <ExternalLink
                          href={s.url}
                          className="underline underline-offset-2 hover:text-forest-700"
                        >
                          {s.organization}
                        </ExternalLink>
                      ) : (
                        id
                      )}
                    </span>
                  );
                })}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
