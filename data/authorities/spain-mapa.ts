import type { AgriculturalAuthorityEntry } from '@/types/authority';

/**
 * DIRECTORY RECORD. Identity and official domain were verified on 2026-08-19,
 * but the body's own statement of its remit was not read during that pass, so
 * nothing beyond the single evidenced item below is asserted and this entry
 * intentionally does NOT receive an indexable detail page. Promoting it to a
 * full profile requires reading its published remit — never restating its name.
 */
export const spainMapa: AgriculturalAuthorityEntry = {
  id: 'es-mapa',
  slug: 'spain-mapa',
  officialName: 'Ministerio de Agricultura, Pesca y Alimentación',
  shortName: 'MAPA',
  localLanguageNames: [
    { lang: 'es', name: 'Ministerio de Agricultura, Pesca y Alimentación' },
  ],
  authorityType: 'ministry',
  governmentLevel: 'national',
  jurisdictionType: 'country',
  countryCode: 'ESP',
  jurisdictionName: 'Spain',
  authorityStatus: 'active',
  officialWebsite: 'https://www.mapa.gob.es',
  summary:
    "Spain's national ministry responsible for agriculture, fisheries and food, which publishes a formal statement of its functions and structure.",
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Publishes a dedicated “Funciones y estructura” (functions and structure) section setting out its remit and organisation.',
      sourceId: 'es-mapa',
      statutory: false,
    },
  ],
  sourceReferences: ['es-mapa'],
  verification: [
    {
      url: 'https://www.mapa.gob.es',
      sourceId: 'es-mapa',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official .gob.es site resolved with HTTP 200 under the title “Ministerio de Agricultura, Pesca y Alimentación”, with a published “Funciones y estructura” section.',
      domainVerification: 'verifiedOfficial',
    },
  ],
  limitations: [
    'This is a verified directory record. The body’s detailed responsibilities, services and registries were not read during the verification pass and are therefore not stated here.',
  ],
  profileDepth: 'directory-record',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-19',
};
