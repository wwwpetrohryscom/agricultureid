import type { MachineryContent } from '@/types/content';

export const manureSpreader: MachineryContent = {
  id: 'machinery-manure-spreader',
  slug: 'manure-spreader',
  contentType: 'machinery',
  title: 'Manure Spreader',
  alternativeNames: ['Muck spreader', 'Solid manure spreader'],
  category: 'Agricultural machinery',
  subcategory: 'Nutrient application equipment',
  machineryClass: 'power',
  summary:
    'A manure spreader is a trailed or mounted machine that meters and broadcasts solid or semi-solid manure across a field, recycling nutrients and organic matter back into the soil.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A manure spreader carries farmyard manure, poultry litter, compost, or similar solid organic material in a hopper and uses moving floors, augers, or beaters to break it up and fling it evenly across the field behind the machine. It is the main implement for returning bulky organic residues from livestock enterprises to cropland.',
    },
    {
      type: 'paragraph',
      text: 'Spreading manure recycles nitrogen, phosphorus, potassium, and micronutrients contained in the material, and adds organic matter that supports soil structure and biological activity. Even distribution and an appropriate application rate are central to using those nutrients efficiently and to limiting losses to water and air.',
    },
  ],
  keyFacts: [
    {
      label: 'Primary function',
      value: 'Metering and broadcasting solid or semi-solid manure',
    },
    {
      label: 'Materials handled',
      value:
        'Farmyard manure, poultry litter, compost, and similar solid organic material',
    },
    {
      label: 'Spreading mechanism',
      value:
        'Moving floor or augers feed material to rotating beaters or spinning discs',
    },
    {
      label: 'Agronomic value',
      value: 'Returns nutrients and organic matter to the soil',
    },
    {
      label: 'Key requirement',
      value:
        'Even distribution and calibrated rate to use nutrients efficiently',
    },
    {
      label: 'Related equipment',
      value: 'Distinct from slurry tankers, which handle liquid manure',
    },
  ],
  sections: [
    {
      id: 'what-a-manure-spreader-is',
      heading: 'What a manure spreader is',
      body: [
        {
          type: 'paragraph',
          text: 'A manure spreader is a machine for distributing bulky solid organic materials onto land as a soil amendment and nutrient source. Rear-discharge designs use horizontal or vertical beaters to shred and throw material behind the machine, while side-discharge and disc-type spreaders fling material to one side or in a broad fan.',
        },
        {
          type: 'paragraph',
          text: 'It is distinct from liquid slurry-handling equipment such as tankers and injectors: the manure spreader is built for material with enough structure to be handled by a moving floor and beaters rather than pumped.',
        },
      ],
    },
    {
      id: 'how-it-works',
      heading: 'How it works',
      body: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Solid manure or compost is loaded into the hopper or bed',
            'A moving floor, chain-and-slat conveyor, or auger feeds material toward the discharge',
            'Rotating beaters or spinning discs shred the material and fling it across the field',
            'Forward speed and feed rate together set the application rate per unit area',
            'The spread material is often incorporated afterwards to reduce nutrient loss and odour',
          ],
        },
      ],
    },
    {
      id: 'role-in-nutrient-management',
      heading: 'Role in nutrient management',
      body: [
        {
          type: 'paragraph',
          text: 'Manure spreading closes part of the nutrient loop on farms that keep livestock, returning nutrients taken up in feed and forage back to cropland while building soil organic matter. Because manure nutrient content varies with animal type, bedding, and storage, accurate use generally relies on manure analysis and calibration rather than assumed values.',
        },
        {
          type: 'callout',
          tone: 'caution',
          text: 'Applying manure in excess of crop demand, or at the wrong time, can lead to nutrient losses to water and air. Timing, rate, and even distribution are managed to reduce these risks.',
        },
      ],
    },
    {
      id: 'operating-considerations',
      heading: 'Operating considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Achieving an even spread pattern and a known rate requires matching beater or disc speed, floor feed rate, and forward speed to the material, and periodic calibration by weighing or measuring output. Field traffic with a loaded spreader is heavy, so working conditions are chosen to limit soil compaction.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Manure nutrient content and appropriate application rates are highly variable and locally regulated; this entry does not give rate figures.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'machinery', slug: 'fertilizer-spreader' },
    { type: 'machinery', slug: 'tractor' },
  ],
  connections: [
    { type: 'machinery', slug: 'tractor' },
    { type: 'machinery', slug: 'fertilizer-spreader' },
    { type: 'fertilizer', slug: 'farmyard-manure' },
    { type: 'fertilizer', slug: 'poultry-manure' },
    { type: 'fertilizer', slug: 'compost' },
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
    { type: 'soil-topic', slug: 'soil-fertility' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
    { type: 'farming-system', slug: 'organic-farming' },
  ],
  glossaryTerms: ['macronutrient'],
  geographicScope:
    'General overview of solid manure spreaders as used in mixed and livestock-integrated farming worldwide. Application rates and timing are governed by local nutrient-management rules.',
  limitations: [
    'This entry describes manure-spreader function in general terms; it does not give application rates or nutrient contents, which vary with material and are locally regulated.',
    'Nutrient recovery and loss depend on manure type, timing, weather, and incorporation, and are not quantified here.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Manure and nutrient-management practice',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Organic manure application and calibration guidance',
    },
    { sourceId: 'fao', citedFor: 'Recycling of livestock manure to cropland' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Manure Spreader',
    description:
      'Manure spreaders explained: how beaters and moving floors broadcast solid manure to recycle nutrients and organic matter into cropland soil.',
    keywords: [
      'manure spreader',
      'muck spreader',
      'nutrient recycling',
      'farmyard manure',
    ],
  },
  structuredData: { article: true },
};
