import type { PestContent } from '@/types/content';

export const twoSpottedSpiderMite: PestContent = {
  id: 'pest-two-spotted-spider-mite',
  slug: 'two-spotted-spider-mite',
  contentType: 'pest',
  title: 'Two-Spotted Spider Mite',
  scientificName: 'Tetranychus urticae (Acari: Tetranychidae)',
  alternativeNames: ['TSSM', 'Two-spotted mite'],
  category: 'Mite pest',
  subcategory: 'Sap-feeding spider mite',
  pestGroup: 'Mite — Acari (Tetranychidae)',
  summary:
    'Two-spotted spider mite is a tiny web-spinning mite, not an insect, that feeds on the underside of leaves across a very wide host range; it thrives in hot, dry conditions and can build damaging populations rapidly.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Two-spotted spider mite is a minuscule pest that is a mite, related to spiders and ticks, rather than an insect. It feeds on the underside of leaves by piercing individual cells and removing their contents, producing fine pale speckling (stippling) that can coalesce into bronzed, dried foliage as populations grow.',
    },
    {
      type: 'paragraph',
      text: 'The mite has an extremely broad host range and is a familiar problem in field crops, orchards, vegetables, and protected cultivation. It thrives in hot, dry conditions, reproduces very quickly, and readily develops resistance to miticides, so it is a classic case for conserving natural enemies and avoiding practices that flare populations.',
    },
  ],
  keyFacts: [
    { label: 'Group', value: 'Mites, subclass Acari, family Tetranychidae' },
    { label: 'Host range', value: 'Very broad across many crop families' },
    {
      label: 'Feeding',
      value: 'Pierces leaf cells on the underside, causing stippling',
    },
    {
      label: 'Favoured by',
      value: 'Hot, dry, dusty conditions and stressed plants',
    },
    {
      label: 'Natural enemies',
      value: 'Predatory mites and other small predators',
    },
    {
      label: 'Sign',
      value: 'Leaf stippling, bronzing, and fine webbing when numerous',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'The mites are tiny, roughly the size of a grain of dust, and are best seen with a hand lens as pale, greenish to yellowish, oval creatures with two darker spots on the body. They cluster on the underside of leaves and, when abundant, spin fine silk webbing that can cover leaves and shoot tips.',
        },
        {
          type: 'paragraph',
          text: 'Early damage appears as fine pale stippling on the upper leaf surface; heavier feeding bronzes and dries the foliage, and webbing becomes obvious. Tapping leaves over white paper to dislodge moving mites is a simple way to detect and confirm them.',
        },
      ],
    },
    {
      id: 'biology-and-life-cycle',
      heading: 'Biology and life cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Development from egg to adult is very rapid in warm weather, so populations can build explosively over a short period. Mites disperse by crawling and by ballooning on silk threads in wind, and they move readily on equipment, workers, and plant material. In cool conditions some females enter a dormant, often reddish, overwintering state.',
        },
        {
          type: 'paragraph',
          text: 'Because generations are so short, resistance to miticides can develop quickly where the same products are used repeatedly, and outbreaks are frequently triggered when broad-spectrum sprays remove the predatory mites that normally keep the pest in check.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Cell-by-cell feeding reduces photosynthesis and, at high densities, bronzes, dries, and prematurely drops leaves, which can reduce yield and fruit quality. Hot, dry, and dusty conditions and drought stress make plants more vulnerable and speed mite build-up. Damage varies widely with crop, weather, and the presence of natural enemies.',
        },
        {
          type: 'paragraph',
          text: 'The host range is very broad and includes common bean, strawberry, tomato, and cucumber among many field, vegetable, orchard, and greenhouse crops. Protected cultivation is often especially favourable to the mite.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Monitoring uses a hand lens to inspect the underside of leaves for mites, eggs, stippling, and webbing, and the paper-tap method to detect moving mites, with attention to hot spots and drought-stressed areas. Checking for predatory mites alongside the pest helps judge whether natural control is keeping pace before deciding to intervene.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Management centres on conserving predatory mites, reducing plant stress, and using selective tools within integrated pest management, because broad-spectrum sprays often make mite problems worse.',
        },
        {
          type: 'list',
          items: [
            'Conserve and, in protected culture, release predatory mites and other natural enemies',
            'Reduce plant stress by maintaining adequate irrigation and managing dust along field edges and roads',
            'Avoid broad-spectrum insecticides that flare mite populations by killing predators',
            'Rotate among selective miticide modes of action to slow resistance where treatment is needed',
            'Base any intervention on lens-based scouting and the ratio of mites to predators',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any miticide use must follow current, locally authorized recommendations, product labels, and resistance-management guidelines, and should conserve predatory mites and protect pollinators. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'common-bean' },
    { type: 'crop', slug: 'strawberry' },
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'cucumber' },
  ],
  connections: [
    { type: 'climate', slug: 'heat-stress' },
    { type: 'climate', slug: 'drought' },
    { type: 'farming-system', slug: 'greenhouse-farming' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'spider-mites' },
    { type: 'pest', slug: 'thrips' },
  ],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'host-plant',
  ],
  geographicScope:
    'A cosmopolitan mite found on many crops worldwide, particularly troublesome in hot, dry, and protected conditions; guidance varies by region.',
  climateContext:
    'Hot, dry weather greatly speeds development and favours outbreaks, while cool conditions slow the mite and can induce overwintering dormancy.',
  limitations: [
    'This is a general overview of a highly polyphagous mite, not crop- or region-specific management guidance.',
    'Thresholds and control-product recommendations are jurisdiction-specific and are not provided here.',
    'Miticide-resistance status varies regionally and strongly affects available chemical options.',
  ],
  sourceReferences: [
    { sourceId: 'uc-ipm', citedFor: 'Identification and IPM principles' },
    { sourceId: 'cabi', citedFor: 'Biology, hosts, and distribution' },
    { sourceId: 'eppo-gd', citedFor: 'Nomenclature and distribution' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Two-Spotted Spider Mite',
    description:
      'Two-spotted spider mite (Tetranychus urticae): identification, biology, leaf stippling and webbing damage, monitoring, and integrated mite management.',
    keywords: [
      'two-spotted spider mite',
      'Tetranychus urticae',
      'spider mite',
      'mite pest',
    ],
  },
  structuredData: { article: true },
};
