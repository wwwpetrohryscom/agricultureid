/**
 * Sentences the corpus says on purpose, in almost every crop article.
 *
 * The previous program reported 17 article pairs as "reused prose" and treated
 * all of them as editorial debt. That was too blunt. Measured against the whole
 * corpus, most of the shared text in those pairs is AgricultureID's own
 * standing language — the refusal to publish universal fertiliser rates appears
 * in 148 of 160 crop articles, the instruction to use locally authorised
 * products in 73. Those are policy statements. Two pages sharing them is the
 * corpus being consistent, and rewriting them per crop would make a standing
 * policy look like a crop-specific finding.
 *
 * What was left underneath, once these are excluded, is the real debt: sentences
 * about waterlogging and aphids and irrigation that appear in four to twenty
 * articles because someone copied them between adjacent crops.
 *
 * ## The rule that stops this being a loophole
 *
 * A phrase registered here is invisible to the similarity metric, so anyone
 * could launder copied prose by declaring it standard. They cannot: a phrase
 * only qualifies if it actually appears across a large fraction of the corpus,
 * and the validator recomputes that from the articles. The threshold sits in a
 * genuine gap in the data — standing language occurs in 69–148 articles, copied
 * agronomy in 4–20 — rather than being picked to admit anything.
 *
 * It has already refused one entry. A sentence about taking production figures
 * from FAOSTAT rather than assuming them reads exactly like policy, and was
 * drafted into this list on that basis; it occurs in 2 articles out of 160, so
 * it is two crops sharing a sentence and the validator rejected it.
 */
import { PUBLISHED_CONTENT } from '@/lib/content/registry';
import { articleText } from '@/lib/crops/content-depth';

export interface StandingPhrase {
  /** Normalised phrase, lowercase, letters and single spaces only. */
  phrase: string;
  /** Why this is the corpus speaking rather than one crop's agronomy. */
  reason: string;
}

/**
 * A phrase must appear in at least this share of crop articles to count as
 * standing language. Measured, not chosen: the least common registered phrase
 * is in 43% of articles and the most common copied sentence in 13%.
 */
export const STANDING_PHRASE_MIN_SHARE = 0.4;

export const STANDING_PHRASES: readonly StandingPhrase[] = [
  {
    phrase:
      'and regional guidance agricultureid does not publish universal fertilizer recommendations',
    reason:
      'An editorial policy, not an agronomic claim. AgricultureID declines to publish universal fertiliser rates because they are set by local soil test and jurisdiction, and the sentence states that refusal. It belongs on every crop that discusses nutrition.',
  },
  {
    phrase:
      'and where justified locally authorized control products applied according to their labels',
    reason:
      'A safety and regulatory qualifier. Product authorisation is jurisdictional and label-bound, and the corpus says so everywhere it mentions control measures rather than naming products.',
  },
  {
    phrase: 'local soil survey information',
    reason:
      'The corpus consistently points readers at their own soil survey rather than asserting a soil type for a field it has not seen.',
  },
  {
    phrase: 'management combines resistant',
    reason:
      'The standing framing of integrated management — resistance first, then cultural measures, then products. A shared editorial stance rather than a shared finding.',
  },
];

const norm = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z ]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

/** How many crop articles actually contain a phrase. Recomputed, never stored. */
export function articlesContaining(phrase: string): number {
  const p = norm(phrase);
  return PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop').filter((c) =>
    norm(articleText(c)).includes(p),
  ).length;
}

export function cropArticleCount(): number {
  return PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop').length;
}

/**
 * Remove standing language from a text before it is compared with another.
 *
 * Order matters only in that longer phrases are removed first, so a short
 * registered phrase nested inside a longer one does not fragment it.
 */
export function stripStandingPhrases(text: string): string {
  let t = text;
  for (const p of [...STANDING_PHRASES].sort(
    (a, b) => b.phrase.length - a.phrase.length,
  ))
    t = t.split(p.phrase).join(' ');
  return t.replace(/\s+/g, ' ').trim();
}
