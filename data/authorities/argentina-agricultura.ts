import type { AgriculturalAuthorityEntry } from '@/types/authority';

/**
 * Verified 2026-08-19 by loading the official site in a real browser and reading
 * what the page states. Responsibilities below are evidenced, never inferred
 * from the body's name alone.
 */
export const argentinaAgri: AgriculturalAuthorityEntry = {
  id: 'arg-agricultura',
  slug: 'argentina-agricultura',
  officialName: 'Secretaría de Agricultura, Ganadería y Pesca',
  shortName: 'Agricultura, Ganadería y Pesca',
  localLanguageNames: [{ lang: 'es', name: 'Agricultura, Ganadería y Pesca' }],
  authorityType: 'secretariat',
  governmentLevel: 'national',
  jurisdictionType: 'country',
  countryCode: 'ARG',
  jurisdictionName: 'Argentina',
  authorityStatus: 'active',
  officialWebsite: 'https://www.argentina.gob.ar/economia/agricultura',
  summary:
    'Argentina’s national agriculture, livestock and fisheries authority, published within the Ministry of Economy on the national government portal. It states that it works to strengthen and increase agricultural and livestock production across the country.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'States that it works to strengthen and increase agricultural and livestock production nationwide.',
      sourceId: 'ar-agri',
      statutory: false,
    },
    {
      area: 'livestock',
      note: 'Livestock (Ganadería) is named in the body’s official designation and in its stated purpose.',
      sourceId: 'ar-agri',
      statutory: false,
    },
  ],
  sourceReferences: ['ar-agri'],
  verification: [
    {
      url: 'https://www.argentina.gob.ar/economia/agricultura',
      sourceId: 'ar-agri',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official site loaded in a real browser on 2026-08-19; it resolved with HTTP 200 under the title “Agricultura, Ganadería y Pesca | Argentina.gob.ar”.',
      domainVerification: 'officialGovernmentPortal',
    },
  ],
  limitations: [
    'This body sits within Argentina’s Ministry of Economy rather than being a standalone ministry; the record reflects the structure published on the national portal at the verification date.',
  ],
  profileDepth: 'full-profile',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-19',
};
