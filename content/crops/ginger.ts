import type { CropContent } from '@/types/content';

export const ginger: CropContent = {
  id: 'crop-ginger',
  slug: 'ginger',
  contentType: 'crop',
  title: 'Ginger',
  scientificName: 'Zingiber officinale',
  alternativeNames: ['Common ginger'],
  category: 'Spice crop',
  subcategory: 'Perennial rhizome crop',
  botanicalFamily: 'Zingiberaceae (ginger family)',
  lifecycle: 'Perennial herb grown from rhizomes, typically harvested annually',
  summary:
    'Ginger is a perennial herbaceous plant grown for its aromatic underground rhizome, propagated from rhizome pieces and cultivated across warm, humid regions as a spice crop.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Ginger is grown for its swollen underground rhizome, which develops beneath a stand of reed-like leafy stems arising from the planted rhizome piece. Commercial crops are propagated vegetatively from healthy rhizome sections rather than from seed.',
    },
    {
      type: 'paragraph',
      text: 'This entry covers ginger as an agricultural crop — its botany, climate and soil needs, cultivation, and culinary and food-industry uses. Any medicinal or health-related claims associated with ginger are outside the scope of this reference and are subject to separate regulatory requirements.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Zingiberaceae (ginger family)' },
    {
      label: 'Life cycle',
      value: 'Perennial herb, grown from rhizomes and harvested annually',
    },
    { label: 'Main species', value: 'Zingiber officinale' },
    {
      label: 'Primary uses',
      value: 'Fresh, dried, and processed rhizome as a spice',
    },
    {
      label: 'Climate',
      value: 'Warm, humid tropical to subtropical',
    },
    {
      label: 'Soil preference',
      value: 'Loose, well-drained loams and lateritic soils',
      note: 'Excellent drainage is essential to avoid rhizome rot.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Ginger is grown mainly by smallholder farmers across warm, humid regions of Asia, Africa, and the Pacific, often as an intercrop under partial shade in diversified farming systems, alongside more intensive commercial production in some areas.',
        },
        {
          type: 'paragraph',
          text: 'Because the crop is propagated from rhizome pieces, a portion of each harvest is commonly retained as planting material (seed rhizome) for the following season, an important factor in production planning.',
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
            { term: 'Genus and species', description: 'Zingiber officinale' },
            {
              term: 'Growth habit',
              description:
                'Perennial rhizomatous herb; leafy pseudostems arise annually from the underground rhizome, which is harvested and used for propagation',
            },
            {
              term: 'Propagation',
              description:
                'Vegetative, from healthy rhizome pieces (setts) rather than from seed',
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
          text: 'Ginger is believed to have originated in tropical Southeast Asia, where it has been cultivated for millennia, and spread through trade to South Asia, Africa, and eventually the Americas and the Pacific as demand for the spice grew.',
        },
        {
          type: 'paragraph',
          text: 'It is grown today across warm, humid regions of Asia, Africa, and Latin America. Production and trade figures are compiled by FAO and national agricultural agencies.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Ginger requires warm, humid conditions with well-distributed rainfall during active growth, followed by a drier period that supports rhizome maturation and facilitates harvest.',
        },
        {
          type: 'paragraph',
          text: 'The crop has limited cold and frost tolerance, restricting outdoor cultivation to tropical and warm subtropical growing zones.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Ginger requires loose, friable, well-drained soils, such as lateritic soils and light loams, that allow the rhizome to expand freely and reduce the risk of waterlogging around the below-ground plant parts.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Poor drainage is strongly associated with rhizome rot, one of the most damaging problems in ginger production. Site suitability should be assessed with local soil survey information.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Ginger is established by planting healthy, disease-free rhizome pieces, often into raised beds or ridges that further improve drainage around the developing rhizome.',
        },
        {
          type: 'list',
          items: [
            'Selection of healthy, disease-free seed rhizomes for planting',
            'Raised bed or ridge preparation to maximize drainage',
            'Mulching to conserve soil moisture and moderate soil temperature',
            'Partial shading in some traditional intercropped production systems',
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
          text: 'Potassium supports rhizome development and quality, while nitrogen contributes to the leafy pseudostem growth that sustains photosynthesis feeding rhizome expansion.',
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
          text: 'Ginger requires consistent moisture during active vegetative growth, whether from reliable rainfall or supplemental irrigation, but is highly sensitive to waterlogging around the rhizome.',
        },
        {
          type: 'paragraph',
          text: 'Irrigation, where used, is typically applied to maintain even moisture while drainage measures prevent standing water at the root zone.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Bacterial wilt can cause rapid yellowing and collapse of pseudostems, spreading through infected planting material and soil, while rhizome and root rot are among the most damaging diseases, favored by poor drainage and waterlogged conditions. Root-knot nematodes damage the rhizome and reduce marketable quality, and shoot borers can tunnel into pseudostems.',
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
          text: 'Rhizomes are lifted by hand once pseudostems begin to yellow and dry, with harvest timing set according to whether the crop is intended for fresh (immature, milder) or mature, more fibrous processing use.',
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
            'Fresh rhizome used as a culinary ingredient and flavoring',
            'Dried and ground rhizome as a spice powder',
            'Processed products including preserved, candied, and extracted forms for food and beverage use',
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
    { type: 'pest', slug: 'stem-borers' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'laterite-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'climate', slug: 'humidity' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'soil-topic', slug: 'soil-drainage' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'turmeric' },
    { type: 'crop', slug: 'black-pepper' },
  ],
  glossaryTerms: ['perennial-crop', 'host-plant', 'yield'],
  geographicScope:
    'Global overview of production concentrated in warm, humid regions of Asia, Africa, and Latin America.',
  climateContext:
    'Warm, humid perennial rhizome crop with limited cold tolerance; highly sensitive to waterlogged soil.',
  limitations: [
    'This entry addresses ginger solely as an agricultural crop; medicinal or health-related claims are outside its scope and are subject to separate regulatory requirements.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Global ginger production and trade context' },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'cabi', citedFor: 'Ginger disease and pest compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Ginger',
    description:
      'A structured, evidence-based reference on ginger as a crop: classification, climate and soil needs, cultivation, diseases, pests, and culinary uses.',
    keywords: ['ginger', 'Zingiber officinale', 'rhizome crop', 'spice crop'],
  },
  structuredData: { article: true },
};
