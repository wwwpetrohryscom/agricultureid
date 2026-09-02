/**
 * The cross-layer coverage matrix, for an editor deciding what to connect next.
 * Offline, advisory, never blocking.
 */
import {
  COMMODITIES_BY_CROP,
  COMMODITIES_WITHOUT_CROP,
  INTEGRATION_LAYERS,
  allIntegrations,
  relatedCrops,
} from '../lib/crops/integration';
import { PUBLISHED_CONTENT } from '../lib/content/registry';
import {
  CONCORDANCE,
  LAYER_ASSESSMENTS,
  TRADE_MAPPING,
} from '../data/crop-evidence';

const I = allIntegrations();
const title = (slug: string) =>
  PUBLISHED_CONTENT.find((c) => c.contentType === 'crop' && c.slug === slug)
    ?.title ?? slug;

console.log('\nCross-layer crop integration report\n');

console.log('  The crop↔commodity concordance');
console.log(
  `    ${COMMODITIES_BY_CROP.size} crops resolve to ${[...COMMODITIES_BY_CROP.values()].flat().length} commodities.`,
);
console.log(
  `    ${COMMODITIES_WITHOUT_CROP.length} commodities have no source crop, all animal products: ${COMMODITIES_WITHOUT_CROP.join(', ')}.`,
);
console.log(
  '    Wave 31 reported this concordance as missing. It was present in the\n' +
    '    commodity layer the whole time, as a `sourceCrop` reference on every\n' +
    '    commodity; nothing had reversed it into an index.',
);

console.log('\n  Coverage by layer');
{
  const per = new Map<string, number>();
  for (const x of I)
    for (const c of x.coverage)
      if (c.refs.length) per.set(c.layer, (per.get(c.layer) ?? 0) + 1);
  for (const l of INTEGRATION_LAYERS) {
    const n = per.get(l) ?? 0;
    const bar = '█'.repeat(Math.round((n / I.length) * 32));
    console.log(
      `    ${l.padEnd(22)}${String(n).padStart(4)}/${I.length}  ${bar}`,
    );
  }
}

console.log('\n  Best-connected crops');
for (const x of [...I]
  .sort((a, b) => b.layersReached - a.layersReached)
  .slice(0, 12))
  console.log(
    `    ${title(x.slug).padEnd(24)}${x.layersReached} layers   missing: ${x.gaps.join(', ') || '—'}`,
  );

console.log('\n  Least-connected crops');
for (const x of [...I]
  .sort((a, b) => a.layersReached - b.layersReached)
  .slice(0, 12))
  console.log(`    ${title(x.slug).padEnd(24)}${x.layersReached} layers`);

console.log('\n  Where the gaps are');
{
  const gap = new Map<string, number>();
  for (const x of I) for (const g of x.gaps) gap.set(g, (gap.get(g) ?? 0) + 1);
  for (const [k, v] of [...gap].sort((a, b) => b[1] - a[1]))
    console.log(
      `    ${k.padEnd(22)}${String(v).padStart(4)} crop(s) reach nothing`,
    );
  console.log(
    '\n    These are gaps in COVERAGE, not defects. A crop with no variety\n' +
      '    registrations has none because no register this corpus reads lists\n' +
      '    it, and inventing one would be worse than the gap.',
  );
}

console.log('\n  Related-crop relations by basis');
{
  const basis = new Map<string, number>();
  for (const x of I)
    for (const r of relatedCrops(x.slug))
      basis.set(r.basis, (basis.get(r.basis) ?? 0) + 1);
  for (const [k, v] of [...basis].sort((a, b) => b[1] - a[1]))
    console.log(`    ${k.padEnd(24)}${String(v).padStart(5)}`);
  const total = [...basis.values()].reduce((a, b) => a + b, 0);
  console.log(
    `\n    ${total} relations across ${I.length} crops. Every one names the thing\n` +
      '    the two crops share; a pairing that cannot is not published, which is\n' +
      `    why this is ${total} and not ${I.length * (I.length - 1)}.`,
  );
}

console.log('  Why each layer covers what it covers');
for (const a of LAYER_ASSESSMENTS) {
  const now = I.filter(
    (x) => x.coverage.find((c) => c.layer === a.layer)!.refs.length > 0,
  ).length;
  console.log(`\n    ${a.layer}  —  ${now}/${I.length}  ·  ${a.reason}`);
  console.log(`      ${a.finding.slice(0, 210)}…`);
  console.log(`      would raise it: ${a.wouldRaiseCoverageBy.slice(0, 150)}…`);
}

console.log('\n  Crop↔commodity concordance, classified');
{
  const by = new Map<string, number>();
  for (const c of CONCORDANCE) by.set(c.kind, (by.get(c.kind) ?? 0) + 1);
  const exact =
    PUBLISHED_CONTENT.filter((c) => c.contentType === 'commodity').length -
    CONCORDANCE.length;
  console.log(
    `    EXACT_CROP (unclassified by exception)  ${String(exact).padStart(4)}`,
  );
  for (const [k, v] of by)
    console.log(`    ${k.padEnd(38)}${String(v).padStart(4)}`);
  console.log(
    '\n    A series reached through a BROADER_CROP_CONCEPT is about the concept.\n' +
      '    Green coffee is not arabica, and the arabica page correctly shows no\n' +
      '    market data despite coffee having 535 series.',
  );
}

console.log('\n  Trade');
console.log(`    outcome: ${TRADE_MAPPING.outcome}`);
console.log(`    ${TRADE_MAPPING.finding.slice(0, 400)}…`);
console.log();
