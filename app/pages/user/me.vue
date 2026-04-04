<script setup lang="ts">
    import useTitleStore from '~/stores/title.store';
    import { useUserStore } from '#imports';

    const userStore = useUserStore();

    const titleStore = useTitleStore();
    titleStore.setCurrentPageTitle('Me')

</script>
<template>
    <div class="bg-neutral-900/50 rounded-2xl ">

    </div>
</template>