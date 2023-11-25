// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@formkit/nuxt',
    '@nuxtjs/supabase'
  ],
  supabase: {
    redirect: false
  }
})
