// @ts-check
import { defineConfig } from 'astro/config';

// Detect whether building on GitHub Actions or Vercel / other hosts
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: isGitHubActions ? 'https://thestevendog.github.io' : 'https://vercel.app',
  base: isGitHubActions ? '/Portafolio' : '/'
});
