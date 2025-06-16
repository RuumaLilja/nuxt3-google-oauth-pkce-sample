// composables/useAuth.js
import { useNuxtApp, navigateTo } from '#app'
import { useAuthStore }               from '~/stores/auth'

export function useAuth() {
  const { $oidcManager: mgr } = useNuxtApp()
  const store                = useAuthStore()
  const { apiBase }          = useRuntimeConfig().public

  const login = () => mgr.signinRedirect()

  const handleCallback = async () => {
    const user   = await mgr.signinCallback()
    store.setTokens({ access_token: user.access_token, refresh_token: user.refresh_token })
    store.setUser(user.profile)
    const userInfo = await $fetch('/auth/userinfo', {
      baseURL: apiBase,
      headers: { Authorization: `Bearer ${store.accessToken}` }
    })
    store.setUser(userInfo)
    await navigateTo('/')
  }

  const logout = () => {
    store.clear()
    mgr.signoutRedirect()
  }

  return { login, handleCallback, logout }
}
