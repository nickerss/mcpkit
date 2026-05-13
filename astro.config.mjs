import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://mcpkit.run',
  output: 'server',
  adapter: cloudflare({
    platformProxy: {
      enabled: false,
    },
  }),
  integrations: [
    tailwind(),
  ],
});
