import type { AgriculturalAuthorityEntry } from '@/types/authority';

/**
 * Verified 2026-08-19 by loading the official site in a real browser and reading
 * what the page states. Responsibilities below are evidenced, never inferred
 * from the body's name alone.
 */
export const brazilMapa: AgriculturalAuthorityEntry = {
  id: 'bra-mapa',
  slug: 'brazil-mapa',
  officialName: 'Ministério da Agricultura e Pecuária',
  shortName: 'MAPA',
  localLanguageNames: [
    { lang: 'pt', name: 'Ministério da Agricultura e Pecuária' },
  ],
  authorityType: 'ministry',
  governmentLevel: 'national',
  jurisdictionType: 'country',
  countryCode: 'BRA',
  jurisdictionName: 'Brazil',
  authorityStatus: 'active',
  officialWebsite: 'https://www.gov.br/agricultura/pt-br',
  summary:
    'Brazil’s national ministry for agriculture and livestock, published on the federal gov.br portal.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Published on the federal government portal as the national ministry for agriculture.',
      sourceId: 'br-mapa',
      statutory: false,
    },
    {
      area: 'livestock',
      note: 'Livestock (Pecuária) is named in the ministry’s official title.',
      sourceId: 'br-mapa',
      statutory: false,
    },
  ],
  sourceReferences: ['br-mapa'],
  verification: [
    {
      url: 'https://www.gov.br/agricultura/pt-br',
      sourceId: 'br-mapa',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official site loaded in a real browser on 2026-08-19; it resolved with HTTP 200 under the title “Home — Ministério da Agricultura e Pecuária”.',
      domainVerification: 'officialGovernmentPortal',
    },
  ],
  limitations: [
    'Detailed statutory competences were not read during the verification pass and are not asserted here.',
  ],
  profileDepth: 'full-profile',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-19',
};
