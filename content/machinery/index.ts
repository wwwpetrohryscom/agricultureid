import type { MachineryContent } from '@/types/content';
import { agriculturalDrone } from './agricultural-drone';
import { baler } from './baler';
import { combineHarvester } from './combine-harvester';
import { cultivator } from './cultivator';
import { discHarrow } from './disc-harrow';
import { fertilizerSpreader } from './fertilizer-spreader';
import { forageHarvester } from './forage-harvester';
import { gpsGuidanceSystem } from './gps-guidance-system';
import { grainDryer } from './grain-dryer';
import { moldboardPlough } from './moldboard-plough';
import { planter } from './planter';
import { rotaryMower } from './rotary-mower';
import { seedDrill } from './seed-drill';
import { sprayer } from './sprayer';
import { subsoiler } from './subsoiler';
import { thresher } from './thresher';
import { tractor } from './tractor';
import { transplanter } from './transplanter';

export const machineryItems: MachineryContent[] = [
  agriculturalDrone,
  baler,
  combineHarvester,
  cultivator,
  discHarrow,
  fertilizerSpreader,
  forageHarvester,
  gpsGuidanceSystem,
  grainDryer,
  moldboardPlough,
  planter,
  rotaryMower,
  seedDrill,
  sprayer,
  subsoiler,
  thresher,
  tractor,
  transplanter,
];
