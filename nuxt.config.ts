// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@formkit/nuxt',
    '@nuxt/ui',
    '@nuxtjs/supabase'
  ],
  supabase: {
    redirect: false
  },
  colorMode: {
    preference: 'light'
  }
})
