import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from '@astrojs/react';
//import vercel from '@astrojs/vercel/serverless';
import vercel from '@astrojs/vercel';
export default defineConfig({
  integrations: [tailwind(), sitemap(), react()],
  output: 'server',
  adapter: vercel(),
});


