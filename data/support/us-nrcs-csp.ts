import type { AgriculturalSupportProgram } from '@/types/support';

/**
 * Verified 2026-08-20 by loading the official programme page in a real browser.
 * No funding figure or application window is recorded, because none was
 * established from the pages read — an omitted field is honest, an
 * approximated one is not.
 */
export const usNrcsCsp: AgriculturalSupportProgram = {
  id: 'us-nrcs-csp',
  slug: 'us-nrcs-csp',
  officialName: 'Conservation Stewardship Program',
  shortName: 'CSP',
  programType: 'conservationProgram',
  countryCode: 'USA',
  jurisdictionName: 'United States',
  administeringAuthorityIds: ['us-usda-nrcs'],
  beneficiaryTypes: [
    'farmer',
    'rancher',
    'landManager',
    'cropProducer',
    'livestockProducer',
  ],
  officialUrl:
    'https://www.nrcs.usda.gov/programs-initiatives/csp-conservation-stewardship-program',
  // `recurring` because the official page presents the programme as currently
  // operating with no single closing date. Application WINDOWS are a separate
  // fact and were not verified, so `applicationWindow` is deliberately absent.
  status: 'recurring',
  summary:
    'NRCS describes CSP as helping producers build on existing conservation efforts while strengthening their operation, with technical and financial assistance provided under a custom-designed conservation plan.',
  eligibilitySummary:
    'NRCS states that a CSP plan is custom designed with the producer, and that the agency provides technical and financial assistance to address identified natural resource problems.',
  sourceReferences: ['prog-us-nrcs-csp'],
  verification: [
    {
      url: 'https://www.nrcs.usda.gov/programs-initiatives/csp-conservation-stewardship-program',
      sourceId: 'prog-us-nrcs-csp',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official programme page loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying the programme as Conservation Stewardship Program.',
    },
  ],
  lastVerifiedAt: '2026-08-20',
  limitations: [
    'Payment rates and award amounts were not verified during this pass and are not stated here.',
    'Application periods were not verified; NRCS directs applicants to their local NRCS office.',
  ],
  profileDepth: 'full-profile',
};
