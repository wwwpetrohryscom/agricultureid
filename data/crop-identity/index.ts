import type { CropIdentity } from '@/types/crop-identity';
import { WAVE_27_IDENTITIES } from './wave27';

/**
 * Every verified crop identity in the corpus.
 *
 * Ordered by wave so a record's provenance is visible in the file it sits in;
 * `lib/crops/identity.ts` is the only thing that should read this directly.
 */
export const CROP_IDENTITIES: readonly CropIdentity[] = [...WAVE_27_IDENTITIES];
