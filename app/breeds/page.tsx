import type { Metadata } from 'next';
import { HubIndex } from '@/components/content/HubIndex';
import { breedsSorted } from '@/lib/content/registry';
import { buildMetadata } from '@/lib/seo/metadata';

const TITLE = 'Breeds';
const PATH = '/breeds';
const DESCRIPTION =
  'Livestock breeds tied to their parent species, origin, herd books, conservation status, uses, and authoritative sources such as FAO DAD-IS.';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'Structured livestock-breed records — parent species, origin, breed type, conservation status, uses, and characteristics, each sourced.',
  path: PATH,
});

export default function BreedsPage() {
  return (
    <HubIndex
      title={TITLE}
      path={PATH}
      description={DESCRIPTION}
      items={breedsSorted()}
      note="Breed characteristics vary with strain, management, and environment. Conservation/risk status is date-specific and reported per source (e.g. FAO DAD-IS); it is not a fixed property of the breed."
    />
  );
}
