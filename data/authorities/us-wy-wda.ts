import type { AgriculturalAuthorityEntry } from '@/types/authority';

/** Verified 2026-08-20 by loading the official government site in a real browser. */
export const usWyWda: AgriculturalAuthorityEntry = {
  id: 'us-wy-wda',
  slug: 'united-states-wda',
  officialName: 'Wyoming Department of Agriculture',
  shortName: 'WDA',
  authorityType: 'department',
  governmentLevel: 'state',
  jurisdictionType: 'state',
  countryCode: 'USA',
  jurisdictionId: 'US-WY',
  jurisdictionName: 'Wyoming',
  authorityStatus: 'active',
  officialWebsite: 'https://agriculture.wy.gov',
  summary:
    'Wyoming Department of Agriculture is the first-order subnational public authority responsible for agriculture in Wyoming.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Published on a Wyoming state government domain as the state department of agriculture.',
      sourceId: 'us-wy-wda',
      statutory: false,
    },
  ],
  sourceReferences: ['us-wy-wda'],
  verification: [
    {
      url: 'https://agriculture.wy.gov',
      sourceId: 'us-wy-wda',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official government site loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying the body as Wyoming Department of Agriculture.',
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
