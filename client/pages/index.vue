<!-- pages/index.vue -->
<template>
  <div class="p-8">
    <h1 class="text-2xl mb-4">Welcome</h1>
    <button
      v-if="!isAuth"
      @click="login"
      class="px-4 py-2 bg-blue-600 text-white rounded"
    >
      Google でログイン
    </button>

    <div v-else>
      <!-- ここで user.name / user.email を表示 -->
      <p>ようこそ、<strong>{{ user.name }}</strong> さん</p>
      <p>メールアドレス: <strong>{{ user.email }}</strong></p>
      <button
        @click="logout"
        class="mt-4 px-4 py-2 bg-red-500 text-white rounded"
      >
        ログアウト
      </button>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useAuth }      from '~/composables/useAuth'
import { useAuthStore } from '~/stores/auth'

const { login, logout }        = useAuth()
const { isAuthenticated: isAuth, user } = storeToRefs(useAuthStore())
</script>
