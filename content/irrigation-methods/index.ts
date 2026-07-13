import type { IrrigationMethodContent } from '@/types/content';
import { alternateWettingAndDrying } from './alternate-wetting-and-drying';
import { basinIrrigation } from './basin-irrigation';
import { borderIrrigation } from './border-irrigation';
import { centerPivotIrrigation } from './center-pivot-irrigation';
import { deficitIrrigation } from './deficit-irrigation';
import { dripIrrigation } from './drip-irrigation';
import { fertigation } from './fertigation';
import { furrowIrrigation } from './furrow-irrigation';
import { irrigationScheduling } from './irrigation-scheduling';
import { lateralMoveIrrigation } from './lateral-move-irrigation';
import { microSprinklerIrrigation } from './micro-sprinkler-irrigation';
import { rainwaterHarvesting } from './rainwater-harvesting';
import { soilMoistureSensing } from './soil-moisture-sensing';
import { sprinklerIrrigation } from './sprinkler-irrigation';
import { subsurfaceIrrigation } from './subsurface-irrigation';
import { surfaceIrrigation } from './surface-irrigation';

export const irrigationMethods: IrrigationMethodContent[] = [
  alternateWettingAndDrying,
  basinIrrigation,
  borderIrrigation,
  centerPivotIrrigation,
  deficitIrrigation,
  dripIrrigation,
  fertigation,
  furrowIrrigation,
  irrigationScheduling,
  lateralMoveIrrigation,
  microSprinklerIrrigation,
  rainwaterHarvesting,
  soilMoistureSensing,
  sprinklerIrrigation,
  subsurfaceIrrigation,
  surfaceIrrigation,
];
