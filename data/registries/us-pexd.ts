import type { AgriculturalRegistryEntry } from '@/types/registry';

/** Verified 2026-08-27 by loading the system in a real browser. */
export const usPexd: AgriculturalRegistryEntry = {
  id: 'us-pexd',
  slug: 'us-pexd',
  officialName: 'Phytosanitary Export Database (PExD)',
  shortName: 'PExD',
  registryType: 'borderControlSystem',
  countryCode: 'USA',
  jurisdictionName: 'United States',
  responsibleAuthorityIds: ['us-usda-aphis'],
  officialUrl: 'https://pcit.aphis.usda.gov/PExD/faces/ViewPExD.jsf',
  searchUrl: 'https://pcit.aphis.usda.gov/PExD/faces/ViewPExD.jsf',
  accessType: 'restricted',
  searchable: false,
  downloadable: false,
  apiAvailable: false,
  loginRequired: true,
  scope: [
    'Importing countries’ phytosanitary requirements for plants and plant products exported from the United States',
    'The certification statements an exporting inspector must be able to make',
  ],
  coverageDescription:
    'The database is reached through the Phytosanitary Certificate Issuance and Tracking system and its search requires a logon. The landing page is public; the requirements behind it are not openly queryable.',
  updateFrequency: 'unknown',
  status: 'active',
  sourceReferences: ['reg-us-pexd'],
  verification: [
    {
      url: 'https://pcit.aphis.usda.gov/PExD/faces/ViewPExD.jsf',
      sourceId: 'reg-us-pexd',
      verifiedAt: '2026-08-27',
      evidenceNote:
        'Loaded on 2026-08-27; it resolved with HTTP 200 under the title “Welcome to PExD!” and presented “PExD: Invalid Logon”, which is why access is recorded as restricted rather than public.',
    },
  ],
  limitations: [
    'The requirement search requires a logon, so no requirement from it is recorded here.',
    'Requirements are specific to the destination country and the commodity.',
  ],
  profileDepth: 'directory-record',
  lastVerifiedAt: '2026-08-27',
};
