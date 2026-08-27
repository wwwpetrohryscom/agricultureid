import { LINEAGE_CAVEAT, type ClaimLineage } from '@/types/provenance';

const TRUTH_LABEL: Record<string, string> = {
  verified: 'Verified against the source',
  partial: 'Partly established',
  uncertain: 'Not established',
  'source-conflicted': 'Sources disagree',
  unavailable: 'Source unavailable',
};

const LOCATOR_LABEL: Record<string, string> = {
  'legal-article': 'Operative text',
  'register-record-id': 'Register record',
  'official-list-entry': 'List entry',
  'dataset-series': 'Dataset series',
  'source-field': 'Source field',
  'page-heading': 'Source page',
  none: 'Where in the source',
};

/**
 * Evidence for one claim, in the order a sceptical reader asks for it.
 *
 * What is deliberately absent:
 *
 * No score. A percentage would invite a reader to think 92 differs
 * meaningfully from 88, when what actually varies is categorical — whether a
 * source was read, whether it was unambiguous, whether two disagree.
 *
 * No internal identifiers. A snapshot id and a release identifier appear
 * because they are what a reader would need to fetch the same capture; parser
 * versions, contract keys and content slugs do not, because they are facts
 * about this codebase rather than about the claim.
 *
 * No selectors. A DOM path is provenance that stops being true the next time a
 * ministry redesigns its site, and a line number for a page rendered per
 * request never was.
 *
 * The source's words and AgricultureID's are always separated, and only the
 * first is ever in quotation marks.
 */
export function EvidencePanel({
  lineage,
  heading = 'Evidence & verification',
}: {
  lineage: ClaimLineage;
  heading?: string;
}) {
  const l = lineage;
  return (
    <section className="mt-8 rounded-lg border border-ink-100 bg-[#FAFAF7] p-4">
      <h2 className="font-serif text-lg text-forest-900">{heading}</h2>
      <p className="mt-1 text-sm text-ink-700">{l.statement}</p>

      <dl className="mt-4 space-y-3 text-sm">
        <div>
          <dt className="text-xs uppercase tracking-wide text-ink-500">
            Official source
          </dt>
          <dd className="mt-0.5">
            {l.sources.length === 0 ? (
              <span className="text-ink-600">
                No source is recorded for this claim.
              </span>
            ) : (
              <ul className="space-y-1">
                {l.sources.map((s) => (
                  <li key={s.sourceId}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-forest-800 hover:underline"
                    >
                      {s.title}
                    </a>
                    <span className="block text-xs text-ink-500">
                      {s.organization}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </dd>
        </div>

        {l.release ? (
          <div>
            <dt className="text-xs uppercase tracking-wide text-ink-500">
              Release read
            </dt>
            <dd className="mt-0.5 text-ink-700">
              {l.release.sourceReleaseId ? (
                <>Source release {l.release.sourceReleaseId}</>
              ) : (
                <>Release not identified by the source</>
              )}
              {l.release.retrievedAt ? (
                <span className="block text-xs text-ink-500">
                  retrieved {l.release.retrievedAt}
                </span>
              ) : null}
            </dd>
          </div>
        ) : null}

        <div>
          <dt className="text-xs uppercase tracking-wide text-ink-500">
            {LOCATOR_LABEL[l.locator.kind] ?? 'Where in the source'}
          </dt>
          <dd className="mt-0.5 text-ink-700">
            {l.locator.value ? (
              <span className="font-mono text-xs">{l.locator.value}</span>
            ) : null}
            {l.locator.why ? (
              <span className="block text-xs text-ink-500">
                {l.locator.why}
              </span>
            ) : null}
          </dd>
        </div>

        {l.sourceWording ? (
          <div>
            <dt className="text-xs uppercase tracking-wide text-ink-500">
              What the source says
            </dt>
            <dd className="mt-0.5 text-ink-900">
              &ldquo;{l.sourceWording.text}&rdquo;
              <span className="ml-2 text-xs text-ink-500">
                ({l.sourceWording.field})
              </span>
            </dd>
          </div>
        ) : null}

        {l.interpretation ? (
          <div>
            <dt className="text-xs uppercase tracking-wide text-ink-500">
              What AgricultureID records
            </dt>
            <dd className="mt-0.5 text-ink-900">
              <span className="rounded bg-olive-50 px-1.5 py-0.5 font-mono text-xs">
                {l.interpretation.value}
              </span>
              <span className="ml-2 text-xs text-ink-500">
                a value from {l.interpretation.vocabulary}, not a quotation
              </span>
            </dd>
          </div>
        ) : null}

        <div>
          <dt className="text-xs uppercase tracking-wide text-ink-500">
            Standing
          </dt>
          <dd className="mt-0.5 text-ink-700">
            {TRUTH_LABEL[l.truthState] ?? l.truthState}
            {l.verifiedAt ? (
              <span className="block text-xs text-ink-500">
                last verified {l.verifiedAt}
              </span>
            ) : null}
          </dd>
        </div>
      </dl>

      {l.conflicts.length > 0 ? (
        <div className="mt-4 rounded border border-amber-200 bg-amber-50/60 p-3 text-sm">
          <p className="font-medium text-ink-900">The sources disagree</p>
          <ul className="mt-1 space-y-1 text-ink-700">
            {l.conflicts.map((c) => (
              <li key={c.what}>
                {c.what} — {c.resolution}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {l.limitations.length > 0 ? (
        <ul className="mt-4 list-disc space-y-1 pl-5 text-xs text-ink-500">
          {l.limitations.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      ) : null}

      <p className="mt-4 text-xs text-ink-500">{LINEAGE_CAVEAT}</p>
    </section>
  );
}
