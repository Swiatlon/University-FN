import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig({
  base: '',
  plugins: [react(), svgrPlugin({}), tsconfigPaths()],
  resolve: {
    alias: {
      assets: '/src/assets',
      components: '/src/components',
      configs: '/src/configs',
      contexts: '/src/contexts',
      contract: '/src/contract',
      hooks: '/src/hooks',
      i18n: "/src/i18n",
      layouts: '/src/layouts',
      middlewares: "/src/middlewares",
      routes: '/src/routes',
      theme: '/src/theme',
      types: '/src/types',
      utils: "/src/utils",
      cypress: 'cypress',
      // Redux ?!?!
    },
  },
});
