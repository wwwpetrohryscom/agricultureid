import type { LivestockContent } from '@/types/content';

export const mule: LivestockContent = {
  id: 'livestock-mule',
  slug: 'mule',
  contentType: 'livestock',
  title: 'Mule',
  scientificName: 'Equus asinus × Equus caballus',
  alternativeNames: ['Horse–donkey hybrid'],
  category: 'Livestock',
  subcategory: 'Monogastric (hindgut fermenter)',
  primaryProducts: ['Draught and pack power', 'Transport', 'Manure'],
  productionSystems: [
    'Working-animal systems (pack and draught)',
    'Smallholder and pack-transport systems',
    'Recreational and specialty use',
  ],
  summary:
    'Mules are sterile hybrids of a male donkey and a female horse, combining donkey hardiness with horse size and strength. Valued worldwide as pack and draught animals, they are monogastric hindgut fermenters kept mainly in working-animal systems.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The mule is a hybrid produced by crossing a male donkey (jack) with a female horse (mare); the reciprocal cross of a female donkey with a male horse produces a hinny. Mules are almost always sterile because their parent species have different chromosome numbers, so mule populations are maintained entirely through continued donkey–horse crossbreeding rather than by breeding mules themselves.',
    },
    {
      type: 'paragraph',
      text: 'Like horses and donkeys, mules are monogastric hindgut fermenters, digesting fibrous forage through an enlarged caecum and colon after initial digestion in the stomach and small intestine. Mules are widely valued for combining a donkey’s hardiness, surefootedness, and disease resistance with a horse’s size and strength, making them well suited to pack transport and draught work in difficult terrain.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Equus asinus × Equus caballus (hybrid)' },
    {
      label: 'Digestive type',
      value: 'Monogastric, hindgut fermenter — not a ruminant',
    },
    {
      label: 'Fertility',
      value: 'Almost always sterile; not self-perpetuating',
    },
    { label: 'Primary roles', value: 'Pack and draught power, transport' },
    {
      label: 'Feed base',
      value: 'Forage (grazing, hay) with modest supplementation',
    },
    {
      label: 'Traits',
      value: 'Combines donkey hardiness with horse size and strength',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Mules remain widely kept as working animals, particularly where terrain, cost, or infrastructure limit the use of motorised transport, and where their combination of strength and hardiness suits demanding pack and draught roles.',
        },
      ],
    },
    {
      id: 'types-and-uses',
      heading: 'Types and uses',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Pack mules',
              description:
                'Used to carry loads across trails and terrain unsuited to wheeled vehicles.',
            },
            {
              term: 'Draught and farm mules',
              description:
                'Used for pulling carts, implements, and other farm haulage tasks.',
            },
            {
              term: 'Riding and specialty mules',
              description:
                'Kept for riding, recreational use, or historically for military pack transport.',
            },
          ],
        },
      ],
    },
    {
      id: 'nutrition-and-feeding',
      heading: 'Nutrition and feeding',
      body: [
        {
          type: 'paragraph',
          text: 'Mules are efficient at extracting nutrition from forage, similar to donkeys, and can be prone to excess weight gain on rich pasture when in light work. Working or lactating mules need forage supplemented with additional energy and protein matched to workload.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Forage and supplementary feeding needs depend on workload, body condition, and physiological status; equine nutrition references and local advisers should guide feeding rather than generic figures.',
        },
      ],
    },
    {
      id: 'health-and-welfare',
      heading: 'Health and welfare',
      body: [
        {
          type: 'paragraph',
          text: 'Mule health and welfare depend on consistent access to forage and water, routine hoof care, and workloads and equipment suited to the animal’s size and condition; hybrid vigour can reduce the incidence of some health issues seen in either parent species.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Veterinary and regulatory guidance',
          text: 'Animal health, disease control, medicines, and welfare are governed by regional regulations and professional veterinary advice. AgricultureID does not provide veterinary treatment instructions; follow local law and consult qualified professionals.',
        },
      ],
    },
    {
      id: 'production-context',
      heading: 'Production context',
      body: [
        {
          type: 'paragraph',
          text: 'Mules continue to support transport and cultivation in mountainous and infrastructure-limited regions, reducing labour burdens for smallholder households, even as their overall numbers have declined in many mechanised regions.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'livestock', slug: 'horses' },
    { type: 'livestock', slug: 'donkeys' },
  ],
  connections: [
    { type: 'crop', slug: 'alfalfa' },
    { type: 'crop', slug: 'wheat' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'climate', slug: 'drought' },
  ],
  geographicScope:
    'Global overview; mules are kept wherever pack and draught transport is needed, with concentrations in mountainous and infrastructure-limited regions.',
  climateContext:
    'Mules tolerate a wide range of climates, generally sharing donkeys’ heat and drought tolerance alongside horses’ cold tolerance.',
  limitations: [
    'This is a general species overview, not a region- or use-specific working-animal management guide.',
    'Health, medicine, and welfare practices are governed by local regulation and veterinary advice and are not detailed here.',
    'As sterile hybrids, mules are produced by crossing donkeys and horses; donkey and horse breeding practices are not covered in detail here.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Mules as working animals and role in agriculture',
    },
    {
      sourceId: 'fao-dad-is',
      citedFor: 'Equine genetic resources and diversity',
    },
    { sourceId: 'woah', citedFor: 'Animal health and welfare standards' },
    { sourceId: 'nap-nrc', citedFor: 'Equine nutrient requirement references' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Mule',
    description:
      'A reference on mules: sterile horse–donkey hybrids valued for draught and pack power, their hindgut digestion, nutrition, and welfare needs.',
    keywords: ['mule', 'Equus hybrid', 'working animals', 'draught power'],
  },
  structuredData: { article: true },
};
