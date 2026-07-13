import type { SoilTopicContent } from '@/types/content';
import { availableWaterCapacity } from './available-water-capacity';
import { baseSaturation } from './base-saturation';
import { bulkDensity } from './bulk-density';
import { cationExchangeCapacity } from './cation-exchange-capacity';
import { fieldCapacity } from './field-capacity';
import { nitrogenCycle } from './nitrogen-cycle';
import { soilAeration } from './soil-aeration';
import { soilAmendments } from './soil-amendments';
import { soilBiology } from './soil-biology';
import { soilClassification } from './soil-classification';
import { soilCompaction } from './soil-compaction';
import { soilCrusting } from './soil-crusting';
import { soilDrainage } from './soil-drainage';
import { soilErosion } from './soil-erosion';
import { soilFertility } from './soil-fertility';
import { soilMicroorganisms } from './soil-microorganisms';
import { soilOrganicCarbon } from './soil-organic-carbon';
import { soilOrganicMatter } from './soil-organic-matter';
import { soilPh } from './soil-ph';
import { soilPorosity } from './soil-porosity';
import { soilProfile } from './soil-profile';
import { soilSalinity } from './soil-salinity';
import { soilSodicity } from './soil-sodicity';
import { soilStructure } from './soil-structure';
import { soilTemperature } from './soil-temperature';
import { soilTesting } from './soil-testing';
import { soilWaterRetention } from './soil-water-retention';
import { waterInfiltration } from './water-infiltration';
import { waterlogging } from './waterlogging';

export const soilTopics: SoilTopicContent[] = [
  availableWaterCapacity,
  baseSaturation,
  bulkDensity,
  cationExchangeCapacity,
  fieldCapacity,
  nitrogenCycle,
  soilAeration,
  soilAmendments,
  soilBiology,
  soilClassification,
  soilCompaction,
  soilCrusting,
  soilDrainage,
  soilErosion,
  soilFertility,
  soilMicroorganisms,
  soilOrganicCarbon,
  soilOrganicMatter,
  soilPh,
  soilPorosity,
  soilProfile,
  soilSalinity,
  soilSodicity,
  soilStructure,
  soilTemperature,
  soilTesting,
  soilWaterRetention,
  waterInfiltration,
  waterlogging,
];
