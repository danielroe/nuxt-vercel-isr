export default defineEventHandler(event => {
  const config = useRuntimeConfig()

  return {
    region: config.region,
  }
})
