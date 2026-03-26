<script setup lang="ts">
  import DynamicTitle from './composable/title';
import useNotificationStore from './stores/notifications.store';

  const notificationStore = useNotificationStore();

  const dynamicTitle = new DynamicTitle(notificationStore);
  dynamicTitle.init();

</script>

<template>
    <RootSideBar/>
    <RootNotifications/>
    <NuxtLayout>
        <NuxtPage/>
    </NuxtLayout>
</template>