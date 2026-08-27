/**
 * Independent target sets — written from the instruments that constitute them.
 *
 * A completeness check whose target comes from the thing being measured always
 * passes. "AgricultureID covers 28 of the 28 countries AgricultureID covers" is
 * a tautology dressed as a metric, and it is the easiest possible mistake to
 * make here because the corpus already holds a list of jurisdictions.
 *
 * So these lists are written out longhand from the membership of the sets
 * themselves — the EU's Member States, the states of the United States, the
 * provinces and territories of Canada, the states and territories of Australia
 * — and nothing in this file reads `data/`. If the corpus and a list here
 * disagree, the list is the reference and the corpus is the finding.
 *
 * ## What is NOT a closed set
 *
 * There is no target list of "all countries", because coverage of an
 * open-ended set cannot be a fraction. AgricultureID could in principle name
 * every EU Member State's pesticide register; it could not name every crop
 * calendar on earth, and reporting "172 of ?" as a percentage would invent a
 * denominator. Open-ended layers report what the corpus holds and say so.
 */

export interface TargetSet {
  id: string;
  label: string;
  /** Members, by the code the corpus uses for them. */
  members: readonly string[];
  /** The instrument the membership comes from. */
  basis: string;
}

export const TARGET_SETS: readonly TargetSet[] = [
  {
    id: 'eu-member-states',
    label: 'European Union Member States',
    basis:
      'The 27 Member States of the European Union following the withdrawal of the United Kingdom on 31 January 2020.',
    members: [
      'AUT', 'BEL', 'BGR', 'HRV', 'CYP', 'CZE', 'DNK', 'EST', 'FIN', 'FRA',
      'DEU', 'GRC', 'HUN', 'IRL', 'ITA', 'LVA', 'LTU', 'LUX', 'MLT', 'NLD',
      'POL', 'PRT', 'ROU', 'SVK', 'SVN', 'ESP', 'SWE',
    ],
  },
  {
    id: 'us-states',
    label: 'States of the United States',
    basis:
      'The 50 states of the United States. The District of Columbia and the territories are not states and are not counted here.',
    members: [
      'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
      'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
      'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
      'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
      'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY',
    ],
  },
  {
    id: 'ca-subdivisions',
    label: 'Provinces and territories of Canada',
    basis:
      'Ten provinces and three territories under the Constitution Acts.',
    members: [
      'AB', 'BC', 'MB', 'NB', 'NL', 'NS', 'NT', 'NU', 'ON', 'PE',
      'QC', 'SK', 'YT',
    ],
  },
  {
    id: 'au-subdivisions',
    label: 'States and territories of Australia',
    basis:
      'Six states and two internal territories under the Commonwealth of Australia Constitution Act.',
    members: ['NSW', 'QLD', 'SA', 'TAS', 'VIC', 'WA', 'ACT', 'NT'],
  },
];

export const TARGET_SET_MAP: ReadonlyMap<string, TargetSet> = new Map(
  TARGET_SETS.map((t) => [t.id, t]),
);
