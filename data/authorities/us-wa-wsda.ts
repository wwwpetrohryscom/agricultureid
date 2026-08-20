import type { AgriculturalAuthorityEntry } from '@/types/authority';

/**
 * Verified 2026-08-19 by loading the official government site in a real browser.
 * Responsibilities are evidenced from the body's own official designation and
 * published context — never inferred beyond what the page shows.
 */
export const usWaWsda: AgriculturalAuthorityEntry = {
  id: 'us-wa-wsda',
  slug: 'united-states-wa-wsda',
  officialName: 'Washington State Department of Agriculture',
  shortName: 'WSDA',
  authorityType: 'department',
  governmentLevel: 'state',
  jurisdictionType: 'state',
  countryCode: 'USA',
  regionId: 'washington',
  jurisdictionName: 'Washington',
  authorityStatus: 'active',
  officialWebsite: 'https://agr.wa.gov',
  summary:
    'Washington State Department of Agriculture is the first-order subnational public authority responsible for agriculture in Washington.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Published on a Washington state government domain as the state department of agriculture.',
      sourceId: 'us-wa-wsda',
      statutory: false,
    },
  ],
  sourceReferences: ['us-wa-wsda'],
  verification: [
    {
      url: 'https://agr.wa.gov',
      sourceId: 'us-wa-wsda',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official government site loaded in a real browser on 2026-08-19; it resolved with HTTP 200 identifying the body as Washington State Department of Agriculture.',
      domainVerification: 'officialGovernmentPortal',
    },
  ],
  limitations: [
    'Verified directory record: the department’s published remit was not read during the verification pass.',
  ],
  profileDepth: 'directory-record',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-19',
};
