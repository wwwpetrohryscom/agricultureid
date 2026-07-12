import type { MachineryContent } from '@/types/content';

export const planter: MachineryContent = {
  id: 'machinery-planter',
  slug: 'planter',
  contentType: 'machinery',
  title: 'Planter',
  alternativeNames: ['Row-crop planter', 'Precision planter'],
  category: 'Agricultural machinery',
  subcategory: 'Precision seeding equipment',
  machineryClass: 'seeding',
  summary:
    'A planter is a precision seeding implement that singulates individual seeds and places them at controlled spacing and depth in rows, used mainly for wider-spaced row crops such as maize, soybean, and sugar beet.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A planter differs from a seed drill in purpose and precision: rather than metering a continuous stream of seed into narrow, closely spaced rows for crops like cereals, a planter singulates individual seeds and places each one at a set spacing along wider rows. This row-and-spacing precision matters most for crops planted at relatively low populations per unit area, where uniform spacing between plants directly affects competition for light, water, and nutrients.',
    },
    {
      type: 'paragraph',
      text: 'Each row unit on a planter typically combines a seed meter, a furrow opener, seed tubes or seed-delivery systems, and closing and press wheels, all mounted on a toolbar that can carry many identical row units side by side. Row spacing, seed spacing, and planting depth are set to match the crop, seed size, and target plant population for the field.',
    },
  ],
  keyFacts: [
    {
      label: 'Primary function',
      value:
        'Precision singulation and placement of individual seeds at wide row spacing',
    },
    {
      label: 'Key components',
      value:
        'Seed meter (vacuum, finger, or plate), furrow openers, row units, closing wheels',
    },
    {
      label: 'Common crops',
      value: 'Maize, soybean, sugar beet, cotton, and other row crops',
    },
    {
      label: 'Metering principle',
      value:
        'Vacuum, finger-pickup, or mechanical plate systems that separate and release single seeds',
    },
    {
      label: 'Precision integration',
      value:
        'Often paired with GPS guidance and variable-rate seeding technology',
    },
    {
      label: 'Operating consideration',
      value:
        'Down force, seed spacing, and planting depth are set per crop and seedbed condition',
    },
  ],
  sections: [
    {
      id: 'what-a-planter-is',
      heading: 'What a planter is',
      body: [
        {
          type: 'paragraph',
          text: 'A planter is built around singulation — separating a bulk seed supply into individually spaced seeds — rather than metering a continuous flow, which is the defining difference from a seed drill. This makes planters the standard establishment tool for row crops planted at wider spacing and lower population than cereals.',
        },
        {
          type: 'list',
          items: [
            'Places individual seeds at set spacing rather than a continuous seed stream',
            'Used mainly for wider-row crops planted at lower populations than cereals',
            'Row units can often be added or removed to match different row widths',
          ],
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
            'Seed is loaded into a hopper or central seed system feeding each row unit',
            'A seed meter (vacuum, finger, or plate type) picks up and releases single seeds at a set interval',
            'A furrow opener cuts a slot in the soil ahead of the seed-delivery point',
            'The seed drops or is placed into the furrow at a controlled depth',
            'Closing wheels or discs cover the seed and press the soil to firm seed-to-soil contact',
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
          text: 'Planting establishes the crop stand for the season, and uniform seed spacing and depth from the planter strongly influence emergence timing, plant-to-plant competition, and ultimately yield potential. Inconsistent spacing or depth can create gaps or crowding that a crop cannot fully compensate for later in the season.',
        },
        {
          type: 'paragraph',
          text: 'Planters are frequently integrated with precision-agriculture systems, using GPS guidance for pass-to-pass accuracy and variable-rate seeding to adjust population across zones of a field with different yield potential.',
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
              term: 'Vacuum planter',
              description:
                'Uses air suction to hold and release single seeds from a metering disc, common on modern row-crop planters.',
            },
            {
              term: 'Finger-pickup planter',
              description:
                'Uses mechanical fingers to separate and release individual seeds from a seed pool.',
            },
            {
              term: 'No-till planter',
              description:
                'Fitted with heavier down force and residue-cutting components to place seed accurately into undisturbed soil or residue.',
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
          text: 'Planting speed, down force, and row-unit maintenance all affect placement accuracy; excessive speed or worn components can reduce spacing uniformity even on well-designed planters. Seed size, shape, and seed-treatment coatings can also require meter adjustments between seed lots.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Target populations, row spacing, and planting depth are crop-, variety-, and region-specific; consult local agronomic guidance rather than a single fixed setting.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'machinery', slug: 'seed-drill' },
    { type: 'machinery', slug: 'transplanter' },
    { type: 'machinery', slug: 'tractor' },
  ],
  connections: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'sugar-beet' },
    { type: 'crop', slug: 'cotton' },
    { type: 'farming-system', slug: 'precision-agriculture' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
  ],
  geographicScope:
    'General overview of planters as used in mechanised row-crop planting worldwide. Row spacing, population targets, and planter scale vary by crop and region.',
  limitations: [
    'This entry describes planter function and types in general terms; it does not recommend specific seed populations or spacings, which are crop- and region-specific.',
    'Precision-agriculture integration (GPS, variable-rate seeding) depends on equipment and data infrastructure not detailed here.',
  ],
  sourceReferences: [
    {
      sourceId: 'iastate-extension',
      citedFor: 'Planter metering systems and placement accuracy',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Row-crop planting and establishment research',
    },
    { sourceId: 'ahdb', citedFor: 'Row-crop establishment guidance context' },
    {
      sourceId: 'fao',
      citedFor: 'Role of precision seeding in crop establishment',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Planter',
    description:
      'Row-crop planters explained: how seed meters, furrow openers, and closing wheels place individual seeds precisely, their role in establishment, and types.',
    keywords: [
      'planter',
      'row-crop planter',
      'precision planting',
      'seed metering',
    ],
  },
  structuredData: { article: true },
};
