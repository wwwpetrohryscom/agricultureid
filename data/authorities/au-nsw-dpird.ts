import type { AgriculturalAuthorityEntry } from '@/types/authority';

/**
 * Verified 2026-08-19 by loading the official government site in a real browser.
 * Responsibilities are evidenced from the body's own official designation and
 * published context — never inferred beyond what the page shows.
 */
export const auNswDpird: AgriculturalAuthorityEntry = {
  id: 'au-nsw-dpird',
  slug: 'australia-nsw-dpird',
  officialName: 'NSW Department of Primary Industries and Regional Development',
  shortName: 'NSW DPIRD',
  alternativeNames: ['NSW Department of Primary Industries', 'NSW DPI'],
  authorityType: 'department',
  governmentLevel: 'state',
  jurisdictionType: 'state',
  countryCode: 'AUS',
  jurisdictionId: 'AU-NSW',
  jurisdictionName: 'New South Wales',
  authorityStatus: 'active',
  officialWebsite: 'https://www.dpi.nsw.gov.au',
  summary:
    'NSW Department of Primary Industries and Regional Development is the first-order subnational public authority responsible for agriculture in New South Wales.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Primary industries is a named portfolio of the department, which holds the state agriculture function.',
      sourceId: 'au-nsw-dpird',
      statutory: false,
    },
    {
      area: 'rural-development',
      note: 'Regional development is a named portfolio of the same department.',
      sourceId: 'au-nsw-dpird',
      statutory: false,
    },
  ],
  sourceReferences: ['au-nsw-dpird'],
  verification: [
    {
      url: 'https://www.dpi.nsw.gov.au',
      sourceId: 'au-nsw-dpird',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official government site loaded in a real browser on 2026-08-19; it resolved with HTTP 200 identifying the body as NSW Department of Primary Industries and Regional Development.',
      domainVerification: 'officialGovernmentPortal',
    },
  ],
  limitations: [
    'The department publishes on the legacy dpi.nsw.gov.au domain under its current Primary Industries and Regional Development title; the earlier NSW Department of Primary Industries name is retained as an alias.',
  ],
  profileDepth: 'full-profile',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-19',
};
