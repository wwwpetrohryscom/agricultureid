/**
 * Deriving change events from corpus state. Pure — no I/O, no clock.
 *
 * Nothing here invents a transition. Every event is a restatement of something
 * a register already published: a status, its own wording for that status, and
 * the date it attached to it. If the register published no date, the event says
 * so rather than borrowing the retrieval date.
 *
 * ## What is NOT derived, and why
 *
 * A support programme has a status and no dates anywhere in this corpus — Wave
 * 7 withheld every application window because none was published in a form that
 * could be verified — so there are no support events. A compliance topic has a
 * status and no effective date, so there are no regulation events: a new source
 * page is not a new law, and inferring one from a retrieval would be exactly
 * the fabrication this layer exists to avoid.
 */
import type { AgriculturalChangeEvent, EventProvenance } from '@/types/history';
import {
  allAuthorizations,
  isCurrent as isCurrentAuthorization,
} from '@/lib/inputs/registry';
import { VARIETY_REGISTRATIONS } from '@/data/varieties';
import { isCurrent as isCurrentRegistration } from '@/lib/varieties/registry';
import { PUBLISHED_CONTENT } from '@/lib/content/registry';
import { AUTHORITY_CHANGES } from '@/data/history';
import { SOURCE_SNAPSHOTS } from '@/data/freshness';

const ISO = /^\d{4}-\d{2}-\d{2}$/;
const isoOrUndefined = (v?: string) => (v && ISO.test(v) ? v : undefined);

/** The retrieval that observed this state. Never an effective date. */
function detectedAtOf(snapshotId: string, fallback: string): string {
  return (
    SOURCE_SNAPSHOTS.find((s) => s.id === snapshotId)?.retrievedAt ?? fallback
  );
}

/**
 * Input authorisations.
 *
 * An event is emitted when something ENDED. A register publishing
 * `status: withdrawn` with `validUntil: 2023-08-31` is publishing an ending and
 * its date; publishing the same status with no date is publishing only the
 * outcome, and the event says so.
 *
 * Two things are deliberately NOT events here.
 *
 * A CURRENT state is not history, however restrictive. Canada records 19
 * products as "Phase-Out" or "Emergency Registration" with an end date still in
 * the future: those authorisations are in force, and listing them as past
 * changes would say a product had been withdrawn while it is still on sale.
 * A date after the capture is a scheduled ending, not one that happened.
 *
 * An authorisation APPEARING is not an event either. Every record in a single
 * capture looks new, so "added" would mean nothing until a second capture
 * exists to compare against. The registers' start dates are validity, and the
 * listing tables publish them as current state.
 */
export function inputAuthorizationEvents(
  asOf = '2026-08-27',
): AgriculturalChangeEvent[] {
  const out: AgriculturalChangeEvent[] = [];
  for (const a of allAuthorizations()) {
    if (isCurrentAuthorization(a) || a.status === 'pending') continue;

    const end = isoOrUndefined(a.validUntil);
    // A date in the future is a scheduled ending, not one that has happened.
    const occurredAt = end && end <= asOf ? end : undefined;
    const provenance: EventProvenance = occurredAt
      ? 'source-dated'
      : 'source-undated';
    out.push({
      id: `input-authorization:${a.id}:${a.status}`,
      entityType: 'input-authorization',
      entityId: a.inputRef,
      entityLabel: a.authorizationNumber
        ? `${a.inputRef} (${a.authorizationNumber})`
        : a.inputRef,
      // The register states the outcome; the transition into it is a status
      // change, whatever the register's own wording for the new state is.
      changeType: 'statusChanged',
      provenance,
      occurredAt,
      detectedAt: detectedAtOf(a.sourceSnapshotId, a.lastVerifiedAt),
      verifiedAt: a.lastVerifiedAt,
      currentValue: a.publishedStatus,
      jurisdictionName: a.jurisdictionName,
      countryCode: a.countryCode,
      snapshotIds: [a.sourceSnapshotId],
      sourceIds: a.sourceReferences,
      verificationStatus: 'verified',
      explanation: occurredAt
        ? `The register records this authorisation as “${a.publishedStatus}”, ending ${occurredAt}.`
        : `The register records this authorisation as “${a.publishedStatus}”. It publishes no date for when it ended.`,
      limitations: occurredAt
        ? []
        : [
            'The register publishes no usable date for this change, so only the date AgricultureID observed it is known.',
            ...(end
              ? [
                  `The register carries the end date ${end}, which is later than the capture and therefore cannot be the date this ended.`,
                ]
              : []),
          ],
    });
  }
  return out;
}

/**
 * Variety registrations.
 *
 * Per instrument and per jurisdiction, always. A cultivar with an expired
 * United States certificate and a current Irish listing has two histories, and
 * merging them would say the variety stopped being marketable in Ireland
 * because a right lapsed in the United States.
 */
export function varietyRegistrationEvents(): AgriculturalChangeEvent[] {
  const titleOf = new Map(
    PUBLISHED_CONTENT.filter((c) => c.contentType === 'cultivar').map((c) => [
      c.slug,
      c.title,
    ]),
  );
  const out: AgriculturalChangeEvent[] = [];
  for (const r of VARIETY_REGISTRATIONS) {
    if (isCurrentRegistration(r)) continue;
    // `decidedOn` is when the entry was GRANTED or LISTED — the United States
    // publishes an issue date, Canada a registration date, the United Kingdom a
    // listing decision. None of them is the date the entry ENDED, and using one
    // as the other would date Kronos's expired certificate to the day it was
    // granted. The grant date is context on the event; it is never its date.
    const grantedOn = isoOrUndefined(r.decidedOn);
    out.push({
      id: `variety-registration:${r.id}`,
      entityType: 'variety-registration',
      entityId: r.cultivarRef,
      entityLabel: titleOf.get(r.cultivarRef) ?? r.cultivarRef,
      changeType: 'statusChanged',
      provenance: 'source-undated',
      detectedAt: r.lastVerifiedAt,
      verifiedAt: r.lastVerifiedAt,
      currentValue: r.publishedStatusWording,
      jurisdictionName: r.countryOrOrganisation,
      countryCode: r.countryCode,
      instrument: r.instrument,
      snapshotIds: [],
      sourceIds: r.sourceReferences,
      verificationStatus: 'verified',
      explanation: grantedOn
        ? `Granted ${grantedOn}. The ${r.registerName} now records this entry as “${r.publishedStatusWording}” and publishes no date for the change.`
        : `The ${r.registerName} records this entry as “${r.publishedStatusWording}” and publishes no date for the change.`,
      limitations: [
        'These registers publish a grant or listing date but no date for an entry ceasing to be current, so when this ended is not established here.',
      ],
    });
  }
  return out;
}

/**
 * Authorities.
 *
 * The only events this layer stores rather than derives. An authority's former
 * name cannot be deduced from its current one, and a 404 on an old URL is not
 * evidence of a rename — Wave 4C found Ontario's ministry had been renamed, not
 * abolished, only by reading the machinery-of-government record.
 */
export function authorityEvents(): AgriculturalChangeEvent[] {
  return AUTHORITY_CHANGES.map((e) => ({ ...e }));
}

export function allChangeEvents(): AgriculturalChangeEvent[] {
  return [
    ...inputAuthorizationEvents(),
    ...varietyRegistrationEvents(),
    ...authorityEvents(),
  ];
}
