import type { AgriculturalSupportProgram } from '@/types/support';

/**
 * Verified 2026-08-20 by loading the official programme page in a real browser.
 * No funding figure or application window is recorded, because none was
 * established from the pages read — an omitted field is honest, an
 * approximated one is not.
 */
export const usNrcsAcep: AgriculturalSupportProgram = {
  id: 'us-nrcs-acep',
  slug: 'us-nrcs-acep',
  officialName: 'Agricultural Conservation Easement Program',
  shortName: 'ACEP',
  programType: 'conservationProgram',
  countryCode: 'USA',
  jurisdictionName: 'United States',
  administeringAuthorityIds: ['us-usda-nrcs'],
  beneficiaryTypes: ['farmer', 'rancher', 'landManager'],
  officialUrl:
    'https://www.nrcs.usda.gov/programs-initiatives/acep-agricultural-conservation-easement-program',
  // `recurring` because the official page presents the programme as currently
  // operating with no single closing date. Application WINDOWS are a separate
  // fact and were not verified, so `applicationWindow` is deliberately absent.
  status: 'recurring',
  summary:
    'An NRCS conservation programme delivering agricultural land and wetland easements. AgricultureID has verified the programme page; its detailed terms were not read during this pass.',
  sourceReferences: ['prog-us-nrcs-acep'],
  verification: [
    {
      url: 'https://www.nrcs.usda.gov/programs-initiatives/acep-agricultural-conservation-easement-program',
      sourceId: 'prog-us-nrcs-acep',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official programme page loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying the programme as Agricultural Conservation Easement Program.',
    },
  ],
  lastVerifiedAt: '2026-08-20',
  limitations: [
    'The programme’s eligibility conditions, easement terms and payment rates were not read during this pass and are not stated here.',
    'Application periods were not verified.',
  ],
  profileDepth: 'full-profile',
};
