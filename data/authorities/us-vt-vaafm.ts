import type { AgriculturalAuthorityEntry } from '@/types/authority';

/** Verified 2026-08-20 by loading the official government site in a real browser. */
export const usVtVaafm: AgriculturalAuthorityEntry = {
  id: 'us-vt-vaafm',
  slug: 'united-states-vaafm',
  officialName: 'Vermont Agency of Agriculture, Food and Markets',
  shortName: 'VAAFM',
  authorityType: 'department',
  governmentLevel: 'state',
  jurisdictionType: 'state',
  countryCode: 'USA',
  jurisdictionId: 'US-VT',
  jurisdictionName: 'Vermont',
  authorityStatus: 'active',
  officialWebsite: 'https://agriculture.vermont.gov',
  summary:
    'Vermont Agency of Agriculture, Food and Markets is the first-order subnational public authority responsible for agriculture in Vermont.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Agriculture is a named portfolio in the agency’s official title.',
      sourceId: 'us-vt-vaafm',
      statutory: false,
    },
    {
      area: 'food-safety',
      note: 'Food is a named portfolio in the agency’s official title.',
      sourceId: 'us-vt-vaafm',
      statutory: false,
    },
    {
      area: 'agricultural-trade',
      note: 'Markets is a named portfolio in the agency’s official title.',
      sourceId: 'us-vt-vaafm',
      statutory: false,
    },
  ],
  sourceReferences: ['us-vt-vaafm'],
  verification: [
    {
      url: 'https://agriculture.vermont.gov',
      sourceId: 'us-vt-vaafm',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official government site loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying the body as Vermont Agency of Agriculture, Food and Markets.',
      domainVerification: 'officialGovernmentPortal',
    },
  ],
  limitations: [
    'Portfolio scope is taken from the body’s official title; the statutory powers behind each portfolio are set out in law and are not asserted here.',
  ],
  profileDepth: 'full-profile',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-20',
};
