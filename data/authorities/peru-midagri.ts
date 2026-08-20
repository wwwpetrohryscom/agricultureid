import type { AgriculturalAuthorityEntry } from '@/types/authority';

/**
 * Verified 2026-08-19 by loading the official site in a real browser and reading
 * what the page states. Responsibilities below are evidenced, never inferred
 * from the body's name alone.
 */
export const peruMidagri: AgriculturalAuthorityEntry = {
  id: 'per-midagri',
  slug: 'peru-midagri',
  officialName: 'Ministerio de Desarrollo Agrario y Riego',
  shortName: 'MIDAGRI',
  localLanguageNames: [
    { lang: 'es', name: 'Ministerio de Desarrollo Agrario y Riego' },
  ],
  authorityType: 'ministry',
  governmentLevel: 'national',
  jurisdictionType: 'country',
  countryCode: 'PER',
  jurisdictionName: 'Peru',
  authorityStatus: 'active',
  officialWebsite: 'https://www.gob.pe/midagri',
  summary:
    'Peru’s national ministry for agrarian development and irrigation, published on the official gob.pe state platform.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Published on the national state platform as Peru’s ministry for agrarian development.',
      sourceId: 'pe-midagri',
      statutory: false,
    },
    {
      area: 'irrigation',
      note: 'Irrigation (Riego) is named in the ministry’s official title.',
      sourceId: 'pe-midagri',
      statutory: false,
    },
  ],
  sourceReferences: ['pe-midagri'],
  verification: [
    {
      url: 'https://www.gob.pe/midagri',
      sourceId: 'pe-midagri',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official site loaded in a real browser on 2026-08-19; it resolved with HTTP 200 under the title “Ministerio de Desarrollo Agrario y Riego - MIDAGRI - Plataforma del Estado Peruano”.',
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
