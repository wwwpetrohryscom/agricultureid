import type { ContentBlock } from '@/types/content';

const CALLOUT_STYLES: Record<
  'note' | 'caution' | 'important',
  { wrap: string; label: string; heading: string }
> = {
  note: {
    wrap: 'border-forest-200 bg-forest-50',
    label: 'text-forest-700',
    heading: 'Note',
  },
  caution: {
    wrap: 'border-clay-300 bg-clay-50',
    label: 'text-clay-700',
    heading: 'Caution',
  },
  important: {
    wrap: 'border-olive-300 bg-olive-50',
    label: 'text-olive-800',
    heading: 'Important',
  },
};

function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case 'paragraph':
      return <p className="my-4 leading-7 text-ink-800">{block.text}</p>;

    case 'list':
      if (block.ordered) {
        return (
          <ol className="my-4 list-decimal space-y-1.5 pl-6 text-ink-800 marker:text-forest-500">
            {block.items.map((item, i) => (
              <li key={i} className="pl-1 leading-7">
                {item}
              </li>
            ))}
          </ol>
        );
      }
      return (
        <ul className="my-4 list-disc space-y-1.5 pl-6 text-ink-800 marker:text-forest-400">
          {block.items.map((item, i) => (
            <li key={i} className="pl-1 leading-7">
              {item}
            </li>
          ))}
        </ul>
      );

    case 'definitionList':
      return (
        <dl className="my-5 divide-y divide-parchment-200 overflow-hidden rounded-card border border-parchment-200">
          {block.items.map((item, i) => (
            <div
              key={i}
              className="grid gap-1 p-4 sm:grid-cols-[minmax(0,12rem)_1fr] sm:gap-4"
            >
              <dt className="font-semibold text-ink-900">{item.term}</dt>
              <dd className="leading-7 text-ink-700">{item.description}</dd>
            </div>
          ))}
        </dl>
      );

    case 'table':
      return (
        <figure className="my-6">
          <div className="overflow-x-auto rounded-card border border-parchment-200">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-parchment-100">
                  {block.columns.map((col, i) => (
                    <th
                      key={i}
                      scope="col"
                      className="border-b border-parchment-200 px-4 py-2.5 font-semibold text-ink-900"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, r) => (
                  <tr key={r} className="even:bg-parchment-50">
                    {row.map((cell, c) => (
                      <td
                        key={c}
                        className="border-b border-parchment-100 px-4 py-2.5 align-top text-ink-700"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.caption && (
            <figcaption className="mt-2 text-xs text-ink-500">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case 'callout': {
      const style = CALLOUT_STYLES[block.tone];
      return (
        <aside
          className={`my-5 rounded-card border-l-4 ${style.wrap} p-4`}
          role="note"
        >
          <p
            className={`text-xs font-bold uppercase tracking-wide ${style.label}`}
          >
            {block.title ?? style.heading}
          </p>
          <p className="mt-1.5 leading-7 text-ink-800">{block.text}</p>
        </aside>
      );
    }
  }
}

/** Renders an ordered array of structured content blocks. */
export function ContentBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </>
  );
}
