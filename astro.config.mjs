import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://integr.example',
  output: 'static',
  build: { format: 'directory' }
});
