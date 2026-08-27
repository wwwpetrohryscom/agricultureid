import type { AgriculturalSupportProgram } from '@/types/support';

/**
 * Official agricultural support programmes.
 *
 * Every entry was verified by loading its official programme page. No funding
 * figure and no application window appears anywhere in this corpus, because
 * none was established from the pages read — those fields are omitted rather
 * than approximated.
 */
import { euCapIncomeSupport } from './eu-cap-income-support';
import { euCapRuralDevelopment } from './eu-cap-rural-development';
import { usNrcsEqip } from './us-nrcs-eqip';
import { usNrcsCsp } from './us-nrcs-csp';
import { usNrcsAcep } from './us-nrcs-acep';
import { usNrcsRcpp } from './us-nrcs-rcpp';
import { usFsaArcPlc } from './us-fsa-arc-plc';
import { usRmaFederalCropInsurance } from './us-rma-federal-crop-insurance';

export const SUPPORT_PROGRAMS: AgriculturalSupportProgram[] = [
  euCapIncomeSupport,
  euCapRuralDevelopment,
  usNrcsEqip,
  usNrcsCsp,
  usNrcsAcep,
  usNrcsRcpp,
  usFsaArcPlc,
  usRmaFederalCropInsurance,
];
