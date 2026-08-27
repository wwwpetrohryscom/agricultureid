import type { AgriculturalRegistryEntry } from '@/types/registry';

/** Verified 2026-08-20 by loading the official system in a real browser. */
export const gevesCatalogueOfficiel: AgriculturalRegistryEntry = {
  id: 'geves-catalogue-officiel',
  slug: 'geves-catalogue-officiel',
  officialName:
    'Catalogue officiel des espèces et variétés de plantes cultivées en France',
  registryType: 'varietyCatalogue',
  countryCode: 'FRA',
  jurisdictionName: 'France',
  responsibleAuthorityIds: ['fr-masa'],
  officialUrl: 'https://www.geves.fr/catalogue/',
  accessType: 'public-search',
  searchable: true,
  downloadable: false,
  // apiAvailable is false unless a public or documented API genuinely exists;
  // internal JSON calls made by the site are NOT an API.
  apiAvailable: false,
  scope: ['Plant species and varieties registered for marketing in France'],
  // `unknown` unless the operator documents a cadence — a recent timestamp is
  // not documentation.
  updateFrequency: 'unknown',
  status: 'active',
  sourceReferences: ['reg-geves-catalogue-officiel'],
  verification: [
    {
      url: 'https://www.geves.fr/catalogue/',
      sourceId: 'reg-geves-catalogue-officiel',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official system loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying itself as Catalogue officiel des espèces et variétés de plantes cultivées en France.',
    },
  ],
  profileDepth: 'full-profile',
  lastVerifiedAt: '2026-08-20',
};
