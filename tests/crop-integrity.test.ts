import { describe, expect, it } from 'vitest';
import {
  STANDING_PHRASE_MARKER,
  STANDING_PHRASES,
  STANDING_PHRASE_MIN_SHARE,
  articlesContaining,
  cropArticleCount,
  stripStandingPhrases,
} from '@/lib/crops/editorial-boilerplate';
import {
  DEBT_VERDICTS,
  RESOLVED_SIMILAR_PAIRS,
  REVIEWED_SIMILAR_PAIRS,
  SIMILARITY_VERDICTS,
} from '@/data/crop-identity/similar-pairs';
import {
  SCOPE_DECISIONS,
  SCOPE_OUTCOMES,
} from '@/data/crop-identity/scope-decisions';
import { CONCEPT_BY_SLUG } from '@/data/crop-identity/concepts';
import { IDENTITY_BY_SLUG } from '@/lib/crops/identity';
import { PUBLISHED_CONTENT } from '@/lib/content/registry';
import { articleText, flaggedPairs } from '@/lib/crops/content-depth';

const crops = PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop');

describe('standing language — the corpus repeating itself on purpose', () => {
  it('registers only phrases that are actually corpus-wide', () => {
    // The loophole this closes: a registered phrase is invisible to the
    // similarity metric, so anyone could launder copied prose by declaring it
    // policy. Only frequency stops that, and frequency is recomputed here.
    const floor = Math.ceil(cropArticleCount() * STANDING_PHRASE_MIN_SHARE);
    for (const p of STANDING_PHRASES)
      expect(
        articlesContaining(p.phrase),
        p.phrase.slice(0, 40),
      ).toBeGreaterThanOrEqual(floor);
  });

  it('sits in a real gap rather than at a chosen number', () => {
    // Registered phrases occur far more often than the copied sentences that
    // were rewritten. If that gap ever closes, the threshold is arbitrary and
    // this test should fail rather than the rule quietly becoming a guess.
    const registered = STANDING_PHRASES.map((p) =>
      articlesContaining(p.phrase),
    );
    const copied = articlesContaining(
      'intolerant of prolonged waterlogging which restricts rooting',
    );
    expect(Math.min(...registered)).toBeGreaterThan(copied * 3);
  });

  it('removes registered phrases from a comparison', () => {
    const t = `alpha ${STANDING_PHRASES[0]!.phrase} omega`;
    const stripped = stripStandingPhrases(t);
    expect(stripped).not.toContain(STANDING_PHRASES[0]!.phrase);
    expect(
      stripped.split(' ').filter((w) => w !== STANDING_PHRASE_MARKER),
    ).toEqual(['alpha', 'omega']);
  });

  it('leaves a boundary where a phrase was, so the edges do not weld', () => {
    // Removing a phrase and closing the gap invents a run neither article had.
    // Wave 41 measured 2,407 pairs "sharing" twelve words that were the two
    // halves of the soil-survey sentence pushed together.
    const t = `alpha ${STANDING_PHRASES[0]!.phrase} omega`;
    expect(stripStandingPhrases(t)).toContain(STANDING_PHRASE_MARKER);
  });
});

describe('the prose debt was rewritten, not relabelled', () => {
  it('leaves no pair carrying a debt verdict', () => {
    for (const r of REVIEWED_SIMILAR_PAIRS) {
      expect(SIMILARITY_VERDICTS, `${r.a}/${r.b}`).toContain(r.verdict);
      expect(DEBT_VERDICTS, `${r.a}/${r.b}`).not.toContain(r.verdict);
    }
  });

  it('keeps every rewritten pair below the line', () => {
    const flagged = new Set(
      flaggedPairs(crops).map((p) => [p.a, p.b].sort().join('::')),
    );
    for (const r of RESOLVED_SIMILAR_PAIRS)
      expect(flagged.has([r.a, r.b].sort().join('::')), `${r.a}/${r.b}`).toBe(
        false,
      );
  });

  it('reduced the longest identical run substantially', () => {
    const worst = flaggedPairs(crops)[0];
    const before = Math.max(...RESOLVED_SIMILAR_PAIRS.map((r) => r.runBefore));
    expect(before).toBeGreaterThanOrEqual(62);
    expect(worst!.longestRun).toBeLessThan(before / 2);
  });

  it('did not paraphrase — the rewrites carry facts the originals did not', () => {
    // Cosmetic synonym-spinning would leave the pages saying the same thing in
    // different words. These are claims that are true of one crop and not the
    // other, which is what makes them a rewrite rather than a disguise.
    const text = (s: string) =>
      articleText(crops.find((c) => c.slug === s)!).toLowerCase();
    expect(text('peach')).toContain('short life');
    expect(text('plum')).toContain('sharka');
    expect(text('cherry')).toContain('spotted wing drosophila');
    expect(text('apple')).toContain('replant');
    expect(text('pear')).toContain('quince');
    expect(text('cauliflower')).toContain('riciness');
    expect(text('thyme')).toContain('chemotype');
    expect(text('raspberry')).toContain('suckers');
  });
});

describe('prose may not claim corpus coverage', () => {
  it('keeps coverage claims out of article bodies', () => {
    const FORBIDDEN = [
      'are held separately',
      'verified separately',
      'the corpus holds',
    ];
    for (const c of crops) {
      const t = articleText(c).toLowerCase();
      for (const f of FORBIDDEN)
        expect(t.includes(f), `${c.slug} — "${f}"`).toBe(false);
    }
  });

  it('makes every concept scope claim answerable from structure', () => {
    for (const [slug, k] of CONCEPT_BY_SLUG) {
      const prose = [k.scopeStatement, k.splitCriterion]
        .join(' ')
        .toLowerCase();
      const notHeld = k.constituents.filter((t) => t.heldAs === 'not-held');
      if (notHeld.length)
        expect(
          /not held|holds neither|holds no |holds none|does not hold|cannot be promoted until/.test(
            prose,
          ),
          slug,
        ).toBe(true);
    }
  });
});

describe('scope decisions', () => {
  it('records an outcome and reasoning for each open question', () => {
    expect(SCOPE_DECISIONS.length).toBeGreaterThanOrEqual(2);
    for (const d of SCOPE_DECISIONS) {
      expect(SCOPE_OUTCOMES, d.slug).toContain(d.outcome);
      expect(d.finding.length, d.slug).toBeGreaterThan(120);
      expect(d.wouldChangeIf.length, d.slug).toBeGreaterThan(30);
      expect(d.sourceIds.length, d.slug).toBeGreaterThan(0);
    }
  });

  it('added the macadamia species the old note claimed existed', () => {
    const d = SCOPE_DECISIONS.find((x) => x.slug === 'macadamia')!;
    expect(d.outcome).toBe('ADD_VERIFIED_DATA_ONLY_TAXA');
    for (const s of d.taxaAdded!) {
      const id = IDENTITY_BY_SLUG.get(s);
      expect(id, s).toBeDefined();
      // Both authorities, and they agreed — Principle E is not relaxed to
      // make an old sentence true.
      expect(id!.agreement, s).toBe('agreed');
      expect(id!.authorities.length, s).toBe(2);
      expect(id!.family, s).toBe('Proteaceae');
    }
  });

  it('leaves yam deferred rather than forced', () => {
    const d = SCOPE_DECISIONS.find((x) => x.slug === 'yam')!;
    expect(d.outcome).toBe('DEFER_TAXONOMIC_COMPLEXITY');
    expect(d.taxaAdded ?? []).toHaveLength(0);
    // The structure it defends must still be the one in the corpus.
    expect(IDENTITY_BY_SLUG.get('white-yam')!.taxonRank).toBe('subspecies');
    expect(IDENTITY_BY_SLUG.get('yellow-yam')!.taxonRank).toBe('species');
  });
});
