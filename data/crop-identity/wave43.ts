import type { CropIdentity } from '@/types/crop-identity';

/**
 * Wave 43 — identities added to give an unowned parent taxon an owner.
 *
 * Waves 27–30 verified 348 identities crop by crop, and the gaps that left are
 * not missing crops: they are missing PARENTS. Six taxa in this corpus have two
 * or more identities sitting under them and nothing that owns the shared scope,
 * and two of those were blocking publication of real crops.
 *
 * Citrus is the one that needed an identity of its own. Orange, grapefruit and
 * mandarin are three cultivar groups of a single hybrid taxon that nothing in
 * the corpus named, so the scope they share had nowhere to be stated. The other
 * five parents are owned by records rather than pages, for reasons stated one
 * by one in `data/crop-taxon-ownership`.
 */
export const WAVE_43_IDENTITIES: readonly CropIdentity[] = [
  {
    id: 'crop-identity-citrus',
    slug: 'citrus',
    primaryCommonName: 'Citrus',
    alternativeCommonNames: ['Citrus fruit'],
    acceptedScientificName: 'Citrus',
    botanicalAuthority: 'L.',
    taxonRank: 'species-complex',
    genus: 'Citrus',
    family: 'Rutaceae',
    cropGroups: ['fruit'],
    harvestedParts: ['fruit', 'leaf'],
    agriculturalUses: ['human-food', 'industrial-raw-material'],
    lifeCycle: 'perennial',
    growthHabit: 'tree',
    agreement: 'agreed',
    authorities: [
      {
        sourceId: 'powo-plants-of-the-world-online',
        acceptedName: 'Citrus',
      },
      {
        sourceId: 'wfo-world-flora-online',
        acceptedName: 'Citrus',
      },
    ],
    agreementNote:
      'Both authorities accept the genus. What they do not settle is what sits inside it: Plants of the World Online sinks Citrus × sinensis and Citrus × paradisi into Citrus × aurantium, so sweet orange, grapefruit and mandarin are cultivar groups of one hybrid rather than three species. The genus is agreed; the species boundaries under it are the thing this page exists to explain.',
    taxonomySourceIds: [
      'powo-plants-of-the-world-online',
      'wfo-world-flora-online',
    ],
    profileDepth: 'full-profile',
    cropPageSlug: 'citrus',
    limitations: [
      'Citrus species boundaries are unstable between treatments and have changed repeatedly. Names that a source published as species — Citrus sinensis, Citrus paradisi, Citrus reticulata — may resolve to cultivar groups of a hybrid under the treatment this corpus follows.',
    ],
    lastVerifiedAt: '2026-09-03',
  },
];
