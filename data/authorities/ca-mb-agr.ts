import type { AgriculturalAuthorityEntry } from '@/types/authority';

/**
 * Verified 2026-08-19 by loading the official government site in a real browser.
 * Responsibilities are evidenced from the body's own official designation and
 * published context — never inferred beyond what the page shows.
 */
export const caMbAgr: AgriculturalAuthorityEntry = {
  id: 'ca-mb-agr',
  slug: 'canada-mb-agr',
  officialName: 'Manitoba Agriculture',
  shortName: 'Manitoba Agriculture',
  authorityType: 'ministry',
  governmentLevel: 'provincial',
  jurisdictionType: 'province',
  countryCode: 'CAN',
  jurisdictionId: 'CA-MB',
  jurisdictionName: 'Manitoba',
  authorityStatus: 'active',
  officialWebsite: 'https://www.gov.mb.ca/agriculture/',
  summary:
    'Manitoba Agriculture is the first-order subnational public authority responsible for agriculture in Manitoba.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Published on the Province of Manitoba government portal as the provincial agriculture portfolio.',
      sourceId: 'ca-mb-agr',
      statutory: false,
    },
  ],
  sourceReferences: ['ca-mb-agr'],
  verification: [
    {
      url: 'https://www.gov.mb.ca/agriculture/',
      sourceId: 'ca-mb-agr',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official government site loaded in a real browser on 2026-08-19; it resolved with HTTP 200 identifying the body as Manitoba Agriculture.',
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
