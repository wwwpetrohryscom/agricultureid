import type { AgriculturalAuthorityEntry } from '@/types/authority';

/** Verified 2026-08-20 by loading the official government site in a real browser. */
export const usTnTda: AgriculturalAuthorityEntry = {
  id: 'us-tn-tda',
  slug: 'united-states-tda',
  officialName: 'Tennessee Department of Agriculture',
  shortName: 'TDA (Tennessee)',
  authorityType: 'department',
  governmentLevel: 'state',
  jurisdictionType: 'state',
  countryCode: 'USA',
  jurisdictionId: 'US-TN',
  jurisdictionName: 'Tennessee',
  authorityStatus: 'active',
  officialWebsite: 'https://www.tn.gov/agriculture.html',
  summary:
    'Tennessee Department of Agriculture is the first-order subnational public authority responsible for agriculture in Tennessee.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Published on the Tennessee state government portal as the state department of agriculture.',
      sourceId: 'us-tn-tda',
      statutory: false,
    },
  ],
  sourceReferences: ['us-tn-tda'],
  verification: [
    {
      url: 'https://www.tn.gov/agriculture.html',
      sourceId: 'us-tn-tda',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official government site loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying the body as Tennessee Department of Agriculture.',
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
