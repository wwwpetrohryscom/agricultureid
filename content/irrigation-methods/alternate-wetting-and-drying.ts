import type { IrrigationMethodContent } from '@/types/content';

export const alternateWettingAndDrying: IrrigationMethodContent = {
  id: 'irrigation-method-alternate-wetting-and-drying',
  slug: 'alternate-wetting-and-drying',
  contentType: 'irrigation-method',
  title: 'Alternate Wetting and Drying',
  alternativeNames: ['AWD', 'Controlled intermittent flooding'],
  category: 'Irrigation method',
  subcategory: 'Water-management practice',
  methodClass: 'management',
  summary:
    'Alternate wetting and drying (AWD) is a water-saving management practice for irrigated lowland rice in which fields are allowed to dry to a safe threshold before being re-flooded, reducing water use and methane emissions when managed within safe limits.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Alternate wetting and drying (AWD) is a practice for irrigated lowland rice that replaces continuous flooding with cycles of flooding and controlled drying. Instead of keeping the paddy ponded throughout the season, the field is allowed to drain and dry until the water level falls to a defined threshold below the soil surface, at which point it is re-flooded.',
    },
    {
      type: 'paragraph',
      text: 'The water level in the soil is commonly monitored with a simple perforated observation tube (a "field water tube") installed in the paddy, which lets a manager see how far the water has dropped and decide when to irrigate again. Applied within safe thresholds, AWD is documented to reduce irrigation water use and lower methane emissions from paddies without necessarily reducing yield.',
    },
  ],
  keyFacts: [
    {
      label: 'Method class',
      value: 'Water-management practice (for irrigated rice)',
    },
    {
      label: 'Core idea',
      value:
        'Cycle between flooded and drained conditions instead of continuous ponding',
    },
    {
      label: 'Monitoring tool',
      value:
        'A perforated field water tube used to observe the water level below the surface',
    },
    {
      label: 'Primary aims',
      value:
        'Reduce irrigation water use and lower methane emissions from paddies',
    },
    {
      label: 'Key safeguard',
      value:
        'Re-flood before the water drops below a safe threshold to avoid yield loss',
    },
    {
      label: 'Crop',
      value: 'Applied to irrigated lowland rice systems',
    },
  ],
  sections: [
    {
      id: 'how-it-works',
      heading: 'How it works',
      body: [
        {
          type: 'list',
          ordered: true,
          items: [
            'A perforated field water tube is installed so the water level below the soil surface can be observed',
            'The paddy is flooded as usual, then irrigation is withheld and the field allowed to dry',
            'The water level in the tube falls as water is used and drains away',
            'When the level drops to a defined safe threshold, the field is re-flooded',
            'The wet–dry cycle is repeated through the season, with continuous flooding kept around sensitive stages such as flowering',
          ],
        },
      ],
    },
    {
      id: 'why-it-saves-water-and-cuts-emissions',
      heading: 'Why it saves water and cuts emissions',
      body: [
        {
          type: 'paragraph',
          text: 'Continuous flooding keeps paddy soils saturated and largely without oxygen, which favours the microbes that produce methane and means water is continually lost to seepage, percolation, and evaporation. By letting the soil dry and aerate periodically, AWD reduces the volume of irrigation water applied and interrupts the conditions that generate methane, which is why it is promoted as a climate-smart rice practice.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'The drying phase reintroduces oxygen to the soil; this shift between flooded and aerated conditions is central to both the water savings and the reduction in methane emissions.',
        },
      ],
    },
    {
      id: 'managing-it-safely',
      heading: 'Managing it safely',
      body: [
        {
          type: 'paragraph',
          text: 'AWD is described as "safe" when the field is re-flooded before the water level falls far enough to stress the crop, and when continuous flooding is maintained during the most sensitive growth stages. Local soil, drainage, water control, and salinity conditions all determine whether AWD is appropriate and how the thresholds should be set.',
        },
        {
          type: 'callout',
          tone: 'caution',
          text: 'AWD is not suitable everywhere: it needs adequate water control, and on some soils or under saline or drought-prone conditions, drying can harm the crop or mobilise salts. It should be introduced with local guidance.',
        },
      ],
    },
    {
      id: 'considerations',
      heading: 'Considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Adopting AWD requires reliable control over when water enters and leaves the field, a way to monitor the water level, and management attention to timing. Where those conditions are met, it is one of the more widely researched water-saving practices for irrigated rice; where they are not, continuous flooding may remain more practical.',
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'This entry does not give specific safe-threshold depths or water-saving figures. Thresholds and outcomes depend on soil, variety, water control, and region and should follow local recommendations.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'irrigation-method', slug: 'irrigation-scheduling' },
    { type: 'irrigation-method', slug: 'deficit-irrigation' },
    { type: 'irrigation-method', slug: 'basin-irrigation' },
  ],
  connections: [
    { type: 'crop', slug: 'rice' },
    { type: 'irrigation-method', slug: 'basin-irrigation' },
    { type: 'irrigation-method', slug: 'irrigation-scheduling' },
    { type: 'irrigation-method', slug: 'soil-moisture-sensing' },
    { type: 'soil-topic', slug: 'soil-aeration' },
    { type: 'soil-topic', slug: 'waterlogging' },
    { type: 'farming-system', slug: 'rice-fish-farming' },
  ],
  glossaryTerms: ['yield'],
  geographicScope:
    'General overview of alternate wetting and drying in irrigated lowland rice worldwide. Suitability and thresholds depend strongly on local soils, water control, and climate.',
  climateContext:
    'AWD is promoted as a climate-smart practice because periodic drying reduces methane emissions from flooded paddies; its water savings are most valuable where irrigation water is scarce.',
  limitations: [
    'This entry describes AWD in general terms; it does not give safe-threshold depths or water-saving percentages, which are soil-, variety-, and region-specific.',
    'AWD requires reliable water control and is not suitable on all soils or under saline or drought-prone conditions.',
  ],
  sourceReferences: [
    {
      sourceId: 'irri',
      citedFor:
        'Alternate wetting and drying method and safe-threshold management',
    },
    {
      sourceId: 'fao',
      citedFor: 'Water-saving and climate-smart rice practices',
    },
    {
      sourceId: 'cgiar',
      citedFor: 'Research on AWD water use and greenhouse-gas emissions',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Alternate Wetting and Drying (AWD)',
    description:
      'Alternate wetting and drying explained: how controlled wet–dry cycles in rice paddies save water and cut methane while protecting yield.',
    keywords: [
      'alternate wetting and drying',
      'AWD',
      'rice irrigation',
      'water saving',
    ],
  },
  structuredData: { article: true },
};
