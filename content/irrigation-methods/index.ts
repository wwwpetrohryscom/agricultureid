import type { IrrigationMethodContent } from '@/types/content';
import { centerPivotIrrigation } from './center-pivot-irrigation';
import { dripIrrigation } from './drip-irrigation';
import { furrowIrrigation } from './furrow-irrigation';
import { irrigationScheduling } from './irrigation-scheduling';
import { sprinklerIrrigation } from './sprinkler-irrigation';
import { subsurfaceIrrigation } from './subsurface-irrigation';
import { surfaceIrrigation } from './surface-irrigation';

export const irrigationMethods: IrrigationMethodContent[] = [
  centerPivotIrrigation,
  dripIrrigation,
  furrowIrrigation,
  irrigationScheduling,
  sprinklerIrrigation,
  subsurfaceIrrigation,
  surfaceIrrigation,
];
