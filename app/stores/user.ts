export const useUserStore = defineStore('user', () => {
  const userInfo = ref({
    username: 'Li Xiaolong',
    email: 'im.xlsama@gmail.com',
  })

  return { userInfo }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
