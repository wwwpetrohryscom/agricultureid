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

const FIELD_WEIGHT = {
  title: 10,
  names: 8,
  scientificName: 7,
  parent: 4,
  category: 4,
  country: 4,
  region: 3,
  relationLabels: 2,
  sources: 2,
  glossaryTerms: 2,
  summary: 1,
} as const;

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
    for (const s of doc.sources ?? []) add(s, FIELD_WEIGHT.sources);
  });
  field_(() => {
    for (const g of doc.glossaryTerms ?? []) add(g, FIELD_WEIGHT.glossaryTerms);
  });
  field_(() => add(doc.summary, FIELD_WEIGHT.summary));
  return out;
}

export function buildIndex(
  docs: SearchDoc[],
  synonyms: SynonymEntry[],
): SearchIndex {
  const byId = new Map(docs.map((d) => [d.id, d]));
  const postings = new Map<string, Map<number, number>>();
  docs.forEach((doc, idx) => {
    for (const { token, weight } of fieldTokens(doc)) {
      let m = postings.get(token);
      if (!m) postings.set(token, (m = new Map()));
      m.set(idx, (m.get(idx) ?? 0) + weight);
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
  return { docs, byId, postings, tokens: [...postings.keys()], synonymMap };
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
}

export function search(
  index: SearchIndex,
  rawQuery: string,
  opts: SearchOptions = {},
): SearchResponse {
  const qTokens = tokenize(rawQuery);
  const limit = opts.limit ?? 30;
  const scores = new Map<number, number>();
  const matchedTerms = new Map<number, Set<string>>();
  const matchedVia = new Map<number, Set<string>>();
  const suggestions = new Set<string>();

  const addHit = (
    docIdx: number,
    weight: number,
    factor: number,
    qToken: string,
    via: string,
  ) => {
    scores.set(docIdx, (scores.get(docIdx) ?? 0) + weight * factor);
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
      if (exact) {
        for (const [docIdx, w] of exact)
          addHit(
            docIdx,
            w,
            isSynonym ? 3 : 4,
            qToken,
            isSynonym ? 'synonym' : 'exact',
          );
        if (isSynonym) suggestions.add(surface);
      }
      // Prefix (token length ≥ 3) — conservative, avoids matching tiny stems.
      if (surface.length >= 3) {
        for (const tok of index.tokens) {
          if (tok !== surface && tok.startsWith(surface)) {
            const m = index.postings.get(tok)!;
            for (const [docIdx, w] of m) addHit(docIdx, w, 2, qToken, 'prefix');
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
            for (const [docIdx, w] of m) addHit(docIdx, w, 1, qToken, 'typo');
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
  const nQ = Math.max(qTokens.length, 1);
  const expandedQueries = queryTitleForms(qTokens, index.synonymMap);
  const scored: SearchResult[] = [];
  for (const [docIdx, score] of scores) {
    const doc = index.docs[docIdx]!;
    const termCoverage = (matchedTerms.get(docIdx)?.size ?? 0) / nQ;
    const titleKey = tokenize(doc.title).join(' ');
    const titleExact = expandedQueries.has(titleKey) ? 50 : 0;
    scored.push({
      doc,
      score:
        score * (0.5 + 0.5 * termCoverage) * typePrior(doc.type) + titleExact,
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

  filtered.sort(
    (a, b) => b.score - a.score || a.doc.title.localeCompare(b.doc.title),
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
