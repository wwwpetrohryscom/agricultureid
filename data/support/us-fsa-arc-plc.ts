import type { AgriculturalSupportProgram } from '@/types/support';

/**
 * Verified 2026-08-20 by loading the official programme page in a real browser.
 * No funding figure or application window is recorded, because none was
 * established from the pages read — an omitted field is honest, an
 * approximated one is not.
 */
export const usFsaArcPlc: AgriculturalSupportProgram = {
  id: 'us-fsa-arc-plc',
  slug: 'us-fsa-arc-plc',
  officialName: 'Agriculture Risk Coverage (ARC) and Price Loss Coverage (PLC)',
  shortName: 'ARC / PLC',
  programType: 'incomeSupport',
  countryCode: 'USA',
  jurisdictionName: 'United States',
  administeringAuthorityIds: ['us-usda-fsa'],
  beneficiaryTypes: ['farmer', 'cropProducer', 'agriculturalHolding'],
  officialUrl: 'https://www.fsa.usda.gov/resources/programs/arc-plc',
  // `recurring` because the official page presents the programme as currently
  // operating with no single closing date. Application WINDOWS are a separate
  // fact and were not verified, so `applicationWindow` is deliberately absent.
  status: 'recurring',
  summary:
    'Two USDA commodity income-support programmes administered by the Farm Service Agency, published together as Agriculture Risk Coverage and Price Loss Coverage. AgricultureID has verified the programme page; the election and payment mechanics were not read during this pass.',
  sourceReferences: ['prog-us-fsa-arc-plc'],
  verification: [
    {
      url: 'https://www.fsa.usda.gov/resources/programs/arc-plc',
      sourceId: 'prog-us-fsa-arc-plc',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official programme page loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying the programme as Agriculture Risk Coverage (ARC) and Price Loss Coverage (PLC).',
    },
  ],
  lastVerifiedAt: '2026-08-20',
  limitations: [
    'ARC and PLC are distinct programmes with different payment mechanics; this record covers the page on which FSA publishes them together and does not describe either mechanism.',
    'Election windows, payment rates and covered commodities were not verified during this pass.',
  ],
  profileDepth: 'full-profile',
};
