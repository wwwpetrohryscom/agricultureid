import type {
  AnyContent,
  CropContent,
  LivestockContent,
  PestContent,
  PlantDiseaseContent,
  SoilContent,
} from '@/types/content';
import { crops } from './crops';
import { soils } from './soils';
import { diseases } from './diseases';
import { pests } from './pests';
import { livestock } from './livestock';

export const CROPS: CropContent[] = crops;
export const SOILS: SoilContent[] = soils;
export const DISEASES: PlantDiseaseContent[] = diseases;
export const PESTS: PestContent[] = pests;
export const LIVESTOCK: LivestockContent[] = livestock;

/** Flat list of every structured content item across all types. */
export const ALL_CONTENT: AnyContent[] = [
  ...crops,
  ...soils,
  ...diseases,
  ...pests,
  ...livestock,
];
