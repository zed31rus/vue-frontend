<script setup lang="ts">
  import { onMounted } from 'vue'
  import useSoundpadStore from './stores/soundpad.store';

  const soundpadStore = useSoundpadStore();

  onMounted(() => {
    soundpadStore.initSocket();
  })
</script>

<template>
  <RootSideBar/>
  <RootNotifications/>
  <NuxtLayout class="w-screen h-screen">
      <NuxtPage class="w-screen h-screen"/>
  </NuxtLayout>
</template>