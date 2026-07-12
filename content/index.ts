import type {
  AnyContent,
  ClimateContent,
  CropContent,
  FarmingSystemContent,
  FertilizerContent,
  IrrigationMethodContent,
  LivestockContent,
  MachineryContent,
  NutrientContent,
  PestContent,
  PlantDiseaseContent,
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
];
