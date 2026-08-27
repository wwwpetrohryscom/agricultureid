/**
 * Deterministic gate for the evidence-lineage layer. Offline.
 *
 * The failures this gate exists to prevent are all forms of provenance looking
 * stronger than the evidence behind it:
 *
 *   a normalised value presented as though the source had said it
 *   a locator invented for a source that publishes no addressable unit
 *   an explanatory note passed off as a legal citation
 *   a claim traced to a homepage when an exact record exists
 *   an extract long enough to substitute for the source
 *   a claim the layer itself calls uncertain, rendered as verified
 *   internal identifiers leaking into a reader-facing panel
 */
import {
  CLAIM_KINDS,
  LOCATOR_KINDS,
  MAX_EXCERPT_CHARS,
  TRUTH_STATES,
} from '../types/provenance';
import {
  LINEAGE_CONTRACTS,
  LINEAGE_CONTRACT_MAP,
} from '../lib/provenance/contracts';
import { allLineages } from '../lib/provenance/lineage';
import { SOURCE_MAP } from '../lib/sources/registry';
import { SOURCE_SNAPSHOTS } from '../data/freshness';
import { COMPLIANCE_TOPICS } from '../data/compliance';

const errors: string[] = [];
const fail = (m: string) => errors.push(m);
const ISO = /^\d{4}-\d{2}-\d{2}$/;
const SNAPSHOT_IDS = new Set(SOURCE_SNAPSHOTS.map((s) => s.id));

const L = allLineages();
const seen = new Set<string>();

/** Vocabularies a normalised value may belong to. Never a source's own words. */
const VOCABULARIES = new Set(
  LINEAGE_CONTRACTS.map((c) => c.vocabulary).filter(Boolean) as string[],
);

for (const l of L) {
  const at = `${l.claimKind}:${l.claimId}`;
  const key = `${l.claimKind}|${l.claimId}`;
  if (seen.has(key)) fail(`${at}: duplicate lineage`);
  seen.add(key);

  const contract = LINEAGE_CONTRACT_MAP.get(l.claimKind);
  if (!contract) {
    fail(
      `${at}: claim kind "${l.claimKind}" has no lineage contract, so nothing constrains what its evidence may claim`,
    );
    continue;
  }

  if (!CLAIM_KINDS.includes(l.claimKind))
    fail(`${at}: claim kind not in vocabulary`);
  if (!TRUTH_STATES.includes(l.truthState))
    fail(`${at}: truth state not in vocabulary`);
  if (!l.statement?.trim()) fail(`${at}: no statement`);
  if (!l.claimLabel?.trim()) fail(`${at}: no label`);

  // A traced claim with no source is not weak provenance, it is none: the whole
  // point of a lineage is to name what the claim rests on.
  if (l.sources.length === 0)
    fail(
      `${at}: has no source at all, so there is nothing for the evidence panel to show`,
    );

  /* -- the locator must be one this source can actually supply ---------- */
  if (!LOCATOR_KINDS.includes(l.locator.kind))
    fail(`${at}: locator kind not in vocabulary`);
  if (!contract.permittedLocators.includes(l.locator.kind))
    fail(
      `${at}: locator "${l.locator.kind}" is not one ${l.claimKind} sources publish (${contract.permittedLocators.join(', ')})`,
    );
  if (l.locator.kind === 'none' && !l.locator.why)
    fail(
      `${at}: a claim with no locator must say why the source has no addressable unit`,
    );
  if (l.locator.kind !== 'none' && !l.locator.value)
    fail(`${at}: locator "${l.locator.kind}" carries no value`);
  // A DOM path or a line number into a page rendered per request is provenance
  // that stops being true; neither may reach a reader.
  if (
    l.locator.value &&
    /(^|\s)(\.|#)[a-z0-9_-]+\s*>|nth-child|line \d+/i.test(l.locator.value)
  )
    fail(`${at}: locator looks like a selector or a line number`);
  // Citing an instrument is not the same as having read an article of it. A
  // `legal-article` locator must carry an actual address, or an explanatory
  // note ends up wearing the authority of a legal citation.
  if (
    l.locator.kind === 'legal-article' &&
    !/\bArticles?\s+\d+/.test(l.locator.value ?? '')
  )
    fail(
      `${at}: is typed as a legal article but names no article — ${JSON.stringify(l.locator.value)}`,
    );

  /* -- release ----------------------------------------------------------- */
  if (l.release && !contract.hasRelease)
    fail(`${at}: carries a release, but this claim kind records none`);
  if (!l.release && contract.hasRelease)
    fail(`${at}: this claim kind records a release and none is resolved`);
  if (l.release?.snapshotId && !SNAPSHOT_IDS.has(l.release.snapshotId))
    fail(`${at}: unknown snapshot "${l.release.snapshotId}"`);
  if (l.release?.retrievedAt && !ISO.test(l.release.retrievedAt))
    fail(`${at}: release retrievedAt must be an ISO date`);

  /* -- the source's words and ours are never the same field -------------- */
  if (l.sourceWording && !contract.publishesWording)
    fail(
      `${at}: quotes the source, but this claim kind's sources publish no wording to quote`,
    );
  if (l.sourceWording) {
    if (!l.sourceWording.text.trim()) fail(`${at}: empty source wording`);
    if (l.sourceWording.text.length > MAX_EXCERPT_CHARS)
      fail(
        `${at}: quoted extract is ${l.sourceWording.text.length} characters, over the ${MAX_EXCERPT_CHARS} this layer carries. Provenance identifies what was read; it does not reproduce it.`,
      );
  }
  if (l.interpretation && !contract.hasInterpretation)
    fail(
      `${at}: records an interpretation, but this claim kind normalises nothing`,
    );
  if (l.interpretation) {
    if (!l.interpretation.vocabulary?.trim())
      fail(`${at}: an interpretation must name the vocabulary it comes from`);
    else if (!VOCABULARIES.has(l.interpretation.vocabulary))
      fail(
        `${at}: vocabulary "${l.interpretation.vocabulary}" is not one any contract declares`,
      );
    if (
      contract.vocabulary &&
      l.interpretation.vocabulary !== contract.vocabulary
    )
      fail(
        `${at}: interpretation claims vocabulary "${l.interpretation.vocabulary}" but this claim kind normalises into "${contract.vocabulary}"`,
      );
    // The whole point of keeping them apart: a normalised value that is
    // literally what the source said would be indistinguishable from a quote.
    if (
      l.sourceWording &&
      l.interpretation.value === l.sourceWording.text &&
      l.claimKind !== 'biosecurity-status'
    )
      fail(
        `${at}: the normalised value is identical to the quoted wording, so a reader cannot tell which is the source's`,
      );
  }

  /* -- standing ---------------------------------------------------------- */
  if (l.verifiedAt && !ISO.test(l.verifiedAt))
    fail(`${at}: verifiedAt must be an ISO date`);
  if (l.truthState === 'verified' && !l.verifiedAt)
    fail(`${at}: called verified with no verification date`);
  if (l.truthState === 'verified' && l.sources.length === 0)
    fail(`${at}: called verified with no source`);
  if (l.truthState === 'source-conflicted' && l.conflicts.length === 0)
    fail(`${at}: called source-conflicted with no conflict recorded`);
  if (l.conflicts.length > 0 && l.truthState !== 'source-conflicted')
    fail(`${at}: records a conflict but is not called source-conflicted`);

  for (const s of l.sources)
    if (!SOURCE_MAP.has(s.sourceId))
      fail(`${at}: unknown source "${s.sourceId}"`);
}

/* -- a claim the layer calls uncertain is never rendered as established --- */
for (const t of COMPLIANCE_TOPICS)
  for (const r of t.requirements) {
    const l = L.find((x) => x.claimId === r.id);
    if (!l) continue;
    if (r.mandatoryStatus === 'uncertain' && l.truthState === 'verified')
      fail(
        `${r.id}: the requirement's own status is uncertain but its lineage is called verified`,
      );
    // Wave 6 allowed `required` only where the operative article was read.
    if (r.mandatoryStatus === 'required' && l.locator.kind !== 'legal-article')
      fail(
        `${r.id}: recorded as required without a legal article as its locator`,
      );
  }

/* -- liveness -------------------------------------------------------------- */
const kindsUsed = new Set(L.map((l) => l.claimKind));
for (const c of LINEAGE_CONTRACTS)
  if (!kindsUsed.has(c.claimKind))
    fail(
      `lineage contract "${c.claimKind}" is declared but resolves no claims`,
    );
// A permitted locator nothing reaches is a capability the contract claims and
// the sources do not have — the same shape as the unreachable `vine-species`
// sub-type Wave 18 removed.
for (const c of LINEAGE_CONTRACTS)
  for (const loc of c.permittedLocators)
    if (!L.some((l) => l.claimKind === c.claimKind && l.locator.kind === loc))
      fail(
        `contract "${c.claimKind}" permits locator "${loc}" and no claim uses it`,
      );

/* -- report ---------------------------------------------------------------- */
console.log('\nEvidence lineage validation\n');
console.log(`  Traced claims:            ${L.length.toLocaleString('en')}`);
for (const c of LINEAGE_CONTRACTS) {
  const n = L.filter((l) => l.claimKind === c.claimKind).length;
  console.log(`    ${c.claimKind.padEnd(28)}${String(n).padStart(7)}`);
}
console.log('\n  By locator');
for (const k of LOCATOR_KINDS) {
  const n = L.filter((l) => l.locator.kind === k).length;
  if (n) console.log(`    ${k.padEnd(28)}${String(n).padStart(7)}`);
}
console.log('\n  By standing');
for (const t of TRUTH_STATES) {
  const n = L.filter((l) => l.truthState === t).length;
  if (n) console.log(`    ${t.padEnd(28)}${String(n).padStart(7)}`);
}
console.log(
  `\n  Quoted extracts:          ${L.filter((l) => l.sourceWording).length.toLocaleString('en')} (longest ${Math.max(0, ...L.map((l) => l.sourceWording?.text.length ?? 0))} chars, limit ${MAX_EXCERPT_CHARS})`,
);

if (errors.length) {
  console.error(`\n  FAILED — ${errors.length} error(s):\n`);
  for (const e of errors.slice(0, 30)) console.error(`    ✗ ${e}`);
  process.exit(1);
}
console.log('\n  ✓ Evidence lineage validation passed.\n');
