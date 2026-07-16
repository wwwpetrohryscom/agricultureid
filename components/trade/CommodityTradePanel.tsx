import { Container } from '@/components/ui/Container';
import { ExternalLink } from '@/components/ui/ExternalLink';
import { tradeProfileFor, tradeSnapshot } from '@/lib/trade/snapshot';
import { TRADE_DATA_SCOPE_NOTE } from '@/types/trade';
import type {
  CommodityTradeProfile,
  TradeFlagCode,
  TradeFlagCounts,
  TradeReporterTotal,
  TradeSnapshot,
} from '@/types/trade-data';

/**
 * Phase 5D — reported-trade profile for a commodity, rendered from the immutable
 * FAOSTAT Detailed Trade Matrix snapshot. Server component; no client JS.
 *
 * Renders nothing when the commodity has no mapped FAOSTAT trade item (most
 * commodities have none). Every figure comes from the snapshot: nothing is
 * interpolated, extrapolated, or zero-filled here, and a reporter's absence is
 * always disclosed rather than read as zero.
 */

const FLAG_ORDER: readonly TradeFlagCode[] = ['A', 'E', 'I', 'X'];

/** Exact tonnage — full reported precision, never rounded up into a claim. */
function fmtT(v: number): string {
  return v.toLocaleString('en', { maximumFractionDigits: 2 });
}

function fmtKUsd(v: number): string {
  return v.toLocaleString('en', { maximumFractionDigits: 0 });
}

/** Signed percentage, at the precision the snapshot records. */
function fmtPct(v: number): string {
  return `${v > 0 ? '+' : ''}${v.toLocaleString('en', { maximumFractionDigits: 1 })}%`;
}

/** Magnitude only — used where a direction word already carries the sign. */
function fmtPctAbs(v: number): string {
  return `${Math.abs(v).toLocaleString('en', { maximumFractionDigits: 1 })}%`;
}

function flagCodesIn(counts: TradeFlagCounts): TradeFlagCode[] {
  return FLAG_ORDER.filter((c) => counts[c] !== undefined);
}

function FlagCell({ flags }: { flags: TradeFlagCounts }) {
  const codes = flagCodesIn(flags);
  if (!codes.length) return <span className="text-ink-400">—</span>;
  return (
    <span className="whitespace-nowrap tabular-nums">
      {codes.map((c, i) => (
        <span key={c}>
          {i > 0 && <span className="text-ink-300"> · </span>}
          <abbr title={c} className="font-semibold no-underline">
            {c}
          </abbr>
          <span className="text-ink-500"> {flags[c]}</span>
        </span>
      ))}
    </span>
  );
}

function ReporterTable({
  caption,
  rows,
  reporterCount,
  flowLabel,
  profile,
  units,
}: {
  caption: string;
  rows: TradeReporterTotal[];
  reporterCount: number;
  flowLabel: string;
  profile: CommodityTradeProfile;
  units: TradeSnapshot['units'];
}) {
  if (!rows.length) return null;
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[34rem] border-collapse text-sm">
        <caption className="mb-2 text-left text-sm font-semibold text-ink-900">
          {caption}
          <span className="block font-normal text-ink-500">
            {rows.length} of {reporterCount} reporters that declared {flowLabel}{' '}
            of {profile.faostatItemName} in {profile.referenceYear}, descending
            by quantity.
          </span>
        </caption>
        <thead>
          <tr className="border-b border-ink-200 text-left text-ink-700">
            <th scope="col" className="py-2 pr-4 font-semibold">
              Reporter
            </th>
            <th scope="col" className="py-2 pr-4 text-right font-semibold">
              Quantity ({units.quantity})
            </th>
            <th scope="col" className="py-2 pr-4 text-right font-semibold">
              Value ({units.value})
            </th>
            <th scope="col" className="py-2 font-semibold">
              Flags
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.m49} className="border-b border-ink-100">
              <td className="py-2 pr-4 text-ink-800">{r.reporter}</td>
              <td className="py-2 pr-4 text-right tabular-nums text-ink-800">
                {fmtT(r.quantityT)}
              </td>
              <td className="py-2 pr-4 text-right tabular-nums text-ink-800">
                {fmtKUsd(r.valueKUsd)}
              </td>
              <td className="py-2 text-xs">
                <FlagCell flags={r.flags} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function CommodityTradePanel({
  commoditySlug,
}: {
  commoditySlug: string;
}) {
  const snap = tradeSnapshot();
  const profile = tradeProfileFor(commoditySlug);
  if (!snap || !profile) return null;

  const { world, notableNonReporters: absent, mirrorGapPct: gap } = profile;

  // Flag legend covers only the codes actually rendered above it.
  const shownFlags = FLAG_ORDER.filter((c) =>
    [...profile.topExporters, ...profile.topImporters].some(
      (r) => r.flags[c] !== undefined,
    ),
  );

  return (
    <Container className="pb-10 lg:pb-12">
      <section
        id="reported-trade"
        className="scroll-mt-24 border-t border-ink-100 pt-10"
        aria-labelledby="reported-trade-heading"
      >
        <h2
          id="reported-trade-heading"
          className="font-serif text-2xl font-bold text-ink-900"
        >
          Reported trade, {profile.referenceYear}
        </h2>
        <p className="mt-1 text-sm text-ink-500">
          What reporting countries declared to FAO for{' '}
          <span className="font-semibold text-ink-700">
            {profile.faostatItemName}
          </span>{' '}
          (FAOSTAT item {profile.faostatItemCode}, CPC {profile.cpcCode}) in{' '}
          {profile.referenceYear}. A dated snapshot of one dataset — not a
          current or authoritative measure of this market.
        </p>

        {/* The disclosure that keeps the ranking below honest. Deliberately
          placed BEFORE the tables, not after them. */}
        {absent.length > 0 && (
          <div
            role="note"
            className="mt-5 rounded-card border-2 border-clay-400 bg-clay-50 p-4"
          >
            <h3 className="font-serif text-base font-bold text-clay-900">
              Missing from this ranking:{' '}
              {absent.map((n) => n.reporter).join(', ')}
            </h3>
            <ul className="mt-2 space-y-2 text-sm leading-7 text-ink-800">
              {absent.map((n) => (
                <li key={n.reporter}>
                  <span className="font-semibold">{n.reporter}</span> reported{' '}
                  {fmtT(n.lastReportedExportQuantityT)} {snap.units.quantity} of{' '}
                  {profile.faostatItemName} exports in {n.lastReportedYear} —
                  rank {n.rankInLastReportedYear} among reporters that year —
                  but did not report exports for {profile.referenceYear}. It is
                  therefore absent from the {profile.referenceYear} table below.
                </li>
              ))}
            </ul>
            <p className="mt-2 text-sm leading-7 text-clay-900">
              A country absent from a reference year is{' '}
              <span className="font-semibold">not</span> a country with zero
              trade. Read the ranking below as “largest reporters that declared
              in {profile.referenceYear}”, not as “largest traders”.
            </p>
          </div>
        )}

        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <ReporterTable
            caption="Top reporting exporters"
            rows={profile.topExporters}
            reporterCount={profile.exportReporterCount}
            flowLabel="exports"
            profile={profile}
            units={snap.units}
          />
          <ReporterTable
            caption="Top reporting importers"
            rows={profile.topImporters}
            reporterCount={profile.importReporterCount}
            flowLabel="imports"
            profile={profile}
            units={snap.units}
          />
        </div>

        {shownFlags.length > 0 && (
          <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-xs text-ink-600">
            {shownFlags.map((c) => (
              <div key={c} className="flex gap-1.5">
                <dt className="font-semibold text-ink-800">{c}</dt>
                <dd>{snap.flagMeanings[c]}</dd>
              </div>
            ))}
            <p className="w-full text-ink-500">
              Counts are the number of partner rows carrying each flag in the
              reporter’s total. A flag not listed for a reporter had no rows.
            </p>
          </dl>
        )}

        {/* World totals + the mirror gap. */}
        <div className="mt-8 rounded-card border border-ink-100 bg-white p-4">
          <h3 className="font-serif text-base font-bold text-ink-900">
            World totals, {profile.referenceYear}
          </h3>
          <p className="mt-1 text-xs text-ink-500">{snap.aggregateRule}</p>
          <dl className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
            {[
              {
                k: `Reported exports (${snap.units.quantity})`,
                v: fmtT(world.exportQuantityT),
              },
              {
                k: `Reported imports (${snap.units.quantity})`,
                v: fmtT(world.importQuantityT),
              },
              {
                k: `Reported export value (${snap.units.value})`,
                v: fmtKUsd(world.exportValueKUsd),
              },
              {
                k: `Reported import value (${snap.units.value})`,
                v: fmtKUsd(world.importValueKUsd),
              },
            ].map((row) => (
              <div
                key={row.k}
                className="flex justify-between gap-3 border-b border-ink-100 py-1.5"
              >
                <dt className="text-sm text-ink-600">{row.k}</dt>
                <dd className="text-sm font-semibold tabular-nums text-ink-900">
                  {row.v}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-4 border-t border-ink-100 pt-3">
            <h4 className="text-sm font-semibold text-ink-900">
              Mirror gap:{' '}
              {gap === null ? (
                <span className="font-normal text-ink-600">not reported</span>
              ) : (
                <span className="tabular-nums">{fmtPct(gap)}</span>
              )}
            </h4>
            {gap === null ? (
              <p className="mt-1 text-sm leading-7 text-ink-700">
                The mirror gap could not be computed for this item from the
                snapshot, so none is shown.
              </p>
            ) : (
              <p className="mt-1 text-sm leading-7 text-ink-700">
                {gap === 0 ? (
                  <>
                    Reported world imports and reported world exports of the
                    same commodity agree by quantity in this snapshot.
                  </>
                ) : (
                  <>
                    Reported world imports and reported world exports of the
                    same commodity disagree by {fmtPctAbs(gap)} of reported
                    exports by quantity — importers reported{' '}
                    {gap > 0 ? 'more' : 'less'} than exporters reported
                    shipping.
                  </>
                )}{' '}
                This disagreement is a{' '}
                <span className="font-semibold">property of the data</span>, not
                an error in it: the two sides are independent declarations by
                different customs authorities, and re-exports can count a
                consignment more than once along its route.
              </p>
            )}
          </div>
        </div>

        <div className="mt-6 rounded-card border border-clay-200 bg-[#FAFAF7] p-4">
          <h3 className="text-sm font-semibold text-ink-900">
            Scope &amp; limitations
          </h3>
          <p className="mt-1.5 text-sm leading-7 text-ink-700">
            {TRADE_DATA_SCOPE_NOTE}
          </p>
          <p className="mt-2 text-sm leading-7 text-ink-700">
            {snap.transformation}
          </p>
          <p className="mt-3 text-xs leading-6 text-ink-600">
            {snap.attribution} Source:{' '}
            <ExternalLink
              href={snap.sourceUrl}
              className="text-olive-800 underline underline-offset-2"
            >
              {snap.source}
            </ExternalLink>
            . Licence:{' '}
            <ExternalLink
              href={snap.licenseUrl}
              className="text-olive-800 underline underline-offset-2"
            >
              {snap.license}
            </ExternalLink>
            . Dataset version {snap.datasetVersion}, retrieved{' '}
            {snap.retrievedAt}. Values are nominal US dollars as reported, not
            deflated.
          </p>
        </div>
      </section>
    </Container>
  );
}
