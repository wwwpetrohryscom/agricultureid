import type { Metadata } from 'next';
import { HubIndex } from '@/components/content/HubIndex';
import { cropsSorted } from '@/lib/content/registry';
import { buildMetadata } from '@/lib/seo/metadata';

const TITLE = 'Crops';
const PATH = '/crops';
const DESCRIPTION =
  'Field, cereal, oilseed, and horticultural crops — with botanical classification, climate and soil requirements, agronomy, and associated pests and diseases.';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'Reference entries on major crops: classification, climate and soil requirements, agronomy, nutrition, diseases, pests, harvest, and uses — each fully sourced.',
  path: PATH,
});

export default function CropsPage() {
  return (
    <HubIndex
      title={TITLE}
      path={PATH}
      description={DESCRIPTION}
      items={cropsSorted()}
      note="Agronomic details such as sowing dates, input rates, and yields are highly region-specific. Entries describe principles and requirements rather than universal prescriptions."
    />
  );
}
