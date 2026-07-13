import type { PostHarvestContent } from '@/types/content';

export const sunDrying: PostHarvestContent = {
  id: 'post-harvest-sun-drying',
  slug: 'sun-drying',
  contentType: 'post-harvest',
  title: 'Sun Drying',
  postHarvestClass: 'drying',
  alternativeNames: ['Solar drying', 'Open-sun drying'],
  category: 'Post-harvest operation',
  subcategory: 'Drying',
  summary:
    'Sun drying uses free solar energy and air movement to reduce the moisture of grain, pulses, and other produce for safe storage. It is widely used by smallholders but is weather-dependent and carries contamination and re-wetting risks.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Sun drying is the removal of moisture from harvested produce using the heat of the sun and natural air movement. It is the oldest and most widespread drying method, used around the world to dry grain, pulses, and many fruits and other foods to a moisture content low enough for safe storage. Its great advantages are that the energy is free and no specialised equipment is essential.',
    },
    {
      type: 'paragraph',
      text: 'In its simplest form, open-sun drying, the crop is spread on the ground, on mats, or on drying floors and turned periodically. Solar dryers improve on this by enclosing the produce so that sun-warmed air passes over it, giving faster, cleaner, and more controlled drying. Because sun drying depends on the weather, it is vulnerable to interruption by rain and cloud and to re-wetting overnight.',
    },
  ],
  keyFacts: [
    {
      label: 'Energy source',
      value: 'Free solar heat and natural air movement',
    },
    {
      label: 'Common uses',
      value: 'Drying grain, pulses, and many fruits and other foods',
    },
    {
      label: 'Two forms',
      value: 'Open-sun drying and enclosed solar dryers',
    },
    {
      label: 'Main advantage',
      value: 'Low cost and accessibility, especially for smallholders',
    },
    {
      label: 'Main limitations',
      value: 'Weather dependence, contamination, and re-wetting',
    },
    {
      label: 'Goal',
      value:
        'Reach a moisture content safe for storage without over- or under-drying',
    },
  ],
  sections: [
    {
      id: 'how-it-works',
      heading: 'How sun drying works',
      body: [
        {
          type: 'paragraph',
          text: 'Drying occurs as warm, relatively dry air passes over the produce and carries away evaporated moisture. In open-sun drying the crop is exposed directly to sunlight and wind; in a solar dryer, the sun heats air that is then drawn through or over the produce, often within a transparent or dark enclosure that raises the temperature and speeds drying while keeping out rain, dust, and pests. Turning or stirring the crop helps it dry evenly.',
        },
        {
          type: 'paragraph',
          text: 'The aim is the same as for any drying: to reach a moisture content low enough that moulds and insects cannot thrive in storage. Grain dried in the sun still needs to reach a safe storage moisture, and its dryness should be checked rather than assumed.',
        },
      ],
    },
    {
      id: 'risks',
      heading: 'Risks and quality issues',
      body: [
        {
          type: 'list',
          items: [
            'Weather dependence: rain and cloud can interrupt drying and re-wet the crop, encouraging mould.',
            'Contamination: crop dried on bare ground can pick up soil, stones, dust, animal droppings, and pests.',
            'Uneven and incomplete drying, which leaves pockets of moist grain that spoil in storage.',
            'Re-wetting overnight from dew or humidity if the crop is not gathered and protected.',
          ],
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Slow or interrupted drying and mould risk',
          text: 'Produce that stays moist and warm for too long during slow or interrupted sun drying can develop moulds, including some that produce mycotoxins; prompt, complete drying reduces this risk.',
        },
      ],
    },
    {
      id: 'good-practice',
      heading: 'Good practice',
      body: [
        {
          type: 'list',
          items: [
            'Dry on clean mats, tarpaulins, or raised drying floors rather than on bare ground.',
            'Spread produce in thin layers and turn it regularly for even, faster drying.',
            'Gather and cover the crop before rain and overnight to prevent re-wetting.',
            'Check moisture before storage and finish drying if the crop is still too moist.',
            'Consider a solar dryer where cleaner, faster, and weather-protected drying is needed.',
          ],
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'groundnut' },
    { type: 'crop', slug: 'coffee' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
    { type: 'post-harvest', slug: 'grain-storage' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Sun and solar drying in smallholder post-harvest systems',
    },
    { sourceId: 'irri', citedFor: 'Sun drying of paddy and grain quality' },
    {
      sourceId: 'usda-ars',
      citedFor: 'Drying and safe-storage moisture research',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global, especially in warm and sunny regions and smallholder systems; performance depends on climate.',
  limitations: [
    'Sun drying depends on weather; humid, cloudy, or rainy conditions slow drying and risk re-wetting and mould.',
    'Open-sun drying on the ground exposes produce to contamination by soil, dust, pests, and animals.',
    'Reaching a safe, uniform storage moisture is not guaranteed and should be verified with moisture measurement.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Sun Drying of Grain and Produce: Uses & Risks',
    description:
      'How sun drying and solar dryers reduce the moisture of grain and produce for storage — smallholder use, weather dependence, and contamination and mould risks.',
    keywords: [
      'sun drying',
      'solar drying',
      'grain drying smallholder',
      'open sun drying',
      'post-harvest drying',
    ],
  },
  structuredData: { article: true },
};
