import type { AgriculturalAuthorityEntry } from '@/types/authority';

/**
 * Verified 2026-08-19 by loading the official government site in a real browser.
 * Responsibilities are evidenced from the body's own official designation and
 * published context — never inferred beyond what the page shows.
 */
export const caQcMapaq: AgriculturalAuthorityEntry = {
  id: 'ca-qc-mapaq',
  slug: 'canada-qc-mapaq',
  officialName:
    'Ministère de l’Agriculture, des Pêcheries et de l’Alimentation',
  shortName: 'MAPAQ',
  alternativeNames: ['MAPAQ'],
  authorityType: 'ministry',
  governmentLevel: 'provincial',
  jurisdictionType: 'province',
  countryCode: 'CAN',
  jurisdictionId: 'CA-QC',
  jurisdictionName: 'Quebec',
  authorityStatus: 'active',
  officialWebsite:
    'https://www.quebec.ca/gouvernement/ministeres-organismes/agriculture-pecheries-alimentation',
  redirectedFrom: 'https://www.mapaq.gouv.qc.ca',
  summary:
    'Ministère de l’Agriculture, des Pêcheries et de l’Alimentation is the first-order subnational public authority responsible for agriculture in Quebec.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Agriculture is the first named portfolio in the ministry’s official French title.',
      sourceId: 'ca-qc-mapaq',
      statutory: false,
    },
    {
      area: 'fisheries',
      note: 'Fisheries (Pêcheries) is a named portfolio in the ministry’s official French title.',
      sourceId: 'ca-qc-mapaq',
      statutory: false,
    },
    {
      area: 'food-safety',
      note: 'Food (Alimentation) is a named portfolio in the ministry’s official French title.',
      sourceId: 'ca-qc-mapaq',
      statutory: false,
    },
  ],
  sourceReferences: ['ca-qc-mapaq'],
  verification: [
    {
      url: 'https://www.quebec.ca/gouvernement/ministeres-organismes/agriculture-pecheries-alimentation',
      sourceId: 'ca-qc-mapaq',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official government site loaded in a real browser on 2026-08-19; it resolved with HTTP 200 identifying the body as Ministère de l’Agriculture, des Pêcheries et de l’Alimentation.',
      domainVerification: 'officialGovernmentPortal',
    },
  ],
  limitations: [
    'The authoritative legal name is the French Ministère de l’Agriculture, des Pêcheries et de l’Alimentation; no English legal name is asserted.',
  ],
  profileDepth: 'full-profile',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-19',
};
