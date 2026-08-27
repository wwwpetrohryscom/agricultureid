import type { AgriculturalRegistryEntry } from '@/types/registry';

/** Verified 2026-08-27 by reading the register through its own public API. */
export const ipAustraliaPbr: AgriculturalRegistryEntry = {
  id: 'ip-australia-pbr',
  slug: 'ip-australia-pbr',
  officialName: 'Australian Plant Breeder’s Rights Register',
  shortName: 'IP Australia PBR',
  registryType: 'varietyCatalogue',
  countryCode: 'AUS',
  jurisdictionName: 'Australia',
  // IP Australia is not yet a record in the authorities layer.
  responsibleAuthorityIds: [],
  officialUrl:
    'https://www.ipaustralia.gov.au/plant-breeders-rights/how-to-search-existing-plant-breeders-rights',
  searchUrl: 'https://ipsearch.ipaustralia.gov.au/pbr/',
  accessType: 'public-search',
  searchable: true,
  downloadable: false,
  // The search interface is served by a public, unauthenticated JSON endpoint,
  // and the register was read through it. That is an internal call the site
  // makes, not an API IP Australia documents, and this field means the second
  // thing. Recording it as an API here would be exactly the inference the
  // registry model forbids.
  apiAvailable: false,
  scope: [
    'Applications for and grants of plant breeder’s rights under the Plant Breeder’s Rights Act 1994',
    'Genus, species, variety denomination, breeder code, legal status, certificate number and the dates of each stage',
  ],
  coverageDescription:
    'Every application since the register opened, ornamentals included. Genus and species are separate published fields, so the register states the botanical species of each entry itself.',
  updateFrequency: 'unknown',
  status: 'active',
  sourceReferences: ['reg-ip-australia-pbr'],
  verification: [
    {
      url: 'https://ipsearch.ipaustralia.gov.au/pbr/',
      sourceId: 'reg-ip-australia-pbr',
      verifiedAt: '2026-08-27',
      evidenceNote:
        'The register was read through its own public search endpoint on 2026-08-27: 11,597 records, of which 2,439 are granted rights in force and 3,691 terminated. Genus and species are published as separate fields on every record that carries them.',
    },
  ],
  limitations: [
    'A plant breeder’s right is ownership, not market access.',
    'Reading the register in pages returned 11,597 records for 11,571 distinct application numbers. The 26 repeats are identical rows and are recorded here as an observed property of the endpoint, not corrected away.',
    'The search interface is served by a public JSON endpoint at production.api.ipaustralia.gov.au, which is how the register was read. IP Australia publishes no documentation for it, so it is not recorded as an API.',
    '81 records publish no genus or species, so no entry can be attached to a cultivar from those rows.',
  ],
  profileDepth: 'directory-record',
  lastVerifiedAt: '2026-08-27',
};
