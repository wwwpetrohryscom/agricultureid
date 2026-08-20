import type { AgriculturalAuthorityEntry } from '@/types/authority';

/**
 * DIRECTORY RECORD. Identity and official domain were verified on 2026-08-19,
 * but the body's own statement of its remit was not read during that pass, so
 * nothing beyond the single evidenced item below is asserted and this entry
 * intentionally does NOT receive an indexable detail page. Promoting it to a
 * full profile requires reading its published remit — never restating its name.
 */
export const franceMasa: AgriculturalAuthorityEntry = {
  id: 'fr-masa',
  slug: 'france-agriculture-ministry',
  officialName:
    "Ministère de l'Agriculture, de l'Agro-alimentaire et de la Souveraineté alimentaire",
  shortName: 'MASA',
  localLanguageNames: [
    {
      lang: 'fr',
      name: "Ministère de l'Agriculture, de l'Agro-alimentaire et de la Souveraineté alimentaire",
    },
  ],
  authorityType: 'ministry',
  governmentLevel: 'national',
  jurisdictionType: 'country',
  countryCode: 'FRA',
  jurisdictionName: 'France',
  authorityStatus: 'active',
  officialWebsite: 'https://agriculture.gouv.fr',
  summary:
    "France's national ministry responsible for agriculture, the agri-food sector and food sovereignty.",
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Identified in its own official title as the ministry for agriculture, the agri-food sector and food sovereignty.',
      sourceId: 'fr-agriculture-gouv',
      statutory: false,
    },
  ],
  sourceReferences: ['fr-agriculture-gouv'],
  verification: [
    {
      url: 'https://agriculture.gouv.fr',
      sourceId: 'fr-agriculture-gouv',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official .gouv.fr site resolved with HTTP 200 under the page heading “Ministère de l’Agriculture, de l’Agro-alimentaire et de la Souveraineté alimentaire”.',
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
