import type { AgriculturalAuthorityEntry } from '@/types/authority';

/**
 * Verified 2026-08-19 by loading the official government site in a real browser.
 * Responsibilities are evidenced from the body's own official designation and
 * published context — never inferred beyond what the page shows.
 */
export const auSaPirsa: AgriculturalAuthorityEntry = {
  id: 'au-sa-pirsa',
  slug: 'australia-sa-pirsa',
  officialName: 'Department of Primary Industries and Regions South Australia',
  shortName: 'PIRSA',
  authorityType: 'department',
  governmentLevel: 'state',
  jurisdictionType: 'state',
  countryCode: 'AUS',
  jurisdictionId: 'AU-SA',
  jurisdictionName: 'South Australia',
  authorityStatus: 'active',
  officialWebsite: 'https://pir.sa.gov.au',
  summary:
    'Department of Primary Industries and Regions South Australia is the first-order subnational public authority responsible for agriculture in South Australia.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Primary industries is a named portfolio of the department, which holds the state agriculture function.',
      sourceId: 'au-sa-pirsa',
      statutory: false,
    },
    {
      area: 'rural-development',
      note: 'Regions is a named portfolio of the same department.',
      sourceId: 'au-sa-pirsa',
      statutory: false,
    },
  ],
  sourceReferences: ['au-sa-pirsa'],
  verification: [
    {
      url: 'https://pir.sa.gov.au',
      sourceId: 'au-sa-pirsa',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official government site loaded in a real browser on 2026-08-19; it resolved with HTTP 200 identifying the body as Department of Primary Industries and Regions South Australia.',
      domainVerification: 'officialGovernmentPortal',
    },
  ],
  limitations: [
    'Portfolio scope is taken from the department’s official title; statutory powers are set out in South Australian law and are not asserted here.',
  ],
  profileDepth: 'full-profile',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-19',
};
