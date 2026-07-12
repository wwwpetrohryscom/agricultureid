import type { ClimateContent } from '@/types/content';

export const growingDegreeDays: ClimateContent = {
  id: 'climate-growing-degree-days',
  slug: 'growing-degree-days',
  contentType: 'climate',
  title: 'Growing Degree Days',
  alternativeNames: ['GDD', 'Heat units', 'Thermal units'],
  category: 'Climate metric',
  subcategory: 'Thermal accumulation index',
  climateClass: 'metric',
  summary:
    'Growing degree days (GDD) is a heat-accumulation metric that sums daily temperature above a crop-specific base threshold over time, used as a proxy for crop developmental progress rather than calendar days alone. Base temperatures and calculation methods are crop- and region-specific rather than universal.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Growing degree days (GDD), also called heat units or thermal units, express how much "useful warmth" has accumulated over a period, rather than simply counting calendar days. The underlying idea is that plant development speeds up as temperature rises above some minimum (base) temperature specific to that crop, and slows again as temperature falls back toward or below it, so accumulated heat above that base is often a better predictor of developmental stage than time alone.',
    },
    {
      type: 'paragraph',
      text: 'Because the base temperature, and in many methods an upper cap, reflect how a particular crop or pest responds to temperature, GDD is calculated differently for different crops and is calibrated using local research and field observation rather than a single universal formula or base value. GDD models are widely used alongside — not instead of — direct field observation.',
    },
  ],
  keyFacts: [
    {
      label: 'Core concept',
      value:
        'Cumulative heat above a crop-specific base temperature, used as a proxy for developmental progress',
    },
    {
      label: 'General form',
      value:
        'Daily GDD is commonly derived from daily mean temperature minus a base temperature, summed over the period of interest',
    },
    {
      label: 'Base temperature',
      value:
        'Crop- and often cultivar-specific, determined through local agronomic research rather than a single global value',
    },
    {
      label: 'Common uses',
      value:
        'Predicting crop developmental stages, comparing seasons, and driving pest and disease phenology models',
    },
    {
      label: 'Data needs',
      value: 'Daily minimum and maximum (or hourly) air-temperature records',
    },
    {
      label: 'Key caveat',
      value:
        'GDD models generally do not fully capture the effect of extreme heat, moisture stress, or day length on development',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What growing degree days measure',
      body: [
        {
          type: 'paragraph',
          text: 'GDD is a running total of accumulated warmth relevant to plant development, calculated over the growing season or over a defined interval such as sowing to a target stage. Because it reflects biologically meaningful heat rather than elapsed time, two locations or seasons with the same number of calendar days can show quite different accumulated GDD, and crop development typically tracks GDD more closely than the calendar.',
        },
      ],
    },
    {
      id: 'how-it-is-calculated',
      heading: 'How it is calculated',
      body: [
        {
          type: 'list',
          items: [
            'Simple average method — using daily mean temperature minus the base temperature for that crop.',
            'Modified or capped method — limiting the maximum temperature used in the calculation to avoid overstating heat accumulation on very hot days.',
            'Sine-wave and other refined methods — modelling the temperature curve through the day for greater precision, particularly where hourly data are available.',
          ],
        },
        {
          type: 'paragraph',
          text: 'In every method, the base temperature itself is not a single global constant; it is determined per crop, and sometimes per cultivar or region, through calibration against observed development.',
        },
      ],
    },
    {
      id: 'why-it-matters-for-crops',
      heading: 'Why it matters for crops',
      body: [
        {
          type: 'paragraph',
          text: 'GDD is used to estimate planting-to-maturity timelines and compare crop progress between seasons or locations, to help select cultivars suited to the typical accumulated heat of a region, and, in pest and disease management, to predict the timing of life-cycle stages such as egg hatch or adult emergence so that scouting and control measures can be better timed.',
        },
      ],
    },
    {
      id: 'using-gdd-in-practice',
      heading: 'Using GDD in practice',
      body: [
        {
          type: 'paragraph',
          text: 'Growers and advisers commonly track accumulated GDD through a season and compare it with typical requirements for a given cultivar or pest stage to inform decisions such as scouting timing or estimated harvest windows. GDD is generally combined with direct crop scouting and local experience rather than used as a stand-alone predictor.',
        },
      ],
    },
    {
      id: 'limitations-and-considerations',
      heading: 'Limitations and considerations',
      body: [
        {
          type: 'paragraph',
          text: 'GDD models are simplifications. They generally do not fully account for the growth-limiting effect of very high temperatures, moisture stress, day-length (photoperiod) sensitivity in some crops, or other stresses, and different calculation methods can give somewhat different values from the same weather data. Consistent methodology matters when comparing GDD across seasons or locations.',
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
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'wheat' },
    { type: 'pest', slug: 'fall-armyworm' },
    { type: 'pest', slug: 'european-corn-borer' },
    { type: 'farming-system', slug: 'precision-agriculture' },
  ],
  glossaryTerms: ['integrated-pest-management', 'yield'],
  geographicScope:
    'A general explanation of the growing degree day concept; base temperatures, calculation methods, and typical accumulated values are crop- and region-specific and are not given here.',
  limitations: [
    'This entry explains the GDD concept; it does not provide base temperatures, thresholds, or accumulated-value targets for any specific crop or region.',
    'Different calculation methods (simple, capped, sine-wave) can yield different values from the same weather data, so consistent methodology matters for comparison.',
  ],
  sourceReferences: [
    { sourceId: 'noaa', citedFor: 'Agricultural weather and heat-unit data' },
    {
      sourceId: 'usda-nass',
      citedFor: 'Crop progress reporting using thermal accumulation',
    },
    { sourceId: 'fao', citedFor: 'Crop development modelling context' },
    {
      sourceId: 'wmo',
      citedFor: 'Meteorological data standards underlying GDD calculation',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Growing Degree Days',
    description:
      'A reference on growing degree days (GDD): the heat-accumulation concept, calculation methods, uses in crop and pest timing, and key limitations.',
    keywords: [
      'growing degree days',
      'GDD',
      'heat units',
      'thermal accumulation',
    ],
  },
  structuredData: { article: true },
};
