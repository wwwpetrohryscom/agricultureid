import type { AgriculturalAuthorityEntry } from '@/types/authority';

/**
 * Verified 2026-08-19 by loading the official government site in a real browser.
 * Responsibilities are evidenced from the body's own official designation and
 * published context — never inferred beyond what the page shows.
 */
export const usTxTda: AgriculturalAuthorityEntry = {
  id: 'us-tx-tda',
  slug: 'united-states-tx-tda',
  officialName: 'Texas Department of Agriculture',
  shortName: 'TDA',
  authorityType: 'department',
  governmentLevel: 'state',
  jurisdictionType: 'state',
  countryCode: 'USA',
  jurisdictionId: 'US-TX',
  jurisdictionName: 'Texas',
  authorityStatus: 'active',
  officialWebsite: 'https://www.texasagriculture.gov',
  summary:
    'Texas Department of Agriculture is the first-order subnational public authority responsible for agriculture in Texas.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Published on a Texas state government domain as the state department of agriculture.',
      sourceId: 'us-tx-tda',
      statutory: false,
    },
  ],
  sourceReferences: ['us-tx-tda'],
  verification: [
    {
      url: 'https://www.texasagriculture.gov',
      sourceId: 'us-tx-tda',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official government site loaded in a real browser on 2026-08-19; it resolved with HTTP 200 identifying the body as Texas Department of Agriculture.',
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
