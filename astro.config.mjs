import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.integr.com.br',
  output: 'static',
  build: { format: 'directory' }
});
