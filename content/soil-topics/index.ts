import type { SoilTopicContent } from '@/types/content';
import { cationExchangeCapacity } from './cation-exchange-capacity';
import { soilBiology } from './soil-biology';
import { soilCompaction } from './soil-compaction';
import { soilDrainage } from './soil-drainage';
import { soilMicroorganisms } from './soil-microorganisms';
import { soilOrganicCarbon } from './soil-organic-carbon';
import { soilOrganicMatter } from './soil-organic-matter';
import { soilPh } from './soil-ph';
import { soilSalinity } from './soil-salinity';
import { soilStructure } from './soil-structure';
import { soilTesting } from './soil-testing';
import { soilWaterRetention } from './soil-water-retention';

export const soilTopics: SoilTopicContent[] = [
  cationExchangeCapacity,
  soilBiology,
  soilCompaction,
  soilDrainage,
  soilMicroorganisms,
  soilOrganicCarbon,
  soilOrganicMatter,
  soilPh,
  soilSalinity,
  soilStructure,
  soilTesting,
  soilWaterRetention,
];
