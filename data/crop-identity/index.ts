import type { CropIdentity } from '@/types/crop-identity';
import { WAVE_27_IDENTITIES } from './wave27';
import { WAVE_28_IDENTITIES } from './wave28';
import { WAVE_29_IDENTITIES } from './wave29';
import { WAVE_30_IDENTITIES } from './wave30';
import { WAVE_43_IDENTITIES } from './wave43';

/**
 * Every verified crop identity in the corpus.
 *
 * Ordered by wave so a record's provenance is visible in the file it sits in;
 * `lib/crops/identity.ts` is the only thing that should read this directly.
 */
export const CROP_IDENTITIES: readonly CropIdentity[] = [
  ...WAVE_27_IDENTITIES,
  ...WAVE_28_IDENTITIES,
  ...WAVE_29_IDENTITIES,
  ...WAVE_30_IDENTITIES,
  ...WAVE_43_IDENTITIES,
];
