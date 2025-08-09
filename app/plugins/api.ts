export default defineNuxtPlugin({
  setup() {
    const api = $fetch.create({
      baseURL: '/',
    })

    return {
      provide: {
        api,
      },
    }
  },
})
