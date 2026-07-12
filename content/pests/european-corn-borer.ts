import type { PestContent } from '@/types/content';

export const europeanCornBorer: PestContent = {
  id: 'pest-european-corn-borer',
  slug: 'european-corn-borer',
  contentType: 'pest',
  title: 'European Corn Borer',
  scientificName: 'Ostrinia nubilalis (Lepidoptera: Crambidae)',
  alternativeNames: ['ECB', 'Corn borer'],
  category: 'Insect pest',
  subcategory: 'Stem-boring caterpillar',
  pestGroup: 'Insect — Lepidoptera',
  summary:
    'European corn borer larvae tunnel into the stalks, ear shanks, and tassels of maize, weakening plants and reducing yield, and are among the most closely studied pests for degree-day-based monitoring.',
  introduction: [
    {
      type: 'paragraph',
      text: 'European corn borer is native to Europe but has been established across much of North America for over a century. Larvae bore into maize stalks, ear shanks, and tassels, where their feeding is largely hidden from view once tunneling begins, making the pest one of the most economically important stem borers of maize in temperate regions.',
    },
    {
      type: 'paragraph',
      text: 'Because larvae are protected inside plant tissue for most of their development, management relies heavily on tracking adult moth flight and predicting egg-hatch timing with temperature-based phenology models, so that the brief exposed larval stage can be targeted before stalk entry.',
    },
  ],
  keyFacts: [
    { label: 'Group', value: 'Insects, order Lepidoptera, family Crambidae' },
    {
      label: 'Feeding',
      value: 'Larvae tunnel into stalks, ear shanks, and tassels',
    },
    {
      label: 'Key concern',
      value: 'Stalk breakage, lodging, ear drop, and reduced yield',
    },
    {
      label: 'Generations',
      value: 'One to several per year, depending on regional temperature',
    },
    {
      label: 'Natural enemies',
      value: 'Trichogramma egg parasitoids and general predators',
    },
    {
      label: 'Sign',
      value: 'Small entrance holes with frass, broken tassels or stalks',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Adult moths are pale yellow-brown with wavy darker bands across the wings. Larvae are pale pinkish-grey with small round dark spots along the body. Before tunneling begins, young larvae produce fine "shot-hole" feeding on whorl leaves, which is often the first visible sign of infestation.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Shot-hole feeding',
              description:
                'Rows of small round holes in unfurled whorl leaves caused by early-stage larvae.',
            },
            {
              term: 'Frass',
              description:
                'Sawdust-like larval droppings pushed out of entrance holes in the stalk or ear shank.',
            },
            {
              term: 'Entrance hole',
              description:
                'A small, round hole marking where a larva has tunneled into the stalk or shank.',
            },
          ],
        },
      ],
    },
    {
      id: 'biology-and-life-cycle',
      heading: 'Biology and life cycle',
      body: [
        {
          type: 'paragraph',
          text: 'European corn borer overwinters as a mature larva inside crop residue or stalks and pupates in spring. Emerging adults mate and lay egg masses on the underside of leaves. The number of generations completed each year, from one to several, depends on regional temperature and day length.',
        },
        {
          type: 'paragraph',
          text: 'Because development speed is closely tied to temperature, accumulated growing-degree-day totals are widely used to predict adult flight and egg-hatch timing across a season.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Young larvae feed on whorl and leaf tissue before tunneling into the midrib, stalk, or ear shank. Tunneling weakens stalks, increasing the risk of breakage and lodging, and can sever ear shanks, causing ears to drop before harvest, all of which interrupt the movement of water and nutrients within the plant.',
        },
        {
          type: 'paragraph',
          text: 'Maize, including both field and sweet corn, is the primary host, but the pest also attacks other large-stemmed crops such as sweet pepper in some regions.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Pheromone traps track adult moth flight, while growing-degree-day models help predict egg-laying and hatch timing. Scouting focuses on whorl-stage shot-hole damage and egg masses, since this window, before larvae enter the stalk, offers the best opportunity to assess risk.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'European corn borer management combines resistant genetics, monitoring, and cultural practices within an integrated approach.',
        },
        {
          type: 'list',
          items: [
            'Conserve Trichogramma wasps and other natural enemies of eggs and larvae',
            'Use resistant hybrids where locally approved and appropriate',
            'Destroy or incorporate crop residue that harbours overwintering larvae',
            'Time scouting using growing-degree-day models to catch susceptible larval stages',
            'Rotate away from continuous maize where local carry-over risk is high',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any insecticide use must follow current, locally authorized recommendations and product labels, and should consider effects on natural enemies. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'sweet-pepper' },
  ],
  connections: [
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'growing-degree-days' },
    { type: 'climate', slug: 'humidity' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'machinery', slug: 'combine-harvester' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'fall-armyworm' },
    { type: 'pest', slug: 'codling-moth' },
    { type: 'pest', slug: 'cutworms' },
  ],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'host-plant',
  ],
  geographicScope:
    'Widely established across temperate maize-growing regions of Europe and North America; generation number, timing, and pressure vary by climate.',
  climateContext:
    'Development speed and the number of generations per year rise with accumulated warm-season temperature, tracked through growing-degree-day models.',
  limitations: [
    'This is a general overview of a well-studied pest, not region-specific guidance for a particular hybrid or growing area.',
    'Thresholds and control-product recommendations are jurisdiction-specific and are not provided here.',
  ],
  sourceReferences: [
    {
      sourceId: 'iastate-extension',
      citedFor: 'Biology, monitoring, and degree-day guidance',
    },
    { sourceId: 'cabi', citedFor: 'Distribution, hosts, and life cycle' },
    { sourceId: 'eppo-gd', citedFor: 'Species nomenclature and distribution' },
    {
      sourceId: 'usda-ars',
      citedFor: 'Research on biology and resistant genetics',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'European Corn Borer',
    description:
      'European corn borer explained: identification, degree-day biology, stalk and ear tunneling damage in maize, monitoring, and integrated management.',
    keywords: [
      'european corn borer',
      'Ostrinia nubilalis',
      'maize stalk borer',
      'corn pest',
    ],
  },
  structuredData: { article: true },
};
