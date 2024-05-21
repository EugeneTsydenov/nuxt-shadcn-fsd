// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt"],
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
    public: './src/app/public'
  },
  imports: {
    autoImport: false
  },
})
