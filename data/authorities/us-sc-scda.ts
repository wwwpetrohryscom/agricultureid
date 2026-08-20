import type { AgriculturalAuthorityEntry } from '@/types/authority';

/** Verified 2026-08-20 by loading the official government site in a real browser. */
export const usScScda: AgriculturalAuthorityEntry = {
  id: 'us-sc-scda',
  slug: 'united-states-scda',
  officialName: 'South Carolina Department of Agriculture',
  shortName: 'SCDA',
  authorityType: 'department',
  governmentLevel: 'state',
  jurisdictionType: 'state',
  countryCode: 'USA',
  jurisdictionId: 'US-SC',
  jurisdictionName: 'South Carolina',
  authorityStatus: 'active',
  officialWebsite: 'https://agriculture.sc.gov',
  summary:
    'South Carolina Department of Agriculture is the first-order subnational public authority responsible for agriculture in South Carolina.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Published on a South Carolina state government domain as the state department of agriculture.',
      sourceId: 'us-sc-scda',
      statutory: false,
    },
  ],
  sourceReferences: ['us-sc-scda'],
  verification: [
    {
      url: 'https://agriculture.sc.gov',
      sourceId: 'us-sc-scda',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official government site loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying the body as South Carolina Department of Agriculture.',
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
