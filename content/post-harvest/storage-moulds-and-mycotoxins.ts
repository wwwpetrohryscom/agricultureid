import type { PostHarvestContent } from '@/types/content';

export const storageMouldsAndMycotoxins: PostHarvestContent = {
  id: 'post-harvest-storage-moulds-and-mycotoxins',
  slug: 'storage-moulds-and-mycotoxins',
  contentType: 'post-harvest',
  title: 'Storage Moulds and Mycotoxins',
  postHarvestClass: 'quality',
  alternativeNames: [
    'Storage fungi',
    'Grain moulds',
    'Mycotoxin contamination',
  ],
  category: 'Post-harvest operation',
  subcategory: 'Quality & food safety',
  summary:
    'Storage moulds such as Aspergillus, Penicillium, and Fusarium spoil grain and can produce mycotoxins — including aflatoxins and deoxynivalenol — that pose food and feed safety risks. Keeping grain dry and cool is the primary prevention.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Moulds are microscopic fungi that grow on grain, nuts, and other stored crops when conditions are moist and warm enough. Field fungi such as many Fusarium species colonise the crop before harvest, while storage fungi such as Aspergillus and Penicillium species develop on grain that is stored too moist or too warm. Their growth discolours grain, causes musty odours and caking, reduces germination and nutritional value, and generates heat that can trigger further spoilage.',
    },
    {
      type: 'paragraph',
      text: 'Some of these fungi also produce mycotoxins — toxic compounds that can contaminate food and feed. Well-known examples include aflatoxins, produced by certain Aspergillus species, and deoxynivalenol (DON) and related toxins produced by Fusarium species. Because mycotoxins can pose serious health risks and are regulated in food and feed, preventing the mould growth that produces them is a central food-safety goal of good drying and storage.',
    },
  ],
  keyFacts: [
    {
      label: 'What they are',
      value: 'Fungi that grow on grain and nuts under moist, warm conditions',
    },
    {
      label: 'Key genera',
      value: 'Aspergillus, Penicillium, and Fusarium',
    },
    {
      label: 'Mycotoxins',
      value:
        'Toxic fungal metabolites such as aflatoxins and deoxynivalenol (DON)',
    },
    {
      label: 'Driven by',
      value: 'High grain moisture and warm temperatures',
    },
    {
      label: 'Primary prevention',
      value: 'Prompt drying to safe moisture and cool, clean storage',
    },
    {
      label: 'Why it matters',
      value: 'Food and feed safety, regulation, and quality and value loss',
    },
  ],
  sections: [
    {
      id: 'field-vs-storage',
      heading: 'Field fungi and storage fungi',
      body: [
        {
          type: 'paragraph',
          text: 'It is useful to distinguish fungi that infect the crop in the field from those that develop in storage. Field fungi, including many Fusarium species, colonise grain on the growing plant, especially under wet conditions around flowering and maturity, and can produce toxins such as deoxynivalenol before harvest. Storage fungi, chiefly Aspergillus and Penicillium species, grow on grain after harvest when it is held too moist or too warm; some Aspergillus species produce aflatoxins, particularly in warm climates and on crops such as maize and groundnuts.',
        },
        {
          type: 'paragraph',
          text: 'This distinction matters for prevention. Field infection depends largely on weather and crop management, whereas storage mould growth is strongly within the control of the person storing the grain, through drying and temperature control.',
        },
      ],
    },
    {
      id: 'mycotoxins',
      heading: 'Mycotoxins and their risks',
      body: [
        {
          type: 'paragraph',
          text: 'Mycotoxins are toxic compounds produced by some fungi as they grow. They are of concern because they can harm human and animal health, they are not removed by ordinary cooking, and they can be present even when visible mould is limited. Because of these risks, many countries set legal limits for major mycotoxins in food and feed, and contaminated lots can be rejected, downgraded, or condemned.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Mycotoxins persist beyond the mould',
          text: 'Once formed, mycotoxins can remain in grain even after mould growth stops and is not visible; preventing mould growth in the first place is therefore essential.',
        },
      ],
    },
    {
      id: 'prevention',
      heading: 'Prevention',
      body: [
        {
          type: 'list',
          items: [
            'Dry grain promptly to a safe moisture content and avoid delays that let mould start.',
            'Store grain cool, dry, and clean, and prevent moisture migration and condensation.',
            'Manage crops in the field to reduce Fusarium and Aspergillus infection where possible.',
            'Sort out visibly mouldy and damaged grain, and monitor stored grain for heating and mustiness.',
            'Test high-risk crops and lots for relevant mycotoxins against food and feed limits.',
          ],
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Prevention over remediation',
          text: 'There is no simple way to remove mycotoxins from bulk grain once formed; the reliable control is preventing the mould growth that produces them.',
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'groundnut' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'rice' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'sun-drying' },
  ],
  sourceReferences: [
    {
      sourceId: 'efsa',
      citedFor: 'Mycotoxins in food and feed and their risk assessment',
    },
    {
      sourceId: 'fao',
      citedFor: 'Mycotoxin prevention in post-harvest handling and storage',
    },
    { sourceId: 'usda-ars', citedFor: 'Storage fungi and aflatoxin research' },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Aflatoxin risk is higher in warm climates; Fusarium toxin risk relates to wet conditions around flowering and maturity.',
  limitations: [
    'Mycotoxin risk varies with crop, climate, and season; this entry describes principles, not specific limits or thresholds.',
    'Regulatory limits for mycotoxins in food and feed differ between countries and commodities.',
    'Visible mould is an unreliable guide to mycotoxin presence; confirming contamination requires laboratory testing.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Storage Moulds and Mycotoxins in Grain',
    description:
      'How storage moulds such as Aspergillus and Fusarium spoil grain and produce mycotoxins like aflatoxin and DON, and how drying and cool storage prevent them.',
    keywords: [
      'storage moulds',
      'mycotoxins',
      'aflatoxin',
      'deoxynivalenol',
      'grain food safety',
    ],
  },
  structuredData: { article: true },
};
