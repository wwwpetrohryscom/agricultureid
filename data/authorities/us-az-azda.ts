import type { AgriculturalAuthorityEntry } from '@/types/authority';

/** Verified 2026-08-19 by loading the official state site in a real browser. */
export const usAzAzda: AgriculturalAuthorityEntry = {
  id: 'us-az-azda',
  slug: 'united-states-azda',
  officialName: 'Arizona Department of Agriculture',
  shortName: 'AZDA',
  authorityType: 'department',
  governmentLevel: 'state',
  jurisdictionType: 'state',
  countryCode: 'USA',
  jurisdictionId: 'US-AZ',
  jurisdictionName: 'Arizona',
  authorityStatus: 'active',
  officialWebsite: 'https://agriculture.az.gov',
  summary:
    'Arizona Department of Agriculture is the first-order state public authority responsible for agriculture in Arizona.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Published on an Arizona state government domain as the state department of agriculture.',
      sourceId: 'us-az-azda',
      statutory: false,
    },
  ],
  sourceReferences: ['us-az-azda'],
  verification: [
    {
      url: 'https://agriculture.az.gov',
      sourceId: 'us-az-azda',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official state government site loaded in a real browser on 2026-08-19; it resolved with HTTP 200 identifying the body as Arizona Department of Agriculture.',
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
