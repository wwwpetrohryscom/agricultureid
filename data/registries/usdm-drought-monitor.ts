import type { AgriculturalRegistryEntry } from '@/types/registry';

/** Verified 2026-08-27 by loading the system in a real browser. */
export const usdmDroughtMonitor: AgriculturalRegistryEntry = {
  id: 'usdm-drought-monitor',
  slug: 'usdm-drought-monitor',
  officialName: 'U.S. Drought Monitor',
  shortName: 'USDM',
  registryType: 'droughtAssessmentService',
  countryCode: 'USA',
  jurisdictionName: 'United States',
  responsibleAuthorityIds: [],
  officialUrl: 'https://droughtmonitor.unl.edu/',
  searchUrl: 'https://droughtmonitor.unl.edu/DmData/DataTables.aspx',
  accessType: 'public-document',
  searchable: true,
  downloadable: true,
  apiAvailable: true,
  apiUrl: 'https://usdmdataservices.unl.edu/api',
  documentationUrl:
    'https://droughtmonitor.unl.edu/DmData/DataDownload/WebServiceInfo.aspx',
  scope: [
    'A weekly national map of drought conditions in categories D0 to D4',
    'Area statistics by state, county and climate division, in categorical and cumulative form',
    'The validity week each map applies to',
  ],
  coverageDescription:
    'Produced jointly by the National Drought Mitigation Center at the University of Nebraska–Lincoln, the United States Department of Agriculture and the National Oceanic and Atmospheric Administration. Each weekly map is drawn by a rotating author who combines several drought indicators with reports from local observers.',
  updateFrequency: 'unknown',
  status: 'active',
  sourceReferences: ['reg-usdm'],
  verification: [
    {
      url: 'https://droughtmonitor.unl.edu/',
      sourceId: 'reg-usdm',
      verifiedAt: '2026-08-27',
      evidenceNote:
        'Loaded in a real browser on 2026-08-27; it resolved with HTTP 200 under the title “Current Map | U.S. Drought Monitor”.',
    },
  ],
  limitations: [
    'The map is an assessment drawn by an author, not an instrument reading and not a model output.',
    'D0, “abnormally dry”, is a precursor and recovery category rather than drought.',
    'Area statistics are shares of a state’s land area, not of its farms or its cropland.',
    'Each map is valid for one week and says which; outside that week it is history.',
  ],
  profileDepth: 'full-profile',
  lastVerifiedAt: '2026-08-27',
};
