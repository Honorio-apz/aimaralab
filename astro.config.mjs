import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';
export default defineConfig({
  integrations: [tailwind(),  sitemap(), react()],
  output: 'server',
  adapter: vercel(),
});