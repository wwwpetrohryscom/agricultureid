import type { AgriculturalAuthorityEntry } from '@/types/authority';

/**
 * DIRECTORY RECORD. Identity and official domain were verified on 2026-08-19,
 * but the body's own statement of its remit was not read during that pass, so
 * nothing beyond the single evidenced item below is asserted and this entry
 * intentionally does NOT receive an indexable detail page. Promoting it to a
 * full profile requires reading its published remit — never restating its name.
 */
export const netherlandsLvvn: AgriculturalAuthorityEntry = {
  id: 'nl-lvvn',
  slug: 'netherlands-lvvn',
  officialName: 'Ministerie van Landbouw, Visserij, Voedselzekerheid en Natuur',
  shortName: 'LVVN',
  localLanguageNames: [
    {
      lang: 'nl',
      name: 'Ministerie van Landbouw, Visserij, Voedselzekerheid en Natuur',
    },
  ],
  authorityType: 'ministry',
  governmentLevel: 'national',
  jurisdictionType: 'country',
  countryCode: 'NLD',
  jurisdictionName: 'Netherlands',
  authorityStatus: 'active',
  officialWebsite:
    'https://www.rijksoverheid.nl/ministeries/ministerie-van-landbouw-visserij-voedselzekerheid-en-natuur',
  summary:
    "The Netherlands' national ministry for agriculture, fisheries, food security and nature.",
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Published on the national government portal as the ministry covering agriculture, fisheries, food security and nature.',
      sourceId: 'nl-lvvn',
      statutory: false,
    },
  ],
  sourceReferences: ['nl-lvvn'],
  verification: [
    {
      url: 'https://www.rijksoverheid.nl/ministeries/ministerie-van-landbouw-visserij-voedselzekerheid-en-natuur',
      sourceId: 'nl-lvvn',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official rijksoverheid.nl government portal page resolved with HTTP 200 under the heading “Ministerie van Landbouw, Visserij, Voedselzekerheid en Natuur”.',
      domainVerification: 'officialGovernmentPortal',
    },
  ],
  limitations: [
    'This is a verified directory record. The body’s detailed responsibilities, services and registries were not read during the verification pass and are therefore not stated here.',
  ],
  profileDepth: 'directory-record',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-19',
};
