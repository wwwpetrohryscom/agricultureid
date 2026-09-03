/**
 * Measuring whether an article carries a page.
 *
 * Word count alone does not answer that. A two-thousand-word page assembled
 * from the same eleven paragraphs as every other crop is thin; a nine-hundred
 * word page with eleven authored sections, six sources and its own limitations
 * is not. So depth is measured on several independent axes, and the
 * template-similarity check below is what stops the others being gamed by
 * volume.
 */
import type { AnyContent } from '@/types/content';
import { stripStandingPhrases } from '@/lib/crops/editorial-boilerplate';

export interface DepthMeasures {
  words: number;
  sections: number;
  /** Sections whose prose is more than a caption. */
  substantiveSections: number;
  keyFacts: number;
  sources: number;
  limitations: number;
  /** Typed cross-type links that resolve. */
  connections: number;
  /** Highest five-word-shingle overlap with any other crop article. */
  maxSimilarity: number;
  mostSimilarTo?: string;
}

/**
 * The threshold above which a pair is worth a human looking at it.
 *
 * Calibrated against the corpus rather than picked: across 153 crop articles
 * the median pair overlaps at 0.014 and the 99th percentile at 0.057.
 *
 * What the pairs above the line turned out to be is worth stating plainly,
 * because it is not what was first assumed. They are all closely related crops
 * — peach and plum, lemon and lime, blackberry and raspberry — and the easy
 * reading is that adjacent crops naturally share agronomic vocabulary. That
 * reading is wrong. Every one of the seventeen pairs above this line shares an
 * unbroken identical run of 20 to 49 words: whole sentences about aphids, about
 * fertiliser timing, about waterlogging, reused verbatim between pages. Shared
 * vocabulary and a reused paragraph produce a similar Jaccard score and are
 * completely different editorial facts, which is why `longestSharedRun` below
 * exists and why the flagged pairs are pinned in a register rather than waved
 * through as expected.
 */
export const SIMILARITY_REVIEW_THRESHOLD = 0.12;

/**
 * The longest unbroken run of identical words shared by two articles.
 *
 * This is the measure that separates the two things an overlap score cannot:
 * two pages about related crops legitimately use the same terms, and a run of
 * thirty identical words in sequence is a copied sentence. Anything at or above
 * this many words is prose reuse, not vocabulary.
 */
export const SHARED_RUN_IS_PROSE = 12;

/**
 * Text out of the content block shapes the corpus uses.
 *
 * Every shape has to be handled explicitly. The corpus has 305 list blocks
 * whose items are strings and 153 whose items are `{ term, description }`
 * definition pairs; joining the second kind naively yields "[object Object]"
 * for every entry, which reads as words to a counter and as shared phrasing to
 * a similarity metric. An unrecognised shape therefore contributes nothing
 * rather than a placeholder — measuring less is safe, measuring noise is not.
 */
export function blockText(blocks: unknown): string {
  if (!Array.isArray(blocks)) return '';
  return blocks
    .map((b) => {
      if (typeof b === 'string') return b;
      const o = b as Record<string, unknown>;
      if (typeof o.text === 'string') return o.text;
      if (typeof o.content === 'string') return o.content;
      if (Array.isArray(o.items)) return itemsText(o.items);
      return '';
    })
    .join(' ');
}

function itemsText(items: unknown[]): string {
  return items
    .map((i) => {
      if (typeof i === 'string') return i;
      if (!i || typeof i !== 'object') return '';
      const o = i as Record<string, unknown>;
      return [o.term, o.description, o.label, o.value, o.text]
        .filter((v): v is string => typeof v === 'string')
        .join(' ');
    })
    .filter(Boolean)
    .join(' ');
}

export function articleText(item: AnyContent): string {
  const c = item as unknown as Record<string, unknown>;
  const intro = blockText(c.introduction);
  const secs = Array.isArray(c.sections)
    ? (c.sections as Record<string, unknown>[])
        .map((s) => blockText(s.body))
        .join(' ')
    : '';
  return `${intro} ${secs}`.trim();
}

/**
 * Every prose field a reader sees, not just the body.
 *
 * `articleText` is the body — introduction and sections — because that is what
 * depth and similarity are measured on, and it must stay that. It is the wrong
 * text for an INTEGRITY rule. A Wave 44 injection put "one of the world's most
 * important leaf vegetables, grown at scale on every continent" into a crop's
 * `summary` and every prose gate passed, because the summary is not in the
 * body: not the corpus-coverage rule, not the quantitative-claim rule, not the
 * standing-language measurement. The summary is the field the search index
 * weights highest and the first sentence a reader is shown.
 *
 * `geographicScope` and `climateContext` are here for the same reason. They are
 * exactly where a claim about range and suitability would go, which is what
 * §19 of the Wave 44 brief warns a calendar-driven wave against.
 */
export function fullProseText(item: AnyContent): string {
  const c = item as unknown as Record<string, unknown>;
  const extra = [c.summary, c.geographicScope, c.climateContext]
    .filter((x): x is string => typeof x === 'string')
    .join(' ');
  const limitations = Array.isArray(c.limitations)
    ? (c.limitations as unknown[])
        .filter((x) => typeof x === 'string')
        .join(' ')
    : '';
  return `${extra} ${articleText(item)} ${limitations}`.trim();
}

/**
 * Normalised text for comparison, with the crop's OWN names removed.
 *
 * Without that removal every comparison is dominated by how often each page
 * says its own name, and two pages about different plants look different for
 * the least interesting reason. Stripping the names measures the prose around
 * the subject, which is where boilerplate would live.
 */
export function comparableText(item: AnyContent): string {
  const c = item as unknown as Record<string, unknown>;
  const names = [
    String(c.title ?? ''),
    ...((c.alternativeNames as string[] | undefined) ?? []),
    String(c.scientificName ?? ''),
  ]
    .flatMap((n) => n.split(/[\s,();]+/))
    .filter((w) => w.length > 3)
    .map((w) => w.toLowerCase());

  let t = articleText(item).toLowerCase();
  for (const n of new Set(names)) t = t.split(n).join(' ');
  return stripStandingPhrases(
    t
      .replace(/[^a-z ]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim(),
  );
}

function shingles(t: string, k = 5): Set<string> {
  const w = t.split(' ');
  const out = new Set<string>();
  for (let i = 0; i + k <= w.length; i++) out.add(w.slice(i, i + k).join(' '));
  return out;
}

function jaccard(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 || b.size === 0) return 0;
  let shared = 0;
  for (const x of a) if (b.has(x)) shared++;
  return shared / (a.size + b.size - shared);
}

/**
 * Similarity of every crop article to every other, measured once.
 *
 * Deterministic and explainable: five-word shingles, Jaccard overlap, names
 * removed. It is not a detector of anything generative — it answers one
 * question, "do these two pages share long runs of wording", and a high answer
 * is a prompt for a human to look, never a reason to delete a page.
 */
export function similarityMatrix(
  items: AnyContent[],
): Map<string, { max: number; to?: string }> {
  const out = new Map<string, { max: number; to?: string }>();
  for (const i of items)
    out.set((i as unknown as { slug: string }).slug, { max: 0 });
  for (const p of allPairs(items)) {
    const a = out.get(p.a)!;
    const b = out.get(p.b)!;
    if (p.overlap > a.max) out.set(p.a, { max: p.overlap, to: p.b });
    if (p.overlap > b.max) out.set(p.b, { max: p.overlap, to: p.a });
  }
  return out;
}

export interface SimilarPair {
  a: string;
  b: string;
  overlap: number;
  /** Longest unbroken identical word run; only computed for flagged pairs. */
  longestRun: number;
  longestRunText?: string;
}

export function longestSharedRun(
  a: string,
  b: string,
): { length: number; text: string } {
  const x = a.split(' ');
  const y = b.split(' ');
  const index = new Map<string, number[]>();
  y.forEach((w, i) => {
    const l = index.get(w);
    if (l) l.push(i);
    else index.set(w, [i]);
  });
  let best = 0;
  let text = '';
  for (let i = 0; i < x.length; i++)
    for (const j of index.get(x[i]!) ?? []) {
      let n = 0;
      while (i + n < x.length && j + n < y.length && x[i + n] === y[j + n]) n++;
      if (n > best) {
        best = n;
        text = x.slice(i, i + n).join(' ');
      }
    }
  return { length: best, text };
}

function allPairs(items: AnyContent[]): SimilarPair[] {
  const prepared = items.map((i) => ({
    slug: (i as unknown as { slug: string }).slug,
    sh: shingles(comparableText(i)),
  }));
  const out: SimilarPair[] = [];
  for (let i = 0; i < prepared.length; i++)
    for (let j = i + 1; j < prepared.length; j++) {
      const [a, b] = [prepared[i]!.slug, prepared[j]!.slug].sort();
      out.push({
        a: a!,
        b: b!,
        overlap: jaccard(prepared[i]!.sh, prepared[j]!.sh),
        longestRun: 0,
      });
    }
  return out;
}

/**
 * Every pair of articles at or above the review threshold, in one derivation.
 *
 * The gate and the report both read this, so the register of reviewed pairs is
 * checked against exactly the pairs the metric flags — never against a second,
 * drifting computation of the same thing.
 */
export function flaggedPairs(items: AnyContent[]): SimilarPair[] {
  const text = new Map(
    items.map((i) => [
      (i as unknown as { slug: string }).slug,
      comparableText(i),
    ]),
  );
  return allPairs(items)
    .filter((p) => p.overlap >= SIMILARITY_REVIEW_THRESHOLD)
    .map((p) => {
      const r = longestSharedRun(text.get(p.a) ?? '', text.get(p.b) ?? '');
      return { ...p, longestRun: r.length, longestRunText: r.text };
    })
    .sort((x, y) => y.overlap - x.overlap);
}

/**
 * Every pair of crop articles that shares a run of at least
 * `SHARED_RUN_IS_PROSE` words, found by shingling rather than by overlap.
 *
 * `flaggedPairs` filters on Jaccard overlap first and only then measures the
 * shared run, which means a long verbatim paragraph inside two articles that
 * are otherwise about different plants is never measured at all. Wave 31 wrote
 * down that Jaccard cannot tell vocabulary from a copied paragraph; the filter
 * order quietly reintroduced the same blind spot, and a Wave 41 injection
 * copied a whole paragraph from cherry to sour cherry and passed every gate.
 *
 * Shingling is the direct test: hash every window of N words in every article
 * and report the windows that appear under two different slugs. Linear in the
 * corpus, and it detects exactly the thing the register is for.
 */
export function sharedRunPairs(
  items: AnyContent[],
  minRun = SHARED_RUN_IS_PROSE,
): { a: string; b: string; run: number; text: string }[] {
  const byShingle = new Map<string, Set<string>>();
  const words = new Map<string, string[]>();
  for (const item of items) {
    const slug = (item as unknown as { slug: string }).slug;
    const w = comparableText(item).split(' ').filter(Boolean);
    words.set(slug, w);
    for (let i = 0; i + minRun <= w.length; i += 1) {
      const key = w.slice(i, i + minRun).join(' ');
      const set = byShingle.get(key) ?? new Set<string>();
      set.add(slug);
      byShingle.set(key, set);
    }
  }
  const best = new Map<string, { run: number; text: string }>();
  for (const [key, slugs] of byShingle) {
    if (slugs.size < 2) continue;
    const list = [...slugs].sort();
    for (let i = 0; i < list.length; i += 1)
      for (let j = i + 1; j < list.length; j += 1) {
        const k = `${list[i]}::${list[j]}`;
        const prev = best.get(k);
        if (!prev || minRun > prev.run) best.set(k, { run: minRun, text: key });
      }
  }
  return [...best].map(([k, v]) => {
    const [a, b] = k.split('::') as [string, string];
    const run = longestSharedRun(
      (words.get(a) ?? []).join(' '),
      (words.get(b) ?? []).join(' '),
    );
    return { a, b, run: run.length, text: run.text || v.text };
  });
}

export function measureDepth(
  item: AnyContent,
  similarity: { max: number; to?: string },
): DepthMeasures {
  const c = item as unknown as Record<string, unknown>;
  const sections = Array.isArray(c.sections)
    ? (c.sections as Record<string, unknown>[])
    : [];
  const text = articleText(item);
  return {
    words: text.split(/\s+/).filter(Boolean).length,
    sections: sections.length,
    // A section with under 25 words is a caption, not a section. Counting
    // those would let a page reach any section count by adding stubs.
    substantiveSections: sections.filter(
      (s) => blockText(s.body).split(/\s+/).filter(Boolean).length >= 25,
    ).length,
    keyFacts: Array.isArray(c.keyFacts) ? c.keyFacts.length : 0,
    sources: Array.isArray(c.sourceReferences) ? c.sourceReferences.length : 0,
    limitations: Array.isArray(c.limitations) ? c.limitations.length : 0,
    connections: Array.isArray(c.connections) ? c.connections.length : 0,
    maxSimilarity: similarity.max,
    mostSimilarTo: similarity.to,
  };
}

/**
 * What a published crop article has to carry.
 *
 * Set at, not above, what the weakest existing article already manages, so the
 * gate describes the standard the corpus actually holds rather than an
 * aspiration nothing meets. Measured across the 153 published crop articles,
 * the floor is: 503 words (sage), 9 substantive sections (basil), 6 key facts
 * and 2 limitations (alfalfa), 4 sources (aloe vera). These sit a little under
 * that floor so an ordinary copy edit cannot trip the gate, and well above
 * where they were first set — the first draft of these numbers was calibrated
 * against a word count inflated by "[object Object]" tokens from definition
 * lists, and was therefore describing a weaker corpus than the real one.
 */
export const DEPTH_REQUIREMENTS = {
  minWords: 450,
  minSubstantiveSections: 8,
  minKeyFacts: 5,
  minSources: 4,
  minLimitations: 2,
} as const;
