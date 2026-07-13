// Regenerates every content collection index by scanning its directory.
// Each entry file exports `const <camelCaseSlug>`; the array export name and
// element type per directory are configured below.
import { readdirSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const CONTENT = join(ROOT, 'content');

const DIRS = [
  ['crops', 'crops', 'CropContent'],
  ['soils', 'soils', 'SoilContent'],
  ['diseases', 'diseases', 'PlantDiseaseContent'],
  ['pests', 'pests', 'PestContent'],
  ['livestock', 'livestock', 'LivestockContent'],
  ['nutrients', 'nutrients', 'NutrientContent'],
  ['fertilizers', 'fertilizers', 'FertilizerContent'],
  ['soil-topics', 'soilTopics', 'SoilTopicContent'],
  ['machinery', 'machineryItems', 'MachineryContent'],
  ['climate', 'climateFactors', 'ClimateContent'],
  ['farming-systems', 'farmingSystems', 'FarmingSystemContent'],
  ['irrigation-methods', 'irrigationMethods', 'IrrigationMethodContent'],
  ['post-harvest', 'postHarvest', 'PostHarvestContent'],
  ['cultivars', 'cultivars', 'CultivarContent'],
  ['breeds', 'breeds', 'BreedContent'],
];

const camel = (base) =>
  base
    .split('-')
    .map((p, i) => (i === 0 ? p : p.charAt(0).toUpperCase() + p.slice(1)))
    .join('');

for (const [dir, varName, typeName] of DIRS) {
  const files = readdirSync(join(CONTENT, dir))
    .filter((f) => f.endsWith('.ts') && f !== 'index.ts')
    .sort();
  const names = files.map((f) => camel(f.replace(/\.ts$/, '')));
  const imports = files
    .map((f, i) => `import { ${names[i]} } from './${f.replace(/\.ts$/, '')}';`)
    .join('\n');
  const body = `import type { ${typeName} } from '@/types/content';\n${imports}\n\nexport const ${varName}: ${typeName}[] = [\n${names
    .map((n) => `  ${n},`)
    .join('\n')}\n];\n`;
  writeFileSync(join(CONTENT, dir, 'index.ts'), body);
  console.log(`${dir}: ${files.length} entries`);
}
