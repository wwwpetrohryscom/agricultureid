import type { CropContent } from '@/types/content';

export const chicory: CropContent = {
  id: 'crop-chicory',
  slug: 'chicory',
  contentType: 'crop',
  title: 'Chicory',
  scientificName: 'Cichorium intybus',
  alternativeNames: ['Witloof', 'Belgian endive', 'Radicchio', 'Succory'],
  category: 'Vegetable and forage crop',
  subcategory: 'Leaf, root, and forage chicory',
  botanicalFamily: 'Asteraceae (daisy family)',
  lifecycle: 'Perennial, commonly grown as an annual or biennial',
  summary:
    'Chicory is a versatile crop of the daisy family grown as a leafy salad vegetable, a forcing crop for Belgian endive, a root crop for inulin and a coffee substitute, and as a productive forage.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Chicory is a hardy plant of the daisy family cultivated in several very different forms. Leaf chicories such as radicchio and sugarloaf are grown as salad vegetables; witloof chicory is forced in darkness to produce the pale, tender chicons known as Belgian endive; root chicory is grown for its inulin-rich taproot, used as a coffee substitute and a source of dietary fiber; and forage chicory is grown as a productive pasture herb.',
    },
    {
      type: 'paragraph',
      text: 'All these types share the same species, Cichorium intybus, and are characterised by a deep taproot, a milky latex, and a bitter principle that is prized in salad types and reduced in forage and forcing types. The plant is deep-rooted and drought-tolerant, and it is closely related to endive (Cichorium endivia) and to lettuce within the daisy family.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Asteraceae (daisy family)' },
    {
      label: 'Life cycle',
      value: 'Perennial, commonly grown as an annual or biennial',
    },
    { label: 'Scientific name', value: 'Cichorium intybus' },
    {
      label: 'Primary uses',
      value:
        'Salad leaves, forced witloof chicons, inulin-rich roots, and forage',
    },
    {
      label: 'Climate',
      value:
        'Cool-season crop; hardy and deep-rooted, tolerant of a range of conditions',
    },
    {
      label: 'Soil preference',
      value: 'Deep, friable, well-drained loams for good root development',
      note: 'Deep, stone-free soils favor the straight roots needed for forcing and processing.',
    },
    {
      label: 'Notable trait',
      value:
        'Roots are rich in inulin; leaves contain characteristic bitter compounds',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Chicory is grown for markedly different products depending on type. Leaf and heading types are salad and cooking vegetables; witloof is a two-stage crop in which roots are grown, lifted, and then forced in the dark to produce chicons; root chicory is processed for inulin and roasted as a coffee additive or substitute; and forage chicory is grazed or cut as a nutritious pasture herb.',
        },
        {
          type: 'paragraph',
          text: 'This versatility means agronomy varies widely by end use, from intensive vegetable production to broad-acre root and forage cropping.',
        },
      ],
    },
    {
      id: 'botanical-classification',
      heading: 'Botanical classification',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Family',
              description: 'Asteraceae (daisy or sunflower family)',
            },
            { term: 'Genus and species', description: 'Cichorium intybus' },
            {
              term: 'Growth habit',
              description:
                'Deep-taprooted herb with a basal rosette of leaves, milky latex, and, when it bolts, tall stems of blue flowers',
            },
            {
              term: 'Main cultivated groups',
              description:
                'Leaf (radicchio, sugarloaf), witloof (forcing), root (inulin and coffee), and forage chicory',
            },
          ],
        },
      ],
    },
    {
      id: 'origin-and-distribution',
      heading: 'Origin and distribution',
      body: [
        {
          type: 'paragraph',
          text: 'Chicory is native to Europe and western Asia and has a long history of use. Leaf and witloof types are associated especially with Italy, Belgium, and neighboring countries, root chicory with parts of Europe, and forage chicory with temperate pastoral regions worldwide.',
        },
        {
          type: 'paragraph',
          text: 'Statistics on planted area and production for the various chicory types are compiled by FAO and national agencies and should be consulted directly for current figures.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Chicory is a cool-season crop that grows well in temperate climates and tolerates cold, with many types being hardy. Cool conditions favor leaf quality and reduce excessive bitterness in salad types, while the crop can bolt if exposed to cold followed by long days.',
        },
        {
          type: 'paragraph',
          text: 'Deep rooting gives chicory good drought tolerance, an advantage for forage chicory in dry summers, though consistent moisture supports tender growth in vegetable types.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Chicory grows best on deep, friable, well-drained loams that allow the taproot to develop straight and unforked. Stone-free, evenly textured soils are particularly important for witloof and root chicory, where root shape and size affect quality and processing.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Deep, stone-free soils help produce the straight, well-formed roots needed for witloof forcing and for inulin and coffee-root processing.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Chicory is direct-seeded, with type-specific management. Salad types are grown to heading or leaf stage; witloof roots are grown, lifted, and then forced in darkness; root chicory is grown for bulk root yield; and forage chicory is established in pastures. Weed control during early growth is important across types.',
        },
        {
          type: 'list',
          items: [
            'Type and cultivar chosen for salad, forcing, root, or forage use',
            'Deep, well-prepared, stone-free seedbed for root-forming types',
            'For witloof, a two-stage system of root production followed by forcing of chicons',
            'Weed management during slow early establishment',
          ],
        },
      ],
    },
    {
      id: 'nutrient-considerations',
      heading: 'Nutrient considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Balanced nutrition supports leaf and root growth, with excessive nitrogen tending to reduce root quality in witloof and root types and to promote soft growth in salad types. Deep rooting allows chicory to access nutrients and moisture from lower soil layers.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer rates and timing should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Chicory’s deep taproot gives it good drought tolerance, which is valued in forage chicory during dry summers. Vegetable types benefit from consistent moisture for tender, uniform growth, and irrigation is used where rainfall is insufficient.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Sclerotinia rot is a significant disease of chicory, affecting roots and crowns and causing losses in the field, in stored roots, and during forcing, while powdery mildew, downy mildew, and bacterial soft rots also occur. Good drainage, rotation, and sanitation help manage these problems.',
        },
        {
          type: 'paragraph',
          text: 'Aphids, leaf miners, cutworms, and slugs are among the pests affecting the crop, with leaf-feeding pests of particular concern for salad types. Management combines rotation, sanitation, monitoring, and, where warranted, locally authorized controls applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Salad chicories are cut at the heading or leaf stage; witloof roots are lifted, trimmed, and forced to produce chicons that are harvested in the dark; root chicory is lifted at full root development for processing; and forage chicory is grazed or cut over the season.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'list',
          items: [
            'Salad and cooking vegetable in the form of radicchio, witloof (Belgian endive), and other leaf types',
            'Roasted root used as a caffeine-free coffee substitute or additive',
            'Inulin extracted from the root as a dietary fiber and food ingredient',
            'Forage chicory grazed or cut as a nutritious, deep-rooted pasture herb',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'sclerotinia' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'leaf-miners' },
    { type: 'pest', slug: 'slugs' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'silt-soil' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'lettuce' },
    { type: 'crop', slug: 'artichoke' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'climate', slug: 'drought' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'post-harvest', slug: 'cold-storage' },
  ],
  glossaryTerms: [
    'annual-crop',
    'cultivar',
    'crop-rotation',
    'forage',
    'yield',
  ],
  geographicScope:
    'Global overview. Salad and witloof types are prominent in Europe; forage chicory is used in temperate pastoral regions worldwide.',
  climateContext:
    'Cool-season, deep-rooted, drought-tolerant crop; cold exposure followed by long days can trigger bolting.',
  limitations: [
    'The several chicory types differ greatly in management and end use and are not reduced to universal guidance here.',
    'Bitterness and forcing behavior are strongly type- and management-dependent.',
    'Disease and pest control should follow locally authorized guidance and product labels.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of chicory as a vegetable, root, and forage crop',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Chicory crop, disease, and pest compendium data',
    },
    { sourceId: 'rhs', citedFor: 'Chicory and witloof cultivation guidance' },
    { sourceId: 'britannica', citedFor: 'Botanical description and uses' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Chicory (Cichorium intybus)',
    description:
      'An evidence-based reference on chicory: leaf, witloof, root, and forage types, soils, agronomy, inulin, sclerotinia, pests, and diverse uses.',
    keywords: ['chicory', 'Cichorium intybus', 'witloof', 'radicchio'],
  },
  structuredData: { article: true },
};
