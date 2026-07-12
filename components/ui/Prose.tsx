import type { ReactNode } from 'react';

/** Readable long-form text column with consistent heading and link styling. */
export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="prose-content mt-8 max-w-prose space-y-4 [&_h2]:mb-2 [&_h2]:mt-8 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-ink-900 [&_h3]:mb-1 [&_h3]:mt-6 [&_h3]:font-serif [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-ink-900 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-6 [&_ul]:marker:text-forest-400">
      {children}
    </div>
  );
}
