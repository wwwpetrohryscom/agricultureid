import type { AgriculturalAuthorityEntry } from '@/types/authority';

/** Verified 2026-08-19 by loading the official state site in a real browser. */
export const usOrOda: AgriculturalAuthorityEntry = {
  id: 'us-or-oda',
  slug: 'united-states-oda',
  officialName: 'Oregon Department of Agriculture',
  shortName: 'ODA',
  authorityType: 'department',
  governmentLevel: 'state',
  jurisdictionType: 'state',
  countryCode: 'USA',
  jurisdictionId: 'US-OR',
  jurisdictionName: 'Oregon',
  authorityStatus: 'active',
  officialWebsite: 'https://www.oregon.gov/oda/',
  summary:
    'Oregon Department of Agriculture is the first-order state public authority responsible for agriculture in Oregon.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Published on the State of Oregon government portal as the state department of agriculture.',
      sourceId: 'us-or-oda',
      statutory: false,
    },
  ],
  sourceReferences: ['us-or-oda'],
  verification: [
    {
      url: 'https://www.oregon.gov/oda/',
      sourceId: 'us-or-oda',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official state government site loaded in a real browser on 2026-08-19; it resolved with HTTP 200 identifying the body as Oregon Department of Agriculture.',
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
