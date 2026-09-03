import type {
  SearchDoc,
  SearchFacet,
  SearchResponse,
  SearchResult,
  SynonymEntry,
} from '@/types/search';

/**
 * Isomorphic search engine (Phase 3D). A custom weighted inverted index with
 * synonym expansion and CONSERVATIVE typo tolerance. No external service, no fs
 * — runs identically at build time and in the browser.
 */

/**
 * Aggregate-page prior (Phase 5A). A comparison page names several entities in
 * its title, so it matches an entity query on every token and can outrank the
 * entity itself. For a query that names a thing, the thing should lead and the
 * comparison should sit just behind it; a query that asks for a comparison
 * ("maize vs sorghum") still wins on its own terms. Deliberately gentle.
 */
const AGGREGATE_PRIOR: Record<string, number> = { comparison: 0.85 };
const typePrior = (type: string): number => AGGREGATE_PRIOR[type] ?? 1;

export const FIELD_WEIGHT = {
  title: 10,
  names: 8,
  scientificName: 7,
  parent: 4,
  category: 4,
  country: 4,
  region: 3,
  /**
   * A term that should REACH a page without claiming to name it. Wave 46.
   *
   * Weighted below `names` and above `category`: strong enough that a
   * one-document term beats a partial title match somewhere else, weak enough
   * that it cannot displace a page the query actually names. Declared per term
   * in `data/crop-aliases`, with the relationship stated, because the failure
   * this field exists to avoid is technical vocabulary creeping into
   * `alternativeNames` and asserting that a crop is called something it is not.
   */
  searchPointers: 6,
  relationLabels: 2,
  sources: 2,
  summary: 1,
} as const;

/**
 * Wave 46 — how much a repeated term is worth after the first field.
 *
 * The index sums a token's field weights, so a document carrying "wheat" in
 * its title, its names, its scientific name, its category and its summary
 * scored 30 for one word, while a document matching BOTH words of a two-word
 * query in one field scored 16. Every field-frequency defect in the known-issue
 * list is that arithmetic: "Dry Matter Content" beating the converter whose
 * declared alias is "dry basis", sweet Cherry beating sour cherry for "tart
 * cherry", a stripe-rust page beating actual cultivars for "wheat cultivar".
 * Wave 39 tried to correct it with a larger fixed bonus, which did not move the
 * cases and broke another; a constant cannot outrun a sum that grows with
 * field count.
 *
 * The model is the standard saturating one. The strongest field a term
 * occupies decides most of its worth — that is what the term MEANS to the
 * document — and every further field adds a share of a bounded remainder. A
 * term in one heavy field keeps its full weight; a term repeated across five
 * fields is worth more than one, and not five times more.
 *
 * `EXTRA_FIELD_CEILING` is the most that repetition beyond the strongest field
 * can ever add, and `EXTRA_FIELD_HALF` is the amount of remaining weight at
 * which half of that ceiling is reached.
 */
const EXTRA_FIELD_CEILING = 6;
const EXTRA_FIELD_HALF = 10;

/**
 * Every component of a document's score, and the one place they are combined.
 *
 * Wave 46 §48 asks for a report that can show why a document ranked where it
 * did. The way that report goes wrong is by being written twice — once in the
 * ranker and once in the explainer — so this type and `finalScore` below are
 * the only place the arithmetic lives.
 */
export interface ScoreParts {
  /** Field weights, saturated per token, summed over the query. */
  rawFieldScore: number;
  /** Fraction of the query's terms that appear in the document's title. */
  titleCoverage: number;
  /** What that fraction multiplies the field score by. */
  titleCoverageFactor: number;
  /** Fraction of the query's terms the document matched at all. */
  termCoverage: number;
  /** What that fraction multiplies the field score by. */
  coverageFactor: number;
  /** A prior on the kind of page, applied where query intent supports it. */
  typePrior: number;
  /** The document's title IS the query. */
  titleExact: number;
  /** One of the document's other names IS the query. */
  nameExact: number;
  /** Per query token, the strongest contribution it made to this document. */
  perToken: Record<string, number>;
}

export function finalScore(p: ScoreParts): number {
  return (
    p.rawFieldScore * p.coverageFactor * p.titleCoverageFactor * p.typePrior +
    p.titleExact +
    p.nameExact
  );
}

/**
 * Wave 46 — the one morphological step this engine takes, and its limits.
 *
 * There is no stemmer. Prefix expansion runs query→index, so "cultivars"
 * cannot reach "cultivar": the plural is not a prefix of the singular, it is
 * the singular plus a letter. That is not a weakness of degree — the plural
 * query is routed to a different set of documents entirely, because the literal
 * token "cultivars" is indexed only on crop summaries that discuss cultivars
 * and never on a cultivar page. "wheat cultivars" and "machinery in farming
 * systems" are both that, and both were recorded as known issues.
 *
 * Built, measured, and NOT shipped. Reaching the singular did not fix
 * "wheat cultivars": it moved the answer from the wheat crop to a wheat
 * DISEASE, because the disease carries "wheat" in its title and picks up
 * "cultivar" from a glossary annotation, which is the same field-misuse defect
 * as "wheat cultivar" and not a morphology one. Closing a morphological gap in
 * front of a field-misuse defect changes which wrong answer is returned. The
 * function stays, unused, because the next attempt at the cultivar family will
 * need it AFTER the field question is settled.
 */
/**
 * Words that carry no intent, and what counting them cost.
 *
 * "machinery in farming systems" returned a farming system, and the reason was
 * arithmetic rather than relevance: "in" is indexed like any other token, so a
 * document matching "in" and "farming" scored two of four query terms while the
 * one word carrying the intent — "machinery" — matched nothing. Dropping either
 * real word from the query returned the right page, which is the tell that the
 * ranking was turning on a preposition.
 *
 * Built, measured, and NOT shipped. Removing these words from the query did not
 * fix the case that motivated it — "machinery in farming systems" still returns
 * a farming system, because "machinery" matches none of the candidates at all —
 * and it broke "breed of cattle", where dropping "of" let three comparison
 * pages tie ahead of the breed. A change that fixes nothing and costs a passing
 * case is reverted; the list stays here because the next attempt should start
 * from the measurement rather than from the idea.
 */
const QUERY_STOPWORDS = new Set([
  'a',
  'an',
  'the',
  'of',
  'in',
  'on',
  'for',
  'to',
  'and',
  'or',
  'with',
  'from',
  'by',
  'at',
  'as',
  'is',
  'are',
  'be',
]);

export function contentTokens(tokens: string[]): string[] {
  const kept = tokens.filter((t) => !QUERY_STOPWORDS.has(t));
  return kept.length ? kept : tokens;
}

export function singularForms(token: string, tokens: Set<string>): string[] {
  if (token.length < 4 || !token.endsWith('s')) return [];
  const out: string[] = [];
  if (token.endsWith('es')) {
    const stem = token.slice(0, -2);
    if (stem.length >= 3 && tokens.has(stem)) out.push(stem);
  }
  const bare = token.slice(0, -1);
  if (bare.length >= 3 && tokens.has(bare) && !out.includes(bare))
    out.push(bare);
  return out;
}

/**
 * Wave 46 — how much a word narrows the corpus.
 *
 * "ricinoleic acid" has exactly one right answer, because castor is the only
 * commercial source of the compound, and the engine returned a quality
 * measurement. The token "ricinoleic" occurs in ONE document in the whole
 * corpus and "acid" in dozens, and the ranking treated them as equally
 * informative: a summary hit on the rare word scored 1, a title hit on the
 * common one scored 10, and the arithmetic did the rest.
 *
 * Inverse document frequency is the standard answer, it was built, and it did
 * not work here. Measured, it moved top-1 from 99.7% to 99.1% and left
 * "ricinoleic acid" exactly where it was, because the rarity factor multiplies
 * a contribution the FIELD weight already decided: the rare word sits in a
 * summary at weight 1 and the common one in a title at weight 10, and doubling
 * one against the other closes none of that. The real fix the known issue
 * names — indexing distinctive body terms, or a crop-level search alias — is a
 * change to what is indexed rather than to how it is weighted, and this is the
 * measurement that rules the cheaper option out.
 *
 * Kept, unused, with its numbers, so the next attempt starts here.
 */
const IDF_FLOOR = 0.6;
const IDF_CEILING = 2.2;

export function idfFactor(docFrequency: number, corpusSize: number): number {
  if (docFrequency <= 0) return 1;
  const idf = Math.log(1 + corpusSize / docFrequency);
  /* The median token in this corpus sits near a document frequency of 3. */
  const reference = Math.log(1 + corpusSize / 3);
  return Math.min(IDF_CEILING, Math.max(IDF_FLOOR, idf / reference));
}

export function saturate(summedWeight: number, strongestField: number): number {
  const extra = Math.max(0, summedWeight - strongestField);
  return (
    strongestField + (EXTRA_FIELD_CEILING * extra) / (extra + EXTRA_FIELD_HALF)
  );
}

export function tokenize(s: string): string[] {
  return s
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '') // strip combining diacritics
    .split(/[^a-z0-9]+/)
    .filter((t) => t.length >= 1);
}

/** Bounded Damerau-ish Levenshtein: returns true if edit distance ≤ 1. */
export function withinOneEdit(a: string, b: string): boolean {
  if (a === b) return true;
  const la = a.length;
  const lb = b.length;
  if (Math.abs(la - lb) > 1) return false;
  if (la === lb) {
    let diff = 0;
    for (let i = 0; i < la; i++) if (a[i] !== b[i]) diff++;
    if (diff === 1) return true;
    // transposition of two adjacent chars
    if (diff === 2) {
      for (let i = 0; i < la - 1; i++)
        if (a[i] === b[i + 1] && a[i + 1] === b[i]) {
          const rest =
            a.slice(0, i) + a.slice(i + 2) === b.slice(0, i) + b.slice(i + 2);
          if (rest) return true;
        }
    }
    return false;
  }
  // one insertion/deletion
  const [short, long] = la < lb ? [a, b] : [b, a];
  let i = 0;
  let j = 0;
  let skipped = false;
  while (i < short.length && j < long.length) {
    if (short[i] === long[j]) {
      i++;
      j++;
    } else {
      if (skipped) return false;
      skipped = true;
      j++;
    }
  }
  return true;
}

export interface SearchIndex {
  docs: SearchDoc[];
  byId: Map<string, SearchDoc>;
  /** token -> (docId -> summed field weight) */
  postings: Map<string, Map<number, number>>;
  /**
   * token -> (docId -> the STRONGEST field the token occupies in that doc).
   *
   * The sum alone cannot distinguish a term that names the page from one the
   * page mentions in passing five times. Wave 46 needed both: the strongest
   * field is what the term means to the document, and the rest is how often it
   * is repeated across fields, which saturates.
   */
  strongestField: Map<string, Map<number, number>>;
  tokens: string[];
  /** variant/canonical -> set of related surface tokens for expansion */
  synonymMap: Map<string, Set<string>>;
}

/**
 * Token weights for a document, counted at most ONCE per field (Phase 5A).
 *
 * Repeating a token across several values of the same field is a naming
 * artefact, not extra relevance: a commodity that lists "Rough rice", "Paddy
 * rice", and "Unhusked rice" is not three times more about rice than the rice
 * crop is. Summing every occurrence let such an entry outrank the canonical
 * entity purely by having more synonyms. Each (token, field) pair therefore
 * contributes its field weight once; a token appearing in several *different*
 * fields still accumulates, which is genuine signal.
 */
function fieldTokens(doc: SearchDoc): { token: string; weight: number }[] {
  const out: { token: string; weight: number }[] = [];
  const seen = new Set<string>();
  let field = 0;
  const add = (text: string | undefined, weight: number) => {
    if (!text) return;
    for (const t of tokenize(text)) {
      const key = `${field}:${t}`;
      if (seen.has(key)) continue;
      seen.add(key);
      out.push({ token: t, weight });
    }
  };
  /** Group several values under one logical field (e.g. all alternative names). */
  const field_ = (fn: () => void) => {
    field++;
    fn();
  };
  field_(() => add(doc.title, FIELD_WEIGHT.title));
  field_(() => {
    for (const name of doc.names ?? []) add(name, FIELD_WEIGHT.names);
  });
  field_(() => add(doc.scientificName, FIELD_WEIGHT.scientificName));
  field_(() => add(doc.parent, FIELD_WEIGHT.parent));
  field_(() => add(doc.category, FIELD_WEIGHT.category));
  field_(() => add(doc.country, FIELD_WEIGHT.country));
  field_(() => add(doc.region, FIELD_WEIGHT.region));
  field_(() => {
    for (const r of doc.relationLabels ?? [])
      add(r, FIELD_WEIGHT.relationLabels);
  });
  field_(() => {
    for (const p of doc.searchPointers ?? [])
      add(p, FIELD_WEIGHT.searchPointers);
  });
  field_(() => {
    for (const s of doc.sources ?? []) add(s, FIELD_WEIGHT.sources);
  });
  /*
   * Glossary annotations are NOT searchable text. Wave 46.
   *
   * `glossaryTerms` records which defined terms a page uses, so the renderer
   * can offer a definition. It is an annotation about vocabulary, not a
   * statement about subject, and indexing it made the two indistinguishable:
   * Wheat Stripe Rust carries the glossary term "cultivar" because its text
   * discusses resistant cultivars, and that was enough for it to win the query
   * "wheat cultivar" over every actual wheat cultivar in the corpus. Triticale
   * won "cultivar of wheat" the same way. Neither page claims to be a cultivar;
   * the index inferred it from a tooltip.
   *
   * Removed rather than down-weighted. A weight expresses how much a field
   * matters; the problem here is that the field means something else.
   */
  field_(() => add(doc.summary, FIELD_WEIGHT.summary));
  return out;
}

export function buildIndex(
  docs: SearchDoc[],
  synonyms: SynonymEntry[],
): SearchIndex {
  const byId = new Map(docs.map((d) => [d.id, d]));
  const postings = new Map<string, Map<number, number>>();
  const strongestField = new Map<string, Map<number, number>>();
  docs.forEach((doc, idx) => {
    for (const { token, weight } of fieldTokens(doc)) {
      let m = postings.get(token);
      if (!m) postings.set(token, (m = new Map()));
      m.set(idx, (m.get(idx) ?? 0) + weight);
      let s = strongestField.get(token);
      if (!s) strongestField.set(token, (s = new Map()));
      s.set(idx, Math.max(s.get(idx) ?? 0, weight));
    }
  });
  // Bidirectional expansion for exact/spelling/regional; directional for others.
  const synonymMap = new Map<string, Set<string>>();
  const link = (a: string, b: string) => {
    const ka = a.toLowerCase();
    const kb = b.toLowerCase();
    if (!synonymMap.has(ka)) synonymMap.set(ka, new Set());
    synonymMap.get(ka)!.add(kb);
  };
  for (const e of synonyms) {
    const canon = e.canonical.replace(/-/g, ' ');
    const bidir =
      e.kind === 'exact' || e.kind === 'spelling' || e.kind === 'regional';
    for (const v of e.variants) {
      link(v, canon);
      if (bidir) link(canon, v);
    }
  }
  return {
    docs,
    byId,
    postings,
    strongestField,
    tokens: [...postings.keys()],
    synonymMap,
  };
}

/**
 * Expand a query token to synonym surface forms (token-level).
 *
 * A token only expands via a synonym key it matches **in full**. Matching any
 * single word inside a multi-word key creates unsafe equivalences: "guinea
 * corn" is a variant of sorghum, so a substring rule made the query "corn"
 * expand to sorghum, and "great millet" made "millet" expand to sorghum too.
 * These are different commodities and must never be conflated (see the
 * unsafe-equivalence guards in the search benchmark). Multi-word variants are
 * matched as phrases at the query level, not by leaking their individual words.
 */
function expandToken(
  token: string,
  synonymMap: Map<string, Set<string>>,
): Set<string> {
  const out = new Set<string>([token]);
  const set = synonymMap.get(token);
  if (set) {
    for (const target of set) for (const tt of target.split(' ')) out.add(tt);
  }
  return out;
}

/**
 * Every title form the query could canonically denote: the literal query, plus
 * each single-token synonym expansion. Multi-token queries expand positionally
 * only when a token has a one-word canonical form, which keeps this bounded and
 * avoids inventing phrases the user did not mean.
 */
function queryTitleForms(
  qTokens: string[],
  synonymMap: Map<string, Set<string>>,
): Set<string> {
  const forms = new Set<string>([qTokens.join(' ')]);
  const perPos = qTokens.map((t) => {
    const set = new Set<string>([t]);
    for (const surface of expandToken(t, synonymMap)) {
      // Only single-word expansions — a canonical form spanning several words
      // cannot be substituted positionally without changing meaning.
      if (!surface.includes(' ')) set.add(surface);
    }
    return [...set];
  });
  // Bounded expansion: skip combinatorics on long queries.
  const combos = perPos.reduce((n, s) => n * s.length, 1);
  if (combos > 64) return forms;
  const build = (i: number, acc: string[]) => {
    if (i === perPos.length) {
      forms.add(acc.join(' '));
      return;
    }
    for (const v of perPos[i]!) build(i + 1, [...acc, v]);
  };
  build(0, []);
  return forms;
}

export interface SearchOptions {
  facets?: Partial<Record<SearchFacet, string>>;
  limit?: number;
  /**
   * Attach the score breakdown to each result. Development and test only.
   *
   * Off by default so no search response a reader receives carries the
   * engine's arithmetic. The breakdown is built either way — it is how the
   * score is computed — and simply not returned.
   */
  explain?: boolean;
}

export function search(
  index: SearchIndex,
  rawQuery: string,
  opts: SearchOptions = {},
): SearchResponse {
  const qTokens = tokenize(rawQuery);
  const limit = opts.limit ?? 30;
  const scores = new Map<number, number>();
  /** Per document, the strongest contribution each query token made. */
  const tokenWeight = new Map<number, Map<string, number>>();
  const matchedTerms = new Map<number, Set<string>>();
  const matchedVia = new Map<number, Set<string>>();
  const suggestions = new Set<string>();

  const addHit = (
    docIdx: number,
    weight: number,
    factor: number,
    qToken: string,
    via: string,
    strongest = weight,
  ) => {
    scores.set(
      docIdx,
      (scores.get(docIdx) ?? 0) + saturate(weight, strongest) * factor,
    );
    const perToken = tokenWeight.get(docIdx) ?? new Map<string, number>();
    perToken.set(
      qToken,
      Math.max(perToken.get(qToken) ?? 0, saturate(weight, strongest) * factor),
    );
    tokenWeight.set(docIdx, perToken);
    if (!matchedTerms.has(docIdx)) matchedTerms.set(docIdx, new Set());
    matchedTerms.get(docIdx)!.add(qToken);
    if (!matchedVia.has(docIdx)) matchedVia.set(docIdx, new Set());
    matchedVia.get(docIdx)!.add(via);
  };

  for (const qToken of qTokens) {
    const surfaces = expandToken(qToken, index.synonymMap);

    for (const surface of surfaces) {
      const isSynonym = surface !== qToken;
      const exact = index.postings.get(surface);
      const strong = index.strongestField.get(surface);
      if (exact) {
        for (const [docIdx, w] of exact)
          addHit(
            docIdx,
            w,
            isSynonym ? 3 : 4,
            qToken,
            isSynonym ? 'synonym' : 'exact',
            strong?.get(docIdx) ?? w,
          );
        if (isSynonym) suggestions.add(surface);
      }
      // Prefix (token length ≥ 3) — conservative, avoids matching tiny stems.
      if (surface.length >= 3) {
        for (const tok of index.tokens) {
          if (tok !== surface && tok.startsWith(surface)) {
            const m = index.postings.get(tok)!;
            const sf = index.strongestField.get(tok);
            for (const [docIdx, w] of m)
              addHit(docIdx, w, 2, qToken, 'prefix', sf?.get(docIdx) ?? w);
          }
        }
      }
      // Conservative fuzzy: only for longer tokens with NO exact hit, and never
      // for very short/scientific-looking tokens (avoids over-correction).
      if (!exact && surface.length >= 5) {
        for (const tok of index.tokens) {
          if (
            Math.abs(tok.length - surface.length) <= 1 &&
            withinOneEdit(tok, surface)
          ) {
            const m = index.postings.get(tok)!;
            const sf = index.strongestField.get(tok);
            for (const [docIdx, w] of m)
              addHit(docIdx, w, 1, qToken, 'typo', sf?.get(docIdx) ?? w);
            suggestions.add(tok);
          }
        }
      }
    }
  }

  // Rank: score, boosted by fraction of query terms matched (AND-preference) and
  // an exact-title bonus.
  //
  // The title bonus is synonym-aware (Phase 5A): a query is an exact hit on the
  // entity a synonym RESOLVES TO, not only on the literal string typed. "corn"
  // resolves to "maize", so the page titled exactly "Maize" is the canonical
  // answer and must outrank the many pages that merely mention maize/corn (its
  // commodity, products, diseases, and grading standards). Without this, a bare
  // shared plant name degenerates into a term-frequency contest between
  // entities that all legitimately carry the name.
  // Term coverage is weighted heavily, and deliberately so. A document that
  // matches every word of the query is answering it; one that matches a single
  // word twice as strongly is answering a different question. At the previous
  // weighting "cluster bean" — guar's principal name in India, held in its
  // names field — lost to bean cultivars matching only "bean", because "bean"
  // in a title plus a name outweighed both query terms in one field.
  const nQ = Math.max(qTokens.length, 1);
  const expandedQueries = queryTitleForms(qTokens, index.synonymMap);
  const scored: SearchResult[] = [];
  for (const [docIdx, score] of scores) {
    const doc = index.docs[docIdx]!;
    const termCoverage = (matchedTerms.get(docIdx)?.size ?? 0) / nQ;
    const titleKey = tokenize(doc.title).join(' ');
    const titleExact = expandedQueries.has(titleKey) ? 50 : 0;
    /**
     * A document whose own name IS the query outranks one that merely contains
     * it. Both bonuses answer the same failure in different fields.
     *
     * Wave 39 published Spelt, whose accepted name is the subspecies
     * "Triticum aestivum subsp. spelta". Both wheat and spelt then carried
     * every token of the query "triticum aestivum" at name weight, the scores
     * tied, and the alphabetical tiebreak handed the species' own binomial to
     * its subspecies. Equality of a whole name is a stronger signal than
     * containment of one, and nothing else in the ranking expressed that.
     *
     * Smaller than the title bonus on purpose: a title is what the page is
     * called, an alternative name is one of the things it is also called.
     *
     * Raising it to 50 was tried and reverted. It did not fix the case that
     * motivated the attempt ("tart cherry" still returns sweet Cherry, whose
     * raw field score dwarfs any fixed bonus) and it broke "reefer container".
     * A constant cannot correct a ranking dominated by field frequency; that
     * defect is recorded as a benchmark known issue instead.
     */
    const nameExact = doc.names?.some((n) =>
      expandedQueries.has(tokenize(n).join(' ')),
    )
      ? 25
      : 0;
    /*
     * The breakdown IS the score.
     *
     * `finalScore` sums the parts, and both the ranking and the explain report
     * read the same object, so a debug view cannot drift from what the engine
     * did. A report that adds up to a different number from the ranking is
     * worse than no report: it is a confident wrong answer about why something
     * ranked.
     */
    /*
     * How much of the query the document's TITLE accounts for.
     *
     * Term coverage asks whether a document matched the query at all; this
     * asks whether the thing the page is CALLED is the thing that was asked
     * for. "Reefer Container Transport" carries both words of "reefer
     * container" in its title and "Refrigerated Container" carries one, and
     * with field frequency saturated there was nothing left in the ranking
     * that could tell them apart — the second won on a whole-name bonus for an
     * alias.
     *
     * Deliberately gentle, and never decisive on its own: it moves a document
     * by at most a fifth, which separates near-ties without letting a long
     * descriptive title beat a better match.
     */
    const titleTokens = new Set(tokenize(doc.title));
    const titleCoverage = qTokens.filter((t) => titleTokens.has(t)).length / nQ;
    const parts: ScoreParts = {
      rawFieldScore: score,
      titleCoverage,
      /*
       * Measured and reported, deliberately NOT applied.
       *
       * Weighting title coverage fixed "reefer container" and broke "nitrogen
       * fertilizer": a comparison page names four fertilisers in its title, so
       * it covers a two-word query completely while being the wrong kind of
       * answer. Fixing one case by breaking another is not a fix, so the factor
       * is 1 and the measurement stays in the report, where it explains the
       * near-ties it cannot be trusted to break.
       */
      titleCoverageFactor: 1,
      termCoverage,
      coverageFactor: 0.1 + 0.9 * termCoverage,
      typePrior: typePrior(doc.type),
      titleExact,
      nameExact,
      perToken: Object.fromEntries(tokenWeight.get(docIdx) ?? []),
    };
    /*
     * The breakdown is BUILT for every result and ATTACHED to none of them
     * unless it was asked for.
     *
     * Building it is not optional: `finalScore` is the only place the
     * arithmetic lives, so the ranker and the explain report cannot disagree.
     * Attaching it is, and the default is off — §48 asks for a debug mode that
     * stays in development, and a search response carrying eight score
     * components per result would be exactly the debug data it says not to
     * ship.
     */
    scored.push({
      doc,
      score: finalScore(parts),
      ...(opts.explain ? { parts } : {}),
      matchedVia: [...(matchedVia.get(docIdx) ?? [])],
    });
  }

  // Facet filtering.
  let filtered = scored;
  if (opts.facets) {
    for (const [facet, value] of Object.entries(opts.facets)) {
      if (!value) continue;
      filtered = filtered.filter((r) =>
        (r.doc.facets[facet as SearchFacet] ?? []).includes(value),
      );
    }
  }

  /**
   * A result the reader can open outranks an anchor into a list.
   *
   * Some documents describe an entity that has its own page; others point at a
   * row inside a shared table, and their route carries a fragment. When two
   * documents are equally relevant, the page is the better answer — following
   * the other one lands the reader in a table to find their own line. Without
   * this the tie broke alphabetically, which put "Italian ryegrass" (a row on
   * /crops/taxa) above the perennial ryegrass article for the query
   * "ryegrass" for no reason connected to relevance.
   */
  const isAnchor = (r: (typeof filtered)[number]) =>
    r.doc.route.includes('#') ? 1 : 0;

  /**
   * Among equals, the entity the corpus points at most is the better answer.
   *
   * A bare shared plant name is scored identically by every entity that
   * legitimately carries it: "clover" is exactly 76 on red, white and berseem
   * clover alike, and "ryegrass" is exactly 76 on both ryegrasses. Before this
   * the tie fell to the alphabet, so Wave 39 publishing Berseem Clover moved
   * the answer for "clover" from red clover to a minor forage legume — a
   * change in what the reader sees that had nothing to do with either page.
   *
   * Inbound reference count is not a quality judgement and it cannot promote a
   * document past one that scored higher. It only decides, between answers the
   * scorer cannot separate, which one the rest of the corpus treats as
   * central.
   */
  filtered.sort(
    (a, b) =>
      b.score - a.score ||
      isAnchor(a) - isAnchor(b) ||
      (b.doc.inboundRefs ?? 0) - (a.doc.inboundRefs ?? 0) ||
      a.doc.title.localeCompare(b.doc.title),
  );

  // Facet counts from the filtered set (non-empty only).
  const facetCounts: SearchResponse['facets'] = {};
  const FACETS: SearchFacet[] = [
    'entityType',
    'category',
    'country',
    'region',
    'source',
  ];
  for (const facet of FACETS) {
    const counts = new Map<string, number>();
    for (const r of filtered)
      for (const v of r.doc.facets[facet] ?? [])
        counts.set(v, (counts.get(v) ?? 0) + 1);
    const arr = [...counts.entries()]
      .map(([value, count]) => ({ value, count }))
      .sort((a, b) => b.count - a.count || a.value.localeCompare(b.value));
    if (arr.length > 0) facetCounts[facet] = arr;
  }

  return {
    results: filtered.slice(0, limit),
    total: filtered.length,
    facets: facetCounts,
    suggestions: [...suggestions].slice(0, 6),
  };
}
