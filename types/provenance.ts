/**
 * Evidence lineage — why AgricultureID says what it says.
 *
 * The chain a reader should be able to follow for any material claim:
 *
 *   claim → official source → the release that was read → where in it →
 *   what the source actually said → what AgricultureID made of that → when
 *
 * ## This layer stores nothing
 *
 * Provenance already exists across the corpus: `sourceReferences` on every
 * page, `FieldCitation` with locators, `verification` blocks with evidence
 * notes and dates, snapshot ids on input authorisations, dataset releases and
 * checksums on market data, `EVIDENCE_TIER` over sources. A second store would
 * be a second thing to drift.
 *
 * So a {@link ClaimLineage} is RESOLVED from what those layers hold, and where
 * a link genuinely does not exist the lineage says so instead of filling it in.
 * A missing locator is a fact about the source; an invented one is a lie about
 * it.
 *
 * ## The source's words and ours are never the same field
 *
 * EPPO's own entry reads "pests recommended for regulation as quarantine
 * pests". AgricultureID normalises that to `recommended-for-regulation`. The
 * first is a quotation and the second is a vocabulary, and presenting the
 * second in quotation marks would put words in a regulator's mouth.
 *
 * {@link ClaimLineage.sourceWording} is therefore only ever verbatim text the
 * source published, and {@link ClaimLineage.interpretation} is only ever a
 * value from an AgricultureID vocabulary. A claim that has one and not the
 * other says which it has.
 *
 * ## No score
 *
 * There is no confidence number anywhere in this layer. A percentage invites a
 * reader to think the difference between 92 and 88 means something, when what
 * actually varies is categorical: whether a source was read, whether it was
 * unambiguous, and whether two sources disagree. {@link TruthState} says which.
 */

/** Kinds of material claim this layer can trace. Not every sentence — see the note. */
export const CLAIM_KINDS = [
  'input-authorization',
  'variety-registration',
  'biosecurity-status',
  'compliance-requirement',
  'authority-identity',
  'support-programme-status',
] as const;
export type ClaimKind = (typeof CLAIM_KINDS)[number];

/**
 * How precisely the evidence can be located, strongest first.
 *
 * A register record id or a legal article points at the exact thing. A source
 * field points at a column. `none` is honest about a source that publishes no
 * addressable unit at all — and is used rather than inventing a line number for
 * a page that renders differently on every request.
 */
export const LOCATOR_KINDS = [
  'legal-article',
  'register-record-id',
  'official-list-entry',
  'dataset-series',
  'source-field',
  'page-heading',
  'none',
] as const;
export type LocatorKind = (typeof LOCATOR_KINDS)[number];

/** Categorical, never numeric. See the note. */
export const TRUTH_STATES = [
  'verified',
  'partial',
  'uncertain',
  'source-conflicted',
  'unavailable',
] as const;
export type TruthState = (typeof TRUTH_STATES)[number];

export interface LineageSource {
  sourceId: string;
  organization: string;
  title: string;
  url: string;
  /** From the existing source registry, not computed here. */
  evidenceTier: number;
}

/** The capture that was actually read, where the layer records one. */
export interface LineageRelease {
  snapshotId?: string;
  /** The source's own release identifier, never a retrieval date. */
  sourceReleaseId?: string;
  retrievedAt?: string;
}

export interface EvidenceLocator {
  kind: LocatorKind;
  /** The locator itself, e.g. "Article 28(1)", "NLI/AGR/IE/SOLAN_TUB/657". */
  value?: string;
  /** Required when kind is `none`: why the source has no addressable unit. */
  why?: string;
}

/** Something the source published, word for word. Never a normalised value. */
export interface SourceWording {
  text: string;
  /** What the wording is FOR, e.g. "status", "list entry". */
  field: string;
}

/** An AgricultureID value, and the vocabulary it belongs to. Never quoted. */
export interface Interpretation {
  value: string;
  vocabulary: string;
}

export interface LineageConflict {
  what: string;
  /** Sources that disagree, by id. */
  between: string[];
  /** What AgricultureID publishes in the meantime, and why. */
  resolution: string;
}

export interface ClaimLineage {
  claimKind: ClaimKind;
  /** Stable id of the claim within its own layer. */
  claimId: string;
  /** What the claim is about, in words a reader recognises. */
  claimLabel: string;
  /** The claim itself, as a short readable statement. */
  statement: string;

  sources: LineageSource[];
  release?: LineageRelease;
  locator: EvidenceLocator;
  sourceWording?: SourceWording;
  interpretation?: Interpretation;

  verifiedAt?: string;
  truthState: TruthState;
  conflicts: LineageConflict[];
  limitations: string[];
}

/**
 * The longest verbatim extract this layer will carry.
 *
 * Provenance needs enough of a source to identify what was read, not enough to
 * substitute for it. Registers publish short addressable values — a status
 * word, a list entry, a denomination — and those are what appears here.
 * Anything longer is a reproduction, and a link is the right answer instead.
 */
export const MAX_EXCERPT_CHARS = 200;

/** Shown wherever lineage is displayed. */
export const LINEAGE_CAVEAT =
  'Evidence shows what an official source published and what AgricultureID made of it. The two are always shown separately: quoted text is the source’s own, and a normalised value is AgricultureID’s vocabulary, not a quotation.';
