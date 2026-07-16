import type { QualityAttributeContent } from '@/types/content';
import { brokenKernels } from './broken-kernels';
import { bulkDensity } from './bulk-density';
import { chillingSensitivity } from './chilling-sensitivity';
import { colour } from './colour';
import { dockage } from './dockage';
import { dryMatterContent } from './dry-matter-content';
import { ethyleneProduction } from './ethylene-production';
import { fallingNumber } from './falling-number';
import { firmness } from './firmness';
import { foreignMaterial } from './foreign-material';
import { germinationCapacity } from './germination-capacity';
import { heatDamage } from './heat-damage';
import { insectDamage } from './insect-damage';
import { internalQuality } from './internal-quality';
import { kernelHardness } from './kernel-hardness';
import { maturityIndex } from './maturity-index';
import { mechanicalDamage } from './mechanical-damage';
import { moistureContent } from './moisture-content';
import { mouldIncidence } from './mould-incidence';
import { oilContent } from './oil-content';
import { proteinContent } from './protein-content';
import { respirationRate } from './respiration-rate';
import { sizeUniformity } from './size-uniformity';
import { solubleSolidsContent } from './soluble-solids-content';
import { starchContent } from './starch-content';
import { sugarAcidRatio } from './sugar-acid-ratio';
import { testWeight } from './test-weight';
import { thousandKernelWeight } from './thousand-kernel-weight';
import { titratableAcidity } from './titratable-acidity';
import { waterActivity } from './water-activity';

export const qualityAttributes: QualityAttributeContent[] = [
  brokenKernels,
  bulkDensity,
  chillingSensitivity,
  colour,
  dockage,
  dryMatterContent,
  ethyleneProduction,
  fallingNumber,
  firmness,
  foreignMaterial,
  germinationCapacity,
  heatDamage,
  insectDamage,
  internalQuality,
  kernelHardness,
  maturityIndex,
  mechanicalDamage,
  moistureContent,
  mouldIncidence,
  oilContent,
  proteinContent,
  respirationRate,
  sizeUniformity,
  solubleSolidsContent,
  starchContent,
  sugarAcidRatio,
  testWeight,
  thousandKernelWeight,
  titratableAcidity,
  waterActivity,
];
