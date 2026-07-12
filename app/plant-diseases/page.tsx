import type { Metadata } from 'next';
import { HubIndex } from '@/components/content/HubIndex';
import { diseasesSorted } from '@/lib/content/registry';
import { buildMetadata } from '@/lib/seo/metadata';

const TITLE = 'Plant Diseases';
const PATH = '/plant-diseases';
const DESCRIPTION =
  'Fungal, oomycete, bacterial, and other plant diseases — identification, biology, affected hosts, risk factors, and prevention principles.';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'Reference entries on major plant diseases: identification, biology, affected hosts, risk factors, and prevention and monitoring principles — fully sourced.',
  path: PATH,
});

export default function PlantDiseasesPage() {
  return (
    <HubIndex
      title={TITLE}
      path={PATH}
      description={DESCRIPTION}
      items={diseasesSorted()}
      note="These entries explain identification and prevention principles. They do not provide chemical treatment instructions; any control measures must follow locally authorized guidance and product labels."
    />
  );
}
