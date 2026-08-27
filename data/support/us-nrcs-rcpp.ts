import type { AgriculturalSupportProgram } from '@/types/support';

/**
 * Verified 2026-08-20 by loading the official programme page in a real browser.
 * No funding figure or application window is recorded, because none was
 * established from the pages read — an omitted field is honest, an
 * approximated one is not.
 */
export const usNrcsRcpp: AgriculturalSupportProgram = {
  id: 'us-nrcs-rcpp',
  slug: 'us-nrcs-rcpp',
  officialName: 'Regional Conservation Partnership Program',
  shortName: 'RCPP',
  programType: 'conservationProgram',
  countryCode: 'USA',
  jurisdictionName: 'United States',
  administeringAuthorityIds: ['us-usda-nrcs'],
  beneficiaryTypes: ['farmer', 'rancher', 'landManager', 'cooperative'],
  officialUrl:
    'https://www.nrcs.usda.gov/programs-initiatives/rcpp-regional-conservation-partnership-program',
  // `recurring` because the official page presents the programme as currently
  // operating with no single closing date. Application WINDOWS are a separate
  // fact and were not verified, so `applicationWindow` is deliberately absent.
  status: 'recurring',
  summary:
    'An NRCS conservation programme delivered through partnership agreements at regional scale. AgricultureID has verified the programme page; its detailed terms were not read during this pass.',
  sourceReferences: ['prog-us-nrcs-rcpp'],
  verification: [
    {
      url: 'https://www.nrcs.usda.gov/programs-initiatives/rcpp-regional-conservation-partnership-program',
      sourceId: 'prog-us-nrcs-rcpp',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official programme page loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying the programme as Regional Conservation Partnership Program.',
    },
  ],
  lastVerifiedAt: '2026-08-20',
  limitations: [
    'The programme’s partner eligibility, project selection and funding terms were not read during this pass and are not stated here.',
    'Application periods were not verified.',
  ],
  profileDepth: 'full-profile',
};
