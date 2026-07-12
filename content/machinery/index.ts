import type { MachineryContent } from '@/types/content';
import { agriculturalDrone } from './agricultural-drone';
import { baler } from './baler';
import { combineHarvester } from './combine-harvester';
import { discHarrow } from './disc-harrow';
import { gpsGuidanceSystem } from './gps-guidance-system';
import { moldboardPlough } from './moldboard-plough';
import { rotaryMower } from './rotary-mower';
import { seedDrill } from './seed-drill';
import { sprayer } from './sprayer';
import { tractor } from './tractor';

export const machineryItems: MachineryContent[] = [
  agriculturalDrone,
  baler,
  combineHarvester,
  discHarrow,
  gpsGuidanceSystem,
  moldboardPlough,
  rotaryMower,
  seedDrill,
  sprayer,
  tractor,
];
