/**
 * Advisory report on evidence lineage. Offline, never blocking.
 *
 * What the gate cannot judge: how STRONG the provenance is, as opposed to how
 * well formed. A claim traced to a homepage and one traced to an article of a
 * regulation both pass every structural check; only one of them tells a reader
 * where to look.
 */
import { allLineages } from '../lib/provenance/lineage';
import { LINEAGE_CONTRACTS } from '../lib/provenance/contracts';
import { LOCATOR_KINDS, MAX_EXCERPT_CHARS } from '../types/provenance';
import { COMPLIANCE_TOPICS } from '../data/compliance';

const L = allLineages();
console.log('\nEvidence lineage report\n');
console.log(`  Traced claims:            ${L.length.toLocaleString('en')}`);
console.log(`  Claim kinds:              ${LINEAGE_CONTRACTS.length}`);

console.log('\n  How precisely each claim can be located');
console.log(
  '    Strongest first. A locator is what a reader would use to find the same\n' +
    '    thing in the source; where a source publishes no addressable unit, the\n' +
    '    claim says so rather than inventing one.',
);
for (const k of LOCATOR_KINDS) {
  const n = L.filter((l) => l.locator.kind === k).length;
  if (n)
    console.log(
      `    ${k.padEnd(24)} ${n.toLocaleString('en').padStart(7)}  ${((n / L.length) * 100).toFixed(1)}%`,
    );
}

console.log('\n  Where provenance is weakest');
{
  const weak = L.filter((l) => l.locator.kind === 'page-heading');
  console.log(
    `    ${weak.length} claims resolve only to a source page. That is the honest limit of\n` +
      '    what those sources publish — a ministry states its own name on its own\n' +
      '    page and issues no record number for it — but it is weaker evidence\n' +
      '    than a register record, and the difference is visible rather than\n' +
      '    smoothed over.',
  );
  const byKind = new Map<string, number>();
  for (const w of weak)
    byKind.set(w.claimKind, (byKind.get(w.claimKind) ?? 0) + 1);
  for (const [k, n] of [...byKind].sort((a, b) => b[1] - a[1]))
    console.log(`      ${k.padEnd(28)}${String(n).padStart(4)}`);
}

console.log('\n  Source wording and AgricultureID’s vocabulary');
{
  const quoted = L.filter((l) => l.sourceWording).length;
  const normalised = L.filter((l) => l.interpretation).length;
  const both = L.filter((l) => l.sourceWording && l.interpretation).length;
  console.log(
    `    claims quoting the source:      ${quoted.toLocaleString('en')}`,
  );
  console.log(
    `    claims carrying a normalisation:${String(normalised.toLocaleString('en')).padStart(8)}`,
  );
  console.log(
    `    claims carrying both:           ${both.toLocaleString('en')}`,
  );
  console.log(
    '    Both are shown, always separately. EPPO says "recommended for regulation\n' +
      '    as quarantine pests"; AgricultureID records `recommended-for-regulation`.\n' +
      '    Putting the second in quotation marks would put words in a regulator’s\n' +
      '    mouth.',
  );
}

console.log('\n  Extract lengths');
{
  const lens = L.map((l) => l.sourceWording?.text.length ?? 0).filter(Boolean);
  const longest = Math.max(0, ...lens);
  const mean = lens.length ? lens.reduce((a, b) => a + b, 0) / lens.length : 0;
  console.log(
    `    longest ${longest} · mean ${mean.toFixed(0)} · limit ${MAX_EXCERPT_CHARS} characters`,
  );
  console.log(
    '    Provenance identifies what was read; it does not reproduce it. Every\n' +
      '    extract here is a status word, a list entry or an official name.',
  );
}

console.log('\n  Compliance requirements, one by one');
for (const t of COMPLIANCE_TOPICS)
  for (const r of t.requirements) {
    const l = L.find((x) => x.claimId === r.id);
    console.log(
      `    ${r.mandatoryStatus.padEnd(12)} ${l?.locator.kind.padEnd(16)} ${r.id}`,
    );
  }
console.log(
  '    Only the requirement whose operative article was actually read is\n' +
    '    recorded as `required`, and it is the only one with a legal article as\n' +
    '    its locator. The others cite an instrument or an authority page and say\n' +
    '    `uncertain` or `conditional`, which is what Wave 6 established and what\n' +
    '    this layer now makes checkable.',
);
console.log('');
