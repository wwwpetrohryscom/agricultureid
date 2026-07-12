import type { Metadata } from 'next';
import { HubIndex } from '@/components/content/HubIndex';
import { pestsSorted } from '@/lib/content/registry';
import { buildMetadata } from '@/lib/seo/metadata';

const TITLE = 'Pests';
const PATH = '/pests';
const DESCRIPTION =
  'Insect and arthropod pests of crops — biology, life cycles, damage, affected hosts, monitoring, and integrated management principles.';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'Reference entries on crop pests: identification, biology and life cycle, damage, monitoring, and integrated pest management principles — fully sourced.',
  path: PATH,
});

export default function PestsPage() {
  return (
    <HubIndex
      title={TITLE}
      path={PATH}
      description={DESCRIPTION}
      items={pestsSorted()}
      note="These entries emphasise integrated pest management. They do not provide chemical treatment instructions; any control must follow locally authorized guidance and product labels."
    />
  );
}
