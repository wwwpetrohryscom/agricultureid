import type { AgriculturalAuthorityEntry } from '@/types/authority';

/**
 * Verified 2026-08-19 by loading the official site in a real browser and reading
 * what the page states. Responsibilities below are evidenced, never inferred
 * from the body's name alone.
 */
export const ukraineMinagro: AgriculturalAuthorityEntry = {
  id: 'ukr-minagro',
  slug: 'ukraine-minagro',
  officialName: 'Ministry of Agrarian Policy and Food of Ukraine',
  shortName: 'Minagro',
  localLanguageNames: [
    {
      lang: 'uk',
      name: 'Міністерство аграрної політики та продовольства України',
    },
  ],
  authorityType: 'ministry',
  governmentLevel: 'national',
  jurisdictionType: 'country',
  countryCode: 'UKR',
  jurisdictionName: 'Ukraine',
  authorityStatus: 'active',
  officialWebsite: 'https://minagro.gov.ua/',
  summary:
    'Ukraine’s national ministry for agrarian policy and food. Its own site states that the ministry implements state support for the agro-industrial complex and initiates government programmes, and it publishes its founding regulation, structure and leadership.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'States that it implements state support for Ukraine’s agro-industrial complex and initiates government programmes for it.',
      sourceId: 'ua-minagro',
      statutory: false,
    },
    {
      area: 'agricultural-subsidies',
      note: 'Publishes state support programmes for the agro-industrial complex as a core activity.',
      sourceId: 'ua-minagro',
      statutory: false,
    },
  ],
  sourceReferences: ['ua-minagro'],
  verification: [
    {
      url: 'https://minagro.gov.ua/',
      sourceId: 'ua-minagro',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official site loaded in a real browser on 2026-08-19; it resolved with HTTP 200 under the title “Головна | Міністерство аграрної політики та продовольства України”.',
      domainVerification: 'verifiedOfficial',
    },
  ],
  limitations: [
    'The ministry’s statutory competences are set out in its founding regulation (Положення про Мінагрополітики) rather than on the pages read here, and are not enumerated in this record.',
    'Coverage of agricultural administration in areas affected by ongoing hostilities is not described by this record.',
  ],
  profileDepth: 'full-profile',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-19',
};
