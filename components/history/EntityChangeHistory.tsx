import {
  HISTORY_CAVEAT,
  HISTORY_SCOPE_CAVEAT,
  type AgriculturalChangeEvent,
} from '@/types/history';
import { historyGroups } from '@/lib/history/registry';

const INSTRUMENT_LABEL: Record<string, string> = {
  'national-list': 'National list entry',
  'community-plant-variety-right': 'Community plant variety right',
  'plant-breeders-right': 'Plant breeder’s right',
  'plant-variety-protection-certificate':
    'Certificate of plant variety protection',
  'variety-registration': 'Variety registration',
};

/**
 * History beside current state, never instead of it.
 *
 * Two rules decide everything this renders:
 *
 * A date the source states and a date AgricultureID observed are different
 * facts, so they get different words. "Effective 2021-12-31" is the register
 * speaking. "Observed 2026-08-27" is us, and it never appears in a sentence
 * that would read as an effective date.
 *
 * A history belongs to one instrument in one jurisdiction. Rendering them in
 * one list would let a certificate that expired in the United States look like
 * it ended a listing in Ireland, so each group is headed by both.
 */
export function EntityChangeHistory({
  events,
  heading = 'What changed',
  intro,
}: {
  events: AgriculturalChangeEvent[];
  heading?: string;
  intro?: string;
}) {
  if (events.length === 0) return null;
  const groups = historyGroups(events);

  return (
    <section className="mt-8 rounded-lg border border-ink-100 bg-[#FAFAF7] p-4">
      <h2 className="font-serif text-lg text-forest-900">{heading}</h2>
      {intro ? <p className="mt-1 text-sm text-ink-600">{intro}</p> : null}

      {groups.map((g) => (
        <div
          key={`${g.instrument ?? ''}|${g.jurisdictionName}`}
          className="mt-4"
        >
          <h3 className="text-sm font-medium text-ink-900">
            {g.jurisdictionName}
            {g.instrument ? (
              <span className="ml-2 font-normal text-ink-500">
                {INSTRUMENT_LABEL[g.instrument] ?? g.instrument}
              </span>
            ) : null}
          </h3>
          <ul className="mt-2 space-y-2">
            {g.events.map((e) => (
              <li key={e.id} className="text-sm text-ink-700">
                <span className="font-mono text-xs tabular-nums text-ink-500">
                  {e.occurredAt ? (
                    <>Effective {e.occurredAt}</>
                  ) : (
                    <>Observed {e.detectedAt}</>
                  )}
                </span>
                <span className="ml-2">
                  {e.previousValue ? (
                    <>
                      <span className="text-ink-500 line-through">
                        {e.previousValue}
                      </span>
                      {' → '}
                    </>
                  ) : null}
                  <span className="text-ink-900">{e.currentValue}</span>
                </span>
                {!e.occurredAt ? (
                  <span className="ml-2 rounded bg-ink-100 px-1.5 py-0.5 text-[0.68rem] text-ink-600">
                    date not published by the source
                  </span>
                ) : null}
                {e.explanation ? (
                  <span className="mt-0.5 block text-xs text-ink-500">
                    {e.explanation}
                  </span>
                ) : null}
                {e.limitations.length > 0 ? (
                  <ul className="mt-0.5 list-disc space-y-0.5 pl-4 text-xs text-ink-500">
                    {e.limitations.map((l) => (
                      <li key={l}>{l}</li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <p className="mt-4 text-xs text-ink-500">{HISTORY_CAVEAT}</p>
      {groups.length > 1 ? (
        <p className="mt-2 text-xs text-ink-500">{HISTORY_SCOPE_CAVEAT}</p>
      ) : null}
    </section>
  );
}
