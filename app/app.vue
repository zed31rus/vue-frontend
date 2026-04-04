<script setup lang="ts">
  import useBgStore from './stores/bg.store';
import useNotificationStore from './stores/notifications.store';
  import useTitleStore from './stores/title.store';

  const bgStore = useBgStore();
  bgStore.init();
  const bg = bgStore.bg

  const titleStore = useTitleStore();
  titleStore.init();


</script>

<template>
    <div :class="`bg-[${bgStore.bg}]`">
    <RootSideBar/>
    <RootNotifications/>
    <NuxtLayout>
        <NuxtPage/>
    </NuxtLayout>
    </div>
</template>