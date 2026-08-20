import type { AgriculturalAuthorityEntry } from '@/types/authority';

/**
 * Verified 2026-08-19 by loading the official government site in a real browser.
 * Responsibilities are evidenced from the body's own official designation and
 * published context — never inferred beyond what the page shows.
 */
export const usInIsda: AgriculturalAuthorityEntry = {
  id: 'us-in-isda',
  slug: 'united-states-in-isda',
  officialName: 'Indiana State Department of Agriculture',
  shortName: 'ISDA',
  authorityType: 'department',
  governmentLevel: 'state',
  jurisdictionType: 'state',
  countryCode: 'USA',
  regionId: 'indiana',
  jurisdictionName: 'Indiana',
  authorityStatus: 'active',
  officialWebsite: 'https://www.in.gov/isda/',
  summary:
    'Indiana State Department of Agriculture is the first-order subnational public authority responsible for agriculture in Indiana.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Published on the Indiana state government portal as the state department of agriculture.',
      sourceId: 'us-in-isda',
      statutory: false,
    },
  ],
  sourceReferences: ['us-in-isda'],
  verification: [
    {
      url: 'https://www.in.gov/isda/',
      sourceId: 'us-in-isda',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official government site loaded in a real browser on 2026-08-19; it resolved with HTTP 200 identifying the body as Indiana State Department of Agriculture.',
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
