export default defineNuxtPlugin({
  setup() {
    const { apiBaseUrl } = useRuntimeConfig().public

    const api = $fetch.create({
      baseURL: apiBaseUrl,
    })

    return {
      provide: {
        api,
      },
    }
  },
})
