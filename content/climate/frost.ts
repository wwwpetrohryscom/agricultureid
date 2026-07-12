import type { ClimateContent } from '@/types/content';

export const frost: ClimateContent = {
  id: 'climate-frost',
  slug: 'frost',
  contentType: 'climate',
  title: 'Frost',
  category: 'Climate factor',
  subcategory: 'Temperature extreme',
  climateClass: 'temperature',
  summary:
    'Frost occurs when air or plant-surface temperatures fall to or below the freezing point of water, forming ice that can damage sensitive crop tissue; its timing relative to a crop’s growth stage often matters as much as its severity.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Frost forms when temperatures at or near the plant surface drop to 0°C (32°F) or below, allowing ice to form on or within plant tissue. Two broad types are commonly distinguished: radiative frost, which develops on calm, clear nights as surfaces lose heat rapidly to the sky, and advective frost, which occurs when a mass of cold air moves into an area regardless of cloud cover or wind. These forms behave differently and call for different protective responses.',
    },
    {
      type: 'paragraph',
      text: 'The agricultural significance of frost depends heavily on timing relative to a crop’s phenology. A frost after bud break or flowering in spring, or before harvest is complete in autumn, can damage or destroy tender tissue even in a species that tolerates cold well once dormant, while the same temperature reached during full dormancy may cause little or no harm.',
    },
  ],
  keyFacts: [
    {
      label: 'Physical definition',
      value:
        'Ice formation at or below 0°C (32°F) at or near the plant surface',
    },
    {
      label: 'Main types',
      value:
        'Radiative frost (clear, calm nights) and advective frost (cold air-mass intrusion)',
    },
    {
      label: 'Key sensitivity factor',
      value:
        'Timing relative to crop phenology (e.g. bud break, flowering) rather than temperature alone',
    },
    {
      label: 'Commonly affected crops',
      value:
        'Many perennial fruit crops and frost-tender annual or tropical crops',
    },
    {
      label: 'Protection approaches',
      value:
        'Site selection, timing, and active methods such as wind machines or sprinkler protection',
    },
    {
      label: 'Monitoring',
      value:
        'National meteorological services issue frost warnings and track first/last frost dates',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What frost is',
      body: [
        {
          type: 'list',
          items: [
            'Radiative frost — heat loss from plant and soil surfaces on clear, calm nights, often the more localised and manageable type.',
            'Advective frost — arrival of a cold air mass, which can affect large areas regardless of wind or cloud and is harder to counter with local protection methods.',
          ],
        },
      ],
    },
    {
      id: 'why-it-matters-for-crops',
      heading: 'Why it matters for crops',
      body: [
        {
          type: 'paragraph',
          text: 'Ice formation within plant cells can rupture cell membranes, while ice forming between cells can draw water out of tissue, both causing damage that ranges from minor leaf browning to the loss of buds, flowers, or entire plants. Because reproductive tissues such as flowers and young fruit are often more cold-sensitive than dormant wood, a frost event during or after flowering can be far more damaging than a colder event earlier in dormancy.',
        },
      ],
    },
    {
      id: 'effects',
      heading: 'Effects',
      body: [
        {
          type: 'paragraph',
          text: 'Frost damage can reduce yield directly, by destroying flowers or developing fruit, or indirectly, by damaging leaves needed for photosynthesis. Perennial fruit crops such as grapevines and top fruit are particularly exposed to spring frost risk after bud break, while many warm-season annual crops and tropical or subtropical species can be damaged or killed by even light frost. The economic impact of a single frost event can be substantial in regions where a crop’s flowering period regularly coincides with the local frost risk window.',
        },
      ],
    },
    {
      id: 'managing-or-adapting',
      heading: 'Managing and adapting',
      body: [
        {
          type: 'list',
          items: [
            'Site selection that avoids low-lying "frost pockets" where cold air pools',
            'Timing of planting, pruning, or flowering (through cultivar choice) to reduce overlap with typical frost dates',
            'Active protection methods such as wind machines, orchard heaters, or sprinkler-based ice protection that uses the latent heat released as water freezes',
            'Protected cultivation, such as greenhouses or row covers, for high-value or particularly sensitive crops',
          ],
        },
      ],
    },
    {
      id: 'monitoring-and-forecasting',
      heading: 'Monitoring and forecasting',
      body: [
        {
          type: 'paragraph',
          text: 'National meteorological services issue frost warnings and track long-term first- and last-frost date statistics, which growers use alongside local microclimate knowledge to plan planting dates, protection measures, and cultivar selection. Because frost risk is highly local, on-farm or near-farm temperature monitoring often supplements regional forecasts.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'growing-season' },
    { type: 'climate', slug: 'heat-stress' },
  ],
  connections: [
    { type: 'farming-system', slug: 'greenhouse-farming' },
    { type: 'irrigation-method', slug: 'sprinkler-irrigation' },
    { type: 'crop', slug: 'grape' },
    { type: 'crop', slug: 'orange' },
    { type: 'crop', slug: 'strawberry' },
    { type: 'crop', slug: 'banana' },
  ],
  glossaryTerms: ['annual-crop'],
  geographicScope:
    'Global overview; frost risk, timing, and typical first/last frost dates vary greatly by latitude, altitude, and local topography.',
  limitations: [
    'This is a general overview of frost as a climate factor, not a regional frost forecast or crop-specific protection plan.',
    'No universal "safe" temperature thresholds are given beyond the physical freezing point, since crop and growth-stage sensitivity vary.',
  ],
  sourceReferences: [
    {
      sourceId: 'wmo',
      citedFor: 'Frost classification and meteorological standards',
    },
    { sourceId: 'noaa', citedFor: 'Frost and freeze monitoring data' },
    { sourceId: 'fao', citedFor: 'Frost impacts on crop production' },
    {
      sourceId: 'usda-nass',
      citedFor: 'Frost date records and crop condition context',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Frost',
    description:
      'A reference on frost: radiative and advective types, crop damage mechanisms, effects by growth stage, and frost protection and forecasting methods.',
    keywords: ['frost', 'crop frost damage', 'frost protection', 'freeze risk'],
  },
  structuredData: { article: true },
};
