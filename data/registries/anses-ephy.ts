import type { AgriculturalRegistryEntry } from '@/types/registry';

/** Verified 2026-08-20 by loading the official system in a real browser. */
export const ansesEphy: AgriculturalRegistryEntry = {
  id: 'anses-ephy',
  slug: 'anses-ephy',
  officialName: 'E-Phy',
  registryType: 'pesticideProductRegistry',
  countryCode: 'FRA',
  jurisdictionName: 'France',
  responsibleAuthorityIds: ['fr-masa'],
  officialUrl: 'https://ephy.anses.fr',
  accessType: 'mixed',
  searchable: true,
  downloadable: true,
  // apiAvailable is false unless a public or documented API genuinely exists;
  // internal JSON calls made by the site are NOT an API.
  apiAvailable: false,
  scope: [
    'Plant protection products authorised in France',
    'Fertilising materials and growing media',
    'Authorised uses, doses and conditions',
  ],
  // `unknown` unless the operator documents a cadence — a recent timestamp is
  // not documentation.
  updateFrequency: 'unknown',
  status: 'active',
  sourceReferences: ['reg-anses-ephy'],
  verification: [
    {
      url: 'https://ephy.anses.fr',
      sourceId: 'reg-anses-ephy',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official system loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying itself as E-Phy.',
    },
  ],
  limitations: [
    'E-Phy is operated by ANSES; authorisation decisions and their conditions are set out in the official decisions the catalogue links to.',
  ],
  profileDepth: 'full-profile',
  lastVerifiedAt: '2026-08-20',
};
