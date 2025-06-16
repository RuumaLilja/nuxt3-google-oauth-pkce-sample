// client/nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2025-06-14',
  ssr: false,
  modules: [
    '@pinia/nuxt',
  ],
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:4000',
      googleClientId: process.env.NUXT_PUBLIC_GOOGLE_CLIENT_ID || '',
      callbackPath: '/auth/callback',
    }
  }
})
