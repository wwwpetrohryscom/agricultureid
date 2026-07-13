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

function fieldTokens(doc: SearchDoc): { token: string; weight: number }[] {
  const out: { token: string; weight: number }[] = [];
  const add = (text: string | undefined, weight: number) => {
    if (!text) return;
    for (const t of tokenize(text)) out.push({ token: t, weight });
  };
  add(doc.title, FIELD_WEIGHT.title);
  for (const name of doc.names ?? []) add(name, FIELD_WEIGHT.names);
  add(doc.scientificName, FIELD_WEIGHT.scientificName);
  add(doc.parent, FIELD_WEIGHT.parent);
  add(doc.category, FIELD_WEIGHT.category);
  add(doc.country, FIELD_WEIGHT.country);
  add(doc.region, FIELD_WEIGHT.region);
  for (const r of doc.relationLabels ?? []) add(r, FIELD_WEIGHT.relationLabels);
  for (const s of doc.sources ?? []) add(s, FIELD_WEIGHT.sources);
  for (const g of doc.glossaryTerms ?? []) add(g, FIELD_WEIGHT.glossaryTerms);
  add(doc.summary, FIELD_WEIGHT.summary);
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

/** Expand a query token to synonym surface forms (token-level). */
function expandToken(
  token: string,
  synonymMap: Map<string, Set<string>>,
): Set<string> {
  const out = new Set<string>([token]);
  for (const [key, set] of synonymMap) {
    const keyTokens = key.split(' ');
    if (keyTokens.includes(token) || key === token) {
      for (const target of set) for (const tt of target.split(' ')) out.add(tt);
    }
  }
  return out;
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
  const nQ = Math.max(qTokens.length, 1);
  const scored: SearchResult[] = [];
  for (const [docIdx, score] of scores) {
    const doc = index.docs[docIdx]!;
    const termCoverage = (matchedTerms.get(docIdx)?.size ?? 0) / nQ;
    const titleExact =
      tokenize(doc.title).join(' ') === qTokens.join(' ') ? 50 : 0;
    scored.push({
      doc,
      score: score * (0.5 + 0.5 * termCoverage) + titleExact,
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
