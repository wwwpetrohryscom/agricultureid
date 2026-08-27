import type { AgriculturalAuthorityEntry } from '@/types/authority';

/** Verified 2026-08-20. Added in Wave 7 so support programmes name their real administering agency. */
export const usUsdaFsa: AgriculturalAuthorityEntry = {
  id: 'us-usda-fsa',
  slug: 'united-states-fsa',
  officialName: 'Farm Service Agency',
  shortName: 'FSA',
  authorityType: 'agency',
  governmentLevel: 'federal',
  jurisdictionType: 'country',
  countryCode: 'USA',
  jurisdictionName: 'United States',
  authorityStatus: 'active',
  officialWebsite: 'https://www.fsa.usda.gov',
  summary:
    'The USDA agency that administers federal farm programmes, including commodity income-support programmes for agricultural producers.',
  responsibilities: [
    {
      area: 'agricultural-subsidies',
      note: 'Delivers USDA farm programmes including commodity income-support programmes for agricultural producers.',
      sourceId: 'gov-us-usda-fsa',
      statutory: true,
    },
    {
      area: 'farm-policy',
      note: 'Publishes the programme framework through which USDA farm support is administered.',
      sourceId: 'gov-us-usda-fsa',
      statutory: false,
    },
  ],
  sourceReferences: ['gov-us-usda-fsa'],
  verification: [
    {
      url: 'https://www.fsa.usda.gov',
      sourceId: 'gov-us-usda-fsa',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official www.fsa.usda.gov site loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying the agency as Farm Service Agency.',
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
