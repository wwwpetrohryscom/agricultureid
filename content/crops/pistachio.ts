import type { CropContent } from '@/types/content';

export const pistachio: CropContent = {
  id: 'crop-pistachio',
  slug: 'pistachio',
  contentType: 'crop',
  title: 'Pistachio',
  scientificName: 'Pistacia vera',
  alternativeNames: ['Pistachio nut tree'],
  category: 'Tree nut crop',
  subcategory: 'Arid-zone deciduous tree',
  botanicalFamily: 'Anacardiaceae (sumac/cashew family)',
  lifecycle: 'Perennial',
  summary:
    'Pistachio is a deciduous, dioecious tree adapted to hot, arid, continental climates that nonetheless carries a genuine winter chilling requirement. Male and female trees are interplanted for wind pollination, and the crop is well known for pronounced alternate bearing.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Pistachio is a deciduous tree adapted to arid and semi-arid continental climates, tolerating notable heat and drought once established while still requiring a period of winter chilling to flower and leaf out normally each spring. This combination of arid-zone adaptation and a genuine chilling need is one of the more distinctive features of the crop.',
    },
    {
      type: 'paragraph',
      text: 'Pistachio is dioecious, meaning individual trees are either male or female, unlike most other tree nut crops in which a single tree bears both. Commercial orchards therefore interplant a proportion of male pollinizer trees among the female, nut-bearing trees, relying on wind rather than insects to carry pollen between them.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Anacardiaceae (sumac/cashew family)' },
    { label: 'Life cycle', value: 'Perennial deciduous tree' },
    { label: 'Main species', value: 'Pistacia vera' },
    {
      label: 'Sex expression',
      value: 'Dioecious; separate male and female trees, wind-pollinated',
    },
    {
      label: 'Climate',
      value:
        'Hot, arid, and continental; drought- and heat-tolerant but requires winter chilling',
    },
    {
      label: 'Bearing pattern',
      value: 'Prone to pronounced alternate (biennial) bearing',
      note: 'Heavier and lighter crop years tend to alternate.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Pistachio is grown as a long-lived, deciduous perennial, established from grafted trees selected for nut quality and adaptation to arid, continental climates. Orchard-level decisions such as rootstock, the ratio and placement of male pollinizer trees, and training system are made at establishment and shape management for decades afterward.',
        },
        {
          type: 'paragraph',
          text: 'Because the species combines arid-zone tolerance with a real winter chilling requirement, suitable growing regions are those with both a sufficiently cold winter and a hot, dry summer, a combination found in relatively few production areas worldwide.',
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
            { term: 'Genus', description: 'Pistacia' },
            {
              term: 'Principal species',
              description: 'Pistacia vera (cultivated pistachio)',
            },
            {
              term: 'Sex expression',
              description:
                'Dioecious, with separate male and female trees; female trees bear the nut crop and are wind-pollinated by nearby male trees',
            },
            {
              term: 'Growth habit',
              description:
                'Deciduous tree, commercially propagated by grafting a selected cultivar onto a chosen rootstock',
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
          text: 'Pistacia vera is native to a region spanning Central and Southwest Asia, where it has been cultivated for millennia in arid and semi-arid areas. Cultivation has since spread to other regions with a similarly hot, arid, continental climate.',
        },
        {
          type: 'paragraph',
          text: 'Current production statistics, leading cultivars, and trade patterns shift over time and by region; up-to-date figures are best obtained from primary sources such as FAOSTAT and national agricultural statistics services rather than assumed.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Pistachio is well adapted to hot, arid, continental climates and shows notable tolerance of drought and heat once trees are established. At the same time, the species has a genuine winter chilling requirement to break dormancy properly, an interesting combination in which the same crop needs both a cold winter and a hot, dry summer to perform well.',
        },
        {
          type: 'paragraph',
          text: 'Regions lacking adequate winter chill can see uneven or delayed bud break and flowering, even though the crop is otherwise well suited to arid conditions, illustrating why chilling and heat/drought tolerance should be considered together when assessing site suitability.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Pistachio performs best on deep, well-drained soils; sandy soils and loams are generally favored, and the species is notably tolerant of some soil salinity relative to many other tree crops. It has limited tolerance for waterlogging, which restricts rooting and increases the risk of root diseases.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Rootstock choice interacts with soil conditions, including drainage, salinity, and depth. Site assessment should draw on local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'orchard-establishment',
      heading: 'Orchard establishment and management',
      body: [
        {
          type: 'paragraph',
          text: 'Establishing a pistachio orchard begins with selecting a rootstock and cultivar suited to the site. Because the species is dioecious, orchard design must include a number of male pollinizer trees interplanted among the predominantly female planting, positioned to allow wind to carry pollen effectively to female flowers during bloom.',
        },
        {
          type: 'table',
          caption: 'Dioecious pollination design considerations for pistachio',
          columns: ['Consideration', 'Why it matters'],
          rows: [
            [
              'Male pollinizer trees',
              'Pistachio is dioecious; female trees cannot set nuts without pollen from nearby male trees',
            ],
            [
              'Bloom-timing overlap',
              'Male and female bloom periods must overlap for effective pollination',
            ],
            [
              'Wind pollination',
              'Pollen transfer depends on wind rather than insects, so male-tree placement relative to prevailing winds is a design factor',
            ],
            [
              'Male-to-female tree ratio',
              'Orchards allocate a portion of planting positions to male trees rather than nut-bearing females, a trade-off weighed at establishment',
            ],
          ],
        },
        {
          type: 'list',
          items: [
            'Rootstock selection for vigor, salinity tolerance, and site adaptation',
            'Male pollinizer placement and ratio planning for effective wind pollination',
            'Training and pruning system matched to planting density and mechanization',
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
          text: 'Nitrogen supports vegetative growth and nut development, while potassium contributes to nut fill and overall tree condition. Boron and zinc are micronutrients of particular relevance to pistachio, since deficiencies in either can affect flowering and fruit set.',
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
          text: 'Pistachio is grown predominantly under irrigation in most commercial production regions, reflecting the arid climates in which it is typically cultivated, with water demand rising through nut development. Drip irrigation is widely used to apply water efficiently to the root zone.',
        },
        {
          type: 'paragraph',
          text: 'Irrigation scheduling aims to avoid water stress during sensitive growth stages, while the crop’s underlying drought tolerance can allow some flexibility in water-limited seasons compared with less drought-tolerant tree crops.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Anthracnose can affect leaves, shoots, and developing nuts under humid conditions. Root rot, often linked to poorly drained or waterlogged sites, can weaken or kill trees over time. Among insect pests, stink bugs are a documented pistachio pest group associated with kernel staining and quality issues in some regions, while aphids and weevils can additionally affect foliage, shoots, or nuts.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant or tolerant rootstocks where available, orchard sanitation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Pistachio nuts are harvested once the shell naturally splits at maturity, a distinctive trait that serves as a key indicator of readiness and is commercially important for kernel quality. Pistachio also shows a well-documented tendency toward pronounced alternate bearing, with heavier and lighter crop years tending to alternate, which growers account for in long-term orchard planning.',
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
            'Raw and roasted kernels for direct consumption',
            'Confectionery and dessert ingredients',
            'Savory culinary uses, including as a garnish or ingredient in prepared foods',
            'Processed products such as pistachio paste used in confectionery',
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
    { type: 'pest', slug: 'stink-bugs' },
    { type: 'pest', slug: 'weevils' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'boron' },
    { type: 'nutrient', slug: 'zinc' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'climate', slug: 'chilling-requirement' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'machinery', slug: 'sprayer' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'almond' },
    { type: 'crop', slug: 'walnut' },
    { type: 'crop', slug: 'cashew' },
  ],
  glossaryTerms: [
    'perennial-crop',
    'cultivar',
    'integrated-pest-management',
    'yield',
  ],
  geographicScope:
    'Global overview, focused on arid and semi-arid continental production zones. Male pollinizer ratios and chilling needs are region- and site-specific.',
  climateContext:
    'Deciduous tree adapted to hot, arid, continental climates with notable drought and heat tolerance, but requiring a genuine winter chilling period.',
  limitations: [
    'Male pollinizer ratio and placement, rootstock choice, and chilling-hour specifics are cultivar- and region-specific decisions not covered by universal values here.',
    'Production and cultivar-popularity statistics change over time and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Global pistachio production and trade context',
    },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    {
      sourceId: 'cabi',
      citedFor: 'Pistachio pest and disease compendium data',
    },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Integrated pest management guidelines for pistachio',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Pistachio',
    description:
      'A structured, evidence-based reference on pistachio: dioecious pollination, arid climate adaptation, orchard design, harvest, and uses.',
    keywords: ['pistachio', 'Pistacia vera', 'tree nut', 'pistachio orchard'],
  },
  structuredData: { article: true },
};
