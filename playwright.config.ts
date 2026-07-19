import { defineConfig } from '@playwright/test';

/**
 * Playwright config for the consent e2e tests (e2e/*.spec.ts).
 *
 * Not part of the default `npm test` / CI gate — it needs a browser binary
 * (`npx playwright install chromium`). It builds and serves the production app,
 * then drives a real browser to prove the analytics-consent behaviour. Kept
 * separate from the Vitest `tests/` suite (different runner, different dir).
 */
const PORT = 3123;

export default defineConfig({
  testDir: './e2e',
  timeout: 60_000,
  fullyParallel: false,
  use: {
    baseURL: `http://localhost:${PORT}`,
    trace: 'on-first-retry',
  },
  webServer: {
    command: `npm run build && npx next start -p ${PORT}`,
    url: `http://localhost:${PORT}`,
    timeout: 240_000,
    reuseExistingServer: !process.env.CI,
  },
});
