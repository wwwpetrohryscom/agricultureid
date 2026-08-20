import type { AgriculturalAuthorityEntry } from '@/types/authority';

/**
 * DIRECTORY RECORD. Identity and official domain were verified on 2026-08-19,
 * but the body's own statement of its remit was not read during that pass, so
 * nothing beyond the single evidenced item below is asserted and this entry
 * intentionally does NOT receive an indexable detail page. Promoting it to a
 * full profile requires reading its published remit — never restating its name.
 */
export const polandMrirw: AgriculturalAuthorityEntry = {
  id: 'pl-mrirw',
  slug: 'poland-ministry-agriculture-rural-development',
  officialName: 'Ministerstwo Rolnictwa i Rozwoju Wsi',
  shortName: 'MRiRW',
  localLanguageNames: [
    { lang: 'pl', name: 'Ministerstwo Rolnictwa i Rozwoju Wsi' },
  ],
  authorityType: 'ministry',
  governmentLevel: 'national',
  jurisdictionType: 'country',
  countryCode: 'POL',
  jurisdictionName: 'Poland',
  authorityStatus: 'active',
  officialWebsite: 'https://www.gov.pl/web/rolnictwo',
  summary:
    "Poland's national ministry of agriculture and rural development, published on the official gov.pl government portal.",
  responsibilities: [
    {
      area: 'rural-development',
      note: 'Published on the national government portal as the ministry responsible for agriculture and rural development.',
      sourceId: 'pl-minrol',
      statutory: false,
    },
  ],
  sourceReferences: ['pl-minrol'],
  verification: [
    {
      url: 'https://www.gov.pl/web/rolnictwo',
      sourceId: 'pl-minrol',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official gov.pl government portal page resolved with HTTP 200 under the title “Ministerstwo Rolnictwa i Rozwoju Wsi”.',
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
