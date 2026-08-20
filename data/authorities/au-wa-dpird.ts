import type { AgriculturalAuthorityEntry } from '@/types/authority';

/**
 * Verified 2026-08-19 by loading the official government site in a real browser.
 * Responsibilities are evidenced from the body's own official designation and
 * published context — never inferred beyond what the page shows.
 */
export const auWaDpird: AgriculturalAuthorityEntry = {
  id: 'au-wa-dpird',
  slug: 'australia-wa-dpird',
  officialName: 'Department of Primary Industries and Regional Development',
  shortName: 'WA DPIRD',
  authorityType: 'department',
  governmentLevel: 'state',
  jurisdictionType: 'state',
  countryCode: 'AUS',
  jurisdictionId: 'AU-WA',
  jurisdictionName: 'Western Australia',
  authorityStatus: 'active',
  officialWebsite: 'https://www.dpird.wa.gov.au',
  summary:
    'Department of Primary Industries and Regional Development is the first-order subnational public authority responsible for agriculture in Western Australia.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Primary industries is a named portfolio of the department, which holds the state agriculture function.',
      sourceId: 'au-wa-dpird',
      statutory: false,
    },
    {
      area: 'rural-development',
      note: 'Regional development is a named portfolio of the same department.',
      sourceId: 'au-wa-dpird',
      statutory: false,
    },
  ],
  sourceReferences: ['au-wa-dpird'],
  verification: [
    {
      url: 'https://www.dpird.wa.gov.au',
      sourceId: 'au-wa-dpird',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official government site loaded in a real browser on 2026-08-19; it resolved with HTTP 200 identifying the body as Department of Primary Industries and Regional Development.',
      domainVerification: 'officialGovernmentPortal',
    },
  ],
  limitations: [
    'Portfolio scope is taken from the department’s official title; statutory powers are set out in Western Australian law and are not asserted here.',
  ],
  profileDepth: 'full-profile',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-19',
};
