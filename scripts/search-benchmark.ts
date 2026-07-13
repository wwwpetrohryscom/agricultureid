/**
 * Search benchmark report (ranking quality, not just binary). Deterministic.
 * Run: npm run search:benchmark
 */
import { benchmarkIndex, BENCHMARKS } from '../lib/search/benchmark';
import { search } from '../lib/search/engine';

function main() {
  const idx = benchmarkIndex();
  let top1 = 0;
  let top3 = 0;
  let miss = 0;
  console.log('\nAgricultureID — search benchmark\n');
  for (const b of BENCHMARKS) {
    const r = search(idx, b.query, { limit: 5 });
    const match = (d: { title: string; type: string }) =>
      (b.titleIncludes?.some((s) =>
        d.title.toLowerCase().includes(s.toLowerCase()),
      ) ??
        false) ||
      (b.types?.includes(d.type) ?? false);
    const rank = r.results.findIndex((x) => match(x.doc));
    const cls =
      rank === 0
        ? 'TOP-1'
        : rank >= 1 && rank <= 2
          ? 'TOP-3'
          : rank >= 0
            ? 'found>3'
            : 'MISS';
    if (rank === 0) {
      top1++;
      top3++;
    } else if (rank >= 1 && rank <= 2) top3++;
    else if (rank < 0) miss++;
    const top = r.results[0];
    console.log(
      `  ${b.query.padEnd(26)} → ${(top ? `${top.doc.title} [${top.doc.type}]` : '(none)').padEnd(34)} ${cls}`,
    );
  }
  const n = BENCHMARKS.length;
  console.log(
    `\n  TOP-1: ${top1}/${n} (${((top1 / n) * 100).toFixed(0)}%) · TOP-3: ${top3}/${n} · MISS: ${miss}\n`,
  );
  if (miss > 0) process.exit(1);
}

main();
