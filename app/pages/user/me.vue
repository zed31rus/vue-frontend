<script setup lang="ts">
import useTitleStore from '~/stores/title.store';


    const titleStore = useTitleStore();
    titleStore.setCurrentPageTitle('Me')


    const userStore = useUserStore();
    const user = userStore.user;
</script>
<template>
    <p>
        {{ user?.login }}
        {{ user?.email }}
        {{ user?.nickname }}
    </p>
</template>