// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: {enabled: true},
  modules: ['@nuxt/content', '@unocss/nuxt', '@nuxtjs/color-mode'],
  css: ['@unocss/reset/tailwind.css', './app/assets/css/shiki.css'],

  // Vercel 정적 배포
  nitro: {
    preset: 'vercel-static',
  },

  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    classSuffix: '',
  },
  content: {
    build: {
      markdown: {
        highlight: {
          langs: ['ts', 'js', 'json', 'vue', 'bash'],
          theme: {
            default: 'github-light',
            dark: 'github-dark',
            light: 'github-light',
          },
        },
      },
    },
  },
})
