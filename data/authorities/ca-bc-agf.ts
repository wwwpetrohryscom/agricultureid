import type { AgriculturalAuthorityEntry } from '@/types/authority';

/**
 * Verified 2026-08-19 by loading the official government site in a real browser.
 * Responsibilities are evidenced from the body's own official designation and
 * published context — never inferred beyond what the page shows.
 */
export const caBcAgf: AgriculturalAuthorityEntry = {
  id: 'ca-bc-agf',
  slug: 'canada-bc-agf',
  officialName: 'Ministry of Agriculture and Food',
  shortName: 'BC Agriculture and Food',
  authorityType: 'ministry',
  governmentLevel: 'provincial',
  jurisdictionType: 'province',
  countryCode: 'CAN',
  regionId: 'british-columbia',
  jurisdictionName: 'British Columbia',
  authorityStatus: 'active',
  officialWebsite:
    'https://www2.gov.bc.ca/gov/content/industry/agriculture-seafood',
  summary:
    'Ministry of Agriculture and Food is the first-order subnational public authority responsible for agriculture in British Columbia.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Agriculture is a named portfolio published on the Province of British Columbia portal.',
      sourceId: 'ca-bc-agf',
      statutory: false,
    },
    {
      area: 'fisheries',
      note: 'Seafood is published alongside agriculture in the same provincial portfolio area.',
      sourceId: 'ca-bc-agf',
      statutory: false,
    },
  ],
  sourceReferences: ['ca-bc-agf'],
  verification: [
    {
      url: 'https://www2.gov.bc.ca/gov/content/industry/agriculture-seafood',
      sourceId: 'ca-bc-agf',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official government site loaded in a real browser on 2026-08-19; it resolved with HTTP 200 identifying the body as Ministry of Agriculture and Food.',
      domainVerification: 'officialGovernmentPortal',
    },
  ],
  limitations: [
    'Verified against the Province of British Columbia agriculture and seafood portal; statutory powers are set out in British Columbia law and are not asserted here.',
  ],
  profileDepth: 'full-profile',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-19',
};
