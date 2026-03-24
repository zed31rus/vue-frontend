<script setup>
import { ref } from 'vue';
const mode = ref("login"); // 'login' или 'register'
</script>

<template>
  <div class="min-h-screen w-full flex items-center justify-center">
    <div class="w-full max-w-md bg-neutral-900/50 border border-white/5 backdrop-blur-2xl p-8 rounded-2xl shadow-2xl overflow-hidden relative">
      
      <Transition name="auth" mode="out-in">
        <AuthLogin 
          v-if="mode === 'login'" 
          :key="'login'"
          @switch="mode = 'register'" 
        />
        <AuthRegister 
          v-else
          :key="'register'"
          @switch="mode = 'login'" 
        />
      </Transition>

    </div>
  </div>
</template>

<style>

.auth-enter-active,
.auth-leave-active {
  transition: opacity 0.3s ease, transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.auth-enter-from {
  opacity: 0;
  transform: translateX(120%);
}

.auth-leave-to {
  opacity: 0;
  transform: translateX(-120%);
}
</style>