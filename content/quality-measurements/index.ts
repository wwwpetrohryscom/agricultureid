import type { QualityMeasurementContent } from '@/types/content';
import { colorimeter } from './colorimeter';
import { electronicMoistureMeter } from './electronic-moisture-meter';
import { ethyleneMeasurement } from './ethylene-measurement';
import { fallingNumberTest } from './falling-number-test';
import { germinationTest } from './germination-test';
import { grainProbeSampling } from './grain-probe-sampling';
import { nearInfraredSpectroscopy } from './near-infrared-spectroscopy';
import { ovenDryingMethod } from './oven-drying-method';
import { penetrometer } from './penetrometer';
import { refractometer } from './refractometer';
import { respirationMeasurement } from './respiration-measurement';
import { sieveAnalysis } from './sieve-analysis';
import { temperatureProbe } from './temperature-probe';
import { testWeightApparatus } from './test-weight-apparatus';
import { thousandKernelWeightCount } from './thousand-kernel-weight-count';
import { titratableAcidityTitration } from './titratable-acidity-titration';
import { visualDefectInspection } from './visual-defect-inspection';
import { waterActivityMeter } from './water-activity-meter';

export const qualityMeasurements: QualityMeasurementContent[] = [
  colorimeter,
  electronicMoistureMeter,
  ethyleneMeasurement,
  fallingNumberTest,
  germinationTest,
  grainProbeSampling,
  nearInfraredSpectroscopy,
  ovenDryingMethod,
  penetrometer,
  refractometer,
  respirationMeasurement,
  sieveAnalysis,
  temperatureProbe,
  testWeightApparatus,
  thousandKernelWeightCount,
  titratableAcidityTitration,
  visualDefectInspection,
  waterActivityMeter,
];
