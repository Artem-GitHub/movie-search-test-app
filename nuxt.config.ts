// https://nuxt.com/docs/api/configuration/nuxt-config
import eslintPlugin from 'vite-plugin-eslint'

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@/assets/styles/index.sass',
  ],
  modules: [
    '@nuxtjs/i18n',
    '@pinia/nuxt',
  ],
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en.json',
      },
      {
        code: 'uk',
        file: 'uk.json',
      },
      {
        code: 'ru',
        file: 'ru.json',
      },
    ],
    lazy: false,
    langDir: 'locales/',
    defaultLocale: 'en',
  },
  vite: {
    plugins: [
      eslintPlugin(),
    ],
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: `@use "@/assets/styles/imports/_index.sass" as *\n`,
        },
      },
    },
  },
  devServer: {
    port: 3000,
  },
  runtimeConfig: {
    public: {
      VITE_BASE_API_URL: process.env.VITE_BASE_API_URL,
      VITE_EXTERNAL_API_URL: process.env.VITE_EXTERNAL_API_URL,
    },
    VITE_SECRET_API_KEY: process.env.VITE_SECRET_API_KEY,
    VITE_SECRET_API_TOKEN: process.env.VITE_SECRET_API_TOKEN,
  },
  typescript: {
    typeCheck: true,
    strict: true,
  },
  app: {
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap',
        },
      ],
    },
  },
})
