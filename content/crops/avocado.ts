import type { CropContent } from '@/types/content';

export const avocado: CropContent = {
  id: 'crop-avocado',
  slug: 'avocado',
  contentType: 'crop',
  title: 'Avocado',
  scientificName: 'Persea americana',
  alternativeNames: ['Alligator pear'],
  category: 'Tree fruit crop',
  subcategory: 'Subtropical/tropical evergreen tree',
  botanicalFamily: 'Lauraceae (laurel family)',
  lifecycle: 'Perennial',
  summary:
    'Avocado is a subtropical to tropical evergreen tree grown for its nutrient-dense, oil-rich fruit. Orchards are established from grafted trees, and management centers heavily on root-zone drainage because of the crop’s vulnerability to Phytophthora root rot.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Avocado is an evergreen tree grown across subtropical and tropical regions for its fleshy, oil-rich fruit. Commercial orchards are established from grafted trees, combining a fruiting cultivar with a rootstock chosen for site adaptation, since avocado does not come true from seed and grafting also allows the use of rootstocks selected for disease tolerance.',
    },
    {
      type: 'paragraph',
      text: 'Avocado cultivars are classified into flowering types, commonly labeled type A and type B, based on the timing of male and female flower opening within each flower on a given day, a pattern known as protogynous dichogamy. Orchards are often designed with a mix of compatible flowering types interplanted to support more effective pollination and fruit set, though the practical benefit varies by cultivar, climate, and pollinator activity.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Lauraceae (laurel family)' },
    { label: 'Life cycle', value: 'Perennial evergreen tree' },
    { label: 'Main species', value: 'Persea americana' },
    {
      label: 'Primary uses',
      value: 'Fresh fruit, guacamole and other prepared foods, oil',
    },
    {
      label: 'Climate',
      value: 'Subtropical to tropical; notably frost-sensitive',
    },
    {
      label: 'Soil preference',
      value: 'Deep, very well-drained soils',
      note: 'Drainage is the single most critical soil factor because of the crop’s vulnerability to Phytophthora root rot.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Avocado is grown as a grafted, long-lived evergreen perennial rather than an annually replanted crop. Because the tree is propagated clonally and cropped over many years, decisions made at establishment — rootstock, cultivar, flowering-type composition, and site drainage — shape orchard performance for the life of the planting.',
        },
        {
          type: 'paragraph',
          text: 'Among the agronomic factors affecting avocado, root-zone health is especially central: the crop’s well-documented sensitivity to waterlogged, poorly aerated soil conditions makes drainage management a dominant theme throughout site selection, orchard design, and irrigation practice.',
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
            { term: 'Family', description: 'Lauraceae (laurel family)' },
            { term: 'Genus', description: 'Persea' },
            {
              term: 'Principal species',
              description: 'Persea americana (cultivated avocado)',
            },
            {
              term: 'Growth habit',
              description:
                'Evergreen tree, commercially propagated by grafting a fruiting cultivar onto a selected rootstock',
            },
            {
              term: 'Flower type',
              description:
                'Cultivars are classified as type A or type B according to the daily timing of male- and female-phase flower opening (protogynous dichogamy), a factor relevant to orchard pollination design',
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
          text: 'Avocado is native to Mesoamerica, with the crop’s major horticultural races (commonly referred to as Mexican, Guatemalan, and West Indian) reflecting long domestication and diversification across that region before spreading through global trade to subtropical and tropical growing areas worldwide.',
        },
        {
          type: 'paragraph',
          text: 'Production areas, dominant cultivars, and trade patterns change over time; current figures are best obtained from primary sources such as FAOSTAT and national agricultural statistics services rather than assumed.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Avocado is adapted to subtropical and tropical climates and is notably frost-sensitive; cold damage can affect leaves, flowers, and young fruit, and the degree of sensitivity varies by cultivar and tree age, with some types more vulnerable to cold than others even at temperatures well above freezing in absolute terms. This general frost sensitivity is one of the most important climate risk factors in siting and cultivar choice.',
        },
        {
          type: 'paragraph',
          text: 'Wind exposure can also affect avocado through flower and fruit drop and physical damage to the canopy, making shelter or windbreaks a relevant site consideration in exposed locations.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Avocado requires deep, very well-drained soils, since the tree’s root system is highly intolerant of waterlogged, poorly aerated conditions. Poor drainage is closely linked to Phytophthora root rot, the crop’s most significant disease, making soil drainage assessment one of the most important steps in orchard site selection.',
        },
        {
          type: 'paragraph',
          text: 'In several major avocado-growing regions, including parts of Mexico, volcanic soils are notably favorable due to their structure and drainage characteristics, though this is a regional pattern rather than a universal requirement, and other soil types can also support successful production where drainage is adequate.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Sites with heavy, poorly drained, or compacted soils, or with a high water table, should be avoided or substantially improved before planting. Local soil survey information should guide site-specific drainage assessment.',
        },
      ],
    },
    {
      id: 'orchard-establishment',
      heading: 'Orchard establishment and management',
      body: [
        {
          type: 'paragraph',
          text: 'Establishing an avocado orchard begins with selecting a rootstock and cultivar combination suited to the site, with particular attention to rootstock tolerance of Phytophthora root rot and local soil conditions.',
        },
        {
          type: 'list',
          items: [
            'Rootstock selection prioritizing Phytophthora root rot tolerance and site/soil adaptation',
            'Cultivar selection, often including interplanting of compatible type A and type B flowering types to support pollination',
            'Windbreak provision in exposed sites to reduce flower and fruit drop and canopy damage',
            'Tree spacing and canopy management suited to cultivar vigor and orchard system',
          ],
        },
        {
          type: 'table',
          caption: 'Avocado flowering types and daily flower-opening behavior',
          columns: [
            'Flowering type',
            'Female-phase opening',
            'Male-phase opening',
          ],
          rows: [
            ['Type A', 'Morning of day one', 'Afternoon of day two'],
            ['Type B', 'Afternoon of day one', 'Morning of day two'],
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
          text: 'Nitrogen supports canopy growth and fruiting, while boron and zinc are micronutrients of particular relevance to avocado flowering, fruit set, and overall tree health. Avocado is notably sensitive to chloride, which is why sulfate of potash is typically favored over muriate of potash (potassium chloride) as a potassium source, since it supplies potassium without the higher chloride load associated with muriate-based fertilizers.',
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
          text: 'Avocado is commonly grown under irrigation, with drip irrigation widely used to supply water precisely to the root zone while minimizing the risk of the prolonged wet conditions that favor Phytophthora root rot. Because the crop is both water-demanding and highly sensitive to waterlogging, irrigation scheduling in avocado is closely tied to root-zone aeration and drainage management.',
        },
        {
          type: 'paragraph',
          text: 'Drought stress can reduce flowering, fruit set, and fruit size, so irrigation planning generally aims to maintain even root-zone moisture without saturating the soil.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Phytophthora root rot, caused by the soilborne oomycete Phytophthora cinnamomi, is the dominant and most economically important disease of avocado worldwide, thriving in waterlogged or poorly aerated soils and capable of causing serious tree decline and death. Because of this, root-zone drainage and avoidance of prolonged anaerobic soil conditions are the central, overriding management priorities for avocado health, informing site selection, rootstock choice, and irrigation practice alike. Anthracnose is also an important disease, particularly affecting fruit quality, including post-harvest decay.',
        },
        {
          type: 'paragraph',
          text: 'Common pests include thrips, which can scar developing fruit; spider mites, which can build up under hot, dry conditions and cause leaf damage; and scale insects, which affect vigor and fruit appearance and can also attract secondary sooty mold growth.',
        },
        {
          type: 'paragraph',
          text: 'Management combines Phytophthora-tolerant rootstocks, strict drainage management, sanitation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'A defining agronomic fact of avocado is that fruit does not ripen while still attached to the tree: it reaches physiological maturity on the tree but only begins to soften and ripen after being picked. This allows growers to leave mature fruit on the tree as a form of on-tree storage, harvesting in stages as demand requires, before the fruit ripens off the tree over the following days. Maturity assessment relies on cultivar-specific indicators rather than a universal numeric standard.',
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
            'Fresh fruit eaten on its own or in salads and other dishes',
            'Guacamole and other prepared and processed foods',
            'Avocado oil for culinary and cosmetic use',
            'By-products such as seed and skin explored in some regions for secondary uses',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'anthracnose' },
  ],
  commonPests: [
    { type: 'pest', slug: 'thrips' },
    { type: 'pest', slug: 'spider-mites' },
    { type: 'pest', slug: 'scale-insects' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'volcanic-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'boron' },
    { type: 'nutrient', slug: 'zinc' },
    { type: 'fertilizer', slug: 'sulfate-of-potash' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'drought' },
    { type: 'machinery', slug: 'sprayer' },
    { type: 'farming-system', slug: 'agroforestry' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'mango' },
    { type: 'crop', slug: 'orange' },
    { type: 'crop', slug: 'banana' },
  ],
  glossaryTerms: [
    'perennial-crop',
    'cultivar',
    'integrated-pest-management',
    'yield',
  ],
  geographicScope:
    'Global overview. Rootstock, flowering-type composition, and site drainage requirements are region- and cultivar-specific.',
  climateContext:
    'Subtropical to tropical evergreen tree; notably frost-sensitive and vulnerable to wind exposure.',
  limitations: [
    'Rootstock choice, flowering-type interplanting ratios, and spacing are examples of region- and cultivar-specific decisions not covered by universal values here.',
    'Production and yield statistics change over time and should be taken from primary datasets such as FAOSTAT.',
    'Frost sensitivity varies by cultivar and tree age; a specific numeric temperature threshold is not given here and should be sourced from regional guidance.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Global avocado production and agronomy context',
    },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    {
      sourceId: 'cabi',
      citedFor:
        'Avocado pest and disease compendium data, including Phytophthora root rot',
    },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Integrated pest management guidelines for avocado',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Avocado cultivar and orchard management research',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Avocado',
    description:
      'A reference on avocado: flowering-type classification, frost sensitivity, drainage and Phytophthora root rot, nutrition, pests, and off-tree ripening.',
    keywords: ['avocado', 'Persea americana', 'tree fruit', 'avocado orchard'],
  },
  structuredData: { article: true },
};
