import type { CropContent } from '@/types/content';

export const cashew: CropContent = {
  id: 'crop-cashew',
  slug: 'cashew',
  contentType: 'crop',
  title: 'Cashew',
  scientificName: 'Anacardium occidentale',
  alternativeNames: ['Cashew nut tree'],
  category: 'Tree nut crop',
  subcategory: 'Tropical evergreen tree',
  botanicalFamily: 'Anacardiaceae (sumac/cashew family)',
  lifecycle: 'Perennial',
  summary:
    'Cashew is a tropical evergreen tree grown for its true fruit — the kidney-shaped nut — which develops externally on a fleshy, edible stalk known as the cashew apple. It is notably drought- and heat-tolerant and widely grown on marginal soils in smallholder and agroforestry systems.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Cashew is a tropical evergreen tree grown primarily for its nut, though the plant produces an unusual fruit structure in which two distinct edible parts develop together. It is well adapted to hot, dry tropical climates and is widely cultivated by smallholders as well as in larger commercial plantings.',
    },
    {
      type: 'paragraph',
      text: 'Cashew is notably drought- and heat-tolerant relative to many other tree nut crops and is often grown on marginal tropical soils where few other cash crops perform well, making it an important component of smallholder and agroforestry systems in many producing regions.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Anacardiaceae (sumac/cashew family)' },
    { label: 'Life cycle', value: 'Perennial evergreen tree' },
    { label: 'Main species', value: 'Anacardium occidentale' },
    {
      label: 'Fruit structure',
      value:
        'True fruit is the kidney-shaped nut; the fleshy "cashew apple" is a swollen stalk, not a true fruit',
    },
    {
      label: 'Climate tolerance',
      value: 'Notably drought- and heat-tolerant once established',
    },
    {
      label: 'Soil adaptability',
      value: 'Adapted to marginal, sandy tropical soils',
      note: 'Widely grown in smallholder and agroforestry systems.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Cashew is grown as a long-lived tropical evergreen tree, established from seedlings or grafted planting material depending on region and production system. Its tolerance of heat, drought, and marginal soils has made it an important crop in areas less suited to many other tree crops.',
        },
        {
          type: 'paragraph',
          text: 'Production spans smallholder plantings, often intercropped with other species, as well as larger commercial operations, with cultivar choice and management practices varying widely by producing region.',
        },
      ],
    },
    {
      id: 'botanical-classification',
      heading: 'Botanical classification',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Family',
              description: 'Anacardiaceae (sumac/cashew family)',
            },
            { term: 'Genus', description: 'Anacardium' },
            {
              term: 'Principal species',
              description: 'Anacardium occidentale (cashew)',
            },
            {
              term: 'Fruit structure',
              description:
                'The true botanical fruit is the kidney-shaped nut that forms at the end of the "cashew apple," a fleshy, edible structure that is actually a swollen pedicel (stalk), not a true fruit',
            },
            {
              term: 'Growth habit',
              description:
                'Evergreen tree, grown from seedlings or grafted material depending on region and production system',
            },
          ],
        },
      ],
    },
    {
      id: 'origin-and-distribution',
      heading: 'Origin and distribution',
      body: [
        {
          type: 'paragraph',
          text: 'Cashew is native to tropical parts of South America, particularly Brazil, and was subsequently introduced to other tropical regions, including parts of Africa and Asia, where it has since become established as a significant smallholder and commercial crop.',
        },
        {
          type: 'paragraph',
          text: 'Current production statistics, leading producing countries, and trade patterns shift over time; up-to-date figures are best obtained from primary sources such as FAOSTAT and national agricultural statistics services rather than assumed.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Cashew is adapted to hot, tropical climates and shows notable tolerance of both drought and heat once trees are established, making it suitable for regions where rainfall is seasonal or limited. It generally requires a distinct dry period for good flowering and nut development.',
        },
        {
          type: 'paragraph',
          text: 'Cashew is sensitive to cold and frost and is not suited to temperate climates, restricting its cultivation to tropical and near-tropical zones.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Cashew is notably adaptable to marginal soils, including sandy and light-textured soils of relatively low fertility, where it often outperforms many alternative crops. Deep, well-drained soils are still preferred, as the species has limited tolerance for waterlogging.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'While cashew tolerates poor and sandy soils better than many tree crops, site drainage should still be assessed using local soil survey information where available.',
        },
      ],
    },
    {
      id: 'orchard-establishment',
      heading: 'Orchard establishment and management',
      body: [
        {
          type: 'paragraph',
          text: 'Establishing a cashew planting involves selecting seedling or grafted material suited to local conditions and spacing trees to allow for their eventual mature canopy size. Because of its tolerance for marginal land, cashew is frequently established in agroforestry arrangements alongside other crops or in reforestation and land-rehabilitation contexts.',
        },
        {
          type: 'list',
          items: [
            'Planting material selection: seedling versus grafted, depending on region and desired uniformity',
            'Spacing to accommodate mature canopy spread',
            'Integration into agroforestry or intercropping systems where appropriate',
            'Long-term canopy and orchard floor management across many productive years',
          ],
        },
      ],
    },
    {
      id: 'nutrient-considerations',
      heading: 'Nutrient considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Nitrogen supports vegetative growth, while potassium contributes to nut development and overall tree vigor. Zinc is a micronutrient of relevance to cashew, since deficiency can affect shoot growth and flowering.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer rates, timing, and forms should follow local leaf and soil analysis and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Cashew is grown predominantly rain-fed in many traditional production regions, reflecting its drought tolerance once established, though irrigation, including drip irrigation, is used in some commercial plantings to support establishment and improve nut yield and quality.',
        },
        {
          type: 'paragraph',
          text: 'Because a dry period supports flowering, irrigation scheduling in irrigated systems is managed carefully to avoid disrupting the natural flowering response to seasonal dryness.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Anthracnose can affect flowers, young shoots, and developing fruit, particularly during humid periods. Root rot, often linked to poorly drained sites, can weaken or kill trees over time. Insect pests include aphids, mealybugs, and scale insects, which can affect shoots, flowers, and developing nuts and may also promote sooty mold through honeydew production.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant or tolerant planting material where available, sanitation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Cashew nuts are typically harvested after the cashew apple and attached nut fall to the ground, at which point the nut is detached from the apple and collected. The nut is subsequently dried before further processing to extract the kernel.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'paragraph',
          text: 'The cashew nut shell contains caustic phenolic compounds, known collectively as cashew nut shell liquid, which is why raw kernels require careful processing, including roasting or steaming steps, before the shell is removed and the kernel is safe to eat.',
        },
        {
          type: 'list',
          items: [
            'Roasted and processed kernels for direct consumption',
            'Cashew apple used fresh, or processed into juice and other beverages in some producing regions',
            'Cashew nut shell liquid, a by-product with industrial applications',
            'Kernel-based ingredients used in confectionery and snack products',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'root-rot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'mealybugs' },
    { type: 'pest', slug: 'scale-insects' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'zinc' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'machinery', slug: 'sprayer' },
    { type: 'farming-system', slug: 'agroforestry' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'coconut' },
    { type: 'crop', slug: 'oil-palm' },
    { type: 'crop', slug: 'mango' },
  ],
  glossaryTerms: [
    'perennial-crop',
    'cultivar',
    'integrated-pest-management',
    'yield',
  ],
  geographicScope:
    'Global overview, focused on tropical and near-tropical production zones. Practices vary widely between smallholder and commercial systems.',
  climateContext:
    'Tropical evergreen tree crop; notably drought- and heat-tolerant once established, but sensitive to cold and frost.',
  limitations: [
    'Planting material choice, spacing, and management intensity differ substantially between smallholder and commercial cashew systems and are not covered by universal values here.',
    'Production statistics change over time and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Global cashew production and trade context' },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    {
      sourceId: 'cabi',
      citedFor: 'Cashew pest and disease compendium data',
    },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Integrated pest management principles applicable to cashew',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Cashew',
    description:
      'A structured, evidence-based reference on cashew: botany of the cashew apple and nut, tropical climate needs, soil adaptability, and harvest.',
    keywords: ['cashew', 'Anacardium occidentale', 'tree nut', 'cashew apple'],
  },
  structuredData: { article: true },
};
