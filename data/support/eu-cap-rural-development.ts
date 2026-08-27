import type { AgriculturalSupportProgram } from '@/types/support';

/**
 * Verified 2026-08-20 by loading the official programme page in a real browser.
 * No funding figure or application window is recorded, because none was
 * established from the pages read — an omitted field is honest, an
 * approximated one is not.
 */
export const euCapRuralDevelopment: AgriculturalSupportProgram = {
  id: 'eu-cap-rural-development',
  slug: 'eu-cap-rural-development',
  officialName: 'Common Agricultural Policy — rural development',
  shortName: 'CAP rural development',
  programType: 'ruralDevelopment',
  supranationalJurisdiction: 'European Union',
  jurisdictionName: 'European Union',
  administeringAuthorityIds: ['eu-dg-agri'],
  beneficiaryTypes: ['farmer', 'ruralBusiness', 'agriculturalHolding'],
  officialUrl:
    'https://agriculture.ec.europa.eu/common-agricultural-policy/rural-development_en',
  // `recurring` because the official page presents the programme as currently
  // operating with no single closing date. Application WINDOWS are a separate
  // fact and were not verified, so `applicationWindow` is deliberately absent.
  status: 'recurring',
  summary:
    'Rural development is the second main strand of the European Union’s Common Agricultural Policy, covering support for rural areas and agricultural holdings. It is published by the European Commission as a standing CAP area and delivered through Member State programmes.',
  eligibilitySummary:
    'Rural development measures are chosen and applied by Member States within their CAP Strategic Plans; availability differs between Member States and regions.',
  sourceReferences: ['prog-eu-cap-rural-development'],
  verification: [
    {
      url: 'https://agriculture.ec.europa.eu/common-agricultural-policy/rural-development_en',
      sourceId: 'prog-eu-cap-rural-development',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official programme page loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying the programme as Common Agricultural Policy — rural development.',
    },
  ],
  lastVerifiedAt: '2026-08-20',
  limitations: [
    'Measures and rates are set by each Member State and, in several countries, by region; nothing on this page states the position for a particular country.',
    'Application periods are set nationally and were not verified during this pass.',
  ],
  profileDepth: 'full-profile',
};
