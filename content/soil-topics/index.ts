import type { SoilTopicContent } from '@/types/content';
import { cationExchangeCapacity } from './cation-exchange-capacity';
import { soilAeration } from './soil-aeration';
import { soilAmendments } from './soil-amendments';
import { soilBiology } from './soil-biology';
import { soilCompaction } from './soil-compaction';
import { soilCrusting } from './soil-crusting';
import { soilDrainage } from './soil-drainage';
import { soilErosion } from './soil-erosion';
import { soilFertility } from './soil-fertility';
import { soilMicroorganisms } from './soil-microorganisms';
import { soilOrganicCarbon } from './soil-organic-carbon';
import { soilOrganicMatter } from './soil-organic-matter';
import { soilPh } from './soil-ph';
import { soilSalinity } from './soil-salinity';
import { soilStructure } from './soil-structure';
import { soilTemperature } from './soil-temperature';
import { soilTesting } from './soil-testing';
import { soilWaterRetention } from './soil-water-retention';
import { waterlogging } from './waterlogging';

export const soilTopics: SoilTopicContent[] = [
  cationExchangeCapacity,
  soilAeration,
  soilAmendments,
  soilBiology,
  soilCompaction,
  soilCrusting,
  soilDrainage,
  soilErosion,
  soilFertility,
  soilMicroorganisms,
  soilOrganicCarbon,
  soilOrganicMatter,
  soilPh,
  soilSalinity,
  soilStructure,
  soilTemperature,
  soilTesting,
  soilWaterRetention,
  waterlogging,
];
