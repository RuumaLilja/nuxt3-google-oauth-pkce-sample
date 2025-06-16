<!-- client/pages/auth/callback.vue -->
<template>
  <div class="p-8">認証中…</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
const { handleCallback } = useAuth()
onMounted(() => {
  handleCallback().catch((e) => {
    console.error(e)
    // エラー時はトップへ戻す
    navigateTo('/')
  })
})
</script>
