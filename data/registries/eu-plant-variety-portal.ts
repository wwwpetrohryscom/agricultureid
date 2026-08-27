import type { AgriculturalRegistryEntry } from '@/types/registry';

/** Verified 2026-08-20 by loading the official system in a real browser. */
export const euPlantVarietyPortal: AgriculturalRegistryEntry = {
  id: 'eu-plant-variety-portal',
  slug: 'eu-plant-variety-portal',
  officialName: 'EU Plant Variety Portal',
  registryType: 'varietyCatalogue',
  supranationalJurisdiction: 'European Union',
  jurisdictionName: 'European Union',
  responsibleAuthorityIds: ['eu-dg-agri'],
  officialUrl: 'https://ec.europa.eu/food/plant-variety-portal/',
  accessType: 'public-search',
  searchable: true,
  downloadable: false,
  // apiAvailable is false unless a public or documented API genuinely exists;
  // internal JSON calls made by the site are NOT an API.
  apiAvailable: false,
  scope: [
    'Varieties of EU-regulated agricultural and vegetable plant species',
    'Common catalogue listings of plant varieties',
  ],
  // `unknown` unless the operator documents a cadence — a recent timestamp is
  // not documentation.
  updateFrequency: 'unknown',
  status: 'active',
  sourceReferences: ['reg-eu-plant-variety-portal'],
  verification: [
    {
      url: 'https://ec.europa.eu/food/plant-variety-portal/',
      sourceId: 'reg-eu-plant-variety-portal',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official system loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying itself as EU Plant Variety Portal.',
    },
  ],
  limitations: [
    'Listing in the EU common catalogue reflects Member State registration; the portal is a consolidated view rather than the registering body.',
  ],
  profileDepth: 'full-profile',
  lastVerifiedAt: '2026-08-20',
};
