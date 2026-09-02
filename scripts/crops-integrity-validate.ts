/**
 * Deterministic gate for crop corpus integrity. Offline.
 *
 * Three things it will not let happen:
 *
 *   a sentence is registered as the corpus's standing language when it is
 *   really two crops sharing a paragraph;
 *
 *   a concept's prose claims coverage its own structured scope denies;
 *
 *   an article asserts what AgricultureID holds without that being checkable.
 *
 * The third is the general form of the defect Wave 33 found three times. A
 * sentence saying "both species are verified separately" was false, and no
 * amount of reading it would have revealed that, because the error was between
 * the sentence and the data. Prose that makes a claim about corpus state has to
 * be answerable from corpus state.
 */
import {
  STANDING_PHRASES,
  STANDING_PHRASE_MIN_SHARE,
  articlesContaining,
  cropArticleCount,
} from '../lib/crops/editorial-boilerplate';
import {
  DEBT_VERDICTS,
  RESOLVED_SIMILAR_PAIRS,
  REVIEWED_SIMILAR_PAIRS,
  SIMILARITY_VERDICTS,
} from '../data/crop-identity/similar-pairs';
import { CROP_CONCEPTS } from '../data/crop-identity/concepts';
import { SCOPE_DECISIONS } from '../data/crop-identity/scope-decisions';
import { IDENTITY_BY_SLUG } from '../lib/crops/identity';
import { PUBLISHED_CONTENT } from '../lib/content/registry';
import { articleText } from '../lib/crops/content-depth';
import { SOURCE_MAP } from '../lib/sources/registry';

const errors: string[] = [];
const fail = (m: string) => errors.push(m);
const ISO = /^\d{4}-\d{2}-\d{2}$/;
const norm = (s: string) => s.toLowerCase().replace(/\s+/g, ' ').trim();

const cropSlugs = new Set(
  PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop').map((c) => c.slug),
);

/* -- 1. standing language must actually be standing ------------------------ */
{
  const total = cropArticleCount();
  const floor = Math.ceil(total * STANDING_PHRASE_MIN_SHARE);
  const seen = new Set<string>();
  for (const p of STANDING_PHRASES) {
    if (seen.has(p.phrase))
      fail(`standing phrase registered twice: "${p.phrase.slice(0, 40)}…"`);
    seen.add(p.phrase);
    if (!p.reason?.trim() || p.reason.length < 60)
      fail(
        `standing phrase "${p.phrase.slice(0, 40)}…" gives no reason for being standard`,
      );
    const n = articlesContaining(p.phrase);
    // The whole point. A phrase registered here is invisible to the similarity
    // metric, so this is the only thing stopping copied prose being laundered
    // as policy.
    if (n < floor)
      fail(
        `standing phrase "${p.phrase.slice(0, 50)}…" appears in ${n} of ${total} crop articles, below the ${floor} required — that is crops sharing a sentence, not the corpus stating a policy`,
      );
    if (p.phrase !== norm(p.phrase) || /[^a-z ]/.test(p.phrase))
      fail(`standing phrase "${p.phrase.slice(0, 40)}…" is not normalised`);
  }
}

/* -- 2. the similarity register ------------------------------------------- */
{
  for (const r of REVIEWED_SIMILAR_PAIRS) {
    if (!SIMILARITY_VERDICTS.includes(r.verdict))
      fail(
        `reviewed pair ${r.a}/${r.b}: verdict "${r.verdict}" is not in the vocabulary`,
      );
    if (DEBT_VERDICTS.includes(r.verdict))
      fail(
        `reviewed pair ${r.a}/${r.b} carries the debt verdict "${r.verdict}" — copied crop-specific prose is to be rewritten, not recorded`,
      );
    if (!ISO.test(r.reviewedAt))
      fail(`reviewed pair ${r.a}/${r.b}: no ISO review date`);
    if (!r.reason?.trim() || r.reason.length < 60)
      fail(`reviewed pair ${r.a}/${r.b}: no substantive reason`);
  }
  const reviewed = new Set(
    REVIEWED_SIMILAR_PAIRS.map((r) => [r.a, r.b].sort().join('::')),
  );
  for (const r of RESOLVED_SIMILAR_PAIRS) {
    if (reviewed.has([r.a, r.b].sort().join('::')))
      fail(`${r.a}/${r.b} is recorded as both resolved and currently flagged`);
    if (!ISO.test(r.resolvedAt))
      fail(`resolved pair ${r.a}/${r.b}: no ISO date`);
    if (r.runBefore < 12)
      fail(
        `resolved pair ${r.a}/${r.b} records a run of ${r.runBefore} words, which was never debt`,
      );
    for (const s of [r.a, r.b])
      if (!cropSlugs.has(s))
        fail(`resolved pair ${r.a}/${r.b} names "${s}", which has no page`);
  }
}

/* -- 3. the scope-note contract -------------------------------------------- */
/**
 * Structured scope is the source of truth; prose is checked against it.
 *
 * Deliberately a small set of explicit predicates rather than anything that
 * tries to understand a sentence. Each phrase below is one a person writes when
 * they mean something specific about corpus state, and each is answerable.
 */
{
  const publishedConstituents = (slug: string) =>
    CROP_CONCEPTS.find((k) => k.slug === slug)!.constituents.filter(
      (t) => t.identitySlug && cropSlugs.has(t.identitySlug),
    );
  const taxonOnly = (slug: string) =>
    CROP_CONCEPTS.find((k) => k.slug === slug)!.constituents.filter(
      (t) =>
        t.heldAs !== 'not-held' &&
        t.identitySlug &&
        !cropSlugs.has(t.identitySlug),
    );
  const notHeld = (slug: string) =>
    CROP_CONCEPTS.find((k) => k.slug === slug)!.constituents.filter(
      (t) => t.heldAs === 'not-held',
    );

  for (const k of CROP_CONCEPTS) {
    const prose = norm(
      [
        k.scopeStatement,
        k.splitCriterion,
        ...k.constituents.map((t) => t.role),
      ].join(' '),
    );
    const at = `concept "${k.slug}"`;
    const has = (p: string) => prose.includes(p);

    if (has('have their own pages') && publishedConstituents(k.slug).length < 2)
      fail(
        `${at}: says constituents "have their own pages" and ${publishedConstituents(k.slug).length} of them do`,
      );
    if (
      has('has its own page') &&
      !has('have their own pages') &&
      publishedConstituents(k.slug).length < 1
    )
      fail(`${at}: says a constituent "has its own page" and none does`);
    if (
      (has('held as a taxon') || has('held as taxa')) &&
      taxonOnly(k.slug).length < 1
    )
      fail(
        `${at}: says a constituent is "held as a taxon" and every constituent either has a page or is not held`,
      );
    if (
      (has('the corpus holds neither') ||
        has('holds no ') ||
        has('is not held')) &&
      notHeld(k.slug).length < 1
    )
      fail(
        `${at}: states the corpus does not hold something, and every constituent is held`,
      );
    // And the reverse: a concept with an unheld constituent must say so, or the
    // page silently implies coverage it does not have.
    if (
      notHeld(k.slug).length > 0 &&
      !/not held|holds neither|holds no |holds none|does not hold|cannot be promoted until/.test(
        prose,
      )
    )
      fail(
        `${at}: ${notHeld(k.slug).length} constituent(s) are not held by this corpus and the scope prose does not say so`,
      );
  }
}

/* -- 4. corpus-coverage claims in article prose ---------------------------- */
/**
 * A crop article may not assert what AgricultureID holds. The concept layer is
 * where scope is stated, it is structured, and it is checked above; a sentence
 * in an article body saying the same thing is a second copy that nothing keeps
 * true. This is exactly how three false sentences survived into production.
 */
{
  const FORBIDDEN = [
    'agricultureid holds',
    'the corpus holds',
    'are held separately',
    'is held separately',
    'verified separately',
    'listed individually',
    'has its own page',
    'have their own pages',
  ];
  for (const c of PUBLISHED_CONTENT.filter((x) => x.contentType === 'crop')) {
    const t = norm(articleText(c));
    for (const f of FORBIDDEN)
      if (t.includes(f))
        fail(
          `crop "${c.slug}" asserts corpus coverage in its article prose ("${f}") — that claim belongs in the structured concept scope, where it is checked`,
        );
  }
}

/* -- 5. recorded scope decisions ------------------------------------------- */
for (const d of SCOPE_DECISIONS) {
  const at = `scope decision "${d.slug}"`;
  if (!ISO.test(d.decidedAt)) fail(`${at}: no ISO date`);
  if (!d.question?.trim() || d.question.length < 30)
    fail(`${at}: does not state the question it answers`);
  if (!d.finding?.trim() || d.finding.length < 120)
    fail(`${at}: gives no substantive finding`);
  if (!d.sourceIds.length) fail(`${at}: cites no source`);
  for (const s of d.sourceIds)
    if (!SOURCE_MAP.has(s)) fail(`${at}: names unknown source "${s}"`);
  // A decision must name something that exists.
  if (
    !IDENTITY_BY_SLUG.has(d.slug) &&
    !CROP_CONCEPTS.some((k) => k.slug === d.slug)
  )
    fail(`${at}: names neither a crop identity nor a concept`);
  // An outcome that adds taxa must have added them.
  if (d.outcome === 'ADD_VERIFIED_DATA_ONLY_TAXA') {
    const added = (d.taxaAdded ?? []).filter((s) => IDENTITY_BY_SLUG.has(s));
    if (added.length !== (d.taxaAdded ?? []).length)
      fail(`${at}: records taxa added that do not exist as identities`);
    if (!added.length) fail(`${at}: outcome adds taxa and none are named`);
  }
  if (d.outcome === 'KEEP_GENUS_CONCEPT_ONLY' && (d.taxaAdded ?? []).length)
    fail(`${at}: outcome keeps the genus concept only and names added taxa`);
}

/* -- report ---------------------------------------------------------------- */
console.log('\nCrop corpus integrity\n');
console.log(`  Standing phrases registered:  ${STANDING_PHRASES.length}`);
for (const p of STANDING_PHRASES)
  console.log(
    `    ${String(articlesContaining(p.phrase)).padStart(4)}/${cropArticleCount()}  ${p.phrase.slice(0, 58)}…`,
  );
console.log(
  `\n  Similar pairs still flagged:  ${REVIEWED_SIMILAR_PAIRS.length}`,
);
for (const r of REVIEWED_SIMILAR_PAIRS)
  console.log(
    `    ${`${r.a}/${r.b}`.padEnd(24)}${r.longestRun}w  ${r.verdict}`,
  );
console.log(
  `\n  Pairs rewritten and holding:  ${RESOLVED_SIMILAR_PAIRS.length}`,
);
{
  const before = RESOLVED_SIMILAR_PAIRS.reduce(
    (m, r) => Math.max(m, r.runBefore),
    0,
  );
  const now = REVIEWED_SIMILAR_PAIRS.reduce(
    (m, r) => Math.max(m, r.longestRun),
    0,
  );
  console.log(`    longest identical run: ${before}w before, ${now}w now`);
}
console.log(`\n  Scope decisions recorded:     ${SCOPE_DECISIONS.length}`);
for (const d of SCOPE_DECISIONS)
  console.log(`    ${d.slug.padEnd(14)}${d.outcome}`);

if (errors.length) {
  console.error(`\n  FAILED — ${errors.length} error(s):\n`);
  for (const e of errors.slice(0, 30)) console.error(`    ✗ ${e}`);
  process.exit(1);
}
console.log('\n  ✓ Crop integrity validation passed.\n');
