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
console.log();
