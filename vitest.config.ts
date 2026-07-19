import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  // Use React's automatic JSX runtime so components/tests need no React import
  // (matching the Next.js app configuration).
  esbuild: { jsx: 'automatic', jsxImportSource: 'react' },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('.', import.meta.url)),
    },
  },
  test: {
    // Node by default; component tests (*.test.tsx) opt into jsdom below.
    environment: 'node',
    include: ['tests/**/*.test.{ts,tsx}'],
    environmentMatchGlobs: [['tests/**/*.test.tsx', 'jsdom']],
    // A concrete origin so jsdom enables a real, functional localStorage.
    environmentOptions: { jsdom: { url: 'http://localhost:3000/' } },
  },
});
