import type { ExtensionInstitution } from '@/types/extension';

/**
 * Publishers whose public extension mandate was checked, not assumed.
 *
 * A .edu domain proves nothing: a university research blog and a Cooperative
 * Extension service look alike from the outside. Each entry below records what
 * kind of body this is and the statement that establishes it, read from the
 * institution's own pages during the Wave 12 verification pass.
 *
 * `responsibleAuthorityId` is absent throughout, and that is correct: none of
 * these publishers is a government authority in the Wave 1–4 registry. Five are
 * land-grant universities and one is a levy board. Linking them to a department
 * of agriculture would invent a reporting line that does not exist.
 *
 * Publishers verified but NOT ingested, for reasons that are part of the
 * record: Washington State University Extension, Purdue Extension, South Dakota
 * State University Extension and Illinois Extension state no land-grant or
 * Cooperative Extension mandate on the pages checked, so none could be labelled
 * official here. UGA Cooperative Extension DOES state its mandate, but its
 * sitemap exposes only administrative and county-office pages — its
 * publications live in a separate system this pass could not reach by
 * compliant discovery. UC ANR states its Cooperative Extension mandate, but of
 * 34 substantive pages reachable from its sitemap, 28 were weekly crop
 * water-use bulletins and the remainder were programme and event pages: data
 * and announcements, not guidance.
 */
export const EXTENSION_INSTITUTIONS: ExtensionInstitution[] = [
  {
    id: 'psu-extension',
    officialName: 'Penn State Extension',
    mandate: 'land-grant-cooperative-extension',
    mandateBasis:
      'Penn State College of Agricultural Sciences describes Penn State Extension as "Building on the land-grant tradition". The extension site\'s own About page does not restate the land-grant basis, so the college page is the evidence used.',
    countryCode: 'USA',
    jurisdictionId: 'US-PA',
    homepageUrl: 'https://extension.psu.edu/',
    sourceReferences: ['ext-psu-extension'],
    lastVerifiedAt: '2026-08-27',
  },
  {
    id: 'ncsu-extension',
    officialName: 'NC State Extension',
    mandate: 'land-grant-cooperative-extension',
    mandateBasis:
      'NC State Extension states that NC State University and N.C. A&T State University run Cooperative Extension, staffing local offices in all 100 North Carolina counties and with the Eastern Band of Cherokee Indians.',
    countryCode: 'USA',
    jurisdictionId: 'US-NC',
    homepageUrl: 'https://www.ces.ncsu.edu/',
    sourceReferences: ['ext-ncsu-extension'],
    lastVerifiedAt: '2026-08-27',
  },
  {
    id: 'osu-extension',
    officialName: 'Ohio State University Extension',
    mandate: 'land-grant-cooperative-extension',
    mandateBasis:
      'OSU Extension states that it fulfils the land-grant mission of The Ohio State University, interpreting knowledge and research developed by Extension and other faculty at the Ohio Agricultural Research and Development Center and other land-grant universities.',
    countryCode: 'USA',
    jurisdictionId: 'US-OH',
    homepageUrl: 'https://extension.osu.edu/',
    sourceReferences: ['ext-osu-extension'],
    lastVerifiedAt: '2026-08-27',
  },
  {
    id: 'umd-extension',
    officialName: 'University of Maryland Extension',
    mandate: 'land-grant-cooperative-extension',
    mandateBasis:
      'University of Maryland Extension states that its educational programs and problem-solving assistance are based on the research and experience of land grant universities such as the University of Maryland, College Park.',
    countryCode: 'USA',
    jurisdictionId: 'US-MD',
    homepageUrl: 'https://extension.umd.edu/',
    sourceReferences: ['ext-umd-extension'],
    lastVerifiedAt: '2026-08-27',
  },
  {
    id: 'ahdb',
    officialName: 'Agriculture and Horticulture Development Board',
    mandate: 'statutory-levy-body',
    mandateBasis:
      'AHDB describes itself as "the independent, impartial public body that unlocks success in British agriculture", funded by a levy collected from British producers, with knowledge exchange among its stated purposes.',
    countryCode: 'GBR',
    homepageUrl: 'https://ahdb.org.uk/',
    sourceReferences: ['ext-ahdb'],
    lastVerifiedAt: '2026-08-27',
  },
];
