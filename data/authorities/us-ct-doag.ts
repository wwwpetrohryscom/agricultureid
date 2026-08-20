import type { AgriculturalAuthorityEntry } from '@/types/authority';

/** Verified 2026-08-20 by loading the official government site in a real browser. */
export const usCtDoag: AgriculturalAuthorityEntry = {
  id: 'us-ct-doag',
  slug: 'united-states-doag',
  officialName: 'Connecticut Department of Agriculture',
  shortName: 'CT DoAg',
  authorityType: 'department',
  governmentLevel: 'state',
  jurisdictionType: 'state',
  countryCode: 'USA',
  jurisdictionId: 'US-CT',
  jurisdictionName: 'Connecticut',
  authorityStatus: 'active',
  officialWebsite: 'https://portal.ct.gov/doag',
  summary:
    'Connecticut Department of Agriculture is the first-order subnational public authority responsible for agriculture in Connecticut.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Published on the Connecticut state government portal as the state department of agriculture.',
      sourceId: 'us-ct-doag',
      statutory: false,
    },
  ],
  sourceReferences: ['us-ct-doag'],
  verification: [
    {
      url: 'https://portal.ct.gov/doag',
      sourceId: 'us-ct-doag',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official government site loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying the body as Connecticut Department of Agriculture.',
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
