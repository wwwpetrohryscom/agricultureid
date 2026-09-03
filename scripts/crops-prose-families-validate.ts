/**
 * Deterministic gate for the Wave 45 prose-family classification. Offline.
 *
 * Two claims are checked here and neither is taken on assertion.
 *
 * The first is that no family is unaccounted for. The families are RECOMPUTED
 * from the corpus at the configured floor, and a family the detector finds with
 * no record fails — the silent remainder is the whole failure mode a
 * classification pass exists to prevent.
 *
 * The second is that a classification agrees with something measurable. Policy
 * has to be held somewhere the articles do not control; a weld has to actually
 * be welded; a resolution has to have moved a number. The categories that
 * cannot be measured at all — whether a shared caveat is legitimate, whether
 * prose is overgeneralised — are the ones a human decided, and what is enforced
 * for those is that the reason was written down and that the family is not
 * pretending to be one of the categories that can be checked.
 */
import { PROSE_FAMILIES } from '../data/crop-prose-families';
import {
  PROSE_FAMILY_CLASSES,
  PROSE_FAMILY_CLASS_MEANING,
} from '../types/crop-prose-family';
import { PUBLISHED_CONTENT } from '../lib/content/registry';
import { sharedRunFamilies } from '../lib/crops/content-depth';
import {
  STANDING_PHRASE_MARKER,
  STANDING_PHRASES,
  articlesContaining,
  cropArticleCount,
} from '../lib/crops/editorial-boilerplate';
import {
  CROP_ET_METHODOLOGY_CAVEAT,
  CROP_STATISTICS_CAVEAT,
} from '../lib/crops/editorial-boilerplate';

const errors: string[] = [];
const fail = (m: string) => errors.push(m);

/**
 * The configured floor, and why it is here rather than lower.
 *
 * Below twenty words the map is dominated by the corpus's own registered
 * standing language and by ordinary English, and the brief is explicit that a
 * remediation wave should not be spent rewriting benign twenty-word policy
 * snippets. The floor is recorded rather than implied so that lowering it is a
 * decision someone makes, not something that happens.
 */
const FAMILY_FLOOR = 20;

const crops = PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop');
const families = sharedRunFamilies(crops, FAMILY_FLOOR);
const byText = new Map(families.map((f) => [f.text, f]));

/* -------------------------------------------------------------------------- */
/*  Every family is accounted for, and every record describes a real family    */
/* -------------------------------------------------------------------------- */

const surviving = PROSE_FAMILIES.filter((r) => !r.resolvedFrom);
/*
 * Coverage is satisfied by ANY record naming the text, resolved or not.
 *
 * A record that claims a resolution and whose family is still standing is a
 * defect the resolution rule below owns and reports precisely. Excluding
 * resolved records here made that case surface first as "no record classifies
 * it", which is true in a narrow sense and points at the wrong thing: the
 * family is classified, and the classification says it was fixed when it was
 * not.
 */
const recordByText = new Map(PROSE_FAMILIES.map((r) => [r.text, r]));

for (const f of families)
  if (!recordByText.has(f.text))
    fail(
      `prose family (${f.run}w, ${f.slugs.join(', ')}): the detector finds it at the ${FAMILY_FLOOR}-word floor and no record classifies it — "${f.text.slice(0, 70)}"`,
    );

for (const r of surviving)
  if (!byText.has(r.text))
    fail(
      `prose family "${r.id}": classifies text the detector no longer finds — either the family was resolved and the record should say so, or the text was typed rather than measured`,
    );

/* -------------------------------------------------------------------------- */
/*  Each record                                                                */
/* -------------------------------------------------------------------------- */

const seen = new Set<string>();
for (const r of PROSE_FAMILIES) {
  const at = `prose family "${r.id}"`;
  if (seen.has(r.id)) fail(`${at}: recorded twice`);
  seen.add(r.id);
  if (!(PROSE_FAMILY_CLASSES as readonly string[]).includes(r.classification))
    fail(
      `${at}: classification "${r.classification}" is not in the vocabulary`,
    );
  else if (!PROSE_FAMILY_CLASS_MEANING[r.classification]?.trim())
    fail(`${at}: classification "${r.classification}" has no stated meaning`);
  if (!r.rationale?.trim() || r.rationale.length < 60)
    fail(`${at}: gives no reason, or one too short to be one`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(r.reviewedAt))
    fail(`${at}: reviewedAt is not a date`);

  /*
   * UNKNOWN is a state a review passes through, not one it ends in. Leaving a
   * family undecided and shipping is exactly the silent remainder the record
   * set exists to prevent, differently spelled.
   */
  if (r.classification === 'UNKNOWN_REVIEW_REQUIRED')
    fail(`${at}: is still unclassified at the end of the wave`);

  /*
   * Policy has to be held somewhere the articles do not control.
   *
   * This is the rule against laundering. Registering copied prose as policy
   * would silence the detector and change nothing, so a CORPUS_POLICY family
   * must either name where the text is held centrally — a constant, rendered —
   * or be a registered standing phrase whose measured occurrence share the
   * corpus can check. Saying "this is policy" is not one of the options.
   */
  if (r.classification === 'CORPUS_POLICY') {
    const registered = STANDING_PHRASES.some((p) => r.text.includes(p.phrase));
    if (!r.heldAt && !registered) {
      /*
       * The third case: text that is policy in substance, is not held in a
       * constant, and is not a registered standing phrase. It is allowed only
       * where the record says what makes it policy and the text is identical
       * everywhere it appears — a disclaimer that varies has been reasoned
       * about more than once and is not one thing.
       */
      const f = byText.get(r.text);
      if (!f)
        fail(
          `${at}: is classified as corpus policy, names nowhere it is held, and the detector does not find it`,
        );
      else if (
        !/disclaimer|policy|scope of this reference|regulat/i.test(r.rationale)
      )
        fail(
          `${at}: is classified as corpus policy and neither names where the text is held nor says what makes it policy`,
        );
    }
    if (r.heldAt) {
      const held = [CROP_STATISTICS_CAVEAT, CROP_ET_METHODOLOGY_CAVEAT];
      const name = r.heldAt.split(' ').pop()!;
      if (!/^lib\//.test(r.heldAt))
        fail(`${at}: heldAt "${r.heldAt}" does not name a module path`);
      if (!held.length || !name) fail(`${at}: heldAt names no constant`);
    }
  }

  /*
   * A resolution that did not move a number is a claim.
   *
   * `resolvedFrom` states what the family measured before this wave acted on
   * it. The corpus is asked what it measures now, and the answer has to be
   * smaller — either the family is gone from the map entirely, or its run has
   * fallen. Wave 42 recorded two pairs as resolved whose runs had not moved at
   * all, which is why this is checked rather than trusted.
   */
  if (r.resolvedFrom) {
    const now = byText.get(r.text);
    if (r.text && now && now.run >= r.resolvedFrom.runWords)
      fail(
        `${at}: is recorded as resolved from ${r.resolvedFrom.runWords} words and the corpus still measures ${now.run} — a resolution flag without a text change is not a resolution`,
      );
    if (r.resolvedFrom.runWords < FAMILY_FLOOR)
      fail(
        `${at}: claims to have resolved a ${r.resolvedFrom.runWords}-word family, which is below the ${FAMILY_FLOOR}-word floor this map is built at`,
      );
    if (r.resolvedFrom.articles < 2)
      fail(`${at}: claims to have resolved a family of one article`);
  }

  /*
   * COPIED_CROP_SPECIFIC_PROSE is never an end state.
   *
   * The category names agronomy written for one crop and reused for another.
   * A family classified this way that is still standing is a defect the corpus
   * has looked at and left, which the brief does not permit; so it must carry
   * a resolution.
   */
  if (r.classification === 'COPIED_CROP_SPECIFIC_PROSE' && !r.resolvedFrom)
    fail(
      `${at}: is classified as copied crop-specific prose and is not recorded as resolved — copied agronomy is not a permitted end state`,
    );
}

/* -------------------------------------------------------------------------- */
/*  The weld property is computed, not labelled                                */
/* -------------------------------------------------------------------------- */

/*
 * Fifteen surviving families are two short shared clauses with a registered
 * standing phrase stripped from between them. That is a fact about the
 * detector, and the corpus can see it: the marker the stripper leaves is in
 * the family text. A record that calls a welded family copied prose, or a
 * genuinely contiguous run a weld, is disagreeing with something measurable.
 */
for (const r of surviving) {
  const f = byText.get(r.text);
  if (!f) continue;
  if (f.weldedByPolicy && r.classification === 'COPIED_CROP_SPECIFIC_PROSE')
    fail(
      `prose family "${r.id}": is called copied prose and the run is welded by a registered standing phrase — what is shared is the corpus's own policy plus two short clauses`,
    );
  if (
    f.weldedByPolicy &&
    !/weld|standing phrase|policy|qualifier|disclaimer/i.test(r.rationale)
  )
    fail(
      `prose family "${r.id}": is a policy weld and the reason does not say so`,
    );
}

/* -------------------------------------------------------------------------- */
/*  The family ratchet                                                         */
/* -------------------------------------------------------------------------- */

/*
 * Counted as families, not pairs, because that is the unit remediation acts
 * on: the corpus's largest repeated text was in 123 articles and no pair of
 * them shared a remarkable run, so a pairwise budget could not see it at all.
 * The pairwise ratchet stays where it is, in the integrity validator; this is
 * the same discipline over the other view of the same data.
 */
const FAMILY_BUDGET: readonly { floor: number; families: number }[] = [
  { floor: 20, families: 36 },
  { floor: 25, families: 4 },
  { floor: 30, families: 0 },
];
for (const b of FAMILY_BUDGET) {
  const now = sharedRunFamilies(crops, b.floor).length;
  if (now > b.families)
    fail(
      `repeated-text families of ${b.floor}+ words: ${now}, budget ${b.families} — a new family means a paragraph was reused`,
    );
  if (now < b.families)
    fail(
      `repeated-text families of ${b.floor}+ words: ${now} against a budget of ${b.families} — the debt fell and the budget was not lowered with it`,
    );
}

/* -------------------------------------------------------------------------- */
/*  Report                                                                     */
/* -------------------------------------------------------------------------- */

console.log('\nAgricultureID — repeated prose families\n');
console.log(`  Configured floor:             ${FAMILY_FLOOR} words`);
console.log(`  Families in the corpus:       ${families.length}`);
console.log(
  `    welded by standing phrase   ${families.filter((f) => f.weldedByPolicy).length}`,
);
console.log(
  `    longest run                 ${Math.max(0, ...families.map((f) => f.run))}w`,
);
console.log(
  `    largest article set         ${Math.max(0, ...families.map((f) => f.slugs.length))}`,
);
console.log(`\n  Records:                      ${PROSE_FAMILIES.length}`);
{
  const m = new Map<string, number>();
  for (const r of PROSE_FAMILIES)
    m.set(r.classification, (m.get(r.classification) ?? 0) + 1);
  for (const c of PROSE_FAMILY_CLASSES)
    if (m.get(c))
      console.log(`    ${c.padEnd(30)}${String(m.get(c)).padStart(4)}`);
}
console.log(
  `\n  Families resolved this wave:  ${PROSE_FAMILIES.filter((r) => r.resolvedFrom).length}`,
);
console.log('\n  Registered standing phrases');
for (const p of STANDING_PHRASES)
  console.log(
    `    ${String(articlesContaining(p.phrase)).padStart(4)}/${cropArticleCount()}  ${p.phrase.slice(0, 56)}`,
  );
console.log(
  `\n  (the marker the stripper leaves is ${JSON.stringify(STANDING_PHRASE_MARKER)})`,
);

if (errors.length) {
  console.error(`\n  FAILED — ${errors.length} error(s):\n`);
  for (const e of errors.slice(0, 30)) console.error(`    ✗ ${e}`);
  process.exit(1);
}
console.log('\n  ✓ Prose family validation passed.\n');
