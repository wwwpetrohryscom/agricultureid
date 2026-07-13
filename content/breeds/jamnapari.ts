import type { BreedContent } from '@/types/content';

export const jamnapari: BreedContent = {
  id: 'jamnapari',
  slug: 'jamnapari',
  contentType: 'breed',
  title: 'Jamnapari',
  scientificName: 'Capra hircus',
  alternativeNames: ['Jamunapari'],
  category: 'Goat breed',
  summary:
    'The Jamnapari is a large, distinctively long-eared dual-purpose goat from northern India, kept for milk and meat. It is one of the ancestral breeds behind the Anglo-Nubian and is characterised nationally by Indian research bodies.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Jamnapari is a large indigenous goat breed of India, associated with the ravine tracts of the Yamuna, Chambal, and Ganges rivers in the Etawah region of Uttar Pradesh. It is a dual-purpose breed kept for both milk and meat, and it is admired for its tall, upstanding appearance.',
    },
    {
      type: 'paragraph',
      text: 'Historically, Jamnapari goats were among the lop-eared Asian goats exported and used in the development of the Anglo-Nubian. Purebred numbers in the native tract are reported to have declined over time, which has drawn conservation and characterisation interest from Indian research institutions.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Goat (Capra hircus)' },
    { label: 'Breed type', value: 'Dual-purpose (milk and meat)' },
    { label: 'Origin', value: 'India (Etawah region, Uttar Pradesh)' },
    {
      label: 'Appearance',
      value: 'Tall and leggy, very long pendulous ears, strongly convex nose',
    },
    { label: 'Notable role', value: 'An ancestor of the Anglo-Nubian' },
    {
      label: 'Conservation status',
      value: 'Unknown here; purebred numbers reported to have declined',
    },
  ],
  sections: [
    {
      id: 'origin-and-significance',
      heading: 'Origin and significance',
      body: [
        {
          type: 'paragraph',
          text: 'The Jamnapari is native to the river-ravine tracts of northern India and is one of the country’s most recognisable large goat breeds. It contributed to the development of the Anglo-Nubian and has been used to improve other goat populations in Asia. It is recognised and characterised as an indigenous Indian breed by national animal-genetic-resources bodies.',
        },
      ],
    },
    {
      id: 'physical-characteristics',
      heading: 'Physical characteristics',
      body: [
        {
          type: 'list',
          items: [
            'Large, tall, and leggy, with an upstanding, upright carriage.',
            'Very long, flat, pendulous ears and a strongly convex ("Roman" or parrot-mouthed) facial profile.',
            'Short coat, commonly white with tan or brown markings on the head and neck, with feathering on the hindquarters.',
          ],
        },
      ],
    },
    {
      id: 'production-and-adaptation',
      heading: 'Production and adaptation',
      body: [
        {
          type: 'paragraph',
          text: 'As a dual-purpose breed the Jamnapari is valued for milk and for meat, and for its use in improving the size and conformation of other goats. It is adapted to the hot, dry ravine environment of its native tract and is a capable browser.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Reported production varies widely with feeding and management, and pure Jamnapari differs from the many crossbred "Jamnapari-type" goats found across the region. Numbers of purebred animals warrant conservation attention.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'goats' },
  species: 'Goat (Capra hircus)',
  breedType: 'Dual-purpose',
  originCountry: 'India',
  originRegion: 'Etawah region, Uttar Pradesh (Yamuna–Chambal–Ganges ravines)',
  breedStatus: 'registered',
  conservationStatus: 'unknown',
  registryReferences: [
    {
      registry: 'FAO DAD-IS',
      sourceId: 'fao-dad-is',
      jurisdiction: 'Global',
      asOf: '2026-07-12',
      note: 'Breed recorded in the global inventory of livestock breeds.',
    },
    {
      registry: 'ICAR–NBAGR (National Bureau of Animal Genetic Resources)',
      sourceId: 'icar',
      jurisdiction: 'India',
      asOf: '2026-07-12',
      note: 'Recognised and characterised as a registered indigenous goat breed of India.',
    },
  ],
  primaryUses: [
    'Milk production',
    'Meat',
    'Improvement of other goat populations',
  ],
  physicalCharacteristics:
    'Large, tall, leggy goat with an upright carriage, very long flat pendulous ears, and a strongly convex facial profile. Short coat, commonly white with tan/brown head and neck markings and feathering on the hindquarters.',
  productionCharacteristics:
    'A dual-purpose breed valued for milk, meat, and improving other goats. Reported production varies widely with feeding and management, and purebred animals differ from the many crossbred "Jamnapari-type" goats in the region.',
  climateAdaptation:
    'Adapted to the hot, dry, river-ravine environment of northern India and a capable browser, tolerating heat and dry conditions with adequate forage and water.',
  managementContext:
    'Kept in extensive and smallholder systems in its native tract and beyond, both purebred and as a crossing sire. Nutrition, parasite control, and welfare follow local practice and veterinary guidance.',
  geographicDistribution:
    'Native to northern India, with related and crossbred populations across the Indian subcontinent and influence on breeds and goats elsewhere in Asia.',
  connections: [
    { type: 'climate', slug: 'heat-stress' },
    { type: 'climate', slug: 'drought' },
    { type: 'farming-system', slug: 'mixed-farming' },
  ],
  glossaryTerms: ['ruminant', 'forage'],
  geographicScope:
    'Primarily India and the wider subcontinent; an indigenous Indian breed with international historical influence. Husbandry and regulation vary by country.',
  climateContext:
    'Adapted to hot, dry river-ravine conditions; a heat- and drought-tolerant browser.',
  limitations: [
    'This is a breed characterisation, not husbandry, breeding, or veterinary guidance.',
    'Production figures are highly management-dependent and are described only qualitatively here.',
    'Conservation status is left as unknown: purebred numbers in the native tract are reported to have declined, but a specific risk category is not asserted here — consult current FAO DAD-IS and Indian national listings.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-dad-is',
      citedFor: 'Breed record and characterisation in the global inventory',
    },
    {
      sourceId: 'icar',
      citedFor:
        'Recognition and characterisation as an indigenous Indian breed',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Jamnapari (goat breed)',
    description:
      'The Jamnapari: a large, long-eared dual-purpose goat from northern India kept for milk and meat, and an ancestor of the Anglo-Nubian breed.',
    keywords: [
      'Jamnapari goat',
      'Jamunapari',
      'dual-purpose goat',
      'Indian goat breed',
    ],
  },
  structuredData: { article: true },
};
