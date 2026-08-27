/**
 * Change history — what was true before, and when it stopped being true.
 *
 * ## Two dates, never one
 *
 * A change has an OCCURRENCE date, which the source states, and a DETECTION
 * date, which is when AgricultureID saw it. They are almost never the same. An
 * EU approval that expired on 2021-12-31 was read into this corpus on
 * 2026-08-27; reporting the second as though it were the first would say the
 * substance was approved for nearly five years after it was not.
 *
 * So `occurredAt` is only ever the source's own date, `detectedAt` is only ever
 * a retrieval date, and where a change has no official date the interface says
 * "detected by AgricultureID" instead of inventing one.
 *
 * ## Events are derived, not stored
 *
 * The corpus already holds status, published wording, validity dates and the
 * snapshot each came from. An event is a PROJECTION of that state, computed at
 * read time. Storing events as a second copy would create two records that can
 * disagree, and the one that drifts is always the one describing the past.
 *
 * The exception is a change the corpus cannot derive because nothing in the
 * current state records it: an authority's former name is not deducible from
 * the authority's current name. Those few events are stored, with evidence, in
 * `data/history`.
 *
 * ## Current state stays canonical
 *
 * History explains the present; it never competes with it. Every entity page
 * shows verified current state first, history second, and every historical
 * value is labelled as one. Nothing in this layer can change what a page says
 * is true now, because nothing in this layer is a source of current truth.
 *
 * ## Instruments and jurisdictions do not merge
 *
 * A cultivar may hold an expired United States certificate, a current
 * Community right and a national listing somewhere else, all at once. Those are
 * three histories, not one timeline: a right that expired in Ohio says nothing
 * about a listing in Ireland. Events therefore carry their jurisdiction and,
 * where the layer has one, their instrument, and are grouped by both.
 */
import type { ChangeType } from './freshness';

/** Entity kinds whose history this layer publishes. */
export const CHANGE_ENTITY_TYPES = [
  'input-authorization',
  'variety-registration',
  'authority',
] as const;
export type ChangeEntityType = (typeof CHANGE_ENTITY_TYPES)[number];

/**
 * Where an event came from, which decides what its dates can mean.
 *
 *   source-dated       — the source publishes the date the change took effect.
 *   source-undated     — the source publishes the new state but no date for it.
 *   snapshot-detected  — the change was found by comparing two retrievals, so
 *                        only a detection window is known.
 */
export const EVENT_PROVENANCES = [
  'source-dated',
  'source-undated',
  'snapshot-detected',
] as const;
export type EventProvenance = (typeof EVENT_PROVENANCES)[number];

/** No numeric confidence anywhere. A claim is verified or it is not. */
export const EVENT_VERIFICATION_STATUSES = ['verified', 'uncertain'] as const;
export type EventVerificationStatus =
  (typeof EVENT_VERIFICATION_STATUSES)[number];

export interface AgriculturalChangeEvent {
  id: string;
  entityType: ChangeEntityType;
  /** Slug or id of the entity in its own layer. Never a free-text label. */
  entityId: string;
  /** Human-readable name of the entity, for rendering without a second lookup. */
  entityLabel: string;
  changeType: ChangeType;
  provenance: EventProvenance;

  /**
   * The date the source says the change took effect. Present ONLY for
   * `source-dated` events, and never filled in from a detection date.
   */
  occurredAt?: string;
  /** The retrieval that observed the new state. Never presented as an effective date. */
  detectedAt: string;
  verifiedAt?: string;

  /** What it was, and what it is, in the source's own words where possible. */
  previousValue?: string;
  currentValue?: string;

  /** The jurisdiction this change happened in. Never widened. */
  jurisdictionName: string;
  countryCode?: string;
  /** The legal instrument, where the entity's layer distinguishes them. */
  instrument?: string;

  snapshotIds: string[];
  sourceIds: string[];
  verificationStatus: EventVerificationStatus;
  explanation?: string;
  limitations: string[];
}

/** Shown wherever history is displayed beside current state. */
export const HISTORY_CAVEAT =
  'History records what an official source published at a point in time. Where the source states the date a change took effect, that date is shown; where it does not, only the date AgricultureID observed the change is shown, and it is labelled as such.';

/** Shown wherever an entity has history in more than one jurisdiction. */
export const HISTORY_SCOPE_CAVEAT =
  'Each history is specific to one jurisdiction and one legal instrument. A right that expired in one country says nothing about a listing in another, and they are never combined.';
