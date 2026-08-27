/**
 * Editorial backlog. Offline, never blocking.
 *
 * The gate checks that coverage is honest. This says what to do about it, and
 * it is the input to whatever comes after Wave 22: which gaps have a source
 * waiting, which need a different approach rather than more effort, and which
 * nobody has looked at.
 *
 * The technical reasons live here and nowhere a reader can see them. A reader
 * needs to know whether to trust a blank; they do not need an HTTP status.
 */
import {
  COVERAGE_LAYER_LABEL,
  GAP_TIER_LABEL,
  type CoverageLayer,
} from '../types/coverage';
import {
  allCountryCoverage,
  globalFindings,
  subnationalAuthorityCoverage,
  targetCompleteness,
} from '../lib/coverage/derive';
import { gapsFrom } from '../lib/coverage/priority';
import { RESEARCH_LEDGER } from '../data/coverage/research-ledger';

const cells = allCountryCoverage();
const gaps = gapsFrom(cells);

console.log('\nCoverage & gap report\n');
console.log(`  Cells: ${cells.length} · gaps: ${gaps.length}`);

console.log('\n  Ready — an official system is already recorded here');
console.log(`    ${GAP_TIER_LABEL.ready}`);
{
  const byLayer = new Map<CoverageLayer, string[]>();
  for (const g of gaps.filter((g) => g.tier === 'ready'))
    byLayer.set(g.cell.layer, [
      ...(byLayer.get(g.cell.layer) ?? []),
      g.cell.jurisdictionName,
    ]);
  for (const [layer, places] of [...byLayer].sort(
    (a, b) => b[1].length - a[1].length,
  ))
    console.log(
      `    ${COVERAGE_LAYER_LABEL[layer].padEnd(24)} ${String(places.length).padStart(3)}  ${places.slice(0, 8).join(', ')}${places.length > 8 ? ' …' : ''}`,
    );
}

console.log('\n  Blocked — found, and something stops it being read');
console.log(`    ${GAP_TIER_LABEL.blocked}`);
for (const r of RESEARCH_LEDGER)
  console.log(
    `    ${r.jurisdiction.padEnd(8)} ${COVERAGE_LAYER_LABEL[r.layer].padEnd(24)} ${r.status}\n      internal: ${r.internalNote}`,
  );

console.log('\n  Unexamined — nobody has looked');
{
  const byLayer = new Map<CoverageLayer, number>();
  for (const g of gaps.filter((g) => g.tier === 'unexamined'))
    byLayer.set(g.cell.layer, (byLayer.get(g.cell.layer) ?? 0) + 1);
  for (const [layer, n] of [...byLayer].sort((a, b) => b[1] - a[1]))
    console.log(
      `    ${COVERAGE_LAYER_LABEL[layer].padEnd(24)} ${String(n).padStart(3)}`,
    );
  console.log(
    '    This is the cheapest tier to change and the least informative to leave.\n' +
      '    A country with no entry here has not been assessed, and the page says\n' +
      '    exactly that rather than showing an empty cell.',
  );
}

console.log('\n  Measured against an independent list');
for (const t of targetCompleteness())
  console.log(
    `    ${COVERAGE_LAYER_LABEL[t.layer].padEnd(24)} ${t.covered.length}/${t.total} ${t.label}`,
  );
for (const iso3 of ['USA', 'CAN', 'AUS'] as const) {
  const s = subnationalAuthorityCoverage(iso3)!;
  console.log(
    `    ${('Authorities, ' + iso3).padEnd(24)} ${s.covered.length}/${s.total} ${s.label}\n      missing: ${s.missing.join(', ')}`,
  );
}

console.log('\n  Findings that belong to no one country');
for (const f of globalFindings())
  console.log(`    ${COVERAGE_LAYER_LABEL[f.layer]}: ${f.internalNote}`);

console.log('\n  What this report deliberately does not do');
console.log(
  '    It does not rank gaps by search demand. AgricultureID has no measurement\n' +
    '    of demand that is not itself derived from what it already publishes, and\n' +
    '    ranking gaps by the traffic of pages that exist would simply recommend\n' +
    '    more of what is already there. A gap matters here because an official\n' +
    '    source exists and the corpus does not have it.',
);
console.log('');
