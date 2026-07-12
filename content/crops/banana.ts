import type { CropContent } from '@/types/content';

export const banana: CropContent = {
  id: 'crop-banana',
  slug: 'banana',
  contentType: 'crop',
  title: 'Banana',
  scientificName:
    'Musa acuminata and Musa balbisiana and their interspecific hybrids; most dessert cultivars are triploid Musa acuminata (AAA group) types such as Cavendish',
  alternativeNames: ['Dessert banana', 'Plantain (cooking types)'],
  category: 'Fruit crop',
  subcategory: 'Tropical perennial herb',
  botanicalFamily: 'Musaceae (banana family)',
  lifecycle: 'Perennial',
  summary:
    'Banana is a large, perennial, herbaceous plant grown throughout the tropics for its edible fruit. Plantings are propagated vegetatively and regrow from the underground rhizome across successive cropping cycles.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Banana is not a tree in the botanical sense but a giant perennial herb: its upright "trunk" is a pseudostem formed from tightly rolled leaf sheaths rather than woody tissue. After the plant flowers and produces a bunch of fruit, that pseudostem is cut down, and a new shoot (sucker) arising from the underground rhizome, or "mat," continues production in a ratoon cycle.',
    },
    {
      type: 'paragraph',
      text: "Most commercial dessert banana cultivars are sterile triploids propagated entirely vegetatively, through suckers or tissue-culture plantlets, rather than by seed. This genetic uniformity supports consistent fruit quality but also limits the crop's genetic diversity against pests and diseases.",
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Musaceae (banana family)' },
    {
      label: 'Life cycle',
      value: 'Perennial herbaceous plant, propagated vegetatively',
    },
    { label: 'Main species', value: 'Musa acuminata, Musa balbisiana' },
    {
      label: 'Primary uses',
      value: 'Fresh dessert fruit, cooking plantains, processed products',
    },
    {
      label: 'Climate',
      value: 'Tropical; frost-sensitive and intolerant of cold temperatures',
    },
    {
      label: 'Soil preference',
      value: 'Deep, fertile, well-drained loams with good moisture retention',
      note: 'Tolerance varies by cultivar and local growing conditions.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Banana is among the most important fruit crops globally, grown both for export markets, largely as dessert Cavendish-type bananas, and for local consumption, where a wide diversity of dessert and cooking types (plantains) is grown by smallholders.',
        },
        {
          type: 'paragraph',
          text: 'Because the crop is a perennial that regrows from its rhizome, a single planting can be cropped for multiple cycles before replanting is needed, though yield and vigor can decline over successive ratoons without good management.',
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
            { term: 'Family', description: 'Musaceae (banana family)' },
            { term: 'Genus', description: 'Musa' },
            {
              term: 'Principal species/hybrids',
              description:
                'Musa acuminata and Musa balbisiana, and their interspecific hybrids',
            },
            {
              term: 'Growth habit',
              description:
                'Giant perennial herb with a pseudostem of leaf sheaths, propagated by suckers or tissue culture',
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
          text: 'Banana originates from Southeast Asia and the island regions of New Guinea, where wild Musa species were domesticated and hybridized over thousands of years. It subsequently spread across the tropics of Asia, Africa, and eventually the Americas and the Pacific.',
        },
        {
          type: 'paragraph',
          text: 'Banana is now grown throughout the humid and sub-humid tropics, with major production concentrated in tropical Asia, Latin America, and Africa. Production and trade figures are compiled by FAO and should be taken from those primary datasets.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Banana requires consistently warm, humid, tropical conditions and grows poorly, or not at all, where temperatures fall much below its cold threshold. It has essentially no frost tolerance, and even brief exposure to freezing temperatures can kill above-ground growth.',
        },
        {
          type: 'paragraph',
          text: "High humidity and rainfall, or supplemental irrigation, support the crop's large leaf area and continuous vegetative and reproductive growth.",
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: "Banana performs best on deep, fertile, well-drained loam soils with good organic matter and moisture-holding capacity, reflecting the crop's high water and nutrient demand and shallow, relatively fragile root system.",
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Poor drainage restricts rooting and increases susceptibility to root and rhizome diseases. Site suitability should be assessed against local soil survey information.',
        },
      ],
    },
    {
      id: 'plantation-establishment',
      heading: 'Plantation establishment and management',
      body: [
        {
          type: 'paragraph',
          text: 'New plantings are established from disease-screened suckers or, increasingly, tissue-culture plantlets, which provide more uniform and disease-free planting material. Spacing and mat management balance yield with airflow and light penetration.',
        },
        {
          type: 'list',
          items: [
            'Selection of clean, disease-free planting material (suckers or tissue-culture plants)',
            'Mat management, thinning follower suckers to maintain productive ratoon cycles',
            'Windbreaks or spacing adjustments, since the large leaf canopy is vulnerable to wind damage',
            'Bunch and leaf management practices adapted to local pest and disease pressure',
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
          text: 'Banana is a heavy potassium feeder, since potassium is closely linked to bunch fill and fruit quality, alongside substantial nitrogen requirements to sustain its rapid vegetative growth and large leaf area.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer rates, timing, and forms should follow local soil and leaf analysis and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Banana has a high and fairly continuous water requirement given its large leaf area and lack of true dormancy. In regions with a marked dry season, irrigation is used to maintain steady growth and bunch development.',
        },
        {
          type: 'paragraph',
          text: 'Drip irrigation is increasingly used in commercial plantations to apply water efficiently to the root zone while limiting the humid canopy conditions that favor some foliar diseases.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Fusarium wilt, historically known as Panama disease, is a soil-borne fungal disease that can persist in fields for many years and has devastated susceptible cultivars in several regions. Anthracnose is a widespread fungal disease affecting ripening and stored fruit. Plant-parasitic nematodes, including root-knot nematode, damage the root system, and thrips can scar developing fruit.',
        },
        {
          type: 'paragraph',
          text: 'Management relies on clean planting material, resistant or tolerant cultivars where available, sanitation to limit soil-borne inoculum spread, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Banana bunches are typically harvested green, at a physiological maturity stage suited to the intended market and transport distance, and ripened under controlled conditions afterward. Harvest and post-harvest handling are timed to minimize bruising of the fruit and pseudostem damage to the mat.',
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
            'Fresh dessert fruit consumption',
            'Cooking plantains and other starchy cooking types as a staple food',
            'Processing into chips, purée, flour, and other products',
            'Pseudostem and leaves used locally for fiber, fodder, or packaging',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'fusarium-wilt' },
  ],
  commonPests: [
    { type: 'pest', slug: 'root-knot-nematode' },
    { type: 'pest', slug: 'thrips' },
  ],
  suitableSoils: [{ type: 'soil', slug: 'loam-soil' }],
  connections: [
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'fertilizer', slug: 'muriate-of-potash' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'humidity' },
    { type: 'farming-system', slug: 'agroforestry' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'mango' },
    { type: 'crop', slug: 'orange' },
  ],
  glossaryTerms: ['perennial-crop', 'yield', 'integrated-pest-management'],
  geographicScope:
    'Global overview of tropical production. Cultivar choice and management practices vary widely by region.',
  climateContext:
    'Tropical perennial herb with no frost tolerance, requiring consistently warm, humid conditions.',
  limitations: [
    'Cultivar diversity and disease pressure (including Fusarium wilt strains) vary substantially by region and are not detailed here.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Global banana production and food-security role',
    },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'cabi',
      citedFor: 'Banana disease and pest compendium data',
    },
    {
      sourceId: 'cgiar',
      citedFor: 'Banana genetic resources and disease research',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Banana',
    description:
      'A structured, evidence-based reference on banana: classification, climate needs, plantation establishment, nutrition, diseases, pests, and uses.',
    keywords: ['banana', 'Musa acuminata', 'plantain', 'tropical fruit'],
  },
  structuredData: { article: true },
};
