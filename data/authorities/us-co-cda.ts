import type { AgriculturalAuthorityEntry } from '@/types/authority';

/** Verified 2026-08-19 by loading the official state site in a real browser. */
export const usCoCda: AgriculturalAuthorityEntry = {
  id: 'us-co-cda',
  slug: 'united-states-cda',
  officialName: 'Colorado Department of Agriculture',
  shortName: 'CDA',
  authorityType: 'department',
  governmentLevel: 'state',
  jurisdictionType: 'state',
  countryCode: 'USA',
  jurisdictionId: 'US-CO',
  jurisdictionName: 'Colorado',
  authorityStatus: 'active',
  officialWebsite: 'https://ag.colorado.gov',
  summary:
    'Colorado Department of Agriculture is the first-order state public authority responsible for agriculture in Colorado.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Published on a Colorado state government domain as the state department of agriculture.',
      sourceId: 'us-co-cda',
      statutory: false,
    },
  ],
  sourceReferences: ['us-co-cda'],
  verification: [
    {
      url: 'https://ag.colorado.gov',
      sourceId: 'us-co-cda',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official state government site loaded in a real browser on 2026-08-19; it resolved with HTTP 200 identifying the body as Colorado Department of Agriculture.',
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
