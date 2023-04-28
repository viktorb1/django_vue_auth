import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const auth = ref(false)

  const setAuth = (val: boolean) => {
    auth.value = val
  }

  return { auth, setAuth }
})
