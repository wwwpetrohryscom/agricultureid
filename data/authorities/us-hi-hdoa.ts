import type { AgriculturalAuthorityEntry } from '@/types/authority';

/** Verified 2026-08-20 by loading the official government site in a real browser. */
export const usHiHdoa: AgriculturalAuthorityEntry = {
  id: 'us-hi-hdoa',
  slug: 'united-states-hdoa',
  officialName: 'Hawaiʻi Department of Agriculture and Biosecurity',
  shortName: 'HDOA',
  alternativeNames: ['Hawaii Department of Agriculture'],
  authorityType: 'department',
  governmentLevel: 'state',
  jurisdictionType: 'state',
  countryCode: 'USA',
  jurisdictionId: 'US-HI',
  jurisdictionName: 'Hawaii',
  authorityStatus: 'active',
  officialWebsite: 'https://hdoa.hawaii.gov',
  summary:
    'Hawaiʻi Department of Agriculture and Biosecurity is the first-order subnational public authority responsible for agriculture in Hawaii.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Agriculture is a named portfolio in the department’s official title.',
      sourceId: 'us-hi-hdoa',
      statutory: false,
    },
    {
      area: 'plant-health',
      note: 'Biosecurity is a named portfolio in the department’s current official title.',
      sourceId: 'us-hi-hdoa',
      statutory: false,
    },
  ],
  sourceReferences: ['us-hi-hdoa'],
  verification: [
    {
      url: 'https://hdoa.hawaii.gov',
      sourceId: 'us-hi-hdoa',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official government site loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying the body as Hawaiʻi Department of Agriculture and Biosecurity.',
      domainVerification: 'officialGovernmentPortal',
    },
  ],
  limitations: [
    'Portfolio scope is taken from the body’s official title; the statutory powers behind each portfolio are set out in law and are not asserted here.',
    'The department’s current official title includes Biosecurity; the former Hawaii Department of Agriculture name is retained as an alias.',
  ],
  profileDepth: 'full-profile',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-20',
};
