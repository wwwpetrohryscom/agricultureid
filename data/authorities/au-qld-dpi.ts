import type { AgriculturalAuthorityEntry } from '@/types/authority';

/**
 * Verified 2026-08-19 by loading the official government site in a real browser.
 * Responsibilities are evidenced from the body's own official designation and
 * published context — never inferred beyond what the page shows.
 */
export const auQldDpi: AgriculturalAuthorityEntry = {
  id: 'au-qld-dpi',
  slug: 'australia-qld-dpi',
  officialName: 'Department of Primary Industries',
  shortName: 'Queensland DPI',
  alternativeNames: [
    'Department of Agriculture and Fisheries',
    'Queensland DAF',
  ],
  authorityType: 'department',
  governmentLevel: 'state',
  jurisdictionType: 'state',
  countryCode: 'AUS',
  regionId: 'queensland',
  jurisdictionName: 'Queensland',
  authorityStatus: 'active',
  officialWebsite: 'https://www.daf.qld.gov.au',
  summary:
    'Department of Primary Industries is the first-order subnational public authority responsible for agriculture in Queensland.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Published by the Queensland Government as the department for primary industries, which holds the state agriculture function.',
      sourceId: 'au-qld-dpi',
      statutory: false,
    },
  ],
  sourceReferences: ['au-qld-dpi'],
  verification: [
    {
      url: 'https://www.daf.qld.gov.au',
      sourceId: 'au-qld-dpi',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official government site loaded in a real browser on 2026-08-19; it resolved with HTTP 200 identifying the body as Department of Primary Industries.',
      domainVerification: 'officialGovernmentPortal',
    },
  ],
  limitations: [
    'The department publishes on the legacy daf.qld.gov.au domain under its current Department of Primary Industries title; the former Department of Agriculture and Fisheries name is retained as an alias.',
  ],
  profileDepth: 'directory-record',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-19',
};
