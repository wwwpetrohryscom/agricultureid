import type { CropContent } from '@/types/content';

export const oca: CropContent = {
  id: 'crop-oca',
  slug: 'oca',
  contentType: 'crop',
  title: 'Oca',
  scientificName: 'Oxalis tuberosa',
  alternativeNames: ['New Zealand yam', 'Uqa'],
  category: 'Root and tuber crop',
  subcategory: 'Andean tuber crop',
  botanicalFamily: 'Oxalidaceae (wood sorrel family)',
  lifecycle: 'Perennial grown as an annual',
  summary:
    'Oca forms tubers only when the day is shorter than about twelve hours, so outside the tropics it grows all summer and only begins to bulk in autumn — leaving the crop racing an approaching frost.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Oca is a high-Andean tuber crop grown above the altitude where potato performs well, and it is the second most important Andean tuber after potato in its home range. It is a wood sorrel, unrelated to any other tuber crop.',
    },
    {
      type: 'paragraph',
      text: 'Its cultivation outside the Andes is governed by one trait. Most types tuberise only under days of about twelve hours or less, so at temperate latitudes the plant grows vegetatively through summer and starts filling tubers only in autumn, with a frost arriving before the crop is finished.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Oxalidaceae (wood sorrel family)' },
    {
      label: 'Tuberisation trigger',
      value: 'Short days, generally about twelve hours or less',
    },
    {
      label: 'Consequence outside the tropics',
      value: 'Bulking begins in autumn and competes with frost',
    },
    {
      label: 'Altitude',
      value: 'Grown to around 4,000 metres, above where potato yields well',
    },
    {
      label: 'Breeding system',
      value:
        'Tristylous, with three flower forms that limit compatible crosses',
    },
    {
      label: 'Two types',
      value:
        'Sweet types eaten after sun exposure and bitter types processed traditionally',
    },
  ],
  sections: [
    {
      id: 'photoperiod',
      heading: 'Tuberisation is short-day',
      body: [
        {
          type: 'paragraph',
          text: 'Tuber formation in oca follows the same kind of photoperiodic control as potato, with flowering-time proteins acting as a mobile signal from the leaf. Most accessions require days of twelve hours or less, and only a few tuberise at twelve and a half or thirteen. Near the equator days are always short enough; away from it, they are not until late in the season.',
        },

        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'frost-race',
      heading: 'Racing the frost',
      body: [
        {
          type: 'paragraph',
          text: "Because bulking starts late at temperate latitudes, the crop's yield is set by how many frost-free weeks remain after tuberisation begins. Growers in New Zealand and the United Kingdom manage this by protecting the top growth as long as possible rather than by anything done earlier in the season.",
        },
      ],
    },
    {
      id: 'altitude',
      heading: 'Higher than potato',
      body: [
        {
          type: 'paragraph',
          text: 'Oca is grown to around 4,000 metres in the Andes, above the altitude where potato yields reliably, and it tolerates poorer soils. Its role in Andean systems is to occupy ground and altitude that the main staple cannot, which is a different function from being a substitute for it.',
        },

        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'tristyly',
      heading: 'Three flower forms',
      body: [
        {
          type: 'paragraph',
          text: 'Oca is tristylous: plants carry one of three arrangements of style and stamen length, and compatible pollination requires the right combination between forms. Fields planted from a narrow set of clones often contain only one or two forms and set almost no seed, which is one reason the crop is propagated vegetatively and has little conventional breeding.',
        },
      ],
    },
    {
      id: 'oxalate',
      heading: 'Oxalate and the two types',
      body: [
        {
          type: 'paragraph',
          text: 'The tubers contain oxalic acid, and cultivars divide into sweet types that are low enough to eat after a period of sun exposure that reduces acidity and raises sugars, and bitter types that are traditionally processed by freeze-drying into a storable product. Which type a grower has determines how the crop is used.',
        },
      ],
    },
    {
      id: 'vegetative',
      heading: 'Propagated from tubers',
      body: [
        {
          type: 'paragraph',
          text: "Planting material is tubers saved from the previous crop, so a grower carries virus and storage losses forward each year and the crop's diversity is a collection of clones rather than a breeding population. Andean farmers maintain large numbers of named clones distinguished by colour.",
        },
      ],
    },
    {
      id: 'storage',
      heading: 'Storage and sweetening',
      body: [
        {
          type: 'paragraph',
          text: 'Tubers store reasonably in cool, dark conditions and continue to convert acid to sugar with exposure to light and time, so storage is part of preparing the crop rather than only preserving it. That behaviour has no parallel in potato handling.',
        },
      ],
    },
    {
      id: 'not-yam',
      heading: 'Not a yam',
      body: [
        {
          type: 'paragraph',
          text: 'The New Zealand name for the crop is "yam", which it is not: true yams are Dioscorea, an entirely different family and continent. New Zealand is also the main producer outside South America, so this misleading name appears in a substantial share of the crop\'s commercial records.',
        },
      ],
    },
    {
      id: 'pests',
      heading: 'A different pest profile',
      body: [
        {
          type: 'paragraph',
          text: 'As an Oxalis, oca does not share the pests and diseases of potato, and it is grown in Andean rotations partly for that reason. It is affected by its own weevils and by virus carried in planting material, and its rotational value comes precisely from not being a solanaceous crop.',
        },

        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'anthracnose' },
  ],
  commonPests: [
    { type: 'pest', slug: 'weevils' },
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'white-grubs' },
    { type: 'pest', slug: 'cutworms' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'andosol' },
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'cambisol' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'climate', slug: 'photoperiod' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'growing-season' },
    { type: 'farming-system', slug: 'intercropping' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'machinery', slug: 'potato-harvester' },
    { type: 'post-harvest', slug: 'clamp-storage' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'sun-drying' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'potato' },
    { type: 'crop', slug: 'sweet-potato' },
    { type: 'crop', slug: 'yam' },
  ],
  glossaryTerms: ['perennial-crop', 'crop-rotation'],
  geographicScope:
    'Peru, Bolivia, Ecuador and Colombia in the high Andes; New Zealand is the principal producer outside South America.',
  climateContext:
    'Cool high-altitude tropical; short-day tuberisation and frost sensitivity of top growth are the two limiting factors.',
  limitations: [
    'Photoperiod response differs between accessions and determines whether the crop will tuberise at a given latitude.',
    'Oxalate content varies between cultivars and with post-harvest handling; no figures or dietary guidance are given here.',
    'Production statistics are incomplete because most of the crop is grown for household and local use.',
  ],
  sourceReferences: [
    { sourceId: 'cgiar', citedFor: 'Andean root and tuber germplasm research' },
    { sourceId: 'cip', citedFor: 'Andean tuber crop research' },
    { sourceId: 'cabi', citedFor: 'Oxalis tuberosa compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'nz-mpi', citedFor: 'New Zealand production context' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Oca',
    description:
      'Oxalis tuberosa as a crop: short-day tuberisation and the race against frost, cultivation above potato altitude, tristyly and oxalate in sweet and bitter types.',
    keywords: [
      'oca',
      'Oxalis tuberosa',
      'Andean tuber',
      'short-day tuberisation',
      'New Zealand yam',
    ],
  },
  structuredData: { article: true },
};
