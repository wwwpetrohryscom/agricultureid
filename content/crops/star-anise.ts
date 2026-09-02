import type { CropContent } from '@/types/content';

export const starAnise: CropContent = {
  id: 'crop-star-anise',
  slug: 'star-anise',
  contentType: 'crop',
  title: 'Star Anise',
  scientificName: 'Illicium verum',
  alternativeNames: ['Chinese star anise', 'Badian'],
  category: 'Spice crop',
  subcategory: 'Evergreen tree grown for dried fruit',
  botanicalFamily: 'Schisandraceae',
  lifecycle: 'Perennial',
  summary:
    'Star anise is harvested as an unripe fruit from trees that take years to bear, and its principal commercial risk is adulteration with the toxic Japanese star anise, which the dried fruits closely resemble.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Star anise is the dried unripe fruit of Illicium verum, an evergreen tree grown almost entirely in southern China and northern Vietnam. The star shape that names it is the arrangement of the follicles, and the fruit is picked before it ripens and splits.',
    },
    {
      type: 'paragraph',
      text: "The crop's defining commercial problem is not agronomic. Illicium anisatum, Japanese star anise, produces a very similar dried fruit that is neurotoxic, and confusion or deliberate adulteration between the two has caused documented poisoning incidents. Authentication is therefore part of the trade rather than an optional check.",
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Schisandraceae' },
    { label: 'Harvested organ', value: 'Unripe fruit, dried whole' },
    {
      label: 'Adulteration hazard',
      value:
        'Illicium anisatum, Japanese star anise, is toxic and visually similar',
    },
    {
      label: 'Time to bearing',
      value: 'Several years from planting; full production much later',
    },
    {
      label: 'Production concentration',
      value: 'Southern China and northern Vietnam',
    },
    { label: 'Industrial use', value: 'A source of shikimic acid' },
  ],
  sections: [
    {
      id: 'unripe',
      heading: 'Picked before it ripens',
      body: [
        {
          type: 'paragraph',
          text: 'The fruit is harvested while still unripe, when the follicles are full but have not split and shed seed. A fruit left to ripen opens, loses its seed and its shape, and is worth substantially less. Harvest timing is therefore judged on the fruit rather than on a calendar, and it is done by hand from ladders or by climbing.',
        },

        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'toxic-lookalike',
      heading: 'The toxic look-alike',
      body: [
        {
          type: 'paragraph',
          text: "Illicium anisatum contains anisatin and related neurotoxins and its dried fruit resembles star anise closely enough that visual sorting alone is not sufficient. Documented poisonings have followed contamination of star anise supplies, and importing authorities in several jurisdictions apply analytical testing. Species authentication is a standing feature of this crop's trade.",
        },

        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'shikimic',
      heading: 'Shikimic acid',
      body: [
        {
          type: 'paragraph',
          text: 'Star anise is a commercial source of shikimic acid, a precursor used in pharmaceutical synthesis, and demand from that use has at times competed with the culinary market for the same harvest. It is unusual for a spice crop to have a second industrial buyer of this scale.',
        },

        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'slow',
      heading: 'A slow tree',
      body: [
        {
          type: 'paragraph',
          text: 'Seedling trees take several years to first fruit and considerably longer to reach full production, and they then bear for decades. That timescale, combined with the concentration of production in two adjacent regions, is why supply responds slowly to price and why shortages persist for years rather than seasons.',
        },
      ],
    },
    {
      id: 'concentration',
      heading: 'Two regions supply the world',
      body: [
        {
          type: 'paragraph',
          text: 'Guangxi in southern China and adjacent northern Vietnam produce the overwhelming majority of world output. A weather event or policy change in that area moves world availability, and there is no substitute producing region that can respond within a season.',
        },
      ],
    },
    {
      id: 'drying',
      heading: 'Drying determines grade',
      body: [
        {
          type: 'paragraph',
          text: 'Fruit is sun-dried after picking, and the drying determines colour, aroma retention and whether the follicles stay closed. Poorly dried material develops mould and is downgraded or rejected, so drying capacity during a wet harvest is a real constraint.',
        },
      ],
    },
    {
      id: 'not-anise',
      heading: 'Not related to anise',
      body: [
        {
          type: 'paragraph',
          text: 'Aniseed comes from Pimpinella anisum, an unrelated annual in the carrot family, and the two share an aroma because both contain anethole rather than because they are related. Fennel is a third unrelated source of the same compound. Matching a record for "anise" requires resolving which plant is meant.',
        },
      ],
    },
    {
      id: 'propagation',
      heading: 'Propagation and selection',
      body: [
        {
          type: 'paragraph',
          text: 'Trees are raised from seed and increasingly from grafted material to shorten the wait to bearing and to fix fruit characteristics. Because Illicium species hybridise and the toxic relative exists, provenance of planting material matters for reasons beyond yield.',
        },
      ],
    },
    {
      id: 'processing',
      heading: 'Whole fruit and oil',
      body: [
        {
          type: 'paragraph',
          text: 'The crop is traded as whole dried fruit and as a distilled essential oil, and the two have different quality criteria: whole fruit is graded on appearance and intactness, oil on anethole content. A grower supplying a distiller is not producing to the same specification as one supplying the spice trade.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'cercospora-leaf-spot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'scale-insects' },
    { type: 'pest', slug: 'mealybugs' },
    { type: 'pest', slug: 'spider-mites' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'ferralsol' },
    { type: 'soil', slug: 'laterite-soil' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'solar-radiation' },
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'post-harvest', slug: 'sun-drying' },
    { type: 'post-harvest', slug: 'shade-drying' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'cinnamon' },
    { type: 'crop', slug: 'clove' },
    { type: 'crop', slug: 'nutmeg' },
  ],
  glossaryTerms: ['perennial-crop'],
  geographicScope:
    'Guangxi province in southern China and northern Vietnam account for almost all production.',
  climateContext:
    'Humid subtropical to tropical evergreen tree; requires high humidity and reliable rainfall.',
  limitations: [
    'Testing requirements for Illicium anisatum contamination are set by importing jurisdictions and are not reproduced here.',
    'No guidance on consumption, dosage or medicinal preparation is given.',
    'Time to bearing varies with propagation method and site and is given as a general range.',
  ],
  sourceReferences: [
    { sourceId: 'cn-mara', citedFor: 'Chinese spice production context' },
    { sourceId: 'cabi', citedFor: 'Illicium verum compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'efsa',
      citedFor: 'Illicium anisatum contamination assessment',
    },
    { sourceId: 'fao', citedFor: 'Spice production and trade context' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Star Anise',
    description:
      'Illicium verum as a crop: unripe fruit harvest, the toxic Japanese star anise look-alike, shikimic acid demand and production concentrated in two regions.',
    keywords: [
      'star anise',
      'Illicium verum',
      'badian',
      'shikimic acid',
      'spice adulteration',
    ],
  },
  structuredData: { article: true },
};
