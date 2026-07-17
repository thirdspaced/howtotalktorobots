import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.talktorobots.org',
  integrations: [sitemap()],
  trailingSlash: 'ignore',
  redirects: {
    // Preserve old Wix slugs -> new homes (static meta-refresh pages)
    '/prompts': '/library',
    '/socraticai': '/peerbot',
  },
});
