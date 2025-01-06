import { defineConfig } from 'cypress';
import { GenerateCtrfReport } from 'cypress-ctrf-json-reporter';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    supportFile: 'cypress/e2e/configs/E2e.ts',
    specPattern: 'cypress/e2e/**/*.cy.{ts,tsx}',
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
    supportFile: 'cypress/component/configs/Component.ts',
    indexHtmlFile: 'cypress/component/component-index.html',
    specPattern: '**/src/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on) {
      new GenerateCtrfReport({
        on,
        outputFile: 'cypress-result.json',
        outputDir: 'cypress-result',
      });
    },
  },
});
