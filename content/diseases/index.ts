import type { PlantDiseaseContent } from '@/types/content';
import { anthracnose } from './anthracnose';
import { appleScab } from './apple-scab';
import { bacterialLeafSpot } from './bacterial-leaf-spot';
import { dampingOff } from './damping-off';
import { downyMildew } from './downy-mildew';
import { fusariumWilt } from './fusarium-wilt';
import { grayMold } from './gray-mold';
import { lateBlight } from './late-blight';
import { powderyMildew } from './powdery-mildew';
import { riceBlast } from './rice-blast';
import { rootRot } from './root-rot';
import { tobaccoMosaicVirus } from './tobacco-mosaic-virus';
import { wheatLeafRust } from './wheat-leaf-rust';
import { wheatStripeRust } from './wheat-stripe-rust';

export const diseases: PlantDiseaseContent[] = [
  anthracnose,
  appleScab,
  bacterialLeafSpot,
  dampingOff,
  downyMildew,
  fusariumWilt,
  grayMold,
  lateBlight,
  powderyMildew,
  riceBlast,
  rootRot,
  tobaccoMosaicVirus,
  wheatLeafRust,
  wheatStripeRust,
];
