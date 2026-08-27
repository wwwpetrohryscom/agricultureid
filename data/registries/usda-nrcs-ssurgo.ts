import type { AgriculturalRegistryEntry } from '@/types/registry';

/** Verified 2026-08-27 by querying the system's own public service. */
export const usdaNrcsSsurgo: AgriculturalRegistryEntry = {
  id: 'usda-nrcs-ssurgo',
  slug: 'usda-nrcs-ssurgo',
  officialName: 'Soil Survey Geographic Database (SSURGO)',
  shortName: 'SSURGO',
  registryType: 'soilSurvey',
  countryCode: 'USA',
  jurisdictionName: 'United States',
  // The Natural Resources Conservation Service is already a record here.
  responsibleAuthorityIds: ['us-usda-nrcs'],
  officialUrl:
    'https://www.nrcs.usda.gov/resources/data-and-reports/soil-survey-geographic-database-ssurgo',
  searchUrl: 'https://websoilsurvey.nrcs.usda.gov/app/',
  apiUrl: 'https://sdmdataaccess.sc.egov.usda.gov/',
  documentationUrl:
    'https://sdmdataaccess.sc.egov.usda.gov/documents/TableColumnDescriptionsReport.pdf',
  accessType: 'public-search',
  searchable: true,
  downloadable: true,
  // Soil Data Access is a documented public query service with published
  // schema documentation, which is what this field means.
  apiAvailable: true,
  scope: [
    'Detailed soil survey of the United States, mapped by the National Cooperative Soil Survey',
    'Map units, their named components, and representative physical and chemical values by horizon',
    'USDA Soil Taxonomy classification and drainage class for each component',
  ],
  coverageDescription:
    'Survey area by survey area, usually a county. The survey publishes representative values for each named component of a mapped soil body, not measurements of individual fields.',
  updateFrequency: 'annual',
  status: 'active',
  sourceReferences: ['reg-usda-nrcs-ssurgo'],
  verification: [
    {
      url: 'https://sdmdataaccess.sc.egov.usda.gov/',
      sourceId: 'reg-usda-nrcs-ssurgo',
      verifiedAt: '2026-08-27',
      evidenceNote:
        'Queried through Soil Data Access on 2026-08-27. Thirteen states returned 1,260 survey areas and 13,390 distinct named components with surface-horizon representative values. The service publishes its cadence as an annual refresh, which is why updateFrequency is not unknown.',
    },
  ],
  limitations: [
    'Representative values characterise a mapped soil body. They are informed by field description and laboratory work and are not measurements of a particular field.',
    'The survey records more than one taxonomic order for some components within a state, and more than one drainage class for many. Where it does, both are stated rather than reduced to one.',
  ],
  profileDepth: 'directory-record',
  lastVerifiedAt: '2026-08-27',
};
