import type { MachineryContent } from '@/types/content';
import { agriculturalDrone } from './agricultural-drone';
import { baler } from './baler';
import { chiselPlough } from './chisel-plough';
import { combineHarvester } from './combine-harvester';
import { cultivator } from './cultivator';
import { discHarrow } from './disc-harrow';
import { fertilizerSpreader } from './fertilizer-spreader';
import { forageHarvester } from './forage-harvester';
import { gpsGuidanceSystem } from './gps-guidance-system';
import { grainAuger } from './grain-auger';
import { grainDryer } from './grain-dryer';
import { manureSpreader } from './manure-spreader';
import { moldboardPlough } from './moldboard-plough';
import { planter } from './planter';
import { potatoHarvester } from './potato-harvester';
import { powerHarrow } from './power-harrow';
import { rotaryMower } from './rotary-mower';
import { seedDrill } from './seed-drill';
import { selfPropelledSprayer } from './self-propelled-sprayer';
import { sprayer } from './sprayer';
import { subsoiler } from './subsoiler';
import { sugarcaneHarvester } from './sugarcane-harvester';
import { thresher } from './thresher';
import { tractor } from './tractor';
import { transplanter } from './transplanter';
import { variableRateApplicator } from './variable-rate-applicator';

export const machineryItems: MachineryContent[] = [
  agriculturalDrone,
  baler,
  chiselPlough,
  combineHarvester,
  cultivator,
  discHarrow,
  fertilizerSpreader,
  forageHarvester,
  gpsGuidanceSystem,
  grainAuger,
  grainDryer,
  manureSpreader,
  moldboardPlough,
  planter,
  potatoHarvester,
  powerHarrow,
  rotaryMower,
  seedDrill,
  selfPropelledSprayer,
  sprayer,
  subsoiler,
  sugarcaneHarvester,
  thresher,
  tractor,
  transplanter,
  variableRateApplicator,
];
