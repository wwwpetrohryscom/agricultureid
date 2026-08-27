import type { AgriculturalSupportProgram } from '@/types/support';

/**
 * Verified 2026-08-20 by loading the official programme page in a real browser.
 * No funding figure or application window is recorded, because none was
 * established from the pages read — an omitted field is honest, an
 * approximated one is not.
 */
export const usNrcsEqip: AgriculturalSupportProgram = {
  id: 'us-nrcs-eqip',
  slug: 'us-nrcs-eqip',
  officialName: 'Environmental Quality Incentives Program',
  shortName: 'EQIP',
  programType: 'environmentalScheme',
  countryCode: 'USA',
  jurisdictionName: 'United States',
  administeringAuthorityIds: ['us-usda-nrcs'],
  beneficiaryTypes: [
    'farmer',
    'rancher',
    'forestLandowner',
    'cropProducer',
    'livestockProducer',
  ],
  officialUrl:
    'https://www.nrcs.usda.gov/programs-initiatives/eqip-environmental-quality-incentives',
  // `recurring` because the official page presents the programme as currently
  // operating with no single closing date. Application WINDOWS are a separate
  // fact and were not verified, so `applicationWindow` is deliberately absent.
  status: 'recurring',
  summary:
    'NRCS describes EQIP as its flagship conservation programme, helping farmers, ranchers and forest landowners integrate conservation into working lands. It provides technical and financial assistance to address natural resource concerns.',
  eligibilitySummary:
    'NRCS states that EQIP provides technical and financial assistance to agricultural producers and forest landowners, and that available practices and practice standards vary by state.',
  sourceReferences: ['prog-us-nrcs-eqip'],
  verification: [
    {
      url: 'https://www.nrcs.usda.gov/programs-initiatives/eqip-environmental-quality-incentives',
      sourceId: 'prog-us-nrcs-eqip',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official programme page loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying the programme as Environmental Quality Incentives Program.',
    },
  ],
  lastVerifiedAt: '2026-08-20',
  limitations: [
    'NRCS states that available practices and practice standards vary by state; this record does not describe the practices available in any particular state.',
    'Payment rates and award amounts were not verified during this pass and are not stated here.',
    'Application periods were not verified; NRCS directs applicants to their local NRCS office.',
  ],
  profileDepth: 'full-profile',
};
