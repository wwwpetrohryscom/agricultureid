import type { PostHarvestDefectContent } from '@/types/content';
import { abrasionInjury } from './abrasion-injury';
import { anthracnosePostharvest } from './anthracnose-postharvest';
import { blueMould } from './blue-mould';
import { bruising } from './bruising';
import { chillingInjury } from './chilling-injury';
import { compressionDamage } from './compression-damage';
import { cracking } from './cracking';
import { crownRot } from './crown-rot';
import { frassContamination } from './frass-contamination';
import { freezingInjury } from './freezing-injury';
import { greening } from './greening';
import { greyMouldRot } from './grey-mould-rot';
import { heatDamage } from './heat-damage';
import { impactDamage } from './impact-damage';
import { insectBoringDamage } from './insect-boring-damage';
import { internalBrowning } from './internal-browning';
import { offOdour } from './off-odour';
import { pitting } from './pitting';
import { senescence } from './senescence';
import { shrivel } from './shrivel';
import { sourRot } from './sour-rot';
import { splitting } from './splitting';
import { sprouting } from './sprouting';
import { storageRot } from './storage-rot';
import { superficialScald } from './superficial-scald';
import { waterCore } from './water-core';

export const postHarvestDefects: PostHarvestDefectContent[] = [
  abrasionInjury,
  anthracnosePostharvest,
  blueMould,
  bruising,
  chillingInjury,
  compressionDamage,
  cracking,
  crownRot,
  frassContamination,
  freezingInjury,
  greening,
  greyMouldRot,
  heatDamage,
  impactDamage,
  insectBoringDamage,
  internalBrowning,
  offOdour,
  pitting,
  senescence,
  shrivel,
  sourRot,
  splitting,
  sprouting,
  storageRot,
  superficialScald,
  waterCore,
];
