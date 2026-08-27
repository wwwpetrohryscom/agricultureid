import type { AgriculturalAuthorityEntry } from '@/types/authority';

/** Verified 2026-08-20. Added in Wave 7 so support programmes name their real administering agency. */
export const usUsdaRma: AgriculturalAuthorityEntry = {
  id: 'us-usda-rma',
  slug: 'united-states-rma',
  officialName: 'Risk Management Agency',
  shortName: 'RMA',
  authorityType: 'agency',
  governmentLevel: 'federal',
  jurisdictionType: 'country',
  countryCode: 'USA',
  jurisdictionName: 'United States',
  authorityStatus: 'active',
  officialWebsite: 'https://www.rma.usda.gov',
  summary:
    'The USDA agency responsible for the federal crop insurance programme, through which agricultural producers manage production and revenue risk.',
  responsibilities: [
    {
      area: 'agricultural-subsidies',
      note: 'Administers the federal crop insurance programme through which agricultural producers manage production and revenue risk.',
      sourceId: 'gov-us-usda-rma',
      statutory: true,
    },
    {
      area: 'farm-policy',
      note: 'Publishes the federal crop insurance framework as its core programme area.',
      sourceId: 'gov-us-usda-rma',
      statutory: false,
    },
  ],
  sourceReferences: ['gov-us-usda-rma'],
  verification: [
    {
      url: 'https://www.rma.usda.gov',
      sourceId: 'gov-us-usda-rma',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official www.rma.usda.gov site loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying the agency as Risk Management Agency.',
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
