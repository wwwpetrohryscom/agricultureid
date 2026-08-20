import type { AgriculturalAuthorityEntry } from '@/types/authority';

/**
 * Verified 2026-08-19 by loading the official government site in a real browser.
 * Responsibilities are evidenced from the body's own official designation and
 * published context — never inferred beyond what the page shows.
 */
export const caSkAgr: AgriculturalAuthorityEntry = {
  id: 'ca-sk-agr',
  slug: 'canada-sk-agr',
  officialName: 'Ministry of Agriculture',
  shortName: 'Saskatchewan Agriculture',
  authorityType: 'ministry',
  governmentLevel: 'provincial',
  jurisdictionType: 'province',
  countryCode: 'CAN',
  jurisdictionId: 'CA-SK',
  jurisdictionName: 'Saskatchewan',
  authorityStatus: 'active',
  officialWebsite:
    'https://www.saskatchewan.ca/government/government-structure/ministries/agriculture',
  summary:
    'Ministry of Agriculture is the first-order subnational public authority responsible for agriculture in Saskatchewan.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Published in the Government of Saskatchewan ministries directory as the provincial Ministry of Agriculture.',
      sourceId: 'ca-sk-agr',
      statutory: false,
    },
  ],
  sourceReferences: ['ca-sk-agr'],
  verification: [
    {
      url: 'https://www.saskatchewan.ca/government/government-structure/ministries/agriculture',
      sourceId: 'ca-sk-agr',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official government site loaded in a real browser on 2026-08-19; it resolved with HTTP 200 identifying the body as Ministry of Agriculture.',
      domainVerification: 'officialGovernmentPortal',
    },
  ],
  limitations: [
    'Verified directory record: the ministry’s published remit was not read during the verification pass.',
  ],
  profileDepth: 'directory-record',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-19',
};
