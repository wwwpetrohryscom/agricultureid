import type { AgriculturalAuthorityEntry } from '@/types/authority';

/** Verified 2026-08-19 by loading the official state site in a real browser. */
export const usPaPda: AgriculturalAuthorityEntry = {
  id: 'us-pa-pda',
  slug: 'united-states-pda',
  officialName: 'Pennsylvania Department of Agriculture',
  shortName: 'PDA',
  authorityType: 'department',
  governmentLevel: 'state',
  jurisdictionType: 'state',
  countryCode: 'USA',
  jurisdictionId: 'US-PA',
  jurisdictionName: 'Pennsylvania',
  authorityStatus: 'active',
  officialWebsite: 'https://www.pa.gov/agencies/pda.html',
  summary:
    'Pennsylvania Department of Agriculture is the first-order state public authority responsible for agriculture in Pennsylvania.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Published on the Commonwealth of Pennsylvania portal as the state department of agriculture.',
      sourceId: 'us-pa-pda',
      statutory: false,
    },
  ],
  sourceReferences: ['us-pa-pda'],
  verification: [
    {
      url: 'https://www.pa.gov/agencies/pda.html',
      sourceId: 'us-pa-pda',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official state government site loaded in a real browser on 2026-08-19; it resolved with HTTP 200 identifying the body as Pennsylvania Department of Agriculture.',
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
