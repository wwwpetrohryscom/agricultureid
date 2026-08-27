import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { PageIntro } from '@/components/content/PageIntro';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema/jsonld';
import { buildMetadata } from '@/lib/seo/metadata';
import {
  COVERAGE_CAVEAT,
  COVERAGE_LAYERS,
  COVERAGE_LAYER_LABEL,
  COVERAGE_STATUSES,
  GAP_TIER_LABEL,
  PUBLIC_COVERAGE_LABEL,
  type CoverageStatus,
} from '@/types/coverage';
import {
  allCountryCoverage,
  globalFindings,
  subnationalAuthorityCoverage,
  targetCompleteness,
} from '@/lib/coverage/derive';
import { gapsFrom } from '@/lib/coverage/priority';
import { COUNTRY_PROFILES } from '@/lib/geo/registry';
import { NOT_APPLICABLE_RULES } from '@/data/coverage/research-ledger';

import { COVERAGE_PATH } from '@/lib/coverage/paths';

const TITLE = 'Coverage & Gaps';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'What AgricultureID has indexed, country by country and layer by layer — and what it has only not looked at yet.',
  path: COVERAGE_PATH,
});

const SWATCH: Record<CoverageStatus, string> = {
  verified: 'bg-forest-100 text-forest-800',
  partial: 'bg-olive-100 text-olive-900',
  researchedSourceInaccessible: 'bg-amber-100 text-amber-900',
  researchedSourceNotIngestible: 'bg-amber-100 text-amber-900',
  notResearched: 'bg-ink-100 text-ink-600',
  notApplicable: 'bg-ink-50 text-ink-500',
};

export default function CoveragePage() {
  const cells = allCountryCoverage();
  const gaps = gapsFrom(cells);
  const byStatus = new Map<CoverageStatus, number>();
  for (const c of cells) byStatus.set(c.status, (byStatus.get(c.status) ?? 0) + 1);
  const countries = COUNTRY_PROFILES;
  const cellFor = (iso3: string, layer: string) =>
    cells.find((c) => c.jurisdiction === iso3 && c.layer === layer)!;
  const readyGaps = gaps.filter((g) => g.tier === 'ready');
  const blockedGaps = gaps.filter((g) => g.tier === 'blocked');

  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description:
            'A map of what AgricultureID has indexed and what it has not looked at, by country and layer.',
          path: COVERAGE_PATH,
        })}
      />

      <PageIntro
        title={TITLE}
        lead="What AgricultureID knows, what it has looked for and could not use, and what nobody has looked at yet."
      >
        <p>
          &ldquo;AgricultureID has no record of a German pesticide register&rdquo;
          and &ldquo;Germany has no pesticide register&rdquo; are completely
          different statements. The first is true; the second is false. A blank
          cell invites a reader to make the second inference, so no cell on this
          page is blank: each says which of several very different situations it
          is in.
        </p>
        <p>
          There is no completeness percentage here, because there is nothing
          honest to divide by. Where a set is closed — the Member States of the
          European Union, the states of the United States — coverage is counted
          against a list written from the instrument that constitutes it, never
          from this corpus. Where it is open-ended, the page reports what the
          corpus holds and says that is what it is reporting.
        </p>
      </PageIntro>

      <section className="mt-8" aria-label="Summary">
        <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            ['Countries', countries.length],
            ['Layers', COVERAGE_LAYERS.length],
            ['Covered', byStatus.get('verified') ?? 0],
            ['Not yet indexed', byStatus.get('notResearched') ?? 0],
          ].map(([label, value]) => (
            <div
              key={String(label)}
              className="rounded-lg border border-ink-100 bg-[#FAFAF7] p-3"
            >
              <dt className="text-xs uppercase tracking-wide text-ink-500">
                {label}
              </dt>
              <dd className="mt-1 font-serif text-2xl text-forest-900">
                {value}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-3 text-sm text-ink-600">
          {cells.length} country-and-layer cells.{' '}
          {(byStatus.get('notResearched') ?? 0).toLocaleString('en')} of them say
          only that nobody has looked — which is the commonest honest answer and
          says nothing else.
        </p>
      </section>

      <section className="mt-10" aria-label="What each answer means">
        <h2 className="font-serif text-xl text-forest-900">
          What each answer means
        </h2>
        <dl className="mt-3 grid gap-3 sm:grid-cols-2">
          {COVERAGE_STATUSES.map((s) => (
            <div key={s} className="rounded-lg border border-ink-100 p-3">
              <dt>
                <span
                  className={`rounded px-1.5 py-0.5 text-xs font-medium ${SWATCH[s]}`}
                >
                  {PUBLIC_COVERAGE_LABEL[s]}
                </span>
              </dt>
              <dd className="mt-1.5 text-sm text-ink-700">
                {s === 'verified'
                  ? 'AgricultureID holds records and knows the official source behind them.'
                  : s === 'partial'
                    ? 'Records exist, but not for every part of a set whose membership is fixed and independently known.'
                    : s === 'researchedSourceInaccessible'
                      ? 'The official source was identified and could not be read — because it could not be reached, or because its publisher’s access rules do not permit it.'
                      : s === 'researchedSourceNotIngestible'
                        ? 'The official source was found and read, and publishes nothing that can be indexed here without guessing.'
                        : s === 'notResearched'
                          ? 'Nobody has looked. This says nothing about whether anything exists.'
                          : 'The subject does not arise at this level of government, for a stated structural reason.'}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-10" aria-label="Coverage by country and layer">
        <h2 className="font-serif text-xl text-forest-900">
          By country and layer
        </h2>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[52rem] border-collapse text-sm">
            <caption className="sr-only">
              Coverage of each layer in each country AgricultureID profiles
            </caption>
            <thead>
              <tr className="border-b border-ink-200 text-left text-xs uppercase tracking-wide text-ink-500">
                <th scope="col" className="py-2 pr-3 font-medium">
                  Country
                </th>
                {COVERAGE_LAYERS.map((l) => (
                  <th key={l} scope="col" className="py-2 pr-2 font-medium">
                    {COVERAGE_LAYER_LABEL[l].split(' ').slice(-1)[0]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {countries.map((c) => (
                <tr key={c.countryCode} className="border-b border-ink-100">
                  <th
                    scope="row"
                    className="py-1.5 pr-3 font-normal text-ink-900"
                  >
                    <Link
                      href={`/countries/${c.slug}`}
                      className="text-forest-800 hover:underline"
                    >
                      {c.name}
                    </Link>
                  </th>
                  {COVERAGE_LAYERS.map((l) => {
                    const cell = cellFor(c.countryCode, l);
                    return (
                      <td key={l} className="py-1.5 pr-2">
                        <span
                          className={`inline-block rounded px-1.5 py-0.5 text-[0.65rem] ${SWATCH[cell.status]}`}
                          title={`${COVERAGE_LAYER_LABEL[l]}: ${cell.publicLabel}${cell.recordCount ? ` (${cell.recordCount} records)` : ''}`}
                        >
                          {cell.status === 'verified'
                            ? cell.recordCount.toLocaleString('en')
                            : cell.status === 'partial'
                              ? 'part'
                              : cell.status === 'notResearched'
                                ? '—'
                                : '!'}
                        </span>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-ink-500">
          A number is how many records AgricultureID holds. &ldquo;—&rdquo;
          means not yet indexed, never that nothing exists. &ldquo;!&rdquo;
          means the source was researched and could not be used; the reason is
          below.
        </p>
      </section>

      <section className="mt-10" aria-label="Closed sets">
        <h2 className="font-serif text-xl text-forest-900">
          Counted against an independent list
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-ink-700">
          These sets have a fixed membership that does not depend on what
          AgricultureID holds, so a fraction of them means something. The lists
          are written from the instruments that constitute them — the Union&rsquo;s
          Member States, the states of the United States — and a completeness
          check that took its target from this corpus would report full coverage
          by construction.
        </p>
        <ul className="mt-3 space-y-2 text-sm">
          {targetCompleteness().map((t) => (
            <li key={`${t.targetSetId}-${t.layer}`} className="text-ink-700">
              <span className="font-medium text-ink-900">
                {COVERAGE_LAYER_LABEL[t.layer]}
              </span>{' '}
              — {t.covered.length} of {t.total} {t.label}
              {t.missing.length > 0 ? (
                <span className="block text-xs text-ink-500">
                  not yet indexed: {t.missing.join(', ')}
                </span>
              ) : null}
            </li>
          ))}
          {(['USA', 'CAN', 'AUS'] as const).map((iso3) => {
            const s = subnationalAuthorityCoverage(iso3);
            if (!s) return null;
            return (
              <li key={iso3} className="text-ink-700">
                <span className="font-medium text-ink-900">
                  Agricultural authorities
                </span>{' '}
                — {s.covered.length} of {s.total} {s.label}
                {s.missing.length > 0 ? (
                  <span className="block text-xs text-ink-500">
                    not yet indexed: {s.missing.join(', ')}
                  </span>
                ) : null}
              </li>
            );
          })}
        </ul>
      </section>

      <section className="mt-10" aria-label="Researched and not usable">
        <h2 className="font-serif text-xl text-forest-900">
          Looked for, and not usable
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-ink-700">
          These are the most informative blanks on the page: an official source
          exists, it was found, and it still cannot be indexed here. Knowing
          that is worth more than knowing nothing, and it is a different
          situation from nobody having looked.
        </p>
        <ul className="mt-3 space-y-3">
          {cells
            .filter((c) => c.evidence)
            .map((c) => (
              <li
                key={`${c.jurisdiction}-${c.layer}`}
                className="rounded-lg border border-ink-100 p-3 text-sm"
              >
                <p className="font-medium text-ink-900">
                  {c.jurisdictionName} — {COVERAGE_LAYER_LABEL[c.layer]}
                </p>
                <p className="mt-1 text-ink-700">{c.evidence!.note}</p>
                <p className="mt-1 text-xs text-ink-500">
                  verified {c.evidence!.verifiedAt}
                </p>
              </li>
            ))}
          {globalFindings().map((f) => (
            <li
              key={f.sourceIds.join('-')}
              className="rounded-lg border border-ink-100 p-3 text-sm"
            >
              <p className="font-medium text-ink-900">
                Across jurisdictions — {COVERAGE_LAYER_LABEL[f.layer]}
              </p>
              <p className="mt-1 text-ink-700">{f.note}</p>
              <p className="mt-1 text-xs text-ink-500">
                verified {f.verifiedAt}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10" aria-label="What comes next">
        <h2 className="font-serif text-xl text-forest-900">What comes next</h2>
        <p className="mt-2 max-w-2xl text-sm text-ink-700">
          Gaps fall into three groups, each answering one question that is
          either true or false. There is no score: no weighting of a record
          count and three yes/no answers produces a meaningful ordering between
          one gap and the next.
        </p>
        <dl className="mt-3 space-y-2 text-sm">
          <div>
            <dt className="font-medium text-ink-900">
              {readyGaps.length} ready
            </dt>
            <dd className="text-ink-700">{GAP_TIER_LABEL.ready}</dd>
          </div>
          <div>
            <dt className="font-medium text-ink-900">
              {blockedGaps.length} blocked
            </dt>
            <dd className="text-ink-700">{GAP_TIER_LABEL.blocked}</dd>
          </div>
          <div>
            <dt className="font-medium text-ink-900">
              {gaps.length - readyGaps.length - blockedGaps.length} unexamined
            </dt>
            <dd className="text-ink-700">{GAP_TIER_LABEL.unexamined}</dd>
          </div>
        </dl>
      </section>

      <section className="mt-10" aria-label="Not applicable">
        <h2 className="font-serif text-xl text-forest-900">
          Where a layer does not arise
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-ink-700">
          Below the national level most of these layers are not incomplete, they
          are inapplicable. Showing &ldquo;not yet indexed&rdquo; against a US
          state for pesticide authorisation would invite a reader to wait for
          something that is never coming.
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-ink-700">
          {NOT_APPLICABLE_RULES.map((r) => (
            <li key={r.layer}>
              <span className="font-medium">
                {COVERAGE_LAYER_LABEL[r.layer]}
              </span>{' '}
              — {r.why}
            </li>
          ))}
        </ul>
      </section>

      <aside
        className="mt-10 rounded-lg border border-olive-200 bg-olive-50/60 p-4 text-sm text-ink-700"
        aria-label="How to read this page"
      >
        {COVERAGE_CAVEAT}
      </aside>
    </Container>
  );
}
