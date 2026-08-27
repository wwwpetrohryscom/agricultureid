import type { AgriculturalRegistryEntry } from '@/types/registry';

/** Verified 2026-08-20 by loading the official system in a real browser. */
export const ctgbToelatingen: AgriculturalRegistryEntry = {
  id: 'ctgb-toelatingen',
  slug: 'ctgb-toelatingen',
  officialName: 'Ctgb Toelatingen',
  registryType: 'pesticideProductRegistry',
  countryCode: 'NLD',
  jurisdictionName: 'Netherlands',
  responsibleAuthorityIds: ['nl-lvvn'],
  officialUrl: 'https://toelatingen.ctgb.nl/',
  accessType: 'public-search',
  searchable: true,
  downloadable: false,
  // apiAvailable is false unless a public or documented API genuinely exists;
  // internal JSON calls made by the site are NOT an API.
  apiAvailable: false,
  scope: [
    'Plant protection products and biocides authorised in the Netherlands',
    'Authorisation conditions and permitted uses',
  ],
  // `unknown` unless the operator documents a cadence — a recent timestamp is
  // not documentation.
  updateFrequency: 'unknown',
  status: 'active',
  sourceReferences: ['reg-ctgb-toelatingen'],
  verification: [
    {
      url: 'https://toelatingen.ctgb.nl/',
      sourceId: 'reg-ctgb-toelatingen',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official system loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying itself as Ctgb Toelatingen.',
    },
  ],
  profileDepth: 'full-profile',
  lastVerifiedAt: '2026-08-20',
};
