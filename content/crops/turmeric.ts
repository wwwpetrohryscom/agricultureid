import type { CropContent } from '@/types/content';

export const turmeric: CropContent = {
  id: 'crop-turmeric',
  slug: 'turmeric',
  contentType: 'crop',
  title: 'Turmeric',
  scientificName: 'Curcuma longa',
  alternativeNames: ['Common turmeric'],
  category: 'Spice crop',
  subcategory: 'Perennial rhizome crop',
  botanicalFamily: 'Zingiberaceae (ginger family)',
  lifecycle: 'Perennial herb grown from rhizomes, typically harvested annually',
  summary:
    'Turmeric is a perennial rhizomatous herb grown mainly in South and Southeast Asia for its bright yellow-orange rhizome, used as a culinary spice and natural food colorant.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Turmeric is closely related to ginger and shares a similar growth habit, producing leafy pseudostems above ground while the rhizome, which develops its characteristic deep yellow-orange color and aroma, forms beneath the soil.',
    },
    {
      type: 'paragraph',
      text: 'This entry covers turmeric as an agricultural crop — its botany, climate and soil requirements, cultivation, and uses as a spice and food colorant. Any medicinal or health-related claims associated with turmeric are outside the scope of this reference and are subject to separate regulatory requirements.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Zingiberaceae (ginger family)' },
    {
      label: 'Life cycle',
      value: 'Perennial herb, grown from rhizomes and harvested annually',
    },
    { label: 'Main species', value: 'Curcuma longa' },
    { label: 'Primary uses', value: 'Spice, natural food colorant' },
    {
      label: 'Climate',
      value:
        'Warm, humid tropical to subtropical; monsoon-associated in South Asia',
    },
    {
      label: 'Soil preference',
      value: 'Well-drained loams and alluvial soils',
      note: 'Good drainage is essential to avoid rhizome rot.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Turmeric is grown predominantly by smallholder farmers across South and Southeast Asia, with production closely tied to the monsoon season in major producing countries, where planting typically follows the onset of seasonal rains.',
        },
        {
          type: 'paragraph',
          text: 'A portion of each harvest is retained as planting material (seed rhizome), while the remainder is processed by boiling, drying, and grinding into the powder widely used as a spice and colorant.',
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
            { term: 'Family', description: 'Zingiberaceae (ginger family)' },
            { term: 'Genus and species', description: 'Curcuma longa' },
            {
              term: 'Growth habit',
              description:
                'Perennial rhizomatous herb; leafy pseudostems arise annually from the underground rhizome, which is harvested and used for propagation',
            },
            {
              term: 'Propagation',
              description:
                'Vegetative, from healthy rhizome pieces (fingers or mother rhizomes) rather than from seed',
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
          text: 'Turmeric is believed to have originated in South Asia, where it has been cultivated for thousands of years and holds deep culinary and cultural significance, subsequently spreading to Southeast Asia and other tropical regions through trade.',
        },
        {
          type: 'paragraph',
          text: 'India remains the leading producer and consumer of turmeric today, with significant cultivation also found across Southeast Asia and parts of Africa and Latin America. Production and trade figures are compiled by FAO and national agricultural agencies.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Turmeric requires warm temperatures and abundant moisture during its growing season, with cultivation in South Asia closely following the monsoon calendar, from planting at the start of the rains to harvest after the following dry season begins.',
        },
        {
          type: 'paragraph',
          text: 'The crop has limited cold and frost tolerance, restricting cultivation to tropical and warm subtropical growing zones.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Turmeric performs best on well-drained, fertile loam and alluvial soils that allow the rhizome to expand freely while retaining sufficient moisture during the growing season.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Poor drainage increases the risk of rhizome rot, one of the more serious constraints on yield. Site suitability should be assessed with local soil survey information.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Turmeric is established by planting healthy rhizome pieces, commonly into raised beds or ridges that support drainage, timed to the onset of the rainy season in most traditional production regions.',
        },
        {
          type: 'list',
          items: [
            'Selection of healthy, disease-free seed rhizomes for planting',
            'Raised bed or ridge preparation to support drainage around the rhizome',
            'Mulching to conserve soil moisture and suppress weeds during establishment',
            'Intercropping with other crops in some traditional smallholder systems',
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
          text: 'Potassium supports rhizome bulking and quality, while adequate organic matter and balanced nutrition support the extended growing period turmeric requires to develop its characteristic color and aroma compounds.',
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
          text: 'Turmeric is grown largely under rain-fed monsoon conditions in its major production regions, with supplemental sprinkler irrigation used where rainfall is insufficient or poorly distributed across the growing season.',
        },
        {
          type: 'paragraph',
          text: 'Consistent moisture supports rhizome development, though care is taken to avoid waterlogging, which increases disease risk.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Bacterial wilt can cause rapid wilting and collapse of pseudostems and spreads through infected planting material and soil, while rhizome rot is a major constraint favored by poor drainage and waterlogging. Root-knot nematodes damage the rhizome and reduce quality, and scale insects can affect stored and field-grown rhizomes.',
        },
        {
          type: 'paragraph',
          text: 'Management relies on clean, disease-free planting material, well-drained sites, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Rhizomes are lifted by hand once pseudostems have dried and senesced, typically several months after planting, and are then commonly boiled, sun-dried, and polished before being ground into the familiar spice powder.',
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
            'Dried, ground rhizome used widely as a culinary spice',
            'Natural food and textile colorant derived from rhizome pigments',
            'Fresh rhizome used in some regional cuisines',
            'Seed rhizomes retained for the following planting cycle',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'bacterial-wilt' },
    { type: 'plant-disease', slug: 'root-rot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'root-knot-nematode' },
    { type: 'pest', slug: 'scale-insects' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'alluvial-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'potassium' },
    { type: 'soil-topic', slug: 'soil-drainage' },
    { type: 'climate', slug: 'monsoon' },
    { type: 'climate', slug: 'humidity' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'irrigation-method', slug: 'sprinkler-irrigation' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'ginger' },
    { type: 'crop', slug: 'black-pepper' },
  ],
  glossaryTerms: ['perennial-crop', 'host-plant', 'yield'],
  geographicScope:
    'Global overview of production concentrated in South and Southeast Asia, closely tied to the monsoon calendar.',
  climateContext:
    'Warm, humid perennial rhizome crop grown largely under monsoon rainfall; limited cold tolerance.',
  limitations: [
    'This entry addresses turmeric solely as an agricultural crop; medicinal or health-related claims are outside its scope and are subject to separate regulatory requirements.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Global turmeric production and trade context',
    },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'cabi', citedFor: 'Turmeric disease and pest compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Turmeric',
    description:
      'A structured, evidence-based reference on turmeric as a crop: classification, monsoon climate needs, cultivation, diseases, pests, and spice uses.',
    keywords: ['turmeric', 'Curcuma longa', 'rhizome crop', 'spice crop'],
  },
  structuredData: { article: true },
};
