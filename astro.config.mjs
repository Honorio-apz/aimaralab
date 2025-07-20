import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from '@astrojs/react';
import.meta.env;
export default defineConfig({
  site: 'https://lexingtonthemes.com',
  integrations: [tailwind(),  sitemap(), react()],
  output: 'server',
});