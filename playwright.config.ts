import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './src/tests',
  timeout: 100 * 1000,
  expect: {
    timeout: 15 * 1000
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html', { outputFolder: 'test-report/html-report', open: 'always' }],
    ['json', { outputFile: 'test-report/json/test-results.json' }]
  ],
  use: {
    headless: true,
    //viewport: { width: 1280, height: 720 },
    actionTimeout: 0,
    baseURL: 'https://my-stage.tractive.com',
    ignoreHTTPSErrors: true,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
    // {
    //   name: 'chromium - mobile',
    //   use: { ...devices['Galaxy S21'] }, 
    // },
    // {
    //   name: 'firefox - mobile',
    //   use: { ...devices['Galaxy S21'] }, 
    // },
    // {
    //   name: 'webkit - mobile',
    //   use: { ...devices['iPhone 15'] }, 
    // },
   
  ],
};

export default config;