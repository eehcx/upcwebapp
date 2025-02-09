import path from 'path'
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import pdf from 'astro-pdf';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }), 
  react(), pdf()
  ],
    vite: {
      resolve: {
        alias: {
            "@": path.resolve("./src"),
        }
      }
  },
});