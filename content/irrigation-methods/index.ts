import type { IrrigationMethodContent } from '@/types/content';
import { centerPivotIrrigation } from './center-pivot-irrigation';
import { deficitIrrigation } from './deficit-irrigation';
import { dripIrrigation } from './drip-irrigation';
import { fertigation } from './fertigation';
import { furrowIrrigation } from './furrow-irrigation';
import { irrigationScheduling } from './irrigation-scheduling';
import { microSprinklerIrrigation } from './micro-sprinkler-irrigation';
import { rainwaterHarvesting } from './rainwater-harvesting';
import { sprinklerIrrigation } from './sprinkler-irrigation';
import { subsurfaceIrrigation } from './subsurface-irrigation';
import { surfaceIrrigation } from './surface-irrigation';

export const irrigationMethods: IrrigationMethodContent[] = [
  centerPivotIrrigation,
  deficitIrrigation,
  dripIrrigation,
  fertigation,
  furrowIrrigation,
  irrigationScheduling,
  microSprinklerIrrigation,
  rainwaterHarvesting,
  sprinklerIrrigation,
  subsurfaceIrrigation,
  surfaceIrrigation,
];
