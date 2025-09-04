export default defineNuxtPlugin({
  setup() {
    const { apiBase } = useRuntimeConfig().public

    const api = $fetch.create({
      baseURL: apiBase,
    })

    return {
      provide: {
        api,
      },
    }
  },
})
