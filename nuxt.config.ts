// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', 'nuxt-marquee'],
  ui: {
    colorMode: false
  },
  plugins: ['~/plugins/swiper.client.js'],
  css: ["~/assets/css/main.css"],
})