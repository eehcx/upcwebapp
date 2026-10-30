import path from 'path'
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from "@astrojs/vercel/serverless";

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: "server", // porque usas SSR
  // Bienvenida y Antecedentes se reemplazaron por /conocenos
  redirects: {
    "/bienvenida": "/conocenos#mensaje",
    "/antecedentes": "/conocenos#historia",
  },
  adapter: vercel(),
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