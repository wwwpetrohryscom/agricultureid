import type { CropContent } from '@/types/content';

export const coconut: CropContent = {
  id: 'crop-coconut',
  slug: 'coconut',
  contentType: 'crop',
  title: 'Coconut',
  scientificName: 'Cocos nucifera',
  alternativeNames: ['Coconut palm'],
  category: 'Tree crop',
  subcategory: 'Tropical palm oil and fiber crop',
  botanicalFamily: 'Arecaceae (palm family)',
  lifecycle: 'Perennial',
  summary:
    'Coconut is a tall tropical palm grown across coastal and lowland tropical regions for its versatile fruit, yielding oil, food, fiber, and shell products from a single long-lived tree.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Coconut palm is a single-stemmed perennial tree that can remain productive for many decades, producing fruit (the coconut) year-round once mature. Its wide distribution across tropical coastlines and islands reflects both natural seed dispersal by floating fruit and long-standing cultivation.',
    },
    {
      type: 'paragraph',
      text: 'Nearly every part of the coconut fruit and tree has a traditional or commercial use, from the oil-rich kernel (copra) to the fibrous husk (coir) and the hard shell, which supports diverse smallholder and industrial value chains.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Arecaceae (palm family)' },
    { label: 'Life cycle', value: 'Perennial palm tree' },
    { label: 'Main species', value: 'Cocos nucifera' },
    {
      label: 'Primary uses',
      value:
        'Coconut oil, fresh and processed food, fiber (coir), shell products',
    },
    {
      label: 'Climate',
      value: 'Tropical, humid lowland; frost-sensitive',
    },
    {
      label: 'Soil preference',
      value: 'Sandy, alluvial, and lateritic coastal soils',
      note: 'Notably tolerant of saline coastal conditions.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Coconut is grown throughout the humid tropics, especially in coastal lowlands and on islands, by a mix of smallholder farmers, who account for the majority of global production, and larger commercial plantations.',
        },
        {
          type: 'paragraph',
          text: 'Because the palm takes several years to reach bearing age and then remains productive for decades, coconut is a long-term perennial investment, and stand renewal and replanting programs are important where old, low-yielding palms dominate a growing area.',
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
            { term: 'Family', description: 'Arecaceae (palm family)' },
            { term: 'Genus and species', description: 'Cocos nucifera' },
            {
              term: 'Varietal groups',
              description:
                'Tall (typically cross-pollinated, longer-lived) and dwarf (typically self-pollinated, earlier bearing) types, and hybrids between them',
            },
            {
              term: 'Growth habit',
              description:
                'Single-stemmed perennial palm producing a continuous succession of fruit bunches from the crown',
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
          text: 'The precise origin of coconut is debated, with evidence pointing to the Indo-Pacific region; the fruit’s buoyancy and salt tolerance allowed it to disperse naturally along tropical coastlines long before humans expanded its cultivation.',
        },
        {
          type: 'paragraph',
          text: 'Coconut is now grown throughout the tropics, with major production in South and Southeast Asia and significant cultivation across the Pacific, Africa, and Latin America. Current production statistics are compiled by FAO and national agencies.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Coconut requires consistently warm, humid tropical conditions and has no meaningful frost or cold tolerance, restricting commercial production to tropical and near-tropical lowland zones, typically close to sea level.',
        },
        {
          type: 'paragraph',
          text: 'Well-distributed rainfall or reliable groundwater supports steady nut production; prolonged drought can reduce yield, although mature palms tolerate dry spells better than many other tree crops.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Coconut is grown on a wide range of soils, including sandy coastal soils, alluvial floodplain soils, and lateritic soils, reflecting its adaptation to varied tropical coastal environments. It is notably tolerant of saline soil and irrigation water conditions compared with most other tree crops.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Good drainage is still important, since prolonged waterlogging restricts root function. Site suitability should be assessed with local soil survey information.',
        },
      ],
    },
    {
      id: 'plantation-establishment',
      heading: 'Plantation establishment and management',
      body: [
        {
          type: 'paragraph',
          text: 'New plantings are established from selected seed nuts or hybrid seedlings raised in nurseries, with spacing set according to variety (tall or dwarf) and whether intercropping is planned.',
        },
        {
          type: 'list',
          items: [
            'Selection of tall, dwarf, or hybrid planting material suited to the site and market',
            'Wide spacing appropriate to the mature canopy size of tall-type palms',
            'Intercropping with other crops or livestock during the long juvenile and early bearing period',
            'Replanting and rehabilitation programs where senile, low-yielding stands dominate',
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
          text: 'Potassium is required in large amounts by coconut and strongly influences nut yield, while coconut is unusual among crops in having a well-documented, substantial requirement for chlorine, which supports water relations and yield.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer rates, timing, and forms should follow local soil and leaf analysis and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Coconut is grown both rain-fed, where rainfall is well distributed, and under irrigation in drier tropical areas, since consistent moisture supports steady flowering and nut development throughout the year.',
        },
        {
          type: 'paragraph',
          text: 'Drip irrigation is used in some commercial plantations to apply water efficiently, particularly on sandy soils with limited water-holding capacity.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Basal and root rots can affect palm stability and yield, and anthracnose can cause leaf and fruit lesions under humid conditions. Weevils, including large palm weevils, can bore into the trunk and crown, while scale insects can build up on leaves and fruit, weakening the palm.',
        },
        {
          type: 'paragraph',
          text: 'Management relies on resistant or tolerant planting material where available, field sanitation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Nuts are harvested by climbing the palm or using long poles or trained animals in some regions, with harvest timing and maturity stage set according to whether the nuts are destined for fresh consumption, copra production, or fiber extraction.',
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
            'Coconut oil pressed from dried kernel (copra) for food and industrial use',
            'Fresh coconut water and meat for direct consumption and food processing',
            'Coir fiber from the husk for rope, mats, and horticultural growing media',
            'Shell used for charcoal, activated carbon, and handicrafts; leaves and trunk used locally in construction',
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
    { type: 'pest', slug: 'weevils' },
    { type: 'pest', slug: 'scale-insects' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'laterite-soil' },
    { type: 'soil', slug: 'alluvial-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'chlorine' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'drought' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'soil-topic', slug: 'soil-salinity' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'oil-palm' },
    { type: 'crop', slug: 'banana' },
  ],
  glossaryTerms: ['perennial-crop', 'yield', 'micronutrient'],
  geographicScope:
    'Global overview of tropical lowland and coastal production, concentrated in South and Southeast Asia, the Pacific, Africa, and Latin America.',
  climateContext:
    'Warm, humid tropical palm with no frost tolerance; notably tolerant of coastal salinity and moderate drought once established.',
  limitations: [
    'Tall, dwarf, and hybrid variety choice and intercropping systems vary substantially by region and are not detailed here.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Global coconut production and smallholder role',
    },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'cabi', citedFor: 'Coconut disease and pest compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'cgiar',
      citedFor: 'Palm genetic resources and agronomy research',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Coconut',
    description:
      'A structured, evidence-based reference on coconut: classification, tropical climate needs, plantation management, nutrition, diseases, pests, and uses.',
    keywords: ['coconut', 'Cocos nucifera', 'palm crop', 'coconut oil'],
  },
  structuredData: { article: true },
};
