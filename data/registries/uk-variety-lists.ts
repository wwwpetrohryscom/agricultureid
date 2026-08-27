import type { AgriculturalRegistryEntry } from '@/types/registry';

/** Verified 2026-08-27 by downloading the register's own published file. */
export const ukVarietyLists: AgriculturalRegistryEntry = {
  id: 'uk-variety-lists',
  slug: 'uk-variety-lists',
  officialName: 'Great Britain and Northern Ireland Variety Lists',
  shortName: 'GB and NI Variety Lists',
  registryType: 'varietyCatalogue',
  countryCode: 'GBR',
  jurisdictionName: 'United Kingdom',
  responsibleAuthorityIds: ['gb-defra'],
  officialUrl:
    'https://www.gov.uk/guidance/national-lists-of-agricultural-and-vegetable-crops',
  downloadUrl:
    'https://www.gov.uk/government/publications/plant-varieties-and-seeds-gazette-2020',
  accessType: 'public-document',
  searchable: false,
  downloadable: true,
  // apiAvailable is false unless a public or documented API genuinely exists.
  apiAvailable: false,
  scope: [
    'Awarded variety listings for agricultural and vegetable species on the Great Britain and Northern Ireland Variety Lists',
    'Grants of United Kingdom plant breeders’ rights',
    'Maintenance names recognised for listed varieties',
  ],
  coverageDescription:
    'Published as a special edition of the Plant Varieties and Seeds Gazette. The operator states the cadence itself — gov.uk describes "the monthly Seeds Gazette" — so `monthly` here is read, not inferred. One workbook carries the awarded listings and the plant breeders’ rights grants on separate sheets, each with the botanical name of the species.',
  updateFrequency: 'monthly',
  status: 'active',
  sourceReferences: ['reg-uk-seeds-gazette'],
  verification: [
    {
      url: 'https://www.gov.uk/government/publications/plant-varieties-and-seeds-gazette-2020',
      sourceId: 'reg-uk-seeds-gazette',
      verifiedAt: '2026-08-27',
      evidenceNote:
        'The August 2026 special edition was downloaded on 2026-08-27: an 834 kB workbook whose sheet 2 holds 8,120 awarded GB and NI variety listings and whose sheet 4 holds 3,054 grants of UK plant breeders’ rights, both carrying a Botanic Name column.',
    },
  ],
  limitations: [
    'The special edition publishes the awarded lists. It carries no status column, so it shows what is listed rather than what has ceased to be listed.',
    'Listing and plant breeders’ rights are separate awards published on separate sheets, and a variety may hold either, both or neither.',
  ],
  profileDepth: 'directory-record',
  lastVerifiedAt: '2026-08-27',
};
