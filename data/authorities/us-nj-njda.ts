import type { AgriculturalAuthorityEntry } from '@/types/authority';

/** Verified 2026-08-20 by loading the official government site in a real browser. */
export const usNjNjda: AgriculturalAuthorityEntry = {
  id: 'us-nj-njda',
  slug: 'united-states-njda',
  officialName: 'New Jersey Department of Agriculture',
  shortName: 'NJDA',
  authorityType: 'department',
  governmentLevel: 'state',
  jurisdictionType: 'state',
  countryCode: 'USA',
  jurisdictionId: 'US-NJ',
  jurisdictionName: 'New Jersey',
  authorityStatus: 'active',
  officialWebsite: 'https://www.nj.gov/agriculture/',
  summary:
    'New Jersey Department of Agriculture is the first-order subnational public authority responsible for agriculture in New Jersey.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Published on the State of New Jersey government portal as the state department of agriculture.',
      sourceId: 'us-nj-njda',
      statutory: false,
    },
  ],
  sourceReferences: ['us-nj-njda'],
  verification: [
    {
      url: 'https://www.nj.gov/agriculture/',
      sourceId: 'us-nj-njda',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official government site loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying the body as New Jersey Department of Agriculture.',
      domainVerification: 'officialGovernmentPortal',
    },
  ],
  limitations: [
    'Verified directory record: the body’s published remit was not read during the verification pass.',
  ],
  profileDepth: 'directory-record',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-20',
};
