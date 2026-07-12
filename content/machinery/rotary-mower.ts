import type { MachineryContent } from '@/types/content';

export const rotaryMower: MachineryContent = {
  id: 'machinery-rotary-mower',
  slug: 'rotary-mower',
  contentType: 'machinery',
  title: 'Rotary Mower',
  category: 'Agricultural machinery',
  subcategory: 'Forage-cutting equipment',
  machineryClass: 'harvest',
  summary:
    'A rotary mower cuts standing forage or vegetation using fast-spinning blades or discs mounted horizontally, offering a robust, relatively simple cutting method widely used for hay, pasture topping, and roadside or field-margin mowing.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A rotary mower cuts material with the impact and slicing action of blades or discs rotating at high speed on a horizontal plane, in contrast to the shearing, scissor-like action of sickle-bar mowers. This design tends to handle uneven or dense stands robustly and requires less frequent sharpening.',
    },
    {
      type: 'paragraph',
      text: 'Rotary mowers are the typical first step in mechanised forage harvesting, cutting a standing crop such as alfalfa or grass so it can dry in the field before raking and baling, and they are also used simply to top pasture or maintain field margins without a harvest objective.',
    },
  ],
  keyFacts: [
    {
      label: 'Primary function',
      value: 'Cutting standing forage or vegetation',
    },
    {
      label: 'Cutting mechanism',
      value: 'Fast-spinning blades or discs on a horizontal cutting bar',
    },
    {
      label: 'Common configurations',
      value: 'Disc mowers and drum mowers, some with integrated conditioners',
    },
    {
      label: 'Typical use',
      value:
        'Hay and forage cutting, pasture topping, roadside/field-margin mowing',
    },
    {
      label: 'Following step',
      value: 'Field drying, raking, and baling for forage crops',
    },
    {
      label: 'Operating consideration',
      value: 'Cutting height and timing affect regrowth and forage quality',
    },
  ],
  sections: [
    {
      id: 'what-a-rotary-mower-is',
      heading: 'What a rotary mower is',
      body: [
        {
          type: 'paragraph',
          text: 'A rotary mower’s defining feature is its horizontally spinning blades or discs, which cut by impact rather than the shear action used by sickle-bar mowers. This makes it well suited to cutting lodged, dense, or uneven stands with less risk of blockage.',
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
            'The mower is towed or mounted and driven via the tractor power take-off',
            'Blades or discs spin at high speed close to ground level',
            'Standing forage is cut as it passes beneath the rotating cutting elements',
            'Cut material is laid into a swath or windrow behind the mower',
            'Some models pass the cut material through rollers or flails (a conditioner) to speed drying',
          ],
        },
      ],
    },
    {
      id: 'role-in-the-production-cycle',
      heading: 'Role in the production cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Mowing is the first step in producing hay or silage from a standing forage crop, initiating the field-curing process that precedes raking and baling. Cutting height and timing relative to the crop’s growth stage influence both the yield and quality of the cut material and the speed and vigour of regrowth.',
        },
        {
          type: 'paragraph',
          text: 'Outside forage harvest, rotary mowers are also used to top pastures — cutting mature or rejected growth to encourage fresh regrowth — and to maintain non-cropped areas such as field margins.',
        },
      ],
    },
    {
      id: 'types-and-variations',
      heading: 'Types and variations',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Disc mower',
              description:
                'Uses multiple small rotating discs, each carrying two or more free-swinging blades',
            },
            {
              term: 'Drum mower',
              description:
                'Uses larger rotating drums with blades mounted around the circumference',
            },
            {
              term: 'Mower-conditioner',
              description:
                'Combines cutting with a conditioning stage that crushes or crimps stems to speed field drying',
            },
          ],
        },
      ],
    },
    {
      id: 'considerations',
      heading: 'Considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Cutting height affects both forage quality (lower cuts can include more stem and soil contamination) and stand persistence (very low cutting can damage crown tissue in some perennial forages). Blade condition and ground speed also influence cut quality.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Appropriate cutting height and timing depend on the forage species, growth stage, and intended use; consult regional forage-management guidance.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'machinery', slug: 'baler' },
    { type: 'machinery', slug: 'tractor' },
  ],
  connections: [
    { type: 'crop', slug: 'alfalfa' },
    { type: 'livestock', slug: 'cattle' },
    { type: 'livestock', slug: 'sheep' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
    { type: 'machinery', slug: 'baler' },
  ],
  glossaryTerms: ['forage'],
  geographicScope:
    'General overview of rotary mowers as used in forage cutting and pasture management worldwide. Practice and timing vary by forage species and region.',
  limitations: [
    'This entry describes mower function and types in general terms; it does not specify cutting heights or timing, which are species- and region-specific.',
    'Effects of cutting height on regrowth and quality vary by forage species and are not quantified here.',
  ],
  sourceReferences: [
    {
      sourceId: 'iastate-extension',
      citedFor: 'Rotary mower operation and forage cutting',
    },
    { sourceId: 'ahdb', citedFor: 'Forage and grassland management context' },
    { sourceId: 'usda-ars', citedFor: 'Forage harvest research context' },
    {
      sourceId: 'fao',
      citedFor: 'Role of mowing in forage production systems',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Rotary Mower',
    description:
      'Rotary mowers explained: how spinning blades or discs cut standing forage, mower and conditioner types, and their role ahead of raking and baling.',
    keywords: [
      'rotary mower',
      'disc mower',
      'hay mowing',
      'forage cutting equipment',
    ],
  },
  structuredData: { article: true },
};
