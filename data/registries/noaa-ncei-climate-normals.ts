import type { AgriculturalRegistryEntry } from '@/types/registry';

/** Verified 2026-08-27 by loading the system in a real browser. */
export const noaaNceiClimateNormals: AgriculturalRegistryEntry = {
  id: 'noaa-ncei-climate-normals',
  slug: 'noaa-ncei-climate-normals',
  officialName: 'U.S. Climate Normals',
  shortName: 'NCEI Climate Normals',
  registryType: 'climateDataService',
  countryCode: 'USA',
  jurisdictionName: 'United States',
  responsibleAuthorityIds: [],
  officialUrl:
    'https://www.ncei.noaa.gov/products/land-based-station/us-climate-normals',
  searchUrl:
    'https://www.ncei.noaa.gov/access/us-climate-normals/#dataset=normals-annualseasonal',
  accessType: 'public-document',
  searchable: true,
  downloadable: true,
  apiAvailable: true,
  apiUrl: 'https://www.ncei.noaa.gov/access/services/data/v1',
  documentationUrl:
    'https://www.ncei.noaa.gov/support/access-data-service-api-user-documentation',
  scope: [
    'Thirty-year averages of temperature and precipitation at United States weather stations',
    'Derived agricultural quantities including growing degree days and frost-day counts',
    'A completeness flag and a count of years used, for every published normal',
  ],
  coverageDescription:
    'More than 15,000 stations have precipitation normals and more than 7,300 have temperature normals for 1991–2020. The service publishes hourly, daily, monthly, seasonal and annual normals; the annual and seasonal set is the one read here.',
  updateFrequency: 'unknown',
  status: 'active',
  sourceReferences: ['reg-noaa-ncei-normals'],
  verification: [
    {
      url: 'https://www.ncei.noaa.gov/products/land-based-station/us-climate-normals',
      sourceId: 'reg-noaa-ncei-normals',
      verifiedAt: '2026-08-27',
      evidenceNote:
        'Loaded in a real browser on 2026-08-27; it resolved with HTTP 200 under the title “U.S. Climate Normals | National Centers for Environmental Information (NCEI)” and the heading “U.S. Climate Normals”.',
    },
  ],
  limitations: [
    'A normal is an average of 1991–2020. It is not a measurement of any year and not a forecast of any year.',
    'Most normals are computed from fewer than thirty years of station data, and the service says how many were used for each one.',
    'A station normal describes that station, not the county, state or field around it.',
  ],
  profileDepth: 'full-profile',
  lastVerifiedAt: '2026-08-27',
};
