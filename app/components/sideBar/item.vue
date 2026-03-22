<script setup>
    import { Icon } from '@iconify/vue';

    const { path, icon, name, position } = defineProps({
        path: String,
        icon: String,
        name: String,
        position: String
    })
</script>

<template>
    <li :class="['opacity-0', position == 'bottom' ? 'mt-auto' : '']">
        <NuxtLink :to="path" class="flex items-center gap-3 p-2 hover:bg-neutral-800/70 rounded-md transition-colors">
            <Icon :icon="icon" :ssr="true" class="text-xl" />
            <span>{{ name }}</span>
        </NuxtLink>
    </li>
</template>