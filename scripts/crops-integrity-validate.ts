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
import {
  articleText,
  flaggedPairs,
  fullProseText,
  sharedRunPairs,
} from '../lib/crops/content-depth';
import { SOURCE_MAP } from '../lib/sources/registry';

const errors: string[] = [];
const fail = (m: string) => errors.push(m);
const ISO = /^\d{4}-\d{2}-\d{2}$/;
const norm = (s: string) => s.toLowerCase().replace(/\s+/g, ' ').trim();

const crops = PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop');
const cropSlugs = new Set(crops.map((c) => c.slug));

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

/* -- 2b. shared prose the overlap filter never measured --------------------
 *
 * `flaggedPairs` filters on Jaccard overlap and only then measures the shared
 * run, so a long verbatim paragraph inside two articles about different plants
 * is never measured at all. Wave 31 wrote down that Jaccard cannot tell
 * vocabulary from a copied paragraph; the filter order reintroduced the blind
 * spot, and a Wave 41 injection copied a paragraph from cherry to sour cherry
 * and passed every gate.
 *
 * Shingling measures it directly, and what it found is a real body of shared
 * prose in the older fruit and nut articles: a family of production-statistics
 * caveats repeated across thirty-six to forty-five pages. Those are NOT
 * standing language by this corpus's own test — every variant sits far below
 * the forty-per-cent share that separates a policy from a shared sentence —
 * and registering them to make the number go away would be exactly the
 * laundering that rule exists to prevent.
 *
 * So the debt is measured rather than declared clean, and ratcheted rather
 * than rewritten: these counts may fall and may not rise. Not one pair above
 * twenty words involves an article written in Waves 39, 40 or 41, so the
 * ratchet costs the current work nothing and makes copying a paragraph fail.
 *
 * Wave 45 turned the ratchet: 277 → 42, 102 → 4, 39 → 0 and 9 → 0. Most of that
 * came from one edit rather than from rewriting: two methodology
 * caveats — where production figures come from, how a water requirement is
 * estimated — were in 123 articles in 90 wordings, and centralising them into
 * rendered constants removed 156 sentences. The corpus's longest shared run
 * fell from 47 words to under 35 without a single fact being changed, which is
 * the shape most of this debt turned out to have.
 */
const SHARED_RUN_BUDGET: readonly { floor: number; pairs: number }[] = [
  { floor: 20, pairs: 42 },
  { floor: 25, pairs: 4 },
  { floor: 30, pairs: 0 },
  { floor: 35, pairs: 0 },
];
{
  const pairs = sharedRunPairs(crops);
  for (const b of SHARED_RUN_BUDGET) {
    const now = pairs.filter((p) => p.run >= b.floor).length;
    if (now > b.pairs)
      fail(
        `crop articles sharing a run of ${b.floor}+ words: ${now} pairs, budget ${b.pairs} — the ratchet only turns one way, and a new pair means prose was copied`,
      );
    if (now < b.pairs)
      fail(
        `crop articles sharing a run of ${b.floor}+ words: ${now} pairs against a budget of ${b.pairs} — the debt was paid down and the budget was not lowered with it`,
      );
  }
  /*
   * The register keeps its own job: it is where a pair that survives review is
   * recorded with a reason. What changed is that the corpus is now asked
   * whether a registered pair is still flagged, in both directions.
   */
  const key = (a: string, b: string) => [a, b].sort().join('::');
  const flagged = flaggedPairs(crops);
  const flaggedKeys = new Map(flagged.map((p) => [key(p.a, p.b), p]));
  /*
   * "Resolved" was recorded to mean the shared AGRONOMY was rewritten, and the
   * shared statistics caveat was left behind — so a resolved pair is not a
   * pair with no shared run, and asking for that would be asking for a
   * different rewrite than the one that was done. What it must be is better:
   * the run has to be below the figure the resolution recorded. Two pairs were
   * not — hazelnut/walnut sat at 42 of 42 and broccoli/cauliflower at 30 of 30
   * — and both were rewritten in Wave 41 rather than re-recorded.
   */
  const runNow = new Map(
    sharedRunPairs(crops).map((p) => [key(p.a, p.b), p.run]),
  );
  for (const r of RESOLVED_SIMILAR_PAIRS) {
    const now = runNow.get(key(r.a, r.b)) ?? 0;
    if (now >= r.runBefore)
      fail(
        `resolved pair ${r.a}/${r.b} recorded a ${r.runBefore}-word run before resolution and the corpus still measures ${now} — nothing was resolved`,
      );
  }
  for (const r of REVIEWED_SIMILAR_PAIRS) {
    const p = flaggedKeys.get(key(r.a, r.b));
    if (!p) {
      fail(
        `reviewed pair ${r.a}/${r.b} is registered as flagged and the corpus no longer flags it`,
      );
      continue;
    }
    if (p.longestRun > r.longestRun)
      fail(
        `reviewed pair ${r.a}/${r.b} records a ${r.longestRun}-word shared run and the corpus now measures ${p.longestRun}`,
      );
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
        ...(k.excludes ?? []).map((x) => x.reason),
      ].join(' '),
    );
    const at = `concept "${k.slug}"`;
    const has = (p: string) => prose.includes(p);

    if (has('have their own pages') && publishedConstituents(k.slug).length < 2)
      fail(
        `${at}: says constituents "have their own pages" and ${publishedConstituents(k.slug).length} of them do`,
      );
    /*
     * "has its own page" can be said of an excluded taxon as well as of a
     * constituent — the chili pepper scope says it of sweet pepper, which is
     * the crop the concept explicitly does NOT cover, and that is exactly the
     * kind of statement an exclusion exists to make. The check counts both,
     * and it still fails when the phrase describes nothing that has a page.
     */
    const withPages =
      publishedConstituents(k.slug).length +
      (k.excludes ?? []).filter(
        (x) => x.resolvesTo && cropSlugs.has(x.resolvesTo.slug),
      ).length;
    if (
      has('has its own page') &&
      !has('have their own pages') &&
      withPages < 1
    )
      fail(
        `${at}: says a constituent or exclusion "has its own page" and nothing it names does`,
      );
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
    /*
     * The FULL prose, not the body.
     *
     * A Wave 44 injection made its claim in the `summary` and every rule in
     * this block passed, because `articleText` is introduction and sections
     * and the summary is neither. Depth and similarity still measure the body;
     * the integrity rules measure what a reader is shown.
     */
    const t = norm(fullProseText(c));
    for (const f of FORBIDDEN)
      if (t.includes(f))
        fail(
          `crop "${c.slug}" asserts corpus coverage in its article prose ("${f}") — that claim belongs in the structured concept scope, where it is checked`,
        );

    /*
     * A crop calendar says WHEN, and nothing else.
     *
     * Wave 44 ingested calendar rows for forty-two more crops and the standing
     * temptation with a dataset that size is to read coverage as importance:
     * FAO records sowing windows for purslane in six countries, therefore
     * purslane is a globally significant crop. It does not follow. A crop
     * calendar establishes that a national authority described a season in a
     * zone; it says nothing about area, production, importance, native range,
     * domestication or climate suitability, and a wave that publishes from
     * calendar evidence is exactly the wave that would overreach on it.
     *
     * A phrase list rather than a judgement, in the same shape as the rules
     * above and the content validator's safety and prescription gates: these
     * are claims about global standing that no source in this corpus supports,
     * and an article that wants to make one has to find a source that does and
     * a way of saying it that is not a superlative.
     */
    /*
     * Compared on a harder normalisation than the rules above.
     *
     * `norm` here only lowercases and collapses whitespace, which is enough
     * for phrases with no punctuation in them and silently wrong for these:
     * "one of the world's most important" carries an apostrophe that may be
     * typed as ' or ’, and a phrase list written without one matches nothing
     * at all. The first version of this rule passed against an article that
     * contained the claim verbatim.
     */
    const flat = t.replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ');
    const OVERREACH = [
      'one of the world s most important',
      'globally significant crop',
      'of the first rank',
      'grown at scale on every continent',
      'the world s most widely grown',
      'among the most important crops in the world',
    ];
    for (const f of OVERREACH)
      if (flat.includes(f))
        fail(
          `crop "${c.slug}" claims global standing in its article prose ("${f}") — calendar and identity coverage do not establish importance, and no source in this corpus supports a superlative of that kind`,
        );

    /*
     * A centralised policy may not come back as prose.
     *
     * Wave 45 took two methodology caveats out of 123 articles and put them in
     * one rendered constant. The way they got to ninety wordings in the first
     * place is that each new article restated them, so nothing about removing
     * them stops it happening again. These are the openers the removal cut at,
     * and a sentence starting one of them in article prose is the policy being
     * rewritten rather than rendered.
     *
     * Narrow on purpose: the words themselves are ordinary and a crop page must
     * still be able to say "production is concentrated in Kerala". What is
     * forbidden is the METHODOLOGY sentence — where figures come from, that
     * they change, how a water requirement is estimated — which is the corpus
     * talking about its own numbers.
     */
    const CENTRALISED = [
      'compiled by fao',
      'from primary sources such as faostat',
      'obtained from primary sources such as',
      'national agricultural statistics services rather than assumed',
      'should be consulted directly for current figures',
      'crop water requirements are estimated from evapotranspiration',
      'estimated from evapotranspiration and local climate',
      'taken from those primary datasets',
    ];
    for (const f of CENTRALISED)
      if (flat.includes(f))
        fail(
          `crop "${c.slug}" restates a centralised methodology caveat in its prose ("${f}") — the statistics and evapotranspiration notes are rendered from lib/crops/editorial-boilerplate.ts on every crop page`,
        );
  }
}

/* -- 5. no quantitative claim in article prose ----------------------------- */
/**
 * Wave 35's factual audit found the corpus carries zero quantitative claims in
 * prose across every crop article — numbers live in structured key facts, where
 * they can be checked and updated, and the standing policy sends readers to
 * primary datasets for figures.
 *
 * That was an observation, not a rule, so nothing stopped the next article
 * carrying one. A number in prose is the factual claim most likely to go stale
 * and hardest to check, and it is exactly what an article written quickly
 * reaches for.
 */
{
  // No trailing \b: the first version had one, and a word boundary after "%"
  // never matches because both sides are non-word characters — so "40%" was
  // invisible to the very rule written to catch it.
  const QUANTITATIVE =
    /\b\d[\d.,]*\s?(?:%|per cent|percent|°C|°F|(?:mm|cm|kg|ha|ppm|tonnes|t\/ha)\b)/;
  for (const c of PUBLISHED_CONTENT.filter((x) => x.contentType === 'crop')) {
    const t = articleText(c);
    const m = QUANTITATIVE.exec(t);
    if (m) {
      const i = Math.max(0, m.index - 60);
      fail(
        `crop "${c.slug}" states a quantitative claim in prose ("…${t.slice(i, m.index + 40).trim()}…") — figures belong in structured key facts, where they can be checked`,
      );
    }
  }
}

/* -- 6. recorded scope decisions ------------------------------------------- */
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
/* -- alternative names may not claim another crop's title ------------------
 *
 * An alternative name is a claim that this crop is also called that. When the
 * name is another published crop's title, the claim is that the two are the
 * same crop, and for two pages that exist separately it is false by
 * construction.
 *
 * Wave 40 found five of these, all created the same way: a parent page listed
 * a name, and a later wave published the crop that name belongs to. Cherry
 * claimed "Sour cherry" while the sour cherry page opens by explaining that
 * they are different species. Nothing noticed, because until the child existed
 * the alias was harmless.
 *
 * A concept page is the exception, and only where the concept record says so:
 * "Arabica coffee" on the Coffee page is a statement about what that page
 * covers, and `CROP_CONCEPTS` is what makes it checkable rather than asserted.
 */
{
  const cropTitles = new Map(
    PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop').map((c) => [
      c.title.toLowerCase(),
      c.slug,
    ]),
  );
  /*
   * The concept exception runs one way only.
   *
   * A parent listing a child's title says "this page also covers that", which
   * is what a scope statement is for. A CHILD listing the parent's title says
   * "this page is the umbrella", which is the umbrella cannibalisation Wave 32
   * had to undo — and it was permitted here until a Wave 41 injection put
   * "Cherry" on the sour cherry page and nothing objected.
   */
  const linked = new Set<string>();
  for (const k of CROP_CONCEPTS)
    for (const t of k.constituents) {
      if (!t.identitySlug) continue;
      linked.add(`${k.slug}|${t.identitySlug}`);
    }
  for (const c of PUBLISHED_CONTENT) {
    if (c.contentType !== 'crop') continue;
    const names =
      (c as unknown as { alternativeNames?: string[] }).alternativeNames ?? [];
    /**
     * The same name listed twice.
     *
     * Found on the arabica coffee page, which carried "Coffee", "coffee" and
     * "Coffee crop" — three entries for one claim, which is what repeatedly
     * asserting a name to a search engine looks like rather than what naming
     * a crop looks like.
     */
    const seenNames = new Set<string>();
    for (const n of names) {
      const key = String(n).toLowerCase().trim();
      if (seenNames.has(key))
        fail(
          `crop "${c.slug}" lists the alternative name "${n}" more than once`,
        );
      seenNames.add(key);
    }
    for (const n of names) {
      const owner = cropTitles.get(String(n).toLowerCase());
      if (!owner || owner === c.slug) continue;
      if (linked.has(`${c.slug}|${owner}`)) continue;
      fail(
        `crop "${c.slug}" lists "${n}" as an alternative name, which is the title of crop "${owner}" — two published crops are not the same crop, and no concept record links them`,
      );
    }
  }
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
