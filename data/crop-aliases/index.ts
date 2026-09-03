/**
 * Wave 46 — the alternative names that are not simply one crop's own.
 *
 * Five hundred and twenty-eight alternative names are carried by published
 * crops. Five hundred and twenty of them are unique and uncontested, and the
 * validator computes that rather than asking anyone to write it down. What is
 * recorded here is every name where uniqueness does not hold: the five that two
 * crops share, and the three that were another published crop's title.
 *
 * The three collisions were real and are removed. A concept page had claimed
 * "Arabica coffee" and "Robusta coffee" as its own alternative names while both
 * are published crops in their own right, and the cotton concept had claimed
 * "Upland cotton" the same way. Wave 41 found five parents claiming a child's
 * title and fixed those; these three survived because the rule it added exempts
 * concept pages, which is the exemption this record set exists to close.
 */
import type { CropAliasRecord, CropSearchPointer } from '@/types/crop-alias';

export const CROP_ALIASES: readonly CropAliasRecord[] = [
  {
    alias: 'red bean',
    kind: 'SHARED_ALIAS',
    crops: ['adzuki-bean', 'rice-bean'],
    rationale:
      'Adzuki and rice bean are both sold as red bean across East and South East Asia, and in some markets Phaseolus vulgaris red kidney types are too. Two published crops carry it and neither has a better claim; a reader who types it is asking about a group of small red pulses, and the honest answer is to show them.',
    reviewedAt: '2026-09-03',
  },
  {
    alias: 'horse bean',
    kind: 'SHARED_ALIAS',
    crops: ['faba-bean', 'jack-bean'],
    rationale:
      'Horse bean is a long-standing name for the coarse field types of Vicia faba and is also applied to Canavalia ensiformis in parts of the tropics. The two are unrelated genera used for different purposes, and both are published here.',
    reviewedAt: '2026-09-03',
  },
  {
    alias: 'african eggplant',
    kind: 'AMBIGUOUS_ALIAS',
    crops: ['gboma-eggplant', 'scarlet-eggplant'],
    rationale:
      'Solanum aethiopicum and Solanum macrocarpon are both African eggplants, both are grown in the same countries and often the same fields, and the name does not distinguish them. The corpus holds an ambiguous-common-name crosswalk entry for it, and Wave 44 registered "Bitter eggplant" for the same pair after the FAO calendar used that label.',
    reviewedAt: '2026-09-03',
  },
  {
    alias: 'ceylon spinach',
    kind: 'SHARED_ALIAS',
    crops: ['malabar-spinach', 'waterleaf'],
    rationale:
      'Basella alba and Talinum fruticosum are both sold as Ceylon spinach, and the name travels with the culinary use — a hot-season leaf that substitutes for spinach — rather than with the plant. Both were published as separate crops, Malabar spinach in Wave 44.',
    reviewedAt: '2026-09-03',
  },
  {
    alias: 'cocoyam',
    kind: 'AMBIGUOUS_ALIAS',
    crops: ['tannia', 'taro'],
    rationale:
      'Cocoyam means Colocasia in some West African usage and Xanthosoma in others, and the two are different genera with different agronomy. The corpus holds an ambiguous-common-name crosswalk entry, and Wave 44 registered "Malanga cubaine" for the same confusion from the FAO calendar.',
    reviewedAt: '2026-09-03',
  },
  {
    alias: 'arabica coffee',
    kind: 'INVALID_COLLISION',
    crops: [],
    rationale:
      "Carried by the coffee CONCEPT page as one of its own alternative names while Arabica Coffee is a published crop. A concept is not called by its children's names: the page that owns the group had claimed the page that owns one species. Removed from the concept in Wave 46; the record stays so the collision is recorded rather than merely gone.",
    reviewedAt: '2026-09-03',
  },
  {
    alias: 'robusta coffee',
    kind: 'INVALID_COLLISION',
    crops: [],
    rationale:
      'The same claim on the other published coffee species. Removed from the coffee concept in Wave 46.',
    reviewedAt: '2026-09-03',
  },
  {
    alias: 'upland cotton',
    kind: 'INVALID_COLLISION',
    crops: [],
    rationale:
      'Carried by the cotton concept while Upland Cotton is a published crop covering Gossypium hirsutum. Cotton is a concept over four species and upland is one of them, so the concept claiming the name asserted that the group and its largest member are the same thing. Removed in Wave 46.',
    reviewedAt: '2026-09-03',
  },
];

/**
 * Terms that should reach a crop without claiming to name it.
 *
 * Deliberately few, and each one has exactly one right answer. A pointer is
 * added only where the corpus already contains the fact — the term is in the
 * crop's article — and the reader who types it can mean nothing else.
 */
export const CROP_SEARCH_POINTERS: readonly CropSearchPointer[] = [
  {
    term: 'ricinoleic acid',
    cropSlug: 'castor-bean',
    relationship:
      'Castor is the only commercial source of ricinoleic acid, which makes up the great majority of castor oil and is the reason the crop is grown industrially. The compound is not a name for the plant, so it cannot be an alternative name; a reader who types it has exactly one crop in mind.',
    sourceIds: ['fao'],
    reviewedAt: '2026-09-03',
  },
  {
    term: 'nerica',
    cropSlug: 'african-rice',
    relationship:
      'NERICA is the acronym for the New Rice for Africa interspecific hybrids between Oryza glaberrima and Oryza sativa. It names a breeding programme and its products rather than the species, and the African rice article is where the corpus explains it.',
    sourceIds: ['fao'],
    reviewedAt: '2026-09-03',
  },
];
