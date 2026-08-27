import type { AgriculturalRegistryEntry } from '@/types/registry';

/** Verified 2026-08-27 by downloading the register's own published file. */
export const usdaPvpo: AgriculturalRegistryEntry = {
  id: 'usda-pvpo',
  slug: 'usda-pvpo',
  officialName: 'United States Plant Variety Protection Office',
  shortName: 'PVPO',
  registryType: 'varietyCatalogue',
  countryCode: 'USA',
  jurisdictionName: 'United States',
  // The Agricultural Marketing Service is not yet a record in the authorities
  // layer, and naming a body that is not there would be a dangling reference.
  responsibleAuthorityIds: [],
  officialUrl:
    'https://www.ams.usda.gov/services/plant-variety-protection/application-status',
  downloadUrl:
    'https://www.ams.usda.gov/sites/default/files/media/USPVPApplicationStatusReport.xlsx',
  accessType: 'public-document',
  searchable: false,
  downloadable: true,
  apiAvailable: false,
  scope: [
    'Applications for and certificates of plant variety protection issued under the Plant Variety Protection Act',
    'Scientific and common name, applicant, application and issue dates and certificate status for each application',
  ],
  coverageDescription:
    'A single status report covering every application since the Act took effect in 1970. It is an intellectual property register: the United States operates no national variety list, so a certificate says who owns a variety, never that it may be marketed.',
  updateFrequency: 'unknown',
  status: 'active',
  sourceReferences: ['reg-usda-pvpo'],
  verification: [
    {
      url: 'https://www.ams.usda.gov/services/plant-variety-protection/application-status',
      sourceId: 'reg-usda-pvpo',
      verifiedAt: '2026-08-27',
      evidenceNote:
        'The US PVP Application Status Report was downloaded on 2026-08-27: 18,323 rows carrying variety name, scientific name, common name, applicant, dates and certificate status. 8,931 certificates issued, 6,322 expired.',
    },
  ],
  limitations: [
    'A certificate of plant variety protection is ownership, not market access. Absence from this register does not mean a variety may not be sold in the United States.',
    'The register spells two of its own status values "Abondoned". The wording is recorded as published rather than corrected.',
  ],
  profileDepth: 'directory-record',
  lastVerifiedAt: '2026-08-27',
};
