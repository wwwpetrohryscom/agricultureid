import type { AgriculturalAuthorityEntry } from '@/types/authority';

/** Verified 2026-08-19 by loading the official state site in a real browser. */
export const usNcNcdas: AgriculturalAuthorityEntry = {
  id: 'us-nc-ncdas',
  slug: 'united-states-ncdas',
  officialName:
    'North Carolina Department of Agriculture and Consumer Services',
  shortName: 'NCDA&CS',
  authorityType: 'department',
  governmentLevel: 'state',
  jurisdictionType: 'state',
  countryCode: 'USA',
  jurisdictionId: 'US-NC',
  jurisdictionName: 'North Carolina',
  authorityStatus: 'active',
  officialWebsite: 'https://www.ncagr.gov',
  summary:
    'North Carolina Department of Agriculture and Consumer Services is the first-order state public authority responsible for agriculture in North Carolina.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Agriculture is a named portfolio in the department’s official title.',
      sourceId: 'us-nc-ncdas',
      statutory: false,
    },
    {
      area: 'food-safety',
      note: 'Consumer services is a named portfolio of the same department.',
      sourceId: 'us-nc-ncdas',
      statutory: false,
    },
  ],
  sourceReferences: ['us-nc-ncdas'],
  verification: [
    {
      url: 'https://www.ncagr.gov',
      sourceId: 'us-nc-ncdas',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official state government site loaded in a real browser on 2026-08-19; it resolved with HTTP 200 identifying the body as North Carolina Department of Agriculture and Consumer Services.',
      domainVerification: 'officialGovernmentPortal',
    },
  ],
  limitations: [
    'Portfolio scope is taken from the department’s official title; statutory powers are set out in state law and are not asserted here.',
  ],
  profileDepth: 'full-profile',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-19',
};
