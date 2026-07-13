import type { BreedContent } from '@/types/content';

export const arabianHorse: BreedContent = {
  id: 'arabian-horse',
  slug: 'arabian-horse',
  contentType: 'breed',
  title: 'Arabian',
  scientificName: 'Equus caballus',
  alternativeNames: ['Arab horse', 'Arabian horse'],
  category: 'Horse breed',
  summary:
    'The Arabian is an ancient light horse breed from the Arabian Peninsula, prized for its refined head, endurance, and stamina, and enormously influential as a foundation breed on many other horse breeds worldwide.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Arabian is one of the oldest and most recognisable horse breeds, developed by Bedouin peoples of the Arabian Peninsula and long bred for endurance, soundness, and a close bond with humans in a harsh desert environment. It is a light, hot-blooded riding horse with a distinctive silhouette.',
    },
    {
      type: 'paragraph',
      text: 'Arabian blood has been used to refine and improve countless other breeds, most famously contributing to the foundation of the Thoroughbred. Today the breed is maintained by dedicated registries around the world and is especially associated with endurance riding, showing, and general riding.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Horse (Equus caballus)' },
    { label: 'Type', value: 'Light, hot-blooded riding horse' },
    { label: 'Origin', value: 'Arabian Peninsula (Middle East)' },
    { label: 'Noted for', value: 'Endurance, stamina, and refinement' },
    {
      label: 'Distinctive traits',
      value: 'Dished face, arched neck, high tail carriage',
    },
    { label: 'Influence', value: 'Foundation blood in many modern breeds' },
  ],
  sections: [
    {
      id: 'origin-and-history',
      heading: 'Origin and history',
      body: [
        {
          type: 'paragraph',
          text: 'The Arabian developed over many centuries among the desert tribes of the Arabian Peninsula, where horses were valued for hardiness, speed, and endurance over long distances. Exported widely from the 17th century onward, Arabians and part-Arabians influenced the development of light and warmblood breeds across Europe and beyond. International coordination of breed standards is provided through the World Arabian Horse Organization and its member registries.',
        },
      ],
    },
    {
      id: 'appearance-and-characteristics',
      heading: 'Appearance and characteristics',
      body: [
        {
          type: 'list',
          items: [
            'A relatively small, refined horse with a compact, strong body and dense bone.',
            'A finely shaped, often concave ("dished") facial profile, large eyes, and small muzzle.',
            'An arched neck and characteristically high-set, elevated tail carriage.',
            'A spirited yet people-oriented temperament and great stamina.',
          ],
        },
      ],
    },
    {
      id: 'uses-and-management',
      heading: 'Uses and management',
      body: [
        {
          type: 'paragraph',
          text: 'Arabians excel in endurance riding, where stamina and soundness are decisive, and are also used for showing, general riding, and breeding to add refinement and hardiness to other stock. Like all horses they are hindgut fermenters whose management centres on forage; their desert heritage is associated with efficient use of feed and tolerance of heat.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Breed characteristics are general. Individual conformation, temperament, and athletic aptitude vary by bloodline, training, and management.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'horses' },
  species: 'Horse (Equus caballus)',
  breedType: 'Light',
  originRegion: 'Arabian Peninsula (Middle East)',
  breedStatus: 'registered',
  conservationStatus: 'unknown',
  registryReferences: [
    {
      registry: 'FAO DAD-IS',
      sourceId: 'fao-dad-is',
      jurisdiction: 'Global',
      asOf: '2026-07-12',
      note: 'Horse breed recorded in the global domestic animal diversity inventory.',
    },
    {
      registry: 'World Arabian Horse Organization (WAHO) and member registries',
      jurisdiction: 'Global',
      note: 'International coordination of Arabian breed standards and studbooks.',
    },
  ],
  primaryUses: [
    'Endurance riding',
    'Showing and general riding',
    'Foundation and improvement breeding',
  ],
  physicalCharacteristics:
    'A refined, compact light horse with dense bone, a short, often dished head, large eyes, an arched neck, and a high-carried tail. Bay, grey, chestnut, black, and roan colours occur.',
  productionCharacteristics:
    'A performance and breeding animal rather than a food-producing one; valued for stamina, soundness, and its refining influence when crossed with other breeds.',
  climateAdaptation:
    'Descended from desert stock and associated with tolerance of heat and efficient feed use; nonetheless requires the shelter, water, and forage appropriate to any horse.',
  managementContext:
    'Managed as a riding and breeding horse on forage-based diets; its endurance aptitude suits distance disciplines, while its people-oriented temperament aids handling and training.',
  geographicDistribution:
    'Bred and kept worldwide, with strong registries across the Middle East, Europe, the Americas, and Australia.',
  connections: [
    { type: 'crop', slug: 'alfalfa' },
    { type: 'crop', slug: 'oats' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
    { type: 'climate', slug: 'heat-stress' },
  ],
  glossaryTerms: ['forage'],
  geographicScope:
    'Global breed overview; studbooks, standards, and bloodlines vary by country and registry.',
  climateContext:
    'Associated with hot, arid climates by origin, but kept across a wide climatic range with appropriate care.',
  limitations: [
    'This is a general breed profile, not bloodline-specific or veterinary guidance.',
    'Claims about heat tolerance and endurance are qualitative and depend on individual, conditioning, and management.',
    'Conservation risk status is not asserted here because the global breed is numerous while some regional strains are monitored.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-dad-is',
      citedFor: 'Breed recording and global diversity status',
    },
    {
      sourceId: 'britannica',
      citedFor: 'Breed origin, history, and general characteristics',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Arabian (horse breed)',
    description:
      'The Arabian horse: an ancient light breed from the Arabian Peninsula known for endurance and refinement, and a foundation of many breeds — origin and traits.',
    keywords: [
      'Arabian horse',
      'endurance horse',
      'light horse breed',
      'foundation breed',
    ],
  },
  structuredData: { article: true },
};
