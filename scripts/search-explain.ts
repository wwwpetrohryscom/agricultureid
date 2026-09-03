/**
 * Wave 46 §48 — why a document ranked where it did.
 *
 * Development and test only. The report reads the same `parts` object the
 * ranker built the score from, and asserts that the parts add up to the score
 * that was actually used, so it cannot become a confident wrong answer about
 * the engine's behaviour. Nothing here is rendered to a reader and no debug
 * data is shipped: the search page returns results, not arithmetic.
 *
 *   npm run search:explain -- "wheat cultivar"
 *   npm run search:explain -- "tart cherry" 8
 */
import { search, FIELD_WEIGHT, tokenize } from '../lib/search/engine';
import { benchmarkIndex } from '../lib/search/benchmark';
import type { SearchDoc } from '../types/search';

const query = process.argv[2];
if (!query) {
  console.error('usage: npm run search:explain -- "<query>" [n]');
  process.exit(2);
}
const n = Number(process.argv[3] ?? 5);

const index = benchmarkIndex();
const res = search(index, query, { limit: n, explain: true });

/** Which fields of a document actually carry a query token, and at what weight. */
function fieldsCarrying(doc: SearchDoc, token: string): string[] {
  const out: string[] = [];
  const has = (text: string | undefined) =>
    !!text && tokenize(text).includes(token);
  if (has(doc.title)) out.push(`title(${FIELD_WEIGHT.title})`);
  if ((doc.names ?? []).some(has)) out.push(`names(${FIELD_WEIGHT.names})`);
  if (has(doc.scientificName))
    out.push(`scientificName(${FIELD_WEIGHT.scientificName})`);
  if (has(doc.parent)) out.push(`parent(${FIELD_WEIGHT.parent})`);
  if (has(doc.category)) out.push(`category(${FIELD_WEIGHT.category})`);
  if (has(doc.country)) out.push(`country(${FIELD_WEIGHT.country})`);
  if (has(doc.region)) out.push(`region(${FIELD_WEIGHT.region})`);
  if ((doc.relationLabels ?? []).some(has))
    out.push(`relationLabels(${FIELD_WEIGHT.relationLabels})`);
  if ((doc.sources ?? []).some(has))
    out.push(`sources(${FIELD_WEIGHT.sources})`);
  if (has(doc.summary)) out.push(`summary(${FIELD_WEIGHT.summary})`);
  return out;
}

console.log(`\nquery: ${JSON.stringify(query)}`);
console.log(`tokens: ${tokenize(query).join(' · ')}`);
console.log(`results: ${res.total}\n`);

let mismatches = 0;
res.results.forEach((r, i) => {
  const p = r.parts;
  console.log(
    `${String(i + 1).padStart(2)}. ${r.doc.title}  [${r.doc.type}]  score ${r.score.toFixed(2)}`,
  );
  console.log(
    `    route ${r.doc.route}  ·  matched via ${r.matchedVia.join(', ')}`,
  );
  if (!p) {
    console.log('    (no breakdown — the ranker did not attach one)');
    return;
  }
  for (const t of tokenize(query)) {
    const contrib = p.perToken[t];
    const fields = fieldsCarrying(r.doc, t);
    console.log(
      `      ${t.padEnd(18)} ${contrib === undefined ? 'no match' : contrib.toFixed(2).padStart(8)}   ${fields.join(' + ') || '(matched via expansion, not literally present)'}`,
    );
  }
  console.log(
    `      ${'raw field score'.padEnd(18)} ${p.rawFieldScore.toFixed(2).padStart(8)}`,
  );
  console.log(
    `      ${'term coverage'.padEnd(18)} ${p.termCoverage.toFixed(2).padStart(8)}   × factor ${p.coverageFactor.toFixed(2)}`,
  );
  console.log(
    `      ${'page-type prior'.padEnd(18)} ${p.typePrior.toFixed(2).padStart(8)}`,
  );
  console.log(
    `      ${'title-exact bonus'.padEnd(18)} ${p.titleExact.toFixed(2).padStart(8)}`,
  );
  console.log(
    `      ${'whole-name bonus'.padEnd(18)} ${p.nameExact.toFixed(2).padStart(8)}`,
  );
  /*
   * Recombined here, NOT by calling the ranker's own function.
   *
   * The first version of this check called `finalScore`, which the ranker also
   * calls, so the two could never disagree: a Wave 46 injection added a
   * constant to that function and the report agreed with the ranking about a
   * score that was wrong. A check that shares its arithmetic with the thing it
   * checks is a rule validating its own constant. The expression below is
   * written out once more, deliberately, so that a change to one side and not
   * the other is what fails.
   */
  const recomputed =
    p.rawFieldScore * p.coverageFactor * p.titleCoverageFactor * p.typePrior +
    p.titleExact +
    p.nameExact;
  const agrees = Math.abs(recomputed - r.score) < 1e-9;
  if (!agrees) mismatches++;
  console.log(
    `      ${'= final'.padEnd(18)} ${recomputed.toFixed(2).padStart(8)}   ${agrees ? '(agrees with the ranking)' : 'MISMATCH — the report and the ranking disagree'}`,
  );
  console.log(
    `      tiebreaks: anchor=${r.doc.route.includes('#') ? 'yes' : 'no'} inbound=${r.doc.inboundRefs ?? 0} title="${r.doc.title}"`,
  );
  console.log('');
});

/*
 * The report is only worth having if it is the same arithmetic the ranker ran.
 * This is checked rather than assumed, because a breakdown that does not add up
 * to the score is how a debug view starts lying.
 */
if (mismatches) {
  console.error(
    `  FAILED — ${mismatches} result(s) whose breakdown does not sum to the score used for ranking\n`,
  );
  process.exit(1);
}
