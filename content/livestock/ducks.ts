import type { LivestockContent } from '@/types/content';

export const ducks: LivestockContent = {
  id: 'livestock-ducks',
  slug: 'ducks',
  contentType: 'livestock',
  title: 'Ducks',
  scientificName: 'Anas platyrhynchos domesticus; Cairina moschata (Muscovy)',
  alternativeNames: ['Domestic duck', 'Waterfowl'],
  category: 'Livestock',
  subcategory: 'Monogastric poultry (waterfowl)',
  primaryProducts: ['Meat', 'Eggs', 'Feathers and down', 'Manure'],
  productionSystems: [
    'Free-range and pasture-based systems',
    'Pond- and water-based systems',
    'Intensive housed systems',
  ],
  summary:
    'Ducks are monogastric waterfowl raised worldwide for meat, eggs, and down, kept in systems from free-range ponds and rice paddies to intensive housed operations. Most farmed ducks descend from the mallard or from the separate Muscovy duck species.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Domestic ducks are farmed mainly as two distinct lineages: breeds descended from the mallard (Anas platyrhynchos), such as Pekin and Khaki Campbell, and the Muscovy duck (Cairina moschata), a separate species valued for lean meat in many regions. Like other poultry, ducks are monogastric birds with a single-chambered stomach (proventriculus and gizzard) rather than a ruminant digestive system, but they are distinguished by webbed feet, waterproof plumage, and a strong association with water.',
    },
    {
      type: 'paragraph',
      text: 'Duck-keeping ranges from smallholder flocks that forage across ponds, waterways, and homestead land, to specialised commercial operations raising birds for meat or table eggs in housed systems with little or no open water. Access to water for bathing and foraging is a defining feature of many traditional and free-range duck enterprises, even where it is not required for growth or egg production.',
    },
  ],
  keyFacts: [
    {
      label: 'Species',
      value:
        'Anas platyrhynchos domesticus (most breeds); Cairina moschata (Muscovy duck)',
    },
    {
      label: 'Digestive type',
      value: 'Monogastric (single-chambered stomach); not a ruminant',
    },
    { label: 'Primary products', value: 'Meat, eggs, and down/feathers' },
    {
      label: 'Main systems',
      value: 'Free-range/pond-based systems and intensive housed systems',
    },
    {
      label: 'Feed base',
      value:
        'Formulated poultry rations, often supplemented by foraging for aquatic plants, invertebrates, and waste grain',
    },
    {
      label: 'Notable practice',
      value:
        'Ducks are integrated into rice-paddy systems in parts of Asia for pest and weed control',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Duck production divides broadly into egg-laying breeds selected for high table-egg output and meat breeds selected for rapid growth and carcass yield, alongside dual-purpose and traditional breeds common in smallholder systems. Muscovy ducks, genetically distinct from mallard-derived breeds, are prized in various regions for lean meat and quieter behaviour.',
        },
      ],
    },
    {
      id: 'breeds-and-types',
      heading: 'Breeds and types',
      body: [
        {
          type: 'table',
          caption: 'Common duck breed groups',
          columns: ['Group', 'Examples', 'Main use'],
          rows: [
            [
              'Egg-laying breeds',
              'Khaki Campbell, Indian Runner',
              'Table eggs',
            ],
            ['Meat breeds', 'Pekin, Aylesbury', 'Meat'],
            [
              'Muscovy (separate species)',
              'Muscovy duck',
              'Meat; often free-ranged',
            ],
          ],
        },
        {
          type: 'paragraph',
          text: 'Breed and genetic diversity is documented internationally, including through FAO’s Domestic Animal Diversity Information System (DAD-IS), which records poultry breeds and their conservation status by country.',
        },
      ],
    },
    {
      id: 'nutrition-and-feeding',
      heading: 'Nutrition and feeding',
      body: [
        {
          type: 'paragraph',
          text: 'Commercial duck diets are formulated to meet energy, protein, and micronutrient requirements by age and production stage, following similar principles to other poultry feeding programmes. Ducks with access to ponds, waterways, or flooded paddies can supplement formulated feed by foraging for aquatic plants, invertebrates, and waste grain, though intensive systems typically rely on complete rations delivered with reliable drinking water.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Specific ration formulations and feeding programmes vary by breed, production stage, and system; follow supplier and poultry extension guidance rather than a single fixed diet.',
        },
      ],
    },
    {
      id: 'health-and-welfare',
      heading: 'Health and welfare',
      body: [
        {
          type: 'paragraph',
          text: 'Duck health and welfare depend on clean water for drinking and bathing, adequate space and shelter, protection from predators, and biosecurity measures that limit disease introduction and spread. Because waterfowl can act as natural reservoir hosts for some avian influenza viruses, surveillance and biosecurity are a particular focus of duck health programmes in many countries.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Veterinary and regulatory guidance',
          text: 'Animal health, disease control, medicines, and welfare are governed by regional regulations and professional veterinary advice. AgricultureID does not provide veterinary treatment instructions; follow local law and qualified professionals.',
        },
      ],
    },
    {
      id: 'production-context',
      heading: 'Production context',
      body: [
        {
          type: 'paragraph',
          text: 'Beyond meat, eggs, and down, ducks are valued in some cropping regions for their role in rice-duck integrated farming, where flocks are released into flooded paddies to feed on weeds, insects, and molluscs while depositing manure that returns nutrients to the field. Elsewhere, duck production is organised more like other poultry sectors, with system choice shaped by land, water access, and market demand.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'livestock', slug: 'geese' },
    { type: 'livestock', slug: 'chickens' },
    { type: 'livestock', slug: 'turkeys' },
  ],
  connections: [
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'wheat' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
    { type: 'farming-system', slug: 'aquaponics' },
    { type: 'farming-system', slug: 'mixed-farming' },
  ],
  geographicScope:
    'Global overview; breeds, systems, and regulations vary widely by country and region.',
  climateContext:
    'Ducks are kept from tropical wetlands to temperate regions; water availability and climate shape system choice and management.',
  limitations: [
    'This is a general species overview, not breed-, system-, or region-specific husbandry guidance.',
    'Health, medicine, and welfare practices are governed by local regulation and veterinary advice and are not detailed here.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Duck production systems and global role' },
    { sourceId: 'fao-dad-is', citedFor: 'Duck breeds and genetic diversity' },
    { sourceId: 'woah', citedFor: 'Animal health and welfare standards' },
    { sourceId: 'nap-nrc', citedFor: 'Nutrient requirement references' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Ducks',
    description:
      'A reference on ducks: breeds and types, feeding and foraging, health and biosecurity, and their role in rice-paddy and mixed farming systems.',
    keywords: ['ducks', 'waterfowl', 'duck farming', 'Anas platyrhynchos'],
  },
  structuredData: { article: true },
};
