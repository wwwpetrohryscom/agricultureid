import type { PestContent } from '@/types/content';

export const spottedLanternfly: PestContent = {
  id: 'pest-spotted-lanternfly',
  slug: 'spotted-lanternfly',
  contentType: 'pest',
  title: 'Spotted Lanternfly',
  scientificName: 'Lycorma delicatula (Hemiptera: Fulgoridae)',
  alternativeNames: ['SLF'],
  category: 'Insect pest',
  subcategory: 'Sap-feeding planthopper',
  pestGroup: 'Insect — Hemiptera (Fulgoridae)',
  summary:
    'Spotted lanternfly is an invasive planthopper from Asia that feeds on sap from many woody plants, excretes copious honeydew that fosters sooty mould, and is a particular concern in grape and tree-fruit systems.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Spotted lanternfly is a striking planthopper native to Asia that has become invasive in parts of North America. Despite the name, it is not a fly but a sap-feeding bug. Nymphs and adults feed on the stems and trunks of many woody plants, and heavy feeding, together with the sugary honeydew they excrete, can weaken plants and foul foliage and fruit.',
    },
    {
      type: 'paragraph',
      text: 'The insect is a strong hitchhiker: egg masses are laid on almost any smooth surface, including vehicles, outdoor equipment, and stone, which has helped it spread. It is of particular concern in vineyards and some tree-fruit and nursery systems, where feeding pressure and honeydew can be economically important.',
    },
  ],
  keyFacts: [
    { label: 'Group', value: 'Insects, order Hemiptera, family Fulgoridae' },
    { label: 'Status', value: 'Invasive planthopper of Asian origin' },
    {
      label: 'Feeding',
      value: 'Sucks sap from stems and trunks of woody plants',
    },
    {
      label: 'Key concern',
      value: 'Vine and tree stress, plus honeydew and sooty mould',
    },
    {
      label: 'Spread',
      value: 'Egg masses laid on many surfaces aid hitchhiking',
    },
    {
      label: 'Sign',
      value: 'Sap weeping, sticky honeydew, sooty mould, and egg masses',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Adults are about an inch long at rest, with grey forewings bearing black spots and a hindwing patch that is red with black spots, visible in flight or when startled. Early nymphs are black with white spots, and late-stage nymphs become red with black and white markings. Egg masses are laid in rows and covered with a mud-like, greyish coating that weathers over time.',
        },
        {
          type: 'paragraph',
          text: 'The distinctive spotted wings and, in nymphs, the black-then-red colour progression help separate spotted lanternfly from native planthoppers. Suspected finds in new areas should be reported to local plant health authorities.',
        },
      ],
    },
    {
      id: 'biology-and-life-cycle',
      heading: 'Biology and life cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Spotted lanternfly typically completes one generation per year. Eggs laid in autumn overwinter and hatch in spring into nymphs that develop through several stages before maturing into winged adults in late summer. Adults feed, mate, and lay overwintering egg masses, and then die with the onset of cold weather.',
        },
        {
          type: 'paragraph',
          text: 'The insect uses many host plants through its life, often shifting hosts as it develops. The invasive tree of heaven is a favoured host in invaded regions and can support large populations that then move onto nearby crops.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Feeding removes plant sap and can stress plants, and the abundant honeydew the insect excretes promotes black sooty mould that coats leaves and fruit, reducing photosynthesis and marketability. Grapevines are considered especially vulnerable, where sustained feeding can reduce vine health over time.',
        },
        {
          type: 'paragraph',
          text: 'The host range is wide and includes grape and various tree fruit and nut crops such as apple and walnut, among many woody ornamental and forest species. Impact on any given crop varies with local population pressure.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Monitoring includes inspecting trunks and stems for nymphs and adults, checking smooth surfaces and equipment for egg masses in autumn and winter, and watching for honeydew and sooty mould. Because the pest spreads by hitchhiking, checking and cleaning vehicles and materials leaving infested areas is an important surveillance and containment step.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Management emphasizes surveillance, containment, and host management, coordinated with plant health authorities where the pest is regulated.',
        },
        {
          type: 'list',
          items: [
            'Report suspected finds to local plant health authorities, especially in new areas',
            'Scrape and destroy egg masses and check equipment and vehicles for hitchhiking stages',
            'Manage preferred host plants such as tree of heaven where appropriate and permitted',
            'Protect high-value crops such as vineyards through monitoring and targeted response',
            'Follow quarantine and movement rules that apply in regulated areas',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any insecticide use must follow current, locally authorized recommendations and product labels, and should consider effects on natural enemies and pollinators. In regulated areas, follow official quarantine and reporting requirements. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'grape' },
    { type: 'crop', slug: 'apple' },
    { type: 'crop', slug: 'walnut' },
  ],
  connections: [
    { type: 'climate', slug: 'temperature' },
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'machinery', slug: 'sprayer' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'leafhoppers' },
    { type: 'pest', slug: 'psyllids' },
  ],
  glossaryTerms: ['integrated-pest-management', 'host-plant'],
  geographicScope:
    'Native to Asia and invasive in parts of North America; distribution is expanding and regulatory status varies by region.',
  climateContext:
    'Typically one generation per year, with egg masses overwintering and hatch and development driven by spring and summer temperatures.',
  limitations: [
    'This is a general overview of an actively spreading invasive pest, not region-specific management guidance.',
    'Control-product recommendations and quarantine rules are jurisdiction-specific and are not provided here.',
    'Reported host list and impact continue to be refined as the invasion develops.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-aphis',
      citedFor: 'Invasive status, quarantine, and regulatory context',
    },
    { sourceId: 'psu-extension', citedFor: 'Identification and life cycle' },
    { sourceId: 'cabi', citedFor: 'Biology, hosts, and distribution' },
    { sourceId: 'eppo', citedFor: 'Pest categorization and distribution' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Spotted Lanternfly',
    description:
      'Spotted lanternfly (Lycorma delicatula): identification, life cycle, sap feeding and honeydew damage to grape and trees, monitoring, and management.',
    keywords: [
      'spotted lanternfly',
      'Lycorma delicatula',
      'invasive planthopper',
      'grape pest',
    ],
  },
  structuredData: { article: true },
};
