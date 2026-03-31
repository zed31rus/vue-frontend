<script setup lang="ts">
  import useNotificationStore from './stores/notifications.store';
  import useTitleStore from './stores/title.store';

  const notificationStore = useNotificationStore();

  const titleStore = useTitleStore();
  titleStore.init();

</script>

<template>
    <RootSideBar/>
    <RootNotifications/>
    <NuxtLayout>
        <NuxtPage/>
    </NuxtLayout>
</template>