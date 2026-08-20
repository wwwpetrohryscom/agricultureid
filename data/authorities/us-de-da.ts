import type { AgriculturalAuthorityEntry } from '@/types/authority';

/** Verified 2026-08-20 by loading the official government site in a real browser. */
export const usDeDa: AgriculturalAuthorityEntry = {
  id: 'us-de-da',
  slug: 'united-states-da',
  officialName: 'Delaware Department of Agriculture',
  shortName: 'DDA',
  authorityType: 'department',
  governmentLevel: 'state',
  jurisdictionType: 'state',
  countryCode: 'USA',
  jurisdictionId: 'US-DE',
  jurisdictionName: 'Delaware',
  authorityStatus: 'active',
  officialWebsite: 'https://agriculture.delaware.gov',
  summary:
    'Delaware Department of Agriculture is the first-order subnational public authority responsible for agriculture in Delaware.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Published on a Delaware state government domain as the state department of agriculture.',
      sourceId: 'us-de-da',
      statutory: false,
    },
  ],
  sourceReferences: ['us-de-da'],
  verification: [
    {
      url: 'https://agriculture.delaware.gov',
      sourceId: 'us-de-da',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official government site loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying the body as Delaware Department of Agriculture.',
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
