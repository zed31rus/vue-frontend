<script setup>
  import { onMounted } from 'vue'
  import useSoundpadStore from './stores/soundpad.store';

  const soundpadStore = useSoundpadStore();

  onMounted(() => {
    soundpadStore.initSocket();
  })
</script>

<template>
  <NuxtLayout>
      <NuxtPage/>
  </NuxtLayout>
</template>