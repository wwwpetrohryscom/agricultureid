import type {
  AnyContent,
  BreedContent,
  ClimateContent,
  CropContent,
  CultivarContent,
  FarmingSystemContent,
  FertilizerContent,
  IrrigationMethodContent,
  LivestockContent,
  MachineryContent,
  NutrientContent,
  PestContent,
  PlantDiseaseContent,
  PostHarvestContent,
  ProcessingMethodContent,
  QualityAttributeContent,
  PostHarvestDefectContent,
  QualityMeasurementContent,
  CommodityContent,
  CommodityProductContent,
  CommodityGradeContent,
  SoilContent,
  SoilTopicContent,
} from '@/types/content';
import { crops } from './crops';
import { soils } from './soils';
import { diseases } from './diseases';
import { pests } from './pests';
import { livestock } from './livestock';
import { nutrients } from './nutrients';
import { fertilizers } from './fertilizers';
import { soilTopics } from './soil-topics';
import { machineryItems } from './machinery';
import { climateFactors } from './climate';
import { farmingSystems } from './farming-systems';
import { irrigationMethods } from './irrigation-methods';
import { postHarvest } from './post-harvest';
import { processingMethods } from './processing-methods';
import { qualityAttributes } from './quality-attributes';
import { postHarvestDefects } from './post-harvest-defects';
import { qualityMeasurements } from './quality-measurements';
import { commodities } from './commodities';
import { commodityProducts } from './commodity-products';
import { commodityGrades } from './commodity-grades';
import { cultivars } from './cultivars';
import { breeds } from './breeds';

export const CROPS: CropContent[] = crops;
export const SOILS: SoilContent[] = soils;
export const DISEASES: PlantDiseaseContent[] = diseases;
export const PESTS: PestContent[] = pests;
export const LIVESTOCK: LivestockContent[] = livestock;
export const NUTRIENTS: NutrientContent[] = nutrients;
export const FERTILIZERS: FertilizerContent[] = fertilizers;
export const SOIL_TOPICS: SoilTopicContent[] = soilTopics;
export const MACHINERY: MachineryContent[] = machineryItems;
export const CLIMATE: ClimateContent[] = climateFactors;
export const FARMING_SYSTEMS: FarmingSystemContent[] = farmingSystems;
export const IRRIGATION_METHODS: IrrigationMethodContent[] = irrigationMethods;
export const POST_HARVEST: PostHarvestContent[] = postHarvest;
export const PROCESSING_METHODS: ProcessingMethodContent[] = processingMethods;
export const QUALITY_ATTRIBUTES: QualityAttributeContent[] = qualityAttributes;
export const POST_HARVEST_DEFECTS: PostHarvestDefectContent[] =
  postHarvestDefects;
export const QUALITY_MEASUREMENTS: QualityMeasurementContent[] =
  qualityMeasurements;
export const COMMODITIES: CommodityContent[] = commodities;
export const COMMODITY_PRODUCTS: CommodityProductContent[] = commodityProducts;
export const COMMODITY_GRADES: CommodityGradeContent[] = commodityGrades;
export const CULTIVARS: CultivarContent[] = cultivars;
export const BREEDS: BreedContent[] = breeds;

/** Flat list of every structured content item across all types. */
export const ALL_CONTENT: AnyContent[] = [
  ...crops,
  ...soils,
  ...diseases,
  ...pests,
  ...livestock,
  ...nutrients,
  ...fertilizers,
  ...soilTopics,
  ...machineryItems,
  ...climateFactors,
  ...farmingSystems,
  ...irrigationMethods,
  ...postHarvest,
  ...processingMethods,
  ...qualityAttributes,
  ...postHarvestDefects,
  ...qualityMeasurements,
  ...commodities,
  ...commodityProducts,
  ...commodityGrades,
  ...cultivars,
  ...breeds,
];
