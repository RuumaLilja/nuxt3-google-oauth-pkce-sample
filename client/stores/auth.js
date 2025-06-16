// stores/auth.js
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    accessToken: '',
    refreshToken: '',
    user: null
  }),
  getters: {
    isAuthenticated: state => !!state.accessToken
  },
  actions: {
    setTokens(tokens) {
      this.accessToken  = tokens.access_token
      this.refreshToken = tokens.refresh_token || ''
    },
    setUser(userInfo) {
      this.user = userInfo
    },
    clear() {
      this.accessToken = ''
      this.refreshToken = ''
      this.user = null
    }
  }
})
