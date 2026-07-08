import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  site: 'https://fahmialfatah99-cmd.github.io',
  base: '/alfa',
  build: {
    format: 'directory',
  },
  vite: {
    ssr: {
      noExternal: ['@fontsource/inter', '@fontsource/space-grotesk'],
    },
  },
});
