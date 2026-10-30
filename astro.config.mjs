import path from 'path'
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: "server", // porque usas SSR
  adapter: cloudflare(),
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }), 
  react()
  ],
    vite: {
      resolve: {
        alias: {
            "@": path.resolve("./src"),
        }
      }
  },
});