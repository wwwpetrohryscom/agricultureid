import type { CommodityGradeContent } from '@/types/content';
import { codexStandardsOverview } from './codex-standards-overview';
import { uneceFreshProduceStandards } from './unece-fresh-produce-standards';
import { usdaBarleyGrades } from './usda-barley-grades';
import { usdaCornGrades } from './usda-corn-grades';
import { usdaEggGrades } from './usda-egg-grades';
import { usdaRiceGrades } from './usda-rice-grades';
import { usdaSoybeanGrades } from './usda-soybean-grades';
import { usdaWheatGrades } from './usda-wheat-grades';

export const commodityGrades: CommodityGradeContent[] = [
  codexStandardsOverview,
  uneceFreshProduceStandards,
  usdaBarleyGrades,
  usdaCornGrades,
  usdaEggGrades,
  usdaRiceGrades,
  usdaSoybeanGrades,
  usdaWheatGrades,
];
