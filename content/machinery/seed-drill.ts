import type { MachineryContent } from '@/types/content';

export const seedDrill: MachineryContent = {
  id: 'machinery-seed-drill',
  slug: 'seed-drill',
  contentType: 'machinery',
  title: 'Seed Drill',
  category: 'Agricultural machinery',
  subcategory: 'Seeding equipment',
  machineryClass: 'seeding',
  summary:
    'A seed drill places seed at a controlled depth and spacing in rows, opening a furrow, metering seed into it, and covering it in one pass, giving more even establishment than broadcasting seed by hand or machine.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A seed drill is a towed or mounted implement that sows seed in evenly spaced rows at a set depth, rather than scattering it across the surface. It couples a seed-metering system with furrow openers and covering devices, so seed is placed into soil contact at a consistent depth in a single field pass.',
    },
    {
      type: 'paragraph',
      text: 'Because germination and early crop establishment are strongly influenced by seed depth, seed-to-soil contact, and spacing, drilling is the standard planting method for cereals and many other close-drilled crops in mechanised systems, in contrast to broadcasting or precision row-crop planting used for wider-spaced crops.',
    },
  ],
  keyFacts: [
    {
      label: 'Primary function',
      value: 'Placing seed at controlled depth and row spacing',
    },
    {
      label: 'Key components',
      value: 'Seed hopper, metering mechanism, furrow openers, covering device',
    },
    {
      label: 'Common crops',
      value: 'Cereals and other close-row crops such as wheat and barley',
    },
    {
      label: 'Metering principle',
      value: 'Mechanical or pneumatic distribution of seed to each opener',
    },
    {
      label: 'Related systems',
      value:
        'Direct/no-till drills can sow into standing residue without prior tillage',
    },
    {
      label: 'Operating consideration',
      value:
        'Seed rate, depth, and row spacing are set for the crop and seedbed condition',
    },
  ],
  sections: [
    {
      id: 'what-a-seed-drill-is',
      heading: 'What a seed drill is',
      body: [
        {
          type: 'paragraph',
          text: 'A seed drill is designed to sow seed in rows rather than scatter it, giving more uniform plant spacing, depth, and emergence than broadcast sowing. Row spacing and configuration vary by crop and region, but the underlying function — metering seed into an opened furrow and covering it — is shared across drill designs.',
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
            'Seed is loaded into a hopper and fed to a metering mechanism',
            'The metering system distributes seed at a set rate to individual delivery tubes',
            'Furrow openers (discs or tines) cut a shallow slot in the soil ahead of each tube',
            'Seed drops into the furrow at a controlled depth',
            'Press wheels or covering devices close the furrow and firm the soil around the seed',
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
          text: 'Drilling is the establishment step that follows seedbed preparation and precedes crop emergence, and it strongly influences final plant population and uniformity. Even emergence supports more consistent competition against weeds, more uniform crop development, and generally more predictable harvest timing.',
        },
        {
          type: 'paragraph',
          text: 'In conservation and no-till systems, specialised drills are used to sow directly into undisturbed soil or crop residue, reducing the number of separate tillage passes and helping to protect soil structure and organic matter between crops.',
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
              term: 'Conventional (tine or disc) drill',
              description: 'Sows into a prepared, tilled seedbed',
            },
            {
              term: 'No-till/direct drill',
              description:
                'Cuts through residue and undisturbed soil to place seed without prior tillage',
            },
            {
              term: 'Air seeder/pneumatic drill',
              description:
                'Uses an air stream to distribute seed to a wide working width from a central metering unit',
            },
            {
              term: 'Precision row-crop planter',
              description:
                'A related but distinct implement that singulates and spaces individual seeds, typically for wider-row crops',
            },
          ],
        },
      ],
    },
    {
      id: 'operating-considerations',
      heading: 'Operating considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Seed rate, sowing depth, and row spacing are set according to the crop, seed size, seedbed moisture, and target plant population, and are typically adjusted between fields and seasons. Soil structure and residue level at the time of drilling also affect how well openers achieve consistent seed placement.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Recommended seed rates and depths are crop-, variety-, and region-specific; consult local agronomic guidance rather than a single fixed setting.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'machinery', slug: 'tractor' },
    { type: 'machinery', slug: 'disc-harrow' },
    { type: 'machinery', slug: 'gps-guidance-system' },
  ],
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'barley' },
    { type: 'crop', slug: 'sorghum' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'farming-system', slug: 'precision-agriculture' },
    { type: 'soil-topic', slug: 'soil-structure' },
  ],
  glossaryTerms: ['crop-rotation', 'cover-crop'],
  geographicScope:
    'General overview of seed drills as used across mechanised cereal and row-crop planting worldwide. Row spacing, seed rates, and drill types vary by crop and region.',
  limitations: [
    'This entry describes drill function and types in general terms; it does not specify seed rates or depths, which are crop- and region-specific.',
    'The suitability of no-till drilling depends on soil, residue, and climate conditions not detailed here.',
  ],
  sourceReferences: [
    {
      sourceId: 'iastate-extension',
      citedFor: 'Seed drill operation and no-till drilling',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Conservation tillage and drilling context',
    },
    { sourceId: 'ahdb', citedFor: 'Cereal establishment guidance context' },
    {
      sourceId: 'fao',
      citedFor: 'Role of seeding equipment in crop establishment',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Seed Drill',
    description:
      'Seed drills explained: how metering, furrow openers, and covering devices place seed at controlled depth and spacing, plus no-till drill variations.',
    keywords: [
      'seed drill',
      'direct drilling',
      'planting equipment',
      'no-till seeding',
    ],
  },
  structuredData: { article: true },
};
