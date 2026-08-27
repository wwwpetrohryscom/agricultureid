import type { AgriculturalRegistryEntry } from '@/types/registry';

/** Verified 2026-08-20 by loading the official system in a real browser. */
export const euPesticidesDatabase: AgriculturalRegistryEntry = {
  id: 'eu-pesticides-database',
  slug: 'eu-pesticides-database',
  officialName: 'EU Pesticides Database',
  registryType: 'pesticideActiveSubstanceDatabase',
  supranationalJurisdiction: 'European Union',
  jurisdictionName: 'European Union',
  responsibleAuthorityIds: ['eu-dg-agri'],
  officialUrl:
    'https://ec.europa.eu/food/plant/pesticides/eu-pesticides-database/start/screen/active-substances',
  accessType: 'public-search',
  searchable: true,
  downloadable: false,
  // apiAvailable is false unless a public or documented API genuinely exists;
  // internal JSON calls made by the site are NOT an API.
  apiAvailable: false,
  scope: [
    'Approval status of pesticide active substances in the European Union',
    'Maximum residue levels (MRLs)',
    'Plant protection product authorisations reported by Member States',
  ],
  // `unknown` unless the operator documents a cadence — a recent timestamp is
  // not documentation.
  updateFrequency: 'unknown',
  status: 'active',
  sourceReferences: ['reg-eu-pesticides-database'],
  verification: [
    {
      url: 'https://ec.europa.eu/food/plant/pesticides/eu-pesticides-database/start/screen/active-substances',
      sourceId: 'reg-eu-pesticides-database',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official system loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying itself as EU Pesticides Database.',
    },
  ],
  limitations: [
    'Product-level authorisation is granted by individual Member States; this EU-level database records approval of active substances and reported national authorisations, and is not itself a national product register.',
  ],
  profileDepth: 'full-profile',
  lastVerifiedAt: '2026-08-20',
};
