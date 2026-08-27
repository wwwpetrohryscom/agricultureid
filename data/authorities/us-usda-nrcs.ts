import type { AgriculturalAuthorityEntry } from '@/types/authority';

/** Verified 2026-08-20. Added in Wave 7 so support programmes name their real administering agency. */
export const usUsdaNrcs: AgriculturalAuthorityEntry = {
  id: 'us-usda-nrcs',
  slug: 'united-states-nrcs',
  officialName: 'Natural Resources Conservation Service',
  shortName: 'NRCS',
  authorityType: 'agency',
  governmentLevel: 'federal',
  jurisdictionType: 'country',
  countryCode: 'USA',
  jurisdictionName: 'United States',
  authorityStatus: 'active',
  officialWebsite: 'https://www.nrcs.usda.gov',
  summary:
    'The USDA agency delivering conservation programmes on working lands, providing technical and financial assistance to agricultural producers and forest landowners.',
  responsibilities: [
    {
      area: 'land-management',
      note: 'Operates USDA’s conservation programmes on working agricultural and forest land, providing technical and financial assistance to producers.',
      sourceId: 'gov-us-usda-nrcs',
      statutory: true,
    },
    {
      area: 'soils',
      note: 'Named for natural resources conservation; its flagship programme addresses soil health and erosion among its stated resource concerns.',
      sourceId: 'gov-us-usda-nrcs',
      statutory: false,
    },
  ],
  sourceReferences: ['gov-us-usda-nrcs'],
  verification: [
    {
      url: 'https://www.nrcs.usda.gov',
      sourceId: 'gov-us-usda-nrcs',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official www.nrcs.usda.gov site loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying the agency as Natural Resources Conservation Service.',
      domainVerification: 'officialSubdomain',
    },
  ],
  limitations: [
    'This is an agency within the United States Department of Agriculture; this record describes the agency, not the parent department.',
    'The statutes under which the agency acts are set out in United States law and are not enumerated here.',
  ],
  profileDepth: 'full-profile',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-20',
};
