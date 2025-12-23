export const useAppStore = defineStore('app', () => {
  const user = ref({
    username: 'Li Xiaolong',
    email: 'im.xlsama@gmail.com',
  })

  return { user }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
}
