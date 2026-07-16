import type { Metadata } from 'next';
import Link from 'next/link';
import { EntryGrid } from '@/components/content/EntryGrid';
import { PageIntro } from '@/components/content/PageIntro';
import { SourceList } from '@/components/content/SourceList';
import { Container } from '@/components/ui/Container';
import { Prose } from '@/components/ui/Prose';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema/jsonld';
import { pageBreadcrumbs } from '@/lib/seo/breadcrumbs';
import { buildMetadata } from '@/lib/seo/metadata';

const TITLE = 'Logistics Concepts';
const PATH = '/logistics';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'How agricultural consignments physically move and stay intact: transport modes, handling, unitisation, chain integrity, facilities, and inspection.',
  path: PATH,
});

export default function LogisticsHubPage() {
  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description:
            'Reference descriptions of how agricultural consignments move and are kept intact.',
          path: PATH,
        })}
      />
      <PageIntro
        eyebrow="Logistics"
        title="Moving a consignment without losing it"
        lead="Agricultural cargo is not inert freight. It respires, absorbs moisture, ripens, taints, and settles, and every day in transit is a day of that happening. This section describes how consignments move — the modes, the handling, the units they travel in, and the conditions that have to hold — and what each operation can and cannot protect."
        crumbs={pageBreadcrumbs(TITLE, PATH)}
      />

      <Prose>
        <h2>Transport preserves; it does not improve</h2>
        <p>
          The single most useful thing to know about a logistics operation is
          the direction it works in. A reefer container holds a temperature; it
          does not un-warm a pallet that was loaded warm. A hold keeps a cargo
          dry; it does not dry it. Condition at loading is the ceiling for
          condition at discharge, which is why every entry here names the{' '}
          <Link href="/post-harvest">post-harvest operations</Link> it assumes
          were done first, and the{' '}
          <Link href="/quality-attributes">quality attributes</Link> it puts at
          stake.
        </p>
        <p>
          Logistics is the physical half of a trade. The contractual half — who
          arranges carriage, who bears the loss, who clears the goods — is
          described under <Link href="/trade">trade concepts</Link>, and the
          ways a chain fails are described under{' '}
          <Link href="/supply-chain-risks">supply-chain risks</Link>.
        </p>

        <h2>Transport modes are a class, not a separate section</h2>
        <p>
          Sea freight and palletisation are documented the same way and answer
          the same kind of question, so a mode is a class of logistics concept
          rather than its own route. Each entry states the cargo forms it
          applies to — dry bulk, liquid bulk, breakbulk, containerised,
          unitised, or live — because an operation apt for one form is often
          meaningless for another.
        </p>

        <h2>Every entry states its own limits</h2>
        <p>
          There is no single disclaimer that covers this section, because the
          honest limit differs per operation. Route, vessel, season, packaging,
          contract, and counterparty change what an operation achieves, and a
          generalised claim about any of them would be invented. Each entry
          therefore carries its own operational limitations, stated on the page
          alongside the description they qualify.
        </p>
        <p>
          AgricultureID is not a freight forwarder, carrier, broker, or
          inspection body, and books, quotes, and surveys nothing.
        </p>
      </Prose>

      <EntryGrid
        type="logistics-concept"
        path={PATH}
        heading="Logistics concepts A–Z"
        intro="Each entry covers what the operation is for, the cargo forms and commodities it applies to, the quality attributes at stake, the operations it depends on, the standards that govern it, the risks it is exposed to, and its own operational limits."
      />

      <SourceList
        references={[
          {
            sourceId: 'imo',
            citedFor:
              'Maritime carriage of cargo, including solid bulk cargo practice',
          },
          {
            sourceId: 'iata',
            citedFor:
              'Air cargo handling of perishable and temperature-controlled consignments',
          },
          {
            sourceId: 'gs1',
            citedFor: 'Supply-chain identification and traceability standards',
          },
        ]}
      />
    </Container>
  );
}
