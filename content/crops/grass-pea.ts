import type { CropContent } from '@/types/content';

export const grassPea: CropContent = {
  id: 'crop-grass-pea',
  slug: 'grass-pea',
  contentType: 'crop',
  title: 'Grass Pea',
  scientificName: 'Lathyrus sativus',
  alternativeNames: [
    'Khesari',
    'Chickling pea',
    'Chickling vetch',
    'Blue sweet pea',
  ],
  category: 'Legume crop',
  subcategory: 'Hardy grain and forage legume',
  botanicalFamily: 'Fabaceae (legumes)',
  lifecycle: 'Annual',
  summary:
    'Grass pea is an exceptionally hardy grain and forage legume that yields under drought, waterlogging, and poor soils, valued as a food-security crop despite a neurotoxin in its seed that requires careful use.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Grass pea, known as khesari in South Asia, is one of the most stress-tolerant of all grain legumes, capable of producing a crop under drought, flooding, and on poor soils where most other crops fail. This resilience has long made it an insurance and food-security crop in marginal environments of South Asia, the Horn of Africa, and the Mediterranean.',
    },
    {
      type: 'paragraph',
      text: 'The crop carries an important caveat: its seed contains a neurotoxic amino acid (commonly abbreviated ODAP or β-ODAP) that, when the seed is eaten in large quantities as a dominant part of the diet over an extended period, is associated with a paralytic condition called neurolathyrism. Breeding for low-toxin lines and safe preparation methods are central to its use. Like other legumes, it fixes nitrogen through nodulation.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Fabaceae (legumes)' },
    { label: 'Life cycle', value: 'Annual' },
    { label: 'Scientific name', value: 'Lathyrus sativus' },
    {
      label: 'Primary uses',
      value: 'Dry seed as food and feed, and foliage as forage',
    },
    {
      label: 'Climate',
      value:
        'Cool to warm season; tolerant of both drought and temporary waterlogging',
    },
    {
      label: 'Soil preference',
      value: 'Wide range including heavy clays; tolerant of adverse conditions',
      note: 'Grown on residual moisture in rice fallows and on heavy vertisols.',
    },
    {
      label: 'Safety note',
      value:
        'Seed contains the neurotoxin ODAP; requires low-toxin lines and safe preparation',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Grass pea is grown for its seed, used as human food and animal feed, and for its foliage as forage. It is prized for reliability under adverse conditions, often providing a harvest in years when other crops fail, and is frequently sown on residual moisture after rice or on heavy clay soils.',
        },
        {
          type: 'paragraph',
          text: 'Its value as a low-input, stress-tolerant crop is balanced by the need to manage the neurotoxin in its seed through low-ODAP cultivars, dietary moderation, and traditional preparation methods such as soaking and cooking.',
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
            { term: 'Family', description: 'Fabaceae (legume family)' },
            { term: 'Genus and species', description: 'Lathyrus sativus' },
            {
              term: 'Growth habit',
              description:
                'Scrambling annual with slender, winged stems, pinnate leaves ending in tendrils, and flattened pods',
            },
            {
              term: 'Root system',
              description:
                'Taproot bearing nodules that host nitrogen-fixing rhizobia',
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
          text: 'Grass pea is an ancient crop of the Near East and has long been cultivated across South Asia, the Horn of Africa, and the Mediterranean. It persists especially in drought- and flood-prone regions where its reliability is valued.',
        },
        {
          type: 'paragraph',
          text: 'Statistics on planted area and production are compiled by FAO and national agencies and should be consulted directly for current figures.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Grass pea is adapted to a broad range of conditions and is remarkable for tolerating both drought and temporary waterlogging within a single crop. It is grown as a cool-season crop in South Asia and the Mediterranean and tolerates a range of temperatures short of severe frost.',
        },
        {
          type: 'paragraph',
          text: 'This dual tolerance of dry and wet extremes underlies its role as an insurance crop in unpredictable environments.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Grass pea grows on a wide range of soils and is notably productive on heavy clays and vertisols, including the residual moisture of rice fallows, where it tolerates conditions that would damage many pulses. It also grows on lighter, less fertile soils.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'The crop’s ability to grow on heavy, moisture-retentive soils and tolerate temporary waterlogging distinguishes it from most drought-adapted pulses.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Grass pea is typically direct-seeded or broadcast, often into standing or recently harvested rice to use residual moisture, requiring minimal inputs. Its hardiness allows establishment under conditions unfavorable to other crops.',
        },
        {
          type: 'list',
          items: [
            'Low-ODAP cultivars preferred where available to reduce toxin-related risk',
            'Sowing timed to use residual moisture in rice-fallow and heavy-soil systems',
            'Minimal-input management reflecting the crop’s stress tolerance',
            'Rhizobial associations that in many soils establish with native rhizobia',
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
          text: 'Grass pea fixes nitrogen through nodulation and is adapted to low-fertility soils, which contributes to its role as a low-input crop. Phosphorus supply supports nodulation and yield where soils are deficient.',
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
          text: 'Grass pea is grown almost entirely under rain-fed or residual-moisture conditions, and its tolerance of both drought and temporary waterlogging means it rarely relies on irrigation. This adaptability is central to its value in variable environments.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Grass pea is comparatively hardy, but downy mildew, powdery mildew, and root rots affect the crop under favorable conditions, and it can be affected by rusts and other foliar diseases. Storage pests damage dry seed.',
        },
        {
          type: 'paragraph',
          text: 'Aphids, thrips, and pod-feeding insects are among the field pests. Management relies mainly on hardy, adapted material, rotation, and field sanitation, with authorized controls used according to their labels where warranted.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Grass pea is harvested once pods and foliage have dried, usually by cutting or pulling whole plants in smallholder systems. Seed intended for food is prepared using low-toxin material and traditional soaking and cooking methods to limit dietary exposure to ODAP.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'callout',
          tone: 'caution',
          title: 'Neurotoxin in seed',
          text: 'Grass pea seed contains the neurotoxin ODAP. Heavy, prolonged reliance on the seed as a dietary staple is associated with neurolathyrism. Use of low-ODAP cultivars, dietary moderation, and proper preparation are important.',
        },
        {
          type: 'list',
          items: [
            'Dry seed used in soups, stews, flour, and other foods, with attention to toxin management',
            'Seed and foliage used as animal feed and forage',
            'A resilient food-security and insurance crop in drought- and flood-prone areas',
            'Contribution of fixed nitrogen and organic matter to soils in rotations',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'downy-mildew' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'thrips' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'clay-soil' },
    { type: 'soil', slug: 'vertisol' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'pea' },
    { type: 'crop', slug: 'lentil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'climate', slug: 'drought' },
    { type: 'soil-topic', slug: 'waterlogging' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'crop', slug: 'rice' },
  ],
  glossaryTerms: [
    'annual-crop',
    'crop-rotation',
    'inoculum',
    'forage',
    'macronutrient',
  ],
  geographicScope:
    'Global overview centered on South Asia, the Horn of Africa, and the Mediterranean. Grown largely as a low-input, stress-tolerant crop.',
  climateContext:
    'Hardy grain legume tolerant of both drought and temporary waterlogging; grown on heavy soils and residual moisture.',
  limitations: [
    'Seed contains the neurotoxin ODAP; safe use depends on low-toxin cultivars, dietary moderation, and preparation, which are not reduced to universal guidance here.',
    'The crop is often grown as a minimal-input insurance crop, so management practices vary widely.',
    'Disease and pest control should follow locally authorized guidance and product labels.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of grass pea as a stress-tolerant food-security legume',
    },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    {
      sourceId: 'icar',
      citedFor: 'Grass pea (khesari) agronomy and low-ODAP breeding research',
    },
    { sourceId: 'cabi', citedFor: 'Grass pea crop and pest compendium data' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Grass Pea (Lathyrus sativus)',
    description:
      'An evidence-based reference on grass pea (khesari): stress tolerance, heavy-soil agronomy, nitrogen fixation, the ODAP neurotoxin, diseases, and uses.',
    keywords: ['grass pea', 'Lathyrus sativus', 'khesari', 'ODAP neurotoxin'],
  },
  structuredData: { article: true },
};
