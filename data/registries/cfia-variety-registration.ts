import type { AgriculturalRegistryEntry } from '@/types/registry';

/** Verified 2026-08-20 by loading the official system in a real browser. */
export const cfiaVarietyRegistration: AgriculturalRegistryEntry = {
  id: 'cfia-variety-registration',
  slug: 'cfia-variety-registration',
  officialName: 'Variety Registration (CFIA)',
  registryType: 'varietyCatalogue',
  countryCode: 'CAN',
  jurisdictionName: 'Canada',
  responsibleAuthorityIds: ['can-cfia'],
  officialUrl:
    'https://inspection.canada.ca/en/plant-varieties/variety-registration',
  searchUrl:
    'https://active.inspection.gc.ca/netapp/regvar/regvar_lookupe.aspx?lang=e',
  downloadUrl:
    'https://active.inspection.gc.ca/netapp/regvar/regvar_resultse.aspx?lang=e&Reg=&Kind=&SubKind=&Name=&PNTRadio=All&Rep=&Status=&startDate=&endDate=&btn_submit=Submit&download=csv',
  accessType: 'public-search',
  searchable: true,
  downloadable: true,
  // apiAvailable is false unless a public or documented API genuinely exists;
  // internal JSON calls made by the site are NOT an API.
  apiAvailable: false,
  scope: [
    'Crop varieties registered for sale in Canada',
    'Variety registration requirements and registered variety listings',
    'Registration number, crop kind and sub-kind, Canadian representative, registration status and dates for each variety',
  ],
  coverageDescription:
    'Field crops only. The register covers the crop kinds whose varieties must be registered under the Seeds Regulations, so it holds no fruit, no vegetables and no maize. It publishes a crop kind rather than a botanical name.',
  // `unknown` unless the operator documents a cadence — a recent timestamp is
  // not documentation.
  updateFrequency: 'unknown',
  status: 'active',
  sourceReferences: ['reg-cfia-variety-registration'],
  verification: [
    {
      url: 'https://inspection.canada.ca/en/plant-varieties/variety-registration',
      sourceId: 'reg-cfia-variety-registration',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official system loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying itself as Variety Registration (CFIA).',
    },
    {
      url: 'https://active.inspection.gc.ca/netapp/regvar/regvar_resultse.aspx?lang=e&Reg=&Kind=&SubKind=&Name=&PNTRadio=All&Rep=&Status=&startDate=&endDate=&btn_submit=Submit&download=csv',
      sourceId: 'reg-cfia-variety-registration',
      verifiedAt: '2026-08-27',
      evidenceNote:
        'The register’s own CSV export was downloaded on 2026-08-27 and returned 8,076 registrations across 33 crop kinds. This record previously said the system was neither searchable nor downloadable; both were wrong and are corrected here against the retrieved file.',
    },
  ],
  limitations: [
    'The register publishes a crop kind and sub-kind, never a botanical name. Reaching a species from an entry requires the equivalence the Seeds Regulations give for that crop kind.',
    'Registration status conflates scope with standing: "National Registration" and "Regional Registration" both mean currently registered, and only "Cancelled" means it has ended.',
  ],
  profileDepth: 'directory-record',
  lastVerifiedAt: '2026-08-27',
};
