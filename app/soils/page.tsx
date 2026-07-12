import type { Metadata } from 'next';
import { HubIndex } from '@/components/content/HubIndex';
import { soilsSorted } from '@/lib/content/registry';
import { buildMetadata } from '@/lib/seo/metadata';

const TITLE = 'Soils';
const PATH = '/soils';
const DESCRIPTION =
  'Soil textures and types — their physical and chemical properties, management considerations, and crop suitability.';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'Reference entries on soil textures and types: properties, water and nutrient behaviour, management to protect structure, and crop suitability — fully sourced.',
  path: PATH,
});

export default function SoilsPage() {
  return (
    <HubIndex
      title={TITLE}
      path={PATH}
      description={DESCRIPTION}
      items={soilsSorted()}
      note="Texture classes are general descriptions. Individual fields vary and should be assessed with local soil survey information and testing."
    />
  );
}
