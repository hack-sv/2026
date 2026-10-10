// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  base: '/2026',
  outDir: './dist/2026',
  // Astro 7 defaults to JSX whitespace stripping (`compressHTML: 'jsx'`),
  // which collapses the space between inline footer links. Keep the Astro 6
  // HTML-aware compressor so existing copy does not change.
  compressHTML: true,
});
