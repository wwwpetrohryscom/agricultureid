import type { CultivarContent } from '@/types/content';

export const tempranillo: CultivarContent = {
  id: 'tempranillo',
  slug: 'tempranillo',
  contentType: 'cultivar',
  title: 'Tempranillo',
  scientificName: 'Vitis vinifera',
  alternativeNames: [
    'Tinta Roriz',
    'Aragonez',
    'Cencibel',
    'Tinto Fino',
    'Ull de Llebre',
  ],
  category: 'Grape cultivar',
  subcategory: 'Red wine grape',
  summary:
    'Tempranillo is a red wine grape native to Spain and the principal variety of Rioja and Ribera del Duero. Its name reflects its relatively early ripening, and it is grown across Spain and Portugal under many regional synonyms.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Tempranillo is a black-skinned wine grape (Vitis vinifera) and the leading red variety of Spain, forming the backbone of the wines of Rioja and Ribera del Duero. Its name derives from the Spanish word for early, a reference to its comparatively early ripening.',
    },
    {
      type: 'paragraph',
      text: 'An ancient clonal cultivar propagated from cuttings, Tempranillo is grown widely across the Iberian Peninsula and appears under a range of regional names, including Tinta Roriz and Aragonez in Portugal, where it is an important grape of the Douro and Alentejo. It is typically grown in continental climates and is often matured in oak.',
    },
  ],
  parentCrop: { type: 'crop', slug: 'grape' },
  acceptedName: 'Tempranillo',
  botanicalTaxon: 'Vitis vinifera',
  cultivarType: 'Cultivar (clonal)',
  breedingType: 'Traditional selection',
  originCountry: 'Spain',
  originRegion: 'Northern and central Spain (including Rioja)',
  registrationStatus: 'historical',
  registryReferences: [
    {
      registry: 'Vitis International Variety Catalogue (VIVC)',
      jurisdiction: 'Global',
      asOf: '2026-07-12',
      note: 'Catalogued as a Vitis vinifera wine-grape variety with numerous Iberian synonyms.',
    },
    {
      registry: 'USDA GRIN-Global / National Plant Germplasm System',
      sourceId: 'usda-grin',
      jurisdiction: 'United States / Global',
      asOf: '2026-07-12',
      note: 'Germplasm accessions maintained in the US National Plant Germplasm System.',
    },
  ],
  intendedUse: ['Red wine (varietal and blended)'],
  climateAdaptation:
    'Grown mainly in continental climates; its early ripening allows it to be planted at altitude and in cooler continental sites where later varieties would struggle.',
  qualityTraits: [
    'Moderate acidity and a relatively neutral base that responds well to oak ageing',
    'Aromas often described as red fruit, with savoury leather and tobacco notes developing with age',
    'Thick-skinned berries contributing colour to the wines',
    'Frequently oak-matured, a tradition strongly associated with Rioja',
  ],
  keyFacts: [
    { label: 'Parent crop', value: 'Grape (Vitis vinifera)' },
    { label: 'Type', value: 'Red wine grape (clonal cultivar)' },
    { label: 'Origin', value: 'Spain (including Rioja)' },
    {
      label: 'Name meaning',
      value: 'From Spanish "temprano" (early), for its early ripening',
    },
    {
      label: 'Synonyms',
      value: 'Tinta Roriz and Aragonez (Portugal); Cencibel; Tinto Fino',
    },
    { label: 'Registry status', value: 'Historical / heritage variety' },
  ],
  sections: [
    {
      id: 'origin-and-synonyms',
      heading: 'Origin and synonyms',
      body: [
        {
          type: 'paragraph',
          text: 'Tempranillo is native to the Iberian Peninsula and is deeply associated with the classic Spanish wine regions of Rioja and Ribera del Duero, the latter often using the local name Tinto Fino or Tinta del Pais.',
        },
        {
          type: 'paragraph',
          text: 'The variety is known by many regional synonyms. In Portugal it is important in the Douro, where it is called Tinta Roriz, and in the Alentejo, where it is known as Aragonez. These are the same variety grown under different traditional names.',
        },
      ],
    },
    {
      id: 'growing-characteristics',
      heading: 'Growing characteristics',
      body: [
        {
          type: 'paragraph',
          text: 'Tempranillo ripens relatively early, which suits continental climates with shorter or cooler seasons and allows planting at higher altitude. It is generally grown on calcareous clay and other well-structured soils in its Spanish heartland.',
        },
        {
          type: 'list',
          items: [
            'Early ripening, suiting continental and higher-altitude sites',
            'Thick-skinned berries contributing colour',
            'Grown on calcareous clay soils in Rioja and limestone soils in Ribera del Duero',
            'Cultivated across Spain and Portugal under many synonyms',
          ],
        },
      ],
    },
    {
      id: 'wine-style-and-use',
      heading: 'Wine style and use',
      body: [
        {
          type: 'paragraph',
          text: 'Tempranillo is made into dry red wine, both as a varietal and in blends (for example with Garnacha in Rioja). It is strongly associated with oak ageing, and traditional Rioja classifications reflect increasing periods of barrel and bottle maturation.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Tempranillo’s character varies with region, altitude, and the extent of oak ageing; descriptions here are qualitative generalisations rather than a guide to any particular wine.',
        },
      ],
    },
  ],
  connections: [
    { type: 'soil', slug: 'clay-soil' },
    { type: 'climate', slug: 'growing-degree-days' },
  ],
  glossaryTerms: ['cultivar', 'perennial-crop'],
  geographicScope:
    'Originating in Spain and grown across the Iberian Peninsula (Spain and Portugal) and in other continental wine regions, under many regional synonyms.',
  climateContext:
    'Early-ripening variety grown mainly in continental climates, including higher-altitude sites.',
  limitations: [
    'Wine style depends heavily on region, altitude, and the extent of oak ageing; the variety description is not a description of any individual wine.',
    'The variety’s many synonyms can cause confusion; Tinta Roriz, Aragonez, Cencibel and Tinto Fino refer to the same variety.',
    'Registry record identifiers and deep links are omitted where they could not be independently verified.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-grin',
      citedFor: 'Cultivar/germplasm records and taxonomy for Vitis vinifera',
    },
    { sourceId: 'gbif', citedFor: 'Taxonomic placement of Vitis vinifera' },
    {
      sourceId: 'britannica',
      citedFor:
        'Historical background and varietal characterisation (secondary reference)',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Tempranillo (grape cultivar)',
    description:
      'Tempranillo: Spain’s leading red wine grape and the backbone of Rioja, known as Tinta Roriz and Aragonez in Portugal — origin, synonyms, and wine style.',
    keywords: [
      'Tempranillo',
      'grape cultivar',
      'Vitis vinifera',
      'Rioja red wine grape',
    ],
  },
  structuredData: { article: true },
};
