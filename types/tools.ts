/**
 * Phase 3C — versioned formula registry types. Calculators resolve formulas by
 * id/version and never duplicate the maths in a component.
 */

export interface FormulaTestCase {
  inputs: Record<string, number | string>;
  /** Expected primary output value. */
  expect: number;
  /** Absolute tolerance for the comparison (default very small). */
  tolerance?: number;
  note?: string;
}

export interface CalcFormula {
  formulaId: string;
  name: string;
  /** Mathematical-definition version. */
  formulaVersion: string;
  /** Implementation version (bump on code change, even if maths is unchanged). */
  calcVersion: string;
  /** Human-readable expression. */
  expression: string;
  /** Input keys the formula consumes (with units in the label). */
  inputs: { key: string; label: string; unit?: string }[];
  output: { label: string; unit: string };
  assumptions: string[];
  /** Geographic / crop / system applicability. */
  applicability: string;
  /** Source registry ids supporting the formula (must resolve). */
  sourceIds: string[];
  limitations: string[];
  testCases: FormulaTestCase[];
  lastReviewedAt: string;
  /** Pure computation. Throws on invalid input (e.g. divide-by-zero). */
  compute: (inputs: Record<string, number | string>) => number;
}

export type ToolCategory =
  'nutrition' | 'planting' | 'water' | 'climate' | 'conversion';

export interface ToolField {
  key: string;
  label: string;
  type: 'number' | 'select';
  unit?: string;
  min?: number;
  max?: number;
  step?: number;
  required?: boolean;
  help?: string;
  default?: string;
  options?: { value: string; label: string }[];
  /** Show this field only when the predicate holds (conditional inputs). */
  showIf?: (values: Record<string, string>) => boolean;
}

export interface ToolOutput {
  label: string;
  value: string;
  unit?: string;
  note?: string;
}

export interface ToolResult {
  outputs: ToolOutput[];
  /** Which formula(s) were used, for the formula panel. */
  formulaIds: string[];
  note?: string;
  error?: string;
}

export interface ToolConfig {
  slug: string;
  title: string;
  category: ToolCategory;
  purpose: string;
  /** Primary formula(s) shown in the formula panel. */
  formulaIds: string[];
  fields: ToolField[];
  /** Pure: maps field values (strings from inputs) to a result. */
  compute: (values: Record<string, string>) => ToolResult;
  /** Extra tool-specific limitations (beyond the formulas'). */
  limitations?: string[];
}
