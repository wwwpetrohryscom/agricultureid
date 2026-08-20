import type { AgriculturalAuthorityEntry } from '@/types/authority';

/**
 * Verified 2026-08-19 by loading the official government site in a real browser.
 * Responsibilities are evidenced from the body's own official designation and
 * published context — never inferred beyond what the page shows.
 */
export const caAbAgi: AgriculturalAuthorityEntry = {
  id: 'ca-ab-agi',
  slug: 'canada-ab-agi',
  officialName: 'Agriculture and Irrigation',
  shortName: 'Alberta Agriculture and Irrigation',
  authorityType: 'ministry',
  governmentLevel: 'provincial',
  jurisdictionType: 'province',
  countryCode: 'CAN',
  jurisdictionId: 'CA-AB',
  jurisdictionName: 'Alberta',
  authorityStatus: 'active',
  officialWebsite: 'https://www.alberta.ca/agriculture-and-irrigation',
  summary:
    'Agriculture and Irrigation is the first-order subnational public authority responsible for agriculture in Alberta.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Agriculture is a named portfolio of this Government of Alberta ministry.',
      sourceId: 'ca-ab-agi',
      statutory: false,
    },
    {
      area: 'irrigation',
      note: 'Irrigation is a named portfolio of the same ministry, published alongside agriculture.',
      sourceId: 'ca-ab-agi',
      statutory: false,
    },
  ],
  sourceReferences: ['ca-ab-agi'],
  verification: [
    {
      url: 'https://www.alberta.ca/agriculture-and-irrigation',
      sourceId: 'ca-ab-agi',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official government site loaded in a real browser on 2026-08-19; it resolved with HTTP 200 identifying the body as Agriculture and Irrigation.',
      domainVerification: 'officialGovernmentPortal',
    },
  ],
  limitations: [
    'Portfolio scope is taken from the ministry’s official title on the Government of Alberta portal; statutory powers are set out in Alberta law and are not asserted here.',
  ],
  profileDepth: 'full-profile',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-19',
};
