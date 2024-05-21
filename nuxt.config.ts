// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const currentDir = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt'],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
  },
  tailwindcss: {
    cssPath: join(currentDir, './src/app/styles/tailwind.css'),
  },
  dir: {
    pages: './src/app/pages',
    layouts: './src/app/layouts',
    assets: './src/app/assets',
    middleware: './src/app/middleware',
    public: './src/app/public',
  },
  imports: {
    autoImport: false,
  },
  alias: {
    '@': fileURLToPath(new URL('./src', import.meta.url)),
    '@app': fileURLToPath(new URL('./src/app', import.meta.url)),
    '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
    '@widgets': fileURLToPath(new URL('./src/widgets', import.meta.url)),
    '@features': fileURLToPath(new URL('./src/features', import.meta.url)),
    '@entities': fileURLToPath(new URL('./src/entities', import.meta.url)),
    '@shared': fileURLToPath(new URL('./src/shared', import.meta.url)),
  },
});
