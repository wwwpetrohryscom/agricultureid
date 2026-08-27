import type { AgriculturalSupportProgram } from '@/types/support';

/**
 * Verified 2026-08-20 by loading the official programme page in a real browser.
 * No funding figure or application window is recorded, because none was
 * established from the pages read — an omitted field is honest, an
 * approximated one is not.
 */
export const usRmaFederalCropInsurance: AgriculturalSupportProgram = {
  id: 'us-rma-federal-crop-insurance',
  slug: 'us-rma-federal-crop-insurance',
  officialName: 'Federal crop insurance',
  shortName: 'Federal crop insurance',
  programType: 'insuranceSupport',
  countryCode: 'USA',
  jurisdictionName: 'United States',
  administeringAuthorityIds: ['us-usda-rma'],
  beneficiaryTypes: ['farmer', 'cropProducer', 'agriculturalHolding'],
  officialUrl: 'https://www.rma.usda.gov/about-crop-insurance',
  // `recurring` because the official page presents the programme as currently
  // operating with no single closing date. Application WINDOWS are a separate
  // fact and were not verified, so `applicationWindow` is deliberately absent.
  status: 'recurring',
  summary:
    'The federal crop insurance programme administered by the USDA Risk Management Agency, through which agricultural producers insure against production and revenue loss. Policies are sold and serviced by private insurers under federal oversight.',
  sourceReferences: ['prog-us-rma-federal-crop-insurance'],
  verification: [
    {
      url: 'https://www.rma.usda.gov/about-crop-insurance',
      sourceId: 'prog-us-rma-federal-crop-insurance',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official programme page loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying the programme as Federal crop insurance.',
    },
  ],
  lastVerifiedAt: '2026-08-20',
  limitations: [
    'Policies are sold and serviced through approved private insurance providers; RMA administers the programme rather than selling policies directly.',
    'Coverage levels, premium subsidy rates and sales closing dates were not verified during this pass and are not stated here.',
  ],
  profileDepth: 'full-profile',
};
