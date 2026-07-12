import type { CropContent } from '@/types/content';

export const cranberry: CropContent = {
  id: 'crop-cranberry',
  slug: 'cranberry',
  contentType: 'crop',
  title: 'Cranberry',
  scientificName: 'Vaccinium macrocarpon',
  alternativeNames: ['American cranberry'],
  category: 'Fruit crop',
  subcategory: 'Perennial wetland berry shrub',
  botanicalFamily: 'Ericaceae (heath family)',
  lifecycle: 'Perennial (evergreen, trailing shrub)',
  summary:
    'Cranberry is a perennial evergreen shrub of the heath family grown for its tart fruit, cultivated in specially constructed acidic, sandy wetland beds and distinguished by tolerance of waterlogging unusual among fruit crops.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Cranberry is a low-growing, trailing evergreen shrub cultivated in purpose-built production beds — historically bogs, now typically engineered beds with layered sand over peat — that can be flooded and drained as needed for frost protection, pest management, and, in many regions, harvest.',
    },
    {
      type: 'paragraph',
      text: 'Like its Ericaceae relative blueberry, cranberry requires distinctly acidic soil, but it differs sharply from most fruit crops, including blueberry, in tolerating and in some practices requiring temporary flooding, reflecting its origin in acidic wetland habitats.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Ericaceae (heath family)' },
    { label: 'Life cycle', value: 'Perennial evergreen, trailing shrub' },
    { label: 'Main species', value: 'Vaccinium macrocarpon' },
    {
      label: 'Primary uses',
      value: 'Juice and juice blends, dried and sweetened fruit, sauce',
    },
    {
      label: 'Climate',
      value:
        'Cool temperate; requires winter chilling and is managed with flooding for frost protection',
    },
    {
      label: 'Soil preference',
      value: 'Strongly acidic, sandy, peat-based wetland soils',
      note: 'Cranberry beds are purpose-built and flood-tolerant, unlike most fruit crop soils.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Cranberry is grown in specialized, engineered production beds rather than conventional orchard or field soil, reflecting its origin as a wetland plant. Beds are typically layered with sand over an acidic, organic subsoil and equipped with water-control infrastructure for flooding and drainage.',
        },
        {
          type: 'paragraph',
          text: 'Because bed construction is a major, long-term capital investment, cranberry plantings are managed as permanent perennial systems, often productive for many decades once established.',
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
            { term: 'Family', description: 'Ericaceae (heath family)' },
            { term: 'Genus', description: 'Vaccinium' },
            {
              term: 'Principal species',
              description: 'Vaccinium macrocarpon (American cranberry)',
            },
            {
              term: 'Growth habit',
              description:
                'Low-growing, evergreen, trailing perennial shrub forming a dense mat of runners with upright fruiting shoots',
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
          text: 'Cranberry is native to acidic bogs and wetlands of northeastern North America, where it was traditionally harvested from wild stands before cultivation in engineered beds developed into a commercial industry. Production remains concentrated in regions of North America with suitable wetland and water resources.',
        },
        {
          type: 'paragraph',
          text: 'Production and trade statistics are compiled by national and international bodies and are best obtained from primary sources such as FAOSTAT rather than assumed.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Cranberry requires a period of winter chilling for normal flowering and is grown in cool-temperate climates with sufficiently cold winters. Flooding of production beds is used strategically to protect the crop from both winter cold injury and spring frost during sensitive growth stages.',
        },
        {
          type: 'paragraph',
          text: 'Because flood management is integral to frost protection, reliable access to water is as much a climate-related consideration for cranberry as temperature itself.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Cranberry requires strongly acidic soil conditions, similar in principle to blueberry, but is cultivated in purpose-built sandy, peat-based wetland beds rather than conventional field soil, and — unlike most crops — tolerates and is managed with periodic flooding.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Acidic soil is a strict requirement',
          text: 'As with blueberry, cranberry requires distinctly acidic growing conditions; bed construction and water management should follow locally authorized guidance, since correcting soil chemistry in an established bed is difficult.',
        },
      ],
    },
    {
      id: 'planting-and-establishment',
      heading: 'Planting and establishment',
      body: [
        {
          type: 'paragraph',
          text: 'New cranberry beds are established by spreading vines (cuttings) over prepared sand beds, where they root and spread to form a dense mat; this contrasts with the discrete, individually spaced plants used for most other perennial fruit crops.',
        },
        {
          type: 'list',
          items: [
            'Bed construction with layered sand over an acidic peat or organic subsoil',
            'Water-control infrastructure for controlled flooding and drainage',
            'Cultivar selection for fruit color, size, and market use',
            'Periodic sanding of established beds to manage pests and stimulate new growth',
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
          text: "Cranberry, like blueberry, is prone to iron deficiency (chlorosis) if grown outside its required acidic pH range, since iron availability depends strongly on soil acidity. Nutrient management is generally conservative, reflecting the crop's adaptation to naturally low-fertility wetland soils.",
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer rates, timing, and forms should follow local soil and tissue testing and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Water management in cranberry extends well beyond irrigation: beds are flooded for winter protection, frost defense in spring and fall, and, in many production regions, for water harvesting at the end of the season. Sprinkler systems are also used for direct frost protection during sensitive growth stages.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Fruit rot diseases, including those caused by Botrytis (gray mold) and anthracnose-associated fungi, are significant concerns for cranberry, particularly under humid conditions near harvest. Weevils and aphids are among the insect pests affecting the crop.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant cultivars, water management, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Cranberry is harvested either dry, by mechanical picking for the fresh market, or wet, by flooding the bed and using water reels to dislodge floating berries for collection — a method suited to fruit destined for juice and processed products, since wet-harvested fruit is more susceptible to bruising.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'list',
          items: [
            'Juice and juice blends',
            'Dried, sweetened fruit (craisins) and other processed snack products',
            'Sauce and relish products, notably for seasonal food traditions',
            'Extract and supplement uses in food and beverage products',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'gray-mold' },
    { type: 'plant-disease', slug: 'anthracnose' },
  ],
  commonPests: [
    { type: 'pest', slug: 'weevils' },
    { type: 'pest', slug: 'aphids' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'peat-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'iron' },
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'soil-topic', slug: 'waterlogging' },
    { type: 'climate', slug: 'chilling-requirement' },
    { type: 'climate', slug: 'frost' },
    { type: 'irrigation-method', slug: 'sprinkler-irrigation' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'blueberry' },
    { type: 'crop', slug: 'raspberry' },
    { type: 'crop', slug: 'blackberry' },
  ],
  glossaryTerms: [
    'perennial-crop',
    'cultivar',
    'soil-ph',
    'integrated-pest-management',
  ],
  geographicScope:
    'Global overview, reflecting concentrated North American production. Bed construction and water management practices are highly region- and site-specific.',
  climateContext:
    'Cool-temperate wetland shrub requiring winter chill; managed with strategic flooding for frost and cold protection.',
  limitations: [
    'Cranberry production infrastructure (engineered beds, water control) differs fundamentally from conventional soil-based fruit production and is not covered in universal terms here.',
    'Production and trade statistics change over time and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Global cranberry production and trade context',
    },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'cabi',
      citedFor: 'Cranberry disease and pest compendium data',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Cranberry cultivar and production research',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Cranberry',
    description:
      'A structured, evidence-based reference on cranberry: classification, wetland bed cultivation, acidic soil needs, diseases, pests, and uses.',
    keywords: [
      'cranberry',
      'Vaccinium macrocarpon',
      'berry crop',
      'wetland cultivation',
    ],
  },
  structuredData: { article: true },
};
