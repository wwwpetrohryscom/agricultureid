/**
 * Wave 42 evidence-depth report. Read-only, deterministic.
 *
 * Per layer: what it reaches now, what the recorded assessment says about the
 * gap, and — where a wave changed the layer — what was withheld.
 *
 * Withheld data is printed as prominently as ingested data, because it is the
 * half a coverage table cannot show. The FAO crop calendar ingestion accepted
 * 106 of 211 crop names and refused 104 with a reason; a report that showed
 * only the 103 crops gained would describe a smaller and more flattering piece
 * of work than the one that was done.
 *
 * Run: npm run crops:evidence:report
 */
import {
  CONCORDANCE,
  LAYER_ASSESSMENTS,
  TRADE_FEASIBILITY,
  TRADE_MAPPING,
} from '../data/crop-evidence';
import {
  FAO_CALENDAR_ENTRIES,
  FAO_CALENDAR_SNAPSHOT,
  FAO_CROP_MATCHES,
  FAO_CROP_REFUSALS,
} from '../data/calendars/fao';
import { allIntegrations, INTEGRATION_LAYERS } from '../lib/crops/integration';
import { PUBLISHED_CONTENT } from '../lib/content/registry';

const crops = PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop');
const integrations = allIntegrations();

console.log('\nAgricultureID — crop evidence depth (Wave 42)\n');
console.log(`  Published crop articles:      ${crops.length}\n`);

console.log('  ── Layer coverage, recomputed ──');
for (const layer of INTEGRATION_LAYERS) {
  const reached = integrations.filter((i) =>
    i.coverage.some((c) => c.layer === layer && c.refs.length > 0),
  ).length;
  const a = LAYER_ASSESSMENTS.find((x) => x.layer === layer);
  const pct = ((reached / crops.length) * 100).toFixed(0);
  console.log(
    `  ${layer.padEnd(22)}${String(reached).padStart(4)}/${crops.length}  ${pct.padStart(3)}%  ${a ? a.reason : '—'}`,
  );
}

console.log('\n  ── Commodity mapping granularity ──');
const byKind = new Map<string, number>();
for (const c of CONCORDANCE) byKind.set(c.kind, (byKind.get(c.kind) ?? 0) + 1);
for (const [k, v] of [...byKind].sort((a, b) => b[1] - a[1]))
  console.log(`  ${k.padEnd(26)}${v}`);
console.log(
  `  ${'classified'.padEnd(26)}${CONCORDANCE.length} of ${CONCORDANCE.length} mappings`,
);

console.log('\n  ── Calendars: what was ingested ──');
console.log(`  FAO entries                   ${FAO_CALENDAR_ENTRIES.length}`);
console.log(
  `  crops reached                 ${new Set(FAO_CALENDAR_ENTRIES.map((e) => e.cropRef)).size}`,
);
console.log(
  `  countries                     ${FAO_CALENDAR_SNAPSHOT.countries}`,
);
console.log(
  `  snapshot rows                 ${FAO_CALENDAR_SNAPSHOT.sourceRows}`,
);
console.log(
  `  snapshot checksum             ${FAO_CALENDAR_SNAPSHOT.checksum.slice(0, 16)}…`,
);

console.log('\n  ── Calendars: what was withheld ──');
const byReason = new Map<string, string[]>();
for (const r of FAO_CROP_REFUSALS)
  byReason.set(r.reason, [...(byReason.get(r.reason) ?? []), r.faoName]);
for (const [reason, names] of [...byReason].sort()) {
  console.log(`\n  ${reason} (${names.length})`);
  if (reason !== 'NO_CORPUS_MATCH') console.log(`    ${names.join(', ')}`);
  else
    console.log(
      `    ${names.slice(0, 24).join(', ')}${names.length > 24 ? `, … and ${names.length - 24} more` : ''}`,
    );
}
const conceptMatches = FAO_CROP_MATCHES.filter(
  (m) => m.granularity === 'CONCEPT_LEVEL',
);
console.log(
  `\n  matched at concept level      ${conceptMatches.length}: ${conceptMatches.map((m) => m.faoName).join(', ')}`,
);

console.log('\n  ── Trade ──');
console.log(`  mapping outcome               ${TRADE_MAPPING.outcome}`);
console.log(`  feasibility outcome           ${TRADE_FEASIBILITY.outcome}`);
console.log(
  `  blocking findings             ${TRADE_FEASIBILITY.findings.filter((f) => f.blocking).length} of ${TRADE_FEASIBILITY.findings.length}`,
);
for (const f of TRADE_FEASIBILITY.findings.filter((f) => f.blocking))
  console.log(`    ${f.dimension}: ${f.finding.slice(0, 150)}…`);
console.log('  prerequisites for a dedicated wave:');
for (const p of TRADE_FEASIBILITY.prerequisites) console.log(`    - ${p}`);
console.log('');
