import type { CropContent } from '@/types/content';

export const tomatillo: CropContent = {
  id: 'crop-tomatillo',
  slug: 'tomatillo',
  contentType: 'crop',
  title: 'Tomatillo',
  scientificName: 'Physalis philadelphica',
  alternativeNames: ['Husk tomato', 'Tomate verde'],
  category: 'Vegetable crop',
  subcategory: 'Annual solanaceous fruit vegetable',
  botanicalFamily: 'Solanaceae (nightshade family)',
  lifecycle: 'Annual',
  summary:
    'Tomatillo is self-incompatible, which is why a single plant sets nothing and why it is the one solanaceous fruit vegetable that cannot be grown alone. It is harvested when the fruit fills its papery husk.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Tomato, pepper and eggplant are all self-fertile and a single plant will crop. Tomatillo is not: it is largely self-incompatible, so pollen must come from a genetically different plant, and a lone plant flowers heavily and sets almost nothing.',
    },
    {
      type: 'paragraph',
      text: 'The fruit develops inside an inflated papery calyx, and the harvest signal is that husk — the fruit is ready when it has filled and split it, not when it has reached a colour.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Solanaceae (nightshade family)' },
    {
      label: 'Breeding system',
      value: 'Largely self-incompatible; requires cross-pollination',
    },
    {
      label: 'Planting implication',
      value: 'More than one plant is required for any fruit at all',
    },
    {
      label: 'Harvest signal',
      value: 'The fruit fills and splits its papery husk',
    },
    {
      label: 'Principal use',
      value: 'Green sauces and salsas in Mexican cooking',
    },
    { label: 'Habit', value: 'Sprawling annual, often left unstaked' },
  ],
  sections: [
    {
      id: 'self-incompatible',
      heading: 'Why one plant sets nothing',
      body: [
        {
          type: 'paragraph',
          text: 'Self-incompatibility in tomatillo means pollen from the same plant is rejected, so fruit set requires a second, genetically distinct plant and an insect to move pollen between them. A gardener who plants one tomatillo gets flowers and no fruit, and the reason is genetic rather than nutritional.',
        },
      ],
    },
    {
      id: 'pollinators',
      heading: 'Insect dependence',
      body: [
        {
          type: 'paragraph',
          text: 'Because cross-pollination is obligatory, bee activity during flowering translates directly into yield in a way it does not for a self-fertile tomato. Protected cultivation therefore needs introduced pollinators or hand pollination, which is a real cost that tomato does not carry.',
        },

        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'husk',
      heading: 'The husk sets the harvest date',
      body: [
        {
          type: 'paragraph',
          text: 'The inflated calyx grows ahead of the fruit and is then filled as the fruit expands. A fruit picked before it has filled the husk is immature; one left after the husk splits and dries begins to lose quality on the ground. Colour is a poor guide because most cultivars are harvested green.',
        },
      ],
    },
    {
      id: 'green',
      heading: 'Harvested green on purpose',
      body: [
        {
          type: 'paragraph',
          text: 'Unlike tomato, tomatillo is used at a green, firm, acidic stage, and its tartness is the point of the crop. Ripening to yellow reduces the acidity that green sauces depend on, so a crop left to colour has been left too long for its market.',
        },

        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'habit',
      heading: 'A sprawling annual',
      body: [
        {
          type: 'paragraph',
          text: 'The plant branches widely and is often grown unstaked on the ground, which is simpler but leaves fruit in contact with soil and increases losses. Staking or caging raises quality and picking speed and is the usual choice in commercial production.',
        },
      ],
    },
    {
      id: 'solanaceae',
      heading: 'A nightshade in the rotation',
      body: [
        {
          type: 'paragraph',
          text: 'Tomatillo shares its family with potato, tomato, pepper and eggplant, and it hosts the same soil-borne diseases and several of the same viruses. It cannot be rotated against them, and its inclusion in a vegetable rotation is a family decision rather than a crop decision.',
        },

        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'physalis',
      heading: 'Not a cape gooseberry',
      body: [
        {
          type: 'paragraph',
          text: 'Physalis philadelphica is a different species from Physalis peruviana, the cape gooseberry, which is a sweet fruit eaten ripe. Both are husk-bearing Physalis and the common names overlap in some markets, but they are different crops with different uses.',
        },
      ],
    },
    {
      id: 'drought',
      heading: 'Water and cracking',
      body: [
        {
          type: 'paragraph',
          text: 'The crop tolerates dry conditions better than tomato but responds to irregular supply by cracking the fruit inside the husk, where the damage is invisible until the husk is removed. Steady moisture through fruiting is a quality input.',
        },
      ],
    },
    {
      id: 'volunteers',
      heading: 'Seed and volunteers',
      body: [
        {
          type: 'paragraph',
          text: 'Fruit left in the field seeds freely and tomatillo volunteers persistently in following crops, which is a weed problem in rotations and a source of virus carry-over. Removing unharvested fruit is a management step and not merely tidiness.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'bacterial-leaf-spot' },
    { type: 'plant-disease', slug: 'early-blight' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'verticillium-wilt' },
  ],
  commonPests: [
    { type: 'pest', slug: 'whiteflies' },
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'flea-beetles' },
    { type: 'pest', slug: 'cutworms' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'alluvial-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'calcium' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'irrigation-method', slug: 'furrow-irrigation' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'cold-storage' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'sweet-pepper' },
    { type: 'crop', slug: 'eggplant' },
  ],
  glossaryTerms: ['annual-crop', 'crop-rotation'],
  geographicScope:
    'Mexico and Central America as a staple vegetable, with production elsewhere for Mexican-cuisine markets.',
  climateContext:
    'Warm-season annual; more drought-tolerant than tomato and sensitive to irregular water during fruiting.',
  limitations: [
    'Self-incompatibility is general in the crop and its degree varies between cultivars; a single plant should not be expected to crop.',
    'Common names overlap with other husk-bearing Physalis species, which are different crops.',
    'Authorised control products are jurisdictional.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Vegetable production context' },
    { sourceId: 'cabi', citedFor: 'Physalis philadelphica compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cornell-cals', citedFor: 'Vegetable production guidance' },
    { sourceId: 'uc-ipm', citedFor: 'Solanaceous crop pest management' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Tomatillo',
    description:
      'Physalis philadelphica as a crop: self-incompatibility and why one plant sets nothing, the husk as harvest signal, green harvest and nightshade rotation.',
    keywords: [
      'tomatillo',
      'Physalis philadelphica',
      'husk tomato',
      'self-incompatible',
      'tomate verde',
    ],
  },
  structuredData: { article: true },
};
