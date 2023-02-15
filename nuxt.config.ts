export default defineNuxtConfig({
  routeRules: {
    '/**': { swr: true },
    '/dynamic': { swr: false, cache: false },  
    '/static': { static: true },  
  },
  runtimeConfig: {
    nitro: { envPrefix: 'VERCEL_' },
    region: process.env.VERCEL_REGION,
  },
})
