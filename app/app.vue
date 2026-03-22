<script setup lang="ts">
  import useDynamicTitle from './composable/title';

  useDynamicTitle();
</script>

<template>
    <RootSideBar/>
    <RootNotifications/>
    <NuxtLayout>
        <NuxtPage/>
    </NuxtLayout>
</template>