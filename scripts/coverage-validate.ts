/**
 * Deterministic gate for the coverage layer. Offline.
 *
 * The failure this exists to prevent is a page telling a reader that something
 * does not exist when all AgricultureID knows is that it has not looked. Every
 * other rule here serves that one:
 *
 *   a cell called covered must have records
 *   a cell claiming research must carry the evidence for it
 *   a completeness fraction must be measured against an INDEPENDENT list
 *   a status must be reachable, or it is a category of findings that does not exist
 *   no public wording may say a thing is absent in the world
 */
import {
  COVERAGE_LAYERS,
  COVERAGE_STATUSES,
  EVIDENCE_REQUIRED_STATUSES,
  PUBLIC_COVERAGE_LABEL,
  RESEARCHED_STATUSES,
} from '../types/coverage';
import {
  allCountryCoverage,
  globalFindings,
  layerCounters,
  subnationalAuthorityCoverage,
  targetCompleteness,
} from '../lib/coverage/derive';
import { gapsFrom } from '../lib/coverage/priority';
import {
  NOT_APPLICABLE_RULES,
  RESEARCH_LEDGER,
} from '../data/coverage/research-ledger';
import { TARGET_SETS } from '../data/coverage/targets';
import { SOURCE_MAP } from '../lib/sources/registry';
import { COUNTRY_PROFILES } from '../lib/geo/registry';
import { readFileSync } from 'node:fs';

const errors: string[] = [];
const fail = (m: string) => errors.push(m);
const ISO = /^\d{4}-\d{2}-\d{2}$/;

const cells = allCountryCoverage();
const counters = layerCounters();

for (const c of cells) {
  const at = `${c.jurisdiction}/${c.layer}`;
  if (!COVERAGE_STATUSES.includes(c.status))
    fail(`${at}: status not in vocabulary`);
  if (!COVERAGE_LAYERS.includes(c.layer))
    fail(`${at}: layer not in vocabulary`);
  if (c.publicLabel !== PUBLIC_COVERAGE_LABEL[c.status])
    fail(`${at}: public label does not match its status`);

  // Coverage is a count, not an opinion: a cell must agree with the layer it
  // describes, so it cannot claim coverage the corpus lacks or go stale.
  const actual = counters[c.layer](c.jurisdiction);
  if (actual !== c.recordCount)
    fail(
      `${at}: says ${c.recordCount} records but the ${c.layer} layer holds ${actual}`,
    );

  if (c.status === 'verified' && c.recordCount === 0)
    fail(`${at}: called covered with no records`);
  if (c.status === 'partial' && c.recordCount === 0)
    fail(`${at}: called partly covered with no records`);
  if (c.recordCount > 0 && !RESEARCHED_STATUSES.includes(c.status))
    fail(
      `${at}: holds ${c.recordCount} records but is not recorded as covered`,
    );

  // A research finding IS its evidence. Without it the status is an assertion.
  if (
    EVIDENCE_REQUIRED_STATUSES.includes(c.status) &&
    c.status !== 'notApplicable'
  ) {
    if (!c.evidence) fail(`${at}: claims research with no evidence`);
    else {
      if (!c.evidence.note?.trim()) fail(`${at}: evidence has no note`);
      if (!ISO.test(c.evidence.verifiedAt))
        fail(`${at}: evidence verifiedAt must be an ISO date`);
      if (!c.evidence.sourceIds.length) fail(`${at}: evidence names no source`);
      for (const s of c.evidence.sourceIds)
        if (!SOURCE_MAP.has(s))
          fail(`${at}: evidence cites unknown source "${s}"`);
    }
  }
  if (c.status === 'notResearched' && c.evidence)
    fail(`${at}: says nobody looked, yet carries research evidence`);
}

/* -- absence is never non-existence, in any wording ----------------------- */
const FORBIDDEN =
  /\b(does not exist|no such (register|authority|programme)|there is no [a-z ]*register|none exists)\b/i;
for (const label of Object.values(PUBLIC_COVERAGE_LABEL))
  if (FORBIDDEN.test(label))
    fail(`public label "${label}" states that something does not exist`);
for (const r of RESEARCH_LEDGER)
  if (FORBIDDEN.test(r.note))
    fail(
      `${r.layer}/${r.jurisdiction}: the reader-facing note claims non-existence`,
    );
// And the built page, if it exists, must not either.
try {
  const html = readFileSync('.next/server/app/coverage.html', 'utf8')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ');
  const m = FORBIDDEN.exec(html);
  // The page quotes the forbidden phrasing once, to contrast it with what it
  // does say. Anything beyond that quotation is a claim.
  const occurrences = html.match(new RegExp(FORBIDDEN.source, 'gi')) ?? [];
  if (occurrences.length > 1)
    fail(
      `the built coverage page states non-existence ${occurrences.length} times (${m?.[0]})`,
    );
} catch {
  // Not built yet; the rendered audit covers this separately.
}

/* -- an internal note must never be reader-facing -------------------------- */
for (const c of cells)
  if (c.evidence?.internalNote && c.evidence.note === c.evidence.internalNote)
    fail(
      `${c.jurisdiction}/${c.layer}: the internal note is being shown to readers`,
    );

/* -- completeness must be measured against an independent list ------------- */
const targetsFile = readFileSync('data/coverage/targets.ts', 'utf8');
if (/from '@\/data\//.test(targetsFile) || /from '@\/lib\//.test(targetsFile))
  fail(
    'data/coverage/targets.ts imports from the corpus, so completeness would be measured against the thing being measured',
  );
for (const t of TARGET_SETS) {
  if (new Set(t.members).size !== t.members.length)
    fail(`target set "${t.id}" has duplicate members`);
  if (!t.basis?.trim()) fail(`target set "${t.id}" states no basis`);
}
for (const t of targetCompleteness())
  if (t.covered.length > t.total)
    fail(
      `${t.targetSetId}/${t.layer}: covered exceeds the target's membership`,
    );
for (const iso3 of ['USA', 'CAN', 'AUS']) {
  const s = subnationalAuthorityCoverage(iso3);
  if (!s) fail(`${iso3}: no independent subnational target`);
  else if (s.covered.length + s.missing.length !== s.total)
    fail(`${iso3}: covered and missing do not reconcile with the target`);
}

/* -- structural rules ------------------------------------------------------ */
for (const r of NOT_APPLICABLE_RULES)
  if (!r.why?.trim())
    fail(`not-applicable rule for "${r.layer}" states no reason`);

/* -- liveness -------------------------------------------------------------- */
const reachable = new Set<string>([
  ...cells.map((c) => c.status),
  ...RESEARCH_LEDGER.map((r) => r.status),
  ...NOT_APPLICABLE_RULES.map(() => 'notApplicable'),
]);
for (const s of COVERAGE_STATUSES)
  if (!reachable.has(s))
    fail(
      `status "${s}" is in the vocabulary and nothing reaches it — a category of findings that does not exist`,
    );
for (const r of RESEARCH_LEDGER) {
  if (!ISO.test(r.verifiedAt))
    fail(`ledger ${r.layer}/${r.jurisdiction}: bad date`);
  if (!r.internalNote?.trim())
    fail(
      `ledger ${r.layer}/${r.jurisdiction}: no internal note for the backlog`,
    );
  for (const s of r.sourceIds)
    if (!SOURCE_MAP.has(s))
      fail(`ledger ${r.layer}/${r.jurisdiction}: unknown source "${s}"`);
}

/* -- report ---------------------------------------------------------------- */
const gaps = gapsFrom(cells);
console.log('\nCoverage validation\n');
console.log(`  Countries evaluated:      ${COUNTRY_PROFILES.length}`);
console.log(`  Layers:                   ${COVERAGE_LAYERS.length}`);
console.log(`  Cells:                    ${cells.length}`);
for (const s of COVERAGE_STATUSES) {
  const n = cells.filter((c) => c.status === s).length;
  if (n) console.log(`    ${s.padEnd(30)}${String(n).padStart(5)}`);
}
console.log(`  Research ledger entries:  ${RESEARCH_LEDGER.length}`);
console.log(`  Global findings:          ${globalFindings().length}`);
console.log(`  Independent target sets:  ${TARGET_SETS.length}`);
console.log(`  Gaps:                     ${gaps.length}`);
for (const t of ['ready', 'blocked', 'unexamined'] as const)
  console.log(
    `    ${t.padEnd(30)}${String(gaps.filter((g) => g.tier === t).length).padStart(5)}`,
  );

if (errors.length) {
  console.error(`\n  FAILED — ${errors.length} error(s):\n`);
  for (const e of errors.slice(0, 30)) console.error(`    ✗ ${e}`);
  process.exit(1);
}
console.log('\n  ✓ Coverage validation passed.\n');
