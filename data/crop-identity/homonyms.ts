/**
 * Binomials that more than one author has applied to more than one plant.
 *
 * Every one of these was hit by the verification harness in Waves 27–30, and
 * every one of them returns as an exact string match from both authorities. A
 * name alone cannot tell you which plant you have; only the author can. The
 * three that were caught before publication are recorded here alongside the
 * ones the corpus rests on, because the value of this register is that it
 * survives the wave that discovered it.
 */
import type { HomonymResolution } from '@/types/crop-concepts';

export const HOMONYM_RESOLUTIONS: readonly HomonymResolution[] = [
  {
    name: 'Sorghum bicolor',
    senses: [
      {
        author: '(L.) Moench',
        resolvesTo: 'Sorghum bicolor — the cultivated cereal',
        authority: 'both',
      },
      {
        author: 'Kuntze',
        resolvesTo: 'Hyparrhenia dichroa — a different grass entirely',
        authority: 'both',
      },
    ],
    corpusTakes: '(L.) Moench',
    identitySlugs: ['sorghum'],
    evidence:
      'Both authorities return the Kuntze homonym as an exact match for the bare binomial. It is not a sorghum and is not cultivated as a cereal.',
  },
  {
    name: 'Solanum tuberosum',
    senses: [
      {
        author: 'L.',
        resolvesTo: 'Solanum tuberosum — the potato',
        authority: 'both',
      },
      {
        author: 'Poepp. ex Walp.',
        resolvesTo: 'Solanum maglia — a wild Chilean species',
        authority: 'both',
      },
      {
        author: 'Bertero ex Walp.',
        resolvesTo: 'Solanum etuberosum — a non-tuber-bearing species',
        authority: 'both',
      },
    ],
    corpusTakes: 'L.',
    identitySlugs: ['potato'],
    evidence:
      'Two homonyms, one of which does not even bear tubers. Plants of the World Online returns 454 records for this binomial; with a result limit below that, the accepted name is absent from the response entirely and the potato appears to be unresolvable.',
  },
];

export const HOMONYM_BY_NAME = new Map(
  HOMONYM_RESOLUTIONS.map((h) => [h.name.toLowerCase(), h]),
);

/**
 * Binomials that must not be used without a recorded resolution.
 *
 * Kept separate from the resolutions above so the gate fails closed on a name
 * that is KNOWN to be ambiguous and has no record — the state that would
 * otherwise let a future wave attach an identity to the wrong plant.
 */
export const AMBIGUOUS_BINOMIALS: readonly string[] = [
  'Sorghum bicolor',
  'Solanum tuberosum',
];
