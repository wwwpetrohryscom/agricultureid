import type { LivestockContent } from '@/types/content';

export const quail: LivestockContent = {
  id: 'livestock-quail',
  slug: 'quail',
  contentType: 'livestock',
  title: 'Quail',
  scientificName: 'Coturnix japonica; Coturnix coturnix',
  alternativeNames: ['Japanese quail', 'Coturnix quail'],
  category: 'Livestock',
  subcategory: 'Poultry (game bird)',
  primaryProducts: ['Eggs', 'Meat', 'Breeding stock'],
  productionSystems: [
    'Intensive caged or floor systems',
    'Small-scale backyard systems',
    'Commercial layer and broiler operations',
  ],
  summary:
    'Quail are small, fast-maturing game birds farmed worldwide for eggs and meat. Their short generation interval and compact size make them well suited to intensive commercial systems as well as small-scale backyard production.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Farmed quail, most commonly the Japanese quail (Coturnix japonica) and common quail (Coturnix coturnix), are among the smallest commercially farmed poultry species. Their rapid growth and short time to sexual maturity — often only a few weeks — make them attractive for both egg and meat production, and they are farmed across Asia, Europe, the Americas, and beyond.',
    },
    {
      type: 'paragraph',
      text: 'As monogastric poultry, quail digest grain-based rations efficiently and require relatively little space per bird compared with larger poultry. This supports high stocking densities in commercial operations alongside a long tradition of small-scale and backyard keeping.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Coturnix japonica; Coturnix coturnix' },
    { label: 'Digestive type', value: 'Monogastric poultry' },
    { label: 'Primary products', value: 'Eggs and meat' },
    {
      label: 'Maturity',
      value: 'Rapid; egg-laying can begin within weeks of hatching',
    },
    { label: 'Feed base', value: 'Formulated grain-based rations' },
    {
      label: 'Typical scale',
      value: 'From backyard flocks to intensive commercial operations',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Quail production is generally split between egg-laying operations and meat production, with the species’ rapid life cycle making it attractive for both commercial enterprises and hobbyist or smallholder keeping.',
        },
      ],
    },
    {
      id: 'types-and-breeds',
      heading: 'Types and breeds',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Layer strains',
              description: 'Selected for early, sustained egg production.',
            },
            {
              term: 'Meat (broiler) strains',
              description: 'Selected for rapid growth and carcass yield.',
            },
            {
              term: 'Game and conservation quail',
              description:
                'Species such as bobwhite quail reared regionally for hunting release or conservation programmes.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Breed and strain diversity is documented internationally, including through FAO’s Domestic Animal Diversity Information System (DAD-IS), which records poultry genetic resources by country.',
        },
      ],
    },
    {
      id: 'nutrition-and-feeding',
      heading: 'Nutrition and feeding',
      body: [
        {
          type: 'paragraph',
          text: 'Quail are fed formulated starter, grower, and layer rations with relatively high protein content to match their fast growth and early lay. Fresh water and consistent feed access are especially important given their small body size and rapid metabolism.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Nutrient requirements depend on production purpose (egg or meat), growth stage, and stocking system. Poultry nutrient requirement references and local advisers should guide ration formulation.',
        },
      ],
    },
    {
      id: 'health-and-welfare',
      heading: 'Health and welfare',
      body: [
        {
          type: 'paragraph',
          text: 'High stocking densities common in commercial quail systems make biosecurity, ventilation, and stress reduction particularly important, alongside routine monitoring for disease and appropriate space allowances.',
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
          text: 'Quail offer a quick production turnover and relatively low space and feed requirements, supporting their role in diversified poultry markets and smallholder income generation alongside larger commercial poultry species.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'livestock', slug: 'chickens' },
    { type: 'livestock', slug: 'pheasant' },
  ],
  connections: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'sorghum' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'climate', slug: 'temperature' },
  ],
  geographicScope:
    'Global overview; farming scale, regulation, and market structure for quail vary widely by country and region.',
  climateContext:
    'Commercially farmed quail are typically raised in climate-controlled or semi-controlled housing; extreme heat and cold both require management attention given their small body size.',
  limitations: [
    'This is a general species overview, not a system- or region-specific production guide.',
    'Health, medicine, and welfare practices are governed by local regulation and veterinary advice and are not detailed here.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Quail production systems and global role' },
    {
      sourceId: 'fao-dad-is',
      citedFor: 'Quail genetic resources and diversity',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Poultry nutrition and production research',
    },
    { sourceId: 'woah', citedFor: 'Animal health and welfare standards' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Quail',
    description:
      'A reference on farmed quail: rapid growth, egg and meat production, nutrition, health and welfare, and small-scale to commercial systems worldwide.',
    keywords: ['quail', 'Coturnix japonica', 'quail eggs', 'game bird farming'],
  },
  structuredData: { article: true },
};
