import type { CropContent } from '@/types/content';

export const anise: CropContent = {
  id: 'crop-anise',
  slug: 'anise',
  contentType: 'crop',
  title: 'Anise',
  scientificName: 'Pimpinella anisum',
  alternativeNames: ['Aniseed', 'Anis', 'Sweet cumin'],
  category: 'Spice',
  subcategory: 'Annual umbellifer grown for seed',
  botanicalFamily: 'Apiaceae (carrot family)',
  lifecycle: 'Annual',
  summary:
    'Anise is an annual umbellifer grown for aromatic seed, ripening unevenly across a branched inflorescence so that harvest timing trades shattering losses against immature seed.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Anise is grown for the small ribbed fruit sold as aniseed, whose flavour comes mainly from anethole. It is a true umbellifer of the carrot family and is not related to star anise, a tree fruit of the Schisandraceae that this corpus publishes separately and that carries the same principal aroma compound by an entirely different route.',
    },
    {
      type: 'paragraph',
      text: 'The crop is slow to establish and intolerant of transplanting, which forces direct sowing into a well-prepared seedbed and leaves it vulnerable to weed competition through a long early period. Its distinctive agronomic problem comes later: the umbels do not ripen together.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Apiaceae (carrot family)' },
    { label: 'Life cycle', value: 'Annual' },
    { label: 'Scientific name', value: 'Pimpinella anisum' },
    { label: 'Harvested part', value: 'Dry fruit, sold as seed' },
    {
      label: 'Principal aroma compound',
      value: 'Anethole, shared with star anise and fennel',
    },
    { label: 'Establishment', value: 'Direct-sown; does not transplant' },
    {
      label: 'Climate',
      value: 'Warm temperate to subtropical with a dry ripening period',
    },
  ],
  sections: [
    {
      id: 'uneven-ripening',
      heading: 'Umbels that ripen in sequence',
      body: [
        {
          type: 'paragraph',
          text: 'Anise carries a primary umbel and successive secondary and tertiary umbels that flower and ripen days or weeks apart. There is no moment at which the whole crop is ripe. Cutting early leaves immature seed of poor aroma on the later umbels; cutting late shatters the primary umbels onto the ground. The usual compromise is to cut when the primary umbels are ripe and the secondaries are turning, and to windrow and cure the crop so the later seed finishes off the plant.',
        },
      ],
    },
    {
      id: 'not-star-anise',
      heading: 'Not star anise',
      body: [
        {
          type: 'paragraph',
          text: 'Anise and star anise share anethole as their dominant aroma compound and are used interchangeably in some products, but they are unrelated plants with nothing in common agriculturally: one is a direct-sown annual harvested in its first summer, the other an evergreen tree that takes years to bear. Substitution in a flavour formulation says nothing about substitution in a rotation.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'A slow start',
      body: [
        {
          type: 'paragraph',
          text: "Germination is slow and irregular and seedling growth is weak, so the crop is easily lost to weeds, crusting or drought in its first month. Fine, firm seedbeds and shallow sowing matter more for this crop than for most spices, and the window for mechanical weeding is narrow because the crop's own foliage is easily damaged.",
        },
      ],
    },
    {
      id: 'drying',
      heading: 'Curing and quality',
      body: [
        {
          type: 'paragraph',
          text: 'Seed quality is a matter of aroma retention, and aroma is lost by heat and by delay. The crop is cut, cured and threshed with the aim of drying it quickly without cooking it, and the difference between a good and a poor sample is often made after the field rather than in it.',
        },
      ],
    },
    {
      id: 'nutrition',
      heading: 'Nutrition and soil',
      body: [
        {
          type: 'paragraph',
          text: 'A short-season seed crop with a modest total nutrient demand, concentrated in the period between stem extension and seed fill. Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'pests',
      heading: 'Pests and disease',
      body: [
        {
          type: 'paragraph',
          text: 'Umbellifer aphids, leaf-spotting fungi in wet weather at flowering, and damping-off in cold seedbeds are the main problems. Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'soils',
      heading: 'Soils',
      body: [
        {
          type: 'paragraph',
          text: 'Light to medium, well-drained soils suit the crop; heavy or crusting soils compromise establishment, which is where the crop is most fragile. Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'rotation',
      heading: 'Rotation with the other umbellifers',
      body: [
        {
          type: 'paragraph',
          text: 'Anise shares soil-borne pathogens and several pests with coriander, cumin, fennel and caraway, and following one umbellifer with another concentrates them. Where several are grown on one holding the rotation interval between them is the decision that governs disease pressure, not the treatment of any single crop.',
        },
      ],
    },
    {
      id: 'germination',
      heading: 'Slow, uneven germination',
      body: [
        {
          type: 'paragraph',
          text: 'The seed germinates slowly and unevenly, and emergence can be spread over two weeks. The practical consequence is that a mechanical weeding pass that suits the earliest seedlings damages the latest, so growers weed later and accept more competition, or hand-weed the first pass.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'damping-off' },
    { type: 'plant-disease', slug: 'cercospora-leaf-spot' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'leaf-miners' },
    { type: 'pest', slug: 'cutworms' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'chalky-soil' },
  ],
  connections: [
    { type: 'crop', slug: 'fennel' },
    { type: 'crop', slug: 'coriander' },
    { type: 'crop', slug: 'cumin' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'fennel' },
    { type: 'crop', slug: 'coriander' },
    { type: 'crop', slug: 'cumin' },
    { type: 'crop', slug: 'star-anise' },
    { type: 'crop', slug: 'caraway' },
  ],
  glossaryTerms: ['annual-crop', 'cultivar', 'crop-rotation'],
  geographicScope:
    'Grown around the Mediterranean, in the Middle East, in South Asia and in Latin America. The FAO Crop Calendar records sowing and harvest windows in nine countries across two labels, Anis and Anise.',
  climateContext:
    'Warm temperate to subtropical, needing a dry period at ripening. Rain on a ripening crop both shatters seed and costs aroma, which bounds where the crop can be grown reliably.',
  limitations: [
    'Production statistics frequently group anise with badian and fennel in a single trade category, so figures attributed to anise alone should be read with care.',
    'The corpus holds no cultivar records for anise.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Crop calendar coverage across nine countries',
    },
    {
      sourceId: 'fao-crop-calendar',
      citedFor: 'Sowing and harvest windows under the Anis and Anise labels',
    },
    { sourceId: 'cabi', citedFor: 'Pimpinella anisum compendium data' },
    { sourceId: 'usda-grin', citedFor: 'Nomenclature and germplasm records' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-09-03',
  updatedAt: '2026-09-03',
  editorialStatus: 'published',
  seo: {
    title: 'Anise',
    description:
      'Anise (Pimpinella anisum): an annual umbellifer grown for aniseed, whose umbels ripen in sequence so harvest trades shattering against immaturity.',
    keywords: [
      'anise',
      'aniseed',
      'Pimpinella anisum',
      'spice crop',
      'umbellifer',
    ],
  },
  structuredData: { article: true },
};
