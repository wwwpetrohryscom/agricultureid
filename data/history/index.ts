import type { AgriculturalChangeEvent } from '@/types/history';

/**
 * Change events that cannot be derived from current state.
 *
 * Everything else in this layer is a projection: a register publishes a status
 * and a date, and the event restates it. An authority's FORMER NAME is not like
 * that. Nothing in a ministry's current record implies what it used to be
 * called, so the fact has to be stored — with the evidence that established it.
 *
 * ## An alias is not a former name
 *
 * This is the trap. A body can be known by an abbreviation, a local-language
 * title, a colloquial name and a legacy domain all at once, and none of those
 * is evidence that it was ever officially called something else. Building a
 * chronology out of an alias list would invent renames wholesale.
 *
 * So each event here rests on a specific reading of the body's own material,
 * recorded when the authority was verified, and both entries below say plainly
 * what that reading was. Neither carries a date: the corpus establishes THAT
 * these bodies were renamed, not WHEN, and inventing an effective date from a
 * verification date would be the exact substitution this layer forbids.
 *
 * ## Why these two and no others
 *
 * Of 80 authorities, two record a former name in their own verification notes.
 * The other 78 do not, and absence of a note is not evidence that a body has
 * always had its current name — it is evidence that nobody has established
 * otherwise. No event is written for them.
 */
export const AUTHORITY_CHANGES: AgriculturalChangeEvent[] = [
  {
    id: 'authority:ca-on-omafa:renamed',
    entityType: 'authority',
    entityId: 'ca-on-omafa',
    entityLabel: 'Ministry of Agriculture, Food and Agribusiness',
    changeType: 'nameChanged',
    provenance: 'source-undated',
    detectedAt: '2026-08-20',
    verifiedAt: '2026-08-20',
    previousValue: 'Ministry of Agriculture, Food and Rural Affairs (OMAFRA)',
    currentValue: 'Ministry of Agriculture, Food and Agribusiness (OMAFA)',
    jurisdictionName: 'Ontario',
    countryCode: 'CAN',
    snapshotIds: [],
    sourceIds: ['ca-on-omafa'],
    verificationStatus: 'verified',
    explanation:
      'The ministry’s own page was loaded on 2026-08-20 under the title Ministry of Agriculture, Food and Agribusiness, and the OMAFRA URLs no longer resolve. A 404 alone would not have established this: a government URL that stops resolving usually means a machinery-of-government rename rather than an abolished body, and it was the current title that settled which.',
    limitations: [
      'The date the rename took effect is not established here. Only the date AgricultureID observed the current title is known.',
    ],
  },
  {
    id: 'authority:nga-fmafs:renamed',
    entityType: 'authority',
    entityId: 'nga-fmafs',
    entityLabel: 'Federal Ministry of Agriculture and Food Security',
    changeType: 'nameChanged',
    provenance: 'source-undated',
    detectedAt: '2026-08-19',
    verifiedAt: '2026-08-19',
    previousValue:
      'Federal Ministry of Agriculture and Rural Development (FMARD)',
    currentValue: 'Federal Ministry of Agriculture and Food Security (FMAFS)',
    jurisdictionName: 'Nigeria',
    countryCode: 'NGA',
    snapshotIds: [],
    sourceIds: ['ng-fmafs'],
    verificationStatus: 'verified',
    explanation:
      'The ministry’s site was loaded on 2026-08-19 under the title Federal Ministry of Agriculture and Food Security, while continuing to serve from the fmard.gov.ng domain retained from its former name. The domain was verified as serving the current ministry, so the older name is a former title rather than a separate body.',
    limitations: [
      'The date the rename took effect is not established here. Only the date AgricultureID observed the current title is known.',
      'A retained domain is evidence of continuity, not of a rename date.',
    ],
  },
];
