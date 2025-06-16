// middleware/auth.global.js
import { useAuthStore } from '~/stores/auth'
import { navigateTo }   from '#app'

export default defineNuxtRouteMiddleware((to) => {
  const store = useAuthStore()
  if (to.meta.requiresAuth && !store.isAuthenticated) {
    return navigateTo('/')
  }
})
