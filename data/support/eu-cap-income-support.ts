import type { AgriculturalSupportProgram } from '@/types/support';

/**
 * Verified 2026-08-20 by loading the official programme page in a real browser.
 * No funding figure or application window is recorded, because none was
 * established from the pages read — an omitted field is honest, an
 * approximated one is not.
 */
export const euCapIncomeSupport: AgriculturalSupportProgram = {
  id: 'eu-cap-income-support',
  slug: 'eu-cap-income-support',
  officialName: 'Common Agricultural Policy — income support',
  shortName: 'CAP income support',
  programType: 'incomeSupport',
  supranationalJurisdiction: 'European Union',
  jurisdictionName: 'European Union',
  administeringAuthorityIds: ['eu-dg-agri'],
  beneficiaryTypes: ['farmer', 'agriculturalHolding'],
  officialUrl:
    'https://agriculture.ec.europa.eu/common-agricultural-policy/income-support_en',
  // `recurring` because the official page presents the programme as currently
  // operating with no single closing date. Application WINDOWS are a separate
  // fact and were not verified, so `applicationWindow` is deliberately absent.
  status: 'recurring',
  summary:
    'Income support is one of the two main strands of the European Union’s Common Agricultural Policy. The European Commission publishes it as a standing area of the CAP, delivered to farmers through Member State paying agencies rather than by the Commission directly.',
  eligibilitySummary:
    'Income support under the CAP is delivered by Member States under their national CAP Strategic Plans; the conditions that apply to a given farmer are set nationally.',
  sourceReferences: ['prog-eu-cap-income-support'],
  verification: [
    {
      url: 'https://agriculture.ec.europa.eu/common-agricultural-policy/income-support_en',
      sourceId: 'prog-eu-cap-income-support',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official programme page loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying the programme as Common Agricultural Policy — income support.',
    },
  ],
  lastVerifiedAt: '2026-08-20',
  limitations: [
    'Payments are made by designated paying agencies in each Member State, not by the European Commission; the applicable conditions and rates are set in the Member State’s CAP Strategic Plan and are not stated here.',
    'Application periods are set nationally and were not verified for any Member State during this pass.',
  ],
  profileDepth: 'full-profile',
};
