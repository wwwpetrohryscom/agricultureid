import type { CropContent } from '@/types/content';

export const swede: CropContent = {
  id: 'crop-swede',
  slug: 'swede',
  contentType: 'crop',
  title: 'Swede',
  scientificName: 'Brassica napus Napobrassica Group',
  alternativeNames: ['Rutabaga', 'Swedish turnip', 'Neep', 'Yellow turnip'],
  category: 'Root and tuber crop',
  subcategory: 'Brassica root grown for food and fodder',
  botanicalFamily: 'Brassicaceae (cabbage family)',
  lifecycle: 'Biennial grown as an annual',
  summary:
    "Swede is the same species as oilseed rape grown for a root, and it is the brassica root that stores: months in a clamp against a turnip's weeks, which is what makes it a winter feed rather than an autumn one.",
  introduction: [
    {
      type: 'paragraph',
      text: 'Swede is Brassica napus grown for a swollen root — the same amphidiploid species as oilseed rape, formed from a cross between Brassica rapa and Brassica oleracea with the chromosome sets of both. It is not a turnip, which is B. rapa, and the difference is not cosmetic.',
    },
    {
      type: 'paragraph',
      text: 'It takes a longer season than turnip and it keeps far longer: a swede crop lifted in autumn feeds through winter, where turnip has to be used as it comes. That storage behaviour is the whole basis of its place in northern livestock systems and in the kitchens of Scotland, Scandinavia and Finland.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Brassicaceae (cabbage family)' },
    {
      label: 'Placement',
      value:
        'Brassica napus Napobrassica Group — the same species as oilseed rape',
    },
    {
      label: 'Origin',
      value: 'An amphidiploid of Brassica rapa and Brassica oleracea',
    },
    {
      label: 'Distinguishing property',
      value: 'Stores for months where turnip stores for weeks',
    },
    {
      label: 'Season',
      value: 'Longer than turnip; sown in late spring for autumn lifting',
    },
    {
      label: 'Principal regions',
      value: 'Scotland, Scandinavia, Finland, Canada and the north of England',
    },
  ],
  sections: [
    {
      id: 'storage',
      heading: 'Storage is the crop',
      body: [
        {
          type: 'paragraph',
          text: 'A swede holds in a clamp or a cool store through winter with its flesh and flavour intact, and a turnip does not. That single difference decides which of the two a livestock system plants: a crop that keeps is winter feed that can be rationed, and a crop that does not is feed that has to be used when it is ready.',
        },
        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'napus',
      heading: 'The same species as oilseed rape',
      body: [
        {
          type: 'paragraph',
          text: 'Brassica napus arose from a cross between B. rapa and B. oleracea with both chromosome sets retained, and it carries both the oilseed and this root crop. The corpus publishes oilseed rape as the species page and swede as the root form, because a page about a crop grown for seed cannot carry a crop grown for a root.',
        },
      ],
    },
    {
      id: 'not-turnip',
      heading: 'Not a turnip, and the names reverse',
      body: [
        {
          type: 'paragraph',
          text: 'Swede is B. napus and turnip is B. rapa; swede is denser, yellow-fleshed, longer-season and keeps, and turnip is fast and does not. In Scotland "neep" means swede, in England it often means turnip, and North American usage says rutabaga. A record naming either has to be resolved to a species.',
        },
        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'season',
      heading: 'A long season for a root',
      body: [
        {
          type: 'paragraph',
          text: 'Sown in late spring and lifted in autumn, swede occupies ground for most of a growing season, which is the cost of its keeping quality. That makes it a planned crop rather than a catch crop, and it competes for land in a way that stubble turnips do not.',
        },
      ],
    },
    {
      id: 'clubroot',
      heading: 'Clubroot and a crowded rotation',
      body: [
        {
          type: 'paragraph',
          text: 'Clubroot resting spores persist for many years and swede is fully susceptible, so it competes for rotational space with oilseed rape, brassica vegetables and turnip. In an arable rotation that already carries rape, adding swede shortens the interval between brassicas, and the interval is the control.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'powdery-mildew',
      heading: 'Foliar disease and the root',
      body: [
        {
          type: 'paragraph',
          text: 'Powdery mildew and dark leaf spot reduce the canopy and therefore the root, and because the crop is in the field for months the exposure is long. Cultivar resistance and interval between brassicas do more than anything applied late.',
        },
      ],
    },
    {
      id: 'fodder',
      heading: 'Fed and eaten',
      body: [
        {
          type: 'paragraph',
          text: 'A large share of the crop is livestock feed, lifted or grazed, and the rest is a vegetable with a strong regional identity — a fixture of Scottish and Nordic winter cooking. Production statistics that count only the vegetable trade understate the crop substantially.',
        },
      ],
    },
    {
      id: 'waxing',
      heading: 'Handled like a keeper',
      body: [
        {
          type: 'paragraph',
          text: 'Swedes for the fresh market are commonly waxed to slow moisture loss, which is a handling step turnip does not get because turnip is not held long enough to need it. The wax is a shelf-life decision and it changes how the root is displayed and sold.',
        },
      ],
    },
    {
      id: 'cold',
      heading: 'Cold is not the limit',
      body: [
        {
          type: 'paragraph',
          text: 'The crop tolerates frost in the field and its flavour is commonly held to improve after one, so lifting can be delayed into cold weather. What limits it is season length at the start rather than cold at the end, which is the reverse of most root crops.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'clubroot' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'downy-mildew' },
    { type: 'plant-disease', slug: 'black-rot-of-crucifers' },
    { type: 'plant-disease', slug: 'sclerotinia' },
  ],
  commonPests: [
    { type: 'pest', slug: 'flea-beetles' },
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'cabbage-looper' },
    { type: 'pest', slug: 'diamondback-moth' },
    { type: 'pest', slug: 'cutworms' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'luvisol' },
    { type: 'soil', slug: 'podzol' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'nutrient', slug: 'sulfur' },
    { type: 'nutrient', slug: 'boron' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'growing-season' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'machinery', slug: 'seed-drill' },
    { type: 'machinery', slug: 'potato-harvester' },
    { type: 'post-harvest', slug: 'clamp-storage' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'waxing' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'turnip' },
    { type: 'crop', slug: 'oilseed-rape' },
    { type: 'crop', slug: 'cabbage' },
  ],
  glossaryTerms: ['annual-crop', 'crop-rotation'],
  geographicScope:
    'Northern Europe — Scotland, Scandinavia, Finland and northern England — together with Canada, and smaller production elsewhere in the temperate north.',
  climateContext:
    'Cool-season biennial grown as an annual; frost-tolerant in the field and limited by season length rather than by cold.',
  limitations: [
    'Common names for swede and turnip differ between countries and in places reverse; records must be resolved to a species.',
    'Production statistics frequently count only the vegetable trade and understate the fodder crop.',
    'Authorised control products are jurisdictional.',
  ],
  sourceReferences: [
    { sourceId: 'ahdb', citedFor: 'Fodder and vegetable brassica agronomy' },
    { sourceId: 'fao', citedFor: 'Root and fodder crop production context' },
    { sourceId: 'cabi', citedFor: 'Brassica napus compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'faostat', citedFor: 'Production statistics' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Swede',
    description:
      'Brassica napus Napobrassica Group as a crop: storage that outlasts turnip by months, the same species as oilseed rape, clubroot and reversing names.',
    keywords: [
      'swede',
      'rutabaga',
      'Brassica napus',
      'Napobrassica',
      'fodder brassica',
    ],
  },
  structuredData: { article: true },
};
