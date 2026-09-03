/**
 * Wave 45 — a classification for each family of repeated article text.
 *
 * The rule the categories exist to enforce is that repeated text is not one
 * thing. A sentence in a hundred and twenty-three articles saying where
 * production figures come from, a sentence in two saying that both crops need
 * winter chilling, and a paragraph of agronomy copied from one page to another
 * are three different findings, and treating them alike produces either a
 * corpus that launders copied prose as policy or one that paraphrases its own
 * editorial standards to make a detector quiet.
 *
 * So nothing is rewritten before it is classified, and no classification is
 * accepted on assertion: the validator recomputes the family from the corpus
 * and checks the class against properties it can measure.
 */

export const PROSE_FAMILY_CLASSES = [
  /**
   * The corpus speaking about its own practice, in text held centrally and
   * rendered rather than written into articles.
   */
  'CORPUS_POLICY',
  /** A definition whose wording is fixed by the thing being defined. */
  'STANDARD_DEFINITION',
  /** How the corpus names and qualifies a source. */
  'SOURCE_ATTRIBUTION_LANGUAGE',
  /**
   * A caveat that is genuinely shared and genuinely belongs in each article,
   * below the occurrence share that would make it corpus policy.
   */
  'LEGITIMATE_SHARED_CAVEAT',
  /** Crop agronomy copied from one article to another. Must not survive. */
  'COPIED_CROP_SPECIFIC_PROSE',
  /**
   * Text that reads as crop-specific and says nothing a reader could not have
   * assumed. Shared because it is empty, not because the crops are alike.
   */
  'OVERGENERALIZED_PROSE',
  /** A caveat whose source model has moved on. */
  'STALE_SOURCE_CAVEAT',
  /** Seen, not yet decided. */
  'UNKNOWN_REVIEW_REQUIRED',
] as const;
export type ProseFamilyClass = (typeof PROSE_FAMILY_CLASSES)[number];

export const PROSE_FAMILY_CLASS_MEANING: Record<ProseFamilyClass, string> = {
  CORPUS_POLICY:
    'Held centrally and rendered from a constant, not written into articles. A family may only be classified this way if the corpus can point at where the text lives outside the articles.',
  STANDARD_DEFINITION:
    'The wording is fixed by a standard, a register or a nomenclatural convention, and changing it would change what is being said.',
  SOURCE_ATTRIBUTION_LANGUAGE:
    'How the corpus names a source and qualifies what it establishes. Shared because the source is shared.',
  LEGITIMATE_SHARED_CAVEAT:
    'A genuinely shared statement that belongs in each article it appears in, occurring in too few articles to be corpus policy. Two crops that share a fact may say the same thing.',
  COPIED_CROP_SPECIFIC_PROSE:
    'Agronomy written for one crop and reused for another. Never a permitted end state: a family classified this way must be recorded as resolved, with a run that measurably fell.',
  OVERGENERALIZED_PROSE:
    'Text that names a crop and tells the reader nothing about it. Shared because it is empty rather than because the crops are alike, and resolved by writing something true of the particular crop.',
  STALE_SOURCE_CAVEAT:
    'A caveat describing a source arrangement that has changed. Identical wording across articles is not a reason to keep it.',
  UNKNOWN_REVIEW_REQUIRED:
    'Detected and not yet classified. A permitted state only while the review is open, and never a permitted end state for a wave.',
};

export interface ProseFamilyRecord {
  id: string;
  /**
   * The repeated text as the detector normalises it, so the record can be
   * matched back to a family the corpus recomputes rather than to a sentence
   * someone typed.
   */
  text: string;
  classification: ProseFamilyClass;
  /**
   * Where the text lives now, for CORPUS_POLICY. A family cannot be policy
   * because someone says so; it is policy because it is held somewhere the
   * articles do not control.
   */
  heldAt?: string;
  /**
   * For a family this wave acted on: what it measured before.
   *
   * `runWords` here must be strictly greater than what the corpus now
   * computes, or the family did not change and the record is a claim rather
   * than a result. A resolution flag with no text change is the failure this
   * field exists to make impossible.
   */
  resolvedFrom?: { runWords: number; articles: number };
  rationale: string;
  reviewedAt: string;
}
