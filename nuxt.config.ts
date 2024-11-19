// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Pre:wght@400..700&family=Sour+Gummy:ital,wght@0,100..900;1,100..900&display=swap',
        },
      ],
    },
  },
});