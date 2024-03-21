// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-purgecss',
  ],
  ssr: false,
  devtools: { enabled: false },
  purgecss: {
    enabled: true, // Always enable purgecss
    paths: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js'
    ],
  }
})
