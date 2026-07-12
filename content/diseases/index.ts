import type { PlantDiseaseContent } from '@/types/content';
import { fusariumWilt } from './fusarium-wilt';
import { lateBlight } from './late-blight';
import { powderyMildew } from './powdery-mildew';
import { rootRot } from './root-rot';

/** All plant-disease entries. Add new diseases here to register them. */
export const diseases: PlantDiseaseContent[] = [
  powderyMildew,
  lateBlight,
  fusariumWilt,
  rootRot,
];
