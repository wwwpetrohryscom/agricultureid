import type { CropContent } from '@/types/content';

export const fonio: CropContent = {
  id: 'crop-fonio',
  slug: 'fonio',
  contentType: 'crop',
  title: 'Fonio',
  scientificName: 'Digitaria exilis',
  alternativeNames: ['White fonio', 'Acha', 'Fundi', 'Hungry rice'],
  category: 'Cereal crop',
  subcategory: 'Warm-season small-grained cereal',
  botanicalFamily: 'Poaceae (grasses)',
  lifecycle: 'Annual',
  summary:
    'Fonio is a fast-maturing West African cereal with very small grains, valued for growing on poor, sandy soils and producing food during the pre-harvest hungry season, and used as a nutritious gluten-free grain.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Fonio is one of Africa’s oldest cultivated cereals, a warm-season grass with tiny grains grown across the savannas and highlands of West Africa. White fonio is the most widely grown type. The crop is often among the fastest-maturing of cereals, allowing it to provide food during the "hungry season" before the main cereal harvest.',
    },
    {
      type: 'paragraph',
      text: 'Fonio is prized for its ability to yield on poor, sandy, and marginal soils where more demanding cereals fail, and for the quality of its small, gluten-free grain. Much of the crop is grown and processed by smallholder farmers using traditional methods, and dehulling its tiny grain is a recognized challenge.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Poaceae (grasses)' },
    { label: 'Life cycle', value: 'Annual' },
    { label: 'Scientific name', value: 'Digitaria exilis (white fonio)' },
    {
      label: 'Primary uses',
      value:
        'Grain cooked like a small couscous or porridge; gluten-free; straw as fodder',
    },
    {
      label: 'Climate',
      value:
        'Warm West African savanna and highlands; very short growing cycle',
    },
    {
      label: 'Soil preference',
      value: 'Poor, sandy, and marginal soils; low fertility tolerated',
      note: 'A key crop for land unsuited to more demanding cereals.',
    },
    {
      label: 'Grain trait',
      value:
        'Very small, gluten-free grain; dehulling is a processing challenge',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Fonio is grown for its grain, cooked much like a small-grained couscous or made into porridge, and marketed as a nutritious, gluten-free specialty grain. Its straw provides fodder, and the crop is central to food security in parts of West Africa because of its speed to harvest.',
        },
        {
          type: 'paragraph',
          text: 'The crop’s short cycle and adaptation to poor soils make it a reliable early-season food source, filling the gap before longer-season cereals mature.',
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
            { term: 'Family', description: 'Poaceae (grass family)' },
            {
              term: 'Genus and species',
              description: 'Digitaria exilis (white fonio)',
            },
            {
              term: 'Growth habit',
              description:
                'Slender, tufted warm-season annual grass producing fine racemes of very small grains',
            },
            {
              term: 'Related crop',
              description:
                'Black fonio (Digitaria iburua) is a related, more localized cereal',
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
          text: 'Fonio was domesticated in West Africa and has been cultivated there for a very long time. It remains concentrated in the savanna and highland zones of West Africa, where it is grown mainly by smallholder farmers.',
        },
        {
          type: 'paragraph',
          text: 'Comprehensive production statistics are limited because much of the crop is grown for subsistence; available figures are compiled by FAO and national agencies and should be consulted directly.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Fonio is a warm-season crop of the West African savanna and highlands, requiring warm temperatures and adapted to the region’s rainfall pattern. Its very short cycle allows it to complete growth quickly and escape late-season drought.',
        },
        {
          type: 'paragraph',
          text: 'This rapid maturity is central to fonio’s role as an early-harvest, hungry-season crop.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Fonio is well adapted to poor, sandy, and shallow soils of low fertility, including lateritic soils, where it produces a crop with minimal inputs. This adaptation to marginal land is one of its defining agronomic strengths.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Fonio’s productivity on infertile, sandy, and lateritic soils makes it valuable on land unsuited to more demanding cereals.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Fonio is usually established by broadcasting its very fine seed onto a prepared seedbed at the onset of the rains. As with other small-grained cereals, weed management is important because the crop competes weakly with weeds early on.',
        },
        {
          type: 'list',
          items: [
            'Broadcasting of very fine seed onto a firm, weed-free seedbed',
            'Timing of sowing to fit the short cycle within the rainy season',
            'Weed management during slow early growth',
            'Traditional, labor-intensive dehulling of the tiny grain after harvest',
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
          text: 'Fonio is typically grown with low inputs and is adapted to poor soils. It responds to improved fertility, but its role is often on marginal land where fertilizer use is limited; phosphorus and nitrogen influence growth where soils are deficient.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer programs should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Fonio is grown almost entirely under rain-fed conditions, and its short cycle allows it to make efficient use of a limited rainy season and to escape terminal drought. Irrigation is rarely used for this low-input crop.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Fonio is generally regarded as a hardy, relatively disease-free cereal, though smuts and leaf diseases can occur under favorable conditions. Birds are a significant pest of the ripening grain in many areas.',
        },
        {
          type: 'paragraph',
          text: 'Grasshoppers, armyworms, and other insects feed on the foliage. Management relies mainly on adapted material, timely planting, bird scaring, and field sanitation, with authorized controls used according to their labels where warranted.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Fonio is harvested once the grain has matured, typically by cutting the crop and threshing the very fine grain. Post-harvest dehulling and cleaning of the tiny grain are labor-intensive and remain a recognized bottleneck in fonio processing.',
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
            'Grain cooked like a fine couscous, steamed, or made into porridge and other dishes',
            'Marketed as a nutritious, gluten-free specialty grain',
            'Straw and residues used as livestock fodder',
            'A fast-maturing food-security crop bridging the pre-harvest hungry season',
          ],
        },
      ],
    },
  ],
  commonDiseases: [],
  commonPests: [
    { type: 'pest', slug: 'grasshoppers' },
    { type: 'pest', slug: 'armyworms' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'laterite-soil' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'millet' },
    { type: 'crop', slug: 'sorghum' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'growing-season' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'post-harvest', slug: 'grain-storage' },
  ],
  glossaryTerms: ['annual-crop', 'yield'],
  geographicScope:
    'Global overview centered on smallholder production in the West African savanna and highlands.',
  climateContext:
    'Warm-season, very short-cycle cereal adapted to poor sandy and lateritic soils and to the West African rainy season.',
  limitations: [
    'The crop is largely smallholder-grown, and management and processing methods vary widely and remain traditional.',
    'Fonio has no major documented disease with a dedicated reference entry in this dataset, so none are linked.',
    'Post-harvest dehulling of the tiny grain is a recognized, labor-intensive bottleneck.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of fonio in West African food security',
    },
    { sourceId: 'cabi', citedFor: 'Fonio crop and pest compendium data' },
    { sourceId: 'britannica', citedFor: 'Botanical description and food use' },
    {
      sourceId: 'gbif',
      citedFor: 'Taxonomic and distribution records for Digitaria exilis',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Fonio (Digitaria exilis)',
    description:
      'An evidence-based reference on fonio: botany, fast maturity, poor-soil adaptation, gluten-free grain, West African food security, and processing.',
    keywords: ['fonio', 'Digitaria exilis', 'acha', 'gluten-free cereal'],
  },
  structuredData: { article: true },
};
