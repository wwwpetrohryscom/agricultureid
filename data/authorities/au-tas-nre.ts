import type { AgriculturalAuthorityEntry } from '@/types/authority';

/**
 * Verified 2026-08-19 by loading the official government site in a real browser.
 * Responsibilities are evidenced from the body's own official designation and
 * published context — never inferred beyond what the page shows.
 */
export const auTasNre: AgriculturalAuthorityEntry = {
  id: 'au-tas-nre',
  slug: 'australia-tas-nre',
  officialName: 'Department of Natural Resources and Environment Tasmania',
  shortName: 'NRE Tasmania',
  authorityType: 'department',
  governmentLevel: 'state',
  jurisdictionType: 'state',
  countryCode: 'AUS',
  regionId: 'tasmania',
  jurisdictionName: 'Tasmania',
  authorityStatus: 'active',
  officialWebsite: 'https://nre.tas.gov.au',
  summary:
    'Department of Natural Resources and Environment Tasmania is the first-order subnational public authority responsible for agriculture in Tasmania.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'The department holds the Tasmanian agriculture function within its natural resources portfolio.',
      sourceId: 'au-tas-nre',
      statutory: false,
    },
    {
      area: 'land-management',
      note: 'Natural resources is a named portfolio in the department’s official title.',
      sourceId: 'au-tas-nre',
      statutory: false,
    },
  ],
  sourceReferences: ['au-tas-nre'],
  verification: [
    {
      url: 'https://nre.tas.gov.au',
      sourceId: 'au-tas-nre',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official government site loaded in a real browser on 2026-08-19; it resolved with HTTP 200 identifying the body as Department of Natural Resources and Environment Tasmania.',
      domainVerification: 'officialGovernmentPortal',
    },
  ],
  limitations: [
    'Tasmania administers agriculture within a combined natural resources and environment department rather than a standalone agriculture department; this record reflects that structure.',
  ],
  profileDepth: 'full-profile',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-19',
};
