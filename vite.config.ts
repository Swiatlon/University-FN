import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgrPlugin({}), tsconfigPaths()],
  resolve: {
    alias: {
      components: '/src/components',
      features: '/src/features',
      assets: '/src/assets',
    },
  },
});
