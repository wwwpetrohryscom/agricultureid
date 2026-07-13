// Regenerates data/geo/profiles/index.ts by scanning the directory.
// Each entry file exports `const <camelCaseSlug>` (slug = filename).
import { readdirSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const DIR = join(
  dirname(fileURLToPath(import.meta.url)),
  '..',
  'data',
  'geo',
  'profiles',
);
const camel = (base) =>
  base
    .split('-')
    .map((p, i) => (i === 0 ? p : p.charAt(0).toUpperCase() + p.slice(1)))
    .join('');

const files = readdirSync(DIR)
  .filter((f) => f.endsWith('.ts') && f !== 'index.ts')
  .sort();
const names = files.map((f) => camel(f.replace(/\.ts$/, '')));
const imports = files
  .map((f, i) => `import { ${names[i]} } from './${f.replace(/\.ts$/, '')}';`)
  .join('\n');
const body = `import type { CountryAgricultureProfile } from '@/types/geo';\n${imports}\n\nexport const countryProfiles: CountryAgricultureProfile[] = [\n${names
  .map((n) => `  ${n},`)
  .join('\n')}\n];\n`;
writeFileSync(join(DIR, 'index.ts'), body);
console.log(`geo profiles: ${files.length} entries`);
