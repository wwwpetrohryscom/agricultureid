import type { CropContent } from '@/types/content';

export const sugarBeet: CropContent = {
  id: 'crop-sugar-beet',
  slug: 'sugar-beet',
  contentType: 'crop',
  title: 'Sugar beet',
  scientificName: 'Beta vulgaris subsp. vulgaris (Altissima Group)',
  category: 'Root and industrial crop',
  subcategory: 'Biennial root crop grown as an annual for sugar',
  botanicalFamily: 'Amaranthaceae (formerly Chenopodiaceae)',
  lifecycle: 'Biennial (grown as an annual root crop)',
  summary:
    'Sugar beet is a biennial root crop grown as an annual for its sucrose-rich storage root, providing a temperate-climate alternative to sugarcane for sugar production.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Sugar beet is naturally a biennial plant: in its first year it produces a large, sugar-storing taproot, and only in a second year, after exposure to winter cold, does it bolt and flower to set seed. Commercial sugar production exploits this biology by harvesting the crop at the end of its first growing season, before flowering, when root sugar content is highest.',
    },
    {
      type: 'paragraph',
      text: 'Developed as a sugar crop in Europe in the late 18th and early 19th centuries from wild sea beet, sugar beet gave temperate regions an alternative to imported cane sugar and remains an important crop in cooler climates unsuited to sugarcane.',
    },
  ],
  keyFacts: [
    {
      label: 'Botanical family',
      value: 'Amaranthaceae (formerly Chenopodiaceae)',
    },
    {
      label: 'Life cycle',
      value: 'Biennial, harvested as an annual root crop in its first year',
    },
    { label: 'Main species', value: 'Beta vulgaris subsp. vulgaris' },
    {
      label: 'Primary uses',
      value: 'Refined sugar, animal feed by-products, bioethanol',
    },
    {
      label: 'Climate',
      value:
        'Cool to temperate; sensitive to premature bolting from cold exposure',
    },
    {
      label: 'Soil preference',
      value: 'Deep, well-drained loams and silt loams',
      note: 'Requires uncompacted soil to allow good root development.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Sugar beet is grown in temperate regions as a major alternative source of sugar to sugarcane, particularly in parts of Europe, North America, and Asia where climate is unsuited to cane production.',
        },
        {
          type: 'paragraph',
          text: 'Because the crop is harvested for its root before it would naturally flower, agronomic management focuses on maximizing root yield and sugar concentration within a single growing season while avoiding premature bolting.',
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
              description:
                'Amaranthaceae (formerly classified in Chenopodiaceae)',
            },
            { term: 'Genus', description: 'Beta' },
            {
              term: 'Principal species/group',
              description:
                'Beta vulgaris subsp. vulgaris, Altissima Group (sugar beet)',
            },
            {
              term: 'Growth habit',
              description:
                'Biennial root crop producing a large storage taproot in its first year',
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
          text: 'Sugar beet was developed from wild sea beet (Beta vulgaris subsp. maritima), native to European and Mediterranean coastlines, through selective breeding in Europe beginning in the late 18th century, in response to disrupted access to cane sugar imports.',
        },
        {
          type: 'paragraph',
          text: 'Sugar beet is now grown across temperate production regions in Europe, North America, and parts of Asia. Production and trade statistics are compiled by bodies such as FAO and the European Commission and should be taken from those primary datasets.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Sugar beet is adapted to cool-to-temperate climates and, as a biennial, retains a vernalization response: exposure to cold during establishment can trigger premature bolting (flowering) in the first year, which is undesirable since it diverts resources away from root and sugar production.',
        },
        {
          type: 'paragraph',
          text: 'Seedlings tolerate some cold but are vulnerable at emergence, and management practices, including sowing date and variety choice, are used to balance early establishment against bolting risk.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Sugar beet performs best on deep, well-drained, medium-to-fine textured soils such as loams and silt loams, free of compaction, to allow the taproot to develop without restriction.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Waterlogging and soil compaction restrict root development and can increase disease risk. Soil suitability should be assessed with local soil survey information.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: "Sugar beet is precision-sown, generally using pelleted seed, to establish a uniform final plant stand directly rather than relying on the manual thinning once common in the crop's history. A fine, level, firm seedbed supports even emergence.",
        },
        {
          type: 'list',
          items: [
            'Precision sowing to a target plant population using pelleted seed',
            'Fine, firm seedbed preparation for even emergence',
            'Early and effective weed control, as beet competes poorly with weeds when young',
            'Variety and sowing-date choice balanced against bolting risk',
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
          text: 'Sugar beet has a distinctive sensitivity to boron deficiency, which can cause root and crown disorders. Nitrogen is managed carefully, since excess nitrogen late in the season can increase root yield while reducing sugar concentration.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Sugar beet is grown both rain-fed in more humid temperate regions and under irrigation in drier production areas, where water availability during root bulking strongly influences yield.',
        },
        {
          type: 'paragraph',
          text: 'Sprinkler irrigation is commonly used in semi-arid sugar beet production regions, with scheduling aimed at supporting root development while avoiding waterlogging.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Powdery mildew is a common foliar disease of sugar beet, particularly under warm, dry late-season conditions, while root rots caused by soil-borne pathogens can significantly limit yield, especially in poorly drained fields. Aphids are a major pest both through direct feeding and as vectors of damaging viruses, and plant-parasitic nematodes, including root-knot nematode, can affect root quality and yield.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant or tolerant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Sugar beet roots are lifted mechanically in autumn or early winter once sugar content peaks, with careful handling important to minimize root damage and associated sugar losses during subsequent storage before processing.',
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
            'Refined white sugar production',
            'Beet pulp, a fibrous by-product used in livestock feed',
            'Molasses for feed and industrial fermentation',
            'Bioethanol production in some regions',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'root-rot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'root-knot-nematode' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'silt-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'boron' },
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'fertilizer', slug: 'chelated-micronutrients' },
    { type: 'irrigation-method', slug: 'sprinkler-irrigation' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'growing-degree-days' },
    { type: 'machinery', slug: 'combine-harvester' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'potato' },
    { type: 'crop', slug: 'oilseed-rape' },
  ],
  glossaryTerms: ['crop-rotation', 'micronutrient', 'yield'],
  geographicScope:
    'Global overview of temperate production. Sowing date, variety, and bolting risk vary by region.',
  climateContext:
    'Cool-to-temperate biennial root crop harvested as an annual before natural flowering; sensitive to bolting from cold exposure.',
  limitations: [
    'Sowing dates, plant populations, and boron management are region-specific decisions not covered by universal values here.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of sugar beet in global sugar production',
    },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    {
      sourceId: 'ec-agri',
      citedFor: 'European Union sugar beet production and market context',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Regional sugar beet agronomy and management',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Sugar beet disease and pest compendium data',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Sugar beet',
    description:
      'A structured, evidence-based reference on sugar beet: classification, climate and soil needs, agronomy, nutrition, diseases, pests, and uses.',
    keywords: [
      'sugar beet',
      'Beta vulgaris',
      'root crop',
      'sugar beet agronomy',
    ],
  },
  structuredData: { article: true },
};
